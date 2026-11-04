"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, MoveRight } from "lucide-react";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";
import { INSIGHTS, getInsight } from "../../data/insights";

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = getInsight(slug)!;
  const index = INSIGHTS.findIndex((p) => p.slug === slug);
  const prev = INSIGHTS[index - 1];
  const next = INSIGHTS[index + 1];
  const others = INSIGHTS.filter((p) => p.slug !== slug);

  const articleRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  // reading progress across the article body
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = articleRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setProgress(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <SiteShell activePage="blog">
      {({ openQuote }) => (
        <main className="bp">
          <span className="bp-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

          <PageBanner
            title={`${post.title} - Blog`}
            variant="article"
            image="/assets/banner/blog-banner.webp"
            trail={[{ label: "Blogs", href: "/blog" }]}
          />

          {/* BODY + SIDEBAR */}
          <div className="bp-layout">
            <article className="bp-article" ref={articleRef}>
              <figure className="bp-cover">
                <span className="bp-cover-frame">
                  <Image src={post.image} alt={post.alt} width={410} height={282} priority sizes="(min-width: 576px) 520px, 92vw" />
                </span>
              </figure>

              <p className="bp-date">
                <CalendarDays size={18} strokeWidth={1.6} aria-hidden="true" />
                <time dateTime={post.iso}>{post.date}</time>
              </p>

              {post.content.map((block, i) => {
                if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
                if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
                return <p key={i}>{block.text}</p>;
              })}

              <nav className="bp-pager" aria-label="More articles">
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className="bp-pager-prev">
                    <small>
                      <ArrowLeft size={15} strokeWidth={1.8} aria-hidden="true" /> Previous
                    </small>
                    {prev.title}
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={`/blog/${next.slug}`} className="bp-pager-next">
                    <small>
                      Next <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                    </small>
                    {next.title}
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            </article>

            <aside className="bp-sidebar">
              <div className="bp-recent">
                <p className="bp-side-title">Recent Posts</p>
                <ul>
                  {others.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`}>
                        <span className="bp-recent-thumb">
                          <Image src={p.image} alt="" width={96} height={66} />
                        </span>
                        <span>
                          <strong>{p.title}</strong>
                          <time dateTime={p.iso}>
                            <CalendarDays size={15} strokeWidth={1.7} aria-hidden="true" />
                            {p.date}
                          </time>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bp-cta">
                <p>Have a packaging requirement?</p>
                <button className="button inverse" type="button" onClick={openQuote}>
                  Request a quote <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </aside>
          </div>
        </main>
      )}
    </SiteShell>
  );
}
