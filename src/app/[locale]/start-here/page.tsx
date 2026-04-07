import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { CheckCircle, Circle, Clock, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Start Here — From Zero to First Income Online",
  description:
    "Your step-by-step roadmap to earn your first money online from Cameroon. 6 actionable steps from digital identity to 65,000 FCFA/month.",
};

const roadmapSteps = [
  {
    title: "Set Up Your Digital Identity",
    description: "Create accounts on key platforms. Set up a professional email, payment methods (MTN MoMo, Orange Money, Payoneer), and your first online profiles.",
    time: "30 min",
    difficulty: "Beginner",
    status: "active",
    substeps: ["Create Gmail account", "Set up MTN MoMo", "Create Payoneer account", "Set up Binance P2P for crypto-to-MoMo"],
  },
  {
    title: "Choose Your Money Path",
    description: "Take our assessment to find the best method for you based on your skills, device, and time available.",
    time: "15 min",
    difficulty: "Beginner",
    status: "upcoming",
    substeps: ["Take skill assessment", "Review recommended methods", "Pick your top 2 paths"],
  },
  {
    title: "Complete Your First Method Guide",
    description: "Follow the step-by-step guide for your chosen method. Each guide includes exact screenshots and actions.",
    time: "45 min",
    difficulty: "Beginner",
    status: "upcoming",
    substeps: ["Read the full guide", "Complete each action step", "Set up your profile/account"],
  },
  {
    title: "Get Your First Client/Sale",
    description: "Apply the client-getting strategies specific to your method. This is where most people give up — don't.",
    time: "2-7 days",
    difficulty: "Intermediate",
    status: "upcoming",
    substeps: ["Apply to 10+ opportunities", "Send 5+ proposals/pitches", "Follow up consistently"],
  },
  {
    title: "Scale to 65,000 FCFA/month",
    description: "Optimize your workflow, increase your rates, and build a consistent income stream.",
    time: "2-4 weeks",
    difficulty: "Intermediate",
    status: "upcoming",
    substeps: ["Optimize your process", "Raise prices/find better gigs", "Build repeat client base"],
  },
  {
    title: "Diversify & Grow",
    description: "Add a second income stream and start building long-term assets.",
    time: "Ongoing",
    difficulty: "Advanced",
    status: "upcoming",
    substeps: ["Add second method", "Build email list", "Create digital product"],
  },
];

export default function StartHerePage() {
  const t = useTranslations("startHere");

  return (
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-5 h-5 text-accent" />
          <span className="badge bg-accent/15 text-accent">ROADMAP</span>
        </div>
        <h1 className="text-xl font-bold text-text mt-2">{t("title")}</h1>
        <p className="text-sm text-text-muted mt-1">{t("subtitle")}</p>
      </div>

      {/* Progress Bar */}
      <div className="rounded-lg border border-border bg-bg-surface p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] font-semibold text-text">Your Progress</span>
          <span className="text-[12px] text-accent font-semibold">0 / 6 Steps</span>
        </div>
        <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
          <div className="h-full w-0 rounded-full bg-accent transition-all duration-500" />
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="space-y-3">
        {roadmapSteps.map((step, i) => (
          <div
            key={i}
            className={`rounded-lg border bg-bg-surface overflow-hidden transition-all ${
              step.status === "active"
                ? "border-accent/30"
                : "border-border"
            }`}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                {/* Step indicator */}
                <div className="flex-shrink-0 mt-0.5">
                  {step.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : step.status === "active" ? (
                    <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                  ) : (
                    <Circle className="w-5 h-5 text-text-dim" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-semibold text-text-dim">
                      {t("step")} {i + 1}
                    </span>
                    <span
                      className={`badge ${
                        step.difficulty === "Beginner"
                          ? "bg-success/15 text-success"
                          : step.difficulty === "Intermediate"
                          ? "bg-accent/15 text-accent"
                          : "bg-error/15 text-error"
                      }`}
                    >
                      {step.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-dim">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-text mt-1">
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-text-dim mt-1 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Substeps */}
                  <div className="mt-3 space-y-1.5">
                    {step.substeps.map((sub, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded border border-border flex-shrink-0" />
                        <span className="text-[12px] text-text-muted">{sub}</span>
                      </div>
                    ))}
                  </div>

                  {step.status === "active" && (
                    <button className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-black text-[12px] font-semibold hover:bg-accent-hover transition-colors">
                      {t("startModule")}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
