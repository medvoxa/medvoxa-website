"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    // Honeypot bot detection
    if (formData.get("extra_field")) {
      setStatus("bot");
      setLoading(false);
      return;
    }

    // Lightweight fingerprint
    const fingerprint = {
      ua: navigator.userAgent,
      lang: navigator.language,
      platform: navigator.platform,
      ts: Date.now(),
    };
    formData.append("fingerprint", JSON.stringify(fingerprint));

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.status === "success") {
      setStatus("success");
      formRef.current?.reset(); 
    } else {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-2"
    >
      {/* Honeypot */}
      <input type="text" name="extra_field" className="hidden" tabIndex={-1} />

      {/* NAME */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={() => setStatus("")}
        className="w-full rounded-md border border-neutral-300 px-2.5 py-2 text-sm focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/30 focus:ring-1 transition"
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        onChange={() => setStatus("")}
        className="w-full rounded-md border border-neutral-300 px-2.5 py-2 text-sm focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/30 focus:ring-1 transition"
      />

      {/* SUBJECT */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        onChange={() => setStatus("")}
        className="w-full rounded-md border border-neutral-300 px-2.5 py-2 text-sm focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/30 focus:ring-1 transition"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Your Message"
        rows={3}
        required
        onChange={() => setStatus("")}
        className="w-full rounded-md border border-neutral-300 px-2.5 py-2 text-sm focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/30 focus:ring-1 transition"
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md text-white text-sm font-medium transition shadow-sm
          ${
            loading
              ? "bg-neutral-400 cursor-not-allowed"
              : "bg-[var(--brand-primary)] hover:bg-[#4a2c21]"
          }`}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>

      {/* FEEDBACK MESSAGES */}
      {status === "success" && (
        <p className="text-green-600 text-sm">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      {status === "bot" && (
        <p className="text-red-600 text-sm">Bot activity detected.</p>
      )}
    </form>
  );
}
