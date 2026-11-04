"use client";

import { useEffect } from "react";

type TranslateWindow = typeof window & {
  googleTranslateElementInit?: () => void;
  google?: {
    translate?: {
      TranslateElement?: new (
        options: { pageLanguage: string; autoDisplay: boolean },
        elementId: string,
      ) => void;
    };
  };
};

/* Google Translate wraps text nodes in <font> tags, so React later tries to remove or insert
   around nodes that are no longer where it left them and throws. Skip those calls instead. */
function guardReactAgainstTranslate() {
  const proto = Node.prototype as Node & { __translateGuard?: boolean };
  if (proto.__translateGuard) return;
  proto.__translateGuard = true;

  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };

  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

/* Loads Google's translate engine once for the whole site. It lives in the root layout, so it
   survives page navigation; the visible picker is LanguageSwitcher, which drives the hidden combo. */
export default function GoogleTranslate() {
  useEffect(() => {
    guardReactAgainstTranslate();

    const w = window as TranslateWindow;

    // Google calls this once its widget code has finished loading.
    w.googleTranslateElementInit = () => {
      const TranslateElement = w.google?.translate?.TranslateElement;
      const container = document.getElementById("google_translate_element");
      if (!TranslateElement || !container || container.childElementCount) return;

      try {
        new TranslateElement({ pageLanguage: "en", autoDisplay: false }, "google_translate_element");
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

  return <div id="google_translate_element" className="google-translate-engine" aria-hidden="true" />;
}
