// app/solutions/intelligent-claims/page.tsx

import { buildSEO, schemaBreadcrumb, schemaProduct } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Intelligent Claims Engine — Real-Time Claim Optimization",
  description:
    "Discover MEDVOXA’s Intelligent Claims Engine. Real-time validation, automated corrections, provider-specific accuracy, and end-to-end claim optimization designed for higher first-pass acceptance.",
  canonical: "https://medvoxa.com/solutions/intelligent-claims",
  keywords: [
    "intelligent claims engine",
    "claim validation software",
    "medical billing automation",
    "claim correction engine",
    "payer rules engine",
    "clean claim submission",
    "ai claims optimization"
  ],
  schema: schemaProduct(
    "MEDVOXA Intelligent Claims Engine",
    "AI-driven real-time claim validation, pre-submission correction, and provider-specific accuracy algorithms for healthcare."
  ),
});

export default function IntelligentClaimsPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Intelligent Claims Engine
          </h1>

          <p className="mt-6 text-neutral-700 text-lg max-w-2xl">
            A next-gen claim engine engineered to maximize first-pass success,
            automate corrections, and deliver compliant, provider-specific claims.
          </p>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-12">

          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Real-Time Claim Validation
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Every claim is analyzed instantly against payer logic, compliance
              requirements, and structured medical rules.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Automated Error Detection
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Incorrect codes, missing documentation, and invalid claim elements
              are flagged before submission — ensuring clean claims.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Provider-Centered Accuracy
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Behavior-based accuracy improves claim performance by aligning
              correction logic with each provider’s historical success patterns.
            </p>
          </div>

        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
            Claim Intelligence That Works For You
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left */}
            <div>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                Traditional claims processing relies heavily on human effort,
                rigid rules, and slow correction cycles. MEDVOXA replaces this
                with adaptive intelligence that ensures cleaner, faster, and more
                compliant claim workflows.
              </p>

              <ul className="space-y-4 text-neutral-700">
                <li>• Higher clean claim submission rate</li>
                <li>• Provider-specific correction intelligence</li>
                <li>• Pre-submission error elimination</li>
                <li>• Payer-ready structured claims</li>
                <li>• Reduced back-and-forth cycles</li>
              </ul>
            </div>

            {/* Right */}
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Engine Capabilities
              </h3>

              <ul className="space-y-3 text-neutral-700">
                <li>• Real-time claim scoring</li>
                <li>• Automated code validation</li>
                <li>• Documentation dependency checks</li>
                <li>• Missing element detection</li>
                <li>• Provider-centric audit logic</li>
                <li>• Structured correction recommendations</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Build Stronger Claims With Intelligent Automation
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-8">
          Improve your first-pass success rate with a claims engine built for
          precision and provider outcomes.
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
