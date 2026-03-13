import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Full-Cycle Revenue Cycle Management",
  description:
    "MEDVOXA provides end-to-end medical billing services including charge capture, claim submission, denial management, payment reconciliation, patient billing, and analytics for healthcare practices.",
  alternates: { canonical: "https://medvoxa.com/services" },
};

const SERVICES = [
  {
    num: "01",
    title: "Charge Capture & Medical Coding",
    summary: "Accurate revenue starts at the point of care.",
    desc: `Missed charges and coding errors are among the most common sources of preventable revenue loss. MEDVOXA's charge capture workflow ensures every billable service is captured, coded accurately, and compliant before it reaches the claim stage.

Our team works with your clinical documentation to apply correct CPT codes, ICD-10 diagnoses, place of service designations, and modifiers — using AMA CPT-licensed coding tools throughout. Specialty-specific coding knowledge means your services are coded to their full, legitimate value.`,
    points: [
      "AMA CPT-licensed coding workflows",
      "ICD-10-CM diagnosis code accuracy",
      "Modifier application and optimization",
      "Place of service (POS) code verification",
      "Superbill review and charge reconciliation",
      "Specialty-specific coding expertise",
    ],
    note: "AMA CPT licensed · Used in active development",
  },
  {
    num: "02",
    title: "Claim Scrubbing & Electronic Submission",
    summary: "Catch errors before they become denials.",
    desc: `A claim that fails at the clearinghouse or gets rejected by the payer costs you twice — once in delayed payment, once in staff time to fix and resubmit. MEDVOXA applies payer-specific validation rules before every claim is submitted, so structural errors are caught internally rather than returned from the payer.

Claims are scrubbed against payer-specific edits, checked for missing or inconsistent data, and validated for compliance before electronic transmission to the appropriate payer.`,
    points: [
      "Payer-specific edit libraries applied pre-submission",
      "Clearinghouse claim validation",
      "Electronic claim transmission to all major payers",
      "Commercial insurance, Medicare, and Medicaid",
      "Real-time claim status tracking",
      "Rejection vs. denial differentiation and routing",
    ],
  },
  {
    num: "03",
    title: "Denial Management & Appeals",
    summary: "Every denial pursued. Every pattern addressed.",
    desc: `Denial management is where most billing services fall short — appeals are filed sporadically, root causes go unaddressed, and denied revenue quietly disappears. MEDVOXA treats denial management as a systematic discipline, not an afterthought.

Every denial is categorized by type, payer, and clinical reason. Appeals are prepared with appropriate clinical and administrative documentation. And root-cause analysis drives process changes that reduce the recurrence of the same denial type.`,
    points: [
      "Denial categorization by type and payer",
      "Appeal preparation with supporting documentation",
      "Timely filing tracking to meet appeal deadlines",
      "Root-cause analysis and process improvement reporting",
      "Secondary and tertiary claim filing",
      "Medical necessity and clinical documentation appeals",
    ],
  },
  {
    num: "04",
    title: "Payment Posting & Reconciliation",
    summary: "Payments posted accurately, discrepancies caught.",
    desc: `Accurate payment posting is the foundation of reliable financial reporting. MEDVOXA processes Electronic Remittance Advice (ERA) and paper Explanation of Benefits (EOB) documents promptly, applying payments to the correct patient accounts with contractual adjustment verification.

Discrepancies between expected reimbursement and actual payment are flagged for review — so underpayments and payer errors don't go unnoticed.`,
    points: [
      "ERA and EOB processing",
      "Contractual adjustment verification",
      "Underpayment identification and follow-up",
      "Patient responsibility calculation",
      "Secondary claim billing after primary payment",
      "Credit balance identification and resolution",
    ],
  },
  {
    num: "05",
    title: "Patient Billing & Self-Pay Collections",
    summary: "Professional patient billing that protects relationships.",
    desc: `Patient-responsible balances are a growing share of practice revenue — and how you collect them matters. Aggressive or confusing billing damages patient relationships and generates complaints. MEDVOXA uses clear, professional patient billing processes designed to collect what's owed while preserving goodwill.

Digital-first statement delivery, flexible payment options, and compassionate follow-up communication maximize self-pay collections without the friction of traditional collections approaches.`,
    points: [
      "Clear, itemized patient statements",
      "Digital statement delivery and online payment portal",
      "Flexible payment plan options",
      "Balance verification before statement generation",
      "Structured follow-up communication",
      "Bad debt identification and write-off workflow",
    ],
  },
  {
    num: "06",
    title: "Analytics, Reporting & Practice Intelligence",
    summary: "Visibility into your revenue, without the spreadsheet burden.",
    desc: `Revenue cycle management without visibility is billing in the dark. MEDVOXA provides regular reporting on the metrics that matter most to practice financial health — claim status, denial trends, A/R aging, payer performance, and collection rates.

Practice-level dashboards are updated regularly and accessible to your administrative team. Monthly performance reviews ensure accountability and surface issues before they compound.`,
    points: [
      "A/R aging reports by payer and provider",
      "Claim status and submission tracking",
      "Denial trend analysis by category",
      "Payer performance and reimbursement analysis",
      "Collection rate reporting",
      "Monthly performance review meetings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site" style={{ maxWidth: 760 }}>
          <div className="section-kicker">Our Services</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(34px, 5vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-1.5px",
            color: "var(--ink)",
            lineHeight: 1.08,
            marginBottom: 20,
          }}>
            The complete revenue cycle,<br />
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>managed end to end.</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.75, maxWidth: 560, marginBottom: 28 }}>
            MEDVOXA handles every stage of your billing lifecycle — from the moment a service is rendered
            through final payment. No hand-offs to third parties, no gaps in accountability.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="chip chip-green">AMA CPT Licensed</span>
            <span className="chip chip-blue">All Major Payers</span>
            <span className="chip chip-neutral">HIPAA Compliant</span>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {SERVICES.map((svc, i) => (
        <section
          key={svc.num}
          style={{
            background: i % 2 === 0 ? "var(--cream)" : "#fff",
            padding: "72px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container-site">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "start",
            }}
            className="svc-grid"
            >
              {/* Left */}
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--red)", fontStyle: "italic", fontWeight: 500, marginBottom: 12 }}>
                  {svc.num}
                </div>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 600,
                  letterSpacing: "-0.8px",
                  color: "var(--ink)",
                  marginBottom: 8,
                }}>
                  {svc.title}
                </h2>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontStyle: "italic", color: "var(--ink-light)", marginBottom: 24 }}>
                  {svc.summary}
                </p>
                {svc.desc.split("\n\n").map((para, pi) => (
                  <p key={pi} style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 16 }}>
                    {para}
                  </p>
                ))}
                {svc.note && (
                  <div style={{
                    marginTop: 20,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 12, color: "var(--blue)",
                    background: "var(--blue-light)",
                    border: "1px solid var(--blue-mid)",
                    padding: "5px 12px", borderRadius: 20,
                    fontWeight: 600,
                  }}>
                    {svc.note}
                  </div>
                )}
              </div>

              {/* Right — feature list */}
              <div>
                <div style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 28px",
                  boxShadow: "var(--shadow-sm)",
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 20 }}>
                    What's included
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                    {svc.points.map((pt, pi) => (
                      <li key={pt} style={{
                        display: "flex", gap: 12, alignItems: "flex-start",
                        padding: "13px 0",
                        borderBottom: pi < svc.points.length - 1 ? "1px solid var(--border)" : "none",
                        fontSize: 14, color: "var(--ink-mid)", lineHeight: 1.5,
                      }}>
                        <span style={{ color: "var(--red)", flexShrink: 0, fontSize: 15, marginTop: 1 }}>✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "80px 0" }}>
        <div className="container-site" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 38px)", color: "#fff", fontWeight: 600, letterSpacing: "-0.8px", marginBottom: 10 }}>
              Questions about our services?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
              Talk to our team about your practice's billing challenges. We'll explain how MEDVOXA fits.
            </p>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            background: "#fff", color: "var(--red)",
            padding: "13px 28px", borderRadius: "var(--radius-md)",
            fontSize: 14, fontWeight: 700,
            textDecoration: "none", flexShrink: 0,
          }}>
            Contact Our Team →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .svc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}
