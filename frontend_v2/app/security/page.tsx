import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security — Data Privacy & HIPAA Compliance",
  description:
    "MEDVOXA maintains HIPAA-compliant data handling practices, secure infrastructure, and strict access controls to protect patient health information throughout the billing lifecycle.",
  alternates: { canonical: "https://medvoxa.com/security" },
};

export default function SecurityPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site" style={{ maxWidth: 700 }}>
          <div className="section-kicker">Security & Compliance</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 50px)",
            fontWeight: 600,
            letterSpacing: "-1.5px",
            color: "var(--ink)",
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Patient data handled with the care it deserves.
          </h1>
          <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78 }}>
            MEDVOXA handles Protected Health Information (PHI) as part of normal billing operations.
            We treat data security not as a compliance checkbox but as a core operational responsibility.
          </p>
        </div>
      </section>

      {/* COMPLIANCE OVERVIEW */}
      <section style={{ background: "var(--cream)", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col">
            <div>
              <div className="section-kicker">HIPAA Compliance</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.8px", color: "var(--ink)", marginBottom: 20 }}>
                Built for regulated healthcare environments
              </h2>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 16 }}>
                As a Business Associate under HIPAA, MEDVOXA maintains the administrative,
                physical, and technical safeguards required to handle PHI in the course of
                providing billing services.
              </p>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78 }}>
                Business Associate Agreements (BAAs) are executed with every practice before
                any patient data is accessed or transmitted.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Business Associate Agreement", desc: "BAA executed with every client before any PHI access. Standard agreement or client-provided BAA accepted." },
                { title: "Minimum Necessary Standard", desc: "Access to patient information is limited to what is necessary for billing purposes — no broader data collection." },
                { title: "Breach Notification Protocol", desc: "Defined incident response and breach notification procedures aligned with HIPAA Breach Notification Rule requirements." },
                { title: "Staff Training & Access Controls", desc: "All staff with PHI access receive HIPAA training. Role-based access controls limit data exposure to billing team members." },
                { title: "Audit Logging", desc: "System access and data handling activities are logged to support compliance review and investigation if needed." },
              ].map((item) => (
                <div key={item.title} style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px 22px",
                  display: "flex", gap: 14,
                }}>
                  <span style={{ color: "var(--red)", fontSize: 16, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>{item.title}</div>
                    <p style={{ fontSize: 13, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* DATA HANDLING */}
      <section style={{ background: "#fff", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div className="section-kicker">Data Handling Practices</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.8px", color: "var(--ink)", marginBottom: 40 }}>
            How we handle patient information
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="three-col">
            {[
              { icon: "◈", title: "Transmission Security", desc: "All data transmitted between MEDVOXA systems, payer clearinghouses, and client systems uses encrypted connections. PHI is never transmitted in plain text." },
              { icon: "◉", title: "Data Storage", desc: "Patient data is stored in access-controlled environments with encryption at rest. Retention policies align with applicable state and federal requirements." },
              { icon: "◎", title: "Third-Party Vendors", desc: "Any subcontractors or technology vendors that may access PHI in the course of providing services to MEDVOXA are required to execute their own BAAs." },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px" }}>
                <div style={{ fontSize: 20, color: "var(--red)", marginBottom: 14, fontFamily: "monospace" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .three-col { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* DEVELOPMENT NOTICE */}
      <section style={{ background: "var(--blue-light)", padding: "40px 0", borderTop: "1px solid var(--blue-mid)", borderBottom: "1px solid var(--blue-mid)" }}>
        <div className="container-site">
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--blue)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, marginTop: 2 }}>i</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--blue)", marginBottom: 4 }}>Platform in Active Development</div>
              <p style={{ fontSize: 14, color: "#1e40af", lineHeight: 1.7, margin: 0 }}>
                MEDVOXA is currently in active development. Third-party security audits and certifications
                (SOC 2, etc.) will be pursued prior to full production deployment. Our compliance
                architecture is being designed to meet these standards from the ground up.
                Contact us to discuss our current compliance posture for your evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--cream)", padding: "72px 0" }}>
        <div className="container-site" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.5px", marginBottom: 10 }}>
              Have compliance or security questions?
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
              We're happy to discuss our security posture, provide our BAA template, or answer
              specific compliance questions from your legal or IT team.
            </p>
          </div>
          <Link href="/contact" className="btn-primary btn-red" style={{ flexShrink: 0 }}>
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
