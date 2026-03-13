import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company — About MEDVOXA",
  description:
    "MEDVOXA was built to bring structured discipline to healthcare revenue cycle management. Learn about our philosophy, approach, and the principles that guide how we work.",
  alternates: { canonical: "https://medvoxa.com/company" },
};

export default function CompanyPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: 680 }}>
            <div className="section-kicker">Our Story</div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-1.5px",
              color: "var(--ink)",
              lineHeight: 1.08,
              marginBottom: 22,
            }}>
              Built to fix a broken system.
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 18 }}>
              Healthcare providers are extraordinary at patient care. Most of them did not go into
              medicine to spend hours chasing denied claims, correcting coding errors, or trying to
              understand why a payer underpaid a procedure by 40%.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78 }}>
              MEDVOXA was built to take that burden off the practice — combining structured claim
              governance with experienced billing expertise so providers can focus on what they
              do best.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ background: "var(--cream)", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">
            <div>
              <div className="section-kicker">Our Philosophy</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 22 }}>
                Revenue cycle management should be a{" "}
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>system,</em>{" "}
                not a scramble.
              </h2>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 18 }}>
                Most medical billing operations are reactive — they respond to denials after they
                happen, fix errors after they're returned, and report on problems after revenue
                has already been lost.
              </p>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 18 }}>
                MEDVOXA is designed around the opposite approach. Claim governance happens before
                submission. Errors are caught internally. Denial patterns are analyzed to close the
                root cause — not just the individual claim.
              </p>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78 }}>
                The result is a billing operation that gets more predictable and more effective
                over time — not one that requires constant firefighting.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Governance before submission", desc: "Every claim is validated against payer-specific rules, coding standards, and compliance requirements before it's filed — not after it's rejected." },
                { title: "Systematic denial response", desc: "Denials aren't worked one at a time. They're categorized, analyzed, and addressed in patterns — so the same denial type stops recurring." },
                { title: "Accountability at every stage", desc: "Every step in the claim lifecycle is documented and traceable. We can answer 'where is this claim?' at any point in the process." },
                { title: "Transparency as standard practice", desc: "Practices deserve to know what's happening with their revenue. Clear reporting and regular communication are not optional extras — they're built in." },
              ].map((item) => (
                <div key={item.title} style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px 24px",
                  display: "flex", gap: 16,
                }}>
                  <div style={{ color: "var(--red)", fontSize: 18, flexShrink: 0, marginTop: 2 }}>◈</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* PLATFORM — Autonomous SaaS+ */}
      <section style={{ background: "#fff", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site" style={{ maxWidth: 820 }}>
          <div className="section-kicker">The Platform</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 20 }}>
            Autonomous SaaS+ — what that means for your practice
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 16 }}>
            "Autonomous SaaS+" describes how MEDVOXA operates differently from traditional billing services
            and from self-service billing software. It's not one or the other.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 36 }} className="two-col">
            <div>
              <div style={{ background: "var(--red-light)", border: "1px solid #f5cfc7", borderRadius: "var(--radius-md)", padding: "20px", marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "var(--red)", marginBottom: 8 }}>Traditional Billing Service</div>
                <p style={{ fontSize: 13.5, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
                  Human-operated workflows, minimal technology, limited visibility into what's happening,
                  and your practice is dependent on the performance of individual billing staff.
                </p>
              </div>
              <div style={{ background: "var(--blue-light)", border: "1px solid var(--blue-mid)", borderRadius: "var(--radius-md)", padding: "20px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "var(--blue)", marginBottom: 8 }}>Self-Service Billing Software</div>
                <p style={{ fontSize: 13.5, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
                  Technology-forward but requires significant internal effort. You still need
                  someone who knows how to use it, interpret the data, and manage the billing work.
                </p>
              </div>
            </div>
            <div style={{ background: "var(--ink)", borderRadius: "var(--radius-lg)", padding: "28px 28px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 12, fontStyle: "italic" }}>
                MEDVOXA Autonomous SaaS+
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20 }}>
                Structured automation handles the predictable, repeatable parts of the revenue cycle.
                Experienced billing professionals handle the judgment calls, appeals, and payer negotiations.
                You get the best of both — without managing either.
              </p>
              {[
                "Systematic automation where it adds reliability",
                "Human expertise where judgment matters",
                "Transparent reporting you can actually read",
                "AMA CPT-licensed coding throughout",
              ].map((pt) => (
                <div key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, fontSize: 13.5, color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "var(--red)", flexShrink: 0 }}>✓</span>
                  {pt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--cream)", padding: "72px 0" }}>
        <div className="container-site" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 36 }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--ink)", fontWeight: 600, letterSpacing: "-0.8px", marginBottom: 12 }}>
              Want to learn more about how MEDVOXA works?
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
              Reach out and we'll walk you through the platform, our process, and how an engagement typically begins.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-red">Request a Demo</Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
