"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  Eye,
  Target,
  Building2,
  ClipboardCheck,
  Container,
  Factory,
  Leaf,
  MoveRight,
  Recycle,
  Ship,
  Sprout,
  Warehouse,
} from "lucide-react";
import FeatureSection from "../components/FeatureSection";
import FloatingActions from "../components/FloatingActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InsightsSection from "../components/InsightsSection";
import ProductGrid from "../components/ProductGrid";
import ProductSlider from "../components/ProductSlider";
import QuoteModal from "../components/QuoteModal";

const ADVANTAGE_STEPS = [
  {
    id: "01",
    title: "SELECT",
    lead: "Match the Right Products",
    copy: "Choose products and specifications based on your requirements.",
    image: "/assets/bespoke-boxes.jpg",
    alt: "Custom printed packaging boxes",
  },
  {
    id: "02",
    title: "VERIFY",
    lead: "Keep Orders on Track",
    copy: "Quality checks and fulfilment oversight before products move forward.",
    image: "/assets/product-materials.jpg",
    alt: "Packaging materials inspected for quality",
  },
  {
    id: "03",
    title: "COMBINE",
    lead: "Bring Orders Together",
    copy: "Combine different product categories for more efficient shipment planning.",
    image: "/assets/custom-bundle.jpg",
    alt: "Mixed product categories bundled into one order",
  },
  {
    id: "04",
    title: "MAXIMIZE",
    lead: "Use Container Space Better",
    copy: "Optimize container space and coordinate shipping for efficient product movement.",
    image: "/assets/bespoke-bags.jpg",
    alt: "Packed goods prepared for container loading",
  },
];

const APPLICATIONS = [
  {
    title: "Restaurants",
    image: "/assets/application/restaurants.webp",
    alt: "Packaging used across restaurant and quick service outlets",
  },
  {
    title: "Cafe & Bakery",
    image: "/assets/application/bakery.webp",
    alt: "Cups, boxes and bakery packaging formats",
  },
  {
    title: "Food Delivery",
    image: "/assets/application/food-delivery.webp",
    alt: "Containers and clamshells for takeaway and delivery orders",
  },
  {
    title: "Retail",
    image: "/assets/application/retail.webp",
    alt: "Retail and grocery packaging bags",
  },
  {
    title: "E-Commerce",
    image: "/assets/application/e-commerce.webp",
    alt: "Mailers and shipping boxes for e-commerce orders",
  },
  {
    title: "Catering & Events",
    image: "/assets/application/Catering-events.webp",
    alt: "Aluminium containers and trays used for catering",
  },
];

const CERTIFICATIONS = [
  { name: "BRCGS", logo: "/assets/certifications/brcgs-t.webp", w: 287, h: 216 },
  { name: "US FDA", logo: "/assets/certifications/fda-approved-t.webp", w: 271, h: 171 },
  { name: "BPI", logo: "/assets/certifications/bpi-compostable-t.webp", w: 424, h: 567 },
  { name: "ISO", logo: "/assets/certifications/iso-t.webp", w: 495, h: 403 },
  { name: "PFAS Free", logo: "/assets/certifications/pfas-t.webp", w: 418, h: 484 },
];

const MISSION_VISION = [
  {
    icon: Eye,
    label: "Vision",
    text: "To manufacture and deliver high-quality packaging solutions that meet diverse business needs while building lasting customer relationships through reliability, consistent quality, customization, and exceptional service.",
  },
  {
    icon: Target,
    label: "Mission",
    text: "To become a trusted name in the packaging industry by advancing sustainable packaging solutions, strengthening manufacturing capabilities, and continuously improving product quality, innovation, and customer satisfaction.",
  },
];

const SUSTAIN_PILLARS = [
  { icon: Sprout, title: "Renewable Materials" },
  { icon: Leaf, title: "Plant-Based Packaging" },
  { icon: Recycle, title: "Recyclable Packaging" },
  { icon: Container, title: "Compostable Options" },
];

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [translateOpen, setTranslateOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the page behind the full-screen mobile menu from scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Drop back to the desktop layout cleanly when the viewport grows or rotates.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 992px)");
    const handleChange = () => {
      if (desktop.matches) {
        setMenuOpen(false);
        setMegaOpen(false);
      }
    };
    handleChange();
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const w = window as typeof window & {
      googleTranslateElementInit?: () => void;
      google?: {
        translate?: {
          TranslateElement?: new (
            options: { pageLanguage: string; layout: number },
            elementId: string,
          ) => void;
          InlineLayout?: {
            VERTICAL?: number;
          };
        };
      };
    };

    // Google calls this once its widget code has finished loading.
    w.googleTranslateElementInit = () => {
      const googleTranslate = w.google?.translate;
      const container = document.getElementById("google_translate_element");
      if (!googleTranslate?.TranslateElement || !container || container.childElementCount) return;

      try {
        new googleTranslate.TranslateElement(
          {
            pageLanguage: "en",
            layout: googleTranslate.InlineLayout?.VERTICAL ?? 0,
          },
          "google_translate_element",
        );
      } catch (error) {
        console.warn("Google Translate setup failed", error);
      }
    };

    // Load the script only once (effects run twice in dev Strict Mode).
    if (document.getElementById("google-translate-script")) {
      w.googleTranslateElementInit();
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => console.warn("Google Translate script failed to load");
    document.body.appendChild(script);
  }, []);

  // Show the language dropdown as an already-open list, and close it once a language is picked.
  useEffect(() => {
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (!combo) return;

    combo.size = translateOpen ? 12 : 0;
    if (!translateOpen) return;

    combo.focus();
    const close = () => setTranslateOpen(false);
    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".google-translate, .language-trigger")) close();
    };

    combo.addEventListener("change", close);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      combo.removeEventListener("change", close);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [translateOpen]);

  const toggleTranslate = () => {
    setTranslateOpen((prev) => !prev);
  };

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <>
      <Header
        isSticky={isSticky}
        menuOpen={menuOpen}
        megaOpen={megaOpen}
        translateOpen={translateOpen}
        onToggleMenu={() => {
          setMegaOpen(false);
          setMenuOpen((prev) => !prev);
        }}
        onCloseMenu={() => {
          setMenuOpen(false);
          setMegaOpen(false);
        }}
        onToggleTranslate={toggleTranslate}
        onOpenQuote={openQuote}
        onMegaOpen={() => setMegaOpen(true)}
        onMegaClose={() => setMegaOpen(false)}
      />

      <main>
        <ProductSlider />

        <Hero />



        <section className="manifesto" id="network">
          <div className="eyebrow">
             <span className="brand-lines"></span> THE ARVIS NETWORK
        </div>
          <h2>
            One Source.<br />
            <span>A Complete Packaging Supply Chain.</span>
          </h2>
          <p>
     The Arvis Network connects every stage of your packaging journey through one coordinated process. From working with trusted manufacturers and maintaining product quality to combining multiple requirements, managing storage, and arranging delivery, every stage works together seamlessly. The result is a simpler, more efficient way to manage diverse packaging needs from order to destination. 
          </p>
          <div className="network-flow" aria-label="Arvis supply network process">
            <div className="flow-step">
              <small>01</small>
              <div className="flow-icon"><Factory size={34} strokeWidth={1.6} aria-hidden="true" /></div>
              <strong>Manufacturers</strong>
              <span>High-quality packaging solutions manufactured with precision and consistency.</span>
            </div>
            <div className="flow-step">
              <small>02</small>
              <div className="flow-icon"><ClipboardCheck size={34} strokeWidth={1.6} aria-hidden="true" /></div>
              <strong>QUALITY CHECKS</strong>
              <span>Quality checks and coordinated order fulfilment management.</span>
            </div>
            <div className="flow-step">
              <small>03</small>
              <div className="flow-icon"><Boxes size={34} strokeWidth={1.6} aria-hidden="true" /></div>
              <strong>CONSOLIDATION</strong>
              <span>Multiple packaging products combined into one consolidated shipment.</span>
            </div>
            <div className="flow-step">
              <small>04</small>
              <div className="flow-icon"><Warehouse size={34} strokeWidth={1.6} aria-hidden="true" /></div>
              <strong>Warehousing</strong>
              <span>Warehousing and distribution support across India and the USA.</span>
            </div>
            <div className="flow-step">
              <small>05</small>
              <div className="flow-icon"><Ship size={34} strokeWidth={1.6} aria-hidden="true" /></div>
              <strong>SHIPPING</strong>
              <span>Efficient container-space optimization and coordinated shipping support.</span>
            </div>
            <div className="flow-step accent">
              <small>06</small>
              <div className="flow-icon"><Building2 size={34} strokeWidth={1.6} aria-hidden="true" /></div>
              <strong>Your business</strong>
              <span>Consolidated packaging products delivered to your destination.</span>
            </div>
          </div>
        </section>

        <ProductGrid />
   
         {/* <section className="mv" id="mission-vision" aria-label="Mission and vision">
          {MISSION_VISION.map(({ icon: Icon, label, text }) => (
            <article className="mv-item" key={label}>
              <div className="mv-head">
                <span className="mv-icon">
                  <Icon size={34} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h2>
                  Our {label}
                </h2>
              </div>
              <p>{text}</p>
            </article>
          ))}
        </section> */}

        <section className="certs pt-0" id="certifications" aria-label="Certifications">
          <p className="eyebrow certs-eyebrow">
            <span className="brand-lines"></span> QUALITY CERTIFICATIONS <span className="brand-lines"></span>
          </p>
          <h2 className="certs-title">
            Packaging Standards   <em>& Compliance</em>
          </h2>
          <div className="certs-grid">
            {CERTIFICATIONS.map(({ name, logo, w, h }, index) => (
              <div className="cert-card" key={name} style={{ animationDelay: `${index * 0.5}s` }}>
                {/* served as-is: the WebP is already lossless, so Next.js shouldn't re-compress it */}
                <Image src={logo} alt={`${name} certification`} width={w} height={h} unoptimized />
              </div>
            ))}
          </div>
        </section>

        <FeatureSection onOpenQuote={openQuote} />

    

        {/* <section className="advantage">
          <p className="eyebrow">
            <span /> SMARTER PROCUREMENT
          </p>
          <div className="advantage-grid">
            <h2 className="mb-0">
              Less Complexity.<br />
              <span>More Control from Order to Delivery.</span>
            </h2>
            <p className="mb-0">
             Bring different product requirements into a more coordinated buying process. Arvis manages key stages from product selection and quality checks to consolidation, warehousing, container-space optimization, and shipping coordination.
            </p>
          </div>
          <div className="statement-list">
            {ADVANTAGE_STEPS.map((step) => (
              <div key={step.id}>
                <span>{step.id}</span>
                <strong>{step.title}</strong>
                <div className="statement-copy">
                  <h3>{step.lead}</h3>
                  <p>{step.copy}</p>
                </div>
                <figure className="statement-thumb">
                  <Image src={step.image} alt={step.alt} width={320} height={224} />
                </figure>
              </div>
            ))}
          </div>
        </section> */}
       <section className="applications " id="applications">
          <div className="applications-head">
            <p className="eyebrow">
              <span className="brand-lines"></span> WHERE IT IS USED
            </p>
            <h2 className="mb-0">
              Serving Industries <br/><em> With Better Packaging</em>
            </h2>
          </div>
          <div className="applications-grid">
            {APPLICATIONS.map((application) => (
              <article className="application-card" key={application.title}>
                <figure>
                  <Image
                    src={application.image}
                    alt={application.alt}
                    width={270}
                    height={270}
                  />
                </figure>
                <strong>{application.title}</strong>
              </article>
            ))}
          </div>
        </section> 
          
        <section className="global" id="global">
          <div className="global-copy">
            <p className="eyebrow">
              <span className="brand-lines"></span> EXPORT CAPABILITIES
            </p>
            <h2>From India<br/> <em>Built for International Supply</em></h2>
            <p>
             Arvis Packaging serves businesses across international markets with a versatile portfolio of paper, plastic, bagasse, and aluminum packaging products. Our export capabilities are built around the needs of global buyers, with options ranging from everyday packaging essentials to customized and branded solutions.
            </p>
            <p>
          We understand that packaging requirements differ across markets, industries, and applications. That’s why we work with each customer’s product specifications, order volumes, branding needs, and destination requirements to provide packaging solutions suited to their market.
            </p>
            <Link className="button inverse global-cta" href="/export">
              EXPLORE EXPORT <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <div className="route-map">
            <svg viewBox="0 0 700 640" role="img" aria-labelledby="route-map-title">
              <title id="route-map-title">
                Trade lane from Mundra, New Jersey, USA
              </title>

              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#cce8e2" stopOpacity=".20" />
                  <stop offset="55%" stopColor="#1e6aa0" stopOpacity=".10" />
                  <stop offset="100%" stopColor="#092b43" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="globeFace" cx="38%" cy="30%" r="78%">
                  <stop offset="0%" stopColor="#12507c" stopOpacity=".55" />
                  <stop offset="100%" stopColor="#061f31" stopOpacity=".65" />
                </radialGradient>
                <linearGradient id="laneStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c8a874" stopOpacity=".25" />
                  <stop offset="50%" stopColor="#e6cfa4" />
                  <stop offset="100%" stopColor="#c8a874" stopOpacity=".25" />
                </linearGradient>
              </defs>

              <circle cx="350" cy="320" r="310" fill="url(#globeGlow)" />
              <circle cx="350" cy="320" r="230" fill="url(#globeFace)" />

              <g className="graticule">
                {/* parallels */}
                <ellipse cx="350" cy="320" rx="230" ry="69" />
                <ellipse cx="350" cy="245" rx="216" ry="65" />
                <ellipse cx="350" cy="395" rx="216" ry="65" />
                <ellipse cx="350" cy="179" rx="176" ry="53" />
                <ellipse cx="350" cy="461" rx="176" ry="53" />
                <ellipse cx="350" cy="130" rx="115" ry="35" />
                <ellipse cx="350" cy="510" rx="115" ry="35" />
                <ellipse cx="350" cy="108" rx="60" ry="18" />
                <ellipse cx="350" cy="532" rx="60" ry="18" />
                {/* meridians */}
                <ellipse cx="350" cy="320" rx="199" ry="230" />
                <ellipse cx="350" cy="320" rx="115" ry="230" />
                <line x1="350" y1="90" x2="350" y2="550" />
              </g>

              <circle className="globe-rim" cx="350" cy="320" r="230" />

              <g className="drift">
                <circle cx="96" cy="150" r="1.6" />
                <circle cx="612" cy="120" r="2" />
                <circle cx="58" cy="430" r="2" />
                <circle cx="648" cy="468" r="1.6" />
                <circle cx="180" cy="66" r="1.4" />
                <circle cx="520" cy="588" r="1.8" />
                <circle cx="660" cy="292" r="1.4" />
                <circle cx="44" cy="276" r="1.8" />
              </g>

              <path className="lane-haze" d="M163 278C262 122 400 112 494 209" />
              <path className="lane" d="M163 278C262 122 400 112 494 209" />
              <circle className="lane-dot" r="4">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path="M163 278C262 122 400 112 494 209"
                />
              </circle>

              <g className="node" transform="translate(163 278)">
                <circle className="node-wave" r="9" />
                <circle className="node-wave node-wave-late" r="9" />
                <circle className="node-core" r="5.5" />
              </g>
              <g className="node" transform="translate(494 209)">
                <circle className="node-wave" r="9" />
                <circle className="node-wave node-wave-late" r="9" />
                <circle className="node-core" r="5.5" />
              </g>

              <g className="node-tag">
                <text x="163" y="316">INDIA</text>
                <text className="node-sub" x="163" y="336">
                  MUNDRA · 22.8°N 69.7°E
                </text>
              </g>
              <g className="node-tag">
                <text x="494" y="247">USA</text>
                <text className="node-sub" x="494" y="267">
                  NEW JERSEY · 40.5°N 74.4°W
                </text>
              </g>
            </svg>

          </div>
        </section>
 
        {/* <section className="sustain" id="sustainability">
          <Image
            className="sustain-bg"
            src="/assets/about/sustainability.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
          />

          <div className="sustain-inner">
            <div className="sustain-copy">
              <div className="eyebrow">
              <span className="brand-lines"></span> SUSTAINABILITY
              </div>
              <h2>Better Materials.<br /><em>Made for a More Sustainable Tomorrow.</em></h2>
              <p>
                Explore packaging options made with renewable and plant-based materials, alongside recyclable and compostable formats for applicable products. From paper and bagasse to aluminum packaging, Arvis helps businesses consider more responsible material choices while meeting their packaging requirements.
              </p>
            </div>

            <div className="sustain-pillars">
              {SUSTAIN_PILLARS.map(({ icon: Icon, title }) => (
                <div className="sustain-pillar" key={title}>
                  <i>
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </i>
                  <strong>{title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section> */}

         <InsightsSection />

        
        {/* <section className="cta" id="contact">
          <div className="cta-inner">
            <p className="eyebrow">
              <span className="brand-lines"></span> START A CONVERSATION <span className="brand-lines"></span>
            </p>
            <h2>
              Have a Packaging Requirement?
              <br />
              <em>Let’s Make It Happen</em>
            </h2>
            <button className="button inverse" type="button" onClick={openQuote}>
              Send your requirement <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </section> */}

        {/* <section className="catalogue" id="catalogue">
          <div className="catalogue-copy">
            <div className="section-number light">07 / CATALOGUE</div>
            <h2>
              ONE PACKAGING<br />
              <em>ECOSYSTEM.</em>
            </h2>
            <p>Review the complete Arvis range, including sizes, case packs and product specifications.</p>
            <div className="catalogue-actions">
              <a className="button inverse" href="/assets/arvis-catalogue.pdf" target="_blank" rel="noreferrer">
                View catalogue <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a className="button text light-link" href="/assets/arvis-catalogue.pdf" download>
                Download PDF <ArrowDown size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>

          <a className="catalogue-cover" href="/assets/arvis-catalogue.pdf" target="_blank" rel="noreferrer" aria-label="Open Arvis catalogue">
            <Image
              src="/assets/catalogue-cover.jpg"
              alt="Cover of the Arvis Packaging product catalogue"
              width={760}
              height={980}
            />
            <span>ARVIS / PRODUCT CATALOGUE</span>
          </a>
        </section> */}

      </main>

      <Footer />

      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
      <FloatingActions />
    </>
  );
}
