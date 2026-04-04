import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/config";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import RightPanel from "@/components/layout/RightPanel";
import MobileNav from "@/components/layout/MobileNav";
import StickyButtons from "@/components/ui/StickyButtons";
import LeadPopup from "@/components/ui/LeadPopup";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: {
      default: isEn
        ? "PLUG237 — Make Money Online in Cameroon"
        : "PLUG237 — Gagner de l'Argent en Ligne au Cameroun",
      template: `%s | ${siteConfig.name}`,
    },
    description: isEn
      ? "Step-by-step system to earn money online from Cameroon. Freelancing, remote jobs, side hustles — all localized for Cameroon."
      : "Systeme etape par etape pour gagner de l'argent en ligne depuis le Cameroun. Freelance, emplois a distance, petits boulots.",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: locale === "fr" ? "fr_CM" : "en_CM",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
      </head>
      <body className="h-full">
        <NextIntlClientProvider messages={messages}>
          {/* Desktop Layout */}
          <div className="hidden lg:flex h-screen">
            <Sidebar locale={locale} />
            <div className="flex flex-col flex-1 ml-[220px]">
              <TopBar locale={locale} />
              <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
                <RightPanel />
              </div>
            </div>
          </div>

          <StickyButtons />
          <LeadPopup />

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <MobileNav locale={locale} />
            <main className="flex-1 pt-[52px] pb-[56px] overflow-y-auto p-4">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
