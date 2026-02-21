"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070F24] text-slate-300 border-t border-white/5">

      <div className="max-w-[1200px] mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT — BRAND */}
          <div className="space-y-4 max-w-sm">

            <div className="text-lg tracking-[0.35em] font-medium text-white">
              MEDVOXA
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Structured claim preparation and governance automation
              built for independent practices and specialty providers.
            </p>

          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/company" className="hover:text-white transition">
                  About MEDVOXA
                </Link>
              </li>

              <li>
                <Link href="/founding" className="hover:text-white transition">
                  Founding Program
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* TRUST */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Trust
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/security" className="hover:text-white transition">
                  Security
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>

            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex justify-between items-center text-xs text-slate-500">

          <span>© {new Date().getFullYear()} MEDVOXA</span>

          <span className="tracking-widest uppercase text-slate-600">
            Autonomous Revenue Intelligence
          </span>

        </div>
      </div>

    </footer>
  );
}