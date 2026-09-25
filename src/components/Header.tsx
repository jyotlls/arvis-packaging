import Image from "next/image";
import { ArrowRight, Languages, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

type HeaderProps = {
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
      <a className="brand" href="#top" aria-label="Arvis Packaging home" onClick={onCloseMenu}>
        <Image src="/assets/arvis-logo.png" alt="Arvis Packaging" width={152} height={56} priority />
      </a>

      <nav className="desktop-nav" id="primary-navigation" aria-label="Primary navigation">
        <a href="#network" className="nav-link" onClick={onCloseMenu}>About us</a>

        <MegaMenu
          megaOpen={megaOpen}
          onMouseEnter={onMegaOpen}
          onMouseLeave={onMegaClose}
          onNavigate={onCloseMenu}
        />

        <a href="#" className="nav-link" onClick={onCloseMenu}>Catalogue</a>
        <a href="#" className="nav-link" onClick={onCloseMenu}>Blogs</a>
        <a href="#" className="nav-link" onClick={onCloseMenu}>Export</a>
        <a href="#" className="nav-link" onClick={onCloseMenu}>Contact us</a>
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
        Request a quote <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
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
