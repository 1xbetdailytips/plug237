import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Find Your Best Online Earning Method — Quiz | PLUG237",
    titleFr: "Trouve Ta Meilleure Méthode de Gains en Ligne — Quiz | PLUG237",
    descEn: "Take our 2-minute quiz to discover the best way to make money online from Cameroon based on your skills, device, and goals.",
    descFr: "Fais notre quiz de 2 minutes pour découvrir la meilleure façon de gagner de l'argent en ligne depuis le Cameroun selon tes compétences et objectifs.",
    path: "/quiz",
  });
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
