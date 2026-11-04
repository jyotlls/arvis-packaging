"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProductSlide = {
  name: string;
  image: string;
  alt: string;
};

const slides: ProductSlide[] = [
    {
    name: "Brand",
    image: "/assets/banner/brand-banner-n.webp",
    alt: "brand",
  },
  {
    name: "Paper",
    image: "/assets/banner/banner-paper.webp",
    alt: "Paper packaging products including bags and food service items",
  },
  {
    name: "Plastic",
    image: "/assets/banner/banner-2-n.webp",
    alt: "Plastic packaging products including cups and containers",
  },
  {
    name: "Bagasse",
    image: "/assets/banner/banner-3-n.webp",
    alt: "Bagasse molded fiber plates and food packaging products",
  },
  {
    name: "Aluminum",
    image: "/assets/banner/banner-aluminum.webp",
    alt: "Aluminum foil and food packaging containers",
  },
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastChange = useRef(0);

  // Restart the auto-advance countdown after every change, so a manual click
  // is never followed straight away by an automatic slide.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 9000);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  // Ignore clicks that arrive while the previous fade is still running.
  const goTo = (getIndex: (currentIndex: number) => number) => {
    const now = Date.now();
    if (now - lastChange.current < 900) return;
    lastChange.current = now;
    setActiveIndex(getIndex);
  };

  const showPrevious = () => goTo((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);

  const showNext = () => goTo((currentIndex) => (currentIndex + 1) % slides.length);

  return (
    <section className="product-slider" aria-label="Featured packaging products">
      <div className="product-slider-image">
        {slides.map((slide, index) => (
          <Image
            key={slide.name}
            className={index === activeIndex ? "is-active" : ""}
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={880}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="product-slider-controls">
        <button type="button" className="slider-arrow" onClick={showPrevious} aria-label="Previous product">
          <ArrowLeft size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <div className="slider-dots" role="tablist" aria-label="Select featured product">
          {slides.map((slide, index) => (
            <button
              key={slide.name}
              type="button"
              className={`slider-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => goTo(() => index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${slide.name} product slide`}
            />
          ))}
        </div>
        <button type="button" className="slider-arrow" onClick={showNext} aria-label="Next product">
          <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
