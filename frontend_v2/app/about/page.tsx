// app/about/page.tsx

import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "About MEDVOXA",
  description:
    "Learn about MEDVOXA’s mission to modernize healthcare revenue cycle systems using AI, automation, and provider-centric innovation.",
  canonical: "https://medvoxa.com/about",
  keywords: [
    "about medvoxa",
    "healthcare rcm company",
    "rcm automation",
    "provider revenue cycle",
    "medical billing ai platform",
    "ai healthcare automation"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "About", url: "https://medvoxa.com/about" }
  ])
});

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ==================== */}
      {/* HERO — Reduced Space */}
      {/* ==================== */}
      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#3E2F22] leading-tight">
            About MEDVOXA
          </h1>

          <p className="mt-4 text-neutral-700 text-lg max-w-2xl leading-relaxed">
            MEDVOXA is building the next generation of AI-driven revenue cycle
            infrastructure that enhances provider accuracy, operational
            efficiency, and long-term financial performance.
          </p>
        </div>
      </section>

      {/* ==================== */}
      {/* OUR STORY — Tightened */}
      {/* ==================== */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#3E2F22] mb-6">
            Our Story
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl mb-4">
            The healthcare system is burdened with outdated processes,
            administrative complexity, and rising financial pressure on
            providers. Traditional RCM tools often create more friction instead
            of solving core workflow challenges. MEDVOXA was created with one
            clear purpose — to deliver intelligent infrastructure that reduces
            operational waste and empowers providers with efficiency, clarity,
            and control.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl">
            We believe sustainable healthcare requires accurate data,
            streamlined workflows, and automation that adapts to real-world
            clinical and operational scenarios — not rigid checklists.
          </p>
        </div>
      </section>

      {/* ==================== */}
      {/* MISSION & VALUES — Tightened */}
      {/* ==================== */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">

          <h2 className="text-3xl font-semibold text-[#3E2F22] mb-6">
            Our Mission
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl mb-8">
            To build intelligent revenue cycle automation that enhances provider
            efficiency, ensures compliance, and improves financial accuracy —
            allowing healthcare organizations to operate with confidence and
            focus on patient care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-[#3E2F22]">
                Provider First
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every workflow, recommendation, and automation is designed to
                support real provider needs and operational realities.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-[#3E2F22]">
                Automation with Integrity
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our platform increases accuracy and compliance without risky
                shortcuts — built with trust and safety at the core.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-[#3E2F22]">
                Built for Scale
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                From solo practices to multi-location networks, MEDVOXA’s
                infrastructure scales seamlessly with every provider.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* REMOTE-FIRST — Tightened */}
      {/* ==================== */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#3E2F22] mb-6">
            Remote-First by Design
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl mb-4">
            MEDVOXA operates fully remote across distributed teams. This enables
            us to hire top talent, collaborate across regions, and move fast
            without the constraints of physical location.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl">
            Our remote culture prioritizes ownership, accountability, and
            continuous improvement — resulting in stronger outcomes for the
            providers and organizations we serve.
          </p>
        </div>
      </section>

      {/* ==================== */}
      {/* CTA — Reduced Space */}
      {/* ==================== */}
      <section className="py-12 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">
          Learn More About MEDVOXA
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-6">
          Have questions or want to explore how MEDVOXA can support your
          organization? We’re here to help.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
