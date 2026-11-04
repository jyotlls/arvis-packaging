import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Blogs", href: "/blog" },
  { label: "Export", href: "/export" },
  { label: "Contact Us", href: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "Paper", href: "/products/paper" },
  { label: "Plastic", href: "/products/plastic" },
  { label: "Molded Fiber - Bagasse", href: "/products/bagasse" },
  { label: "Aluminum", href: "/products/aluminum" },
];

const WAREHOUSES = [
  { city: "Mundra,", region: "Gujarat, India" },
  { city: "New Jersey,", region: "USA" },
  { city: "Atlanta,", region: "USA" },
  { city: "Texas,", region: "USA" },
];


export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-about">
          <Image
            className="footer-logo"
            src="/assets/arvis-logo.png"
            alt="Arvis Packaging"
            width={152}
            height={50}
          />
          <p>
           Arvis Packaging connects businesses with diverse packaging products through coordinated manufacturing, consolidation, warehousing, shipping, and distribution from India to international markets.
          </p>
   
        </div>

        <nav className="footer-col" aria-label="Quick links">
          <p className="footer-title">Quick links</p>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <ChevronRight className="footer-link-icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Products">
          <p className="footer-title">Products</p>
          <ul>
            {PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <ChevronRight className="footer-link-icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col footer-contact">
          <p className="footer-title">Contact</p>
          <div className="footer-address">
            <MapPin size={17} strokeWidth={1.7} aria-hidden="true" />
            <div>
              <strong>Arvis Packaging</strong>
              <a href="https://maps.app.goo.gl/KMseoyLKcvCvV2cf8" target="_blank" rel="noreferrer">
              <span>
                1,B, Kishan Corporation, 26-30, <br/>  National Highway, opp. Kuber Cinema,
               <br/> Morbi - 2, Morbi, Gujarat 363642
              </span>
</a>
              <div className="footer-warehouse">
                <small>Warehouses</small>
                <ul>
                  {WAREHOUSES.map((place) => (
                    <li key={place.city}>
                      <strong>{place.city}</strong>
                      <span>{place.region}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul className="footer-reach">
            <li>
              <Mail size={16} strokeWidth={1.7} aria-hidden="true" />
              <a href="mailto:sales@arvispackaging.com">sales@arvispackaging.com</a>
            </li>
          </ul>

          <ul className="footer-reach">
            <li>
              <Phone size={16} strokeWidth={1.7} aria-hidden="true" />
              <a href="tel:+918169604127">+91 81696 04127</a>
            </li>
            <li>
              <Phone size={16} strokeWidth={1.7} aria-hidden="true" />
              <a href="tel:+12035270992">+1 (203) 527 0992</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-credit">
          © 2026 Arvis Packaging | Designed &amp; Managed by:{" "}
          <a href="https://lightlinksolutions.com" target="_blank" rel="noreferrer">
            Lightlink Solutions
          </a>
        </span>
      </div>
    </footer>
  );
}
