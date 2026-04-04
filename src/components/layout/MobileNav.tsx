"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  LayoutDashboard,
  DollarSign,
  Briefcase,
  Globe,
  Wrench,
  Menu,
  X,
  Rocket,
  BookOpen,
  Zap,
  Wallet,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { key: "home", href: "", icon: LayoutDashboard },
  { key: "startHere", href: "/start-here", icon: Rocket },
  { key: "makeMoney", href: "/make-money", icon: DollarSign },
  { key: "freelancing", href: "/freelancing", icon: Briefcase },
  { key: "remoteJobs", href: "/remote-jobs", icon: Globe },
  { key: "paymentGuides", href: "/payment-guides", icon: Wallet },
  { key: "tools", href: "/tools", icon: Wrench },
  { key: "resources", href: "/resources", icon: BookOpen },
];

export default function MobileNav({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    const fullPath = `/${locale}${href}`;
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(fullPath);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-[52px] bg-bg-surface/95 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-sm text-text">
            PLUG<span className="text-accent">237</span>
          </span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-bg-hover text-text-dim"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-sm pt-[52px]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                    active
                      ? "bg-accent-dim text-accent"
                      : "text-text-dim hover:text-text hover:bg-bg-hover"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{t(item.key)}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Bottom tab bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[56px] bg-bg-surface/95 backdrop-blur-md border-t border-border z-50 flex items-center justify-around px-2">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-md transition-colors ${
                active ? "text-accent" : "text-text-dim"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              <span className="text-[9px] font-medium">{t(item.key).slice(0, 8)}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
