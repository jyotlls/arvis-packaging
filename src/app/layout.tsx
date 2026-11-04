import type { Metadata } from "next";
import { Inter, Instrument_Serif, Manrope } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import GoogleTranslate from "../components/GoogleTranslate";
import { CONTACT, DEFAULT_OG_IMAGE, SITE_INDEXABLE, SITE_NAME, SITE_URL } from "../lib/site";

// Self-hosted by Next.js (no render-blocking request to Google Fonts).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const DESCRIPTION =
  "Paper, plastic, bagasse and aluminum packaging for B2B buyers, with coordinated sourcing, consolidation, warehousing and export support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arvis Packaging | End-to-End B2B Packaging Solutions",
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  // The homepage canonical; every other page sets its own in its metadata.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: "Arvis Packaging | End-to-End B2B Packaging Solutions",
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvis Packaging | End-to-End B2B Packaging Solutions",
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: SITE_INDEXABLE
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

// Organization details for search engines (only facts shown on the site).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/arvis-logo.png`,
  email: CONTACT.email,
  contactPoint: CONTACT.phones.map((telephone) => ({
    "@type": "ContactPoint",
    telephone,
    contactType: "sales",
    email: CONTACT.email,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior lets Next.js switch off the CSS smooth scroll while changing pages,
    // so a new page opens at the top instead of visibly scrolling up
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${instrumentSerif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <GoogleTranslate />
      </body>
    </html>
  );
}
