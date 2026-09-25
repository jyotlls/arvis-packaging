import Image from "next/image";
import { ArrowUp, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "About us", href: "#" },
  { label: "Products", href: "#" },
  { label: "Catalogue", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Export", href: "#" },
  { label: "Contact us", href: "#" },
];

const PRODUCT_LINKS = [
  { label: "Paper", href: "#" },
  { label: "Plastic", href: "#" },
  { label: "Bagasse", href: "#" },
  { label: "Aluminum", href: "#" },
];

const WAREHOUSES = [
  { city: "Mundra", region: "Gujarat, India" },
  { city: "Brunswick", region: "New Jersey, USA" },
  { city: "Simi Valley", region: "Los Angeles, USA" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.17-1.06.37-2.23.42-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.21-.96-.47-1.38-.89a3.8 3.8 0 0 1-.89-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.42-2.23.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.17 1.06-.37 2.23-.42C8.44 2.21 8.84 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.98-11.4a1.58 1.58 0 1 1-1.58-1.57 1.58 1.58 0 0 1 1.58 1.57Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.54-1.5h1.66V3.63A22.4 22.4 0 0 0 14.28 3.5c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.73v8h3.27Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z",
  },
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
            height={56}
          />
          <p>
           Arvis Packaging connects businesses with diverse packaging products through coordinated manufacturing, sourcing, consolidation, warehousing, shipping, and distribution from India to international markets.
          </p>
          <ul className="footer-social">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} aria-label={social.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-col" aria-label="Quick links">
          <h3>Quick links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <ChevronRight className="footer-link-icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Products">
          <h3>Products</h3>
          <ul>
            {PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <ChevronRight className="footer-link-icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col footer-contact">
          <h3>Contact</h3>
          <div className="footer-address">
            <MapPin size={17} strokeWidth={1.7} aria-hidden="true" />
            <div>
              <strong>Arvis Packaging</strong>
              <a href="https://maps.app.goo.gl/KMseoyLKcvCvV2cf8" target="_blank">
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
