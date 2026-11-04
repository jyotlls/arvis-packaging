"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { LANGUAGES, type Language } from "../data/languages";

const PAGE_LANGUAGE = "en";

function getComboBox() {
  return document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
}

// Google keeps the chosen language in a "googtrans" cookie shaped like "/en/fr".
function readCurrentLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  const code = match ? decodeURIComponent(match[1]).split("/")[2] : "";
  return code || PAGE_LANGUAGE;
}

// Google may set the cookie on the host or on a parent domain, so write/clear it on every level.
function cookieDomains() {
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);
  return domains;
}

function writeLanguageCookie(code: string) {
  const value = code === PAGE_LANGUAGE ? "" : `/${PAGE_LANGUAGE}/${code}`;
  const expiry = value ? "" : "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  for (const domain of cookieDomains()) {
    document.cookie = `googtrans=${value}; path=/${domain}${expiry}`;
  }
}

// Once Google's widget is ready, only offer languages it can actually translate to.
function availableLanguages(): Language[] {
  const combo = getComboBox();
  if (!combo || combo.options.length < 2) return LANGUAGES;

  const offered = new Map<string, string>();
  for (const option of Array.from(combo.options)) {
    if (option.value) offered.set(option.value, option.text);
  }
  const known = new Set(LANGUAGES.map((language) => language.code));
  const extras = [...offered]
    .filter(([code]) => !known.has(code))
    .map(([code, name]) => ({ code, name }));

  return [
    ...LANGUAGES.filter((language) => language.code === PAGE_LANGUAGE || offered.has(language.code)),
    ...extras,
  ].sort((a, b) => (a.code === PAGE_LANGUAGE ? -1 : b.code === PAGE_LANGUAGE ? 1 : a.name.localeCompare(b.name)));
}

/* Header language picker: a searchable list that drives Google's hidden translate combo
   (rendered by GoogleTranslate in the root layout). The choice is kept in Google's cookie,
   so it carries over to every page. */
export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(PAGE_LANGUAGE);
  const [languages, setLanguages] = useState<Language[]>(LANGUAGES);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Focus the search, bring the current language into view, and close on outside click / Escape.
  useEffect(() => {
    if (!open) return;

    searchRef.current?.focus();
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return languages;
    return languages.filter((language) => language.name.toLowerCase().includes(term));
  }, [languages, query]);

  const togglePanel = () => {
    if (!open) {
      setCurrent(readCurrentLanguage());
      setLanguages(availableLanguages());
    }
    setOpen(!open);
  };

  const chooseLanguage = (code: string) => {
    setOpen(false);
    setQuery("");
    if (code === current) return;

    setCurrent(code);
    writeLanguageCookie(code);

    // Going back to the original text, or translating before Google's widget is ready, needs a reload;
    // otherwise switch in place through Google's own combo.
    const combo = getComboBox();
    if (code === PAGE_LANGUAGE || !combo) {
      window.location.reload();
      return;
    }
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
  };

  return (
    <div className="language-switcher notranslate" ref={rootRef} translate="no">
      <button
        type="button"
        className="language-trigger google_box"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-panel"
        onClick={togglePanel}
      >
        <Languages size={18} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {open && (
        <div className="language-panel" id="language-panel">
          <p className="language-panel-title">Choose a language</p>
          <input
            ref={searchRef}
            type="search"
            className="language-search"
            placeholder="Search language"
            aria-label="Search language"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && filtered[0]) chooseLanguage(filtered[0].code);
            }}
          />
          <ul className="language-list" role="listbox" aria-label="Languages" ref={listRef}>
            {filtered.map((language) => (
              <li key={language.code} role="option" aria-selected={language.code === current}>
                <button
                  type="button"
                  className={`language-option ${language.code === current ? "active" : ""}`}
                  onClick={() => chooseLanguage(language.code)}
                >
                  {language.name}
                </button>
              </li>
            ))}
            {filtered.length === 0 && <li className="language-empty">No language found</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
