"use client";

import { useTranslations } from "next-intl";
import { Search, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TopBar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const otherLocale = locale === "en" ? "fr" : "en";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className="h-[52px] border-b border-border bg-bg-surface/80 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-30">
      {/* Search */}
      <div className="flex items-center gap-2 flex-1 max-w-md">
        <div
          className={`flex items-center gap-2 rounded-md border transition-all duration-200 ${
            searchOpen
              ? "border-accent/40 bg-bg-elevated w-full"
              : "border-border bg-bg-elevated/50 w-[240px]"
          }`}
        >
          <Search className="w-4 h-4 text-text-dim ml-2.5 flex-shrink-0" />
          <input
            type="text"
            placeholder={t("search")}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
            className="bg-transparent text-[13px] text-text placeholder:text-text-dim py-[7px] pr-3 w-full outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 mr-2 text-[10px] font-mono text-text-dim border border-border rounded">
            /
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Language Switch */}
        <Link
          href={switchPath}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-text-dim hover:text-text hover:bg-bg-hover transition-colors border border-border"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{locale === "en" ? "FR" : "EN"}</span>
        </Link>

        {/* Join CTA */}
        <a
          href="https://t.me/weplug237"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-md bg-accent text-black text-[12px] font-semibold hover:bg-accent-hover transition-colors"
        >
          Join Community
        </a>
      </div>
    </header>
  );
}
