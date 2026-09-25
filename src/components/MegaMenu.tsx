import Image from "next/image";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: string;
  title: string;
  href: string;
  image: string;
  alt: string;
};

type MegaMenuProps = {
  megaOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: () => void;
};

const megaMenuItems: MegaMenuItem[] = [
  {
    id: "paper",
    title: "Paper",
    href: "#",
    image: "/assets/menu/paper.webp",
    alt: "Paper packaging products",
  },
  {
    id: "plastic",
    title: "Plastic",
    href: "#",
    image: "/assets/menu/pastic.webp",
    alt: "Plastic packaging products",
  },
  {
    id: "bagasse",
    title: "Bagasse",
    href: "#",
    image: "/assets/menu/bagasee.webp",
    alt: "Bagasse packaging products",
  },
  {
    id: "aluminum",
    title: "Aluminum",
    href: "#",
    image: "/assets/menu/aluminum.webp",
    alt: "Aluminum packaging products",
  },
];

export default function MegaMenu({ megaOpen, onMouseEnter, onMouseLeave, onNavigate }: MegaMenuProps) {
  return (
    <div
      className={`nav-item has-megamenu ${megaOpen ? "open" : ""}`}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="nav-trigger"
        type="button"
        aria-expanded={megaOpen}
        aria-controls="products-mega-menu"
        onMouseEnter={onMouseEnter}
        onClick={() => (megaOpen ? onMouseLeave() : onMouseEnter())}
      >
        Products <ChevronDown className="caret" size={17} strokeWidth={1.8} aria-hidden="true" />
      </button>

      <div
        className="mega-menu"
        id="products-mega-menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="mega-inner">
          {megaMenuItems.map((item) => (
            <a key={item.id} className="mega-product" href={item.href} onClick={onNavigate}>
              <Image src={item.image} alt={item.alt} width={390} height={210} />
              <div className="mega-copy">
                <h3>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
