"use client";

import Link from "next/link";

const FOOTER_LINKS = {
  Services: [
    { label: "Charge Capture & Coding",     href: "/services" },
    { label: "Claim Scrubbing & Filing",    href: "/services" },
    { label: "Denial Management",           href: "/services" },
    { label: "Payment Reconciliation",      href: "/services" },
    { label: "Patient Billing & A/R",       href: "/services" },
    { label: "Analytics & Reporting",       href: "/services" },
  ],
  Solutions: [
    { label: "For Physician Practices",     href: "/solutions" },
    { label: "For Specialty Groups",        href: "/solutions" },
    { label: "For Healthcare Facilities",   href: "/solutions" },
    { label: "RCM Automation",             href: "/solutions/rcm-automation" },
    { label: "Intelligent Claims",         href: "/solutions/intelligent-claims" },
  ],
  Company: [
    { label: "About MEDVOXA",   href: "/company" },
    { label: "Careers",         href: "/careers" },
    { label: "Security",        href: "/security" },
    { label: "Pricing",         href: "/pricing" },
    { label: "Contact",         href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy",    href: "/privacy" },
    { label: "Terms of Service",  href: "/terms" },
    { label: "HIPAA Notice",      href: "/hipaa" },
    { label: "Cookie Policy",     href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.45)" }}>

      {/* Main footer body */}
      <div className="container-site" style={{ paddingTop: 72, paddingBottom: 60 }}>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 80, alignItems: "start" }} className="footer-main">

          {/* Brand column */}
          <div>
            <img src="/logo-dark.svg" alt="MEDVOXA" style={{ height: 40, width: "auto", marginBottom: 20 }} />
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", marginBottom: 24, maxWidth: 260 }}>
              Autonomous SaaS+ platform for healthcare revenue cycle management.
              Built for independent practices and specialty groups.
            </p>

            {/* Trust chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { dot: "#16a34a", text: "AMA CPT Licensed Platform" },
                { dot: "rgba(255,255,255,0.3)", text: "HIPAA Compliant Workflows" },
                { dot: "rgba(255,255,255,0.3)", text: "Now Onboarding Practices" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                  {item.text}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <a
                href="mailto:hello@medvoxa.com"
                style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 500, transition: "color 0.15s" }}
              >
                hello@medvoxa.com
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }} className="footer-links">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: 18,
                }}>
                  {section}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: 13.5,
                          color: "rgba(255,255,255,0.45)",
                          textDecoration: "none",
                          lineHeight: 1.4,
                          transition: "color 0.15s",
                          display: "block",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-site" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 20, paddingBottom: 20, gap: 20, flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} MEDVOXA. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: 1.5, textTransform: "uppercase" }}>
            Autonomous Revenue Cycle Management
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-main { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-links { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .footer-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
