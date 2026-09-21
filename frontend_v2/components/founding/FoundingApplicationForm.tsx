"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function FoundingApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const practiceName = String(
      formData.get("practice_name") || ""
    ).trim();

    const specialty = String(
      formData.get("specialty") || ""
    ).trim();

    const locations = String(
      formData.get("locations") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const notes = String(
      formData.get("notes") || ""
    ).trim();

    /*
     * The Founding form intentionally uses the existing
     * Contact API / Resend infrastructure.
     *
     * The Contact API expects:
     *   name
     *   email
     *   practice
     *   subject
     *   message
     */
    const contactData = new FormData();

    contactData.set("name", practiceName);
    contactData.set("email", email);
    contactData.set("practice", practiceName);
    contactData.set("subject", "Founding Practice Application");

    contactData.set(
      "message",
      [
        "Founding Practice Application",
        "",
        `Practice Name: ${practiceName}`,
        `Primary Specialty: ${specialty}`,
        `Number of Locations: ${locations}`,
        `Work Email: ${email}`,
        "",
        "Current Billing Challenges:",
        notes,
      ].join("\n")
    );

    /*
     * Reuse the same fingerprint mechanism as Contact Us.
     */
    const fingerprint = [
      navigator.userAgent,
      `${screen.width}x${screen.height}`,
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    ].join("|");

    contactData.set("fingerprint", fingerprint);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: contactData,
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("[MEDVOXA founding form]", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="founding-success">
        <div
          style={{
            fontSize: 30,
            marginBottom: 12,
          }}
        >
          ✓
        </div>

        <h3
          style={{
            fontFamily: "var(--display)",
            fontSize: 24,
            fontWeight: 500,
            margin: "0 0 8px",
          }}
        >
          Application submitted successfully.
        </h3>

        <p
          style={{
            color: "var(--muted)",
            fontSize: 13,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Thank you for your interest in the MEDVOXA Founding Practice
          Program. A member of our team will review your application and
          respond within one business day.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="m-btn m-btn-outline"
          style={{
            marginTop: 18,
          }}
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 founding-form"
    >
      <input
        name="practice_name"
        placeholder="Practice Name"
        required
        className="founding-input"
        disabled={status === "sending"}
      />

      <input
        name="specialty"
        placeholder="Primary Specialty"
        required
        className="founding-input"
        disabled={status === "sending"}
      />

      <input
        name="locations"
        placeholder="Number of Locations"
        required
        className="founding-input"
        disabled={status === "sending"}
      />

      <input
        name="email"
        type="email"
        placeholder="Work Email"
        required
        className="founding-input"
        disabled={status === "sending"}
      />

      <textarea
        name="notes"
        placeholder="Briefly describe your current billing challenges"
        rows={3}
        required
        className="founding-input"
        disabled={status === "sending"}
      />

      {status === "error" && (
        <p className="founding-error">
          Submission failed. Please try again or contact us directly at
          hello@medvoxa.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`founding-submit transition ${
          status === "sending" ? "is-loading" : "is-ready"
        }`}
      >
        {status === "sending"
          ? "Submitting..."
          : "Submit Application"}
      </button>
    </form>
  );
}