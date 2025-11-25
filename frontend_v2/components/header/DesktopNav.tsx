export default function DesktopNav() {
  return (
    <div className="flex items-center gap-8 text-sm font-medium text-neutral-700">
      <a href="/" className="hover:text-brand-primary">Home</a>
      <a href="/about" className="hover:text-brand-primary">About</a>
      <a href="/solutions" className="hover:text-brand-primary">Solutions</a>
      <a href="/providers" className="hover:text-brand-primary">Providers</a>
      <a href="/partner-program" className="hover:text-brand-primary">Partner Program</a>
      <a href="/pricing" className="hover:text-brand-primary">Pricing</a>
      <a href="/investors" className="hover:text-brand-primary">Investors</a>
      <a href="/careers" className="hover:text-brand-primary">Careers</a>
      <a href="/contact" className="hover:text-brand-primary">Contact</a>
    </div>
  );
}
