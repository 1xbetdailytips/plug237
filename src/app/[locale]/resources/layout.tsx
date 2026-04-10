import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Free Resources & Guides for Cameroonians — PLUG237",
    titleFr: "Ressources et Guides Gratuits pour les Camerounais — PLUG237",
    descEn: "Free downloadable guides, templates, and community resources for making money online in Cameroon.",
    descFr: "Guides téléchargeables gratuits, modèles et ressources communautaires pour gagner de l'argent en ligne au Cameroun.",
    path: "/resources",
  });
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
