import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import { Send, Target, Smartphone, Users, Heart } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "About PLUG237 — Make Money Online in Cameroon",
    titleFr: "À Propos de PLUG237 — Gagner de l'Argent en Ligne au Cameroun",
    descEn: "PLUG237 is a free platform helping Cameroonians earn money online with verified methods, step-by-step guides, and payment solutions that work locally.",
    descFr: "PLUG237 est une plateforme gratuite qui aide les Camerounais à gagner de l'argent en ligne avec des méthodes vérifiées et des guides étape par étape.",
    path: "/about",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const breadcrumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: isEn ? "About" : "À Propos", url: `${siteConfig.url}/${locale}/about` },
  ];

  const values = [
    {
      icon: Target,
      title: isEn ? "Cameroon-First" : "Le Cameroun D'abord",
      desc: isEn
        ? "Every method, every guide, every payment tip is verified to work from Cameroon. No generic advice that doesn't apply to you."
        : "Chaque méthode, chaque guide, chaque conseil de paiement est vérifié pour fonctionner depuis le Cameroun.",
    },
    {
      icon: Smartphone,
      title: isEn ? "Phone-Friendly" : "Adapté au Téléphone",
      desc: isEn
        ? "Most Cameroonians access the internet via phone. Our methods prioritize what you can do from your smartphone."
        : "La plupart des Camerounais accèdent à Internet via téléphone. Nos méthodes priorisent ce que vous pouvez faire depuis votre smartphone.",
    },
    {
      icon: Heart,
      title: isEn ? "100% Free Forever" : "100% Gratuit Pour Toujours",
      desc: isEn
        ? "No hidden fees. No premium tier. No paywall. Every guide, tool, and resource on PLUG237 is completely free."
        : "Pas de frais cachés. Pas de niveau premium. Pas de mur payant. Chaque guide, outil et ressource est entièrement gratuit.",
    },
    {
      icon: Users,
      title: isEn ? "Community-Driven" : "Guidé par la Communauté",
      desc: isEn
        ? "Join our Telegram community where Cameroonians share real results, ask questions, and help each other grow."
        : "Rejoignez notre communauté Telegram où les Camerounais partagent de vrais résultats et s'entraident.",
    },
  ];

  return (
    <div className="max-w-3xl space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-text-dim">
        <Link href={`/${locale}`} className="hover:text-accent transition-colors">{isEn ? "Home" : "Accueil"}</Link>
        <span>/</span>
        <span className="text-text">{isEn ? "About" : "À Propos"}</span>
      </nav>

      <div>
        <h1 className="text-2xl font-bold text-text mb-3">
          {isEn ? "About PLUG237" : "À Propos de PLUG237"}
        </h1>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {isEn
            ? "PLUG237 is a free educational platform built specifically for Cameroonians who want to earn money online. We research, test, and document the methods that actually work — then present them in simple, step-by-step guides with payment solutions adapted to Cameroon."
            : "PLUG237 est une plateforme éducative gratuite conçue spécifiquement pour les Camerounais qui veulent gagner de l'argent en ligne. Nous recherchons, testons et documentons les méthodes qui fonctionnent réellement — puis les présentons dans des guides simples, étape par étape, avec des solutions de paiement adaptées au Cameroun."}
        </p>
        <p className="text-sm text-text-muted leading-relaxed">
          {isEn
            ? "We know the challenges: limited payment options, unreliable internet, scam sites that don't pay Africans, and guides written for Americans. That's why PLUG237 exists — to cut through the noise and give you what actually works, with MTN MoMo and Orange Money as primary payment methods."
            : "Nous connaissons les défis: options de paiement limitées, internet instable, sites d'arnaque qui ne paient pas les Africains. C'est pourquoi PLUG237 existe — pour vous donner ce qui fonctionne réellement, avec MTN MoMo et Orange Money comme méthodes de paiement principales."}
        </p>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-lg font-semibold text-text mb-4">
          {isEn ? "Our Values" : "Nos Valeurs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {values.map((v, i) => (
            <div key={i} className="rounded-lg border border-border bg-bg-surface p-4">
              <v.icon className="w-5 h-5 text-accent mb-2" />
              <h3 className="text-sm font-semibold text-text mb-1">{v.title}</h3>
              <p className="text-[12px] text-text-dim leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-accent/20 bg-accent-dim p-6 text-center">
        <h2 className="text-lg font-bold text-text mb-2">
          {isEn ? "Join the PLUG237 Community" : "Rejoignez la Communauté PLUG237"}
        </h2>
        <p className="text-sm text-text-muted mb-4">
          {isEn
            ? "Connect with other Cameroonians earning online. Share tips, ask questions, grow together."
            : "Connectez-vous avec d'autres Camerounais qui gagnent en ligne. Partagez des astuces, posez des questions, grandissez ensemble."}
        </p>
        <a
          href="https://t.me/weplug237"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0088cc] text-white text-sm font-semibold hover:bg-[#0077b5] transition-colors"
        >
          <Send className="w-4 h-4" />
          {isEn ? "Join Telegram" : "Rejoindre Telegram"}
        </a>
      </div>
    </div>
  );
}
