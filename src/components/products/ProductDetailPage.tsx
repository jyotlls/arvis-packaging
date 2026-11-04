"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bike,
  Coffee,
  LayoutGrid,
  MoveRight,
  Package,
  Palette,
  PartyPopper,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { CatalogueProduct } from "../../data/paperProducts";
import type { RelatedProduct } from "../../data/relatedProducts";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";

/* sizes listed beside the photo; the rest are in the tables below */
const SIZES_SHOWN = 8;

/* shared by every material range: paper, plastic, bagasse and aluminum */
const FEATURES: { title: string; text: string; Icon: LucideIcon }[] = [
  {
    title: "Reliable Quality",
    text: "Manufactured with attention to quality, consistency, and everyday functionality.",
    Icon: ShieldCheck,
  },
  {
    title: "Multiple Sizes",
    text: "Available in a variety of sizes and formats to accommodate different packaging requirements.",
    Icon: Ruler,
  },
  {
    title: "Customization Options",
    text: "Selected products offer printing, branding, and customization options based on business needs.",
    Icon: Palette,
  },
  {
    title: "Versatile Applications",
    text: "Suitable for a wide range of food service, retail, commercial, and industrial packaging applications.",
    Icon: LayoutGrid,
  },
];

/* same names as the applications section on the home page */
const APPLICATIONS: { label: string; Icon: LucideIcon }[] = [
  { label: "Restaurants", Icon: UtensilsCrossed },
  { label: "Cafe & Bakery", Icon: Coffee },
  { label: "Food Delivery", Icon: Bike },
  { label: "Retail", Icon: ShoppingBag },
  { label: "E-Commerce", Icon: Package },
  { label: "Catering & Events", Icon: PartyPopper },
];

type ProductDetailPageProps = {
  product: CatalogueProduct;
  banner: string;
  /* the range this product belongs to, for the breadcrumb */
  range: { label: string; href: string };
  related: RelatedProduct[];
};

/* One product: photo and summary, then its size tables as printed in the catalogue. */
export default function ProductDetailPage({ product, banner, range, related }: ProductDetailPageProps) {
  /* first column of each table; the same size can appear in several tables */
  const sizes = [...new Set(product.tables.flatMap((table) => table.rows.map((row) => row[0])))];

  return (
    <SiteShell>
      {({ openQuote }) => (
        <main>
          {/* PAGE BANNER */}
          <PageBanner
            title={product.title}
            image={banner}
            trail={[range, { label: product.title }]}
            variant="article"
          />

          {/* PRODUCT */}
          <section className="pd-intro" aria-label="Product overview">
            <div className="pd-img">
              <Image
                src={product.image}
                alt={product.alt}
                width={640}
                height={480}
                sizes="(min-width: 992px) 44vw, 92vw"
                priority
              />
            </div>

            <div className="pd-copy">
              <h2 className="pd-name">{product.title}</h2>

              {product.options && (
                <dl className="pd-options">
                  {product.options.map((option) => (
                    <div key={option.label}>
                      <dt>{option.label}</dt>
                      <dd>{option.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {sizes.length > 0 && (
                <div className="pd-sizes">
                  <p className="pd-sizes-title">Available Sizes</p>
                  <ul>
                    {sizes.slice(0, SIZES_SHOWN).map((size) => (
                      <li key={size}>{size}</li>
                    ))}
                  </ul>
                  <a className="pd-sizes-link" href="#pd-specs-title">
                    {sizes.length > SIZES_SHOWN
                      ? `+${sizes.length - SIZES_SHOWN} more sizes & case packs`
                      : "View case packs"}
                  </a>
                </div>
              )}

              {product.note && <p className="pd-note">{product.note}</p>}

              <div className="pd-actions">
                <button className="button primary" type="button" onClick={openQuote}>
                  Request a Quote
                </button>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="pd-features" aria-labelledby="pd-features-title">
            <div className="pd-features-head">
              <p className="eyebrow">
                <span className="brand-lines"></span>
                KEY FEATURES
              </p>
              <h2 id="pd-features-title">
                Built for
                <em> Reliable Performance</em>
              </h2>
            </div>

            <ul>
              {FEATURES.map(({ title, text, Icon }) => (
                <li key={title}>
                  <span className="pd-features-icon">
                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* SPECIFICATIONS */}
          {product.tables.length > 0 && (
            <section className="pd-specs" aria-labelledby="pd-specs-title">
              <p className="eyebrow">
                <span className="brand-lines"></span>
                PRODUCT SPECIFICATIONS
              </p>
              <h2 id="pd-specs-title">
                Available Sizes &amp;
                <em> Packaging Details</em>
              </h2>

              {product.tables.map((table) => (
                <div className="pd-table-block" key={table.title}>
                  {/* the title only tells tables apart; a single table sits under the product name */}
                  {product.tables.length > 1 && <h3>{table.title}</h3>}
                  <div className="pd-table-scroll">
                    <table className="pd-table">
                      <thead>
                        <tr>
                          {table.columns.map((column) => (
                            <th key={column} scope="col">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) => (
                              <td key={table.columns[i]}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* APPLICATIONS */}
          <section className="pd-apps" aria-labelledby="pd-apps-title">
            <div className="pd-apps-head">
              <p className="eyebrow">
                <span className="brand-lines"></span>
                WHERE IT IS USED
              </p>
              <h2 id="pd-apps-title">
                Serving Industries <br />
                <em>With Better Packaging</em>
              </h2>
            </div>

            <ul>
              {APPLICATIONS.map(({ label, Icon }) => (
                <li key={label}>
                  <span className="pd-apps-icon">
                    <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </section>

          {/* RELATED PRODUCTS */}
          {related.length > 0 && (
            <section className="pd-related" aria-labelledby="pd-related-title">
              <div className="pd-related-head">
                <h2 id="pd-related-title">
                  Related
                  <em> Products</em>
                </h2>
              </div>

              <ul className="pl-grid">
                {related.map((item) => (
                  <li key={item.href}>
                    {/* placeholder link for now; switch back to item.href when the product pages go live */}
                    <Link className="pl-card" href="#">
                      <div className="pl-card-img">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={640}
                          height={480}
                          sizes="(min-width: 1200px) 21vw, (min-width: 640px) 44vw, 92vw"
                        />
                      </div>

                      <div className="pl-card-body">
                        <h3>{item.title}</h3>
                        <span className="pl-link">
                          View more <MoveRight size={18} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      )}
    </SiteShell>
  );
}
