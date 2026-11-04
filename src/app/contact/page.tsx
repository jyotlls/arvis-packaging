import type { Metadata } from "next";
import ContactPage from "../../components/contact/ContactPage";
import { CONTACT_DETAILS } from "../../data/contact";
import { SITE_NAME, SITE_URL } from "../../lib/site";
import "./contact.css";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Contact Arvis Packaging for paper, plastic, molded fiber and aluminum packaging. Email, call or send your requirement to our team in Morbi, Gujarat.";
const IMAGE = { url: "/assets/banner/brand-banner-n.webp", width: 1920, height: 880, alt: "Arvis Packaging branded packaging" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  // openGraph is replaced (not merged) per page, so repeat the shared fields
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/contact",
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

// Contact page structured data, with the head office address
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_DETAILS.email,
    telephone: CONTACT_DETAILS.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: "1,B, Kishan Corporation, 26-30, National Highway, opp. Kuber Cinema, Morbi - 2",
      addressLocality: "Morbi",
      addressRegion: "Gujarat",
      postalCode: "363642",
      addressCountry: "IN",
    },
  },
};

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactPage />
    </>
  );
}
