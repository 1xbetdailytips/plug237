import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Star,
  DollarSign,
  Users,
  Globe,
  CheckCircle,
  XCircle,
  Minus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Freelancing in Cameroon — Platform Comparison & Skills Guide",
  description:
    "Compare Fiverr, Upwork, Freelancer, PeoplePerHour for Cameroonians. In-demand skills, earnings potential, and payment methods that work.",
};

const platforms = [
  {
    name: "Fiverr",
    logo: "F",
    color: "bg-green-500",
    earningsRange: "32,500-1,300,000 FCFA/mo (~$50-$2,000)",
    difficulty: "Easy",
    paysCameroon: true,
    paymentMethod: "Payoneer, Bank Transfer, Crypto P2P",
    cameroonPayment: "Payoneer to bank, or Crypto P2P to MoMo",
    commission: "20%",
    bestFor: "Beginners, quick gigs",
    rating: 4.5,
    pros: ["Easy to start", "Buyer contacts you", "Many categories"],
    cons: ["High commission", "Lots of competition", "Low starting prices"],
  },
  {
    name: "Upwork",
    logo: "U",
    color: "bg-emerald-600",
    earningsRange: "65,000-3,250,000 FCFA/mo (~$100-$5,000)",
    difficulty: "Medium",
    paysCameroon: true,
    paymentMethod: "Payoneer, Bank Transfer, Crypto P2P",
    cameroonPayment: "Payoneer to bank, or direct wire transfer",
    commission: "10-20%",
    bestFor: "Long-term clients, higher rates",
    rating: 4.3,
    pros: ["Higher pay potential", "Long-term contracts", "Hourly tracking"],
    cons: ["Harder to get first job", "Connects cost money", "Profile approval needed"],
  },
  {
    name: "Freelancer.com",
    logo: "FL",
    color: "bg-blue-500",
    earningsRange: "32,500-650,000 FCFA/mo (~$50-$1,000)",
    difficulty: "Medium",
    paysCameroon: true,
    paymentMethod: "Payoneer, Bank Transfer, Crypto P2P",
    cameroonPayment: "Payoneer to bank, or Crypto P2P to MoMo",
    commission: "10%",
    bestFor: "Contests, diverse projects",
    rating: 3.8,
    pros: ["Lower commission", "Contest format", "Many project types"],
    cons: ["Lower quality clients", "More scams", "UI less polished"],
  },
  {
    name: "PeoplePerHour",
    logo: "PPH",
    color: "bg-orange-500",
    earningsRange: "65,000-1,300,000 FCFA/mo (~$100-$2,000)",
    difficulty: "Medium",
    paysCameroon: true,
    paymentMethod: "Payoneer, Bank Transfer, Crypto P2P",
    cameroonPayment: "Payoneer to bank account",
    commission: "20%",
    bestFor: "European clients, specialized work",
    rating: 3.9,
    pros: ["Good European market", "Hourlies feature", "Less competition"],
    cons: ["Smaller marketplace", "Limited categories", "Slow approval"],
  },
];

const skills = [
  { name: "Data Entry", demand: "High", avgPay: "3,250-9,750 FCFA/hr (~$5-$15)", learnTime: "1 day", device: "Laptop" },
  { name: "Social Media Management", demand: "High", avgPay: "5,200-16,250 FCFA/hr (~$8-$25)", learnTime: "1 week", device: "Phone/Laptop" },
  { name: "Graphic Design (Canva)", demand: "High", avgPay: "6,500-19,500 FCFA/hr (~$10-$30)", learnTime: "1 week", device: "Laptop" },
  { name: "Transcription", demand: "Medium", avgPay: "3,250-13,000 FCFA/hr (~$5-$20)", learnTime: "2 days", device: "Laptop" },
  { name: "Virtual Assistant", demand: "High", avgPay: "5,200-13,000 FCFA/hr (~$8-$20)", learnTime: "3 days", device: "Laptop" },
  { name: "Content Writing", demand: "High", avgPay: "6,500-26,000 FCFA/hr (~$10-$40)", learnTime: "1 week", device: "Laptop" },
  { name: "Video Editing", demand: "Medium", avgPay: "9,750-32,500 FCFA/hr (~$15-$50)", learnTime: "2 weeks", device: "Laptop" },
  { name: "Translation (EN/FR)", demand: "High", avgPay: "6,500-19,500 FCFA/hr (~$10-$30)", learnTime: "None", device: "Phone/Laptop" },
];

export default function FreelancingPage() {
  const t = useTranslations("freelancing");

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-text">{t("title")}</h1>
        <p className="text-sm text-text-muted mt-1">{t("subtitle")}</p>
      </div>

      {/* Platform Comparison Table */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-text">{t("platforms")}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-border text-text-dim">
                <th className="text-left px-4 py-2.5 font-medium">Platform</th>
                <th className="text-left px-4 py-2.5 font-medium">Earnings</th>
                <th className="text-left px-4 py-2.5 font-medium">Commission</th>
                <th className="text-left px-4 py-2.5 font-medium">Pays CM</th>
                <th className="text-left px-4 py-2.5 font-medium">Payment</th>
                <th className="text-left px-4 py-2.5 font-medium">Best For</th>
                <th className="text-center px-4 py-2.5 font-medium">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {platforms.map((p, i) => (
                <tr key={i} className="hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-md ${p.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                        {p.logo}
                      </div>
                      <span className="font-semibold text-text">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-success font-semibold">{p.earningsRange}</td>
                  <td className="px-4 py-3 text-text-muted">{p.commission}</td>
                  <td className="px-4 py-3">
                    {p.paysCameroon ? (
                      <CheckCircle className="w-4 h-4 text-success" />
                    ) : (
                      <XCircle className="w-4 h-4 text-error" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-text-muted">{p.paymentMethod}</td>
                  <td className="px-4 py-3 text-text-muted">{p.bestFor}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="text-text font-medium">{p.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Platform Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {platforms.map((p, i) => (
          <div key={i} className="rounded-lg border border-border bg-bg-surface p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-md ${p.color} flex items-center justify-center text-white text-[11px] font-bold`}>
                {p.logo}
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-text">{p.name}</h3>
                <p className="text-[11px] text-text-dim">{p.difficulty} · {p.earningsRange}</p>
              </div>
            </div>
            <p className="text-[11px] text-text-dim mb-2">
              <span className="font-medium text-text-muted">CM Payment:</span> {p.cameroonPayment}
            </p>
            <div className="space-y-1.5 mb-3">
              {p.pros.map((pro, j) => (
                <div key={j} className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                  <span className="text-[11px] text-text-muted">{pro}</span>
                </div>
              ))}
              {p.cons.map((con, j) => (
                <div key={j} className="flex items-center gap-2">
                  <Minus className="w-3 h-3 text-text-dim flex-shrink-0" />
                  <span className="text-[11px] text-text-dim">{con}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-1.5 rounded-md border border-border text-[11px] font-semibold text-text-muted hover:text-accent hover:border-accent/30 transition-colors">
              Full Guide →
            </button>
          </div>
        ))}
      </div>

      {/* In-Demand Skills Table */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-text">{t("skills")}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-border text-text-dim">
                <th className="text-left px-4 py-2.5 font-medium">Skill</th>
                <th className="text-left px-4 py-2.5 font-medium">Demand</th>
                <th className="text-left px-4 py-2.5 font-medium">Avg Pay</th>
                <th className="text-left px-4 py-2.5 font-medium">Learn Time</th>
                <th className="text-left px-4 py-2.5 font-medium">Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {skills.map((s, i) => (
                <tr key={i} className="hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-2.5 font-medium text-text">{s.name}</td>
                  <td className="px-4 py-2.5">
                    <span className={`badge ${s.demand === "High" ? "bg-success/15 text-success" : "bg-accent/15 text-accent"}`}>
                      {s.demand}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-success font-medium">{s.avgPay}</td>
                  <td className="px-4 py-2.5 text-text-muted">{s.learnTime}</td>
                  <td className="px-4 py-2.5 text-text-muted">{s.device}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
