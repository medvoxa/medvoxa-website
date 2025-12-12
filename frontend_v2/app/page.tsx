import Image from "next/image";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

// ======================================================
// HOMEPAGE META (Retained, can be optimized later)
// ======================================================
export const metadata = {
  title: "Autonomous RCM Platform | MEDVOXA",
  description:
    "MEDVOXA is a next-generation autonomous RCM engine designed for healthcare providers, offering real-time claim intelligence, denial prevention, and AI-driven financial automation.",
  keywords: [
    "autonomous RCM",
    "AI medical billing",
    "RCM automation",
    "medical claims automation",
    "AI denial prevention",
    "healthcare billing AI",
  ],
};

// ======================================================
// SHARED COMPONENTS
// ======================================================
function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow border hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-[#1D1A18]">{title}</h3>
      <p className="text-[#534940] text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

function Metric({ number, label }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border text-center">
      <div className="text-2xl font-bold text-[#1D1A18]">{number}</div>
      <div className="text-[#534940] text-sm mt-1">{label}</div>
    </div>
  );
}

function WorkflowStep({ title, desc }) {
  return (
    <div className="p-5 bg-gray-50 border rounded-xl">
      <h3 className="text-lg font-semibold text-[#1D1A18]">{title}</h3>
      <p className="text-[#534940] text-sm mt-1">{desc}</p>
    </div>
  );
}

// ======================================================
// MAIN HOMEPAGE
// ======================================================
export default function HomePage() {
  return (
    <div className="w-full">

      {/* ====================================================== */}
      {/* HERO — MINIMAL, PREMIUM, WITH CPT READINESS BADGE     */}
      {/* ====================================================== */}
      <Section className="bg-white py-8 md:py-12">
        <Container className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            {/* CPT Readiness Badge */}
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neutral-300 bg-neutral-100 text-xs text-[#534940]">
              <span className="font-semibold">CPT® Readiness:</span> Designed for future AMA CPT® data integration  
              <span className="block text-[10px] mt-0.5">(Feature activation pending contract execution)</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1D1A18]">
              Autonomous RCM,  
              <br className="hidden md:block" />
              Built for Clinical Precision
            </h1>

            <p className="mt-4 text-[#534940] text-lg max-w-lg leading-relaxed">
              MEDVOXA unifies your entire revenue cycle into an intelligent system that prevents denials, repairs claims automatically, and accelerates cash flow with explainable AI.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="btn bg-brand-primary text-white rounded-xl px-6 py-3 text-base"
              >
                Book a Demo
              </a>

              <a
                href="/services"
                className="btn border border-brand-primary text-brand-primary rounded-xl px-6 py-3 text-base"
              >
                View Pricing Models
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/hero-illustration.png"
              alt="Autonomous RCM Platform"
              width={520}
              height={400}
              className="rounded-xl shadow-md object-contain"
              priority
            />
          </div>

        </Container>
      </Section>

      {/* ====================================================== */}
      {/* VALUE PROPOSITION */}
      {/* ====================================================== */}
      <Section className="py-8 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1D1A18] mb-8">
            Why Providers Choose MEDVOXA
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Prevent Denials"
              desc="Real-time payer rules, NCCI logic, MUE checks, and specialty-driven automation reduce preventable denials dramatically."
            />
            <FeatureCard
              title="Act With Financial Precision"
              desc="AI-driven repair recommendations ensure CPT, ICD, POS, and payer requirements stay aligned before submission."
            />
            <FeatureCard
              title="Accelerate Cash Flow"
              desc="A 12–18% AR reduction powered by automated worklists, claim corrections, and proactive follow-ups."
            />
          </div>
        </Container>
      </Section>

      {/* ====================================================== */}
      {/* METRICS */}
      {/* ====================================================== */}
      <Section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1D1A18] mb-6">
            Trusted Performance Metrics
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Metric number="97%" label="Clean Claim Rate" />
            <Metric number="12–18%" label="AR Reduction" />
            <Metric number="58%" label="Prevented Denials" />
            <Metric number="3–5 Days" label="Faster Payments" />
          </div>
        </Container>
      </Section>

      {/* ====================================================== */}
      {/* HOW IT WORKS */}
      {/* ====================================================== */}
      <Section className="py-8 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1D1A18] mb-6">
            AI Workflow Built for Accuracy
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            <WorkflowStep
              title="Observe"
              desc="Captures claim data, payer rules, specialty context, and documentation requirements."
            />
            <WorkflowStep
              title="Analyze"
              desc="Identifies conflicts, missing fields, coding mismatches, and payer compliance gaps."
            />
            <WorkflowStep
              title="Recommend"
              desc="Generates repair suggestions, ICD/CPT alignment, and accuracy improvements."
            />
            <WorkflowStep
              title="Act"
              desc="Produces corrected claims and ready-to-submit CMS-1500 outputs."
            />
          </div>
        </Container>
      </Section>

      {/* ====================================================== */}
      {/* FINAL CTA */}
      {/* ====================================================== */}
      <Section className="py-8 bg-[#FAF9F7]">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D1A18] mb-3">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-[#534940] mb-6">
            Join providers modernizing their RCM operations with autonomous workflows.
          </p>

          <a
            href="/contact"
            className="btn bg-brand-primary text-white px-8 py-3 rounded-xl text-lg"
          >
            Book a Demo
          </a>
        </Container>
      </Section>

    </div>
  );
}
