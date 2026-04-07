import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Terms of Service — PLUG237",
    titleFr: "Conditions d'Utilisation — PLUG237",
    descEn: "Terms of service for PLUG237, the free platform for making money online in Cameroon.",
    descFr: "Conditions d'utilisation de PLUG237, la plateforme gratuite pour gagner de l'argent en ligne au Cameroun.",
    path: "/terms",
  });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const breadcrumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: isEn ? "Terms" : "Conditions", url: `${siteConfig.url}/${locale}/terms` },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <nav className="flex items-center gap-1.5 text-[11px] text-text-dim">
        <Link href={`/${locale}`} className="hover:text-accent transition-colors">{isEn ? "Home" : "Accueil"}</Link>
        <span>/</span>
        <span className="text-text">{isEn ? "Terms" : "Conditions"}</span>
      </nav>

      <h1 className="text-2xl font-bold text-text">{isEn ? "Terms of Service" : "Conditions d'Utilisation"}</h1>
      <p className="text-[11px] text-text-dim">{isEn ? "Last updated: April 2026" : "Dernière mise à jour: Avril 2026"}</p>

      <div className="space-y-6 text-sm text-text-muted leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "1. Acceptance of Terms" : "1. Acceptation des Conditions"}</h2>
          <p>{isEn ? "By accessing and using PLUG237 (plug237.com), you agree to these terms. If you disagree, please do not use the platform." : "En accédant et en utilisant PLUG237 (plug237.com), vous acceptez ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser la plateforme."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "2. Service Description" : "2. Description du Service"}</h2>
          <p>{isEn ? "PLUG237 provides free educational content about online earning opportunities, including guides, tools, and community resources. We do not guarantee any specific income or results." : "PLUG237 fournit du contenu éducatif gratuit sur les opportunités de gains en ligne, y compris des guides, des outils et des ressources communautaires. Nous ne garantissons aucun revenu ou résultat spécifique."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "3. User Responsibilities" : "3. Responsabilités de l'Utilisateur"}</h2>
          <p>{isEn ? "You are responsible for your own actions when following guides or engaging with third-party platforms mentioned on PLUG237. We recommend researching any platform before investing time or money." : "Vous êtes responsable de vos propres actions lorsque vous suivez les guides ou interagissez avec les plateformes tierces mentionnées sur PLUG237. Nous recommandons de rechercher toute plateforme avant d'investir du temps ou de l'argent."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "4. Third-Party Links" : "4. Liens Tiers"}</h2>
          <p>{isEn ? "PLUG237 contains links to external websites and platforms. We are not responsible for the content, policies, or practices of third-party sites. Some links may be affiliate links." : "PLUG237 contient des liens vers des sites web et plateformes externes. Nous ne sommes pas responsables du contenu, des politiques ou des pratiques des sites tiers. Certains liens peuvent être des liens d'affiliation."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "5. Intellectual Property" : "5. Propriété Intellectuelle"}</h2>
          <p>{isEn ? "All content on PLUG237, including guides, graphics, and tools, is protected by copyright. You may share links but may not reproduce content without permission." : "Tout le contenu de PLUG237, y compris les guides, graphiques et outils, est protégé par le droit d'auteur. Vous pouvez partager des liens mais ne pouvez pas reproduire le contenu sans autorisation."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "6. Changes to Terms" : "6. Modifications des Conditions"}</h2>
          <p>{isEn ? "We may update these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms." : "Nous pouvons mettre à jour ces conditions à tout moment. L'utilisation continue de la plateforme après les modifications constitue une acceptation des nouvelles conditions."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "7. Contact" : "7. Contact"}</h2>
          <p>{isEn ? "Questions about these terms? Contact us via " : "Des questions sur ces conditions? Contactez-nous via "}<Link href={`/${locale}/contact`} className="text-accent hover:text-accent-hover">Telegram (@weplug237)</Link>.</p>
        </section>
      </div>
    </div>
  );
}
