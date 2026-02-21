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
      className="space-y-3"
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
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition"
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        onChange={() => setStatus("")}
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition"
      />

      {/* SUBJECT */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        onChange={() => setStatus("")}
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Your Message"
        rows={3}
        required
        onChange={() => setStatus("")}
        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition resize-none"
      />

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md text-sm font-medium transition
          ${
            loading
              ? "bg-white/20 text-white/60 cursor-not-allowed"
              : "bg-[#4FD1C5] text-black hover:opacity-90"
          }`}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>

      {/* STATUS */}
      {status === "success" && (
        <p className="text-emerald-400 text-xs">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-xs">
          Something went wrong. Please try again.
        </p>
      )}

      {status === "bot" && (
        <p className="text-red-400 text-xs">Bot activity detected.</p>
      )}
    </form>
  );
}