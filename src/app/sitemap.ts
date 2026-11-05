import type { MetadataRoute } from "next";
import { INSIGHTS } from "../data/insights";
import { ALUMINUM_PRODUCTS, BAGASSE_PRODUCTS, PLASTIC_PRODUCTS } from "../data/materialProducts";
import { PAPER_PRODUCTS } from "../data/paperProducts";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

// Add each new page here as it is built.
// Add each new page here as it is built.
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/paper", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/plastic", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/bagasse", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/aluminum", priority: 0.8, changeFrequency: "monthly" },
  { path: "/catalogue", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/export", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // one entry per blog article, dated by its publish date
  const posts: MetadataRoute.Sitemap = INSIGHTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.iso),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const ranges = [
    { path: "/products/paper", items: PAPER_PRODUCTS },
    { path: "/products/plastic", items: PLASTIC_PRODUCTS },
    { path: "/products/bagasse", items: BAGASSE_PRODUCTS },
    { path: "/products/aluminum", items: ALUMINUM_PRODUCTS },
  ];

  const products: MetadataRoute.Sitemap = ranges.flatMap(({ path, items }) =>
    items.map((product) => ({
      url: `${SITE_URL}${path}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...pages, ...products, ...posts];
}
