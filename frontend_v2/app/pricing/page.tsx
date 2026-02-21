import Link from "next/link";
import Container from "@/components/shared/Container";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Pricing | MEDVOXA",
  description:
    "Structured pricing models aligned with operational scale, governance requirements, and measurable revenue performance.",
  canonical: "https://medvoxa.com/pricing",
  keywords: [
    "structured rcm pricing",
    "healthcare revenue cycle pricing",
    "deterministic billing platform pricing",
    "provider billing models"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Pricing", url: "https://medvoxa.com/pricing" }
  ])
});

/* -------------------------
   GLASS PRICING CARD
-------------------------- */
function PricingCard({
  title,
  subtitle,
  description,
  features
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col">

      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold">{title}</h3>

        <p className="text-sm text-slate-300/80 mt-1">{subtitle}</p>

        <p className="text-sm text-slate-300/85 mt-3 leading-[1.7]">
          {description}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-300/85 leading-[1.7]">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-6 inline-block border border-white/20 text-sm px-5 py-2.5 rounded-md hover:bg-white/10 transition text-center"
      >
        Request Engagement
      </Link>
    </div>
  );
}

/* -------------------------
   MAIN PAGE
-------------------------- */
export default function PricingPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[50vh]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#141936] to-[#2E2A63]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]" />

        <Container className="relative pt-20 pb-10 text-center max-w-3xl">

          <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[1.22] tracking-[-0.005em]">
            Pricing Structured Around Operational Outcomes
          </h1>

          <p className="mt-4 text-[0.98rem] text-slate-300/85 leading-[1.7]">
            Engagement models aligned with organizational scale, governance
            complexity, and measurable revenue performance — without hidden
            fee structures.
          </p>

        </Container>
      </section>

      {/* PRICING MODELS */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141936] via-[#0F1529] to-[#0B1124]" />

        <Container className="relative grid md:grid-cols-3 gap-6">

          <PricingCard
            title="Structured Validation Platform"
            subtitle="Scaled SaaS Engagement"
            description="Deterministic claim validation with governance controls for organizations seeking internal operational control."
            features={[
              "CPT / ICD structural evaluation",
              "Governance rule enforcement",
              "Submission control states",
              "Audit-traceable lifecycle tracking"
            ]}
          />

          <PricingCard
            title="Managed RCM Operations"
            subtitle="Operational Partnership Model"
            description="Full-cycle revenue operations supported by structured validation, governance discipline, and measurable performance oversight."
            features={[
              "Submission workflow management",
              "Denial resolution discipline",
              "AR monitoring",
              "Performance visibility"
            ]}
          />

          <PricingCard
            title="Targeted AR & Recovery"
            subtitle="Performance-Linked Engagement"
            description="Focused recovery and structured denial remediation programs designed for high-yield backlog environments."
            features={[
              "Denial analysis framework",
              "Appeal preparation discipline",
              "Aging bucket targeting",
              "Performance-based alignment"
            ]}
          />

        </Container>
      </section>

      {/* OUTCOME METRICS */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative text-center">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em] mb-6">
            Structured Performance Indicators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="text-xl font-semibold text-white">97%</div>
              <p className="text-sm text-slate-300/85 mt-1">Clean Claim Integrity</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="text-xl font-semibold text-white">12–18%</div>
              <p className="text-sm text-slate-300/85 mt-1">AR Reduction Range</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="text-xl font-semibold text-white">50–60%</div>
              <p className="text-sm text-slate-300/85 mt-1">Denial Prevention Impact</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="text-xl font-semibold text-white">3–5 Days</div>
              <p className="text-sm text-slate-300/85 mt-1">Payment Acceleration</p>
            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}