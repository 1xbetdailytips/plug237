"use client";

import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  MapPin,
  Filter,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

type Job = {
  title: string;
  company: string;
  salary: string;
  type: string;
  level: string;
  skills: string[];
  posted: string;
  location: string;
  url: string;
};

const jobs: Job[] = [
  {
    title: "Customer Support Representative",
    company: "Remote OK Company",
    salary: "$400-800/mo",
    type: "Full-time",
    level: "Entry",
    skills: ["English", "Communication"],
    posted: "2 days ago",
    location: "Remote (Africa)",
    url: "#",
  },
  {
    title: "Data Entry Specialist",
    company: "Global Data Corp",
    salary: "$300-500/mo",
    type: "Part-time",
    level: "Entry",
    skills: ["Typing", "Excel"],
    posted: "1 day ago",
    location: "Remote (Worldwide)",
    url: "#",
  },
  {
    title: "Social Media Manager",
    company: "StartupXYZ",
    salary: "$500-1000/mo",
    type: "Contract",
    level: "Intermediate",
    skills: ["Social Media", "Content", "Canva"],
    posted: "3 days ago",
    location: "Remote (Worldwide)",
    url: "#",
  },
  {
    title: "Virtual Assistant",
    company: "VA Agency Pro",
    salary: "$400-700/mo",
    type: "Part-time",
    level: "Entry",
    skills: ["Organization", "Email", "Calendar"],
    posted: "1 week ago",
    location: "Remote (Africa/Europe)",
    url: "#",
  },
  {
    title: "Content Writer (English/French)",
    company: "ContentFlow",
    salary: "$600-1200/mo",
    type: "Full-time",
    level: "Intermediate",
    skills: ["Writing", "SEO", "Bilingual"],
    posted: "4 days ago",
    location: "Remote (Worldwide)",
    url: "#",
  },
  {
    title: "Junior Web Developer",
    company: "TechBuild Africa",
    salary: "$800-1500/mo",
    type: "Full-time",
    level: "Junior",
    skills: ["HTML/CSS", "JavaScript", "React"],
    posted: "5 days ago",
    location: "Remote (Africa)",
    url: "#",
  },
  {
    title: "Transcriptionist",
    company: "TranscribeNow",
    salary: "$200-400/mo",
    type: "Freelance",
    level: "Entry",
    skills: ["Typing", "Listening", "English"],
    posted: "2 days ago",
    location: "Remote (Worldwide)",
    url: "#",
  },
  {
    title: "Online Tutor (English/French)",
    company: "EduGlobal",
    salary: "$300-600/mo",
    type: "Part-time",
    level: "Entry",
    skills: ["Teaching", "Bilingual", "Patience"],
    posted: "6 days ago",
    location: "Remote (Worldwide)",
    url: "#",
  },
];

export default function RemoteJobsPage() {
  const t = useTranslations("remoteJobs");
  const [levelFilter, setLevelFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = jobs.filter((j) => {
    if (levelFilter !== "all" && j.level !== levelFilter) return false;
    if (typeFilter !== "all" && j.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="max-w-4xl space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-text">{t("title")}</h1>
        <p className="text-sm text-text-muted mt-1">{t("subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-text-dim" />
          <span className="text-[12px] text-text-dim font-medium">Level:</span>
          {["all", "Entry", "Junior", "Intermediate"].map((l) => (
            <button
              key={l}
              onClick={() => setLevelFilter(l)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                levelFilter === l
                  ? "bg-accent text-black"
                  : "border border-border text-text-dim hover:text-text"
              }`}
            >
              {l === "all" ? "All" : l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-text-dim font-medium">Type:</span>
          {["all", "Full-time", "Part-time", "Freelance", "Contract"].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                typeFilter === t
                  ? "bg-accent text-black"
                  : "border border-border text-text-dim hover:text-text"
              }`}
            >
              {t === "all" ? "All" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Job Count */}
      <p className="text-[12px] text-text-dim">{filtered.length} jobs found</p>

      {/* Jobs List */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-border bg-bg-surface p-8 text-center">
            <Briefcase className="w-8 h-8 text-text-dim mx-auto mb-2" />
            <p className="text-sm text-text-dim">{t("noJobs")}</p>
          </div>
        ) : (
          filtered.map((job, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-bg-surface p-4 hover:border-border-light hover:bg-bg-hover transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[14px] font-semibold text-text group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <span className="badge bg-bg-elevated text-text-dim">{job.type}</span>
                    <span className={`badge ${
                      job.level === "Entry" ? "bg-success/15 text-success" : "bg-accent/15 text-accent"
                    }`}>
                      {job.level}
                    </span>
                  </div>
                  <p className="text-[12px] text-text-muted mt-1">{job.company}</p>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span className="flex items-center gap-1 text-[11px] text-success font-semibold">
                      <DollarSign className="w-3 h-3" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-dim">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-dim">
                      <Clock className="w-3 h-3" />
                      {job.posted}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {job.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded text-[10px] bg-bg-elevated text-text-dim border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-3 py-1.5 rounded-md bg-accent text-black text-[11px] font-semibold hover:bg-accent-hover transition-colors flex items-center gap-1"
                >
                  {t("apply")}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
