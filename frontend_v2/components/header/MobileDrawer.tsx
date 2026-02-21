"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MENU BUTTON */}
      <button onClick={() => setOpen(true)}>
        <Menu size={26} className="text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999] bg-[#0A0F1F] text-white p-6">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-10">
            <img
              src="/logo.png"
              alt="MEDVOXA"
              className="h-9 object-contain"
            />

            <button onClick={() => setOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-6 text-lg font-medium">

            <a href="/" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Home
            </a>

            <a href="/solutions" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Solutions
            </a>

            <a href="/providers" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Providers
            </a>

            <a href="/pricing" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Pricing
            </a>

            <a href="/company" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Company
            </a>

            <a href="/security" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Security
            </a>

            <a href="/careers" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Careers
            </a>

            <a href="/contact" onClick={() => setOpen(false)} className="hover:text-[#4FD1C5] transition">
              Contact
            </a>

          </nav>

        </div>
      )}
    </>
  );
}