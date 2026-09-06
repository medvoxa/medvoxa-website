import Link from "next/link";
const GROUPS = {
  Services:[["RCM Services","/services"],["Denial Management","/services"],["Payment Reconciliation","/services"],["Analytics","/services"]],
  Solutions:[["For Practices","/solutions"],["For Specialty Groups","/solutions"],["RCM Automation","/solutions/rcm-automation"],["Intelligent Claims","/solutions/intelligent-claims"]],
  Company:[["About MEDVOXA","/company"],["Providers","/providers"],["Pricing","/pricing"],["Careers","/careers"],["Contact","/contact"]],
  Resources:[["Security","/security"],["Specialties","/specialties"],["Founding Program","/founding"],["Privacy","/privacy"],["Terms","/terms"]],
};
export default function Footer(){return <footer className="site-footer"><div className="m-container footer-main"><div className="footer-brand"><img src="/logo-dark.svg" alt="MEDVOXA"/><p>Structured revenue cycle management for independent practices and specialty groups.</p><div className="footer-status"><span/>Now onboarding practices</div><a href="mailto:hello@medvoxa.com">hello@medvoxa.com</a></div><div className="footer-groups">{Object.entries(GROUPS).map(([name,links])=><div key={name}><h4>{name}</h4>{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</div>)}</div></div><div className="m-container footer-bottom"><span>© {new Date().getFullYear()} MEDVOXA, Inc. All rights reserved.</span><span>Healthcare revenue, governed.</span></div></footer>}
