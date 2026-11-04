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

  const openQuote = () => setQuoteOpen(true);

  return (
    <>
      <Header
        activePage={activePage}
        isSticky={isSticky}
        menuOpen={menuOpen}
        megaOpen={megaOpen}
        onToggleMenu={() => {
          setMegaOpen(false);
          setMenuOpen((prev) => !prev);
        }}
        onCloseMenu={() => {
          setMenuOpen(false);
          setMegaOpen(false);
        }}
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
