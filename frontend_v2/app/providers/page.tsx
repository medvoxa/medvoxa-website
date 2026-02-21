import Container from "@/components/shared/Container";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "For Providers | MEDVOXA",
  description:
    "Structured claim validation, governance enforcement, and deterministic preparation designed for healthcare providers operating in regulated environments.",
  canonical: "https://medvoxa.com/providers",
  keywords: [
    "provider revenue cycle",
    "healthcare claim validation",
    "deterministic rcm",
    "structured billing workflow",
    "provider governance controls"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "For Providers", url: "https://medvoxa.com/providers" }
  ])
});

export default function ProvidersPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[50vh]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#141936] to-[#2E2A63]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]" />

        <Container className="relative pt-20 pb-10">

          <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[1.22] tracking-[-0.005em] max-w-3xl">
            Built for Regulated Clinical Environments
          </h1>

          <p className="mt-4 text-[0.98rem] text-slate-300/85 leading-[1.7] max-w-xl">
            MEDVOXA supports providers with structured claim validation,
            governance enforcement, and deterministic preparation before
            submission pathways activate.
          </p>

        </Container>
      </section>

      {/* OPERATIONAL CHALLENGES */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141936] via-[#0F1529] to-[#0B1124]" />

        <Container className="relative">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em] mb-6">
            Operational Challenges Providers Face
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Administrative Overhead
              </h3>
              <p className="text-sm text-slate-300/85 leading-[1.7]">
                Manual coding reviews, structural validation gaps, and
                fragmented workflows increase operational friction.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Denial Exposure
              </h3>
              <p className="text-sm text-slate-300/85 leading-[1.7]">
                Payer logic variability and incomplete structural checks
                result in preventable rework and revenue delays.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Compliance Complexity
              </h3>
              <p className="text-sm text-slate-300/85 leading-[1.7]">
                Maintaining claim integrity across specialties and payers
                requires disciplined validation controls.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* STRUCTURED SUPPORT MODEL */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
              Structured Provider Support
            </h2>

            <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
              MEDVOXA introduces deterministic claim evaluation,
              structured rule enforcement, and audit-traceable
              preparation workflows — ensuring submission readiness
              before payer exposure.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300/85 leading-[1.7]">
              <li>• Deterministic CPT / ICD structural validation</li>
              <li>• Governance-aligned evaluation controls</li>
              <li>• Forward-only lifecycle discipline</li>
              <li>• Structured version tracking</li>
              <li>• Controlled submission activation</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-3">
              Designed for
            </h3>

            <ul className="space-y-2 text-sm text-slate-300/85 leading-[1.7]">
              <li>• Independent Practices</li>
              <li>• Multi-Location Groups</li>
              <li>• Specialty Clinics</li>
              <li>• Telehealth Providers</li>
              <li>• Integrated Care Networks</li>
            </ul>
          </div>

        </Container>
      </section>

    </div>
  );
}