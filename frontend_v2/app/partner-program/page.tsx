// app/partner-program/page.tsx

import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Partner Program — MEDVOXA Strategic Alliances",
  description:
    "Join the MEDVOXA Partner Program. Designed for RCM companies, consultants, MSPs, and healthcare technology partners to expand automation capabilities.",
  canonical: "https://medvoxa.com/partner-program",
  keywords: [
    "rcm partner program",
    "healthcare automation partnerships",
    "medical billing channel partners",
    "rcm technology alliances",
    "healthcare saas partnerships",
    "medvoxa partner program"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Partner Program", url: "https://medvoxa.com/partner-program" }
  ])
});

export default function PartnerProgramPage() {
  return (
    <div className="w-full">

      {/* ================= HERO — Reduced Space ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#3E2F22] leading-tight">
            MEDVOXA Partner Program
          </h1>

          <p className="mt-4 text-neutral-700 text-lg max-w-2xl leading-relaxed">
            Partner with MEDVOXA to bring modern, AI-powered RCM automation and
            claim intelligence to healthcare providers across the industry.
          </p>
        </div>
      </section>

      {/* ================= WHY PARTNER — Compact ================= */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#3E2F22] mb-6">
            Why Partner With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-5 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-2">
                Expand Your Offering
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Add AI-powered RCM automation and claims intelligence to your
                service ecosystem with minimal integration overhead.
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-2">
                Drive Tangible Outcomes
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Help clients reduce denials, accelerate reimbursements, and
                improve financial performance with modern infrastructure.
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-2">
                Access Dedicated Support
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Receive priority onboarding, co-marketing, success assistance,
                and channel-focused product training.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PARTNER TYPES — Compact ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#3E2F22] mb-6">
            Built for High-Impact Partnerships
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-3">
                RCM Companies
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Empower your billing teams with automation, real-time claim
                intelligence, and high-volume processing capabilities.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-3">
                Consultants & Advisors
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Provide next-gen RCM strategy, performance improvement, and
                workflow transformation powered by MEDVOXA.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-3">
                Healthcare Technology Partners
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Integrate MEDVOXA into your ecosystem to unlock automation for
                your users and expand platform capabilities.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-3">
                MSPs & System Integrators
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Deliver seamless deployments, interoperability, and managed RCM
                infrastructure to providers at scale.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA — Reduced Space ================= */}
      <section className="py-12 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">
          Become a MEDVOXA Partner
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-6">
          Join a network of organizations transforming healthcare revenue with
          automation, intelligence, and provider-centric innovation.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Apply Now
        </a>
      </section>

    </div>
  );
}
