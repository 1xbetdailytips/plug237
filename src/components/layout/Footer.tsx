import Link from "next/link";
import { Zap, Send } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const isEn = locale === "en";

  const mainNav = [
    { label: isEn ? "Start Here" : "Commencer", href: `/${locale}/start-here` },
    { label: isEn ? "Make Money" : "Gagner de l'Argent", href: `/${locale}/make-money` },
    { label: isEn ? "Freelancing" : "Freelance", href: `/${locale}/freelancing` },
    { label: isEn ? "Remote Jobs" : "Emplois en Ligne", href: `/${locale}/remote-jobs` },
  ];

  const resourceNav = [
    { label: isEn ? "Payment Guides" : "Guides de Paiement", href: `/${locale}/payment-guides` },
    { label: isEn ? "Tools" : "Outils", href: `/${locale}/tools` },
    { label: isEn ? "Resources" : "Ressources", href: `/${locale}/resources` },
    { label: isEn ? "Blog" : "Blog", href: `/${locale}/blog` },
  ];

  const legalNav = [
    { label: isEn ? "About" : "À Propos", href: `/${locale}/about` },
    { label: isEn ? "Contact" : "Contact", href: `/${locale}/contact` },
    { label: isEn ? "Terms" : "Conditions", href: `/${locale}/terms` },
    { label: isEn ? "Privacy" : "Confidentialité", href: `/${locale}/privacy` },
    { label: isEn ? "Disclaimer" : "Avertissement", href: `/${locale}/disclaimer` },
  ];

  return (
    <footer className="border-t border-border bg-bg-surface/50 mt-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-bold text-text">PLUG237</span>
            </div>
            <p className="text-[12px] text-text-dim leading-relaxed mb-4 max-w-[200px]">
              {isEn
                ? "Your step-by-step system to make money online from Cameroon. 100% free, 100% tailored."
                : "Ton système étape par étape pour gagner de l'argent en ligne depuis le Cameroun. 100% gratuit, 100% adapté."}
            </p>
            <a
              href="https://t.me/weplug237"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0088cc] text-white text-[11px] font-semibold hover:bg-[#0077b5] transition-colors"
            >
              <Send className="w-3 h-3" />
              {isEn ? "Join Telegram" : "Rejoindre Telegram"}
            </a>
          </div>

          {/* Main Nav */}
          <div>
            <h4 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-3">
              {isEn ? "Explore" : "Explorer"}
            </h4>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[12px] text-text-dim hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-3">
              {isEn ? "Resources" : "Ressources"}
            </h4>
            <ul className="space-y-2">
              {resourceNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[12px] text-text-dim hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-3">
              {isEn ? "Legal" : "Légal"}
            </h4>
            <ul className="space-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[12px] text-text-dim hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-text-dim">
            © {new Date().getFullYear()} PLUG237. {isEn ? "All rights reserved." : "Tous droits réservés."}
          </p>
          <p className="text-[11px] text-text-dim flex items-center gap-1">
            🇨🇲 {isEn ? "Made in Cameroon" : "Fait au Cameroun"}
          </p>
        </div>
      </div>
    </footer>
  );
}
