import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blog-posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "Blog — Make Money Online Tips for Cameroon"
    : "Blog — Conseils pour Gagner de l'Argent en Ligne au Cameroun";
  const description = isEn
    ? "Guides, tips, and tutorials on how to earn money online from Cameroon. Freelancing, mobile money, remote jobs, and more."
    : "Guides, astuces et tutoriels pour gagner de l'argent en ligne depuis le Cameroun. Freelance, mobile money, emplois a distance et plus.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/blog`,
      languages: {
        en: `${siteConfig.url}/en/blog`,
        fr: `${siteConfig.url}/fr/blog`,
        "x-default": `${siteConfig.url}/en/blog`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${locale}/blog`,
      siteName: siteConfig.name,
      locale: isEn ? "en_CM" : "fr_CM",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const crumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: "Blog", url: `${siteConfig.url}/${locale}/blog` },
  ];

  return (
    <div className="max-w-4xl space-y-6">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs)),
        }}
      />

      {/* Header */}
      <div>
        <nav className="flex items-center gap-1.5 text-[12px] text-text-dim mb-4">
          <Link
            href={`/${locale}`}
            className="hover:text-accent transition-colors"
          >
            {isEn ? "Home" : "Accueil"}
          </Link>
          <span>/</span>
          <span className="text-text-muted">Blog</span>
        </nav>

        <h1 className="text-2xl font-bold text-text mb-1">
          {isEn ? "Blog" : "Blog"}
        </h1>
        <p className="text-sm text-text-muted max-w-lg">
          {isEn
            ? "Guides, tips, and strategies to earn money online from Cameroon."
            : "Guides, astuces et strategies pour gagner de l'argent en ligne depuis le Cameroun."}
        </p>
      </div>

      {/* Featured Article */}
      <Link
        href={`/${locale}/blog/${featured.slug}`}
        className="block rounded-xl border border-border bg-bg-surface overflow-hidden hover:border-accent/40 transition-all group"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge bg-accent/15 text-accent">
              {isEn ? "LATEST" : "DERNIER"}
            </span>
            <span className="badge bg-bg-elevated text-text-dim">
              {featured.category}
            </span>
          </div>
          <h2 className="text-lg font-bold text-text group-hover:text-accent transition-colors mb-2">
            {isEn ? featured.titleEn : featured.titleFr}
          </h2>
          <p className="text-sm text-text-muted mb-4 line-clamp-2">
            {isEn ? featured.descEn : featured.descFr}
          </p>
          <div className="flex items-center gap-4 text-[12px] text-text-dim">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {featured.readTime}
            </span>
            <span>{formatDate(featured.datePublished, locale)}</span>
          </div>
        </div>
      </Link>

      {/* Articles Grid */}
      <div>
        <h2 className="text-sm font-semibold text-text mb-3">
          {isEn ? "All Articles" : "Tous les Articles"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="rounded-lg border border-border bg-bg-surface p-4 hover:border-accent/30 hover:bg-bg-hover transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="badge bg-bg-elevated text-text-dim">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-text-dim">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-[13px] font-medium text-text group-hover:text-accent transition-colors leading-snug mb-2">
                {isEn ? post.titleEn : post.titleFr}
              </h3>
              <p className="text-[12px] text-text-dim line-clamp-2 mb-3">
                {isEn ? post.descEn : post.descFr}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-text-dim">
                  {formatDate(post.datePublished, locale)}
                </span>
                <span className="flex items-center gap-1 text-[12px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  {isEn ? "Read" : "Lire"}{" "}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Telegram CTA */}
      <div className="rounded-xl border border-border bg-bg-surface p-6 text-center">
        <h2 className="text-sm font-semibold text-text mb-1">
          {isEn ? "Get New Articles First" : "Recois les Nouveaux Articles en Premier"}
        </h2>
        <p className="text-[12px] text-text-dim mb-4">
          {isEn
            ? "Join our Telegram community for daily tips and new article notifications."
            : "Rejoins notre communaute Telegram pour des astuces quotidiennes et les notifications de nouveaux articles."}
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
    </div>
  );
}
