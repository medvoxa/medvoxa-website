import Link from "next/link";

export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "red" | "green" | "blue" }) {
  return <span className={`m-badge m-badge-${tone}`}><span className="m-badge-dot" />{children}</span>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="m-eyebrow"><span />{children}</div>;
}

export function PageHero({ eyebrow, title, accent, description, actions, aside }: {
  eyebrow: string; title: React.ReactNode; accent?: React.ReactNode; description: string;
  actions?: React.ReactNode; aside?: React.ReactNode;
}) {
  return <section className="m-page-hero"><div className="m-container m-hero-grid"><div>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h1 className="m-h1">{title} {accent && <em>{accent}</em>}</h1>
    <p className="m-lead">{description}</p>
    {actions && <div className="m-actions">{actions}</div>}
  </div>{aside && <div className="m-hero-aside">{aside}</div>}</div></section>;
}

export function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow?: string; title: React.ReactNode; text?: string; center?: boolean }) {
  return <div className={`m-section-title ${center ? "center" : ""}`}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function FeatureCard({ index, title, text, href }: { index?: string; title: string; text: string; href?: string }) {
  const content = <div className="m-card m-feature-card"><div className="m-card-top"><span>{index || ""}</span><span className="m-arrow">↗</span></div><h3>{title}</h3><p>{text}</p></div>;
  return href ? <Link href={href} className="m-card-link">{content}</Link> : content;
}

export function MiniDashboard() {
  return <div className="mini-dashboard">
    <div className="mini-head"><span className="mini-logo">MEDVOXA</span><span className="mini-live">● Live</span></div>
    <div className="mini-title"><div><small>Revenue Overview</small><strong>$2.45M</strong></div><span>Last 30 Days⌄</span></div>
    <div className="mini-stats"><div><b>7.6%</b><small>Denial rate</small></div><div><b>$1.82M</b><small>Collections</small></div><div><b>412K</b><small>A/R outstanding</small></div></div>
    <div className="mini-chart"><div className="chart-label">Collections trend</div><div className="chart-line"><i /><i /><i /><i /><i /><i /><i /></div></div>
    <div className="mini-rows"><span><b /> Claims ready <strong>1,248</strong></span><span><b /> Denials in work <strong>86</strong></span><span><b /> Payments posted <strong>392</strong></span></div>
  </div>;
}

export function CTASection({ title, text, href = "/contact", label = "Request a Demo" }: { title: string; text: string; href?: string; label?: string }) {
  return <section className="m-cta"><div className="m-container m-cta-inner"><div><Eyebrow>{"Start with the revenue cycle"}</Eyebrow><h2>{title}</h2><p>{text}</p></div><Link href={href} className="m-btn m-btn-red">{label} <span>→</span></Link></div></section>;
}
