import type { Metadata } from "next";
import BlogPage from "../../components/blog/BlogPage";

const TITLE = "Blogs";
const DESCRIPTION =
  "Guides, materials and packaging trends from Arvis Packaging: choosing between paper, plastic and bagasse, food packaging and global sourcing.";
const IMAGE = {
  url: "/assets/blog/blog-1.webp",
  width: 410,
  height: 282,
  alt: "Moulded bagasse tableware produced from sugarcane fibre",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/blog",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
};

export default function Blog() {
  return <BlogPage />;
}
