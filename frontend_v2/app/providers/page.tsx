// app/providers/page.tsx

import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "For Providers — AI-Powered RCM for Healthcare Practices",
  description:
    "MEDVOXA empowers healthcare providers with automated RCM workflows, real-time claim intelligence, reduced denials, faster reimbursements, and complete financial visibility.",
  canonical: "https://medvoxa.com/providers",
  keywords: [
    "rcm for providers",
    "ai healthcare providers",
    "medical billing automation",
    "provider revenue cycle management",
    "ai medical billing",
    "clean claim automation",
    "healthcare practice billing"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "For Providers", url: "https://medvoxa.com/providers" }
  ])
});

export default function ProvidersPage() {
  return (
    <div className="w-full">

      {/* ============ HERO — Reduced Space ============ */}
      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#3E2F22] leading-tight">
            Built for Healthcare Providers
          </h1>

          <p className="mt-4 text-neutral-700 text-lg max-w-2xl leading-relaxed">
            Reduce administrative burden, increase revenue integrity, and deliver
            cleaner claims with AI-driven RCM automation designed for modern practices.
          </p>
        </div>
      </section>

      {/* ============ PROVIDER PAIN POINTS — Compact ============ */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#3E2F22] mb-6">
            What Providers Struggle With
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-5 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-2">
                Administrative Overload
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Manual coding, documentation review, and claim processes drain
                provider time and reduce efficiency.
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-2">
                High Denial Rates
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Complex payer requirements lead to avoidable denials and delays
                that reduce practice revenue.
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-[#3E2F22] mb-2">
                Compliance Challenges
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ensuring every claim is clean, compliant, and properly supported
                is difficult to maintain manually.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============ PROVIDER BENEFITS — Compact ============ */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold text-[#3E2F22] mb-4">
              How MEDVOXA Helps Providers
            </h2>

            <p className="text-neutral-700 text-lg leading-relaxed mb-5">
              MEDVOXA automates and optimizes your revenue cycle so you can focus
              on patient care while maintaining financial stability.
            </p>

            <ul className="space-y-3 text-neutral-700 text-sm leading-relaxed">
              <li>• Automated coding and charge workflows</li>
              <li>• Cleaner claims with fewer corrections</li>
              <li>• Real-time eligibility and validation</li>
              <li>• Reduced denials and faster reimbursement</li>
              <li>• Complete visibility into financial performance</li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-semibold text-[#3E2F22] mb-3">
              Designed for All Provider Types
            </h3>

            <ul className="space-y-2 text-neutral-700 text-sm leading-relaxed">
              <li>• Clinics & Group Practices</li>
              <li>• Independent Providers</li>
              <li>• Specialty Practices</li>
              <li>• Multi-location Networks</li>
              <li>• Telehealth Practices</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ============ CTA — Reduced Space ============ */}
      <section className="py-12 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">
          Empower Your Practice With AI-Driven RCM
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-6">
          Providers deserve accuracy, speed, and clarity. MEDVOXA delivers all three.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Book a Demo
        </a>
      </section>

    </div>
  );
}
