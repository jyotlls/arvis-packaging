import Image from "next/image";
import {
  ArrowUpRight,
  Box,
  Boxes,
  Handbag,
  PackageOpen,
  Printer,
  ShoppingBag,
  SwatchBook,
} from "lucide-react";

type FeatureSectionProps = {
  onOpenQuote: () => void;
};

const features = [
  {
    icon: ShoppingBag,
    title: "Bespoke Premium Bags",
    copy: "Custom paper bags with regular, glossy, matte, laminated, or foil-printed finishes, paired with paper, ribbon, cotton-rope, or paper-rope handles.",
    cta: "Explore Bags",
    href: "#",
  },
  {
    icon: PackageOpen,
    title: "Bespoke Paperboard Boxes",
    copy: "Custom paperboard packaging for burger boxes, fries cups, pizza slice boxes, bakery boxes with windows, gift boxes, and retail magnetic boxes.",
    cta: "Explore Boxes",
    href: "#",
  },
];

const options = [
  { icon: Printer, label: "Print" },
  { icon: SwatchBook, label: "Finish" },
  { icon: Handbag, label: "Handle" },
  { icon: Box, label: "Structure" },
  { icon: Boxes, label: "Box Style" },
];

export default function FeatureSection({ onOpenQuote }: FeatureSectionProps) {
  return (
    <section className="custom" id="custom">
      <div className="custom-stage">
        <Image
          className="custom-a"
          src="/assets/about/bagg.webp"
          alt="Bespoke premium paper bags from the Arvis catalogue"
          width={538}
          height={436}
        />
        <Image
          className="custom-b"
          src="/assets/about/box.webp"
          alt="Bespoke paper board boxes from the Arvis catalogue"
          width={538}
          height={436}
        />
      </div>

      <div className="custom-copy">
        <p className="eyebrow">
           <span className="brand-lines"></span> CUSTOM PACKAGING
        </p>
        <h2>
          Your Brand<br />
          <em>Customized Your Way</em>
        </h2>
        <p>
          Create bespoke paper bags and paperboard boxes tailored to your brand, product, and presentation needs. From print and finishes to handles, structures, and box styles, key details can be customized to suit your requirements.
        </p>

        <ul className="custom-features">
          {features.map(({ icon: Icon, title, copy, cta, href }) => (
            <li key={title}>
              <span className="custom-feature-icon" aria-hidden="true">
                <Icon size={44} strokeWidth={1} />
              </span>
              <div className="custom-feature-body">
                <h3>{title}</h3>
                <p>{copy}</p>
                   <a className="view-all mt-3" href={href}>
                            {cta}
                            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                          </a>
              </div>
        
             
            </li>
          ))}
        </ul>

        <ul className="custom-options">
          {options.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={26} strokeWidth={1} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
