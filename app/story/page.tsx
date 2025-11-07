'use client';

import StagedReveal from "@/components/StagedReveal";
import HazeOverlay from "@/components/HazeOverlay";

export default function StoryPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#EFE7E2] to-[#D9CCC4] text-[#3D2B24] overflow-hidden">
      <HazeOverlay />

      {/* HEADER SPACER */}
      <div className="h-20" />

      {/* HERO */}
      <section className="text-center px-6 relative max-w-5xl mx-auto">
        <StagedReveal>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            The System Should Fix Itself
          </h1>
        </StagedReveal>

        <StagedReveal delay={0.2}>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-[#6A5045] leading-relaxed">
            MEDVOXA began with a single observation: Revenue cycle teams spend most of their
            time correcting the same issues — again and again. The industry normalized rework.
            We did not.
          </p>
        </StagedReveal>

        <StagedReveal delay={0.35}>
          <div className="mt-8 text-sm tracking-[0.18em] uppercase font-bold text-[#4A352A]">
            — Founder, MEDVOXA
          </div>
        </StagedReveal>
      </section>

      {/* DIVIDER */}
      <div className="my-16 border-t border-[#C6B4A9] max-w-4xl mx-auto" />

      {/* CORE STORY */}
      <section className="max-w-4xl mx-auto px-6 space-y-16">

        <StagedReveal>
          <h2 className="text-2xl font-semibold">Where This Started</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            In 2024, working across multiple healthcare organizations, it became clear the core
            challenge in RCM was not intelligence — it was repetition. The system did not remember
            what it had already learned.
          </p>
        </StagedReveal>

        <StagedReveal delay={0.1}>
          <h2 className="text-2xl font-semibold">What Was Broken</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Denials resurfaced. Workflows repeated. Performance depended on the individual,
            not the infrastructure. Teams weren’t improving the system — they were maintaining it.
          </p>
        </StagedReveal>

        <StagedReveal delay={0.2}>
          <h2 className="text-2xl font-semibold">The Insight</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Every adjudication contains logic — reasoning, payer patterns, jurisdictional criteria.
            If captured and applied, rework would not need to occur again.
          </p>
        </StagedReveal>

        <StagedReveal delay={0.3}>
          <h2 className="text-2xl font-semibold">The Principle</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            A modern revenue cycle should be:
            <br/>• Self-correcting  
            <br/>• Self-improving  
            <br/>• Explainable  
            <br/>• Scalable beyond staffing constraints  
          </p>
        </StagedReveal>

        <StagedReveal delay={0.4}>
          <h2 className="text-2xl font-semibold">The Outcome</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            MEDVOXA transforms RCM from a labor-dependent workflow into an evolving system.
            One that reduces recurrence, accelerates reimbursement, and scales without
            proportional staffing.
          </p>
        </StagedReveal>

      </section>

      {/* CTA */}
      <StagedReveal delay={0.5}>
        <div className="my-20 text-center relative">
          <a
            href="mailto:hello@medvoxa.com"
            className="inline-block px-8 py-4 rounded-2xl bg-[#5A3A2E] text-white text-lg font-medium hover:bg-[#7B5243] transition"
          >
            Request a private preview
          </a>
        </div>
      </StagedReveal>

      {/* FOOTER */}
      <footer className="border-t border-[#C6B4A9] py-10 text-center text-sm text-[#6A5045]">
        © {new Date().getFullYear()} MEDVOXA — All Rights Reserved.
      </footer>
    </div>
  );
}
