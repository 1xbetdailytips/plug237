import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import { Send, Target, Smartphone, Users, Heart, CheckCircle, Shield, Globe, Mail } from "lucide-react";
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

  const verificationSteps = isEn
    ? [
        { step: "Research", desc: "We identify a potential earning method and study its terms, payment options, and geographic availability." },
        { step: "Registration Test", desc: "We sign up from a Cameroon IP address using a local phone number and email to confirm the platform accepts Cameroonian users." },
        { step: "Earnings Verification", desc: "We complete actual tasks or projects on the platform to verify that the work is real and earnings are credited to the account." },
        { step: "Withdrawal Test", desc: "We withdraw earnings to MTN Mobile Money, Orange Money, or a local bank account (UBA, Afriland, etc.) to confirm payments reach Cameroon." },
        { step: "Earnings Range", desc: "We calculate realistic monthly earnings in FCFA based on the time invested, so you know exactly what to expect before starting." },
        { step: "Publish or Reject", desc: "Only methods that pass all five checks get published. We tag each method by difficulty level, required device, and estimated time to first payment." },
      ]
    : [
        { step: "Recherche", desc: "Nous identifions une méthode potentielle et étudions ses conditions, options de paiement et disponibilité géographique." },
        { step: "Test d'Inscription", desc: "Nous nous inscrivons depuis une adresse IP camerounaise avec un numéro local pour confirmer que la plateforme accepte les utilisateurs camerounais." },
        { step: "Vérification des Gains", desc: "Nous effectuons de vraies tâches sur la plateforme pour vérifier que le travail est réel et que les gains sont crédités." },
        { step: "Test de Retrait", desc: "Nous retirons les gains vers MTN MoMo, Orange Money ou un compte bancaire local (UBA, Afriland, etc.) pour confirmer que les paiements arrivent au Cameroun." },
        { step: "Fourchette de Gains", desc: "Nous calculons les gains mensuels réalistes en FCFA basés sur le temps investi, pour que vous sachiez exactement à quoi vous attendre." },
        { step: "Publier ou Rejeter", desc: "Seules les méthodes qui passent les cinq vérifications sont publiées. Chaque méthode est étiquetée par difficulté, appareil requis et délai avant le premier paiement." },
      ];

  const differentiators = isEn
    ? [
        { icon: Target, title: "Cameroon-Only Payment Methods", desc: "MTN MoMo, Orange Money, Express Union, and local bank transfers. We never recommend methods that only pay via PayPal or Western Union." },
        { icon: Globe, title: "FCFA Pricing Throughout", desc: "Every earning estimate is in FCFA. No converting from dollars and wondering about transfer fees. You see the real number you will receive." },
        { icon: Smartphone, title: "Phone-First Methods", desc: "Over 80% of our guides can be completed entirely from an Android smartphone. No laptop required for most methods." },
        { icon: Shield, title: "Bilingual Content (EN/FR)", desc: "Every guide is available in both English and French, reflecting the bilingual reality of Cameroon. Anglophones and Francophones are equally served." },
        { icon: CheckCircle, title: "No Fake Promises", desc: "We never claim you will make millions overnight. Every guide includes realistic FCFA earnings ranges based on actual testing. If a method earns 15,000 FCFA/month, we say 15,000 FCFA/month." },
      ]
    : [
        { icon: Target, title: "Méthodes de Paiement Camerounaises", desc: "MTN MoMo, Orange Money, Express Union et virements bancaires locaux. Nous ne recommandons jamais de méthodes qui paient uniquement via PayPal." },
        { icon: Globe, title: "Prix en FCFA Partout", desc: "Chaque estimation de gain est en FCFA. Pas de conversion depuis le dollar. Vous voyez le vrai montant que vous recevrez." },
        { icon: Smartphone, title: "Méthodes Mobile d'Abord", desc: "Plus de 80% de nos guides peuvent être réalisés entièrement depuis un smartphone Android. Pas besoin d'ordinateur pour la plupart des méthodes." },
        { icon: Shield, title: "Contenu Bilingue (EN/FR)", desc: "Chaque guide est disponible en anglais et en français, reflétant la réalité bilingue du Cameroun." },
        { icon: CheckCircle, title: "Aucune Fausse Promesse", desc: "Nous ne prétendons jamais que vous gagnerez des millions du jour au lendemain. Chaque guide inclut des fourchettes de gains réalistes en FCFA basées sur des tests réels." },
      ];

  return (
    <div className="max-w-3xl space-y-10">
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

      {/* Hero */}
      <div>
        <h1 className="text-2xl font-bold text-text mb-3">
          {isEn ? "About PLUG237" : "À Propos de PLUG237"}
        </h1>
        <p className="text-sm text-text-muted leading-relaxed">
          {isEn
            ? "PLUG237 is a free educational platform built specifically for Cameroonians who want to earn money online. We research, test, and document the methods that actually work — then present them in simple, step-by-step guides with payment solutions adapted to Cameroon."
            : "PLUG237 est une plateforme éducative gratuite conçue spécifiquement pour les Camerounais qui veulent gagner de l'argent en ligne. Nous recherchons, testons et documentons les méthodes qui fonctionnent réellement — puis les présentons dans des guides simples, étape par étape, avec des solutions de paiement adaptées au Cameroun."}
        </p>
      </div>

      {/* Our Story */}
      <div>
        <h2 className="text-lg font-semibold text-text mb-3">
          {isEn ? "Our Story" : "Notre Histoire"}
        </h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            {isEn
              ? "PLUG237 was created by a Cameroonian who lived the frustration of trying to make money online from Central Africa. Every guide on the internet was written for Americans. The recommended payment processors — PayPal, Stripe, Venmo — either do not work in Cameroon or have severe limitations. Wise restricts certain currencies. Most survey sites and micro-task platforms quietly exclude African countries from payouts. The advice was everywhere, but none of it applied to us."
              : "PLUG237 a été créé par un Camerounais qui a vécu la frustration d'essayer de gagner de l'argent en ligne depuis l'Afrique Centrale. Chaque guide sur internet était écrit pour les Américains. Les processeurs de paiement recommandés — PayPal, Stripe, Venmo — ne fonctionnent pas au Cameroun ou ont de sévères limitations. Wise restreint certaines devises. La plupart des sites de sondages excluent discrètement les pays africains des paiements. Les conseils étaient partout, mais aucun ne s'appliquait à nous."}
          </p>
          <p>
            {isEn
              ? "After years of trial and error — testing dozens of platforms, losing time on scams, and finding the few methods that genuinely pay Cameroonians — the idea for PLUG237 was born. Instead of letting others go through the same painful process, why not document everything that actually works and share it for free?"
              : "Après des années d'essais et d'erreurs — tester des dizaines de plateformes, perdre du temps sur des arnaques, et trouver les rares méthodes qui paient vraiment les Camerounais — l'idée de PLUG237 est née. Au lieu de laisser d'autres traverser le même processus douloureux, pourquoi ne pas documenter tout ce qui fonctionne réellement et le partager gratuitement ?"}
          </p>
          <p>
            {isEn
              ? "Today, PLUG237 is a growing library of verified earning methods where every payment guide uses MTN Mobile Money and Orange Money, every earning estimate is in FCFA, and every method has been tested from Cameroon. No assumptions, no American-centric advice — just what works here."
              : "Aujourd'hui, PLUG237 est une bibliothèque croissante de méthodes de gains vérifiées où chaque guide de paiement utilise MTN MoMo et Orange Money, chaque estimation de gain est en FCFA, et chaque méthode a été testée depuis le Cameroun. Pas de suppositions, pas de conseils américano-centriques — juste ce qui fonctionne ici."}
          </p>
        </div>
      </div>

      {/* How We Verify Methods */}
      <div>
        <h2 className="text-lg font-semibold text-text mb-3">
          {isEn ? "How We Verify Methods" : "Comment Nous Vérifions les Méthodes"}
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {isEn
            ? "We do not publish a method just because it sounds promising. Every method on PLUG237 goes through a strict 6-step verification process before it reaches you. If a method fails at any step, it does not get published — no exceptions."
            : "Nous ne publions pas une méthode simplement parce qu'elle semble prometteuse. Chaque méthode sur PLUG237 passe par un processus de vérification strict en 6 étapes avant d'arriver jusqu'à vous. Si une méthode échoue à une étape, elle n'est pas publiée — sans exception."}
        </p>
        <div className="space-y-3">
          {verificationSteps.map((item, i) => (
            <div key={i} className="flex gap-3 items-start rounded-lg border border-border bg-bg-surface p-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text">{item.step}</h3>
                <p className="text-[12px] text-text-dim leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div>
        <h2 className="text-lg font-semibold text-text mb-3">
          {isEn ? "Our Team" : "Notre Équipe"}
        </h2>
        <div className="rounded-lg border border-border bg-bg-surface p-5 space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            {isEn
              ? "PLUG237 is built by a team of Cameroonians who have first-hand experience with freelancing, remote work, and mobile money payments. We have navigated the same challenges you face — unreliable internet connections, payment platforms that block African users, and a job market that does not reflect the talent in this country."
              : "PLUG237 est construit par une équipe de Camerounais qui ont une expérience directe du freelancing, du travail à distance et des paiements par mobile money. Nous avons navigué les mêmes défis que vous — connexions internet instables, plateformes de paiement qui bloquent les utilisateurs africains, et un marché de l'emploi qui ne reflète pas le talent dans ce pays."}
          </p>
          <p>
            {isEn
              ? "Based between Douala and Yaounde, our team combines skills in web development, digital marketing, content writing, and financial technology. Every guide on PLUG237 is written by someone who has personally used the method and withdrawn money to a Cameroonian mobile money account."
              : "Basée entre Douala et Yaoundé, notre équipe combine des compétences en développement web, marketing digital, rédaction de contenu et technologie financière. Chaque guide sur PLUG237 est rédigé par quelqu'un qui a personnellement utilisé la méthode et retiré de l'argent sur un compte mobile money camerounais."}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm text-text">
              {isEn ? "Questions or partnership inquiries? " : "Questions ou demandes de partenariat ? "}
              <a href="mailto:contact@plug237.com" className="text-accent hover:underline">contact@plug237.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div>
        <h2 className="text-lg font-semibold text-text mb-3">
          {isEn ? "What Makes Us Different" : "Ce Qui Nous Rend Différents"}
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {isEn
            ? "The internet is full of \"make money online\" sites. Most of them are written from the United States or Europe and assume you have access to PayPal, a US bank account, and a laptop. PLUG237 is different in five fundamental ways:"
            : "Internet regorge de sites \"gagner de l'argent en ligne\". La plupart sont écrits depuis les États-Unis ou l'Europe et supposent que vous avez accès à PayPal, un compte bancaire américain et un ordinateur portable. PLUG237 est différent de cinq manières fondamentales :"}
        </p>
        <div className="grid grid-cols-1 gap-3">
          {differentiators.map((d, i) => (
            <div key={i} className="flex gap-3 items-start rounded-lg border border-border bg-bg-surface p-4">
              <d.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-text mb-0.5">{d.title}</h3>
                <p className="text-[12px] text-text-dim leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
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

      {/* Last Updated */}
      <p className="text-[11px] text-text-dim text-center">
        {isEn ? "Last updated: April 2026" : "Dernière mise à jour : Avril 2026"}
      </p>
    </div>
  );
}
