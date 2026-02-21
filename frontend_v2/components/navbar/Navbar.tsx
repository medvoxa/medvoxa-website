"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-[1400px] mx-auto pl-12 pr-8 py-5 flex items-center justify-between">

        {/* Wordmark */}
        <Link
          href="/"
          className="text-white text-[1.5rem] font-semibold tracking-[0.28em] leading-none"
          style={{ fontFamily: '"Yu Gothic UI", "Yu Gothic", sans-serif' }}
        >
          medvoxa
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">

          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <Link href="/solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>

          <Link href="/providers" className="hover:text-white transition-colors">
            Providers
          </Link>

          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>

          <Link href="/company" className="hover:text-white transition-colors">
            Company
          </Link>

          <Link href="/security" className="hover:text-white transition-colors">
            Security
          </Link>

          <Link href="/careers" className="hover:text-white transition-colors">
            Careers
          </Link>

          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1124] px-8 py-6 space-y-4 text-sm text-slate-300">

          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Home
          </Link>

          <Link href="/solutions" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Solutions
          </Link>

          <Link href="/providers" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Providers
          </Link>

          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Pricing
          </Link>

          <Link href="/company" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Company
          </Link>

          <Link href="/security" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Security
          </Link>

          <Link href="/careers" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Careers
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Contact
          </Link>

        </div>
      )}
    </header>
  );
}