"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CupSoda, Download, Eye, Layers, Leaf, ShoppingBag, type LucideIcon } from "lucide-react";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";

const CATALOGUE = {
  title: "Arvis Packaging Product Catalogue",
  file: "/assets/arvis-catalogue.pdf",
  downloadName: "Arvis-Packaging-Catalogue.pdf",
  cover: "/assets/catalogue/arvis-catalogue-cover-hd.webp",
  pages: 40,
  size: "2.8 MB",
};

const INSIDE: { title: string; href: string; Icon: LucideIcon }[] = [
  { title: "Paper", href: "/products/paper", Icon: ShoppingBag },
  { title: "Plastic", href: "/products/plastic", Icon: CupSoda },
  { title: "Molded Fiber – Bagasse", href: "/products/bagasse", Icon: Leaf },
  { title: "Aluminum", href: "/products/aluminum", Icon: Layers },
];

export default function CataloguePage() {
  return (
    <SiteShell activePage="catalogue">
      {() => (
        <main>
          {/* PAGE BANNER */}
          <PageBanner title="Catalogue" image="/assets/banner/catalog-banner.webp" trail={[{ label: "Catalogue" }]} />

          {/* CATALOGUE */}
          <section className="cg-book-section" aria-labelledby="cg-title">
            {/* the cover presented as a printed book with stacked page edges */}
            <a
              className="cg-book"
              href={CATALOGUE.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${CATALOGUE.title} (PDF, opens in a new tab)`}
            >
              <span className="cg-book-pages" aria-hidden="true" />
              <span className="cg-book-cover">
                <Image
                  src={CATALOGUE.cover}
                  alt={`Cover of the ${CATALOGUE.title}`}
                  width={1800}
                  height={1348}
                  sizes="(min-width: 992px) 46vw, 92vw"
                  priority
                  unoptimized
                />
              </span>
              <span className="cg-book-hint" aria-hidden="true">
                <Eye size={18} strokeWidth={1.8} /> Click to view
              </span>
            </a>

            <div className="cg-copy">
              <p className="eyebrow">
                <span className="brand-lines"></span>EXPLORE OUR COLLECTION
              </p>
              <h2 id="cg-title">
                Discover Our Packaging <br />
                <em>Product Catalogue</em>
              </h2>
              <p>
                Explore our complete range of paper, plastic, molded fiber, and aluminum packaging solutions.
                Browse product options, available sizes, and specifications to find the right packaging for
                your business.
              </p>

              <div className="cg-actions mt-4 pt-lg-3">
                <a className="button primary" href={CATALOGUE.file} target="_blank" rel="noopener noreferrer">
                  View catalogue <Eye size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
                <a className="button cg-download" href={CATALOGUE.file} download={CATALOGUE.downloadName}>
                  Download PDF <Download size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>

            </div>
          </section>

          {/* EXPLORE BY MATERIAL */}
          <section className="cg-inside" aria-labelledby="cg-inside-title">
            <div className="cg-inside-head">
              <p className="eyebrow">
                <span className="brand-lines"></span>EXPLORE BY MATERIAL
              </p>
              <h2 id="cg-inside-title">
                A World of Packaging <br />
                <em>All in One Place</em>
              </h2>
            </div>

            <ul className="cg-inside-grid">
              {INSIDE.map(({ title, href, Icon }) => (
                <li key={title}>
                  <Link className="cg-inside-tile" href={href}>
                    <Icon className="cg-inside-icon" size={84} strokeWidth={1} aria-hidden="true" />
                    <h3>{title}</h3>
                    <span className="cg-inside-go">
                      Explore Products
                      <i>
                        <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                      </i>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}
    </SiteShell>
  );
}
