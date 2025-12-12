import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

// ============================
// PAGE-LEVEL SEO METADATA
// ============================
export const metadata = {
  title: "AI Medical Billing & RCM Automation Platform | MEDVOXA",
  description:
    "MEDVOXA delivers an AI-powered medical billing and RCM automation platform that accelerates reimbursements, reduces denials, improves accuracy, and provides enterprise-grade financial intelligence for providers, hospitals, and RCM companies.",
  keywords: [
    "AI medical billing",
    "RCM automation platform",
    "AI revenue cycle",
    "healthcare billing automation",
    "denial management AI",
    "medical coding AI",
    "payer policy intelligence",
    "claims automation software",
  ],
  openGraph: {
    title: "AI Medical Billing & RCM Automation Platform | MEDVOXA",
    description:
      "Accelerate reimbursements, reduce denials, and modernize your revenue cycle with MEDVOXA's enterprise-grade AI RCM automation platform.",
    url: "https://www.medvoxa.com/solutions/ai-rcm-platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Medical Billing & RCM Automation Platform | MEDVOXA",
    description:
      "Enterprise-grade AI RCM automation platform for providers, hospitals, and RCM companies.",
  },
};

// ============================
// FIXED PROFESSIONAL SVG ICONS
// ============================
const Icon = ({ type }: { type: "check" | "shield" | "zap" }) => {
  const color = "#3E2F22";
  const size = 22;

  if (type === "check")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2l4-4" />
      </svg>
    );

  if (type === "shield")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10c-3.5-1-7-5-7-10V6l7-4z" />
      </svg>
    );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
};

// ============================
// FEATURE CARD COMPONENT
// ============================
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: "check" | "shield" | "zap";
  title: string;
  desc: string;
}) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm flex gap-3 items-start">
      <Icon type={icon} />
      <div>
        <h3 className="text-lg font-semibold text-[#1D1A18] mb-1">{title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ============================
// MAIN PAGE
// ============================
export default function SolutionsPage() {
  return (
    <div className="w-full">

      {/* HERO — COMPACT */}
      <Section className="pt-14 pb-8 bg-white">
        <Container className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D1A18] leading-snug">
            AI RCM Automation Platform
          </h1>

          <p className="text-neutral-700 text-base md:text-lg mt-3 leading-relaxed">
            A unified AI system that accelerates reimbursements, reduces denials,
            and delivers accurate revenue cycle automation for providers,
            hospitals, and RCM companies.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            <a
              href="/contact"
              className="btn bg-brand-primary text-white rounded-lg px-5 py-2.5 text-sm"
            >
              Book a Demo
            </a>
            <a
              href="/pricing"
              className="btn border border-brand-primary text-brand-primary rounded-lg px-5 py-2.5 text-sm"
            >
              Explore Pricing
            </a>
          </div>
        </Container>
      </Section>

      {/* FEATURES — BALANCED COMPACT */}
      <Section className="py-6 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-[#1D1A18] text-center mb-6">
            Enterprise-Grade RCM Automation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            <FeatureCard
              icon="zap"
              title="AI-Powered Revenue Acceleration"
              desc="Boost clean-claim rates and accelerate reimbursement cycles using predictive validation."
            />

            <FeatureCard
              icon="shield"
              title="Autonomous Denial Management"
              desc="Automatically analyze denials, identify root causes, and recommend compliant fixes."
            />

            <FeatureCard
              icon="check"
              title="Automated Appeal Preparation"
              desc="Generate payer-ready appeal packets and improve overturn success rates."
            />

            <FeatureCard
              icon="zap"
              title="Real-Time Payer Policy Intelligence"
              desc="Every claim checked against Medicare, Medicaid, and commercial payer rules instantly."
            />

            <FeatureCard
              icon="check"
              title="Unified Claim Ingestion"
              desc="1500, UB04, EDI, PDF — all normalized into a structured, clean dataset."
            />

            <FeatureCard
              icon="shield"
              title="Compliance & Audit Layer"
              desc="HIPAA-ready infrastructure with full audit trails and workflow encryption."
            />

            <FeatureCard
              icon="zap"
              title="Financial & Operational Analytics"
              desc="Live dashboards for AR trends, denial patterns, productivity, and forecasting."
            />

            <FeatureCard
              icon="check"
              title="Multi-Tenant Architecture"
              desc="Purpose-built for MSOs, RCM firms, hospitals, and large provider networks."
            />

            <FeatureCard
              icon="shield"
              title="Provider & Facility Intelligence"
              desc="Automated NPI validation, enrollment checks, and profile enrichment."
            />

            <FeatureCard
              icon="check"
              title="Plug-and-Play Integrations"
              desc="Connect seamlessly with EMR, PM, or billing systems using our integration model."
            />

          </div>
        </Container>
      </Section>

      {/* CTA — COMPACT */}
      <Section className="py-6 bg-white">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-[#1D1A18] mb-2">
            Ready to Modernize Your Revenue Cycle?
          </h2>

          <p className="text-neutral-700 text-sm mb-4">
            Start your automation journey with AI built specifically for healthcare.
          </p>

          <a
            href="/contact"
            className="btn bg-brand-primary text-white px-6 py-2.5 rounded-lg text-sm"
          >
            Book a Demo
          </a>
        </Container>
      </Section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI Medical Billing & RCM Automation Platform | MEDVOXA",
            url: "https://www.medvoxa.com/solutions/ai-rcm-platform",
            description:
              "AI-powered medical billing and RCM automation platform for providers, hospitals, and RCM companies.",
          }),
        }}
      />
    </div>
  );
}
