import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Users,
  Target,
  DollarSign,
  TrendingUp,
  Smartphone,
  Laptop,
  Zap,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";

const topMethods = [
  {
    title: "WhatsApp Status Business",
    earnings: "$50-300/mo",
    difficulty: "Easy",
    device: "phone",
    tag: "HOT",
    href: "/make-money",
  },
  {
    title: "Fiverr Data Entry",
    earnings: "$100-500/mo",
    difficulty: "Easy",
    device: "laptop",
    tag: "POPULAR",
    href: "/freelancing",
  },
  {
    title: "TikTok Creativity Program",
    earnings: "$200-1000/mo",
    difficulty: "Medium",
    device: "phone",
    tag: "NEW",
    href: "/make-money",
  },
  {
    title: "Upwork Virtual Assistant",
    earnings: "$300-800/mo",
    difficulty: "Medium",
    device: "laptop",
    tag: "POPULAR",
    href: "/freelancing",
  },
  {
    title: "Transcription Jobs",
    earnings: "$150-400/mo",
    difficulty: "Easy",
    device: "laptop",
    tag: null,
    href: "/remote-jobs",
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
    title: "MTN MoMo Cashout: Receive International Payments",
    category: "Resources",
    time: "8 min",
    href: "/resources",
  },
  {
    title: "Start Earning with Your Phone — No Laptop Needed",
    category: "Make Money",
    time: "15 min",
    href: "/make-money",
  },
  {
    title: "Remote Jobs Hiring from Cameroon This Week",
    category: "Remote Jobs",
    time: "5 min",
    href: "/remote-jobs",
  },
];

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations("home");

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
            href="/en/start-here"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            {t("getStarted")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/en/make-money"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text hover:border-border-light transition-colors"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: Users, label: t("activeUsers"), value: "2,400+", color: "text-info" },
          { icon: Target, label: t("methodsTested"), value: "35+", color: "text-accent" },
          { icon: DollarSign, label: t("avgEarnings"), value: "$85", color: "text-success" },
          { icon: TrendingUp, label: t("successRate"), value: "73%", color: "text-accent" },
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
            href="/en/make-money"
            className="text-[12px] text-accent hover:text-accent-hover transition-colors"
          >
            {t("viewAll")} →
          </Link>
        </div>
        <div className="divide-y divide-border">
          {topMethods.map((method, i) => (
            <Link
              key={i}
              href={`/en${method.href}`}
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
              href={`/en${mod.href}`}
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
