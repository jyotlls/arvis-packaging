import Image from "next/image";
import Link from "next/link";
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

export const megaMenuItems: MegaMenuItem[] = [

  {
    id: "paper",
    title: "Paper",
    href: "/products/paper",
    image: "/assets/menu/paper-n.webp",
    alt: "Paper packaging products",
  },
  {
    id: "plastic",
    title: "Plastic",
    href: "/products/plastic",
    image: "/assets/menu/plastic-n.webp",
    alt: "Plastic packaging products",
  },
  {
    id: "bagasse",
    title: "Molded Fiber - Bagasse",
    href: "/products/bagasse",
    image: "/assets/menu/bagasee-n.webp",
    alt: "Bagasse packaging products",
  },
  {
    id: "aluminum",
    title: "Aluminum",
    href: "/products/aluminum",
    image: "/assets/menu/aluminum-n.webp",
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
            <Link key={item.id} className="mega-product" href={item.href} onClick={onNavigate}>
              <img src={item.image} alt={item.alt} className="img-fluid" />
              <div className="mega-copy">
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
