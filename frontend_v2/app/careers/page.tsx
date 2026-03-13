import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Join the MEDVOXA Team",
  description:
    "MEDVOXA is building a team of healthcare billing experts and technologists. Explore open roles and learn about our culture and mission.",
  alternates: { canonical: "https://medvoxa.com/careers" },
};

export default function CareersPage() {
  return (
    <div>
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site" style={{ maxWidth: 680 }}>
          <div className="section-kicker">Careers</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 50px)",
            fontWeight: 600,
            letterSpacing: "-1.5px",
            color: "var(--ink)",
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Build the future of healthcare billing.
          </h1>
          <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 16 }}>
            MEDVOXA is in active development and building a team of healthcare billing professionals,
            engineers, and operations specialists who want to fix one of healthcare's most persistent
            administrative problems.
          </p>
          <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78 }}>
            We're a small, focused team — so the work you do here matters from day one.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--cream)", padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="two-col">
            {[
              { area: "Billing & Coding", roles: ["Medical Billing Specialist", "Certified Professional Coder (CPC)", "Denial Management Specialist", "A/R Follow-up Coordinator"] },
              { area: "Operations", roles: ["Revenue Cycle Manager", "Client Success Manager", "Onboarding Specialist", "Practice Liaison"] },
              { area: "Technology", roles: ["Full-Stack Engineer (Next.js / TypeScript)", "Backend Engineer", "Healthcare Integrations Engineer (HL7 / FHIR)", "Data Engineer"] },
              { area: "Leadership", roles: ["Director of Revenue Cycle", "Director of Client Success", "Head of Compliance", "VP of Operations"] },
            ].map((group) => (
              <div key={group.area} className="card" style={{ padding: "28px 28px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>
                  {group.area}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {group.roles.map((role) => (
                    <li key={role} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-mid)", fontWeight: 500 }}>
                      <span style={{ color: "var(--red)", flexShrink: 0 }}>→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>
              No specific role listed that matches you?
            </h3>
            <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
              We're building the team thoughtfully. If you have deep expertise in healthcare billing,
              healthcare technology, or revenue cycle operations — we want to hear from you.
            </p>
            <Link href="/contact" className="btn-primary btn-red">
              Send a General Application
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  );
}
