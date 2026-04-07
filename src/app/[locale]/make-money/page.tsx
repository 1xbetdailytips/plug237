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

type Method = {
  title: string;
  slug: string;
  description: string;
  earnings: string;
  difficulty: "Easy" | "Medium" | "Hard";
  device: "phone" | "laptop" | "both";
  timeToStart: string;
  skills: boolean;
  tag: string | null;
  popular: boolean;
};

const methods: Method[] = [
  {
    title: "WhatsApp Status Business",
    slug: "whatsapp-status-business",
    description: "Sell products via WhatsApp Status. Use your existing contacts to start a micro-business with zero capital.",
    earnings: "32,500-195,000 FCFA (~$50-$300)",
    difficulty: "Easy",
    device: "phone",
    timeToStart: "1 day",
    skills: false,
    tag: "HOT",
    popular: true,
  },
  {
    title: "TikTok Creativity Program",
    slug: "tiktok-creativity-program",
    description: "Create short videos and earn from the TikTok Creativity Program. Works with a phone and free editing apps.",
    earnings: "130,000-650,000 FCFA (~$200-$1,000)",
    difficulty: "Medium",
    device: "phone",
    timeToStart: "1 week",
    skills: false,
    tag: "NEW",
    popular: true,
  },
  {
    title: "Fiverr Data Entry & Typing",
    slug: "fiverr-data-entry",
    description: "Offer data entry, copy-paste, and typing services on Fiverr. No technical skills needed — just accuracy and speed.",
    earnings: "65,000-325,000 FCFA (~$100-$500)",
    difficulty: "Easy",
    device: "laptop",
    timeToStart: "2 days",
    skills: false,
    tag: "POPULAR",
    popular: true,
  },
  {
    title: "Remotasks Data Labeling",
    slug: "remotasks-data-labeling",
    description: "Label data for AI companies from your phone or laptop. Tasks include image tagging, text categorization, and content review. Pays via crypto (withdraw to MoMo via Binance P2P).",
    earnings: "25,000-80,000 FCFA (~$38-$123)",
    difficulty: "Easy",
    device: "phone",
    timeToStart: "1 day",
    skills: false,
    tag: "NEW",
    popular: true,
  },
  {
    title: "Online Tutoring (Preply/Cambly)",
    slug: "online-tutoring",
    description: "Teach English or French to international students via Preply or Cambly. Bilingual Cameroonians have a strong advantage. Set your own hours.",
    earnings: "65,000-260,000 FCFA (~$100-$400)",
    difficulty: "Medium",
    device: "laptop",
    timeToStart: "3 days",
    skills: false,
    tag: null,
    popular: true,
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Manage social media accounts for small businesses. Post content, reply to comments, grow their following.",
    earnings: "130,000-390,000 FCFA (~$200-$600)",
    difficulty: "Medium",
    device: "both",
    timeToStart: "3 days",
    skills: false,
    tag: null,
    popular: true,
  },
  {
    title: "YouTube Faceless Channels",
    slug: "youtube-faceless-channels",
    description: "Create YouTube channels using free stock footage and AI narration. Monetize through AdSense and affiliate links.",
    earnings: "65,000-1,300,000 FCFA (~$100-$2,000)",
    difficulty: "Medium",
    device: "laptop",
    timeToStart: "1 week",
    skills: false,
    tag: "POPULAR",
    popular: true,
  },
  {
    title: "Affiliate Marketing",
    slug: "affiliate-marketing",
    description: "Promote products and earn commissions. Use social media, WhatsApp groups, or a blog to drive sales.",
    earnings: "32,500-325,000 FCFA (~$50-$500)",
    difficulty: "Medium",
    device: "both",
    timeToStart: "3 days",
    skills: false,
    tag: null,
    popular: false,
  },
  {
    title: "Transcription (Rev, GoTranscript)",
    slug: "transcription",
    description: "Transcribe audio/video to text. English + French bilingual is a huge advantage in Cameroon.",
    earnings: "97,500-260,000 FCFA (~$150-$400)",
    difficulty: "Easy",
    device: "laptop",
    timeToStart: "2 days",
    skills: false,
    tag: null,
    popular: false,
  },
  {
    title: "Upwork Virtual Assistant",
    slug: "upwork-virtual-assistant",
    description: "Help businesses with emails, scheduling, research, and admin tasks. Great for organized, detail-oriented people.",
    earnings: "195,000-520,000 FCFA (~$300-$800)",
    difficulty: "Medium",
    device: "laptop",
    timeToStart: "3 days",
    skills: false,
    tag: "POPULAR",
    popular: true,
  },
  {
    title: "Canva Graphic Design",
    slug: "canva-graphic-design",
    description: "Design social media posts, logos, and flyers using Canva. Free to learn, high demand from local businesses.",
    earnings: "65,000-260,000 FCFA (~$100-$400)",
    difficulty: "Easy",
    device: "both",
    timeToStart: "2 days",
    skills: false,
    tag: null,
    popular: false,
  },
];

type FilterType = "all" | "phone" | "laptop" | "noSkills";

export default function MakeMoneyPage() {
  const t = useTranslations("makeMoney");
  const locale = useLocale();
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = methods.filter((m) => {
    if (filter === "phone") return m.device === "phone";
    if (filter === "laptop") return m.device === "laptop";
    if (filter === "noSkills") return !m.skills;
    return true;
  });

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "phone", label: t("phone") },
    { key: "laptop", label: t("laptop") },
    { key: "noSkills", label: t("noSkills") },
  ];

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
          {filtered.length} methods
        </span>
      </div>

      {/* Methods List */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden divide-y divide-border">
        {filtered.map((method, i) => (
          <div
            key={i}
            className="p-4 hover:bg-bg-hover transition-colors group cursor-pointer"
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
                    {method.title}
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
                  {method.description}
                </p>
                <div className="flex items-center gap-4 mt-2.5 flex-wrap">
                  <span className="flex items-center gap-1 text-[11px] text-success font-semibold">
                    <DollarSign className="w-3 h-3" />
                    {method.earnings}/mo
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
                  {method.popular && (
                    <span className="flex items-center gap-1 text-[11px] text-accent">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-text-dim group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
