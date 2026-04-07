import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Earnings Disclaimer — PLUG237",
    titleFr: "Avertissement sur les Revenus — PLUG237",
    descEn: "Important disclaimer about earning potential. Results vary based on effort, skills, and market conditions.",
    descFr: "Avertissement important sur le potentiel de gains. Les résultats varient selon l'effort, les compétences et les conditions du marché.",
    path: "/disclaimer",
  });
}

export default async function DisclaimerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const breadcrumbs = [
    { name: isEn ? "Home" : "Accueil", url: `${siteConfig.url}/${locale}` },
    { name: isEn ? "Disclaimer" : "Avertissement", url: `${siteConfig.url}/${locale}/disclaimer` },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <nav className="flex items-center gap-1.5 text-[11px] text-text-dim">
        <Link href={`/${locale}`} className="hover:text-accent transition-colors">{isEn ? "Home" : "Accueil"}</Link>
        <span>/</span>
        <span className="text-text">{isEn ? "Disclaimer" : "Avertissement"}</span>
      </nav>

      <h1 className="text-2xl font-bold text-text">{isEn ? "Earnings Disclaimer" : "Avertissement sur les Revenus"}</h1>

      {/* Warning box */}
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 flex gap-3">
        <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
        <p className="text-sm text-text leading-relaxed">
          {isEn
            ? "PLUG237 is an educational resource. We do not guarantee that you will earn any specific amount of money using the methods described on this website. All earnings figures mentioned are estimates based on research and third-party reports."
            : "PLUG237 est une ressource éducative. Nous ne garantissons pas que vous gagnerez un montant spécifique en utilisant les méthodes décrites sur ce site. Tous les chiffres de revenus mentionnés sont des estimations basées sur la recherche et des rapports tiers."}
        </p>
      </div>

      <div className="space-y-6 text-sm text-text-muted leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "No Guarantees" : "Aucune Garantie"}</h2>
          <p>{isEn ? "The earnings potential mentioned on PLUG237 is not a guarantee of income. Your results will depend on many factors including your skills, effort, consistency, internet access, market conditions, and the specific platform you use. Some people may earn more, others may earn less, and some may earn nothing at all." : "Le potentiel de gains mentionné sur PLUG237 n'est pas une garantie de revenu. Vos résultats dépendront de nombreux facteurs, notamment vos compétences, votre effort, votre régularité, votre accès à Internet, les conditions du marché et la plateforme spécifique que vous utilisez."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "Educational Purpose Only" : "But Éducatif Uniquement"}</h2>
          <p>{isEn ? "All content on PLUG237 is for educational and informational purposes only. We share methods, guides, and resources to help Cameroonians explore online earning opportunities. This is not financial advice, investment advice, or a promise of employment." : "Tout le contenu de PLUG237 est à des fins éducatives et informatives uniquement. Nous partageons des méthodes, des guides et des ressources pour aider les Camerounais à explorer les opportunités de gains en ligne. Ce n'est pas un conseil financier, un conseil d'investissement ou une promesse d'emploi."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "Third-Party Platforms" : "Plateformes Tierces"}</h2>
          <p>{isEn ? "PLUG237 mentions various third-party platforms (Fiverr, Upwork, Remotasks, Binance, etc.). We are not affiliated with, endorsed by, or responsible for these platforms. Their terms, conditions, and availability in Cameroon may change at any time." : "PLUG237 mentionne diverses plateformes tierces (Fiverr, Upwork, Remotasks, Binance, etc.). Nous ne sommes ni affiliés, ni approuvés, ni responsables de ces plateformes. Leurs conditions et leur disponibilité au Cameroun peuvent changer à tout moment."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "Affiliate Disclosure" : "Divulgation d'Affiliation"}</h2>
          <p>{isEn ? "Some links on PLUG237 may be affiliate links, meaning we may earn a small commission if you sign up through our link. This does not affect the price you pay or our recommendation. We only recommend platforms we have researched and believe are legitimate." : "Certains liens sur PLUG237 peuvent être des liens d'affiliation, ce qui signifie que nous pouvons gagner une petite commission si vous vous inscrivez via notre lien. Cela n'affecte pas le prix que vous payez ni notre recommandation. Nous ne recommandons que les plateformes que nous avons recherchées et que nous estimons légitimes."}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text mb-2">{isEn ? "Scam Warning" : "Avertissement sur les Arnaques"}</h2>
          <p>{isEn ? "Be cautious of any platform that asks you to pay money upfront to start earning. Legitimate online work opportunities should not require registration fees. If something sounds too good to be true, it probably is. PLUG237 does its best to verify all methods, but we cannot guarantee every platform will remain legitimate." : "Méfiez-vous de toute plateforme qui vous demande de payer de l'argent d'avance pour commencer à gagner. Les opportunités de travail en ligne légitimes ne devraient pas nécessiter de frais d'inscription. Si quelque chose semble trop beau pour être vrai, c'est probablement le cas."}</p>
        </section>
      </div>
    </div>
  );
}
