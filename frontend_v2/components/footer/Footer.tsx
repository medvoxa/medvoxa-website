// components/footer/Footer.tsx

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="MEDVOXA Logo" width={150} height={40} />
          <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
            MEDVOXA — AI-powered RCM platform built for modern healthcare providers.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
          <ul className="space-y-2 text-neutral-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/investors">Investors</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold text-neutral-900 mb-4">Solutions</h4>
          <ul className="space-y-2 text-neutral-600">
            <li><Link href="/solutions/rcm-automation">RCM Automation</Link></li>
            <li><Link href="/solutions/intelligent-claims">Intelligent Claims Engine</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-neutral-600">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/security">Data Security</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} MEDVOXA. All rights reserved.
      </div>
    </footer>
  );
}
