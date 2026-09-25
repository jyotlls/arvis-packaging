import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">

      <div className="hero-copy">
        <p className="eyebrow">
          <span /> Who We Are
        </p>
        <h1 id="hero-title">
          Trusted Packaging<br />
          <em>Manufacturer & Exporter</em>
        </h1>
        <div className="hero-text">
                  <p >Arvis Packaging delivers reliable packaging solutions backed by a strong manufacturing and export network in India, offering a diverse range of paper, plastic, bagasse and aluminum packaging products for businesses worldwide. We simplify sourcing through product selection, customization, quality checks, and order consolidation.
          </p>
                  <p>Our capabilities extend to container space optimization, shipping coordination, warehousing and distribution. With warehousing facilities in Mundra, India, and Brunswick, New Jersey, USA, we support efficient procurement and product movement. Whether it's food packaging, takeaway packaging, bags, cups, tableware or aluminum products, Arvis combines several packaging sectors in one coordinated supply network.
          </p>
          </div>
        <div className="hero-actions">
          <a className="button primary" href="#">
            Explore More <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        
        </div>
      </div>

      <div className="hero-visual" aria-label="Arvis product range from the company catalogue">
        <Image
          src="/assets/about/about-us-home.webp"
          alt="Arvis packaging range including paper bags, tableware and food packaging"
          width={760}
          height={860}
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
