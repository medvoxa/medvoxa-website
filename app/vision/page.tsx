'use client';

import FadeIn from "@/components/FadeIn";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EFE7E2] to-[#D9CCC4] text-[#3D2B24]">
      <div className="h-20" />

      <section className="text-center px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our Vision
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-[#6A5045]">
            To build an autonomous revenue cycle engine that reduces human rework,
            stabilizes financial outcomes, and elevates operational performance
            across healthcare — continuously and explainably.
          </p>
        </FadeIn>
      </section>

      <div className="my-16 border-t border-[#C6B4A9] max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 space-y-14">

        <FadeIn>
          <h2 className="text-2xl font-semibold">Why Now</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Healthcare is becoming more complex, not less. RCM teams are under constant pressure
            to maintain performance while payer rules evolve faster than workflows can adapt.
            The future requires systems that learn, adjust, and stabilize — automatically.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-semibold">The Autonomous Shift</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            Traditional systems react to errors. MEDVOXA prevents them.
            By internalizing adjudication logic and payer-level outcome patterns,
            the revenue cycle begins to improve itself — without scaling manual oversight.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-semibold">Engine + People, Not Engine vs. People</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            As the engine grows, so will the need for specialists in payer policy,
            clinical coding, compliance engineering, and operational design.
            This is not automation replacing human contribution —
            it is automation elevating human capability.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-semibold">The Next 5 Years</h2>
          <p className="text-[#6A5045] leading-relaxed text-lg">
            We aim to partner with leading provider networks and empower thousands of
            clinical operators, RCM strategists, and system architects.
            The revenue cycle will become predictable, explainable, and continuously improving.
          </p>
        </FadeIn>

      </section>

      <div className="my-20 text-center">
        <a
          href="/story"
          className="inline-block px-8 py-4 rounded-2xl bg-[#5A3A2E] text-white text-lg font-medium hover:bg-[#7B5243] transition"
        >
          Read Our Story
        </a>
      </div>

      <footer className="border-t border-[#C6B4A9] py-10 text-center text-sm text-[#6A5045]">
        © {new Date().getFullYear()} MEDVOXA — All Rights Reserved.
      </footer>
    </div>
  );
}
