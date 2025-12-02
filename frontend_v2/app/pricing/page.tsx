// app/pricing/page.tsx
// NOTE: removed "use client" so metadata export is allowed (server component)

import Link from "next/link";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Pricing — MEDVOXA: Simple, Transparent RCM Pricing",
  description:
    "Simple, transparent pricing for MEDVOXA's AI medical billing and RCM automation platform — SaaS plans, hybrid AR services, and unlimited AR packages.",
  canonical: "https://medvoxa.com/pricing",
  keywords: [
    "medvoxa pricing",
    "rcm pricing",
    "ai medical billing pricing",
    "rcm services pricing",
    "healthcare billing pricing"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Pricing", url: "https://medvoxa.com/pricing" }
  ])
});

/* ----------------------------
   Inline SVGs to replace broken images
   ---------------------------- */
const MetricIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="8" width="4" height="13" rx="1" fill="#3E2F22" opacity="0.12" />
    <rect x="10" y="3" width="4" height="18" rx="1" fill="#3E2F22" opacity="0.18" />
    <rect x="17" y="12" width="4" height="9" rx="1" fill="#3E2F22" opacity="0.22" />
  </svg>
);

const AgenticAIIllustration = () => (
  <svg width="360" height="160" viewBox="0 0 360 160" fill="none" aria-hidden>
    <rect x="8" y="8" width="344" height="144" rx="12" fill="#F8F6F4" stroke="#E9E6E4" />
    <g transform="translate(16,18)">
      <rect x="0" y="0" width="80" height="40" rx="6" fill="#fff" stroke="#E5E5E5" />
      <rect x="96" y="0" width="80" height="40" rx="6" fill="#fff" stroke="#E5E5E5" />
      <rect x="192" y="0" width="80" height="40" rx="6" fill="#fff" stroke="#E5E5E5" />
      <path d="M40 52 L160 52" stroke="#D8D2CF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="70" r="10" fill="#3E2F22" opacity="0.12" />
      <circle cx="120" cy="70" r="10" fill="#3E2F22" opacity="0.18" />
      <circle cx="200" cy="70" r="10" fill="#3E2F22" opacity="0.22" />
      <text x="8" y="120" fontSize="12" fill="#6B6B6B">Agentic AI: Observe → Analyze → Recommend → Act</text>
    </g>
  </svg>
);

/* ----------------------------
   Components (tight spacing)
   ---------------------------- */
function PriceCard({ title, price, features, highlight = false }: { title: string; price: string; features: string[]; highlight?: boolean; }) {
  return (
    <div
      className={`rounded-2xl p-5 border shadow-sm flex flex-col justify-between ${
        highlight ? "bg-gray-50 shadow-md border-[#3E2F22]/20" : "bg-white"
      }`}
    >
      <div>
        <h3 className="text-xl font-semibold text-[#3E2F22] mb-1">{title}</h3>
        <p className="text-gray-700 mb-3">{price}</p>

        <ul className="space-y-1 text-gray-700 text-sm mb-4">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-3 block text-center bg-[#3E2F22] text-white py-2 rounded-xl text-sm hover:bg-[#2E241A]"
      >
        Get Started
      </Link>
    </div>
  );
}

function UnlimitedCard({ title, price, features }: { title: string; price: string; features: string[]; }) {
  return (
    <div className="rounded-2xl p-5 bg-gray-50 shadow-md border border-[#3E2F22]/10 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-[#3E2F22] mb-1">{title}</h3>
        <p className="text-gray-700 mb-3">{price}</p>

        <ul className="space-y-1 text-gray-700 text-sm mb-4">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-3 block text-center bg-[#3E2F22] text-white py-2 rounded-xl text-sm hover:bg-[#2E241A]"
      >
        Choose Plan
      </Link>
    </div>
  );
}

function MetricCard({ number, label }: { number: string; label: string; }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border text-center">
      <div className="mx-auto mb-3 w-12 h-12">{/* inline icon */}
        <MetricIcon />
      </div>
      <div className="text-xl font-bold text-[#3E2F22]">{number}</div>
      <div className="text-gray-600 text-sm mt-1">{label}</div>
    </div>
  );
}

function Workflow({ title, desc }: { title: string; desc: string; }) {
  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm text-left">
      <h3 className="text-lg font-semibold text-[#3E2F22] mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

/* ----------------------------
   Main Page (tight spacing)
   ---------------------------- */
export default function PricingPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#3E2F22]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your workflow — from pure SaaS to fully managed AR operations.
        </p>
      </section>

      {/* SaaS PLANS */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3E2F22]">
          SaaS Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard
            title="Starter"
            price="$499 / month"
            features={[
              "Unlimited claims",
              "AI-assisted scrubber",
              "Eligibility check",
              "CMS-1500 generator",
              "Basic rules engine",
            ]}
            highlight={false}
          />

          <PriceCard
            title="Professional"
            price="$999 / month"
            features={[
              "Everything in Starter",
              "Advanced NCCI + LCD/NCD",
              "Denial repair suggestions",
              "ERA auto-matching",
              "Priority support",
            ]}
            highlight={true}
          />

          <PriceCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited users",
              "Custom payer rules",
              "API access",
              "Dedicated onboarding",
              "SLA-backed uptime",
            ]}
            highlight={false}
          />
        </div>
      </section>

      {/* HYBRID RCM SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#3E2F22]">
          Hybrid: SaaS + AR Support
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard
            title="AR Follow-Up"
            price="$12 / hour"
            features={["Insurance + patient AR", "Aging bucket recovery", "Weekly reporting"]}
          />
          <PriceCard
            title="Denial Management"
            price="$14 / hour"
            features={["CARC/RARC analysis", "Fix + resubmit workflow", "Appeal support"]}
          />
          <PriceCard
            title="Payment Posting"
            price="$10 / hour"
            features={["ERA/EOB posting", "Reconciliation", "Ledger QA"]}
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-lg font-semibold mb-3">Full RCM: 4.5% of Collections</p>
          <Link
            href="/contact"
            className="inline-block bg-[#3E2F22] text-white px-6 py-2 rounded-xl hover:bg-[#2E241A]"
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>

      {/* UNLIMITED AR PACKAGES */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#3E2F22]">
          Unlimited AR Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <UnlimitedCard
            title="Unlimited AR"
            price="$2,888 / month"
            features={["Unlimited follow-ups", "Unlimited portal work", "Dedicated AR specialist"]}
          />

          <UnlimitedCard
            title="AR + Denials"
            price="$3,788 / month"
            features={["AR follow-up", "Denial repair", "Appeal filing"]}
          />

          <UnlimitedCard
            title="Full RCM"
            price="$4,688 / month"
            features={["AR + Denials", "Payment posting", "RCM concierge"]}
          />
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#3E2F22]">
            Performance That Matters
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <MetricCard number="97%" label="Clean Claim Rate" />
            <MetricCard number="12–18%" label="AR Reduction" />
            <MetricCard number="50–60%" label="Denial Prevention" />
            <MetricCard number="3–5 Days" label="Faster Payments" />
          </div>
        </div>
      </section>

      {/* AGENTIC AI WORKFLOW */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#3E2F22]">
          Agentic AI Workflow
        </h2>

        <div className="flex justify-center mb-6">
          <div className="w-[360px] h-[160px]">
            <AgenticAIIllustration />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Workflow title="Observe" desc="Reads claim + payer + specialty" />
          <Workflow title="Analyze" desc="Detects missing data + conflicts" />
          <Workflow title="Recommend" desc="Suggests corrections & ICD alignment" />
          <Workflow title="Act" desc="Generates CMS-1500 / appeal packet" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3E2F22] mb-2">
          Ready to Modernize Your RCM?
        </h2>
        <p className="text-gray-600 mb-4">Start your transformation today.</p>

        <Link
          href="/contact"
          className="inline-block bg-[#3E2F22] text-white px-6 py-2 rounded-xl text-base hover:bg-[#2E241A]"
        >
          Start Free Trial
        </Link>
      </section>
    </div>
  );
}
