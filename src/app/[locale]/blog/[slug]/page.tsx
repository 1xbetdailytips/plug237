import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog-posts";
import { getBlogContent } from "@/data/blog-content";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of siteConfig.locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const isEn = locale === "en";
  const title = isEn ? post.titleEn : post.titleFr;
  const description = isEn ? post.descEn : post.descFr;
  const url = `${siteConfig.url}/${locale}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en/blog/${slug}`,
        fr: `${siteConfig.url}/fr/blog/${slug}`,
        "x-default": `${siteConfig.url}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: isEn ? "en_CM" : "fr_CM",
      alternateLocale: isEn ? "fr_CM" : "en_CM",
      type: "article",
      publishedTime: post.datePublished,
      images: [{ url: `${siteConfig.url}${post.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.url}${post.image}`] },
    robots: { index: true, follow: true },
  };
}

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isEn = locale === "en";

  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = getBlogContent(slug, locale);
  if (!content) notFound();

  const title = isEn ? post.titleEn : post.titleFr;
  const related = getRelatedPosts(slug, content.relatedSlugs);

  const crumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: "Blog", url: `${siteConfig.url}/${locale}/blog` },
    { name: title, url: `${siteConfig.url}/${locale}/blog/${slug}` },
  ];

  const navLabels: Record<string, Record<string, string>> = {
    "/make-money": {
      en: "Make Money Methods",
      fr: "Methodes pour Gagner",
    },
    "/freelancing": {
      en: "Freelancing Hub",
      fr: "Hub Freelance",
    },
    "/payment-guides": {
      en: "Payment Guides",
      fr: "Guides de Paiement",
    },
    "/start-here": {
      en: "Start Here",
      fr: "Commencer Ici",
    },
    "/remote-jobs": {
      en: "Remote Jobs",
      fr: "Emplois en Ligne",
    },
    "/tools": {
      en: "Tools & Calculators",
      fr: "Outils & Calculatrices",
    },
  };

  return (
    <article className="max-w-3xl space-y-6">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: isEn ? post.descEn : post.descFr,
              url: `${siteConfig.url}/${locale}/blog/${slug}`,
              datePublished: post.datePublished,
              image: `${siteConfig.url}${post.image}`,
              locale,
            })
          ),
        }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-text-dim flex-wrap">
        <Link
          href={`/${locale}`}
          className="hover:text-accent transition-colors"
        >
          {isEn ? "Home" : "Accueil"}
        </Link>
        <span>/</span>
        <Link
          href={`/${locale}/blog`}
          className="hover:text-accent transition-colors"
        >
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-muted truncate max-w-[200px]">{title}</span>
      </nav>

      {/* Article Header */}
      <header className="rounded-xl border border-border bg-bg-surface p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge bg-accent/15 text-accent">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-text-dim">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-text mb-3">
          {title}
        </h1>
        <p className="text-sm text-text-muted mb-3">
          {isEn ? post.descEn : post.descFr}
        </p>
        <div className="flex items-center gap-4 text-[12px] text-text-dim">
          <span>{formatDate(post.datePublished, locale)}</span>
          <span>
            {isEn ? "By" : "Par"} {siteConfig.name}
          </span>
        </div>
      </header>

      {/* Article Body */}
      <div className="rounded-xl border border-border bg-bg-surface p-6 space-y-6">
        {/* Intro */}
        <p className="text-sm text-text leading-relaxed">{content.intro}</p>

        {/* Table of Contents */}
        <div className="rounded-lg bg-bg-elevated p-4 border border-border">
          <p className="text-[12px] font-semibold text-text-muted uppercase tracking-wide mb-2">
            {isEn ? "In This Article" : "Dans Cet Article"}
          </p>
          <ul className="space-y-1.5">
            {content.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-[13px] text-accent hover:text-accent-hover transition-colors"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {content.sections.map((section, i) => (
          <div key={i} id={`section-${i}`} className="scroll-mt-20">
            <h2 className="text-base font-bold text-text mb-3">
              {section.heading}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Conclusion */}
        <div className="border-t border-border pt-6">
          <h2 className="text-base font-bold text-text mb-3">
            {isEn ? "Conclusion" : "Conclusion"}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {content.conclusion}
          </p>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <Tag className="w-3.5 h-3.5 text-text-dim" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="badge bg-bg-elevated text-text-dim text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Explore Methods CTA */}
      {content.relatedMethodSlugs.length > 0 && (
        <div className="rounded-xl border border-border bg-bg-surface p-5">
          <h2 className="text-sm font-semibold text-text mb-3">
            {isEn ? "Explore Related Guides" : "Explore les Guides Associes"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {content.relatedMethodSlugs.map((methodSlug) => (
              <Link
                key={methodSlug}
                href={`/${locale}${methodSlug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-[12px] font-medium text-text-muted hover:text-accent hover:border-accent/30 transition-all"
              >
                {navLabels[methodSlug]?.[locale] || methodSlug}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-text mb-3">
            {isEn ? "Related Articles" : "Articles Associes"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {related.slice(0, 3).map((rPost) => (
              <Link
                key={rPost.slug}
                href={`/${locale}/blog/${rPost.slug}`}
                className="rounded-lg border border-border bg-bg-surface p-4 hover:border-accent/30 hover:bg-bg-hover transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge bg-bg-elevated text-text-dim">
                    {rPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-text-dim">
                    <Clock className="w-3 h-3" />
                    {rPost.readTime}
                  </span>
                </div>
                <h3 className="text-[13px] font-medium text-text group-hover:text-accent transition-colors leading-snug">
                  {isEn ? rPost.titleEn : rPost.titleFr}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Telegram CTA */}
      <div className="rounded-xl border border-accent/20 bg-accent-dim p-6 text-center">
        <h2 className="text-sm font-semibold text-text mb-1">
          {isEn
            ? "Join the PLUG237 Community"
            : "Rejoins la Communaute PLUG237"}
        </h2>
        <p className="text-[12px] text-text-dim mb-4">
          {isEn
            ? "Get daily money-making tips, ask questions, and connect with other hustlers in Cameroon."
            : "Recois des astuces quotidiennes, pose tes questions et connecte-toi avec d'autres hustlers au Cameroun."}
        </p>
        <a
          href="https://t.me/weplug237"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          {isEn ? "Join Telegram" : "Rejoindre Telegram"}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Back to Blog */}
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-1.5 text-[13px] text-text-dim hover:text-accent transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        {isEn ? "Back to Blog" : "Retour au Blog"}
      </Link>
    </article>
  );
}
