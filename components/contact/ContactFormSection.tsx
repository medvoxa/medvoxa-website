"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      organization: form.get("organization"),
      inquiryType: form.get("inquiryType"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.success) {
      setStatus("Thank you! Your message has been sent.");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="pb-16">
      <div className="max-w-3xl mx-auto px-6">

        <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm
                        border border-[#C9B8AE] shadow-sm">

          <h2 className="text-2xl font-bold text-[#2A2220] mb-6 text-center">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-[#C9B8AE] 
                         bg-white/70 text-[#2A2220] focus:outline-none"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-[#C9B8AE] 
                         bg-white/70 text-[#2A2220] focus:outline-none"
            />

            {/* Phone */}
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-[#C9B8AE] 
                         bg-white/70 text-[#2A2220] focus:outline-none"
            />

            {/* Organization */}
            <input
              name="organization"
              type="text"
              placeholder="Organization / Clinic / Company"
              className="w-full px-4 py-3 rounded-xl border border-[#C9B8AE] 
                         bg-white/70 text-[#2A2220] focus:outline-none"
            />

            {/* Inquiry Type */}
            <select
              name="inquiryType"
              className="w-full px-4 py-3 rounded-xl border border-[#C9B8AE] 
                         bg-white/70 text-[#2A2220] focus:outline-none"
            >
              <option>General Inquiry</option>
              <option>Provider / Hospital</option>
              <option>Investor</option>
              <option>Career / Hiring</option>
              <option>Partnership</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-[#C9B8AE] 
                         bg-white/70 text-[#2A2220] focus:outline-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 w-full rounded-xl 
                         bg-[#5A3A2E] text-white font-medium
                         hover:bg-[#7B5243] transition-colors"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>

          {status && (
            <p className="text-center mt-4 text-[#2A2220] font-medium">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
