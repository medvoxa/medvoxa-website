"use client";

import { useState } from "react";

export default function FoundingApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    const res = await fetch("/api/founding", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.status === "success") {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }

    setLoading(false);
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
      />

      <input
        name="specialty"
        placeholder="Primary Specialty"
        required
        className="founding-input"
      />

      <input
        name="locations"
        placeholder="Number of Locations"
        required
        className="founding-input"
      />

      <input
        name="email"
        type="email"
        placeholder="Work Email"
        required
        className="founding-input"
      />

      <textarea
        name="notes"
        placeholder="Briefly describe your current billing challenges"
        rows={3}
        required
        className="founding-input"
      />

      <button
        type="submit"
        disabled={loading}
        className={`founding-submit transition
        ${
          loading
            ? "is-loading"
            : "is-ready"
        }`}
      >
        {loading ? "Submitting…" : "Submit Application"}
      </button>

      {status === "success" && (
        <p className="founding-success">
          Application submitted successfully.
        </p>
      )}

      {status === "error" && (
        <p className="founding-error">
          Submission failed. Please try again.
        </p>
      )}
    </form>
  );
}