import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Transparent Revenue Cycle Management Models",
  description:
    "MEDVOXA offers flexible engagement models for medical billing and RCM services. Platform-only, fully managed, and hybrid options aligned to your practice's needs and scale.",
  alternates: { canonical: "https://medvoxa.com/pricing" },
};

const PLANS = [
  {
    name: "Platform Access",
    tag: "Self-directed teams",
    description:
      "Access MEDVOXA's claim governance platform directly. Ideal for practices with in-house billing staff who want structured tooling, payer-aware validation, and audit-traceable claim workflows.",
    model: "Monthly subscription",
    bestFor: "Practices with internal billing teams",
    features: [
      "Claim scrubbing and validation engine",
      "Payer-specific edit library access",
      "Submission control states and audit log",
      "Denial tracking dashboard",
      "CPT / ICD-10 code accuracy checks",
      "ERA and payment posting tools",
      "Standard reporting and A/R dashboard",
    ],
    cta: "Request Platform Demo",
    highlight: false,
  },
  {
    name: "Fully Managed RCM",
    tag: "Recommended for most practices",
    description:
      "MEDVOXA handles your entire revenue cycle — end to end. Our billing team manages charge capture, claim filing, denial resolution, payment posting, and patient billing on your behalf.",
    model: "Percentage of collections",
    bestFor: "Practices without in-house billing staff",
    features: [
      "Everything in Platform Access",
      "Dedicated billing team assigned to your practice",
      "Charge capture and coding review",
      "Denial management and systematic appeals",
      "Payment posting and reconciliation",
      "Patient billing and A/R follow-up",
      "Monthly performance review meetings",
      "Priority support and onboarding",
    ],
    cta: "Get a Custom Quote",
    highlight: true,
  },
  {
    name: "Targeted A/R Recovery",
    tag: "Project-based",
    description:
      "For practices with aging A/R or a backlog of unworked denials. MEDVOXA's recovery team works your outstanding claims on a focused engagement — no long-term commitment required.",
    model: "Performance-based fee",
    bestFor: "Practices with outstanding denial backlogs",
    features: [
      "Aging A/R audit and prioritization",
      "Denial analysis and categorization",
      "Appeal preparation and submission",
      "Payer follow-up and escalation",
      "Recovery reporting and documentation",
      "Handoff to ongoing managed RCM if needed",
    ],
    cta: "Discuss Recovery Options",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site" style={{ maxWidth: 680 }}>
          <div className="section-kicker">Pricing</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 50px)",
            fontWeight: 600,
            letterSpacing: "-1.5px",
            color: "var(--ink)",
            lineHeight: 1.1,
            marginBottom: 18,
          }}>
            Pricing aligned to your
            <em style={{ color: "var(--red)", fontStyle: "italic" }}> outcomes.</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.75, marginBottom: 16 }}>
            MEDVOXA offers engagement models designed around how your practice actually works —
            not one-size pricing that leaves you paying for services you don't use.
          </p>
          <p style={{ fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.7 }}>
            Pricing is discussed during your demo and tailored to your specialty, claim volume,
            and payer mix. No surprises, no hidden fees.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ background: "var(--cream)", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="plans-grid">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: "#fff",
                  border: plan.highlight ? `2px solid var(--red)` : "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: plan.highlight ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: -1, left: 28,
                    background: "var(--red)", color: "#fff",
                    fontSize: 11, fontWeight: 700, letterSpacing: 1,
                    padding: "4px 12px", borderRadius: "0 0 8px 8px",
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: 24, paddingTop: plan.highlight ? 16 : 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8 }}>
                    {plan.tag}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--ink)", marginBottom: 4, letterSpacing: "-0.5px" }}>
                    {plan.name}
                  </h2>
                  <div style={{ fontSize: 13, color: "var(--red)", fontWeight: 600, fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                    {plan.model}
                  </div>
                </div>

                <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, marginBottom: 24 }}>
                  {plan.description}
                </p>

                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>
                  What's included
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, color: "var(--ink-mid)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--red)", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    marginTop: 28,
                    padding: "12px 20px",
                    background: plan.highlight ? "var(--red)" : "transparent",
                    color: plan.highlight ? "#fff" : "var(--ink)",
                    border: plan.highlight ? "none" : "1.5px solid var(--border-mid)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    transition: "opacity 0.2s",
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .plans-grid { grid-template-columns: 1fr !important; max-width: 520px; margin: 0 auto; }
          }
        `}</style>
      </section>

      {/* FAQ / What shapes pricing */}
      <section style={{ background: "#fff", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} className="faq-grid">
            <div>
              <div className="section-kicker">How Pricing Works</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.8px", color: "var(--ink)", marginBottom: 20 }}>
                What shapes your engagement cost
              </h2>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.75, marginBottom: 16 }}>
                Revenue cycle management pricing isn't one-size-fits-all. Your billing complexity,
                specialty, payer mix, and claim volume all affect what a fair engagement looks like.
              </p>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.75 }}>
                We scope every engagement transparently during your initial conversation — so you
                know what you're paying for before you sign anything.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { q: "Do you charge setup fees?", a: "Onboarding costs depend on EHR integration complexity and data migration scope. We discuss this clearly before engagement begins." },
                { q: "What does percentage-of-collections mean?", a: "For managed RCM, we earn a percentage of what we actually collect — so our incentives are aligned with yours. The rate varies by specialty and volume." },
                { q: "Is there a minimum contract length?", a: "We offer month-to-month and annual engagements. Longer commitments may include preferential pricing — discussed at quote time." },
                { q: "Can I start with one service and expand?", a: "Yes. Many practices begin with denial management or a specific service area before moving to full managed RCM." },
                { q: "Are EHR integrations included?", a: "Standard integrations with common EHR platforms are included. Custom API work may be scoped separately depending on your system." },
              ].map((item, i) => (
                <details
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    padding: "20px 0",
                    cursor: "pointer",
                  }}
                >
                  <summary style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--ink)",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}>
                    {item.q}
                    <span style={{ color: "var(--red)", fontSize: 18, flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, marginTop: 12, paddingRight: 24 }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", padding: "80px 0" }}>
        <div className="container-site" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 40px)", color: "#fff", fontWeight: 600, letterSpacing: "-1px", marginBottom: 16 }}>
            Get a quote built for your practice.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 32 }}>
            Tell us about your specialty, volume, and current billing situation.
            We'll come back with a transparent engagement proposal.
          </p>
          <Link href="/contact" className="btn-primary btn-red" style={{ fontSize: 15, padding: "13px 32px" }}>
            Request a Custom Quote
          </Link>
        </div>
      </section>

    </div>
  );
}
