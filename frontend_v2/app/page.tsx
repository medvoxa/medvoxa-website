import Image from "next/image";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

// ========================
// HOMEPAGE SEO METADATA
// ========================
export const metadata = {
  title: "AI Medical Billing & Autonomous RCM Platform | MEDVOXA",
  description:
    "MEDVOXA is an AI-powered medical billing and RCM automation platform designed to accelerate reimbursements, reduce denials, and improve financial outcomes for healthcare providers, hospitals, and RCM companies.",
  keywords: [
    "AI medical billing",
    "RCM automation",
    "autonomous RCM",
    "healthcare billing automation",
    "AI claims processing",
    "medical billing software",
    "revenue cycle automation",
    "AI denial management",
    "healthcare workflow automation",
  ],
  openGraph: {
    title: "AI Medical Billing & Autonomous RCM Platform | MEDVOXA",
    description:
      "Transform your revenue cycle with MEDVOXA’s AI-powered billing automation, denial prevention, and intelligent financial insights.",
    url: "https://medvoxa.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Medical Billing & Autonomous RCM Platform | MEDVOXA",
    description:
      "AI-driven medical billing & RCM automation platform for providers and hospitals.",
  },
};

// ========================
// REUSABLE CARDS
// ========================
function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border">
      <h3 className="text-lg font-semibold text-[#3E2F22] mb-1">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function SolutionCard({ title, desc, link }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border">
      <h3 className="text-lg font-semibold text-[#3E2F22] mb-1">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed mb-3">{desc}</p>
      <a href={link} className="text-brand-primary font-medium text-sm">
        Learn more →
      </a>
    </div>
  );
}

function Metric({ number, label }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border text-center">
      <div className="text-2xl font-bold text-[#3E2F22]">{number}</div>
      <div className="text-neutral-600 text-sm mt-1">{label}</div>
    </div>
  );
}

function WorkflowStep({ title, desc }) {
  return (
    <div className="p-5 bg-gray-50 border rounded-xl">
      <h3 className="text-lg font-semibold text-[#3E2F22] mb-1">{title}</h3>
      <p className="text-neutral-600 text-sm">{desc}</p>
    </div>
  );
}

// ========================
// MAIN HOMEPAGE
// ========================
export default function HomePage() {
  return (
    <div className="w-full">

      {/* HERO — REDUCED SPACING */}
      <Section className="bg-white py-8 md:py-12">
        <Container className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#3E2F22]">
              AI-Powered Revenue Cycle <br />
              Built for Healthcare Providers
            </h1>

            <p className="mt-4 text-neutral-700 text-lg max-w-lg leading-relaxed">
              MEDVOXA automates your claims, reduces denials, improves accuracy,
              and delivers real-time financial intelligence across your entire RCM workflow.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="btn bg-brand-primary text-white rounded-xl px-6 py-3 text-base"
              >
                Book a Demo
              </a>

              <a
                href="/solutions"
                className="btn border border-brand-primary text-brand-primary rounded-xl px-6 py-3 text-base"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/hero-illustration.png"
              alt="Healthcare automation"
              width={550}
              height={420}
              className="rounded-xl shadow-lg object-contain max-w-full h-auto"
              priority
            />
          </div>

        </Container>
      </Section>

      {/* FEATURES — REDUCED EMPTY GAPS */}
      <Section className="py-8 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3E2F22] mb-8">
            Why Providers Choose MEDVOXA
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="AI-Assisted Claims"
              desc="Automated scrubber, LCD/NCD checks, NCCI mapping, and CPT/ICD intelligence — all in real time."
            />
            <FeatureCard
              title="Denial Prevention"
              desc="50–60% fewer denials with proactive payer-specific rule checks and compliance verification."
            />
            <FeatureCard
              title="Faster Cash Flow"
              desc="Reduce AR by 12–18% in the first month with intelligent worklists and automated follow-up workflows."
            />
          </div>
        </Container>
      </Section>

      {/* SOLUTIONS */}
      <Section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3E2F22] mb-8">
            Solutions for Every Healthcare Organization
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <SolutionCard
              title="Clinics & Practices"
              desc="Automated claims, eligibility, coding assistance, ERAs, and complete RCM visibility."
              link="/solutions"
            />
            <SolutionCard
              title="RCM Companies"
              desc="Scale unlimited claims, automate repetitive tasks, and improve team efficiency."
              link="/solutions"
            />
            <SolutionCard
              title="Provider Networks"
              desc="Unified data, AI insights, automated reporting, and payer compliance built in."
              link="/solutions"
            />
          </div>
        </Container>
      </Section>

      {/* METRICS */}
      <Section className="py-8 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3E2F22] mb-6">
            Real Results, Real Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            <Metric number="97%" label="Clean Claim Rate" />
            <Metric number="12–18%" label="AR Reduction" />
            <Metric number="50–60%" label="Denial Prevention" />
            <Metric number="3–5 Days" label="Faster Payments" />
          </div>
        </Container>
      </Section>

      {/* WORKFLOW */}
      <Section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3E2F22] mb-6">
            Agentic AI Workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            <WorkflowStep title="Observe" desc="Reads claim, payer data, specialty rules, and required fields." />
            <WorkflowStep title="Analyze" desc="Detects conflicts, missing fields, and payer rule violations." />
            <WorkflowStep title="Recommend" desc="Suggests fixes, ICD/CPT alignment, and repair recommendations." />
            <WorkflowStep title="Act" desc="Generates corrected claims, CMS-1500, or appeal-ready packets." />
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-8 bg-[#F8F4F2]">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3E2F22] mb-3">
            Ready to Transform Your Revenue Cycle?
          </h2>

          <p className="text-neutral-700 mb-6 text-base">
            Join clinics and RCM teams accelerating reimbursements with AI.
          </p>

          <a
            href="/contact"
            className="btn bg-brand-primary text-white px-8 py-3 rounded-xl text-lg"
          >
            Book a Demo
          </a>
        </Container>
      </Section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://medvoxa.com",
            name: "MEDVOXA",
            description:
              "AI medical billing & autonomous RCM automation platform for healthcare providers and hospitals.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://medvoxa.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}
