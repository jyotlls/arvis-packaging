import { ALUMINUM_PRODUCTS, BAGASSE_PRODUCTS, PLASTIC_PRODUCTS } from "./materialProducts";
import { PAPER_PRODUCTS, type CatalogueProduct } from "./paperProducts";

export type RelatedProduct = Pick<CatalogueProduct, "slug" | "title" | "image" | "alt"> & { href: string };

const RANGES = [
  { basePath: "/products/plastic", products: PLASTIC_PRODUCTS },
  { basePath: "/products/bagasse", products: BAGASSE_PRODUCTS },
  { basePath: "/products/aluminum", products: ALUMINUM_PRODUCTS },
  { basePath: "/products/paper", products: PAPER_PRODUCTS },
];

const card =
  (basePath: string) =>
  ({ slug, title, image, alt }: CatalogueProduct): RelatedProduct => ({
    slug,
    title,
    image,
    alt,
    href: `${basePath}/${slug}`,
  });

/* The products after this one in its own range (wrapping round), topped up from the other ranges
   because some ranges only hold a single product. */
export function getRelatedProducts(basePath: string, slug: string, limit = 4): RelatedProduct[] {
  const own = RANGES.find((range) => range.basePath === basePath);
  const products = own?.products ?? [];
  const index = products.findIndex((product) => product.slug === slug);

  const sameRange = [...products.slice(index + 1), ...products.slice(0, Math.max(index, 0))].map(card(basePath));
  const otherRanges = RANGES.filter((range) => range !== own).flatMap((range) =>
    range.products.map(card(range.basePath)),
  );

  return [...sameRange, ...otherRanges].slice(0, limit);
}
