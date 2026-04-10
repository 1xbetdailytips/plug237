import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    titleEn: "Remote Job Platforms Hiring Cameroonians in 2026",
    titleFr: "Plateformes d'Emploi à Distance Recrutant des Camerounais en 2026",
    descEn: "Curated list of remote job platforms that accept and pay workers in Cameroon. Real earnings in FCFA, verified payment methods.",
    descFr: "Liste de plateformes d'emploi à distance qui acceptent et paient les travailleurs au Cameroun. Revenus réels en FCFA.",
    path: "/remote-jobs",
  });
}

export default function RemoteJobsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
