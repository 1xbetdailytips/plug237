import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "30+ Ways to Make Money Online in Cameroon (2026)",
    titleFr: "30+ Façons de Gagner de l'Argent en Ligne au Cameroun (2026)",
    descEn: "Verified methods to earn money online from Cameroon. Phone and laptop methods with step-by-step guides. All earnings in FCFA.",
    descFr: "Méthodes vérifiées pour gagner de l'argent en ligne depuis le Cameroun. Guides étape par étape avec revenus en FCFA.",
    path: "/make-money",
  });
}

export default function MakeMoneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
