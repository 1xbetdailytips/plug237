import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Free Online Earning Tools & Calculators — PLUG237",
    titleFr: "Outils et Calculateurs Gratuits pour Gagner en Ligne — PLUG237",
    descEn: "Free tools for Cameroonians: earnings calculator in FCFA, platform finder, and skill assessment to maximize your online income.",
    descFr: "Outils gratuits pour les Camerounais: calculateur de revenus en FCFA, recherche de plateformes et évaluation des compétences.",
    path: "/tools",
  });
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
