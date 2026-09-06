import type { Metadata } from "next";
import Link from "next/link";
import {
  CTASection,
  Eyebrow,
  FeatureCard,
  SectionTitle,
} from "@/components/site/Marketing";

export const metadata: Metadata = {
  title: "Flexible Work & Additional Income — MEDVOXA",
  description:
    "MEDVOXA supports qualified professionals seeking flexible opportunities to earn additional income while respecting existing employment, confidentiality, and professional obligations.",
  alternates: {
    canonical: "https://medvoxa.com/careers/flexible-work",
  },
};

const opportunities = [
  {
    index: "01",
    title: "Revenue Cycle & Billing",
    text: "Flexible opportunities for professionals with experience in medical billing, claims, denials, payment posting, A/R and revenue-cycle operations.",
  },
  {
    index: "02",
    title: "Medical Coding",
    text: "Use your coding expertise on qualified work that fits your availability and professional scope.",
  },
  {
    index: "03",
    title: "Healthcare Operations",
    text: "Support operational workflows, quality review, documentation processes and other healthcare revenue-cycle activities.",
  },
  {
    index: "04",
    title: "Technology & Operations",
    text: "Contribute expertise across software, data, automation, administration and operational support where opportunities are available.",
  },
];

const principles = [
  {
    index: "01",
    title: "Flexible by design",
    text: "Where a role permits it, work can be structured around your existing professional commitments and availability.",
  },
  {
    index: "02",
    title: "Additional income",
    text: "Take on suitable MEDVOXA work as another professional income opportunity without assuming you need to leave your existing career.",
  },
  {
    index: "03",
    title: "Professional responsibility",
    text: "Every participant remains responsible for complying with applicable laws, employment agreements, confidentiality requirements and professional standards.",
  },
];

export default function FlexibleWork() {
  return (
    <div>
      <section className="m-page-hero">
        <div className="m-container m-hero-grid">
          <div>
            <Eyebrow>Community Support</Eyebrow>
            <h1 className="m-h1">
              Build your career. Expand your <em>income.</em>
            </h1>
            <p className="m-lead">
              Many working professionals are looking for responsible ways to
              increase their income without walking away from the careers they
              have already built. MEDVOXA supports qualified professionals who
              want flexible opportunities to work with us, where permitted by
              their existing obligations.
            </p>
            <div className="m-actions">
              <Link href="/contact" className="m-btn m-btn-red">
                Explore Opportunities →
              </Link>
              <Link href="/careers" className="m-btn m-btn-outline">
                View Careers
              </Link>
            </div>
          </div>

          <div className="m-hero-aside">
            <div className="m-card" style={{ padding: 24 }}>
              <div className="m-card-top">
                <span>OUR APPROACH</span>
                <span className="m-arrow">↗</span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 28,
                  fontWeight: 500,
                  lineHeight: 1.12,
                  margin: "0 0 10px",
                }}
              >
                More opportunity, without unnecessary barriers.
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 13,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                We believe skilled professionals should have access to
                responsible flexible work opportunities when those opportunities
                can coexist with their existing careers and obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-trust">
        <div className="m-container m-trust-row">
          <div className="m-trust-item">
            <span />
            Flexible professional work
          </div>
          <div className="m-trust-item">
            <span />
            Additional earning opportunity
          </div>
          <div className="m-trust-item">
            <span />
            Confidentiality first
          </div>
          <div className="m-trust-item">
            <span />
            Respect for existing obligations
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <SectionTitle
            eyebrow="Why we support it"
            title="A second income should not require starting over."
            text="MEDVOXA wants to create practical opportunities for qualified professionals who have valuable skills, limited spare capacity and a need for greater financial flexibility."
          />

          <div className="m-grid-3">
            {principles.map((item) => (
              <FeatureCard
                key={item.index}
                index={item.index}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="m-band">
        <div className="m-container">
          <SectionTitle
            eyebrow="Who can participate"
            title="Bring the expertise you already have."
            text="Opportunities will depend on MEDVOXA's current needs, qualifications, availability and role requirements."
          />

          <div className="m-grid-2">
            {opportunities.map((item) => (
              <FeatureCard
                key={item.index}
                index={item.index}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <SectionTitle
            eyebrow="How it works"
            title="Flexible work, with clear expectations."
          />

          <div className="m-steps">
            {[
              [
                "01",
                "Tell us about yourself",
                "Share your professional background, skills and the type of work you are looking for.",
              ],
              [
                "02",
                "Find a suitable opportunity",
                "We match your experience and availability with work that MEDVOXA actually needs.",
              ],
              [
                "03",
                "Agree on the engagement",
                "Scope, expectations, schedule and compensation are established before work begins.",
              ],
              [
                "04",
                "Deliver professionally",
                "Complete assigned work according to MEDVOXA quality, security and operational standards.",
              ],
            ].map(([number, title, text]) => (
              <div className="m-step" key={number}>
                <div className="m-step-num">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-band">
        <div className="m-container">
          <SectionTitle
            eyebrow="Our standards"
            title="Flexibility does not mean fewer responsibilities."
            text="MEDVOXA expects every professional engagement to protect patients, clients, employers and the professional working with us."
          />

          <div className="m-grid-2">
            <FeatureCard
              index="01"
              title="Employment agreements"
              text="You are responsible for confirming that additional work is permitted under your existing employment agreement and workplace policies."
            />
            <FeatureCard
              index="02"
              title="Confidentiality & conflicts"
              text="Do not bring another employer's confidential information, proprietary material or protected data into MEDVOXA work, and disclose potential conflicts."
            />
            <FeatureCard
              index="03"
              title="Healthcare privacy"
              text="All work involving healthcare information must follow applicable privacy, security and data-handling requirements."
            />
            <FeatureCard
              index="04"
              title="Professional quality"
              text="Flexible work still carries the same expectation for accuracy, reliability, accountability and professional conduct."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in flexible work with MEDVOXA?"
        text="Tell us about your experience, availability and the type of work you can contribute. We will review your background against current opportunities."
        label="Start a Conversation"
      />
    </div>
  );
}
