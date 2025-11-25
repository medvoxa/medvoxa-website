// app/solutions/rcm-automation/page.tsx

import { buildSEO, schemaBreadcrumb, schemaProduct } from "@/lib/seo";

export const metadata = buildSEO({
  title: "RCM Automation — End-to-End AI-Powered Revenue Cycle Automation",
  description:
    "Experience AI-driven RCM automation with MEDVOXA. Automate coding, charge creation, eligibility, claim preparation, and reimbursement workflows with accuracy and speed.",
  canonical: "https://medvoxa.com/solutions/rcm-automation",
  keywords: [
    "rcm automation",
    "ai medical billing automation",
    "revenue cycle automation",
    "automated claim preparation",
    "automated coding support",
    "clean claim submission",
    "healthcare billing automation"
  ],
  schema: schemaProduct(
    "MEDVOXA RCM Automation",
    "AI-powered revenue cycle automation for healthcare providers, covering coding, charge creation, eligibility checks, and claim workflows."
  ),
});

export default function RCMAutomationPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            RCM Automation
          </h1>

          <p className="mt-6 text-neutral-700 text-lg max-w-2xl">
            Automate your end-to-end revenue cycle with AI-powered workflows
            engineered for accuracy, compliance, and provider efficiency.
          </p>
        </div>
      </section>

      {/* SECTION: FEATURES */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-12">

          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Intelligent Coding Support
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Assist providers with accurate coding recommendations based on
              clinical documentation, payer rules, and historical behavior.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Automated Claim Preparation
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Reduce manual work with automated charge creation, eligibility
              checks, and clean claim assembly for faster submission.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Compliance-Ready Workflows
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Ensure every claim meets regulatory, documentation, and payer
              requirements before moving downstream.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: VALUE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
            Why Automation Matters
          </h2>

        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left */}
            <div>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                Providers face increasing administrative burdens, complex payer
                requirements, and shrinking margins. MEDVOXA helps by automating
                repetitive, error-prone tasks — so your teams can focus on care.
              </p>

              <ul className="space-y-4 text-neutral-700">
                <li>• Higher first-pass acceptance</li>
                <li>• Reduced denial volume</li>
                <li>• Improved coding accuracy</li>
                <li>• Faster reimbursement turnaround</li>
                <li>• Lower administrative overhead</li>
              </ul>
            </div>

            {/* Right */}
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Automated Coverage
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                MEDVOXA’s engine intelligently automates each step of your RCM:
              </p>

              <ul className="mt-5 space-y-3 text-neutral-700">
                <li>• Encounter → Coding</li>
                <li>• Coding → Charges</li>
                <li>• Charges → Eligibility</li>
                <li>• Eligibility → Claims</li>
                <li>• Claims → Tracking</li>
                <li>• Tracking → Payer Responses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Automate Your Entire Revenue Cycle
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-8">
          Experience faster workflows, fewer denials, and higher revenue integrity.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Book a Demo
        </a>
      </section>

    </div>
  );
}
