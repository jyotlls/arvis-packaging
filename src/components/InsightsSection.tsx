import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "../data/insights";

type InsightsSectionProps = {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
};

/* Knowledge-hub section, shared by the homepage and the blog page. */
export default function InsightsSection({
  eyebrow = "KNOWLEDGE HUB",
  heading = "Explore Insights",
  headingAccent = "Guides, Materials & Packaging Trends",
}: InsightsSectionProps) {
  return (
    <section className="insights " id="insights">
      <div className="insights-head">
        <div>
          <p className="eyebrow">
            <span className="brand-lines"></span>
            {eyebrow}
          </p>

          <h2 className="mb-0">
            {heading}
            <br /> <em>{headingAccent}</em>{" "}
          </h2>
        </div>
      </div>

      <div className="insights-grid">
        {INSIGHTS.map((post) => (
          <article className="insight-card" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <figure>
                <Image src={post.image} alt={post.alt} width={410} height={282} />
              </figure>
              <div className="insight-body">
                <time dateTime={post.iso}>{post.date}</time>
                <h3>{post.title}</h3>
                <span className="insight-link">
                  Read insight
                  <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
