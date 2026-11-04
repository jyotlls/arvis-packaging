/* Site-wide settings used by metadata, robots.txt, sitemap.xml and structured data. */

// Live domain. Set NEXT_PUBLIC_SITE_URL in the deployment if it differs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arvispackaging.com").replace(/\/$/, "");

export const SITE_NAME = "Arvis Packaging";

// Keep the site out of search engines until launch — switch to true when going live.
// Controls the robots meta tag, robots.txt and the sitemap together.
export const SITE_INDEXABLE = false;

export const CONTACT = {
  email: "sales@arvispackaging.com",
  phones: ["+91-81696-04127", "+1-203-527-0992"],
};

// Default social-share image (used when a page doesn't set its own).
export const DEFAULT_OG_IMAGE = {
  url: "/assets/banner/banner-1.webp",
  width: 1920,
  height: 880,
  alt: "Arvis Packaging paper, plastic, molded fiber and aluminum packaging",
};
