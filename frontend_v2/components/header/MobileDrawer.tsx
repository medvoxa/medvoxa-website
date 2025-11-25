"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Menu size={28} className="text-neutral-900" />
      </button>

      {open && (
        <div className="fixed inset-0 bg-white z-[999] p-6">

          {/* Top Row */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="MEDVOXA" className="h-8 w-auto" />
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={32} className="text-neutral-900" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="/about" onClick={() => setOpen(false)}>About</a>
            <a href="/solutions" onClick={() => setOpen(false)}>Solutions</a>
            <a href="/providers" onClick={() => setOpen(false)}>Providers</a>
            <a href="/partner-program" onClick={() => setOpen(false)}>Partner Program</a>
            <a href="/pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="/investors" onClick={() => setOpen(false)}>Investors</a>
            <a href="/careers" onClick={() => setOpen(false)}>Careers</a>
            <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>

        </div>
      )}
    </>
  );
}
