"use client";

import { useTranslations } from "next-intl";
import {
  Smartphone,
  Laptop,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Filter,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { methods as allMethods } from "@/data/methods";

type FilterType = "all" | "phone" | "laptop" | "noSkills";

export default function MakeMoneyPage() {
  const t = useTranslations("makeMoney");
  const locale = useLocale();
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = allMethods.filter((m) => {
    if (filter === "phone") return m.device === "phone";
    if (filter === "laptop") return m.device === "laptop";
    if (filter === "noSkills") return m.difficulty === "Easy";
    return true;
  });

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "phone", label: t("phone") },
    { key: "laptop", label: t("laptop") },
    { key: "noSkills", label: t("noSkills") },
  ];

  const isEn = locale === "en";

  return (
    <div className="max-w-4xl space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-text">{t("title")}</h1>
        <p className="text-sm text-text-muted mt-1">{t("subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-text-dim" />
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors ${
              filter === f.key
                ? "bg-accent text-black"
                : "border border-border text-text-dim hover:text-text hover:border-border-light"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="text-[12px] text-text-dim ml-auto">
          {filtered.length} {isEn ? "methods" : "methodes"}
        </span>
      </div>

      {/* Methods List */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden divide-y divide-border">
        {filtered.map((method, i) => (
          <Link
            key={i}
            href={`/${locale}/make-money/${method.slug}`}
            className="block p-4 hover:bg-bg-hover transition-colors group"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-bg-elevated flex items-center justify-center flex-shrink-0 mt-0.5">
                {method.device === "phone" ? (
                  <Smartphone className="w-4 h-4 text-text-dim" />
                ) : method.device === "laptop" ? (
                  <Laptop className="w-4 h-4 text-text-dim" />
                ) : (
                  <div className="flex -space-x-1">
                    <Smartphone className="w-3 h-3 text-text-dim" />
                    <Laptop className="w-3 h-3 text-text-dim" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-[14px] font-semibold text-text group-hover:text-accent transition-colors">
                    {isEn ? method.titleEn : method.titleFr}
                  </h3>
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
                <p className="text-[12px] text-text-dim mt-1 leading-relaxed">
                  {isEn ? method.shortDescEn : method.shortDescFr}
                </p>
                <div className="flex items-center gap-4 mt-2.5 flex-wrap">
                  <span className="flex items-center gap-1 text-[11px] text-success font-semibold">
                    <DollarSign className="w-3 h-3" />
                    {method.earningsXAF}
                  </span>
                  <span
                    className={`text-[11px] font-medium ${
                      method.difficulty === "Easy"
                        ? "text-success"
                        : method.difficulty === "Medium"
                        ? "text-accent"
                        : "text-error"
                    }`}
                  >
                    {method.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-text-dim">
                    <Clock className="w-3 h-3" />
                    {method.timeToStart}
                  </span>
                  {method.tag === "POPULAR" && (
                    <span className="flex items-center gap-1 text-[11px] text-accent">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-text-dim group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
