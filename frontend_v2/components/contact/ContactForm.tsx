"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    // Honeypot bot detection
    const honeypot = formData.get("extra_field");
    if (honeypot) {
      setStatus("bot");
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
    setStatus(result.status);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Hidden anti-bot honeypot field */}
      <input
        type="text"
        name="extra_field"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full border p-3 rounded"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        className="w-full py-3 rounded bg-[var(--brand-primary)] text-white font-semibold"
      >
        Send Message
      </button>

      {status === "success" && (
        <p className="text-green-600 font-medium">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-red-600 font-medium">Something went wrong.</p>
      )}

      {status === "bot" && (
        <p className="text-red-600 font-medium">Bot activity detected.</p>
      )}
    </form>
  );
}
