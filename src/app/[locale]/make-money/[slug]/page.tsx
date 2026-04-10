import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Smartphone,
  Laptop,
  Clock,
  DollarSign,
  ChevronRight,
  CheckCircle2,
  Star,
  HelpCircle,
  Wallet,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { methods, methodSlugs } from "@/data/methods";
import { methodContent } from "@/data/method-content";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of siteConfig.locales) {
    for (const slug of methodSlugs) {
      params.push({ locale, slug });
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
  const method = methods.find((m) => m.slug === slug);
  if (!method) return {};

  const isEn = locale === "en";
  const title = isEn ? method.titleEn : method.titleFr;
  const desc = isEn ? method.shortDescEn : method.shortDescFr;

  const seoTitle = isEn
    ? `${title} - How to Earn ${method.earningsXAF} in Cameroon | PLUG237`
    : `${title} - Comment Gagner ${method.earningsXAF} au Cameroun | PLUG237`;

  const seoDesc = isEn
    ? `Step-by-step guide to making money with ${title} from Cameroon. Earn ${method.earningsXAF}. ${desc}`
    : `Guide etape par etape pour gagner de l'argent avec ${title} depuis le Cameroun. Gagnez ${method.earningsXAF}. ${desc}`;

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: `/${locale}/make-money/${slug}`,
      languages: {
        en: `/en/make-money/${slug}`,
        fr: `/fr/make-money/${slug}`,
        "x-default": `/en/make-money/${slug}`,
      },
    },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      type: "article",
      locale: locale === "fr" ? "fr_CM" : "en_CM",
    },
  };
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const color =
    difficulty === "Easy"
      ? "text-success bg-success/10"
      : difficulty === "Medium"
      ? "text-accent bg-accent/10"
      : "text-error bg-error/10";
  return (
    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${color}`}>
      {difficulty}
    </span>
  );
}

function DeviceIcon({ device }: { device: "phone" | "laptop" | "both" }) {
  if (device === "phone") return <Smartphone className="w-4 h-4" />;
  if (device === "laptop") return <Laptop className="w-4 h-4" />;
  return (
    <div className="flex items-center gap-0.5">
      <Smartphone className="w-3.5 h-3.5" />
      <Laptop className="w-3.5 h-3.5" />
    </div>
  );
}

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const method = methods.find((m) => m.slug === slug);
  if (!method) notFound();

  const content = methodContent[slug];
  if (!content) notFound();

  const isEn = locale === "en";
  const lang = isEn ? content.en : content.fr;
  const title = isEn ? method.titleEn : method.titleFr;
  const desc = isEn ? method.shortDescEn : method.shortDescFr;

  const relatedMethods = method.relatedSlugs
    .map((s) => methods.find((m) => m.slug === s))
    .filter(Boolean) as typeof methods;

  // Schema.org JSON-LD — Article (HowTo deprecated by Google Sept 2023)
  const guideArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: desc,
    url: `${siteConfig.url}/${locale}/make-money/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/${locale}/make-money/${slug}` },
    datePublished: "2026-04-07",
    dateModified: "2026-04-09",
    inLanguage: isEn ? "en" : "fr",
    author: {
      "@type": "Person",
      name: "PLUG237 Team",
      url: `${siteConfig.url}/${locale}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "PLUG237",
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png`, width: 512, height: 512 },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lang.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Accueil",
        item: `${siteConfig.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Make Money" : "Gagner de l'Argent",
        item: `${siteConfig.url}/${locale}/make-money`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${siteConfig.url}/${locale}/make-money/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([guideArticleSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <article className="max-w-3xl space-y-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[12px] text-text-dim"
        >
          <Link
            href={`/${locale}`}
            className="hover:text-accent transition-colors"
          >
            {isEn ? "Home" : "Accueil"}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={`/${locale}/make-money`}
            className="hover:text-accent transition-colors"
          >
            {isEn ? "Make Money" : "Gagner de l'Argent"}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text">{title}</span>
        </nav>

        {/* Header */}
        <header>
          <div className="flex items-center gap-2 mb-2">
            {method.tag && (
              <span
                className={`badge ${
                  method.tag === "HOT"
                    ? "bg-error/15 text-error"
                    : method.tag === "NEW"
                    ? "bg-info/15 text-info"
                    : "bg-accent/15 text-accent"
                }`}
              >
                {method.tag}
              </span>
            )}
            <DifficultyBadge difficulty={method.difficulty} />
          </div>
          <h1 className="text-2xl font-bold text-text">{title}</h1>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">{desc}</p>
        </header>

        {/* Quick Info Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-lg border border-border bg-bg-surface p-3">
            <div className="flex items-center gap-1.5 text-[11px] text-text-dim mb-1">
              <DollarSign className="w-3 h-3" />
              {isEn ? "Earnings" : "Revenus"}
            </div>
            <p className="text-[13px] font-semibold text-success">
              {method.earningsXAF}
            </p>
            <p className="text-[10px] text-text-dim">{method.earningsUSD}</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-surface p-3">
            <div className="flex items-center gap-1.5 text-[11px] text-text-dim mb-1">
              <DeviceIcon device={method.device} />
              {isEn ? "Device" : "Appareil"}
            </div>
            <p className="text-[13px] font-semibold text-text capitalize">
              {method.device === "both"
                ? isEn
                  ? "Phone & Laptop"
                  : "Tel. & Laptop"
                : method.device === "phone"
                ? isEn
                  ? "Phone Only"
                  : "Telephone"
                : "Laptop"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-bg-surface p-3">
            <div className="flex items-center gap-1.5 text-[11px] text-text-dim mb-1">
              <Clock className="w-3 h-3" />
              {isEn ? "Time to Start" : "Temps pour Commencer"}
            </div>
            <p className="text-[13px] font-semibold text-text">
              {method.timeToStart}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-bg-surface p-3">
            <div className="flex items-center gap-1.5 text-[11px] text-text-dim mb-1">
              <Wallet className="w-3 h-3" />
              {isEn ? "First Payment" : "1er Paiement"}
            </div>
            <p className="text-[13px] font-semibold text-text">
              {method.timeToFirstPayment}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section>
          <p className="text-[13px] text-text-muted leading-relaxed">
            {lang.introduction}
          </p>
        </section>

        {/* Requirements */}
        <section className="rounded-xl border border-border bg-bg-surface p-5">
          <h2 className="text-base font-bold text-text mb-3">
            {isEn ? "What You Need" : "Ce Dont Vous Avez Besoin"}
          </h2>
          <ul className="space-y-2">
            {lang.requirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] text-text-muted"
              >
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        {/* Step-by-Step Guide */}
        <section>
          <h2 className="text-lg font-bold text-text mb-4">
            {isEn ? "Step-by-Step Guide" : "Guide Etape par Etape"}
          </h2>
          <div className="space-y-4">
            {lang.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-bg-surface p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0 text-[13px] font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-text">
                      {step.title}
                    </h3>
                    <p className="text-[12px] text-text-muted mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Get Paid in Cameroon */}
        <section className="rounded-xl border border-accent/30 bg-accent/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Wallet className="w-5 h-5 text-accent" />
            <h2 className="text-base font-bold text-text">
              {isEn
                ? "How to Get Paid in Cameroon"
                : "Comment Etre Paye au Cameroun"}
            </h2>
          </div>
          <p className="text-[13px] text-text-muted leading-relaxed">
            {lang.howToGetPaid}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {method.paymentMethods.map((pm) => (
              <span
                key={pm}
                className="px-2.5 py-1 rounded-md bg-bg-surface border border-border text-[11px] text-text-dim font-medium"
              >
                {pm}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <Link
              href={`/${locale}/payment-guides`}
              className="text-[12px] text-accent hover:underline inline-flex items-center gap-1"
            >
              {isEn
                ? "Full payment guide for Cameroon"
                : "Guide complet de paiement pour le Cameroun"}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* Earnings Table */}
        <section>
          <h2 className="text-base font-bold text-text mb-3">
            {isEn
              ? "Earnings by Experience Level"
              : "Revenus par Niveau d'Experience"}
          </h2>
          <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-[11px] text-text-dim font-medium p-3">
                    {isEn ? "Level" : "Niveau"}
                  </th>
                  <th className="text-left text-[11px] text-text-dim font-medium p-3">
                    {isEn ? "Time" : "Temps"}
                  </th>
                  <th className="text-left text-[11px] text-text-dim font-medium p-3">
                    {isEn ? "Earnings" : "Revenus"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {lang.earningsTable.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i < lang.earningsTable.length - 1
                        ? "border-b border-border"
                        : ""
                    }
                  >
                    <td className="text-[12px] text-text p-3 font-medium">
                      {row.level}
                    </td>
                    <td className="text-[12px] text-text-muted p-3">
                      {row.hours}
                    </td>
                    <td className="text-[12px] text-success font-semibold p-3">
                      {row.earnings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips for Cameroonians */}
        <section className="rounded-xl border border-border bg-bg-surface p-5">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-accent" />
            <h2 className="text-base font-bold text-text">
              {isEn ? "Tips for Cameroonians" : "Conseils pour les Camerounais"}
            </h2>
          </div>
          <div className="space-y-3">
            {lang.cameroonTips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[13px] text-text-muted"
              >
                <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-text-dim" />
            <h2 className="text-base font-bold text-text">
              {isEn ? "Frequently Asked Questions" : "Questions Frequentes"}
            </h2>
          </div>
          <div className="space-y-3">
            {lang.faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl border border-border bg-bg-surface group"
              >
                <summary className="p-4 cursor-pointer text-[13px] font-semibold text-text hover:text-accent transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 text-text-dim group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-[12px] text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Methods */}
        {relatedMethods.length > 0 && (
          <section>
            <h2 className="text-base font-bold text-text mb-3">
              {isEn ? "Related Methods" : "Methodes Connexes"}
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {relatedMethods.map((rm) => (
                <Link
                  key={rm.slug}
                  href={`/${locale}/make-money/${rm.slug}`}
                  className="rounded-xl border border-border bg-bg-surface p-4 hover:border-accent/40 hover:bg-bg-hover transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-bg-elevated flex items-center justify-center">
                      <DeviceIcon device={rm.device} />
                    </div>
                    {rm.tag && (
                      <span
                        className={`badge text-[9px] ${
                          rm.tag === "HOT"
                            ? "bg-error/15 text-error"
                            : rm.tag === "NEW"
                            ? "bg-info/15 text-info"
                            : "bg-accent/15 text-accent"
                        }`}
                      >
                        {rm.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[13px] font-semibold text-text group-hover:text-accent transition-colors">
                    {isEn ? rm.titleEn : rm.titleFr}
                  </h3>
                  <p className="text-[11px] text-success font-medium mt-1">
                    {rm.earningsXAF}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        <section className="flex flex-wrap gap-2">
          <span className="text-[11px] text-text-dim font-medium mr-1">
            {isEn ? "Skills:" : "Competences :"}
          </span>
          {method.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md bg-bg-elevated border border-border text-[11px] text-text-dim"
            >
              {skill}
            </span>
          ))}
        </section>
      </article>
    </>
  );
}
