import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Company | MEDVOXA",
  description:
    "MEDVOXA is a structured revenue cycle platform focused on deterministic validation, governance enforcement, and forward-only operational integrity for healthcare organizations.",
  canonical: "https://medvoxa.com/company",
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Company", url: "https://medvoxa.com/company" }
  ])
});

export default function CompanyPage(): JSX.Element {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[50vh]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#141936] to-[#2E2A63]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]" />

        <Container className="relative pt-20 pb-10 max-w-3xl">

          <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[1.22] tracking-[-0.005em]">
            Structured Systems for Revenue Integrity
          </h1>

          <p className="mt-4 text-[0.98rem] text-slate-300/85 leading-[1.7]">
            MEDVOXA was founded to introduce deterministic architecture,
            governance discipline, and forward-only operational integrity
            into healthcare revenue cycle management.
          </p>

        </Container>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141936] via-[#0F1529] to-[#0B1124]" />

        <Container className="relative grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
              Our Philosophy
            </h2>

            <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
              Revenue cycle management should operate as a structured
              system — not a reactive workflow. MEDVOXA separates intake,
              validation, governance, and submission into disciplined layers
              to ensure clarity and accountability.
            </p>

            <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
              Every decision within the platform is traceable. Every claim
              follows a forward-only lifecycle. No mutation. No ambiguity.
              No uncontrolled submission exposure.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-3">
              Operational Principles
            </h3>

            <ul className="space-y-2 text-sm text-slate-300/85 leading-[1.7]">
              <li>• Deterministic evaluation before submission</li>
              <li>• Governance enforcement at every structural layer</li>
              <li>• Audit-traceable lifecycle control</li>
              <li>• Forward-only claim progression</li>
              <li>• Measurable performance accountability</li>
            </ul>
          </div>

        </Container>
      </section>

      {/* ARCHITECTURAL VISION */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative max-w-3xl">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
            Architectural Vision
          </h2>

          <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
            The MEDVOXA platform is built on layered system design —
            separating claim intake, rule evaluation, governance logic,
            submission control, and post-outcome intelligence.
          </p>

          <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
            This structure ensures operational stability, regulatory
            discipline, and scalable performance across provider networks,
            specialty groups, and enterprise healthcare organizations.
          </p>

        </Container>
      </section>

    </div>
  );
}