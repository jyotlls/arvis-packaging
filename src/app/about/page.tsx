import type { Metadata } from "next";
import AboutPage from "../../components/about/AboutPage";
import { SITE_NAME, SITE_URL } from "../../lib/site";
import "./about.css";

const TITLE = "About Arvis Packaging | Packaging Supplier from India";
const DESCRIPTION =
  "Arvis Packaging brings together seven manufacturing units in India, supplying paper, plastic, bagasse and aluminum packaging to buyers in the USA, UAE and UK.";
// 1200×630 JPEG: the size and format every social network previews reliably
const IMAGE = {
  url: "/assets/about/og-about.jpg",
  width: 1200,
  height: 630,
  alt: "Arvis paper, plastic, bagasse and aluminum food packaging range",
};

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/about",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/about`,
      about: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about` },
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
      />
      <AboutPage />
    </>
  );
}
