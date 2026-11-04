import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="brand-lines"></span> Who We Are
        </p>
        <h1 id="hero-title">
          End-to-End Solutions<br />
          <em>For All Your Packaging Needs</em>
        </h1>
        {/* <p className="sub-title"> Trusted Packaging Manufacturers & Exporter</p> */}
        <div className="hero-text">
                  <p >
                    Arvis Packaging delivers reliable packaging solutions through a strong network of manufacturers in India, offering a diverse range of paper, plastic, bagasse, and aluminum packaging products to businesses worldwide. We simplify sourcing through product selection, customization, quality checks, and order consolidation.
          </p>
                  <p>
                    By bringing together the capabilities of multiple manufacturers, Arvis Packaging coordinates shipping, warehousing, and distribution through one integrated network. With warehousing facilities in India and the United States, including locations in Mundra and New Jersey. We support efficient product consolidation and distribution. We consolidate multiple product requirements into coordinated shipments to optimize container space, streamline logistics, and reduce costs while simplifying supply chain management from production to delivery.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button primary" href="/about">
            Explore More <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="hero-visual" aria-label="Arvis product range from the company catalogue">
        <Image
          src="/assets/about/about-sec-home.webp"
          alt="Arvis packaging range including paper bags, tableware and food packaging"
          width={800}
          height={650}
          priority
        />
        {/* <span className="orbit-tag tag-paper">Paper</span>
        <span className="orbit-tag tag-bagasse">Bagasse</span>
        <span className="orbit-tag tag-aluminium">Aluminum</span>
        <div className="hero-index">
          <b>04</b>
          <span>Core material groups</span>
        </div> */}
      </div>
    </section>
  );
}
