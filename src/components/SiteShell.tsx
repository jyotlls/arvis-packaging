"use client";

import { useEffect, useState, type ReactNode } from "react";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";
import Header from "./Header";
import QuoteModal from "./QuoteModal";

type SiteShellProps = {
  activePage?: "about" | "catalogue" | "blog" | "contact" | "export";
  children: (api: { openQuote: () => void }) => ReactNode;
};

/* Header, footer, quote modal and floating actions shared by inner pages,
   with the same sticky / mobile-menu / translate behaviour as the homepage. */
export default function SiteShell({ activePage, children }: SiteShellProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [translateOpen, setTranslateOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the page behind the full-screen mobile menu from scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Drop back to the desktop layout cleanly when the viewport grows or rotates.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 992px)");
    const handleChange = () => {
      if (desktop.matches) {
        setMenuOpen(false);
        setMegaOpen(false);
      }
    };
    handleChange();
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const w = window as typeof window & {
      googleTranslateElementInit?: () => void;
      google?: {
        translate?: {
          TranslateElement?: new (
            options: { pageLanguage: string; layout: number },
            elementId: string,
          ) => void;
          InlineLayout?: {
            VERTICAL?: number;
          };
        };
      };
    };

    // Google calls this once its widget code has finished loading.
    w.googleTranslateElementInit = () => {
      const googleTranslate = w.google?.translate;
      const container = document.getElementById("google_translate_element");
      if (!googleTranslate?.TranslateElement || !container || container.childElementCount) return;

      try {
        new googleTranslate.TranslateElement(
          {
            pageLanguage: "en",
            layout: googleTranslate.InlineLayout?.VERTICAL ?? 0,
          },
          "google_translate_element",
        );
      } catch (error) {
        console.warn("Google Translate setup failed", error);
      }
    };

    // Load the script only once (effects run twice in dev Strict Mode).
    if (document.getElementById("google-translate-script")) {
      w.googleTranslateElementInit();
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => console.warn("Google Translate script failed to load");
    document.body.appendChild(script);
  }, []);

  // Show the language dropdown as an already-open list, and close it once a language is picked.
  useEffect(() => {
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (!combo) return;

    combo.size = translateOpen ? 12 : 0;
    if (!translateOpen) return;

    combo.focus();
    const close = () => setTranslateOpen(false);
    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".google-translate, .language-trigger")) close();
    };

    combo.addEventListener("change", close);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      combo.removeEventListener("change", close);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [translateOpen]);

  const openQuote = () => setQuoteOpen(true);

  return (
    <>
      <Header
        activePage={activePage}
        isSticky={isSticky}
        menuOpen={menuOpen}
        megaOpen={megaOpen}
        translateOpen={translateOpen}
        onToggleMenu={() => {
          setMegaOpen(false);
          setMenuOpen((prev) => !prev);
        }}
        onCloseMenu={() => {
          setMenuOpen(false);
          setMegaOpen(false);
        }}
        onToggleTranslate={() => setTranslateOpen((prev) => !prev)}
        onOpenQuote={openQuote}
        onMegaOpen={() => setMegaOpen(true)}
        onMegaClose={() => setMegaOpen(false)}
      />

      {children({ openQuote })}

      <Footer />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <FloatingActions />
    </>
  );
}
