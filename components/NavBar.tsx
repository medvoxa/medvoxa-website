'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // prevent background scroll while drawer is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [open]);

  const NavLinks = (
    <>
      <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        Home
      </Link>
      <Link href="/about" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        About Us
      </Link>
      <Link href="/services" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        Our Services
      </Link>
      <Link href="/providers" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        Providers &amp; Hospitals
      </Link>
      <Link href="/investors" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        Investors
      </Link>
      <Link href="/careers" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        Careers
      </Link>
      <Link href="/contact" onClick={() => setOpen(false)} className="block px-4 py-3 hover:underline">
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-[#C9B8AE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span
              className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center text-sm"
              aria-hidden="true"
            >
              M
            </span>
            <span className="leading-none text-[#2A2220]">MEDVOXA</span>
          </Link>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/services" className="hover:underline">Our Services</Link>
            <Link href="/providers" className="hover:underline">Providers &amp; Hospitals</Link>
            <Link href="/investors" className="hover:underline">Investors</Link>
            <Link href="/careers" className="hover:underline">Careers</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
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

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2"
            >
              {open ? (
                /* Close Icon */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6L18 18M6 18L18 6" stroke="#2A2220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="#2A2220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        {/* Panel */}
        <aside
          className={`fixed right-0 top-0 h-full w-[82%] max-w-xs bg-white/95 shadow-2xl border-l border-[#C9B8AE] p-6 transform transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 font-semibold text-lg">
              <span className="h-8 w-8 rounded-2xl bg-[#5A3A2E] text-white grid place-items-center text-sm" aria-hidden>
                M
              </span>
              <span className="leading-none text-[#2A2220]">MEDVOXA</span>
            </Link>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18M6 18L18 6" stroke="#2A2220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col text-sm space-y-1">
            {NavLinks}
          </nav>

          <div className="mt-6 border-t border-[#E6DACE] pt-6">
            <Button
              className="w-full rounded-xl px-4 py-3 text-sm"
              onClick={() => {
                setOpen(false);
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/contact";
              }}
            >
              Get a demo
            </Button>
          </div>

          <div className="mt-5 text-xs text-[#6A5045]">
            <a href="mailto:hello@medvoxa.com" onClick={() => setOpen(false)} className="block py-1 hover:underline">
              hello@medvoxa.com
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
