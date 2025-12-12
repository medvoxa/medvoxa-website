// frontend_v2/components/footer/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F7] border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + TAGLINE */}
        <div>
          <img
            src="/logo.png"
            alt="MEDVOXA"
            className="h-10 mb-3"
          />
          <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
            MEDVOXA — AI-powered RCM intelligence platform
            built for modern healthcare providers.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-[#1D1A18] font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="/careers" className="hover:text-[#1D1A18]">Careers</a></li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-[#1D1A18] font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="/solutions" className="hover:text-[#1D1A18]">RCM Automation</a></li>
            <li><a href="/solutions" className="hover:text-[#1D1A18]">Intelligent Claims Engine</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-[#1D1A18] font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="/privacy" className="hover:text-[#1D1A18]">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-[#1D1A18]">Terms of Service</a></li>
            <li><a href="/security" className="hover:text-[#1D1A18]">Data Security</a></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-neutral-200 py-4">
        <p className="text-center text-xs text-neutral-500">
          © 2025 MEDVOXA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
