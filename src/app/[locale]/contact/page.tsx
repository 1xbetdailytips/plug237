import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import { Send, Mail } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Contact Us — PLUG237",
    titleFr: "Contactez-Nous — PLUG237",
    descEn: "Get in touch with the PLUG237 team. Join our Telegram community or send us a message.",
    descFr: "Contactez l'équipe PLUG237. Rejoignez notre communauté Telegram ou envoyez-nous un message.",
    path: "/contact",
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const breadcrumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: "Contact", url: `${siteConfig.url}/${locale}/contact` },
  ];

  return (
    <div className="max-w-3xl space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <nav className="flex items-center gap-1.5 text-[11px] text-text-dim">
        <Link href={`/${locale}`} className="hover:text-accent transition-colors">{isEn ? "Home" : "Accueil"}</Link>
        <span>/</span>
        <span className="text-text">Contact</span>
      </nav>

      <div>
        <h1 className="text-2xl font-bold text-text mb-3">
          {isEn ? "Contact Us" : "Contactez-Nous"}
        </h1>
        <p className="text-sm text-text-muted leading-relaxed">
          {isEn
            ? "Have a question, suggestion, or partnership inquiry? Here's how to reach us."
            : "Vous avez une question, une suggestion ou une demande de partenariat? Voici comment nous contacter."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Telegram */}
        <a
          href="https://t.me/weplug237"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-border bg-bg-surface p-6 hover:border-accent/30 transition-colors group"
        >
          <Send className="w-8 h-8 text-[#0088cc] mb-3" />
          <h2 className="text-sm font-semibold text-text mb-1 group-hover:text-accent transition-colors">
            {isEn ? "Telegram Community" : "Communauté Telegram"}
          </h2>
          <p className="text-[12px] text-text-dim leading-relaxed mb-3">
            {isEn
              ? "Join our Telegram group to ask questions, share results, and connect with other Cameroonians earning online."
              : "Rejoignez notre groupe Telegram pour poser des questions, partager des résultats et vous connecter avec d'autres Camerounais."}
          </p>
          <span className="text-[12px] text-accent font-medium">@weplug237 →</span>
        </a>

        {/* Email */}
        <div className="rounded-xl border border-border bg-bg-surface p-6">
          <Mail className="w-8 h-8 text-accent mb-3" />
          <h2 className="text-sm font-semibold text-text mb-1">
            {isEn ? "Email" : "Courriel"}
          </h2>
          <p className="text-[12px] text-text-dim leading-relaxed mb-3">
            {isEn
              ? "For business inquiries, partnerships, or content suggestions."
              : "Pour les demandes commerciales, partenariats ou suggestions de contenu."}
          </p>
          <span className="text-[12px] text-text-muted">contact@plug237.com</span>
        </div>
      </div>

      {/* FAQ quick links */}
      <div className="rounded-lg border border-border bg-bg-surface p-4">
        <h2 className="text-sm font-semibold text-text mb-3">
          {isEn ? "Quick Links" : "Liens Rapides"}
        </h2>
        <div className="space-y-2">
          {[
            { label: isEn ? "Getting started? Check our roadmap" : "Vous débutez? Consultez notre feuille de route", href: `/${locale}/start-here` },
            { label: isEn ? "Payment issues? See payment guides" : "Problèmes de paiement? Voir les guides", href: `/${locale}/payment-guides` },
            { label: isEn ? "Browse earning methods" : "Parcourir les méthodes de gains", href: `/${locale}/make-money` },
          ].map((link, i) => (
            <Link key={i} href={link.href} className="block text-[12px] text-text-dim hover:text-accent transition-colors">
              → {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
