'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/services" className="hover:underline">Our Services</a>
            <a href="/providers" className="hover:underline">Providers & Hospitals</a>
            <a href="/investors" className="hover:underline">Investors</a>
            <a href="/careers" className="hover:underline">Careers</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>

          {/* CTA (desktop only) */}
          <div className="hidden md:block">
            <Button
              className="rounded-2xl px-4 py-2 text-sm"
              onClick={() => window.location.href = "/contact"}
            >
              Get a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2A2220]"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#EFE7E2] text-[#2A2220] px-6 py-6 animate-fadeIn">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center text-sm">
                M
              </span>
              <span>MEDVOXA</span>
            </div>

            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="p-2">
              <X size={26} />
            </button>
          </div>

          {/* MOBILE MENU LINKS */}
          <nav className="flex flex-col gap-5 text-lg font-medium">
            <a onClick={() => setOpen(false)} href="/">Home</a>
            <a onClick={() => setOpen(false)} href="/about">About Us</a>
            <a onClick={() => setOpen(false)} href="/services">Our Services</a>
            <a onClick={() => setOpen(false)} href="/providers">Providers & Hospitals</a>
            <a onClick={() => setOpen(false)} href="/investors">Investors</a>
            <a onClick={() => setOpen(false)} href="/careers">Careers</a>
            <a onClick={() => setOpen(false)} href="/contact">Contact</a>
          </nav>

          {/* CTA */}
          <div className="mt-10">
            <Button
              className="w-full rounded-xl py-3"
              onClick={() => window.location.href = "/contact"}
            >
              Get a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
