import type { Metadata } from "next";
import {
  Smartphone,
  CreditCard,
  Landmark,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Zap,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Guides — How to Get Paid Online from Cameroon | PLUG237",
  description:
    "Complete guides to receive international payments in Cameroon. MTN MoMo, Orange Money, Crypto P2P (Binance), bank transfers — step by step with XAF fees.",
  keywords: [
    "receive money Cameroon",
    "MTN MoMo international payment",
    "Orange Money freelancing",
    "Binance P2P Cameroon",
    "get paid online Cameroon",
    "freelance payment Cameroon",
    "FCFA payment methods",
    "bank transfer Cameroon",
    "UBA Cameroon",
    "Ecobank Cameroon",
  ],
  openGraph: {
    title: "How to Get Paid Online from Cameroon — Complete Payment Guides",
    description:
      "MTN MoMo, Orange Money, Crypto P2P, Bank Transfer — every payment method explained step by step for Cameroonian freelancers.",
    type: "article",
  },
};

const guides = [
  {
    id: "mtn-momo",
    title: "MTN MoMo: Receive International Payments",
    description:
      "The most popular cashout method in Cameroon. Convert your freelancing earnings to MTN Mobile Money through Payoneer, P2P exchangers, or crypto.",
    icon: Smartphone,
    difficulty: "Easy",
    time: "10 min read",
    tag: "MOST POPULAR",
    steps: [
      "Set up a Payoneer account linked to your freelance platform (Fiverr, Upwork, etc.)",
      "Withdraw earnings to your Payoneer balance in USD",
      "Find a trusted local exchanger on Telegram/WhatsApp groups (ask for references)",
      "Send USD from Payoneer to exchanger — receive FCFA on your MoMo instantly",
      "Alternative: Use Binance P2P to sell crypto and receive directly on MoMo",
    ],
    fees: "12,000 - 25,000 FCFA per 300,000 FCFA (2-4%)",
    speed: "1-3 business days (Payoneer) + instant MoMo credit",
    pros: [
      "Widely accepted everywhere in Cameroon",
      "No bank account needed",
      "Instant MoMo credit after exchange",
      "Can withdraw cash at any MoMo agent",
    ],
    cons: [
      "Depends on local exchanger availability and trust",
      "Exchange rate varies between exchangers",
      "Daily MoMo limit: 1,000,000 FCFA (standard) — upgrade at MTN center for higher",
    ],
    tips: [
      "Always verify exchanger reputation before sending money — ask for at least 3 references",
      "Split large amounts into multiple transactions to stay within MoMo daily limits",
      "Save exchanger receipts and screenshots for your records",
      "Upgrade your MoMo account at an MTN service center to increase daily limits to 2,000,000+ FCFA",
    ],
  },
  {
    id: "orange-money",
    title: "Orange Money: Alternative Mobile Payment",
    description:
      "Orange Money works with all the same methods as MTN MoMo. If you are on the Orange network or want to diversify, here is how to receive your freelancing income.",
    icon: Smartphone,
    difficulty: "Easy",
    time: "8 min read",
    tag: null,
    steps: [
      "All methods that work with MTN MoMo also work with Orange Money",
      "On Binance P2P, select 'Orange Money Cameroon' as your payment method when selling USDT",
      "For P2P exchangers, specify your Orange Money number instead of MoMo",
      "Use bank-to-Orange Money transfer from your local bank account",
      "Interoperability: You can receive from MoMo to Orange via mobile transfer (small fee applies)",
    ],
    fees: "12,000 - 25,000 FCFA per 300,000 FCFA (2-4%)",
    speed: "Same as MoMo methods — instant after exchange",
    pros: [
      "Same accessibility as MoMo across Cameroon",
      "Interoperable with MTN MoMo (you can receive from either)",
      "Growing Orange Money agent network",
      "Good Binance P2P liquidity for Orange Money",
    ],
    cons: [
      "Smaller market share than MoMo in some regions",
      "Fewer P2P exchangers specifically for Orange Money",
      "Daily limits similar to MoMo — visit Orange center to upgrade",
    ],
    tips: [
      "Having both MoMo and Orange Money gives you more exchanger options",
      "Orange Money sometimes has better P2P rates on Binance due to less competition",
      "Check both MoMo and Orange Money rates before converting large amounts",
    ],
  },
  {
    id: "crypto-p2p",
    title: "Crypto P2P: Receive USDT/USDC via Binance",
    description:
      "The fastest and cheapest method. Get paid in stablecoins (USDT/USDC) and convert to MoMo or Orange Money in 15 minutes via Binance P2P.",
    icon: Zap,
    difficulty: "Medium",
    time: "15 min read",
    tag: "FASTEST & CHEAPEST",
    steps: [
      "Download Binance app and create an account with your Cameroon phone number",
      "Complete KYC verification with your CNI (Carte Nationale d'Identite) or passport",
      "Share your USDT wallet address (use TRC-20 network for lowest fees) with clients",
      "Receive USDT directly to your Binance wallet — confirm with client the TX hash",
      "Go to Binance P2P > Sell > USDT > Select MTN MoMo or Orange Money as payment",
      "Choose a verified buyer with 95%+ completion rate and 100+ trades",
      "Complete the trade — receive FCFA directly on your mobile money in 5-15 minutes",
    ],
    fees: "0 - 6,000 FCFA per 300,000 FCFA (0-1% spread on P2P)",
    speed: "15-30 minutes total (near instant)",
    pros: [
      "Lowest fees of any method — often 0% Binance fee",
      "Fastest settlement (15 min vs days for bank transfers)",
      "No bank account needed",
      "Available 24/7 including weekends and holidays",
      "Direct MoMo or Orange Money payout",
    ],
    cons: [
      "Crypto can be volatile if you hold USDT for long (stablecoins minimize this)",
      "Need to learn P2P trading basics",
      "Scam risk with unverified buyers — always use Binance escrow",
      "Some clients may not know how to send crypto",
    ],
    tips: [
      "NEVER release crypto before confirming FCFA is received in your MoMo/OM account",
      "Only trade with verified merchants (yellow badge) with 95%+ completion rate",
      "Use TRC-20 (Tron) network for USDT transfers — fees are under 100 FCFA vs 6,000+ on ERC-20",
      "Keep your Binance account verified and in good standing to avoid holds",
      "If a buyer asks you to release before payment, report immediately — it is a scam",
      "Start with small trades (50,000 FCFA) to build your reputation",
    ],
  },
  {
    id: "bank-transfer",
    title: "Local Bank-to-Bank Transfer (International Wire)",
    description:
      "Receive international wire transfers directly into your Cameroon bank account. Best for large amounts and clients who prefer traditional banking.",
    icon: Landmark,
    difficulty: "Medium",
    time: "12 min read",
    tag: "BEST FOR LARGE AMOUNTS",
    steps: [
      "Open a bank account at UBA, Ecobank, BICEC, or Afriland First Bank (bring CNI + proof of address)",
      "Request your full SWIFT/BIC details and IBAN from the bank — you need: bank name, SWIFT code, account number, branch address",
      "Share these details with your client or freelancing platform for wire transfer",
      "Client sends payment via international wire (USD or EUR)",
      "Bank receives funds in 3-5 business days — you may need to visit the branch to confirm",
      "Convert to FCFA at the bank's exchange rate and withdraw or transfer to MoMo/OM",
    ],
    fees: "15,000 - 30,000 FCFA receiving fee + 1-3% exchange rate spread",
    speed: "3-7 business days",
    pros: [
      "No transaction limits — best for amounts over 1,000,000 FCFA",
      "Official paper trail for tax and business purposes",
      "Clients worldwide can send via their own bank",
      "No need for third-party exchangers",
      "Banks provide receipts and documentation",
    ],
    cons: [
      "Slowest method (3-7 business days)",
      "Higher fees than crypto P2P or mobile money exchangers",
      "Bank exchange rates are less favorable than market rate",
      "May need to visit the bank branch in person",
      "Some banks require justification documents for large incoming transfers",
    ],
    tips: [
      "UBA and Ecobank have the best international transfer infrastructure in Cameroon",
      "Ask your bank for their USD or EUR domiciliation account details — some banks have separate accounts for foreign currency",
      "For amounts over 5,000,000 FCFA, the bank may ask for an invoice or contract — have it ready",
      "BICEC (now part of BPCE group) has competitive rates for EUR transfers from France",
      "Afriland First Bank is good for African regional transfers (CEMAC zone)",
      "Always confirm the SWIFT code with your bank directly — incorrect codes cause delays of 2+ weeks",
      "Ask about 'frais de correspondant' (correspondent bank fees) — these are deducted from your amount",
    ],
  },
];

const faqs = [
  {
    q: "What is the best way to receive money from freelancing in Cameroon?",
    a: "For speed and low fees, Binance P2P crypto-to-MoMo is the best (15 minutes, under 1% fees). For reliability and platform compatibility, Payoneer + local exchanger to MoMo is the most common. For large amounts over 1,000,000 FCFA, a direct bank wire to UBA or Ecobank is safest.",
  },
  {
    q: "What are the daily limits on MTN MoMo and Orange Money?",
    a: "Standard MTN MoMo accounts have a daily limit of around 1,000,000 FCFA. Orange Money limits are similar. To increase your limits, visit an MTN or Orange service center with your CNI and request an account upgrade. Upgraded accounts can handle 2,000,000+ FCFA per day.",
  },
  {
    q: "Is receiving crypto payments legal in Cameroon?",
    a: "Cryptocurrency is not explicitly regulated in Cameroon — it is neither officially legal nor illegal. Many freelancers and businesses use Binance P2P daily without issues. Use reputable exchanges like Binance, keep records of all transactions, and declare income for tax purposes.",
  },
  {
    q: "Which Cameroon banks are best for receiving international wire transfers?",
    a: "UBA Cameroon and Ecobank Cameroon have the strongest international transfer infrastructure. BICEC is excellent for EUR transfers from France (part of BPCE group). Afriland First Bank is good for regional CEMAC transfers. All four support SWIFT and can receive USD, EUR, and GBP.",
  },
  {
    q: "How do I avoid scams when using P2P exchangers?",
    a: "Always get references from trusted community members before using a new exchanger. On Binance P2P, only trade with verified merchants who have 95%+ completion rate and 100+ trades. Never release crypto before confirming payment in your MoMo. Start with small amounts to test new exchangers. If something feels off, cancel the trade.",
  },
  {
    q: "Can I receive payments from Payoneer in Cameroon?",
    a: "Yes. Payoneer works in Cameroon and is supported by most freelancing platforms (Fiverr, Upwork, Freelancer, etc.). You can withdraw from Payoneer to a local bank account or use a trusted exchanger to convert to MoMo/Orange Money. Payoneer charges around 2% for currency conversion.",
  },
  {
    q: "What about PayPal and Wise — do they work in Cameroon?",
    a: "PayPal allows you to receive payments but does NOT support direct withdrawal to Cameroon banks, making cashout very difficult and expensive. Wise (TransferWise) has limited functionality in Cameroon and is not a reliable primary option. We recommend MTN MoMo, Orange Money, Crypto P2P, or direct bank transfers instead.",
  },
];

// FAQ Schema for structured data (JSON-LD)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function PaymentGuidesPage() {
  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-5 h-5 text-accent" />
            <span className="badge bg-accent/15 text-accent">PAYMENT HUB</span>
          </div>
          <h1 className="text-xl font-bold text-text mt-2">
            How to Get Paid Online from Cameroon
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Complete guides to receive international payments in Cameroon. MTN
            MoMo, Orange Money, Crypto P2P, Bank Transfer — every method
            explained step by step with real FCFA fees.
          </p>
        </div>

        {/* Cameroon-specific notice */}
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-[13px] font-semibold text-accent mb-1">
                Important for Cameroon
              </h2>
              <p className="text-[12px] text-text-dim leading-relaxed">
                PayPal does NOT support direct withdrawal to Cameroon banks.
                Wise (TransferWise) has limited functionality here. The 4
                methods below are what actually work reliably for Cameroonian
                freelancers and entrepreneurs in 2026. All fees are shown in
                XAF (FCFA).
              </p>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-text">
              Quick Comparison — Payment Methods That Work in Cameroon
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-border text-text-dim">
                  <th className="text-left px-4 py-2.5 font-medium">Method</th>
                  <th className="text-left px-4 py-2.5 font-medium">Fees</th>
                  <th className="text-left px-4 py-2.5 font-medium">Speed</th>
                  <th className="text-left px-4 py-2.5 font-medium">
                    Needs Bank?
                  </th>
                  <th className="text-left px-4 py-2.5 font-medium">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    method: "MTN MoMo",
                    fees: "2-4%",
                    speed: "1-3 days",
                    bank: "No",
                    best: "Most popular, easy cashout",
                  },
                  {
                    method: "Orange Money",
                    fees: "2-4%",
                    speed: "1-3 days",
                    bank: "No",
                    best: "Alternative to MoMo",
                  },
                  {
                    method: "Crypto P2P (Binance)",
                    fees: "0-1%",
                    speed: "15 min",
                    bank: "No",
                    best: "Fastest, cheapest fees",
                  },
                  {
                    method: "Bank Wire Transfer",
                    fees: "3-5%",
                    speed: "3-7 days",
                    bank: "Yes",
                    best: "Large amounts, paper trail",
                  },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-bg-hover transition-colors">
                    <td className="px-4 py-2.5 font-medium text-text">
                      {r.method}
                    </td>
                    <td className="px-4 py-2.5 text-success font-medium">
                      {r.fees}
                    </td>
                    <td className="px-4 py-2.5 text-text-muted">{r.speed}</td>
                    <td className="px-4 py-2.5">
                      {r.bank === "No" ? (
                        <span className="text-success">No</span>
                      ) : (
                        <span className="text-accent">Yes</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-text-muted">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guide Cards */}
        <div className="space-y-4">
          {guides.map((guide, i) => {
            const Icon = guide.icon;
            return (
              <div
                key={guide.id}
                id={guide.id}
                className="rounded-xl border border-border bg-bg-surface overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-[15px] font-bold text-text">
                          {guide.title}
                        </h2>
                        {guide.tag && (
                          <span className="badge bg-accent/15 text-accent">
                            {guide.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-text-dim mt-1 leading-relaxed">
                        {guide.description}
                      </p>

                      <div className="flex items-center gap-4 mt-2 flex-wrap">
                        <span className="flex items-center gap-1 text-[11px] text-text-dim">
                          <Clock className="w-3 h-3" /> {guide.time}
                        </span>
                        <span
                          className={`text-[11px] font-medium ${
                            guide.difficulty === "Easy"
                              ? "text-success"
                              : "text-accent"
                          }`}
                        >
                          {guide.difficulty}
                        </span>
                        <span className="text-[11px] text-success font-medium">
                          Fees: {guide.fees}
                        </span>
                        <span className="text-[11px] text-text-dim">
                          Speed: {guide.speed}
                        </span>
                      </div>

                      {/* Steps */}
                      <div className="mt-4 space-y-2">
                        <h3 className="text-[12px] font-semibold text-text-muted uppercase tracking-wide">
                          Step-by-Step Guide
                        </h3>
                        {guide.steps.map((step, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {j + 1}
                            </span>
                            <span className="text-[12px] text-text-muted leading-relaxed">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pros & Cons */}
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h3 className="text-[11px] font-semibold text-success mb-1.5">
                            Pros
                          </h3>
                          {guide.pros.map((pro, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-1.5 mb-1"
                            >
                              <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                              <span className="text-[11px] text-text-dim">
                                {pro}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h3 className="text-[11px] font-semibold text-error mb-1.5">
                            Cons
                          </h3>
                          {guide.cons.map((con, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-1.5 mb-1"
                            >
                              <AlertTriangle className="w-3 h-3 text-error flex-shrink-0" />
                              <span className="text-[11px] text-text-dim">
                                {con}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cameroon Tips */}
                      {guide.tips && guide.tips.length > 0 && (
                        <div className="mt-4 rounded-lg bg-accent/5 border border-accent/20 p-3">
                          <h3 className="text-[11px] font-semibold text-accent mb-2 uppercase tracking-wide">
                            Cameroon Tips
                          </h3>
                          {guide.tips.map((tip, j) => (
                            <div
                              key={j}
                              className="flex items-start gap-1.5 mb-1.5 last:mb-0"
                            >
                              <Shield className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-[11px] text-text-dim leading-relaxed">
                                {tip}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-text">
              Frequently Asked Questions — Payments in Cameroon
            </h2>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4">
                <h3 className="text-[13px] font-semibold text-text mb-1.5">
                  {faq.q}
                </h3>
                <p className="text-[12px] text-text-dim leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-center">
          <p className="text-[13px] font-semibold text-text mb-1">
            Need help choosing a payment method?
          </p>
          <p className="text-[12px] text-text-dim">
            Join our community to ask questions and get recommendations from
            other Cameroonian freelancers who use these methods daily.
          </p>
        </div>
      </div>
    </>
  );
}
