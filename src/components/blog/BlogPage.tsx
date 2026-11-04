"use client";

import InsightsSection from "../InsightsSection";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";

export default function BlogPage() {
  return (
    <SiteShell activePage="blog">
      {() => (
        <main>
          <PageBanner title="Blogs" image="/assets/banner/blog-banner.webp" />
          <InsightsSection
            eyebrow="Latest Articles"
            heading="Fresh Perspectives on "
            headingAccent="Modern Packaging Solutions"
          />
        </main>
      )}
    </SiteShell>
  );
}
