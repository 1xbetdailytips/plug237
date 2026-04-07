import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  BookOpen,
  Target,
  Gift,
  Smartphone,
  Laptop,
  Zap,
  Clock,
} from "lucide-react";
import Link from "next/link";

const topMethods = [
  {
    title: "WhatsApp Status Business",
    earnings: "30,000-195,000 FCFA/mois",
    difficulty: "Easy",
    device: "phone",
    tag: "HOT",
    href: "/make-money",
  },
  {
    title: "Fiverr Data Entry",
    earnings: "65,000-325,000 FCFA/mois",
    difficulty: "Easy",
    device: "laptop",
    tag: "POPULAR",
    href: "/freelancing",
  },
  {
    title: "TikTok Creativity Program",
    earnings: "130,000-650,000 FCFA/mois",
    difficulty: "Medium",
    device: "phone",
    tag: "NEW",
    href: "/make-money",
  },
  {
    title: "Upwork Virtual Assistant",
    earnings: "195,000-520,000 FCFA/mois",
    difficulty: "Medium",
    device: "laptop",
    tag: "POPULAR",
    href: "/freelancing",
  },
  {
    title: "Remotasks Data Labeling",
    earnings: "40,000-130,000 FCFA/mois",
    difficulty: "Easy",
    device: "phone",
    tag: null,
    href: "/make-money",
  },
];

const latestModules = [
  {
    title: "How to Get Paid on Fiverr from Cameroon (2026 Guide)",
    category: "Freelancing",
    time: "12 min",
    href: "/freelancing",
  },
  {
    title: "MTN MoMo: Receive International Payments in FCFA",
    category: "Payments",
    time: "8 min",
    href: "/payment-guides",
  },
  {
    title: "Start Earning with Your Phone — No Laptop Needed",
    category: "Make Money",
    time: "15 min",
    href: "/make-money",
  },
  {
    title: "Remote Job Platforms Hiring Cameroonians in 2026",
    category: "Remote Jobs",
    time: "5 min",
    href: "/remote-jobs",
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");

  return (
    <div className="max-w-4xl space-y-6">
      {/* Hero Section */}
      <div className="rounded-xl border border-border bg-bg-surface p-6">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-5 h-5 text-accent" />
          <span className="badge bg-accent/15 text-accent">SYSTEM v1.0</span>
        </div>
        <h1 className="text-2xl font-bold text-text mt-2 mb-1">
          {t("welcome")}
        </h1>
        <p className="text-sm text-text-muted max-w-lg mb-5">
          {t("subtitle")}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/${locale}/start-here`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            {t("getStarted")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/${locale}/make-money`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text hover:border-border-light transition-colors"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>

      {/* Value Props Row (replacing fake stats) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: BookOpen, label: "Verified Methods", value: "30+", color: "text-info" },
          { icon: Target, label: "Cameroon-Tailored", value: "100%", color: "text-accent" },
          { icon: Gift, label: "Always Free", value: "0 FCFA", color: "text-success" },
          { icon: Smartphone, label: "Phone & Laptop", value: "Both", color: "text-accent" },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-bg-surface p-3.5"
          >
            <stat.icon className={`w-4 h-4 ${stat.color} mb-2`} />
            <p className="text-lg font-bold text-text">{stat.value}</p>
            <p className="text-[11px] text-text-dim">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Top Methods */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-text">{t("topMethods")}</h2>
          <Link
            href={`/${locale}/make-money`}
            className="text-[12px] text-accent hover:text-accent-hover transition-colors"
          >
            {t("viewAll")} →
          </Link>
        </div>
        <div className="divide-y divide-border">
          {topMethods.map((method, i) => (
            <Link
              key={i}
              href={`/${locale}${method.href}`}
              className="flex items-center gap-4 px-4 py-3 hover:bg-bg-hover transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center flex-shrink-0">
                {method.device === "phone" ? (
                  <Smartphone className="w-4 h-4 text-text-dim" />
                ) : (
                  <Laptop className="w-4 h-4 text-text-dim" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-medium text-text truncate group-hover:text-accent transition-colors">
                    {method.title}
                  </p>
                  {method.tag && (
                    <span
                      className={`badge flex-shrink-0 ${
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
                </div>
                <p className="text-[11px] text-text-dim mt-0.5">
                  {method.difficulty} · {method.device === "phone" ? "Phone" : "Laptop"}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[13px] font-semibold text-success">
                  {method.earnings}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-text-dim group-hover:text-accent transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Modules */}
      <div>
        <h2 className="text-sm font-semibold text-text mb-3">
          {t("latestModules")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {latestModules.map((mod, i) => (
            <Link
              key={i}
              href={`/${locale}${mod.href}`}
              className="rounded-lg border border-border bg-bg-surface p-4 hover:border-border-light hover:bg-bg-hover transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="badge bg-bg-elevated text-text-dim">
                  {mod.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-text-dim">
                  <Clock className="w-3 h-3" />
                  {mod.time}
                </span>
              </div>
              <p className="text-[13px] font-medium text-text group-hover:text-accent transition-colors leading-snug">
                {mod.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
