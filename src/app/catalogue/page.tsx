import type { Metadata } from "next";
import CataloguePage from "../../components/catalogue/CataloguePage";
import { SITE_NAME, SITE_URL } from "../../lib/site";
import "./catalogue.css";

const TITLE = "Packaging Product Catalogue (PDF)";
const DESCRIPTION =
  "View or download the Arvis Packaging product catalogue: paper, plastic, molded fiber and aluminum packaging with sizes, case packs and specifications.";
const IMAGE = {
  url: "/assets/catalogue/arvis-catalogue-cover-hd.webp",
  width: 1200,
  height: 899,
  alt: "Cover of the Arvis Packaging product catalogue",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/catalogue" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: "Arvis Packaging",
    locale: "en_US",
    url: "/catalogue",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arvis Packaging`,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      name: "Arvis Packaging Product Catalogue",
      description: DESCRIPTION,
      url: `${SITE_URL}/assets/arvis-catalogue.pdf`,
      encodingFormat: "application/pdf",
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Catalogue", item: `${SITE_URL}/catalogue` },
      ],
    },
  ],
};

export default function Catalogue() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
      />
      <CataloguePage />
    </>
  );
}
