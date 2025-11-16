'use client';

import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-semibold text-xl">
            <span className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center">
              M
            </span>
            MEDVOXA
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/vision">Vision</a>
            <a href="/#engine">Engine</a>
            <a href="/#value">Value</a>
            <a href="/#how">How</a>
            <a href="/#security">Security</a>
            <a href="/story">Our Story</a>
            <a href="/#contact">Contact</a>
          </nav>

          {/* Smooth scroll to #contact on the SAME page */}
          <Button
            className="rounded-2xl"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "/#contact"; // fallback for subpages
            }}
          >
            Get a demo
          </Button>

        </div>
      </div>
    </header>
  );
}
