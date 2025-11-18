'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-[#C9B8AE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center text-sm">
              M
            </span>
            <span className="leading-none text-[#2A2220]">MEDVOXA</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/services" className="hover:underline">Our Services</a>
            <a href="/providers" className="hover:underline">Providers &amp; Hospitals</a>
            <a href="/investors" className="hover:underline">Investors</a>
            <a href="/careers" className="hover:underline">Careers</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>

          {/* CTA (Desktop only) */}
          <div className="hidden md:block">
            <Button
              className="rounded-2xl px-4 py-2 text-sm"
              onClick={() => (window.location.href = "/contact")}
            >
              Get a demo
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} className="text-[#2A2220]" />
          </button>
        </div>
      </div>

      {/* --- MOBILE DRAWER --- */}
      {open && (
        <div className="fixed inset-0 z-[999] 
                        bg-[#E8DCD5] backdrop-blur-md 
                        px-6 py-6 overflow-y-auto shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-semibold text-lg flex items-center gap-2">
              <span className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center text-sm">
                M
              </span>
              <span className="text-[#2A2220]">MEDVOXA</span>
            </span>

            <button onClick={() => setOpen(false)}>
              <X size={34} className="text-[#2A2220]" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-6 text-xl font-semibold text-[#2A2220]">
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="/about" onClick={() => setOpen(false)}>About Us</a>
            <a href="/services" onClick={() => setOpen(false)}>Our Services</a>
            <a href="/providers" onClick={() => setOpen(false)}>Providers & Hospitals</a>
            <a href="/investors" onClick={() => setOpen(false)}>Investors</a>
            <a href="/careers" onClick={() => setOpen(false)}>Careers</a>
            <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              className="w-full rounded-xl py-3 bg-[#5A3A2E] text-white text-lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Get a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
