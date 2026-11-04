import {
  CookingPot,
  CupSoda,
  Disc,
  Layers,
  MoveRight,
  PanelTop,
  Scroll,
  ShoppingBag,
  Soup,
  Utensils,
  type LucideProps,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";

/* takeaway food box with lid (lucide has no food-container icon) */
function FoodBox({ size = 24, strokeWidth = 2, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 9.5 7 4.5h10l2.5 5" />
      <path d="M2.5 9.5h19" />
      <path d="M4 9.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5" />
      <path d="M9.5 14.5h5" />
    </svg>
  );
}

export type ProductItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  categories: { icon: ComponentType<LucideProps>; label: string }[];
};

const products: ProductItem[] = [
  {
    id: 1,
    title: "Paper",
    description: "Our paper packaging range includes paper bags, e-commerce and bubble mailers, food trays, deli sheets, tableware, cutlery, cups and containers, salad bowls, pizza boxes, straws, and bespoke paper packaging solutions.",
    image: "/assets/product/paper-product-n.webp",
    alt: "Paper products range from the Arvis catalogue",
    href: "/products/paper",
    categories: [
      { icon: ShoppingBag, label: "Paper Bags" },
      { icon: CupSoda, label: "Cups & Containers" },
      { icon: FoodBox, label: "Food Trays & Tableware" },
      { icon: Utensils, label: "Cutlery & Accessories" },
    ],
  },
  {
    id: 2,
    title: "Plastic",
    description: "Our plastic packaging range includes PET and PP cups and lids, microwaveable containers, deli and soup containers, hinged takeaway containers, zip-seal and slider bags, trash bags, plastic cutlery, poly bags, and non-woven bags.",
    image: "/assets/product/plastic-product-n.webp",
    alt: "Plastic products range from the Arvis catalogue",
    href: "/products/plastic",
    categories: [
      { icon: CupSoda, label: "Cups & Lids" },
      { icon: FoodBox, label: "Takeaway Containers" },
      { icon: ShoppingBag, label: "Zip & Poly Bags" },
      { icon: Utensils, label: "Cutlery" },
    ],
  },
  {
    id: 3,
    title: "Molded Fiber - Bagasse",
    description: "Our molded fiber (bagasse) packaging range includes plates, trays, clamshells, round bowls, rectangular containers, and sipper lids.",
    image: "/assets/product/bagasee-product-n.webp",
    alt: "Molded fiber bagasse products from the Arvis catalogue",
    href: "/products/bagasse",
    categories: [
      { icon: Disc, label: "Plates & Trays" },
      { icon: FoodBox, label: "Clamshells" },
      { icon: Soup, label: "Bowls & Containers" },
      { icon: CupSoda, label: "Sipper Lids" },
    ],
  },
  {
    id: 4,
    title: "Aluminum",
    description: "Our aluminum packaging range includes foil rolls, pop-up sheets, foil cushion sheets, aluminum containers and pans, foil-laminated board lids, and aluminum lids.",
    image: "/assets/product/aluminium-product-n.webp",
    alt: "Aluminum products from the Arvis catalogue",
    href: "/products/aluminum",
    categories: [
      { icon: Scroll, label: "Foil Rolls" },
      { icon: Layers, label: "Pop-up & Cushion Sheets" },
      { icon: CookingPot, label: "Containers & Pans" },
      { icon: PanelTop, label: "Lids" },
    ],
  },
];

export default function ProductGrid() {
  return (
    <section className="products" id="products">
      <div className="products-head">
        <div>
          <p className="eyebrow">
          <span className="brand-lines"></span>Explore the Range
        </p>
          <h2>
           Packaging Choices <br /> <em>Solutions for Every Business Need</em>
          </h2>
        </div>

      </div>

      <div className="product-stack">
        {products.map((product, index) => (
          <article key={product.id} className={`product-panel ${product.id === 1 ? "active" : ""}`} data-product={product.title.toLowerCase()}>
            <div className="product-content">
   
              <h3>{product.title}</h3>
              <span>{product.description}</span>

              <ul className="product-cats">
                {product.categories.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <i>
                      <Icon size={30} strokeWidth={1.75} aria-hidden="true" />
                    </i>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

               <Link className="button primary product-cta" href={product.href}>
                            EXPLORE PRODUCTS
                            <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
                          </Link>
            </div>
            <div className="text-lg-end img-product">
              <div className="product-frame">
                <Image src={product.image} alt={product.alt} width={900} height={518} />
               
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
