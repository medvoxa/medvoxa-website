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
  const size = 26;

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

  // Lightning bolt (Zap)
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
    <div className="p-6 border rounded-xl bg-white shadow-sm flex gap-4 items-start">
      <Icon type={icon} />
      <div>
        <h3 className="text-xl font-semibold text-[#3E2F22] mb-1">{title}</h3>
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

      {/* HERO */}
      <Section className="py-10 bg-white">
        <Container className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2F22] leading-tight">
            AI Medical Billing & RCM Automation Platform
          </h1>

          <p className="text-neutral-700 text-lg md:text-xl mt-4 leading-relaxed">
            A unified AI platform that accelerates reimbursements, reduces denials,
            and delivers enterprise-grade revenue cycle automation for providers,
            hospitals, and RCM companies.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/contact"
              className="btn bg-brand-primary text-white rounded-xl px-6 py-3"
            >
              Book a Demo
            </a>
            <a
              href="/pricing"
              className="btn border border-brand-primary text-brand-primary rounded-xl px-6 py-3"
            >
              Explore Pricing
            </a>
          </div>
        </Container>
      </Section>

      {/* FEATURES */}
      <Section className="py-10 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-[#3E2F22] text-center mb-8">
            Enterprise-Grade RCM Automation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <FeatureCard
              icon="zap"
              title="AI-Powered Revenue Acceleration"
              desc="Improves clean-claim rates, accelerates reimbursements, and lowers costs using intelligent validation and predictive recommendations."
            />

            <FeatureCard
              icon="shield"
              title="Autonomous Denial Management"
              desc="Automatically triages denials, identifies root causes, recommends compliant fixes, and prepares payer-ready responses."
            />

            <FeatureCard
              icon="check"
              title="Automated Appeal Preparation"
              desc="Generates fully formatted payer-specific appeal packets, increasing overturn success and reducing turnaround time."
            />

            <FeatureCard
              icon="zap"
              title="Real-Time Payer Policy Intelligence"
              desc="Live rules engine that checks every claim against Medicare, Medicaid, and commercial payer policies in real-time."
            />

            <FeatureCard
              icon="check"
              title="Unified Claims Ingestion & Normalization"
              desc="Accepts 1500/UB04/EDI/PDF and normalizes all claims into a clean, unified data structure for seamless processing."
            />

            <FeatureCard
              icon="shield"
              title="End-to-End Compliance & Audit Layer"
              desc="HIPAA-safe architecture with full audit trails, encrypted workflows, and enterprise-grade compliance controls."
            />

            <FeatureCard
              icon="zap"
              title="Financial & Operational Analytics"
              desc="Real-time dashboards for AR trends, denial patterns, productivity metrics, and reimbursement forecasting."
            />

            <FeatureCard
              icon="check"
              title="Multi-Tenant Architecture"
              desc="Built for hospitals, MSOs, RCM companies, and multi-location provider groups with isolated environments and centralized admin."
            />

            <FeatureCard
              icon="shield"
              title="Provider & Facility Intelligence Layer"
              desc="Automated NPI validation, enrollment checks, and profile enrichment for cleaner submissions and fewer rejections."
            />

            <FeatureCard
              icon="check"
              title="Plug-and-Play Integration Model"
              desc="API-ready platform that connects with any EMR, PM, or billing workflow with minimal operational disruption."
            />

          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-10 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-[#3E2F22] mb-3">
            Ready to Modernize Your Revenue Cycle?
          </h2>
          <p className="text-neutral-700 mb-5">
            Start your automation journey with AI built specifically for healthcare.
          </p>

          <a
            href="/contact"
            className="btn bg-brand-primary text-white px-8 py-4 rounded-xl text-lg"
          >
            Book a Demo
          </a>
        </Container>
      </Section>

      {/* JSON-LD SCHEMA */}
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
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Solutions",
                  item: "https://www.medvoxa.com/solutions",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "AI RCM Platform",
                  item: "https://www.medvoxa.com/solutions/ai-rcm-platform",
                },
              ],
            },
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "MEDVOXA AI RCM Platform",
              applicationCategory: "Healthcare, Revenue Cycle Management",
              operatingSystem: "Cloud",
              url: "https://www.medvoxa.com",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/OnlineOnly",
              },
            },
          }),
        }}
      />
    </div>
  );
}
