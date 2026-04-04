"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Send, ArrowRight, TrendingUp, Zap } from "lucide-react";

export default function RightPanel() {
  const t = useTranslations("cta");

  return (
    <aside className="hidden xl:flex flex-col w-[260px] border-l border-border bg-bg-surface/50 p-4 gap-4 overflow-y-auto">
      {/* Quick Tips */}
      <div className="rounded-lg border border-border p-3">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-accent" />
          <h3 className="text-[12px] font-semibold text-text">Quick Tips</h3>
        </div>
        <div className="space-y-2.5">
          {[
            "Start with methods that need only a phone",
            "Use MTN MoMo or Orange Money to receive payments",
            "Consistency beats talent — work daily",
          ].map((tip, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-1 rounded-full bg-accent/30 flex-shrink-0" />
              <p className="text-[11px] text-text-dim leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community CTA */}
      <div className="rounded-lg border border-accent/20 bg-accent-dim p-3">
        <h3 className="text-[12px] font-semibold text-accent mb-1">
          {t("joinCommunity")}
        </h3>
        <p className="text-[11px] text-text-dim leading-relaxed mb-3">
          {t("joinDesc")}
        </p>
        <div className="space-y-1.5">
          <button className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-[#0088cc] text-white text-[11px] font-semibold hover:bg-[#0077b5] transition-colors">
            <Send className="w-3 h-3" />
            {t("telegram")}
          </button>
          <button className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-[#25D366] text-white text-[11px] font-semibold hover:bg-[#20bd5a] transition-colors">
            <MessageCircle className="w-3 h-3" />
            {t("whatsapp")}
          </button>
        </div>
      </div>

      {/* Trending */}
      <div className="rounded-lg border border-border p-3">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-success" />
          <h3 className="text-[12px] font-semibold text-text">Trending</h3>
        </div>
        <div className="space-y-2">
          {[
            { title: "WhatsApp Status Business", tag: "HOT" },
            { title: "Fiverr Data Entry", tag: "NEW" },
            { title: "TikTok Affiliate", tag: "POPULAR" },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-bg-hover transition-colors group"
            >
              <span className="text-[11px] text-text-muted group-hover:text-text transition-colors">
                {item.title}
              </span>
              <span
                className={`badge ${
                  item.tag === "HOT"
                    ? "bg-error/15 text-error"
                    : item.tag === "NEW"
                    ? "bg-info/15 text-info"
                    : "bg-accent/15 text-accent"
                }`}
              >
                {item.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Email Capture */}
      <div className="rounded-lg border border-border p-3">
        <h3 className="text-[12px] font-semibold text-text mb-1">
          Weekly Money Tips
        </h3>
        <p className="text-[11px] text-text-dim mb-2">
          Get methods that work, straight to your inbox.
        </p>
        <div className="flex gap-1.5">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-2.5 py-1.5 rounded-md bg-bg-elevated border border-border text-[11px] text-text placeholder:text-text-dim outline-none focus:border-accent/40 transition-colors"
          />
          <button className="px-2 py-1.5 rounded-md bg-accent text-black hover:bg-accent-hover transition-colors">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
