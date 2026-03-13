import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — RCM Platform for Healthcare Practices",
  description:
    "MEDVOXA's Autonomous SaaS+ platform delivers structured claim governance, systematic denial resolution, and full revenue cycle visibility for physician practices and specialty groups.",
  alternates: { canonical: "https://medvoxa.com/solutions" },
};

export default function SolutionsPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: 700 }}>
            <div className="section-kicker">Platform Solutions</div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 5vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-1.5px",
              color: "var(--ink)",
              lineHeight: 1.08,
              marginBottom: 20,
            }}>
              Structured revenue cycle architecture
              <em style={{ color: "var(--red)", fontStyle: "italic" }}> for modern practices.</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78, maxWidth: 580 }}>
              MEDVOXA's platform separates the revenue cycle into governed operational layers —
              each with clear responsibilities, traceable decisions, and measurable outcomes.
              No black boxes. No ambiguous hand-offs.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORM LAYERS */}
      <section style={{ background: "var(--cream)", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
            <div className="section-kicker">How The Platform Is Structured</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)" }}>
              Six governed layers. One continuous lifecycle.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              {
                layer: "Layer 01",
                title: "Intake & Charge Normalization",
                desc: "Clinical documentation and charge data enters the platform. CPT codes, ICD-10 diagnoses, modifiers, and place of service designations are validated and normalized against AMA coding standards before the claim is assembled.",
                tags: ["AMA CPT Licensed", "ICD-10-CM", "Modifier Validation"],
                color: "#fff",
              },
              {
                layer: "Layer 02",
                title: "Payer-Aware Claim Governance",
                desc: "Assembled claims are evaluated against payer-specific rule libraries. Structural errors, missing data, conflicting codes, and coverage eligibility issues are identified and resolved internally — before submission.",
                tags: ["Payer Rule Libraries", "Eligibility Checks", "Pre-submission Validation"],
                color: "var(--cream)",
              },
              {
                layer: "Layer 03",
                title: "Controlled Electronic Submission",
                desc: "Claims that pass governance validation are transmitted electronically to the appropriate payer. Claims that fail are held in a structured review queue with clear resolution pathways — not silently dropped.",
                tags: ["Electronic Submission", "Clearinghouse Routing", "Hold Queue Management"],
                color: "#fff",
              },
              {
                layer: "Layer 04",
                title: "Denial Interception & Appeal Management",
                desc: "Every denial is immediately categorized by type, payer, and clinical reason. Appeals are prepared and submitted within payer-defined timelines. Root-cause analysis is fed back to Layer 02 to prevent recurrence.",
                tags: ["Denial Categorization", "Appeal Preparation", "Root-Cause Feedback"],
                color: "var(--cream)",
              },
              {
                layer: "Layer 05",
                title: "Payment Posting & Reconciliation",
                desc: "Electronic remittance and paper EOBs are processed promptly. Payments are posted to the correct accounts, contractual adjustments are verified, and underpayments are flagged for follow-up.",
                tags: ["ERA Processing", "EOB Reconciliation", "Underpayment Detection"],
                color: "#fff",
              },
              {
                layer: "Layer 06",
                title: "Reporting & Continuous Improvement",
                desc: "Practice-level dashboards surface A/R aging, payer performance, denial trends, and collection rates. Monthly reviews drive process refinement across all upstream layers.",
                tags: ["A/R Dashboards", "Payer Analytics", "Performance Reviews"],
                color: "var(--cream)",
              },
            ].map((layer, i) => (
              <div key={layer.layer} style={{
                background: layer.color,
                border: "1px solid var(--border)",
                borderRadius: i === 0 ? "var(--radius-lg) var(--radius-lg) 0 0" : i === 5 ? "0 0 var(--radius-lg) var(--radius-lg)" : 0,
                padding: "32px 36px",
                display: "grid",
                gridTemplateColumns: "160px 1fr auto",
                gap: 32,
                alignItems: "start",
              }}
              className="layer-row"
              >
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontStyle: "italic", color: "var(--red)", fontWeight: 500, marginBottom: 4 }}>
                    {layer.layer}
                  </div>
                  <div style={{ width: 32, height: 1.5, background: "var(--red)", opacity: 0.4 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 10, letterSpacing: "-0.3px" }}>
                    {layer.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, margin: 0, maxWidth: 560 }}>
                    {layer.desc}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 180, paddingTop: 4 }}>
                  {layer.tags.map((tag) => (
                    <span key={tag} style={{
                      display: "inline-block",
                      fontSize: 11, fontWeight: 600,
                      padding: "3px 10px",
                      background: "var(--red-light)",
                      border: "1px solid #f5cfc7",
                      color: "var(--red)",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .layer-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          }
        `}</style>
      </section>

      {/* SOLUTION PATHS */}
      <section style={{ background: "#fff", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div className="section-kicker">Engagement Options</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 14 }}>
            Two ways to work with MEDVOXA
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.75, maxWidth: 520, marginBottom: 48 }}>
            Whether you need full billing operations management or structured tooling for your in-house team, we have an engagement model that fits.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="two-col-sol">
            {[
              {
                title: "Fully Managed RCM",
                sub: "We handle everything",
                desc: "Your dedicated MEDVOXA billing team manages the entire revenue cycle — charge capture, claim filing, denial resolution, payment posting, and patient billing. Your practice focuses on care; we handle the rest.",
                points: [
                  "Dedicated billing team for your practice",
                  "End-to-end claim lifecycle management",
                  "Denial management and appeal filing",
                  "Monthly performance reviews",
                  "No in-house billing staff required",
                ],
                cta: "Explore Managed RCM",
                href: "/pricing",
                accent: true,
              },
              {
                title: "Platform Access",
                sub: "Tools for your team",
                desc: "Access MEDVOXA's claim governance platform directly. Ideal for practices with experienced in-house billing staff who want structured tooling, payer-aware validation, and visibility into their revenue cycle performance.",
                points: [
                  "Claim scrubbing and validation engine",
                  "Payer-specific edit library",
                  "Denial tracking and analytics dashboard",
                  "Payment posting and A/R tools",
                  "Works alongside your existing workflows",
                ],
                cta: "See Platform Features",
                href: "/contact",
                accent: false,
              },
            ].map((sol) => (
              <div key={sol.title} style={{
                background: sol.accent ? "var(--ink)" : "#fff",
                border: `1px solid ${sol.accent ? "var(--ink)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: sol.accent ? "rgba(255,255,255,0.35)" : "var(--ink-muted)", marginBottom: 6 }}>
                    {sol.sub}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: sol.accent ? "#fff" : "var(--ink)", letterSpacing: "-0.5px" }}>
                    {sol.title}
                  </h3>
                </div>
                <p style={{ fontSize: 14, color: sol.accent ? "rgba(255,255,255,0.5)" : "var(--ink-light)", lineHeight: 1.75, marginBottom: 24 }}>
                  {sol.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 28 }}>
                  {sol.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 10, fontSize: 13.5, color: sol.accent ? "rgba(255,255,255,0.65)" : "var(--ink-mid)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--red)", flexShrink: 0 }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href={sol.href} style={{
                  display: "inline-flex", justifyContent: "center",
                  padding: "12px 20px",
                  background: sol.accent ? "var(--red)" : "transparent",
                  color: sol.accent ? "#fff" : "var(--ink)",
                  border: sol.accent ? "none" : "1.5px solid var(--border-mid)",
                  borderRadius: "var(--radius-md)",
                  fontSize: 14, fontWeight: 600,
                  textDecoration: "none",
                }}>
                  {sol.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .two-col-sol { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "80px 0" }}>
        <div className="container-site" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 36 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 38px)", color: "#fff", fontWeight: 600, letterSpacing: "-0.8px", marginBottom: 10 }}>
              See the platform in action.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
              We'll walk you through how MEDVOXA handles your specific specialty and payer mix.
            </p>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            background: "#fff", color: "var(--red)",
            padding: "13px 28px", borderRadius: "var(--radius-md)",
            fontSize: 14, fontWeight: 700,
            textDecoration: "none", flexShrink: 0,
          }}>
            Request a Demo →
          </Link>
        </div>
      </section>

    </div>
  );
}
