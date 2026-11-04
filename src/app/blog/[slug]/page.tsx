import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "../../../components/blog/BlogPostPage";
import { INSIGHTS, getInsight } from "../../../data/insights";
import { SITE_NAME, SITE_URL } from "../../../lib/site";
import "./post.css";

// One static page per article.
export function generateStaticParams() {
  return INSIGHTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getInsight(slug);
  if (!post) return {};

  const image = { url: post.image, width: 410, height: 282, alt: post.alt };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    // openGraph is replaced (not merged) per page, so repeat the shared fields
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      locale: "en_US",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.iso,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPost(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getInsight(slug);
  if (!post) notFound();

  // Article structured data for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.iso,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/arvis-logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostPage slug={post.slug} />
    </>
  );
}
