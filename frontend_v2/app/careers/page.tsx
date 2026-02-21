import Container from "@/components/shared/Container";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Careers | MEDVOXA",
  description:
    "Join MEDVOXA to build structured, deterministic systems for healthcare revenue integrity and governance-driven operational architecture.",
  canonical: "https://medvoxa.com/careers",
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Careers", url: "https://medvoxa.com/careers" }
  ])
});

export default function CareersPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[50vh]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#141936] to-[#2E2A63]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]" />

        <Container className="relative pt-20 pb-10 max-w-3xl">

          <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[1.22] tracking-[-0.005em]">
            Build Structured Systems That Matter
          </h1>

          <p className="mt-4 text-[0.98rem] text-slate-300/85 leading-[1.7]">
            MEDVOXA is building deterministic infrastructure for healthcare
            revenue integrity. We welcome engineers, designers, healthcare
            professionals, and operators who value precision and ownership.
          </p>

        </Container>
      </section>

      {/* WHY JOIN */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141936] via-[#0F1529] to-[#0B1124]" />

        <Container className="relative grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-3">
              Real Operational Impact
            </h3>
            <p className="text-sm text-slate-300/85 leading-[1.7]">
              Your work influences healthcare organizations operating in
              regulated environments with measurable financial consequences.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-3">
              Engineering Discipline
            </h3>
            <p className="text-sm text-slate-300/85 leading-[1.7]">
              We value structured thinking, deterministic architecture,
              and forward-only operational design.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-3">
              Ownership Culture
            </h3>
            <p className="text-sm text-slate-300/85 leading-[1.7]">
              We prioritize initiative, clarity, and craftsmanship over
              titles and hierarchy.
            </p>
          </div>

        </Container>
      </section>

      {/* EARLY TALENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative max-w-3xl">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
            Early Career & Internship Pathways
          </h2>

          <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
            We welcome early-career contributors across engineering,
            AI, design, operations, and healthcare domains. Curiosity,
            accountability, and discipline matter more than pedigree.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-300/85 leading-[1.7]">
            <li>• Direct exposure to production systems</li>
            <li>• Mentorship within structured architecture design</li>
            <li>• Real product ownership</li>
            <li>• Remote-friendly collaboration</li>
            <li>• Growth pathways into full-time roles</li>
          </ul>

        </Container>
      </section>

      {/* GLOBAL CONTRIBUTORS */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative max-w-3xl">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
            Global Contributors Welcome
          </h2>

          <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
            MEDVOXA values builders from diverse backgrounds. We prioritize
            demonstrated capability, structured thinking, and execution
            discipline over formal credentials.
          </p>

        </Container>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative text-center max-w-2xl">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em] mb-4">
            Connect With Us
          </h2>

          <p className="text-sm text-slate-300/85 leading-[1.7] mb-6">
            Share your resume, portfolio, GitHub, or professional profile.
            We review every structured application thoughtfully.
          </p>

          <a
            href="mailto:hello@medvoxa.com"
            className="border border-white/20 px-6 py-2.5 rounded-md text-sm hover:bg-white/10 transition"
          >
            hello@medvoxa.com
          </a>

        </Container>
      </section>

    </div>
  );
}