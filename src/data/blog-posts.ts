export type BlogPost = {
  slug: string;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
  category: string;
  datePublished: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "earn-money-phone-cameroon",
    titleEn: "How to Earn 50,000 FCFA Weekly With Your Phone in Cameroon",
    titleFr: "Comment Gagner 50 000 FCFA par Semaine avec Ton Telephone au Cameroun",
    descEn:
      "Practical methods to earn at least 50,000 FCFA every week using just your smartphone from Douala, Yaounde, or anywhere in Cameroon.",
    descFr:
      "Methodes pratiques pour gagner au moins 50 000 FCFA chaque semaine avec ton smartphone depuis Douala, Yaounde ou partout au Cameroun.",
    category: "Make Money",
    datePublished: "2026-04-01",
    readTime: "10 min",
    tags: ["phone", "mobile money", "cameroon", "side hustle"],
  },
  {
    slug: "top-10-sites-mobile-money-cameroon",
    titleEn: "Top 10 Websites That Pay in Mobile Money in Cameroon 2026",
    titleFr: "Top 10 Sites Qui Paient en Mobile Money au Cameroun 2026",
    descEn:
      "Tested and verified websites that pay directly to MTN MoMo or Orange Money in Cameroon. No bank account needed.",
    descFr:
      "Sites testes et verifies qui paient directement sur MTN MoMo ou Orange Money au Cameroun. Pas besoin de compte bancaire.",
    category: "Make Money",
    datePublished: "2026-04-02",
    readTime: "12 min",
    tags: ["mobile money", "mtn momo", "orange money", "online earning"],
  },
  {
    slug: "freelancer-guide-cameroon",
    titleEn: "Complete Guide: Becoming a Freelancer in Cameroon",
    titleFr: "Guide Complet : Devenir Freelancer au Cameroun",
    descEn:
      "Everything you need to know to start freelancing from Cameroon. Platforms, skills, pricing, getting your first client, and getting paid.",
    descFr:
      "Tout ce que tu dois savoir pour commencer le freelance au Cameroun. Plateformes, competences, tarifs, premier client et paiement.",
    category: "Freelancing",
    datePublished: "2026-04-03",
    readTime: "15 min",
    tags: ["freelancing", "fiverr", "upwork", "cameroon"],
  },
  {
    slug: "crypto-p2p-cameroon-binance",
    titleEn: "Crypto P2P in Cameroon: Convert USDT to FCFA via Binance",
    titleFr: "Crypto P2P au Cameroun : Convertir USDT en FCFA via Binance",
    descEn:
      "Step-by-step guide to buying and selling USDT for FCFA on Binance P2P. How to avoid scams and get the best rates in Cameroon.",
    descFr:
      "Guide etape par etape pour acheter et vendre USDT en FCFA sur Binance P2P. Comment eviter les arnaques et obtenir les meilleurs taux au Cameroun.",
    category: "Payments",
    datePublished: "2026-04-04",
    readTime: "11 min",
    tags: ["crypto", "binance", "p2p", "usdt", "fcfa"],
  },
  {
    slug: "online-jobs-no-degree-cameroon",
    titleEn: "Best Online Jobs for Cameroonians Without a Degree",
    titleFr: "Meilleurs Emplois en Ligne pour Camerounais Sans Diplome",
    descEn:
      "You don't need a university degree to earn online. Here are the best remote jobs and gigs accessible from Cameroon right now.",
    descFr:
      "Tu n'as pas besoin d'un diplome universitaire pour gagner en ligne. Voici les meilleurs emplois et missions accessibles depuis le Cameroun.",
    category: "Remote Jobs",
    datePublished: "2026-04-05",
    readTime: "13 min",
    tags: ["no degree", "remote jobs", "online jobs", "cameroon"],
  },
  {
    slug: "mtn-momo-international-payments",
    titleEn: "MTN MoMo for Freelancers: Receiving International Payments",
    titleFr: "MTN MoMo pour Freelancers : Recevoir des Paiements Internationaux",
    descEn:
      "How to receive freelance payments from abroad directly to your MTN Mobile Money account in Cameroon. Fees, limits, and workarounds.",
    descFr:
      "Comment recevoir des paiements freelance de l'etranger directement sur ton compte MTN Mobile Money au Cameroun. Frais, limites et astuces.",
    category: "Payments",
    datePublished: "2026-04-06",
    readTime: "9 min",
    tags: ["mtn momo", "payments", "freelancing", "international"],
  },
  {
    slug: "tiktok-money-cameroon",
    titleEn: "How to Make Money on TikTok in Cameroon: Step-by-Step Guide",
    titleFr: "Comment Gagner de l'Argent sur TikTok au Cameroun : Guide Etape par Etape",
    descEn:
      "From zero followers to earning real money on TikTok in Cameroon. Creativity Program, brand deals, and affiliate marketing explained.",
    descFr:
      "De zero abonnes a gagner de l'argent reel sur TikTok au Cameroun. Programme de Creativite, partenariats de marques et marketing d'affiliation.",
    category: "Make Money",
    datePublished: "2026-04-07",
    readTime: "14 min",
    tags: ["tiktok", "social media", "cameroon", "content creation"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  relatedSlugs: string[]
): BlogPost[] {
  return relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => !!p && p.slug !== currentSlug);
}
