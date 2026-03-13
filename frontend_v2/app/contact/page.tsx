import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Talk to the MEDVOXA Team",
  description:
    "Connect with MEDVOXA to discuss your practice's revenue cycle challenges, request a platform demo, or explore engagement options.",
  alternates: { canonical: "https://medvoxa.com/contact" },
};

export default function ContactPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-top">
            <div>
              <div className="section-kicker">Get in Touch</div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-1.5px",
                color: "var(--ink)",
                lineHeight: 1.1,
                marginBottom: 20,
              }}>
                Let's talk about your practice's billing.
              </h1>
              <p style={{ fontSize: 15, color: "var(--ink-light)", lineHeight: 1.78, marginBottom: 32 }}>
                Whether you're dealing with high denial rates, slow collections, or simply want
                to understand what better revenue cycle management looks like for your specialty —
                we're here to have a straightforward conversation.
              </p>

              {/* What to expect */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--ink-muted)", margin: 0 }}>
                  What happens next
                </p>
                {[
                  { num: "1", text: "We respond within one business day" },
                  { num: "2", text: "A brief call to understand your practice's billing situation" },
                  { num: "3", text: "A tailored proposal — no generic packages" },
                ].map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: "var(--red-light)", border: "1.5px solid #f5cfc7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700, color: "var(--red)",
                      fontFamily: "var(--font-display)", fontStyle: "italic",
                      flexShrink: 0,
                    }}>
                      {step.num}
                    </div>
                    <p style={{ fontSize: 14, color: "var(--ink-mid)", lineHeight: 1.6, margin: 0, paddingTop: 4 }}>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct email */}
              <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid var(--border)" }}>
                <p style={{ fontSize: 13, color: "var(--ink-muted)", marginBottom: 6 }}>Prefer email directly?</p>
                <a
                  href="mailto:hello@medvoxa.com"
                  style={{ fontSize: 16, color: "var(--ink)", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-display)" }}
                >
                  hello@medvoxa.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-top { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* Engagement types strip */}
      <section style={{ background: "var(--cream)", padding: "64px 0" }}>
        <div className="container-site">
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 28, textAlign: "center" }}>
            Common reasons practices reach out
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="contact-reasons">
            {[
              { icon: "◈", title: "Platform Demo", desc: "See MEDVOXA's claim governance platform in action and ask questions about your specialty." },
              { icon: "◉", title: "Billing Assessment", desc: "Share your current billing challenges. We'll identify gaps and explain how we address them." },
              { icon: "◎", title: "Custom Pricing", desc: "Get a quote built for your practice size, specialty, and payer mix — no generic packages." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 20, color: "var(--red)", marginBottom: 12, fontFamily: "monospace" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-reasons { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

    </div>
  );
}
