"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  LayoutDashboard,
  Rocket,
  DollarSign,
  Briefcase,
  Globe,
  Wrench,
  BookOpen,
  ChevronLeft,
  Zap,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { key: "home", href: "", icon: LayoutDashboard },
  { key: "startHere", href: "/start-here", icon: Rocket },
  { key: "makeMoney", href: "/make-money", icon: DollarSign },
  { key: "freelancing", href: "/freelancing", icon: Briefcase },
  { key: "remoteJobs", href: "/remote-jobs", icon: Globe },
  { key: "tools", href: "/tools", icon: Wrench },
  { key: "resources", href: "/resources", icon: BookOpen },
];

export default function Sidebar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => {
    const fullPath = `/${locale}${href}`;
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(fullPath);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen flex flex-col border-r border-border bg-bg-surface z-40 transition-all duration-200 ${
        collapsed ? "w-[56px]" : "w-[220px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between h-[52px] px-3 border-b border-border">
        <Link href={`/${locale}`} className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-black" />
          </div>
          {!collapsed && (
            <span className="font-bold text-sm text-text truncate tracking-tight">
              PLUG<span className="text-accent">237</span>
            </span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-bg-hover text-text-dim hover:text-text transition-colors hidden lg:flex"
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className={`flex items-center gap-2.5 px-2.5 py-[7px] rounded-md text-[13px] font-medium transition-all duration-150 group ${
                active
                  ? "bg-accent-dim text-accent"
                  : "text-text-dim hover:text-text hover:bg-bg-hover"
              }`}
              title={collapsed ? t(item.key) : undefined}
            >
              <Icon
                className={`w-[18px] h-[18px] flex-shrink-0 ${
                  active ? "text-accent" : "text-text-dim group-hover:text-text"
                }`}
              />
              {!collapsed && <span className="truncate">{t(item.key)}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA */}
      {!collapsed && (
        <div className="p-3 border-t border-border">
          <div className="rounded-lg bg-accent-dim p-3">
            <p className="text-[11px] font-semibold text-accent mb-1">
              FREE GUIDE
            </p>
            <p className="text-[11px] text-text-dim leading-relaxed mb-2">
              Download: &quot;First $100 Online from Cameroon&quot;
            </p>
            <button className="w-full py-1.5 rounded-md bg-accent text-black text-[11px] font-semibold hover:bg-accent-hover transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
