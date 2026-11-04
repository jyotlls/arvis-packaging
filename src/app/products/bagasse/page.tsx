import type { Metadata } from "next";
import ProductListPage from "../../../components/products/ProductListPage";
import { BAGASSE_PRODUCTS } from "../../../data/materialProducts";
import "../products.css";

const TITLE = "Bagasse Products";
const DESCRIPTION =
  "Browse Arvis Packaging molded fiber bagasse products, including round plates, compartment plates and rectangular trays.";
const BANNER = "/assets/banner/bagasse-banner.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products/bagasse" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/products/bagasse",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [{ url: BANNER, alt: "Arvis Packaging bagasse products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [BANNER],
  },
};

export default function BagasseProducts() {
  return (
    <ProductListPage
      title={TITLE}
      banner={BANNER}
      eyebrow="OUR BAGASSE RANGE"
      heading="Bagasse Packaging"
      headingAccent="for Sustainable Food Service"
      intro="Open any product to see its sizes, case packs and shipping details."
      basePath="/products/bagasse"
      products={BAGASSE_PRODUCTS}
    />
  );
}
