import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "../../../../components/products/ProductDetailPage";
import { PAPER_PRODUCTS, getPaperProduct } from "../../../../data/paperProducts";
import { getRelatedProducts } from "../../../../data/relatedProducts";
import { SITE_NAME } from "../../../../lib/site";
import "../../products.css";

const BANNER = "/assets/banner/paper-banner.webp";

// One static page per product.
export function generateStaticParams() {
  return PAPER_PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/products/paper/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getPaperProduct(slug);
  if (!product) return {};

  const image = { url: product.image, width: 640, height: 480, alt: product.alt };
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/paper/${product.slug}` },
    // openGraph is replaced (not merged) per page, so repeat the shared fields
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: `/products/paper/${product.slug}`,
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

export default async function PaperProduct(props: PageProps<"/products/paper/[slug]">) {
  const { slug } = await props.params;
  const product = getPaperProduct(slug);
  if (!product) notFound();

  return (
    <ProductDetailPage
      product={product}
      banner={BANNER}
      range={{ label: "Paper Products", href: "/products/paper" }}
      related={getRelatedProducts("/products/paper", slug)}
    />
  );
}
