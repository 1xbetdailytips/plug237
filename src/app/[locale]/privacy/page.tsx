import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Privacy Policy — PLUG237",
    titleFr: "Politique de Confidentialité — PLUG237",
    descEn: "How PLUG237 handles your data. We collect minimal information and never sell your personal data.",
    descFr: "Comment PLUG237 gère vos données. Nous collectons un minimum d'informations et ne vendons jamais vos données personnelles.",
    path: "/privacy",
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const breadcrumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: isEn ? "Privacy" : "Confidentialité", url: `${siteConfig.url}/${locale}/privacy` },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <nav className="flex items-center gap-1.5 text-[11px] text-text-dim">
        <Link href={`/${locale}`} className="hover:text-accent transition-colors">{isEn ? "Home" : "Accueil"}</Link>
        <span>/</span>
        <span className="text-text">{isEn ? "Privacy" : "Confidentialité"}</span>
      </nav>

      <h1 className="text-2xl font-bold text-text">{isEn ? "Privacy Policy" : "Politique de Confidentialité"}</h1>
      <p className="text-[11px] text-text-dim">{isEn ? "Last updated: April 2026" : "Dernière mise à jour: Avril 2026"}</p>

      <div className="space-y-6 text-sm text-text-muted leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "1. Information We Collect" : "1. Informations Collectées"}</h2>
          <p>{isEn ? "PLUG237 is a static educational website. We do not collect personal information, require sign-ups, or store user data. We do not use cookies for tracking purposes." : "PLUG237 est un site éducatif statique. Nous ne collectons pas d'informations personnelles, ne demandons pas d'inscription et ne stockons pas de données utilisateur. Nous n'utilisons pas de cookies à des fins de suivi."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "2. Analytics" : "2. Analytiques"}</h2>
          <p>{isEn ? "We may use basic analytics to understand how many people visit the site and which pages are most helpful. This data is anonymous and aggregated." : "Nous pouvons utiliser des analytiques de base pour comprendre combien de personnes visitent le site et quelles pages sont les plus utiles. Ces données sont anonymes et agrégées."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "3. Third-Party Services" : "3. Services Tiers"}</h2>
          <p>{isEn ? "Our site links to third-party platforms (Fiverr, Upwork, Remotasks, etc.). Each has its own privacy policy. We encourage you to review their policies before creating accounts." : "Notre site renvoie vers des plateformes tierces (Fiverr, Upwork, Remotasks, etc.). Chacune a sa propre politique de confidentialité. Nous vous encourageons à consulter leurs politiques avant de créer des comptes."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "4. Telegram Community" : "4. Communauté Telegram"}</h2>
          <p>{isEn ? "If you join our Telegram group (@weplug237), your Telegram username and messages are governed by Telegram's privacy policy. We do not access or store your Telegram data." : "Si vous rejoignez notre groupe Telegram (@weplug237), votre nom d'utilisateur et vos messages sont régis par la politique de confidentialité de Telegram. Nous n'accédons pas à vos données Telegram."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "5. Data Security" : "5. Sécurité des Données"}</h2>
          <p>{isEn ? "Since we don't collect personal data, there is minimal risk. Our website is served over HTTPS for secure browsing." : "Puisque nous ne collectons pas de données personnelles, le risque est minimal. Notre site est servi via HTTPS pour une navigation sécurisée."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "6. Contact" : "6. Contact"}</h2>
          <p>{isEn ? "Privacy questions? Reach us via " : "Questions sur la confidentialité? Contactez-nous via "}<Link href={`/${locale}/contact`} className="text-accent hover:text-accent-hover">Telegram (@weplug237)</Link>.</p>
        </section>
      </div>
    </div>
  );
}
