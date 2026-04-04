"use client";

import { useTranslations } from "next-intl";
import {
  Calculator,
  Search,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
  Zap,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

const toolCards = [
  {
    icon: Search,
    titleKey: "platformFinder",
    description: "Answer a few questions and we'll recommend the best platform for you.",
    color: "text-info",
    bgColor: "bg-info/10",
    status: "active",
  },
  {
    icon: ClipboardCheck,
    titleKey: "skillAssessment",
    description: "Discover your marketable skills and which online jobs match them.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    status: "active",
  },
  {
    icon: BarChart3,
    titleKey: "incomeTracker",
    description: "Track your online earnings across platforms in one dashboard.",
    color: "text-success",
    bgColor: "bg-success/10",
    status: "coming",
  },
];

export default function ToolsPage() {
  const t = useTranslations("tools");
  const [hours, setHours] = useState(4);
  const [rate, setRate] = useState(8);
  const [days, setDays] = useState(22);

  const monthly = hours * rate * days;
  const yearly = monthly * 12;

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-text">{t("title")}</h1>
        <p className="text-sm text-text-muted mt-1">{t("subtitle")}</p>
      </div>

      {/* Earnings Calculator */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Calculator className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-semibold text-text">{t("earningsCalc")}</h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div>
              <label className="block text-[11px] font-medium text-text-dim mb-1.5">
                Hours per day
              </label>
              <input
                type="range"
                min={1}
                max={12}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <span className="text-[13px] font-semibold text-text">{hours}h/day</span>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-text-dim mb-1.5">
                Hourly rate (USD)
              </label>
              <input
                type="range"
                min={2}
                max={50}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <span className="text-[13px] font-semibold text-text">${rate}/hr</span>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-text-dim mb-1.5">
                Working days per month
              </label>
              <input
                type="range"
                min={5}
                max={30}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <span className="text-[13px] font-semibold text-text">{days} days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-bg-elevated border border-border p-4 text-center">
              <p className="text-[11px] text-text-dim mb-1">Monthly Earnings</p>
              <p className="text-2xl font-bold text-success">
                ${monthly.toLocaleString()}
              </p>
              <p className="text-[11px] text-text-dim mt-0.5">
                ~{(monthly * 610).toLocaleString()} FCFA
              </p>
            </div>
            <div className="rounded-lg bg-bg-elevated border border-border p-4 text-center">
              <p className="text-[11px] text-text-dim mb-1">Yearly Earnings</p>
              <p className="text-2xl font-bold text-accent">
                ${yearly.toLocaleString()}
              </p>
              <p className="text-[11px] text-text-dim mt-0.5">
                ~{(yearly * 610).toLocaleString()} FCFA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {toolCards.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <div
              key={i}
              className="rounded-lg border border-border bg-bg-surface p-4 hover:border-border-light transition-colors group cursor-pointer"
            >
              <div className={`w-9 h-9 rounded-lg ${tool.bgColor} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${tool.color}`} />
              </div>
              <h3 className="text-[13px] font-semibold text-text group-hover:text-accent transition-colors">
                {t(tool.titleKey)}
              </h3>
              <p className="text-[11px] text-text-dim mt-1 leading-relaxed">
                {tool.description}
              </p>
              {tool.status === "coming" ? (
                <span className="badge bg-bg-elevated text-text-dim mt-3">COMING SOON</span>
              ) : (
                <button className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:text-accent-hover transition-colors">
                  Open Tool <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
