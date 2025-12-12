"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MEDVOXA" className="h-10" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-neutral-700">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/solutions" className="hover:text-black">Solutions</Link>
          <Link href="/providers" className="hover:text-black">Providers</Link>
          <Link href="/pricing" className="hover:text-black">Pricing</Link>
          <Link href="/careers" className="hover:text-black">Careers</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-neutral-800"></span>
          <span className="w-6 h-0.5 bg-neutral-800"></span>
          <span className="w-6 h-0.5 bg-neutral-800"></span>
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3 text-sm text-neutral-700">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link href="/solutions" onClick={() => setMenuOpen(false)} className="block">Solutions</Link>
          <Link href="/providers" onClick={() => setMenuOpen(false)} className="block">Providers</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block">Pricing</Link>
          <Link href="/careers" onClick={() => setMenuOpen(false)} className="block">Careers</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}
