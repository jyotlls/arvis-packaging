import type { Metadata } from "next";
import ProductListPage from "../../../components/products/ProductListPage";
import { PAPER_PRODUCTS } from "../../../data/paperProducts";
import "../products.css";

const TITLE = "Paper Products";
const DESCRIPTION =
  "Browse Arvis Packaging paper products: paper bags, mailers, food trays, deli sheets, tableware, cutlery, cups, containers, salad bowls, pizza boxes, straws and bespoke packaging.";
const BANNER = "/assets/banner/paper-banner.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products/paper" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/products/paper",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [{ url: BANNER, alt: "Arvis Packaging paper products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [BANNER],
  },
};

export default function PaperProducts() {
  return (
    <ProductListPage
      title={TITLE}
      banner={BANNER}
      eyebrow="OUR PAPER RANGE"
      heading="Paper Packaging"
      headingAccent="for Every Business Need"
      intro="From carry bags and mailers to cups, containers and bespoke boxes. Open any product to see its sizes, case packs and shipping details."
      basePath="/products/paper"
      products={PAPER_PRODUCTS.slice(0, 4)}
    />
  );
}
