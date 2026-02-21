export default function DesktopNav() {
  return (
    <div className="flex items-center gap-8 text-sm font-medium text-neutral-700">

      <a href="/" className="hover:text-brand-primary transition">
        Home
      </a>

      <a href="/solutions" className="hover:text-brand-primary transition">
        Solutions
      </a>

      <a href="/providers" className="hover:text-brand-primary transition">
        Providers
      </a>

      <a href="/pricing" className="hover:text-brand-primary transition">
        Pricing
      </a>

      <a href="/company" className="hover:text-brand-primary transition">
        Company
      </a>

      <a href="/security" className="hover:text-brand-primary transition">
        Security
      </a>

      <a href="/careers" className="hover:text-brand-primary transition">
        Careers
      </a>

      <a href="/contact" className="hover:text-brand-primary transition">
        Contact
      </a>

    </div>
  );
}