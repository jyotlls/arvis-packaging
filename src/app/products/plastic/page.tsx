import type { Metadata } from "next";
import ProductListPage from "../../../components/products/ProductListPage";
import { PLASTIC_PRODUCTS } from "../../../data/materialProducts";
import "../products.css";

const TITLE = "Plastic Products";
const DESCRIPTION =
  "Browse Arvis Packaging plastic products, including clear PET cups in sizes from 6 oz to 24 oz.";
const BANNER = "/assets/banner/plastic-banner.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products/plastic" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/products/plastic",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [{ url: BANNER, alt: "Arvis Packaging plastic products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [BANNER],
  },
};

export default function PlasticProducts() {
  return (
    <ProductListPage
      title={TITLE}
      banner={BANNER}
      eyebrow="OUR PLASTIC RANGE"
      heading="Plastic Packaging"
      headingAccent="for Everyday Applications"
      intro="Open any product to see its sizes, case packs and shipping details."
      basePath="/products/plastic"
      products={PLASTIC_PRODUCTS}
    />
  );
}
