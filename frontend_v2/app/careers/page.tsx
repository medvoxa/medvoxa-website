import type { Metadata } from "next";
import Link from "next/link";

import {
  PageHero,
  SectionTitle,
  FeatureCard,
  CTASection,
} from "@/components/site/Marketing";

export const metadata: Metadata = {
  title: "Careers — MEDVOXA",
  description:
    "Join the MEDVOXA team building structured revenue-cycle technology for healthcare.",
  alternates: {
    canonical: "https://medvoxa.com/careers",
  },
};

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build infrastructure for a <em>better revenue cycle.</em>
          </>
        }
        description="MEDVOXA is a focused team working at the intersection of healthcare operations, software and intelligent automation."
        aside={
          <div className="m-card" style={{ padding: 24 }}>
            <div className="m-card-top">
              <span>TEAM MODEL</span>
            </div>

            <h3
              style={{
                fontFamily: "var(--display)",
                fontSize: 27,
                fontWeight: 500,
                margin: "0 0 8px",
              }}
            >
              Small team. High ownership.
            </h3>

            <p
              style={{
                color: "var(--muted)",
                fontSize: 13,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              We value clear thinking, operational discipline and the ability
              to turn ambiguous healthcare problems into reliable systems.
            </p>
          </div>
        }
      />

      {/* Areas of expertise */}
      <section className="m-section">
        <div className="m-container">
          <SectionTitle
            eyebrow="Where we need expertise"
            title="Roles across the system."
          />

          <div className="m-grid-2">
            <FeatureCard
              index="01"
              title="Revenue Cycle & Billing"
              text="Bring practical experience in claims, denials, A/R, payment posting and healthcare operations."
            />

            <FeatureCard
              index="02"
              title="Coding & Clinical Operations"
              text="Help translate specialty and documentation complexity into governed workflows."
            />

            <FeatureCard
              index="03"
              title="Product & Engineering"
              text="Build reliable systems for data, workflows, integrations and operational intelligence."
            />

            <FeatureCard
              index="04"
              title="Operations & Leadership"
              text="Shape processes, partnerships and the operating model behind the platform."
            />
          </div>
        </div>
      </section>

      {/* Flexible work / community support */}
      <section className="m-section">
        <div className="m-container">
          <div className="m-card" style={{ padding: 28 }}>
            <div className="m-card-top">
              <span>COMMUNITY SUPPORT</span>
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
                  Flexible work.{" "}
                  <em style={{ color: "var(--red)" }}>
                    Additional opportunity.
                  </em>
                </h2>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 13,
                    lineHeight: 1.75,
                    maxWidth: 720,
                    margin: 0,
                  }}
                >
                  MEDVOXA supports qualified professionals who are looking for
                  responsible ways to expand their income through flexible
                  opportunities with us. These opportunities are designed to
                  work alongside existing careers where permitted by
                  employment agreements, confidentiality requirements,
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

      {/* Current stage */}
      <section className="m-band">
        <div className="m-container">
          <SectionTitle
            eyebrow="Current stage"
            title="We are building, testing and learning with real operational needs."
            text="Our team is intentionally focused while the platform moves through active development and practice onboarding."
          />

          <Link href="/contact" className="m-btn m-btn-red">
            Introduce Yourself →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Interested in MEDVOXA?"
        text="If your experience fits the problem we're solving, start a conversation with the team."
        label="Contact MEDVOXA"
      />
    </div>
  );
}