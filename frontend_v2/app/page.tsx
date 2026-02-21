import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEDVOXA | Autonomous Revenue Intelligence",
  description:
    "Precision claim preparation and governance automation for independent healthcare practices.",
};

export default function HomePage(): JSX.Element {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden text-white min-h-[64vh] flex items-center">

        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1226] via-[#1A1F3D] to-[#3A2F6E]" />

        {/* Ambient Glow — Reduced */}
        <div className="absolute right-[-140px] top-[100px] w-[460px] h-[460px] bg-purple-600/15 rounded-full blur-[180px]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:44px_44px]" />

        <Container className="relative grid md:grid-cols-2 gap-6 items-center pt-14 pb-8">

          {/* LEFT */}
          <div className="max-w-[520px]">

            <h1 className="text-[2.4rem] md:text-[2.75rem] leading-[1.15] font-semibold tracking-[-0.015em]">
              Precision in Claim Preparation.
              <br />
              Confidence in Every Submission Decision.
            </h1>

            <div className="w-12 h-[1.5px] bg-white/25 my-4" />

            <p className="text-slate-300 text-[0.95rem] leading-[1.65]">
              MEDVOXA delivers structured validation, payer-aware governance logic,
              and audit-traceable automation before claims are submitted —
              reducing denials and improving reimbursement predictability.
            </p>

            <p className="text-slate-400 text-[0.9rem] mt-2">
              Built for independent practices and specialty providers.
            </p>

            {/* Internal Authority Links */}
            <div className="mt-5 flex gap-5 text-[0.9rem] text-slate-400">
              <Link
                href="/company"
                className="hover:text-white transition"
              >
                Governance Framework →
              </Link>

              <Link
                href="/security"
                className="hover:text-white transition"
              >
                Security Architecture →
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-3">
              <a
                href="/founding"
                className="px-5 py-2 rounded-md bg-[#4FD1C5] text-black text-[0.9rem] font-medium hover:opacity-90 transition"
              >
                Become a Founding Partner
              </a>

              <a
                href="/contact"
                className="px-5 py-2 rounded-md border border-white/20 text-[0.9rem] hover:bg-white/10 transition"
              >
                Executive Overview
              </a>
            </div>

          </div>

          {/* RIGHT — TIGHT PRODUCT STACK */}
          <div className="relative flex justify-center items-center">

            {/* Subtle Depth Glow */}
            <div className="absolute w-[420px] h-[420px] bg-purple-600/12 rounded-full blur-[160px]" />

            {/* Back Layer */}
            <img
              src="/hero-product.png"
              alt=""
              className="absolute top-5 scale-95 opacity-12 blur-sm rounded-2xl"
            />

            {/* Mid Layer */}
            <img
              src="/hero-product.png"
              alt=""
              className="absolute top-2 scale-[0.98] opacity-25 blur-[0.7px] rounded-2xl"
            />

            {/* Front Layer */}
            <div className="relative z-10">
              <img
                src="/hero-product.png"
                alt="MEDVOXA Platform Dashboard"
                className="rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/10 max-w-[520px] w-full"
              />
            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}