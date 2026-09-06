import type { Metadata } from "next";
import Link from "next/link";

import {
  Badge,
  Eyebrow,
  MiniDashboard,
  SectionTitle,
} from "@/components/site/Marketing";

export const metadata: Metadata = {
  title: "Healthcare billing that works for you.",
  description:
    "Structured revenue cycle management for independent practices and specialty groups.",
  alternates: {
    canonical: "https://medvoxa.com",
  },
};

const services = [
  [
    "01",
    "Charge Capture & Coding",
    "Accurate capture, coding, modifiers and documentation review.",
  ],
  [
    "02",
    "Claim Scrubbing & Submission",
    "Payer-aware validation before claims leave your practice.",
  ],
  [
    "03",
    "Denial Management",
    "Systematic categorization, appeals and root-cause resolution.",
  ],
  [
    "04",
    "Payment Reconciliation",
    "ERA/EOB posting, contractual checks and underpayment review.",
  ],
  [
    "05",
    "Patient Billing & A/R",
    "Clear patient balances and disciplined follow-up.",
  ],
  [
    "06",
    "Analytics & Reporting",
    "Operational visibility into claims, denials, payments and A/R.",
  ],
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="m-page-hero">
        <div className="m-container m-hero-grid">
          <div>
            <div
              className="m-actions"
              style={{ marginTop: 0, marginBottom: 18 }}
            >
              <Badge tone="green">AMA CPT® Licensed</Badge>
              <Badge tone="blue">Now Onboarding Practices</Badge>
            </div>

            <h1 className="m-h1">
              Healthcare billing that works <em>for you.</em>
            </h1>

            <p className="m-lead">
              MEDVOXA combines experienced revenue-cycle operations with
              structured claim governance and intelligent automation — helping
              practices reduce billing friction, improve claim quality, and
              gain visibility into revenue.
            </p>

            <div className="m-actions">
              <Link href="/contact" className="m-btn m-btn-red">
                Request a Demo →
              </Link>

              <Link href="/services" className="m-btn m-btn-outline">
                Explore Services
              </Link>
            </div>

            <div className="m-actions" style={{ marginTop: 18 }}>
              <span className="m-badge">Built for independent practices</span>
              <span className="m-badge">Specialty groups</span>
            </div>
          </div>

          <div className="m-hero-aside">
            <MiniDashboard />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="m-trust">
        <div className="m-container m-trust-row">
          <div className="m-trust-item">
            <span />
            AMA CPT® Licensed
          </div>

          <div className="m-trust-item">
            <span />
            Built for regulated healthcare environments
          </div>

          <div className="m-trust-item">
            <span />
            Structured claim governance
          </div>

          <div className="m-trust-item">
            <span />
            Now onboarding practices
          </div>
        </div>
      </section>

      {/* Revenue cycle */}
      <section className="m-section">
        <div className="m-container">
          <SectionTitle
            eyebrow="The revenue cycle"
            title="From patient visit to collected payment."
            text="One governed workflow across charge capture, coding, submission, denials, payment and A/R."
          />

          <div className="m-steps">
            {[
              [
                "01",
                "Capture",
                "Start with complete, normalized charge data.",
              ],
              [
                "02",
                "Validate",
                "Apply coding and payer-aware checks before submission.",
              ],
              [
                "03",
                "Resolve",
                "Route denials and exceptions into accountable worklists.",
              ],
              [
                "04",
                "Reconcile",
                "Connect payments, adjustments and A/R back to the claim.",
              ],
            ].map((x) => (
              <div className="m-step" key={x[0]}>
                <div className="m-step-num">{x[0]}</div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MEDVOXA */}
      <section className="m-band">
        <div className="m-container">
          <SectionTitle
            eyebrow="Why MEDVOXA"
            title="Billing shouldn't be reactive."
          />

          <div className="m-grid-3">
            <div className="m-pill">
              <b>Prevent problems</b>
              <span>
                Govern claim structure, coding, modifiers and payer rules
                before submission.
              </span>
            </div>

            <div className="m-pill">
              <b>Resolve systematically</b>
              <span>
                Turn denials into categorized, time-bound work with root-cause
                feedback.
              </span>
            </div>

            <div className="m-pill">
              <b>See clearly</b>
              <span>
                Know what was billed, paid, denied, pending and requiring
                action.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform services */}
      <section className="m-section">
        <div className="m-container">
          <SectionTitle
            eyebrow="Platform services"
            title="The operational layer behind your revenue."
          />

          <div className="m-grid-3">
            {services.map(([n, t, d]) => (
              <Link className="m-card-link" href="/services" key={n}>
                <div className="m-card m-feature-card">
                  <div className="m-card-top">
                    <span>{n}</span>
                    <span className="m-arrow">↗</span>
                  </div>

                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Support / Flexible Work */}
      <section className="m-section">
        <div className="m-container">
          <div className="m-card" style={{ padding: 28 }}>
            <div className="m-card-top">
              <span>COMMUNITY SUPPORT</span>
              <span className="m-arrow">↗</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto",
                gap: 32,
                alignItems: "end",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(30px, 4vw, 44px)",
                    lineHeight: 1.05,
                    fontWeight: 500,
                    margin: "0 0 12px",
                  }}
                >
                  Your career.{" "}
                  <em style={{ color: "var(--red)" }}>
                    Your opportunity.
                  </em>
                </h2>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 13,
                    lineHeight: 1.75,
                    maxWidth: 760,
                    margin: 0,
                  }}
                >
                  MEDVOXA supports qualified professionals looking for
                  responsible ways to expand their income through flexible
                  opportunities with us. Opportunities are designed to work
                  alongside existing careers where permitted by employment
                  agreements, confidentiality requirements,
                  conflict-of-interest rules and other professional
                  obligations.
                </p>
              </div>

              <Link
                href="/careers/flexible-work"
                className="m-btn m-btn-outline"
              >
                Explore Flexible Work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="m-section">
        <div className="m-container m-workflow">
          <div className="m-workflow-copy">
            <Eyebrow>Technology that supports the work</Eyebrow>

            <h2>Intelligent automation. Real-world expertise.</h2>

            <p>
              Automate repeatable revenue-cycle work while keeping experienced
              billing judgment in the loop where payer, documentation and
              exceptions require human insight.
            </p>

            <div className="workflow-list">
              <div>
                <b>Claim governance</b>
                <span>Structured validation</span>
              </div>

              <div>
                <b>Payer intelligence</b>
                <span>Rules and routing</span>
              </div>

              <div>
                <b>Work automation</b>
                <span>Exception queues</span>
              </div>

              <div>
                <b>Audit traceability</b>
                <span>Decision visibility</span>
              </div>
            </div>
          </div>

          <div className="m-workflow-panel">
            <MiniDashboard />
          </div>
        </div>
      </section>

      {/* Founding Practice Program */}
      <section className="m-cta">
        <div className="m-container m-cta-inner">
          <div>
            <Eyebrow>Founding practice program</Eyebrow>

            <h2>Help shape the next generation of healthcare RCM.</h2>

            <p>
              MEDVOXA is onboarding a limited group of independent practices
              and specialty organizations as design and founding partners.
            </p>
          </div>

          <Link href="/founding" className="m-btn m-btn-red">
            Apply for Founding Access →
          </Link>
        </div>
      </section>
    </div>
  );
}