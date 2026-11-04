"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Container, Factory, Handshake, Leaf, MoveRight, Recycle, Sprout, Target, Telescope } from "lucide-react";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";

const FACILITY_SLIDES = [
  {
    image: "/assets/about/inside-production-1.webp",
    alt: "Kraft paper converting line with robotic arm stacking cartons on a factory floor",
  },
  {
    image: "/assets/about/inside-production-2.webp",
    alt: "Row of molded fiber forming machines on a factory floor",
  },
];

const HERO_MATERIALS = ["Paper", "Plastic", "Bagasse", "Aluminum"];

const HERO_FACTS = [
  { value: "07", label: "Manufacturing units in India" },
  { value: "04", label: "Material categories" },
  { value: "02", label: "Warehousing hubs, India & USA" },
  { value: "03", label: "Export markets: USA, UAE & UK" },
];

const CERTIFICATIONS = [
  { name: "Kosher", logo: "/assets/certifications/kosher.png", w: 105, h: 105 },
  { name: "SGS", logo: "/assets/certifications/sgs.png", w: 203, h: 95 },
  { name: "ISO", logo: "/assets/certifications/iso.png", w: 95, h: 79 },
  { name: "FSC", logo: "/assets/certifications/fsc.png", w: 88, h: 105 },
  { name: "PFAS Free", logo: "/assets/certifications/pfas-free.png", w: 67, h: 76 },
  { name: "FDA Approved", logo: "/assets/certifications/fda-approved.png", w: 97, h: 61 },
  { name: "Sedex", logo: "/assets/certifications/sedex.png", w: 137, h: 39 },
  { name: "Make in India", logo: "/assets/certifications/make-in-india.png", w: 230, h: 105 },
];

const SUSTAIN_POINTS = [
  { icon: Sprout, title: "Renewable Materials" },
  { icon: Leaf, title: "Plant-Based Packaging" },
  { icon: Recycle, title: "Recyclable Packaging" },
  { icon: Container, title: "Compostable Options" },
];

const WHY_CHOOSE = [
  {
    image: "/assets/about/why-machine.webp",
    alt: "Row of molded fiber forming machines in a packaging factory",
    title: "Strong Manufacturing Foundation",
    copy: "Backed by seven manufacturing units, supporting consistent production and diverse packaging requirements for businesses worldwide.",
  },
  {
    image: "/assets/about/why-products.webp",
    alt: "Paper bags and cup, a bagasse tray and plate, and aluminum containers",
    title: "Diverse Packaging Manufacturing",
    copy: "Manufacturing paper, plastic, molded fiber (bagasse), and aluminum packaging for a wide range of business applications.",
  },
  {
    image: "/assets/about/why-export.webp",
    alt: "Container being loaded at a port beside a truck and cargo ship",
    title: "Global Export Capabilities",
    copy: "Coordinating international shipments, order consolidation, and freight arrangements to support packaging buyers worldwide.",
  },
  {
    image: "/assets/about/why-quality.webp",
    alt: "Quality inspector checking a molded fiber tray on the production floor",
    title: "Quality Assurance",
    copy: "Maintaining product consistency through quality checks and production oversight to meet customer specifications.",
  },
];

const VALUES = ["Consistency", "Accountability", "Partnership", "Adaptability", "Responsibility"];

const pad = (n: number) => String(n).padStart(2, "0");

// Display size of a certification mark: fit inside 120×72 without CSS resizing the image.
const logoScale = ({ w, h }: { w: number; h: number }) => Math.min(120 / w, 72 / h, 1);

export default function AboutPage() {
  const rootRef = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  useEffect(() => {
    if (sliderPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setSlide((n) => (n + 1) % FACILITY_SLIDES.length), 7000);
    return () => window.clearTimeout(timer);
  }, [slide, sliderPaused]);

  const tiltCard = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
    card.style.setProperty("--rx", `${(x - 0.5) * 16}deg`);
    card.style.setProperty("--ry", `${(0.5 - y) * 16}deg`);
  };

  const resetCard = (e: ReactPointerEvent<HTMLDivElement>) => {
    for (const v of ["--mx", "--my", "--rx", "--ry"]) e.currentTarget.style.removeProperty(v);
  };

  const goToSlide = (n: number) => setSlide((n + FACILITY_SLIDES.length) % FACILITY_SLIDES.length);

  // Fade/slide content in once it enters the viewport.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <SiteShell activePage="about">
      {({ openQuote }) => (
        <main className="" ref={rootRef}>
          {/* PAGE BANNER */}
          <PageBanner title="About Us" image="/assets/banner/about-banner.webp" trail={[{ label: "About Us" }]} />

          {/* ABOUT US */}
          <section className="ab-hero" id="about" aria-labelledby="ab-hero-title">
            <span className="ab-hero-mark" aria-hidden="true">
              ARVIS
            </span>

            <div className="ab-hero-copy">
              <p className="eyebrow">
                <span className="brand-lines"></span>ABOUT ARVIS
                <span className="brand-lines"></span>
              </p>

              <h2 id="ab-hero-title" className="ab-hero-title">
                <span className="ab-line">
                  <span>Trusted Packaging </span>
                </span>
                <span className="ab-line">
                  <em>manufacturers & Exporters</em>
                </span>
              </h2>

              <ul className="ab-hero-tags" aria-label="Materials we work with">
                {HERO_MATERIALS.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="ab-hero-text">
              <div className="ab-hero-col">
                <span className="ab-hero-col-label">
                  <span className="ab-hero-col-icon" aria-hidden="true">
                    <Factory size={26} strokeWidth={1.6} />
                  </span>
                  01 · Our Foundation
                </span>
                <p className="ab-hero-lead">
                  Arvis Packaging brings together the expertise and capabilities of seven manufacturing units in
                  India, creating a strong foundation for serving businesses across international markets. Our
                  collaborative approach combines industry knowledge, production capabilities, and a shared
                  commitment to maintaining consistent manufacturing standards.
                </p>
              </div>
              <div className="ab-hero-col">
                <span className="ab-hero-col-label">
                  <span className="ab-hero-col-icon" aria-hidden="true">
                    <Handshake size={26} strokeWidth={1.6} />
                  </span>
                  02 · Our Approach
                </span>
                <p className="ab-hero-lead">
                  With a focus on innovation, flexibility, and evolving market demands, we work closely with our
                  manufacturing teams to support diverse business requirements. Our unified approach enables us
                  to strengthen manufacturing capabilities, maintain product consistency, and develop long-term
                  relationships with importers, wholesalers, distributors, and businesses worldwide.
                </p>
              </div>
            </div>

            <ul className="ab-hero-facts" aria-label="Arvis at a glance">
              {HERO_FACTS.map(({ value, label }) => (
                <li key={label}>
                  <strong>
                    <span className={/^\d+$/.test(value) ? undefined : "is-word"}>{value}</span>
                  </strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </section>
                    {/* OUR VALUES */}
        

          {/* MISSION + VISION */}
          <section className="ab-mv" id="mission" aria-label="Our mission and vision">
            <article className="ab-mv-side ab-mv-mission" data-reveal>
              <span className="ab-mv-word" aria-hidden="true">
                Mission
              </span>
              <span className="ab-mv-icon" aria-hidden="true">
                <Target size={32} strokeWidth={1.5} />
              </span>
              <h2>
                Our <em>Mission</em>
              </h2>
              <blockquote>
                To build lasting, trusted relationships with buyers worldwide through honesty, commitment, and
                dependable service, making every business interaction simple and seamless.
              </blockquote>
            </article>

            <article className="ab-mv-side ab-mv-vision" data-reveal style={{ transitionDelay: "120ms" }}>
              <span className="ab-mv-word" aria-hidden="true">
                Vision
              </span>
              <span className="ab-mv-icon" aria-hidden="true">
                <Telescope size={32} strokeWidth={1.5} />
              </span>
              <h2>
                Our <em>Vision</em>
              </h2>
              <blockquote>
                To become a trusted and dependable supply chain partner worldwide by delivering quality packaging,
                exceptional <span className="text-nowrap">after-sales</span> support, and continuous improvement.
              </blockquote>
            </article>
          </section>
             {/* CERTIFICATIONS */}
          {/* <section className="ab-certs" id="certifications" aria-labelledby="ab-certs-title">
            <div className="ab-certs-head" data-reveal>
              <p className="eyebrow">
                <span className="brand-lines"></span>QUALITY CERTIFICATIONS
                <span className="brand-lines"></span>
              </p>
              <h2 id="ab-certs-title">
                Certified Packaging <br />
                <em>Manufacturing Standards</em>
              </h2>
            </div>
            */}

            {/* certificates orbit a central seal; each card counter-turns to stay upright */}
            {/* <div className="ab-orbit" data-reveal>
              <span className="ab-orbit-ring ab-orbit-ring-1" aria-hidden="true" />
              <span className="ab-orbit-ring ab-orbit-ring-2" aria-hidden="true" />

              <div className="ab-orbit-core" aria-hidden="true">
                <svg className="ab-orbit-seal" viewBox="0 0 120 120">
                  <defs>
                    <path id="ab-seal-circle" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
                  </defs>
                  <text>
                    <textPath href="#ab-seal-circle" textLength="286">
                      AUDITED • TESTED • CERTIFIED • AUDITED • TESTED • CERTIFIED •
                    </textPath>
                  </text>
                </svg>
                */}
                {/* <BadgeCheck size={40} strokeWidth={1.4} /> */}
                {/* <strong>Certified</strong>
              </div>

              <ul className="ab-orbit-list">
                {CERTIFICATIONS.map((cert, i) => (
                  <li
                    key={cert.name}
                    style={{ "--i": i, "--n": CERTIFICATIONS.length, "--d": `${i * 80}ms` } as CSSProperties}
                  >
                    <div className="ab-orbit-spin">
                      <div className="ab-cert-card" onPointerMove={tiltCard} onPointerLeave={resetCard}>
                        <span className="ab-cert-logo">
                          <Image
                            src={cert.logo}
                            alt={`${cert.name} certification logo`}
                            width={Math.round(cert.w * logoScale(cert))}
                            height={Math.round(cert.h * logoScale(cert))}
                          />
                        </span>
                        <span className="ab-cert-name">{cert.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section> */}

          {/* WHY CHOOSE US */}
          <section className="ab-why" id="why-choose-us" aria-labelledby="ab-why-title">
            <div className="ab-why-head" data-reveal>
              <div>
                <p className="eyebrow">
                  <span className="brand-lines"></span>WHY CHOOSE US
                </p>
                <h2 id="ab-why-title">
                  Stronger Capabilities<br />
                  <em>Better Packaging Solutions</em>
                </h2>
              </div>
            </div>

            <ul className="ab-why-cards" data-reveal>
              {WHY_CHOOSE.map(({ image, alt, title, copy }, i) => (
                <li key={title} style={{ "--i": i } as CSSProperties}>
                  <div className="ab-why-photo">
                    <Image src={image} alt={alt} fill sizes="(min-width: 1200px) 22vw, (min-width: 768px) 46vw, 92vw" />
                  </div>
                  <div className="ab-why-body">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* MANUFACTURING FACILITIES */}
          <section
            className="ab-facility"
            id="manufacturing"
            aria-roledescription="carousel"
            aria-label="Manufacturing facilities"
            onMouseEnter={() => setSliderPaused(true)}
            onMouseLeave={() => setSliderPaused(false)}
            onFocus={() => setSliderPaused(true)}
            onBlur={() => setSliderPaused(false)}
          >
            {FACILITY_SLIDES.map((item, i) => (
              <div
                key={item.image}
                className={`ab-facility-slide ${slide === i ? "is-active" : ""}`}
                aria-hidden={slide !== i}
              >
                <Image src={item.image} alt={item.alt} fill sizes="100vw" />
              </div>
            ))}

            <div className="ab-facility-copy">
              <p className="eyebrow">
                <span className="brand-lines"></span>INSIDE PRODUCTION
              </p>
              {/* the statement stays put; only the photo behind it changes */}
              <p className="ab-facility-text">
                Our manufacturing facilities combine modern production processes, technical expertise, and
                carefully coordinated operations to maintain consistent quality, production efficiency, and
                reliable performance at every stage.
              </p>
            </div>

            <div className="ab-facility-controls">
              <button type="button" aria-label="Previous slide" onClick={() => goToSlide(slide - 1)}>
                <ArrowLeft size={20} strokeWidth={1.6} aria-hidden="true" />
              </button>
              <div className="ab-facility-dots">
                {FACILITY_SLIDES.map((item, i) => (
                  <button
                    key={item.image}
                    type="button"
                    className={slide === i ? "is-active" : ""}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={slide === i}
                    onClick={() => goToSlide(i)}
                  >
                    <i key={slide === i ? `run-${slide}` : "idle"} className={sliderPaused ? "is-paused" : ""} />
                  </button>
                ))}
              </div>
              <button type="button" aria-label="Next slide" onClick={() => goToSlide(slide + 1)}>
                <ArrowRight size={20} strokeWidth={1.6} aria-hidden="true" />
              </button>
              <p className="ab-facility-count" aria-hidden="true">
                <strong>{pad(slide + 1)}</strong>
                <small> / {pad(FACILITY_SLIDES.length)}</small>
              </p>
            </div>
          </section>

   

          {/* SUSTAINABILITY */}
          <section className="ab-sustain" id="sustainability" aria-labelledby="ab-sustain-title">
            <div className="ab-sustain-visual" data-reveal>
              <div className="ab-sustain-arch">
                <Image
                  src="/assets/about/sustainability-new.webp"
                  alt="Aerial view of a forest with a river shaped like a recycling symbol"
                  width={850}
                  height={650}
                  sizes="(min-width: 992px) 50vw, 92vw"
                />
              </div>
              {/* second photo over the lower corner: the materials themselves */}
              {/* <div className="ab-sustain-inset">
                <Image
                  src="/assets/about/sustainability-small.webp"
                  alt="Kraft gift box tied with twine and printed with a recycling symbol and leaves"
                  fill
                  sizes="(min-width: 992px) 18vw, 40vw"
                />
              </div> */}
              {/* gold line-art leaf peeking out behind the top corner */}
              <svg className="ab-sustain-leaf" viewBox="0 0 120 160" aria-hidden="true">
                <path d="M60 154C60 154 8 118 8 66C8 30 34 8 60 4C86 8 112 30 112 66C112 118 60 154 60 154Z" />
                <path d="M60 154V18" />
                <path d="M60 52L36 34M60 78L28 56M60 104L32 84M60 52L84 34M60 78L92 56M60 104L88 84" />
              </svg>
            </div>

            <div className="ab-sustain-copy pe-xl-5" data-reveal>
              <p className="eyebrow">
                <span className="brand-lines"></span>SUSTAINABILITY
              </p>
              <h2 id="ab-sustain-title">
                Responsible Packaging <br />
                <em>For a Better Tomorrow</em>
              </h2>
              <p>
                Explore packaging made from renewable, plant-based, and recyclable materials. From paper and
                molded fiber (bagasse) to recyclable aluminum, Arvis Packaging helps businesses explore
                responsible material choices that meet their packaging requirements and sustainability goals.
              </p>

              <ul className="ab-sustain-points">
                {SUSTAIN_POINTS.map(({ icon: Icon, title }) => (
                  <li key={title}>
                    <i>
                      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    </i>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </section>

           <section className="cta ab-cta" id="contact">
             <div className="cta-inner">
               <p className="eyebrow">
                 <span className="brand-lines"></span> LET’S CONNECT <span className="brand-lines"></span>
               </p>
               <h2>
                 Let’s Find the Right Packaging Solution
                 <br />
                 <em> for Your Business</em>
               </h2>
             
               <button className="button inverse" type="button" onClick={openQuote}>
                 Send your requirement <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
               </button>
             </div>
           </section>
        </main>
      )}
    </SiteShell>
  );
}
