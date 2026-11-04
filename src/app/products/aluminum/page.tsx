import type { Metadata } from "next";
import ProductListPage from "../../../components/products/ProductListPage";
import { ALUMINUM_PRODUCTS } from "../../../data/materialProducts";
import "../products.css";

const TITLE = "Aluminum Products";
const DESCRIPTION =
  "Browse Arvis Packaging aluminum products, including foil rolls in 12 in and 18 in widths.";
const BANNER = "/assets/banner/aluminum-banner.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products/aluminum" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/products/aluminum",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [{ url: BANNER, alt: "Arvis Packaging aluminum products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [BANNER],
  },
};

export default function AluminumProducts() {
  return (
    <ProductListPage
      title={TITLE}
      banner={BANNER}
      eyebrow="OUR ALUMINUM RANGE"
      heading="Aluminum Packaging"
      headingAccent="for Food Storage and Serving"
      intro="Open any product to see its sizes, case packs and shipping details."
      basePath="/products/aluminum"
      products={ALUMINUM_PRODUCTS}
    />
  );
}
