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

      {/* HERO — CLEAN & COMPACT */}
      <section className="pt-14 pb-8 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1D1A18] leading-snug">
            Built for Healthcare Providers
          </h1>

          <p className="mt-3 text-neutral-700 text-base max-w-2xl leading-relaxed">
            Reduce administrative burden, increase revenue accuracy, and deliver cleaner claims with
            AI-driven RCM automation designed for modern clinical practices.
          </p>
        </div>
      </section>

      {/* PROVIDER PAIN POINTS */}
      <section className="py-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#1D1A18] mb-4">
            What Providers Struggle With
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-4 bg-white border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1D1A18] mb-1">Administrative Overload</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Manual coding, documentation review, and claim preparation reduce clinical and
                operational efficiency.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1D1A18] mb-1">High Denial Rates</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Constantly changing payer rules result in preventable denials and delayed revenue.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1D1A18] mb-1">Compliance Complexity</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ensuring claims remain accurate and compliant across specialties and payers is 
                difficult without automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVIDER BENEFITS */}
      <section className="py-6 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-2 gap-6">
          
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1D1A18] mb-3">
              How MEDVOXA Helps Providers
            </h2>

            <p className="text-neutral-700 text-base leading-relaxed mb-4">
              MEDVOXA simplifies and automates the revenue cycle so providers can focus on patient
              care while maintaining financial stability and compliance.
            </p>

            <ul className="space-y-2 text-neutral-700 text-sm leading-relaxed">
              <li>• Automated coding, charge capture, and claim workflows</li>
              <li>• Cleaner submissions with fewer corrections</li>
              <li>• Real-time eligibility and validation checks</li>
              <li>• Lower denial rates and faster reimbursement cycles</li>
              <li>• Complete financial transparency and performance metrics</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold text-[#1D1A18] mb-2">
              Designed for All Provider Types
            </h3>

            <ul className="space-y-1.5 text-neutral-700 text-sm leading-relaxed">
              <li>• Clinics & Group Practices</li>
              <li>• Independent Providers</li>
              <li>• Specialty Practices</li>
              <li>• Multi-location Networks</li>
              <li>• Telehealth Providers</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA — LIGHT CLEAN STYLE (OPTION A) */}
      <section className="py-8 bg-[#FAF9F7] border-t border-neutral-200 text-center">
        <h2 className="text-2xl font-semibold text-[#1D1A18] mb-2">
          Empower Your Practice With AI-Driven RCM
        </h2>

        <p className="max-w-xl mx-auto text-sm text-[#534940] leading-relaxed mb-4">
          Providers deserve accuracy, speed, and clarity — MEDVOXA delivers all three with modern automation.
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-brand-primary text-white rounded-lg font-medium text-sm"
        >
          Book a Demo
        </a>
      </section>

    </div>
  );
}
