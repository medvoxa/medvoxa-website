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
      className="space-y-3"
    >
      <input
        name="practice_name"
        placeholder="Practice Name"
        required
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#4FD1C5]"
      />

      <input
        name="specialty"
        placeholder="Primary Specialty"
        required
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#4FD1C5]"
      />

      <input
        name="locations"
        placeholder="Number of Locations"
        required
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#4FD1C5]"
      />

      <input
        name="email"
        type="email"
        placeholder="Work Email"
        required
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#4FD1C5]"
      />

      <textarea
        name="notes"
        placeholder="Briefly describe your current billing challenges"
        rows={3}
        required
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#4FD1C5]"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md text-sm font-medium transition
        ${
          loading
            ? "bg-neutral-600 cursor-not-allowed"
            : "bg-[#4FD1C5] text-black hover:opacity-90"
        }`}
      >
        {loading ? "Submitting…" : "Submit Application"}
      </button>

      {status === "success" && (
        <p className="text-emerald-400 text-sm">
          Application submitted successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Submission failed. Please try again.
        </p>
      )}
    </form>
  );
}