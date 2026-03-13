import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEDVOXA — Revenue Cycle Management for Healthcare Providers",
  description:
    "MEDVOXA is an Autonomous SaaS+ platform that manages the full lifecycle of healthcare claims — from charge capture to payment reconciliation — for independent practices and specialty groups.",
  alternates: { canonical: "https://medvoxa.com" },
};

/* ─── Reusable inline components ─────────────────── */

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <div className="section-kicker">{children}</div>;
}

function ServiceCard({
  num, title, desc, href,
}: { num: string; title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="card card-hover"
        style={{ padding: "28px 28px 24px", height: "100%" }}
      >
        <div className="step-num" style={{ marginBottom: 14 }}>{num}</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--ink)", marginBottom: 10, letterSpacing: "-0.3px" }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
          {desc}
        </p>
        <div className="btn-ghost" style={{ marginTop: 18, fontSize: 13 }}>
          Learn more <span>→</span>
        </div>
      </div>
    </Link>
  );
}

function ProcessStep({
  num, title, desc,
}: { num: string; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div style={{
        flexShrink: 0,
        width: 40, height: 40,
        borderRadius: "50%",
        background: "var(--red-light)",
        border: "1.5px solid #f5cfc7",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontSize: 14, fontWeight: 600,
        color: "var(--red)",
        fontStyle: "italic",
      }}>
        {num}
      </div>
      <div>
        <h4 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: 6, letterSpacing: "-0.3px" }}>
          {title}
        </h4>
        <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

function SpecialtyChip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 16px",
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 500,
        color: "var(--ink-mid)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Page ───────────────────────────────────────── */

export default function HomePage() {
  return (
    <div>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--border)",
          paddingTop: 72, paddingBottom: 80,
        }}
      >
        <div className="container-site">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 72,
            alignItems: "center",
          }}
          className="hero-grid"
          >
            {/* Left */}
            <div className="animate-fade-up">
              {/* AMA badge */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                <span className="chip chip-green">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="5" fill="var(--green)" opacity="0.2"/>
                    <circle cx="5" cy="5" r="3" fill="var(--green)"/>
                  </svg>
                  AMA CPT Licensed
                </span>
                <span className="chip chip-blue">Now Onboarding Practices</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 5vw, 58px)",
                  fontWeight: 600,
                  lineHeight: 1.06,
                  letterSpacing: "-2px",
                  color: "var(--ink)",
                  marginBottom: 22,
                }}
              >
                Healthcare billing<br />
                that works{" "}
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>
                  for you.
                </em>
              </h1>

              <p
                style={{
                  fontSize: 16,
                  color: "var(--ink-light)",
                  lineHeight: 1.75,
                  maxWidth: 460,
                  marginBottom: 36,
                }}
              >
                MEDVOXA manages the complete revenue cycle for healthcare practices —
                from charge capture and claim submission through denial resolution and
                payment reconciliation. Built for independent practices and specialty groups.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
                <Link href="/contact" className="btn-primary btn-red">
                  Request a Demo
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>

              {/* Specialty chips */}
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 12 }}>
                  Serving specialties including
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Family Medicine", "Cardiology", "Orthopedics", "Mental Health", "Dermatology", "Gastroenterology"].map(s => (
                    <SpecialtyChip key={s} label={s} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Claim lifecycle panel */}
            <div
              className="animate-fade-up animate-delay-2"
              style={{
                background: "var(--ink)",
                borderRadius: "var(--radius-xl)",
                padding: "36px 32px",
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 28 }}>
                Full-Cycle Revenue Management
              </p>

              {/* Lifecycle steps */}
              {[
                { step: "01", label: "Charge Capture", note: "CPT / ICD-10 validation" },
                { step: "02", label: "Claim Scrubbing", note: "Payer-specific rule checks" },
                { step: "03", label: "Electronic Filing", note: "All major payers" },
                { step: "04", label: "Denial Resolution", note: "Systematic appeals" },
                { step: "05", label: "Payment Posting", note: "ERA / EOB reconciliation" },
                { step: "06", label: "A/R Follow-up", note: "Patient balance collection" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 0",
                    borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                    background: i < 2 ? "var(--red)" : i === 2 ? "rgba(200,66,42,0.35)" : "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: i < 3 ? "#fff" : "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    transition: "background 0.2s",
                  }}>
                    {i < 2 ? "✓" : item.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: i < 3 ? "#fff" : "rgba(255,255,255,0.45)" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", marginTop: 1 }}>
                      {item.note}
                    </div>
                  </div>
                  {i === 2 && (
                    <span style={{ fontSize: 10, fontWeight: 700, background: "var(--red)", color: "#fff", padding: "2px 8px", borderRadius: 10, letterSpacing: 0.5 }}>
                      ACTIVE
                    </span>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 24, padding: "14px 16px", background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>
                  AMA CPT licensed · Autonomous SaaS+ platform · All major EHR integrations
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          VALUE PROPOSITIONS — 3 columns
      ════════════════════════════════════════ */}
      <section style={{ background: "var(--cream)", padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            {[
              {
                icon: "◈",
                title: "Systematic Claim Governance",
                desc: "Every claim passes through structured validation layers before submission. Payer-specific rules, modifier checks, and coding accuracy reviews built into the workflow — not bolted on after.",
              },
              {
                icon: "◉",
                title: "Denial Resolution That Sticks",
                desc: "We don't just appeal denials — we track root causes and close the loop. Systematic analysis prevents the same denial type from recurring across your payer mix.",
              },
              {
                icon: "◎",
                title: "Transparency at Every Stage",
                desc: "Real-time visibility into where every claim stands, what's been paid, what's pending, and what requires action. No black boxes, no chasing your billing company for updates.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", padding: "36px 32px" }}>
                <div style={{ fontSize: 22, color: "var(--red)", marginBottom: 16, fontFamily: "monospace" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--ink)", marginBottom: 12, letterSpacing: "-0.3px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES GRID
      ════════════════════════════════════════ */}
      <section style={{ background: "var(--cream-mid)", padding: "88px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
            <div>
              <SectionKicker>Platform Services</SectionKicker>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 10 }}>
                The complete RCM stack<br />
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>for modern practices.</em>
              </h2>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.7, maxWidth: 440, margin: 0 }}>
                From intake to final payment, every stage managed with discipline and accountability.
              </p>
            </div>
            <Link href="/services" className="btn-outline" style={{ flexShrink: 0 }}>
              All Services →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="services-grid">
            <ServiceCard
              num="01"
              title="Charge Capture & Coding"
              desc="AMA CPT-licensed coding workflows with ICD-10 validation and modifier optimization. Charges captured accurately from day one, with built-in compliance checks."
              href="/services"
            />
            <ServiceCard
              num="02"
              title="Claim Scrubbing & Submission"
              desc="Multi-layer claim validation with payer-specific edits applied before electronic submission. Structural errors caught before they become denials."
              href="/services"
            />
            <ServiceCard
              num="03"
              title="Denial Management"
              desc="Every denial is categorized, analyzed, and appealed through a structured workflow. Root-cause tracking closes the loop and drives process improvement."
              href="/services"
            />
            <ServiceCard
              num="04"
              title="Payment Posting & Reconciliation"
              desc="Automated ERA and EOB processing with same-day payment posting, contractual adjustment verification, and variance flagging."
              href="/services"
            />
            <ServiceCard
              num="05"
              title="Patient Billing & A/R"
              desc="Clear, professional patient statements with flexible payment options. Compassionate follow-up processes that preserve the patient relationship."
              href="/services"
            />
            <ServiceCard
              num="06"
              title="Analytics & Reporting"
              desc="Practice-level dashboards covering claim status, payer performance, and A/R aging — updated regularly so you always know where your revenue stands."
              href="/services"
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS — process steps
      ════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "88px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="process-grid">
            {/* Left */}
            <div>
              <SectionKicker>How It Works</SectionKicker>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 16 }}>
                From patient visit<br />
                to <em style={{ color: "var(--red)", fontStyle: "italic" }}>collected payment.</em>
              </h2>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.75, marginBottom: 32 }}>
                MEDVOXA's structured process ensures every step of your revenue cycle
                is handled with precision — so revenue doesn't fall through the cracks.
              </p>
              <Link href="/solutions" className="btn-primary">
                See the Full Platform
              </Link>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <ProcessStep
                num="1"
                title="We connect to your EHR or practice management system"
                desc="MEDVOXA integrates with your existing workflow — no need to change how your clinical team operates. We pull charge data directly from your system."
              />
              <div style={{ height: 1, background: "var(--border)" }} />
              <ProcessStep
                num="2"
                title="Claims are validated and scrubbed before submission"
                desc="Every claim passes through payer-specific rule checks, coding accuracy reviews, and compliance validation before it ever leaves your practice."
              />
              <div style={{ height: 1, background: "var(--border)" }} />
              <ProcessStep
                num="3"
                title="Payments are posted and denials are systematically worked"
                desc="ERA and EOB processing happens promptly. Any denial is immediately categorized, appealed, and tracked to resolution."
              />
              <div style={{ height: 1, background: "var(--border)" }} />
              <ProcessStep
                num="4"
                title="You get visibility without the administrative burden"
                desc="Dashboard reporting shows claim status, A/R aging, and payer trends. Your team focuses on patients — we handle the billing complexity."
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .process-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          WHO WE SERVE
      ════════════════════════════════════════ */}
      <section style={{ background: "var(--cream)", padding: "88px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <SectionKicker>Who We Serve</SectionKicker>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 14 }}>
              Built for practices that can't afford billing errors.
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.75, margin: 0 }}>
              Whether you're a solo physician or a multi-location specialty group, MEDVOXA
              scales to fit your billing complexity.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="who-grid">
            {[
              {
                title: "Independent Physician Practices",
                desc: "Small and solo practices benefit most from outsourcing billing complexity. MEDVOXA acts as your dedicated billing department — without the overhead of hiring in-house.",
                points: ["Full billing lifecycle managed", "Specialty-specific coding expertise", "No minimum claim volume required"],
              },
              {
                title: "Multi-Specialty & Group Practices",
                desc: "Group practices with multiple providers, locations, or payer contracts need billing infrastructure that can handle complexity without dropping the ball.",
                points: ["Multi-provider claim management", "Location-level reporting", "Payer contract performance tracking"],
              },
              {
                title: "Specialty Clinics",
                desc: "Specialties like cardiology, orthopedics, mental health, and dermatology have coding nuances that general billing services often miss. We understand your specialty.",
                points: ["AMA CPT-licensed coding", "Specialty-specific payer rules", "Prior authorization support"],
              },
              {
                title: "Healthcare Facilities & Clinics",
                desc: "Urgent care centers, surgical centers, and outpatient facilities managing high claim volumes need systematic billing operations that don't slow down.",
                points: ["High-volume claim processing", "Facility billing expertise", "Real-time A/R monitoring"],
              },
            ].map((item) => (
              <div key={item.title} className="card card-hover" style={{ padding: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 12, letterSpacing: "-0.3px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, marginBottom: 20 }}>
                  {item.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {item.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "var(--ink-mid)", fontWeight: 500 }}>
                      <span style={{ color: "var(--red)", flexShrink: 0, marginTop: 2 }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .who-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          PLATFORM HIGHLIGHTS
      ════════════════════════════════════════ */}
      <section style={{ background: "var(--ink)", padding: "88px 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="platform-grid">
            <div>
              <div className="section-kicker" style={{ color: "#c8a09a" }}>
                <span style={{ background: "#c8a09a", height: 1.5, width: 24, display: "inline-block", marginRight: 8, verticalAlign: "middle" }} />
                The Platform
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-1px", color: "#fff", marginBottom: 20 }}>
                Autonomous SaaS+{" "}
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>
                  designed for healthcare billing.
                </em>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 32 }}>
                MEDVOXA combines structured claim governance with managed operational
                expertise. The platform automates what can be automated — and applies
                experienced billing judgment where it matters most.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/solutions" className="btn-primary btn-red">
                  Explore the Platform
                </Link>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "11px 22px", borderRadius: "var(--radius-md)",
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                  Talk to Us
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Payer Connectivity", value: "All major commercial, Medicare, Medicaid payers supported" },
                { label: "Coding Standard", value: "AMA CPT licensed — accurate code selection built in" },
                { label: "Claim Governance", value: "Structured validation layers before every submission" },
                { label: "Denial Workflow", value: "Systematic appeal preparation and tracking to resolution" },
                { label: "Reporting Cadence", value: "Practice dashboards with A/R aging and payer analytics" },
                { label: "EHR Integration", value: "Works alongside your existing practice management system" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  gap: 16,
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-md)",
                  alignItems: "center",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .platform-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          CREDIBILITY STRIP — no fake numbers
      ════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "56px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "flex", gap: 0, borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", overflow: "hidden" }}>
            {[
              { label: "AMA CPT Licensed", sub: "Compliant coding workflows for accurate claim submission" },
              { label: "All Major Payers", sub: "Commercial insurance, Medicare, Medicaid, and more" },
              { label: "HIPAA Compliant", sub: "Secure data handling practices built into every workflow" },
              { label: "Specialty Expertise", sub: "Billing teams experienced across medical specialties" },
            ].map((item, i) => (
              <div key={item.label} style={{
                flex: 1,
                padding: "28px 24px",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--ink)", marginBottom: 8, letterSpacing: "-0.2px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-light)", lineHeight: 1.6 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA — FINAL
      ════════════════════════════════════════ */}
      <section style={{ background: "var(--red)", padding: "80px 0" }}>
        <div className="container-site" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-1px",
              marginBottom: 10,
            }}>
              Ready to fix your revenue cycle?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 420, lineHeight: 1.7, margin: 0 }}>
              Talk to our team about how MEDVOXA fits your practice.
              No commitment — just a straightforward conversation about your billing challenges.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center",
              background: "#fff", color: "var(--red)",
              padding: "13px 28px", borderRadius: "var(--radius-md)",
              fontSize: 14, fontWeight: 700,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}>
              Request a Demo
            </Link>
            <Link href="/pricing" style={{
              display: "inline-flex", alignItems: "center",
              background: "transparent", color: "#fff",
              padding: "12px 24px", borderRadius: "var(--radius-md)",
              fontSize: 14, fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.4)",
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
