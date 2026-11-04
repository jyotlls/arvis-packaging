import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

type HeaderProps = {
  activePage?: "about" | "catalogue" | "blog" | "contact" | "export";
  isSticky: boolean;
  menuOpen: boolean;
  megaOpen: boolean;
  translateOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onToggleTranslate: () => void;
  onOpenQuote: () => void;
  onMegaOpen: () => void;
  onMegaClose: () => void;
};

export default function Header({
  activePage,
  isSticky,
  menuOpen,
  megaOpen,
  translateOpen,
  onToggleMenu,
  onCloseMenu,
  onToggleTranslate,
  onOpenQuote,
  onMegaOpen,
  onMegaClose,
}: HeaderProps) {
  return (
    <header className={`site-header ${isSticky ? "is-visible" : ""} ${menuOpen ? "open" : ""}`} id="top">
      <Link className="brand" href="/" aria-label="Arvis Packaging home" onClick={onCloseMenu}>
        <img src="/assets/arvis-logo.png" alt="Arvis Packaging" width={160}  />
      </Link>

      <nav className="desktop-nav" id="primary-navigation" aria-label="Primary navigation">
        <Link
          href="/about"
          className="nav-link"
          aria-current={activePage === "about" ? "page" : undefined}
          onClick={onCloseMenu}
        >
          About Us
        </Link>

        <MegaMenu
          megaOpen={megaOpen}
          onMouseEnter={onMegaOpen}
          onMouseLeave={onMegaClose}
          onNavigate={onCloseMenu}
        />

        <Link
          href="/catalogue"
          className="nav-link"
          aria-current={activePage === "catalogue" ? "page" : undefined}
          onClick={onCloseMenu}
        >
          Catalogue
        </Link>
        <Link
          href="/blog"
          className="nav-link"
          aria-current={activePage === "blog" ? "page" : undefined}
          onClick={onCloseMenu}
        >
          Blogs
        </Link>
        <Link
          href="/export"
          className="nav-link"
          aria-current={activePage === "export" ? "page" : undefined}
          onClick={onCloseMenu}
        >
          Export
        </Link>
        <Link
          href="/contact"
          className="nav-link"
          aria-current={activePage === "contact" ? "page" : undefined}
          onClick={onCloseMenu}
        >
          Contact Us
        </Link>
      </nav>

      <div className="header-tools">
        <div className="">
          <button
            type="button"
            className="language-trigger google_box"
            aria-label="Select language"
            aria-expanded={translateOpen}
            aria-controls="google_translate_element"
            onClick={onToggleTranslate}
          >
            <Languages size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <div id="google_translate_element" className={`google-translate ${translateOpen ? "open" : ""}`} />
        </div>
      </div>

      <button
        type="button"
        className="header-cta quote-trigger"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onCloseMenu();
          onOpenQuote();
        }}
      >
        Request a Quote <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
      </button>

      <button
        type="button"
        className="menu-button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={onToggleMenu}
      >
        {menuOpen ? <X size={24} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={24} strokeWidth={1.8} aria-hidden="true" />}
      </button>
    </header>
  );
}
