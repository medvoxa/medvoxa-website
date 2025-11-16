'use client';

import StagedReveal from "@/components/StagedReveal";
import FadeIn from "@/components/FadeIn";
import HazeOverlay from "@/components/HazeOverlay";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#EFE7E2] to-[#D9CCC4] text-[#3D2B24] overflow-hidden">

      <HazeOverlay />

      {/* Spacer for Navbar */}
      <div className="h-20" />

      {/* ============================ */}
      {/*          HERO NARRATIVE      */}
      {/* ============================ */}
      <section className="text-center px-6 relative max-w-5xl mx-auto">
        <StagedReveal>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            The System Should Fix Itself
          </h1>
        </StagedReveal>

        <StagedReveal delay={0.2}>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-[#6A5045] leading-relaxed">
            MEDVOXA began with a simple but uncomfortable truth: healthcare revenue cycle teams
            spend a massive portion of their lives fixing the same problems again and again.
            Errors resurfaced. Denials repeated. Knowledge disappeared into tickets and inboxes.
            The industry normalized rework — we did not.
          </p>
        </StagedReveal>

        <StagedReveal delay={0.35}>
          <div className="mt-8 text-sm tracking-[0.18em] uppercase font-bold text-[#4A352A]">
            — Our Beginning
          </div>
        </StagedReveal>
      </section>

      <div className="my-16 border-t border-[#C6B4A9] max-w-4xl mx-auto" />

      {/* ============================ */}
      {/*         ORIGIN STORY         */}
      {/* ============================ */}
      <section className="max-w-4xl mx-auto px-6 space-y-14">

        <FadeIn>
          <h2 className="text-2xl font-semibold">Where It Started</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Across provider groups and healthcare organizations, one pattern kept emerging:
            the problem wasn’t expertise — it was repetition. 
            The system didn’t remember what it learned yesterday, so teams spent today re-fixing it.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-semibold">What Was Broken</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            The revenue cycle depended on human vigilance instead of systematic intelligence.
            Workflows grew more complex, payer rules updated weekly, and even the best teams
            became trapped in an endless loop of corrections.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-semibold">The Insight</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Every denied claim, every adjustment, every payer rule contains logic, patterns,
            and predictable triggers. If a system could internalize that knowledge —
            rework would no longer repeat.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-semibold">The Principle</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            A modern revenue cycle must be:
            <br />• Self-correcting  
            <br />• Self-improving  
            <br />• Explainable  
            <br />• Scalable beyond staffing alone  
          </p>
        </FadeIn>
      </section>

      <div className="my-20 border-t border-[#C6B4A9] max-w-4xl mx-auto" />

      {/* ============================ */}
      {/*        VISION SECTION        */}
      {/* ============================ */}
      <section className="max-w-4xl mx-auto px-6 space-y-14 pb-16">

        <FadeIn>
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            To build an autonomous revenue cycle engine that reduces human rework,
            stabilizes financial outcomes, and elevates operational performance across healthcare —
            continuously and explainably.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-semibold">Why Now</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Healthcare is growing more complex. Payers adjust logic faster than workflows can adapt.
            The future demands systems that analyze, learn, and adapt automatically —
            lifting the pressure off operational teams.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-semibold">Engine + People, Not Engine vs. People</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            As automation scales, new roles rise — payer policy analysts, RCM strategists,
            compliance engineers, and clinical coding architects. Automation does not replace people;
            it elevates them.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-semibold">The Next 5 Years</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            We aim to partner with provider networks nationwide — empowering clinical operators,
            RCM professionals, and systems teams with technology that makes the revenue cycle
            predictable, explainable, and self-improving.
          </p>
        </FadeIn>

      </section>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <div className="my-16 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-2xl bg-[#5A3A2E] text-white text-lg font-medium hover:bg-[#7B5243] transition"
          >
            Talk to the MEDVOXA Team
          </a>
        </div>
      </FadeIn>

      {/* FOOTER */}
      <footer className="border-t border-[#C6B4A9] py-10 text-center text-sm text-[#6A5045]">
        © {new Date().getFullYear()} MEDVOXA — All Rights Reserved.
      </footer>
    </div>
  );
}
