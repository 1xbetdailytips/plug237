import { useTranslations } from "next-intl";
import {
  Download,
  BookOpen,
  FileText,
  Users,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";

const downloads = [
  {
    title: "First 65,000 FCFA Online from Cameroon",
    format: "PDF Guide",
    pages: "24 pages",
    description: "Step-by-step guide covering account setup (Payoneer, Binance P2P, MoMo), platform registration, and landing your first paying gig.",
    popular: true,
  },
  {
    title: "Freelancing Profile Templates",
    format: "PDF + Docs",
    pages: "12 templates",
    description: "Ready-to-use bio, description, and portfolio templates optimized for Fiverr, Upwork, and PeoplePerHour — tailored for Cameroonian freelancers.",
    popular: true,
  },
  {
    title: "Cameroon International Payment Guide",
    format: "PDF",
    pages: "8 pages",
    description: "How to receive freelance payments in Cameroon: Payoneer to bank transfer, Binance P2P crypto-to-MoMo, and direct wire options compared.",
    popular: false,
  },
  {
    title: "Client Proposal Templates",
    format: "Google Docs",
    pages: "6 templates",
    description: "Professional proposal and pitch templates with proven structures to win freelancing contracts on international platforms.",
    popular: false,
  },
];

const communities = [
  {
    name: "PLUG237 Telegram",
    members: "Growing",
    description: "Main community for tips, job alerts, and support.",
    platform: "Telegram",
    url: "https://t.me/weplug237",
  },
];

export default function ResourcesPage() {
  const t = useTranslations("resources");

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-text">{t("title")}</h1>
        <p className="text-sm text-text-muted mt-1">{t("subtitle")}</p>
      </div>

      {/* Free Downloads */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Download className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-semibold text-text">{t("downloads")}</h2>
        </div>
        <div className="divide-y divide-border">
          {downloads.map((dl, i) => (
            <div key={i} className="p-4 hover:bg-bg-hover transition-colors group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[13px] font-semibold text-text group-hover:text-accent transition-colors">
                        {dl.title}
                      </h3>
                      {dl.popular && (
                        <span className="badge bg-accent/15 text-accent">
                          <Star className="w-2.5 h-2.5 mr-0.5" /> POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-text-dim mt-0.5">{dl.description}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[10px] text-text-dim">{dl.format}</span>
                      <span className="text-[10px] text-text-dim">·</span>
                      <span className="text-[10px] text-text-dim">{dl.pages}</span>
                      <span className="badge bg-success/15 text-success">FREE</span>
                    </div>
                  </div>
                </div>
                <button className="flex-shrink-0 px-3 py-1.5 rounded-md bg-accent text-black text-[11px] font-semibold hover:bg-accent-hover transition-colors flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communities */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Users className="w-4 h-4 text-info" />
          <h2 className="text-sm font-semibold text-text">{t("communities")}</h2>
        </div>
        <div className="divide-y divide-border">
          {communities.map((c, i) => (
            <div key={i} className="p-4 hover:bg-bg-hover transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[13px] font-semibold text-text">{c.name}</h3>
                    <span className="badge bg-bg-elevated text-text-dim">{c.platform}</span>
                  </div>
                  <p className="text-[11px] text-text-dim mt-0.5">{c.description}</p>
                  <span className="text-[10px] text-text-dim mt-1 flex items-center gap-1">
                    <Users className="w-3 h-3" /> {c.members} community
                  </span>
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-3 py-1.5 rounded-md border border-border text-[11px] font-semibold text-text-muted hover:text-accent hover:border-accent/30 transition-colors flex items-center gap-1"
                >
                  Join <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
