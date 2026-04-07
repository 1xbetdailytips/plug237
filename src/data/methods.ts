export type Method = {
  slug: string;
  titleEn: string;
  titleFr: string;
  shortDescEn: string;
  shortDescFr: string;
  earningsXAF: string;
  earningsUSD: string;
  difficulty: "Easy" | "Medium" | "Hard";
  device: "phone" | "laptop" | "both";
  timeToStart: string;
  timeToFirstPayment: string;
  category: string;
  tag: "HOT" | "POPULAR" | "NEW" | null;
  skills: string[];
  paymentMethods: string[];
  relatedSlugs: string[];
};

export const methods: Method[] = [
  {
    slug: "whatsapp-status-business",
    titleEn: "WhatsApp Status Business",
    titleFr: "Business via Statut WhatsApp",
    shortDescEn:
      "Sell products and promote services through WhatsApp Status. Use your existing contacts to start a micro-business with zero capital.",
    shortDescFr:
      "Vendez des produits et promouvez des services via le Statut WhatsApp. Utilisez vos contacts existants pour lancer un micro-business sans capital.",
    earningsXAF: "30,000-195,000 FCFA/mois",
    earningsUSD: "$50-$300/month",
    difficulty: "Easy",
    device: "phone",
    timeToStart: "1 day",
    timeToFirstPayment: "1-3 days",
    category: "social-commerce",
    tag: "HOT",
    skills: ["Sales", "Photography", "Copywriting"],
    paymentMethods: ["MTN MoMo", "Orange Money", "Cash"],
    relatedSlugs: [
      "tiktok-creativity-program",
      "affiliate-marketing",
      "canva-design-services",
    ],
  },
  {
    slug: "tiktok-creativity-program",
    titleEn: "TikTok Creativity Program",
    titleFr: "Programme de Creativite TikTok",
    shortDescEn:
      "Create short videos and earn from TikTok's Creativity Program. Works with just a phone and free editing apps.",
    shortDescFr:
      "Creez des videos courtes et gagnez via le Programme de Creativite TikTok. Fonctionne avec un telephone et des applis de montage gratuites.",
    earningsXAF: "130,000-650,000 FCFA/mois",
    earningsUSD: "$200-$1,000/month",
    difficulty: "Medium",
    device: "phone",
    timeToStart: "1 week",
    timeToFirstPayment: "30-60 days",
    category: "content-creation",
    tag: "NEW",
    skills: ["Video Editing", "Creativity", "Trending Content"],
    paymentMethods: ["Payoneer", "Crypto P2P", "Bank Transfer"],
    relatedSlugs: [
      "youtube-content-creation",
      "social-media-management",
      "affiliate-marketing",
    ],
  },
  {
    slug: "fiverr-freelancing",
    titleEn: "Fiverr Freelancing",
    titleFr: "Freelance sur Fiverr",
    shortDescEn:
      "Offer data entry, design, writing, and typing services on Fiverr. No technical skills needed, just accuracy and speed.",
    shortDescFr:
      "Proposez des services de saisie de donnees, design, redaction et frappe sur Fiverr. Pas de competences techniques requises.",
    earningsXAF: "65,000-325,000 FCFA/mois",
    earningsUSD: "$100-$500/month",
    difficulty: "Easy",
    device: "laptop",
    timeToStart: "2 days",
    timeToFirstPayment: "14-21 days",
    category: "freelancing",
    tag: "POPULAR",
    skills: ["Data Entry", "Typing Speed", "Basic English"],
    paymentMethods: ["Payoneer", "Bank Transfer", "Crypto P2P"],
    relatedSlugs: [
      "upwork-virtual-assistant",
      "transcription-jobs",
      "canva-design-services",
    ],
  },
  {
    slug: "upwork-virtual-assistant",
    titleEn: "Upwork Virtual Assistant",
    titleFr: "Assistant Virtuel sur Upwork",
    shortDescEn:
      "Help businesses with emails, scheduling, research, and admin tasks. Great for organized, detail-oriented people.",
    shortDescFr:
      "Aidez les entreprises avec les emails, la planification, la recherche et les taches administratives. Ideal pour les personnes organisees.",
    earningsXAF: "195,000-520,000 FCFA/mois",
    earningsUSD: "$300-$800/month",
    difficulty: "Medium",
    device: "laptop",
    timeToStart: "3 days",
    timeToFirstPayment: "10-14 days",
    category: "freelancing",
    tag: "POPULAR",
    skills: ["Organization", "Email Management", "English Communication"],
    paymentMethods: ["Payoneer", "Bank Transfer", "Wise"],
    relatedSlugs: [
      "fiverr-freelancing",
      "social-media-management",
      "transcription-jobs",
    ],
  },
  {
    slug: "remotasks-data-labeling",
    titleEn: "Remotasks Data Labeling",
    titleFr: "Etiquetage de Donnees Remotasks",
    shortDescEn:
      "Label data for AI companies from your phone or laptop. Tasks include image tagging, text categorization, and content review.",
    shortDescFr:
      "Etiquetez des donnees pour les entreprises d'IA depuis votre telephone ou laptop. Taches: marquage d'images, categorisation de textes.",
    earningsXAF: "25,000-80,000 FCFA/mois",
    earningsUSD: "$38-$123/month",
    difficulty: "Easy",
    device: "both",
    timeToStart: "1 day",
    timeToFirstPayment: "7-14 days",
    category: "micro-tasks",
    tag: "NEW",
    skills: ["Attention to Detail", "Basic Computer Skills"],
    paymentMethods: ["Crypto P2P", "Payoneer"],
    relatedSlugs: [
      "transcription-jobs",
      "fiverr-freelancing",
      "whatsapp-status-business",
    ],
  },
  {
    slug: "transcription-jobs",
    titleEn: "Transcription Jobs",
    titleFr: "Emplois de Transcription",
    shortDescEn:
      "Transcribe audio and video to text using platforms like Rev and GoTranscript. Bilingual English-French speakers earn premium rates.",
    shortDescFr:
      "Transcrivez de l'audio et de la video en texte via Rev et GoTranscript. Les bilingues anglais-francais gagnent des tarifs premium.",
    earningsXAF: "97,500-260,000 FCFA/mois",
    earningsUSD: "$150-$400/month",
    difficulty: "Easy",
    device: "laptop",
    timeToStart: "2 days",
    timeToFirstPayment: "7-14 days",
    category: "freelancing",
    tag: null,
    skills: ["Typing Speed", "Listening", "English/French"],
    paymentMethods: ["PayPal", "Payoneer", "Crypto P2P"],
    relatedSlugs: [
      "fiverr-freelancing",
      "remotasks-data-labeling",
      "upwork-virtual-assistant",
    ],
  },
  {
    slug: "social-media-management",
    titleEn: "Social Media Management",
    titleFr: "Gestion des Reseaux Sociaux",
    shortDescEn:
      "Manage social media accounts for local businesses. Post content, reply to comments, and grow their following.",
    shortDescFr:
      "Gerez les comptes de reseaux sociaux pour les entreprises locales. Publiez du contenu, repondez aux commentaires, developpez leur audience.",
    earningsXAF: "130,000-390,000 FCFA/mois",
    earningsUSD: "$200-$600/month",
    difficulty: "Medium",
    device: "both",
    timeToStart: "3 days",
    timeToFirstPayment: "7-14 days",
    category: "digital-marketing",
    tag: null,
    skills: ["Social Media", "Content Creation", "Communication"],
    paymentMethods: ["MTN MoMo", "Orange Money", "Bank Transfer"],
    relatedSlugs: [
      "canva-design-services",
      "whatsapp-status-business",
      "tiktok-creativity-program",
    ],
  },
  {
    slug: "youtube-content-creation",
    titleEn: "YouTube Content Creation",
    titleFr: "Creation de Contenu YouTube",
    shortDescEn:
      "Create YouTube channels using faceless videos, stock footage, or original content. Monetize through AdSense and affiliate links.",
    shortDescFr:
      "Creez des chaines YouTube avec des videos sans visage, du stock footage ou du contenu original. Monetisez via AdSense et l'affiliation.",
    earningsXAF: "65,000-1,300,000 FCFA/mois",
    earningsUSD: "$100-$2,000/month",
    difficulty: "Medium",
    device: "both",
    timeToStart: "1 week",
    timeToFirstPayment: "60-120 days",
    category: "content-creation",
    tag: "POPULAR",
    skills: ["Video Editing", "SEO", "Consistency"],
    paymentMethods: ["Payoneer", "Bank Transfer", "Crypto P2P"],
    relatedSlugs: [
      "tiktok-creativity-program",
      "affiliate-marketing",
      "canva-design-services",
    ],
  },
  {
    slug: "affiliate-marketing",
    titleEn: "Affiliate Marketing",
    titleFr: "Marketing d'Affiliation",
    shortDescEn:
      "Promote products and earn commissions. Use social media, WhatsApp groups, or a blog to drive sales for brands like 1xBet, Jumia, and more.",
    shortDescFr:
      "Promouvez des produits et gagnez des commissions. Utilisez les reseaux sociaux, groupes WhatsApp ou un blog pour generer des ventes.",
    earningsXAF: "32,500-325,000 FCFA/mois",
    earningsUSD: "$50-$500/month",
    difficulty: "Medium",
    device: "phone",
    timeToStart: "3 days",
    timeToFirstPayment: "14-30 days",
    category: "digital-marketing",
    tag: null,
    skills: ["Marketing", "Content Writing", "Social Media"],
    paymentMethods: ["MTN MoMo", "Orange Money", "Crypto P2P", "Bank Transfer"],
    relatedSlugs: [
      "whatsapp-status-business",
      "youtube-content-creation",
      "social-media-management",
    ],
  },
  {
    slug: "canva-design-services",
    titleEn: "Canva Design Services",
    titleFr: "Services de Design Canva",
    shortDescEn:
      "Design social media posts, logos, flyers, and templates using Canva. Free to learn, high demand from local and international businesses.",
    shortDescFr:
      "Concevez des posts, logos, flyers et templates avec Canva. Gratuit a apprendre, forte demande des entreprises locales et internationales.",
    earningsXAF: "65,000-260,000 FCFA/mois",
    earningsUSD: "$100-$400/month",
    difficulty: "Easy",
    device: "both",
    timeToStart: "2 days",
    timeToFirstPayment: "7-14 days",
    category: "design",
    tag: null,
    skills: ["Design Eye", "Canva", "Color Theory"],
    paymentMethods: ["MTN MoMo", "Orange Money", "Payoneer", "Crypto P2P"],
    relatedSlugs: [
      "fiverr-freelancing",
      "social-media-management",
      "digital-products",
    ],
  },
  {
    slug: "online-tutoring",
    titleEn: "Online Tutoring",
    titleFr: "Tutorat en Ligne",
    shortDescEn:
      "Teach English or French to international students via Preply or Cambly. Bilingual Cameroonians have a strong advantage.",
    shortDescFr:
      "Enseignez l'anglais ou le francais aux etudiants internationaux via Preply ou Cambly. Les Camerounais bilingues ont un avantage.",
    earningsXAF: "65,000-260,000 FCFA/mois",
    earningsUSD: "$100-$400/month",
    difficulty: "Medium",
    device: "laptop",
    timeToStart: "3 days",
    timeToFirstPayment: "7-14 days",
    category: "education",
    tag: null,
    skills: ["Teaching", "Patience", "English/French Fluency"],
    paymentMethods: ["Payoneer", "PayPal", "Bank Transfer"],
    relatedSlugs: [
      "upwork-virtual-assistant",
      "transcription-jobs",
      "fiverr-freelancing",
    ],
  },
  {
    slug: "digital-products",
    titleEn: "Digital Products",
    titleFr: "Produits Numeriques",
    shortDescEn:
      "Create and sell ebooks, templates, courses, and digital downloads. Build once, sell forever with passive income potential.",
    shortDescFr:
      "Creez et vendez des ebooks, templates, cours et telechargements numeriques. Creez une fois, vendez indefiniment avec un revenu passif.",
    earningsXAF: "50,000-500,000 FCFA/mois",
    earningsUSD: "$75-$750/month",
    difficulty: "Hard",
    device: "both",
    timeToStart: "1-2 weeks",
    timeToFirstPayment: "30-60 days",
    category: "passive-income",
    tag: null,
    skills: ["Writing", "Design", "Marketing", "Expertise in a Topic"],
    paymentMethods: ["MTN MoMo", "Orange Money", "Payoneer", "Crypto P2P"],
    relatedSlugs: [
      "canva-design-services",
      "affiliate-marketing",
      "youtube-content-creation",
    ],
  },
];

export const methodSlugs = methods.map((m) => m.slug);
