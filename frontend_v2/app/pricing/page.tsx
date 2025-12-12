// app/pricing/page.tsx
import Link from "next/link";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Pricing — MEDVOXA",
  description:
    "Outcome-driven pricing for MEDVOXA’s autonomous RCM platform. Tailored to your organization, aligned with collections, and built for measurable financial improvement.",
  canonical: "https://medvoxa.com/pricing",
  keywords: [
    "medvoxa pricing",
    "rcm pricing",
    "ai billing pricing",
    "autonomous rcm pricing",
    "healthcare automation pricing"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Pricing", url: "https://medvoxa.com/pricing" }
  ])
});

/* ------------------------------------
   PRICING CARD (FIXED ALIGNMENT)
------------------------------------ */
function PricingCard({
  title,
  subtitle,
  description,
  features,
  highlight = false,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 border shadow-sm flex flex-col ${
        highlight ? "bg-gray-50 border-brand-primary/30 shadow-md" : "bg-white"
      }`}
    >
      {/* CONTENT WRAPPER WITH FLEX-1 TO MAKE HEIGHTS MATCH */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#1D1A18]">{title}</h3>

        <p className="text-sm text-brand-primary font-medium mt-1">{subtitle}</p>

        <p className="text-sm text-neutral-700 mt-2 leading-relaxed">
          {description}
        </p>

        <ul className="mt-4 space-y-1.5 text-neutral-700 text-sm leading-relaxed">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      {/* CTA CONSISTENT BRAND BUTTON */}
      <Link
        href="/contact"
        className="mt-5 inline-block bg-brand-primary text-white px-5 py-2 rounded-lg text-sm text-center"
      >
        Request Pricing
      </Link>
    </div>
  );
}

/* ------------------------------------
   MAIN PAGE
------------------------------------ */
export default function PricingPage() {
  return (
    <div className="w-full bg-white text-[#1D1A18]">

      {/* HERO */}
      <section className="pt-14 pb-6 text-center max-w-[900px] mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Pricing Designed for Financial Clarity
        </h1>

        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Outcome-driven, transparent, and aligned with your organization’s goals.
          No hidden fees. No unpredictable billing. Just measurable value delivered at every step.
        </p>
      </section>

      {/* PRICING MODELS — ROW 1 */}
      <section className="max-w-[1100px] mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">

        <PricingCard
          highlight
          title="SaaS+ Billing Engine"
          subtitle="Performance-Based Pricing"
          description="Our flagship autonomous billing engine aligns with your collections and delivers real-time accuracy, compliance, and denial prevention."
          features={[
            "Autonomous AI scrubber",
            "Payer + specialty intelligence",
            "Claim repair recommendations",
            "Compliance-grade accuracy",
            "Explainable AI insights",
          ]}
        />

        <PricingCard
          title="End-to-End RCM"
          subtitle="Custom Engagement Model"
          description="Built for organizations seeking fully managed operational and AI-enhanced RCM with measurable improvements in revenue integrity."
          features={[
            "Full billing operations",
            "AR + Denials + Appeals",
            "Automated claim workflows",
            "Dedicated specialists",
            "Enterprise reporting",
          ]}
        />

        <PricingCard
          title="A/R Recovery Program"
          subtitle="Success-Based Pricing"
          description="Pay only when we recover revenue. Ideal for denial-heavy workflows, aging buckets, and overdue claims."
          features={[
            "High-yield denial repair",
            "Targeted AR cleanup",
            "Appeal automation",
            "Payer-specific workflows",
            "Performance-linked costs",
          ]}
        />

      </section>

      {/* PRICING MODELS — ROW 2 */}
      <section className="max-w-[1100px] mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">

        <PricingCard
          title="Back-Office Support"
          subtitle="Flexible Team Extension"
          description="Scale your operational team instantly with HIPAA-compliant workflows, automated processes, and real-time analytics."
          features={[
            "Workload-based pricing",
            "On-demand resource allocation",
            "Seamless workflow integration",
            "Automation-first operations",
          ]}
        />

        <PricingCard
          title="Founding Partner Program"
          subtitle="Limited Availability"
          description="Exclusive incentives for early adopters committed to shaping the future of autonomous RCM."
          features={[
            "Preferential pricing model",
            "Input into roadmap",
            "Priority onboarding",
            "Co-development opportunities",
          ]}
        />

      </section>

      {/* METRICS */}
      <section className="bg-gray-50 py-6 border-t border-neutral-200">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Proven Revenue Outcomes
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-xl font-bold">97%</div>
              <p className="text-sm text-neutral-600">Clean Claim Rate</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-xl font-bold">12–18%</div>
              <p className="text-sm text-neutral-600">AR Reduction</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-xl font-bold">50–60%</div>
              <p className="text-sm text-neutral-600">Denials Prevented</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-xl font-bold">3–5 Days</div>
              <p className="text-sm text-neutral-600">Faster Payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — LIGHT CLEAN CTA */}
      <section className="py-8 bg-[#FAF9F7] text-center border-t border-neutral-200">
        <h2 className="text-2xl font-semibold mb-2">
          Let’s Transform Your Revenue Cycle
        </h2>

        <p className="text-sm text-neutral-600 max-w-lg mx-auto mb-4 leading-relaxed">
          Speak with our team to explore the right pricing model for your practice or organization.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-brand-primary text-white px-6 py-2 rounded-lg text-sm"
        >
          Request Pricing
        </Link>
      </section>

    </div>
  );
}
