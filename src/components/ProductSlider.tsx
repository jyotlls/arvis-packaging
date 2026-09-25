"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type ProductSlide = {
  name: string;
  image: string;
  alt: string;
};

const slides: ProductSlide[] = [
  {
    name: "Paper",
    image: "/assets/banner/hero-banner.webp",
    alt: "Paper packaging products including bags and food service items",
  },
  {
    name: "Plastic",
    image: "/assets/banner/hero-banner-2.webp",
    alt: "Plastic packaging products including cups and containers",
  },
  {
    name: "Bagasse",
    image: "/assets/banner/hero-banner-3.webp",
    alt: "Bagasse molded fiber plates and food packaging products",
  },
  {
    name: "Aluminum",
    image: "/assets/banner/hero-banner-4.webp",
    alt: "Aluminum foil and food packaging containers",
  },
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

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
              onClick={() => setActiveIndex(index)}
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
