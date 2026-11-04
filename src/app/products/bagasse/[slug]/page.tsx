import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "../../../../components/products/ProductDetailPage";
import { BAGASSE_PRODUCTS } from "../../../../data/materialProducts";
import { getRelatedProducts } from "../../../../data/relatedProducts";
import { SITE_NAME } from "../../../../lib/site";
import "../../products.css";

const BANNER = "/assets/banner/bagasse-banner.webp";

// One static page per product.
export function generateStaticParams() {
  return BAGASSE_PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/products/bagasse/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = BAGASSE_PRODUCTS.find((item) => item.slug === slug);
  if (!product) return {};

  const image = { url: product.image, width: 640, height: 480, alt: product.alt };
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/bagasse/${product.slug}` },
    // openGraph is replaced (not merged) per page, so repeat the shared fields
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: `/products/bagasse/${product.slug}`,
      title: product.title,
      description: product.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function BagasseProduct(props: PageProps<"/products/bagasse/[slug]">) {
  const { slug } = await props.params;
  const product = BAGASSE_PRODUCTS.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <ProductDetailPage
      product={product}
      banner={BANNER}
      range={{ label: "Bagasse Products", href: "/products/bagasse" }}
      related={getRelatedProducts("/products/bagasse", slug)}
    />
  );
}
