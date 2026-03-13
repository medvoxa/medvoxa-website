"use client";

import { useState, useRef } from "react";

type Status = "idle" | "sending" | "success" | "error";

const SUBJECTS = [
  "Request a Platform Demo",
  "Discuss Managed RCM Services",
  "Get a Custom Pricing Quote",
  "A/R Recovery Inquiry",
  "Technical / Integration Question",
  "Partnership or Referral",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name    = String(data.get("name") || "").trim();
    const email   = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name)    errs.name    = "Name is required";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Valid email required";
    if (!subject) errs.subject = "Please select an inquiry type";
    if (!message || message.length < 20) errs.message = "Message must be at least 20 characters";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});

    // Fingerprint
    const fp = `${navigator.userAgent}|${screen.width}x${screen.height}|${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    data.set("fingerprint", fp);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json();
      if (json.status === "success") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "11px 14px",
    border: `1.5px solid ${errors[field] ? "var(--red)" : "var(--border)"}`,
    borderRadius: "var(--radius-md)",
    fontSize: 14,
    fontFamily: "var(--font-body)",
    color: "var(--ink)",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
  });

  if (status === "success") {
    return (
      <div style={{
        background: "var(--green-light)",
        border: "1px solid #bbf7d0",
        borderRadius: "var(--radius-lg)",
        padding: "40px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ink)", marginBottom: 10, fontWeight: 600 }}>
          Message sent successfully
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7 }}>
          Thank you for reaching out. A member of our team will respond within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            marginTop: 20, background: "none", border: "1px solid var(--border-mid)",
            borderRadius: "var(--radius-md)", padding: "9px 20px",
            fontSize: 13, fontWeight: 500, color: "var(--ink-mid)", cursor: "pointer",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "36px 32px",
        boxShadow: "var(--shadow-sm)",
      }}
      noValidate
    >
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--ink)", marginBottom: 6, letterSpacing: "-0.3px" }}>
        Start a conversation
      </h2>
      <p style={{ fontSize: 14, color: "var(--ink-muted)", marginBottom: 28 }}>
        We respond within one business day.
      </p>

      {/* Honeypot */}
      <input type="text" name="extra_field" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {/* Name + Email row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
        <div>
          <label className="form-label">Full Name *</label>
          <input
            name="name"
            type="text"
            placeholder="Dr. Jane Smith"
            style={inputStyle("name")}
            onFocus={(e) => { e.target.style.borderColor = "var(--ink-mid)"; e.target.style.boxShadow = "0 0 0 3px rgba(26,23,20,0.06)"; }}
            onBlur={(e) => { e.target.style.borderColor = errors.name ? "var(--red)" : "var(--border)"; e.target.style.boxShadow = "none"; }}
          />
          {errors.name && <p style={{ fontSize: 12, color: "var(--red)", marginTop: 4 }}>{errors.name}</p>}
        </div>
        <div>
          <label className="form-label">Email Address *</label>
          <input
            name="email"
            type="email"
            placeholder="you@practice.com"
            style={inputStyle("email")}
            onFocus={(e) => { e.target.style.borderColor = "var(--ink-mid)"; e.target.style.boxShadow = "0 0 0 3px rgba(26,23,20,0.06)"; }}
            onBlur={(e) => { e.target.style.borderColor = errors.email ? "var(--red)" : "var(--border)"; e.target.style.boxShadow = "none"; }}
          />
          {errors.email && <p style={{ fontSize: 12, color: "var(--red)", marginTop: 4 }}>{errors.email}</p>}
        </div>
      </div>

      {/* Practice name */}
      <div style={{ marginBottom: 16 }}>
        <label className="form-label">Practice or Organization</label>
        <input
          name="practice"
          type="text"
          placeholder="Westside Family Medicine"
          style={{ ...inputStyle("practice"), border: "1.5px solid var(--border)" }}
          onFocus={(e) => { e.target.style.borderColor = "var(--ink-mid)"; e.target.style.boxShadow = "0 0 0 3px rgba(26,23,20,0.06)"; }}
          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
        />
      </div>

      {/* Subject */}
      <div style={{ marginBottom: 16 }}>
        <label className="form-label">Inquiry Type *</label>
        <select
          name="subject"
          style={{ ...inputStyle("subject"), cursor: "pointer" }}
          defaultValue=""
        >
          <option value="" disabled>Select inquiry type…</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && <p style={{ fontSize: 12, color: "var(--red)", marginTop: 4 }}>{errors.subject}</p>}
      </div>

      {/* Message */}
      <div style={{ marginBottom: 24 }}>
        <label className="form-label">Message *</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your practice, current billing situation, or what you'd like to discuss…"
          style={{ ...inputStyle("message"), resize: "vertical", lineHeight: 1.6 }}
          onFocus={(e) => { e.target.style.borderColor = "var(--ink-mid)"; e.target.style.boxShadow = "0 0 0 3px rgba(26,23,20,0.06)"; }}
          onBlur={(e) => { e.target.style.borderColor = errors.message ? "var(--red)" : "var(--border)"; e.target.style.boxShadow = "none"; }}
        />
        {errors.message && <p style={{ fontSize: 12, color: "var(--red)", marginTop: 4 }}>{errors.message}</p>}
      </div>

      {status === "error" && (
        <div style={{
          background: "#fef2f2", border: "1px solid #fecaca",
          borderRadius: "var(--radius-md)", padding: "12px 16px",
          fontSize: 13, color: "#991b1b", marginBottom: 16,
        }}>
          Something went wrong. Please try again or email us at hello@medvoxa.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          width: "100%",
          padding: "13px 24px",
          background: status === "sending" ? "var(--ink-light)" : "var(--red)",
          color: "#fff",
          border: "none",
          borderRadius: "var(--radius-md)",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "var(--font-body)",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p style={{ fontSize: 12, color: "var(--ink-muted)", textAlign: "center", marginTop: 14 }}>
        Your information is kept confidential and never shared with third parties.
      </p>

      <style>{`
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
