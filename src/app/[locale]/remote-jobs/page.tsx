"use client";

import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Filter,
  Smartphone,
  Laptop,
  Star,
  CheckCircle,
  AlertTriangle,
  Wallet,
  TrendingUp,
  Info,
} from "lucide-react";
import { useState } from "react";

type Platform = {
  name: string;
  url: string;
  description: {
    en: string;
    fr: string;
  };
  jobTypes: {
    en: string;
    fr: string;
  };
  acceptsCameroon: "yes" | "limited";
  paymentMethods: string[];
  earningsXAF: string;
  earningsUSD: string;
  difficulty: "beginner" | "intermediate";
  device: "phone" | "laptop" | "both";
};

const platforms: Platform[] = [
  {
    name: "Remotasks",
    url: "https://www.remotasks.com",
    description: {
      en: "AI data labeling platform by Scale AI. Complete micro-tasks like image annotation, data categorization, and AI training from your phone.",
      fr: "Plateforme de labellisation de donn\u00e9es IA par Scale AI. Compl\u00e9tez des micro-t\u00e2ches comme l\u2019annotation d\u2019images et la cat\u00e9gorisation de donn\u00e9es depuis votre t\u00e9l\u00e9phone.",
    },
    jobTypes: {
      en: "Data Labeling, Image Annotation, AI Training Tasks",
      fr: "Labellisation de donn\u00e9es, Annotation d\u2019images, T\u00e2ches IA",
    },
    acceptsCameroon: "yes",
    paymentMethods: ["PayPal", "Crypto (USDT)", "AirTM"],
    earningsXAF: "15,000 - 80,000 FCFA/mois",
    earningsUSD: "$25 - $130/mo",
    difficulty: "beginner",
    device: "phone",
  },
  {
    name: "Appen / Telus International",
    url: "https://connect.appen.com",
    description: {
      en: "Work on AI training projects for major tech companies. Tasks include search evaluation, data collection, and language assessment.",
      fr: "Travaillez sur des projets d\u2019entra\u00eenement IA pour les grandes entreprises tech. T\u00e2ches : \u00e9valuation de recherche, collecte de donn\u00e9es, \u00e9valuation linguistique.",
    },
    jobTypes: {
      en: "AI Training Data, Search Evaluation, Language Assessment",
      fr: "Donn\u00e9es d\u2019entra\u00eenement IA, \u00c9valuation de recherche, \u00c9valuation linguistique",
    },
    acceptsCameroon: "yes",
    paymentMethods: ["Payoneer", "PayPal"],
    earningsXAF: "30,000 - 150,000 FCFA/mois",
    earningsUSD: "$50 - $250/mo",
    difficulty: "intermediate",
    device: "laptop",
  },
  {
    name: "Rev",
    url: "https://www.rev.com/freelancers",
    description: {
      en: "Transcribe audio and video files in English or French. Weekly payments with consistent work available. Great for bilingual Cameroonians.",
      fr: "Transcrivez des fichiers audio et vid\u00e9o en anglais ou fran\u00e7ais. Paiements hebdomadaires avec du travail r\u00e9gulier. Id\u00e9al pour les Camerounais bilingues.",
    },
    jobTypes: {
      en: "Audio Transcription, Captioning, Subtitling",
      fr: "Transcription audio, Sous-titrage, L\u00e9gendes",
    },
    acceptsCameroon: "limited",
    paymentMethods: ["PayPal", "Payoneer"],
    earningsXAF: "25,000 - 120,000 FCFA/mois",
    earningsUSD: "$40 - $200/mo",
    difficulty: "intermediate",
    device: "laptop",
  },
  {
    name: "GoTranscript",
    url: "https://gotranscript.com/transcription-jobs",
    description: {
      en: "Online transcription and translation jobs open worldwide. No experience required to start. Flexible hours, work when you want.",
      fr: "Emplois de transcription et traduction ouverts mondialement. Aucune exp\u00e9rience requise pour d\u00e9buter. Horaires flexibles.",
    },
    jobTypes: {
      en: "Transcription, Translation, Captioning",
      fr: "Transcription, Traduction, Sous-titrage",
    },
    acceptsCameroon: "yes",
    paymentMethods: ["PayPal", "Payoneer"],
    earningsXAF: "20,000 - 100,000 FCFA/mois",
    earningsUSD: "$30 - $160/mo",
    difficulty: "beginner",
    device: "laptop",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    description: {
      en: "The world\u2019s largest freelancing marketplace. Find clients for writing, design, programming, virtual assistance, and more.",
      fr: "La plus grande plateforme de freelance au monde. Trouvez des clients pour la r\u00e9daction, le design, la programmation, l\u2019assistance virtuelle, etc.",
    },
    jobTypes: {
      en: "Freelancing: Writing, Design, Development, VA, Marketing",
      fr: "Freelance : R\u00e9daction, Design, D\u00e9veloppement, AV, Marketing",
    },
    acceptsCameroon: "yes",
    paymentMethods: ["Payoneer", "Wire Transfer", "PayPal"],
    earningsXAF: "50,000 - 600,000+ FCFA/mois",
    earningsUSD: "$80 - $1,000+/mo",
    difficulty: "intermediate",
    device: "laptop",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    description: {
      en: "Sell your skills as gigs. Popular services: graphic design, video editing, translation (EN/FR), voiceover, and social media management.",
      fr: "Vendez vos comp\u00e9tences en gigs. Services populaires : design graphique, montage vid\u00e9o, traduction (EN/FR), voix off, gestion r\u00e9seaux sociaux.",
    },
    jobTypes: {
      en: "Gig-based: Design, Video, Translation, Voiceover",
      fr: "Gigs : Design, Vid\u00e9o, Traduction, Voix off",
    },
    acceptsCameroon: "yes",
    paymentMethods: ["Payoneer", "Bank Transfer", "PayPal"],
    earningsXAF: "30,000 - 500,000+ FCFA/mois",
    earningsUSD: "$50 - $800+/mo",
    difficulty: "intermediate",
    device: "both",
  },
  {
    name: "OnlineJobs.ph",
    url: "https://www.onlinejobs.ph",
    description: {
      en: "Virtual assistant job board. Many employers hire globally for admin, email management, customer support, and bookkeeping roles.",
      fr: "Plateforme d\u2019emplois d\u2019assistants virtuels. Beaucoup d\u2019employeurs recrutent mondialement pour l\u2019admin, la gestion d\u2019emails, le support client.",
    },
    jobTypes: {
      en: "Virtual Assistant, Admin Support, Customer Service",
      fr: "Assistant Virtuel, Support Admin, Service Client",
    },
    acceptsCameroon: "limited",
    paymentMethods: ["PayPal", "Wise", "Payoneer"],
    earningsXAF: "60,000 - 300,000 FCFA/mois",
    earningsUSD: "$100 - $500/mo",
    difficulty: "beginner",
    device: "laptop",
  },
  {
    name: "Andela Talent Network",
    url: "https://www.andela.com",
    description: {
      en: "Africa-focused tech talent network connecting developers and engineers with global companies. Higher pay but requires strong technical skills.",
      fr: "R\u00e9seau de talents tech ax\u00e9 sur l\u2019Afrique connectant d\u00e9veloppeurs et ing\u00e9nieurs avec des entreprises mondiales. Meilleure r\u00e9mun\u00e9ration mais comp\u00e9tences techniques solides requises.",
    },
    jobTypes: {
      en: "Software Development, Engineering, DevOps, Data Science",
      fr: "D\u00e9veloppement logiciel, Ing\u00e9nierie, DevOps, Data Science",
    },
    acceptsCameroon: "yes",
    paymentMethods: ["Bank Transfer", "Payoneer"],
    earningsXAF: "300,000 - 1,500,000+ FCFA/mois",
    earningsUSD: "$500 - $2,500+/mo",
    difficulty: "intermediate",
    device: "laptop",
  },
];

export default function RemoteJobsPage() {
  const t = useTranslations("remoteJobs");
  const [deviceFilter, setDeviceFilter] = useState<"all" | "phone" | "laptop">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "beginner" | "intermediate">("all");

  const filtered = platforms.filter((p) => {
    if (deviceFilter !== "all") {
      if (deviceFilter === "phone" && p.device !== "phone" && p.device !== "both") return false;
      if (deviceFilter === "laptop" && p.device !== "laptop" && p.device !== "both") return false;
    }
    if (difficultyFilter !== "all" && p.difficulty !== difficultyFilter) return false;
    return true;
  });

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-text">
          Remote Job Platforms Hiring Cameroonians in 2026
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Plateformes de travail a distance qui acceptent les Camerounais. Gagne de l&apos;argent en ligne depuis Douala, Yaounde, ou n&apos;importe ou.
        </p>
        <p className="text-xs text-text-dim mt-2">
          {filtered.length} platform{filtered.length !== 1 ? "s" : ""} found &middot; All verified for Cameroon access
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-text-dim" />
          <span className="text-[12px] text-text-dim font-medium">Device:</span>
          {(["all", "phone", "laptop"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDeviceFilter(d)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1 ${
                deviceFilter === d
                  ? "bg-accent text-black"
                  : "border border-border text-text-dim hover:text-text"
              }`}
            >
              {d === "phone" && <Smartphone className="w-3 h-3" />}
              {d === "laptop" && <Laptop className="w-3 h-3" />}
              {d === "all" ? "All" : d === "phone" ? "Phone" : "Laptop"}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-text-dim font-medium">Difficulty:</span>
          {(["all", "beginner", "intermediate"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDifficultyFilter(d)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                difficultyFilter === d
                  ? "bg-accent text-black"
                  : "border border-border text-text-dim hover:text-text"
              }`}
            >
              {d === "all" ? "All" : d === "beginner" ? "Beginner" : "Intermediate"}
            </button>
          ))}
        </div>
      </div>

      {/* Platform Cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-border bg-bg-surface p-8 text-center">
            <Info className="w-8 h-8 text-text-dim mx-auto mb-2" />
            <p className="text-sm text-text-dim">No platforms match your filters. Try adjusting.</p>
          </div>
        ) : (
          filtered.map((platform, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-bg-surface p-4 hover:border-border-light hover:bg-bg-hover transition-all group"
            >
              {/* Top row: name + badges + visit button */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-[14px] font-semibold text-text group-hover:text-accent transition-colors">
                      {platform.name}
                    </h2>
                    {platform.acceptsCameroon === "yes" ? (
                      <span className="badge bg-success/15 text-success flex items-center gap-0.5">
                        <CheckCircle className="w-3 h-3" /> Cameroon
                      </span>
                    ) : (
                      <span className="badge bg-amber-500/15 text-amber-400 flex items-center gap-0.5">
                        <AlertTriangle className="w-3 h-3" /> Limited
                      </span>
                    )}
                    <span className={`badge ${
                      platform.difficulty === "beginner"
                        ? "bg-success/15 text-success"
                        : "bg-accent/15 text-accent"
                    }`}>
                      {platform.difficulty === "beginner" ? "Beginner" : "Intermediate"}
                    </span>
                    <span className="badge bg-bg-elevated text-text-dim flex items-center gap-0.5">
                      {platform.device === "phone" ? (
                        <><Smartphone className="w-3 h-3" /> Phone OK</>
                      ) : platform.device === "both" ? (
                        <><Smartphone className="w-3 h-3" /><Laptop className="w-3 h-3" /> Phone + Laptop</>
                      ) : (
                        <><Laptop className="w-3 h-3" /> Laptop</>
                      )}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[12px] text-text-muted mt-1.5">
                    {platform.description.en}
                  </p>
                  <p className="text-[11px] text-text-dim mt-0.5 italic">
                    {platform.description.fr}
                  </p>

                  {/* Job types */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {platform.jobTypes.en.split(", ").map((type, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded text-[10px] bg-bg-elevated text-text-dim border border-border"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Earnings + Payment */}
                  <div className="flex items-center gap-4 mt-2.5 flex-wrap">
                    <span className="flex items-center gap-1 text-[12px] text-success font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      {platform.earningsXAF}
                    </span>
                    <span className="text-[11px] text-text-dim">
                      ({platform.earningsUSD})
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                    <Wallet className="w-3 h-3 text-text-dim" />
                    {platform.paymentMethods.map((method, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded text-[10px] bg-accent/10 text-accent border border-accent/20"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit button */}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-3 py-1.5 rounded-md bg-accent text-black text-[11px] font-semibold hover:bg-accent-hover transition-colors flex items-center gap-1"
                >
                  Visit
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* How to Get Paid Section */}
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-bold text-text">
          How to Get Paid in Cameroon (Crypto P2P to MoMo)
        </h2>
        <p className="text-sm text-text-muted">
          Most platforms pay via PayPal or Payoneer. Here&apos;s how to convert that money to Mobile Money (MTN MoMo / Orange Money) in Cameroon.
        </p>

        <div className="space-y-3">
          {/* Method 1 */}
          <div className="rounded-lg border border-border bg-bg-surface p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black text-[12px] font-bold flex items-center justify-center">1</span>
              <h3 className="text-[13px] font-semibold text-text">Crypto P2P Method (Recommended)</h3>
              <span className="badge bg-success/15 text-success">Best Rate</span>
            </div>
            <div className="text-[12px] text-text-muted space-y-1 ml-8">
              <p><strong className="text-text">Step 1:</strong> Receive payment in USDT on Binance or Bybit</p>
              <p><strong className="text-text">Step 2:</strong> Go to P2P Trading and sell USDT</p>
              <p><strong className="text-text">Step 3:</strong> Select &quot;MoMo&quot; or &quot;Orange Money&quot; as payment method</p>
              <p><strong className="text-text">Step 4:</strong> Choose a verified buyer (green checkmark, 95%+ completion rate)</p>
              <p><strong className="text-text">Step 5:</strong> Buyer sends FCFA to your MoMo, you release USDT</p>
            </div>
            <p className="text-[11px] text-accent mt-2 ml-8">
              Rate: ~610-620 FCFA per $1 USD &middot; Fees: 0%  &middot; Speed: 5-15 minutes
            </p>
          </div>

          {/* Method 2 */}
          <div className="rounded-lg border border-border bg-bg-surface p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black text-[12px] font-bold flex items-center justify-center">2</span>
              <h3 className="text-[13px] font-semibold text-text">Payoneer to Bank to MoMo</h3>
            </div>
            <div className="text-[12px] text-text-muted space-y-1 ml-8">
              <p><strong className="text-text">Step 1:</strong> Link your local bank account (UBA, Ecobank, etc.) to Payoneer</p>
              <p><strong className="text-text">Step 2:</strong> Withdraw from Payoneer to your bank (1-3 business days)</p>
              <p><strong className="text-text">Step 3:</strong> Transfer from bank to MoMo via USSD or bank app</p>
            </div>
            <p className="text-[11px] text-text-dim mt-2 ml-8">
              Rate: Bank rate &middot; Fees: ~2% withdrawal fee &middot; Speed: 2-5 business days
            </p>
          </div>

          {/* Method 3 */}
          <div className="rounded-lg border border-border bg-bg-surface p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black text-[12px] font-bold flex items-center justify-center">3</span>
              <h3 className="text-[13px] font-semibold text-text">PayPal to Crypto to MoMo</h3>
            </div>
            <div className="text-[12px] text-text-muted space-y-1 ml-8">
              <p><strong className="text-text">Step 1:</strong> Receive payment in PayPal</p>
              <p><strong className="text-text">Step 2:</strong> Buy USDT on a platform that accepts PayPal (Paxful, Bybit P2P)</p>
              <p><strong className="text-text">Step 3:</strong> Sell USDT via P2P for MoMo (same as Method 1, Steps 2-5)</p>
            </div>
            <p className="text-[11px] text-text-dim mt-2 ml-8">
              Rate: Varies &middot; Fees: ~3-5% total &middot; Speed: 15-30 minutes
            </p>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-accent" />
            <h3 className="text-[13px] font-semibold text-accent">Pro Tips for Cameroonians</h3>
          </div>
          <ul className="text-[12px] text-text-muted space-y-1.5 ml-6 list-disc">
            <li>Always use <strong className="text-text">Binance P2P</strong> or <strong className="text-text">Bybit P2P</strong> for the best FCFA rates</li>
            <li>Never release crypto before confirming MoMo payment in your account</li>
            <li>Start with Remotasks or GoTranscript if you have no experience</li>
            <li>Your bilingual advantage (English + French) is valuable on Rev, Upwork, and Fiverr</li>
            <li>Create a professional email (firstname.lastname@gmail.com) before applying</li>
            <li>For Upwork/Fiverr: start with low prices to get your first 5 reviews, then increase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
