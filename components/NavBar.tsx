'use client';

import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-[#C9B8AE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span
              className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center text-sm"
              aria-hidden="true"
            >
              M
            </span>
            <span className="leading-none text-[#2A2220]">MEDVOXA</span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Us</a>   {/* ← Added */}
            <a href="/services" className="hover:underline">Our Services</a>
            <a href="/providers" className="hover:underline">Providers &amp; Hospitals</a>
            <a href="/investors" className="hover:underline">Investors</a>
            <a href="/careers" className="hover:underline">Careers</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>

          {/* CTA Button */}
          <Button
            className="rounded-2xl px-4 py-2 text-sm"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "/contact";
            }}
            aria-label="Request a demo"
          >
            Get a demo
          </Button>

        </div>
      </div>
    </header>
  );
}
