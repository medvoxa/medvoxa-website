import type { Metadata } from "next";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Security & Governance | MEDVOXA",
  description:
    "Enterprise-grade data protection, structured governance controls, and audit-traceable operational architecture designed for regulated healthcare environments.",
};

export default function SecurityPage(): JSX.Element {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[50vh]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#141936] to-[#2E2A63]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]" />

        <Container className="relative pt-20 pb-10">

          <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[1.22] tracking-[-0.005em] max-w-3xl">
            Security. Governance. Operational Control.
          </h1>

          <p className="mt-4 text-[0.98rem] text-slate-300/85 leading-[1.7] max-w-xl">
            MEDVOXA is architected for regulated healthcare environments,
            delivering structured data protection, layered governance logic,
            and audit-traceable decision systems.
          </p>

        </Container>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141936] via-[#0F1529] to-[#0B1124]" />

        <Container className="relative">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Data Protection Architecture
              </h3>
              <p className="text-sm text-slate-300/85 leading-[1.7]">
                Structured encryption layers, controlled data flow separation,
                and secure processing boundaries across operational blocks.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Governance Enforcement Controls
              </h3>
              <p className="text-sm text-slate-300/85 leading-[1.7]">
                Deterministic rule execution ensuring claims follow defined
                compliance standards before submission pathways activate.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Audit-Traceable Workflow
              </h3>
              <p className="text-sm text-slate-300/85 leading-[1.7]">
                Version-controlled decision records and structured lifecycle
                tracking designed for accountability and regulatory review.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* COMPLIANCE FRAMEWORK */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[#0B1124]" />

        <Container className="relative">

          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
            Compliance-Oriented Infrastructure
          </h2>

          <p className="mt-4 text-sm text-slate-300/85 leading-[1.7] max-w-2xl">
            The platform supports operational alignment with HIPAA-ready
            security standards, structured access control policies, and
            controlled multi-tenant data isolation. Governance layers
            operate independently from submission mechanics to maintain
            forward-only claim integrity.
          </p>

        </Container>
      </section>

    </div>
  );
}