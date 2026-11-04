import type { Metadata } from "next";
import ExportPage from "../../components/export/ExportPage";
import { SITE_NAME, SITE_URL } from "../../lib/site";
import "./export.css";

const TITLE = "Export Packaging from India";
const DESCRIPTION =
  "Paper, plastic, bagasse and aluminum packaging exported from India to the USA, UK and UAE, with order consolidation, freight and customs support.";
// 1200×630 JPEG: the size and format every social network previews reliably
const IMAGE = {
  url: "/assets/export/og-export.jpg",
  width: 1200,
  height: 630,
  alt: "Container ship at port with palletised packaging cargo and a forklift",
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Export", item: `${SITE_URL}/export` },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/export" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/export",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [IMAGE.url],
  },
};

export default function Export() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
      />
      <ExportPage />
    </>
  );
}
