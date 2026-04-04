"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Laptop,
  Clock,
  DollarSign,
  Zap,
  Target,
  CheckCircle,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Answer = string;

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; icon?: React.ReactNode }[];
}

const questions: Question[] = [
  {
    id: "device",
    question: "What device do you have?",
    options: [
      { label: "Smartphone only", value: "phone", icon: <Smartphone className="w-5 h-5" /> },
      { label: "Laptop / Computer", value: "laptop", icon: <Laptop className="w-5 h-5" /> },
      { label: "Both", value: "both", icon: <><Smartphone className="w-4 h-4" /><Laptop className="w-4 h-4" /></> },
    ],
  },
  {
    id: "time",
    question: "How much time can you dedicate daily?",
    options: [
      { label: "1-2 hours", value: "low", icon: <Clock className="w-5 h-5" /> },
      { label: "3-4 hours", value: "medium", icon: <Clock className="w-5 h-5" /> },
      { label: "5+ hours (full hustle)", value: "high", icon: <Zap className="w-5 h-5" /> },
    ],
  },
  {
    id: "skills",
    question: "What skills do you have?",
    options: [
      { label: "No special skills yet", value: "none" },
      { label: "Good at writing / typing", value: "writing" },
      { label: "Good at design / creative work", value: "design" },
      { label: "Good at talking / social media", value: "social" },
      { label: "Basic tech / computer skills", value: "tech" },
    ],
  },
  {
    id: "goal",
    question: "What's your monthly income goal?",
    options: [
      { label: "Any extra money ($10-50)", value: "starter", icon: <DollarSign className="w-5 h-5" /> },
      { label: "Side income ($50-200)", value: "side", icon: <DollarSign className="w-5 h-5" /> },
      { label: "Full income ($200-500+)", value: "full", icon: <DollarSign className="w-5 h-5" /> },
    ],
  },
  {
    id: "speed",
    question: "How fast do you want to start earning?",
    options: [
      { label: "This week (I need money fast)", value: "fast", icon: <Zap className="w-5 h-5" /> },
      { label: "Within a month (willing to learn)", value: "medium", icon: <Clock className="w-5 h-5" /> },
      { label: "I can invest 2-3 months to build something big", value: "slow", icon: <Target className="w-5 h-5" /> },
    ],
  },
];

type Method = {
  title: string;
  match: number;
  earnings: string;
  description: string;
  href: string;
};

function getResults(answers: Record<string, string>): Method[] {
  const methods: Method[] = [
    { title: "WhatsApp Status Business", match: 0, earnings: "$50-300/mo", description: "Sell products via WhatsApp. Zero capital needed, phone only.", href: "/make-money" },
    { title: "Fiverr Data Entry", match: 0, earnings: "$100-500/mo", description: "Offer typing and data services on Fiverr. Fast to start.", href: "/freelancing" },
    { title: "TikTok Creativity Program", match: 0, earnings: "$200-1000/mo", description: "Create short videos and earn from views.", href: "/make-money" },
    { title: "Online Surveys", match: 0, earnings: "$20-80/mo", description: "Take surveys on Prolific & Swagbucks. Lowest barrier.", href: "/make-money" },
    { title: "Social Media Management", match: 0, earnings: "$200-600/mo", description: "Manage social accounts for businesses.", href: "/freelancing" },
    { title: "Transcription", match: 0, earnings: "$150-400/mo", description: "Convert audio to text. Bilingual EN/FR is an advantage.", href: "/remote-jobs" },
    { title: "Virtual Assistant", match: 0, earnings: "$300-800/mo", description: "Help businesses with admin tasks remotely.", href: "/freelancing" },
    { title: "Content Writing", match: 0, earnings: "$200-800/mo", description: "Write articles, blog posts, and copy for clients.", href: "/freelancing" },
    { title: "YouTube Faceless Channel", match: 0, earnings: "$100-2000/mo", description: "Create YouTube videos with AI narration + stock footage.", href: "/make-money" },
    { title: "Canva Graphic Design", match: 0, earnings: "$100-400/mo", description: "Design social posts and logos using Canva.", href: "/freelancing" },
  ];

  // Score based on answers
  methods.forEach((m) => {
    // Device matching
    if (answers.device === "phone") {
      if (["WhatsApp Status Business", "TikTok Creativity Program", "Online Surveys"].includes(m.title)) m.match += 30;
      else if (["Social Media Management", "Canva Graphic Design"].includes(m.title)) m.match += 15;
      else m.match += 5;
    } else if (answers.device === "laptop") {
      if (["Fiverr Data Entry", "Transcription", "Virtual Assistant", "Content Writing", "YouTube Faceless Channel"].includes(m.title)) m.match += 30;
      else m.match += 15;
    } else {
      m.match += 20; // both = flexible
    }

    // Time matching
    if (answers.time === "low") {
      if (["Online Surveys", "WhatsApp Status Business"].includes(m.title)) m.match += 20;
      else if (["Fiverr Data Entry", "Transcription"].includes(m.title)) m.match += 10;
    } else if (answers.time === "high") {
      if (["Virtual Assistant", "Content Writing", "YouTube Faceless Channel", "Social Media Management"].includes(m.title)) m.match += 25;
      else m.match += 15;
    } else {
      m.match += 15;
    }

    // Skills matching
    if (answers.skills === "none") {
      if (["WhatsApp Status Business", "Online Surveys", "Fiverr Data Entry"].includes(m.title)) m.match += 25;
    } else if (answers.skills === "writing") {
      if (["Content Writing", "Transcription", "Virtual Assistant"].includes(m.title)) m.match += 30;
    } else if (answers.skills === "design") {
      if (["Canva Graphic Design", "Social Media Management"].includes(m.title)) m.match += 30;
    } else if (answers.skills === "social") {
      if (["TikTok Creativity Program", "Social Media Management", "WhatsApp Status Business"].includes(m.title)) m.match += 30;
    } else if (answers.skills === "tech") {
      if (["Virtual Assistant", "YouTube Faceless Channel", "Fiverr Data Entry"].includes(m.title)) m.match += 25;
    }

    // Goal matching
    if (answers.goal === "starter") {
      if (["Online Surveys", "WhatsApp Status Business"].includes(m.title)) m.match += 15;
    } else if (answers.goal === "full") {
      if (["Virtual Assistant", "Content Writing", "YouTube Faceless Channel", "TikTok Creativity Program"].includes(m.title)) m.match += 20;
    } else {
      m.match += 10;
    }

    // Speed matching
    if (answers.speed === "fast") {
      if (["Online Surveys", "WhatsApp Status Business", "Fiverr Data Entry"].includes(m.title)) m.match += 20;
    } else if (answers.speed === "slow") {
      if (["YouTube Faceless Channel", "Content Writing", "Virtual Assistant"].includes(m.title)) m.match += 20;
    } else {
      m.match += 10;
    }
  });

  return methods.sort((a, b) => b.match - a.match).slice(0, 5);
}

export default function QuizPage() {
  const { locale } = useParams();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = questions[step];
  const progress = ((step + (done ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const updated = { ...answers, [current.id]: value };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const results = done ? getResults(answers) : [];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-accent" />
          <span className="badge bg-accent/15 text-accent">QUIZ</span>
        </div>
        <h1 className="text-xl font-bold text-text mt-2">
          Which Method is Right for You?
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Answer 5 quick questions. Get a personalized money-making plan.
        </p>
      </div>

      {/* Progress */}
      <div className="rounded-lg border border-border bg-bg-surface p-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-medium text-text-dim">
            {done ? "Results" : `Question ${step + 1} of ${questions.length}`}
          </span>
          <span className="text-[11px] font-semibold text-accent">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!done ? (
        /* Question Card */
        <div className="rounded-xl border border-border bg-bg-surface p-6">
          <h2 className="text-[16px] font-bold text-text mb-5">
            {current.question}
          </h2>
          <div className="space-y-2.5">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.value)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg border text-left transition-all group ${
                  answers[current.id] === opt.value
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-bg-elevated hover:border-border-light hover:bg-bg-hover text-text"
                }`}
              >
                {opt.icon && (
                  <span className="text-text-dim group-hover:text-text transition-colors">
                    {opt.icon}
                  </span>
                )}
                <span className="text-[13px] font-medium">{opt.label}</span>
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 flex items-center gap-1 text-[12px] text-text-dim hover:text-text transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous
            </button>
          )}
        </div>
      ) : (
        /* Results */
        <div className="space-y-4">
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <h2 className="text-[16px] font-bold text-text">
                Your Top Methods
              </h2>
            </div>
            <p className="text-[12px] text-text-dim">
              Based on your answers, here are the best methods for you, ranked by
              match score.
            </p>
          </div>

          {results.map((method, i) => (
            <Link
              key={i}
              href={`/${locale}${method.href}`}
              className="block rounded-lg border border-border bg-bg-surface p-4 hover:border-border-light hover:bg-bg-hover transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-accent/15 text-accent text-[12px] font-bold flex items-center justify-center flex-shrink-0">
                      #{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-semibold text-text group-hover:text-accent transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-[11px] text-text-dim mt-0.5">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-[13px] font-bold text-success">
                    {method.earnings}
                  </span>
                  <div className="mt-1">
                    <div className="w-16 h-1.5 rounded-full bg-bg-elevated overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${method.match}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-text-dim">
                      {method.match}% match
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex items-center gap-3">
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-[12px] font-medium text-text-dim hover:text-text hover:border-border-light transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Quiz
            </button>
            <Link
              href={`/${locale}/start-here`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-black text-[12px] font-semibold hover:bg-accent-hover transition-colors"
            >
              Start Your Journey
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
