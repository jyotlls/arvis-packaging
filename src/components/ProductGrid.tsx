import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export type ProductItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const products: ProductItem[] = [
  {
    id: 1,
    title: "Paper",
    description: "Paper Bags, E-commerce Bags & Mailers, Cups & Lids, Food Containers, Food Trays, Tableware, Cutlery, Pizza Boxes, Straws, Bespoke Packaging",
    image: "/assets/product/paper-product.webp",
    alt: "Paper products range from the Arvis catalogue",
  },
  {
    id: 2,
    title: "Plastic",
    description: "PET & PP Cups, Cup Lids, Souffle Cups & Lids, Microwavable Containers, Deli & Soup Containers, Hinged Take-Out Containers, Zip & Slider Bags, Trash Bags, Plastic Cutlery, Poly Bags, Non-Woven Bags",
    image: "/assets/product/plastic-product.webp",
    alt: "Plastic products range from the Arvis catalogue",
  },
  {
    id: 3,
    title: "Bagasse",
    description: "Plates & Trays, Clamshells, Round Bowls, Rectangular Food Containers, Sipper Lids",
    image: "/assets/product/bagasee-product.webp",
    alt: "Molded fiber bagasse products from the Arvis catalogue",
  },
  {
    id: 4,
    title: "Aluminum",
    description: "Aluminum Foil Rolls, Pop-Up Foil Sheets, Foil Cushion Sheets, Aluminum Containers & Pans, Foil-Laminated Board Lids, Aluminum Lids",
    image: "/assets/product/aluminium-product.webp",
    alt: "Aluminum products from the Arvis catalogue",
  },
];

export default function ProductGrid() {
  return (
    <section className="products" id="products">
      <div className="products-head">
        <div>
          <p className="eyebrow">
          <span /> Explore the Range
        </p>
          <h2>
           Packaging Choices.<br /> <em>Solutions for Every Business Need.</em>
          </h2>
        </div>
        
      </div>

      <div className="product-stack">
        {products.map((product) => (
          <article key={product.id} className={`product-panel ${product.id === 1 ? "active" : ""}`} data-product={product.title.toLowerCase()}>
            <div className="product-content">
             
              <h3>{product.title}</h3>
              <span>{product.description}</span>
              
               <a className="view-all" href="">
                            EXPLORE PRODUCTS
                            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                          </a>
            </div>
            <div className="text-lg-end img-product">
            <Image src={product.image} alt={product.alt} width={700} height={400} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
