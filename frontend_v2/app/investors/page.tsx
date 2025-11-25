import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Investors — MEDVOXA | The Future of Autonomous Healthcare RCM",
  description:
    "Invest in MEDVOXA — an AI-powered revenue cycle infrastructure built for scale, automation, and real financial outcomes. Explore market positioning, platform capabilities, and our long-term RCM innovation roadmap.",
  canonical: "https://medvoxa.com/investors",
  keywords: [
    "healthcare saas investors",
    "ai rcm startup",
    "medical billing automation platform",
    "healthcare fintech investment",
    "revenue cycle management ai",
    "rcm platform investment opportunity",
    "healthcare automation startup",
    "intelligent claims engine"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Investors", url: "https://medvoxa.com/investors" }
  ]),
});

export default function InvestorsPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Investing in the Next Generation
            <br /> of Healthcare Revenue Intelligence
          </h1>

          <p className="mt-6 text-neutral-700 text-lg max-w-2xl">
            MEDVOXA is building a scalable, AI-native RCM backbone designed to
            modernize provider operations and reshape healthcare financial performance.
          </p>
        </div>
      </section>

      {/* VALUE FOR INVESTORS */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-12">
            Why MedVoxa
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                A Transforming RCM Market
              </h3>
              <p className="text-neutral-600">
                Healthcare RCM is a $70B+ underserved market moving rapidly toward
                automation. Providers demand accuracy, transparency, and predictable revenue.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                AI-Native Claims Intelligence
              </h3>
              <p className="text-neutral-600">
                Our platform integrates rules, real-time clinical context, and
                autonomous decisioning to reduce denials and accelerate reimbursements.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Defensible Architecture
              </h3>
              <p className="text-neutral-600">
                MEDVOXA’s modular, payer-ready architecture creates strong moats through
                compliance, data-driven logic, and multi-layered infrastructure.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Provider-Centered Foundation
              </h3>
              <p className="text-neutral-600">
                Built around real provider workflows, ensuring rapid adoption, measurable
                impact, and high retention across practices of any scale.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Scalable Commercial Model
              </h3>
              <p className="text-neutral-600">
                Designed for single-practice clinics, regional networks, and enterprise
                medical groups with effortless scaling and low onboarding friction.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Long-Term Expansion Roadmap
              </h3>
              <p className="text-neutral-600">
                Expanding from claim intelligence to autonomous RCM, analytics,
                payer-aligned automation, and enterprise-grade operational AI.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MEDVOXA VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">

          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
            Vision & Strategic Outlook
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed mb-6 max-w-3xl">
            The healthcare financial ecosystem is shifting toward automation-first
            infrastructures. MEDVOXA’s mission is to lead this transition through clean
            data pipelines, payer-aligned logic, and intelligent RCM automation that improves
            both outcomes and operational reliability.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl">
            Our long-term trajectory is centered on building autonomous RCM engines,
            delivering transparency, reducing leakage, and enabling scalable revenue
            operations for practices of every size.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Connect With MEDVOXA
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-8">
          For investment engagement, strategic partnerships, or due diligence,
          we welcome conversations with aligned long-term partners.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
