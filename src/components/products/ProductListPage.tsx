"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import type { CatalogueProduct } from "../../data/paperProducts";
import { megaMenuItems } from "../MegaMenu";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";

type ProductListPageProps = {
  title: string;
  banner: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  intro: string;
  /* route of this range; each product's detail page sits under it */
  basePath: string;
  products: CatalogueProduct[];
};

/* Product range page: one card per product, each linking to its detail page. */
export default function ProductListPage({
  title,
  banner,
  eyebrow,
  heading,
  headingAccent,
  intro,
  basePath,
  products,
}: ProductListPageProps) {
  return (
    <SiteShell>
      {({ openQuote }) => (
        <main>
          {/* PAGE BANNER */}
          <PageBanner title={title} image={banner} />

          {/* PRODUCT LIST */}
          <section className="pl-section" aria-labelledby="pl-title">
            <div className="pl-layout">
              {/* CATEGORY SIDEBAR: ranges without a page yet ("#") stay unclickable */}
              <nav className="pl-cats" aria-labelledby="pl-cats-title">
                <p className="pl-cats-title" id="pl-cats-title">
                  Categories
                </p>

                <ul>
                  {megaMenuItems.map((item) => (
                    <li key={item.id}>
                      {item.href === "#" ? (
                        <span className="pl-cat is-disabled" aria-disabled="true">
                          {item.title}
                        </span>
                      ) : (
                        <Link
                          className={`pl-cat${item.href === basePath ? " is-active" : ""}`}
                          href={item.href}
                          aria-current={item.href === basePath ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pl-main">
                <div className="pl-head">
                  <p className="eyebrow">
                    <span className="brand-lines"></span>
                    {eyebrow}
                  </p>
                  <h2 id="pl-title">
                    {heading} <br />
                    <em>{headingAccent}</em>
                  </h2>
                </div>

                <ul className="pl-grid">
                  {products.map((product) => (
                    <li key={product.slug}>
                      <Link className="pl-card" href={`${basePath}/${product.slug}`}>
                        <div className="pl-card-img">
                          <Image
                            src={product.image}
                            alt={product.alt}
                            width={640}
                            height={480}
                            sizes="(min-width: 1200px) 22vw, (min-width: 992px) 30vw, (min-width: 640px) 46vw, 92vw"
                          />
                        </div>

                        <div className="pl-card-body">
                          <h3>{product.title}</h3>
                          <span className="pl-link">
                            View more <MoveRight size={18} strokeWidth={1.8} aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </main>
      )}
    </SiteShell>
  );
}
