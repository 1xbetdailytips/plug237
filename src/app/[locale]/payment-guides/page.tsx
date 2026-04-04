import type { Metadata } from "next";
import {
  ArrowRight,
  Smartphone,
  CreditCard,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Guides — How to Get Paid Online from Cameroon",
  description:
    "Complete guides to receive international payments in Cameroon. MTN MoMo cashout, PayPal, Payoneer, Wise, crypto — step by step.",
};

const guides = [
  {
    title: "MTN MoMo: Receive International Payments",
    description:
      "The most popular method. Learn how to convert your freelancing earnings to MTN Mobile Money through Payoneer, Wise, or P2P exchange.",
    icon: Smartphone,
    difficulty: "Easy",
    time: "10 min read",
    status: "available",
    tag: "MOST POPULAR",
    steps: [
      "Set up a Payoneer or Wise account linked to your freelance platform",
      "Withdraw earnings to your Payoneer/Wise balance",
      "Use a trusted local exchanger to convert USD to FCFA on MoMo",
      "Alternatively, use Wise direct bank transfer + bank-to-MoMo",
    ],
    fees: "2-4% total (platform + exchange)",
    speed: "1-3 business days",
    pros: ["Widely accepted", "Instant MoMo credit after exchange", "No bank account needed"],
    cons: ["Depends on local exchangers", "Exchange rate varies", "Daily MoMo limits apply"],
  },
  {
    title: "Payoneer Setup for Cameroonians",
    description:
      "Payoneer is the bridge between freelancing platforms and your local money. Works with Fiverr, Upwork, Freelancer, and 200+ platforms.",
    icon: CreditCard,
    difficulty: "Easy",
    time: "12 min read",
    status: "available",
    tag: "ESSENTIAL",
    steps: [
      "Go to payoneer.com and create a free account",
      "Verify your identity with a Cameroon ID card or passport",
      "Wait 2-3 days for account approval",
      "Link Payoneer to your freelancing platform as withdrawal method",
      "Withdraw to local bank account or use Payoneer card",
    ],
    fees: "2% currency conversion + $1.50 withdrawal",
    speed: "2-5 business days",
    pros: ["Free to create", "Accepted by most platforms", "Virtual USD account"],
    cons: ["No direct MoMo integration", "Bank transfer required for cashout", "ID verification can be slow"],
  },
  {
    title: "PayPal in Cameroon — What Actually Works",
    description:
      "PayPal works in Cameroon for receiving payments, but withdrawing is the challenge. Here's exactly what works and what doesn't.",
    icon: Globe,
    difficulty: "Medium",
    time: "8 min read",
    status: "available",
    tag: "IMPORTANT",
    steps: [
      "Create a PayPal account with your Cameroon address",
      "You CAN receive payments from clients worldwide",
      "You CANNOT withdraw directly to a Cameroon bank account",
      "Workaround 1: Use a trusted P2P exchanger (PayPal → MoMo)",
      "Workaround 2: Link a Wise borderless account to PayPal",
      "Workaround 3: Use Payoneer as intermediary",
    ],
    fees: "3.5-5% (PayPal fee + exchange spread)",
    speed: "Instant receive, 1-3 days withdrawal",
    pros: ["Most clients know PayPal", "Instant receive", "Buyer protection"],
    cons: ["Cannot withdraw to CM banks directly", "Higher fees", "Account limitations possible"],
  },
  {
    title: "Wise (TransferWise) Account from Cameroon",
    description:
      "Wise offers the best exchange rates and lowest fees. Get a multi-currency account with virtual USD, EUR, and GBP details.",
    icon: Shield,
    difficulty: "Easy",
    time: "10 min read",
    status: "available",
    tag: null,
    steps: [
      "Visit wise.com and sign up with your email",
      "Verify identity with Cameroon passport or ID",
      "Get your USD account details (routing + account number)",
      "Share these details with clients for direct bank transfer",
      "Withdraw to a Cameroon bank account (BICEC, Afriland, etc.)",
    ],
    fees: "0.5-1.5% (best rates available)",
    speed: "1-2 business days",
    pros: ["Lowest fees", "Real exchange rate", "Multi-currency accounts"],
    cons: ["Needs a Cameroon bank account for withdrawal", "Not all freelance platforms support Wise directly"],
  },
  {
    title: "Crypto-to-MoMo: Receive USDT/USDC Payments",
    description:
      "Growing fast among Cameroonian freelancers. Get paid in stablecoins and convert to MoMo instantly via P2P exchanges.",
    icon: Zap,
    difficulty: "Medium",
    time: "15 min read",
    status: "available",
    tag: "GROWING FAST",
    steps: [
      "Create a Binance account and complete KYC verification",
      "Share your USDT (TRC-20) wallet address with clients",
      "Receive USDT directly to your Binance wallet",
      "Go to Binance P2P → Sell USDT → Select MoMo payment",
      "Choose a verified buyer with good completion rate",
      "Receive FCFA directly to your MTN MoMo or Orange Money",
    ],
    fees: "0-1% (P2P has no Binance fees, small spread)",
    speed: "15-30 minutes (near instant)",
    pros: ["Near-instant settlement", "No bank needed", "Very low fees", "24/7 available"],
    cons: ["Crypto volatility if you hold", "Need to learn P2P trading", "Scam risk with unverified buyers"],
  },
  {
    title: "Orange Money: Alternative Mobile Payment",
    description:
      "If you prefer Orange Money over MTN MoMo, here's how to receive your freelancing income on Orange Money.",
    icon: Smartphone,
    difficulty: "Easy",
    time: "8 min read",
    status: "available",
    tag: null,
    steps: [
      "All methods that work with MTN MoMo also work with Orange Money",
      "On Binance P2P, select Orange Money as payment method",
      "For P2P exchangers, specify Orange Money instead of MoMo",
      "Bank transfer from Wise/Payoneer → bank account → Orange Money",
      "Interoperability: You can receive from MoMo to Orange via transfer",
    ],
    fees: "Same as MoMo methods (2-4%)",
    speed: "Same as MoMo methods",
    pros: ["Same accessibility as MoMo", "Interoperable with MoMo", "Growing network"],
    cons: ["Smaller market share than MoMo", "Fewer P2P exchangers available"],
  },
];

const faqs = [
  {
    q: "What's the best way to receive money from freelancing in Cameroon?",
    a: "For most people, Payoneer + local exchanger to MoMo is the most reliable. For lowest fees, Wise to bank account. For speed, crypto P2P to MoMo is fastest (15 min).",
  },
  {
    q: "Can I use PayPal in Cameroon?",
    a: "You can RECEIVE payments via PayPal, but you CANNOT withdraw directly to a Cameroon bank. You need a workaround like P2P exchange or linking to Wise/Payoneer.",
  },
  {
    q: "What are the daily limits on MTN MoMo?",
    a: "Standard MoMo accounts have daily limits around 500,000-1,000,000 FCFA. For higher limits, visit an MTN service center to upgrade your account.",
  },
  {
    q: "Is receiving crypto payments legal in Cameroon?",
    a: "Crypto is not regulated (neither legal nor illegal) in Cameroon. Many freelancers use it for payments. Use reputable exchanges like Binance P2P and keep records.",
  },
];

export default function PaymentGuidesPage() {
  return (
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
          Complete guides to receive international payments. MTN MoMo, PayPal,
          Payoneer, Wise, crypto — every method explained step by step.
        </p>
      </div>

      {/* Quick comparison */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-text">Quick Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-border text-text-dim">
                <th className="text-left px-4 py-2.5 font-medium">Method</th>
                <th className="text-left px-4 py-2.5 font-medium">Fees</th>
                <th className="text-left px-4 py-2.5 font-medium">Speed</th>
                <th className="text-left px-4 py-2.5 font-medium">Needs Bank?</th>
                <th className="text-left px-4 py-2.5 font-medium">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { method: "Crypto P2P → MoMo", fees: "0-1%", speed: "15 min", bank: "No", best: "Speed, lowest fees" },
                { method: "Wise → Bank", fees: "0.5-1.5%", speed: "1-2 days", bank: "Yes", best: "Best exchange rate" },
                { method: "Payoneer → Exchanger", fees: "2-4%", speed: "1-3 days", bank: "No", best: "Platform compatibility" },
                { method: "PayPal → P2P", fees: "3.5-5%", speed: "Instant + 1 day", bank: "No", best: "Client familiarity" },
              ].map((r, i) => (
                <tr key={i} className="hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-2.5 font-medium text-text">{r.method}</td>
                  <td className="px-4 py-2.5 text-success font-medium">{r.fees}</td>
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
              key={i}
              className="rounded-xl border border-border bg-bg-surface overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[15px] font-bold text-text">
                        {guide.title}
                      </h3>
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
                      <span className={`text-[11px] font-medium ${
                        guide.difficulty === "Easy" ? "text-success" : "text-accent"
                      }`}>
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
                      <h4 className="text-[12px] font-semibold text-text-muted uppercase tracking-wide">
                        Steps
                      </h4>
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
                        <h4 className="text-[11px] font-semibold text-success mb-1.5">
                          Pros
                        </h4>
                        {guide.pros.map((pro, j) => (
                          <div key={j} className="flex items-center gap-1.5 mb-1">
                            <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                            <span className="text-[11px] text-text-dim">{pro}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-semibold text-error mb-1.5">
                          Cons
                        </h4>
                        {guide.cons.map((con, j) => (
                          <div key={j} className="flex items-center gap-1.5 mb-1">
                            <AlertTriangle className="w-3 h-3 text-error flex-shrink-0" />
                            <span className="text-[11px] text-text-dim">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
            Frequently Asked Questions
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
    </div>
  );
}
