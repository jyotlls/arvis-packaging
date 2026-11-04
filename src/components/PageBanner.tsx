import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type PageBannerProps = {
  title: string;
  image: string;
  /* breadcrumb after "Home"; defaults to the page title */
  trail?: Crumb[];
  /* use "p" when the page has its own h1 further down (e.g. a blog article) */
  titleAs?: "h1" | "p";
  /* "article" sizes the title for long blog headlines */
  variant?: "article";
  /* crop anchor as a CSS position, for photos whose subject isn't bottom-right */
  focus?: string;
};

/* Inner-page banner shared by every page: full-width photo with the title and breadcrumb along a hairline at its foot. */
export default function PageBanner({ title, image, trail = [{ label: title }], titleAs = "h1", variant, focus }: PageBannerProps) {
  const Title = titleAs;
  return (
    <section className={`page-banner${variant ? ` page-banner--${variant}` : ""}`} aria-label={`${title} banner`}>
      <Image
        className="page-banner-img"
        src={image}
        alt=""
        fill
        priority
        quality={90}
        sizes="(min-width: 768px) 100vw, 200vw"
        style={focus ? { objectPosition: focus, transformOrigin: focus } : undefined}
      />
      <div className="page-banner-copy">
        <Title className="page-banner-title">{title}</Title>
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* a crumb with an href is a link; the last one without an href is the current page */}
            {trail.map((crumb, i) =>
              crumb.href ? (
                <li key={crumb.label} className={i === trail.length - 1 ? "is-last" : undefined}>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </li>
              ) : (
                <li key={crumb.label} aria-current={i === trail.length - 1 ? "page" : undefined}>
                  {crumb.label}
                </li>
              ),
            )}
          </ol>
        </nav>
      </div>
    </section>
  );
}
