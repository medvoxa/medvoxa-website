import Link from "next/link";

export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <div className="section-kicker">{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className={`site-container page-hero-grid ${children ? "" : "single"}`}>
        <div className="page-hero-copy">
          <Kicker>{eyebrow}</Kicker>
          <h1>{title} {accent && <em>{accent}</em>}</h1>
          <p>{description}</p>
          {actions && <div className="hero-actions">{actions}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <Kicker>{eyebrow}</Kicker>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function FeatureCard({
  number,
  title,
  description,
  tone = "red",
}: {
  number?: string;
  title: string;
  description: string;
  tone?: "red" | "blue" | "green";
}) {
  return (
    <article className="feature-card">
      <div className={`feature-icon feature-${tone}`}>{number || "•"}</div>
      <div>
        {number && <div className="feature-number">{number}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="trust-strip">
      <div className="site-container trust-grid">
        {items.map((item) => (
          <div key={item} className="trust-item">
            <span className="trust-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Workflow({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <div className="workflow">
      {steps.map((step, index) => (
        <div className="workflow-step" key={step.title}>
          <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          {index < steps.length - 1 && <span className="workflow-arrow">→</span>}
        </div>
      ))}
    </div>
  );
}

export function DashboardPreview({ variant = "overview" }: { variant?: "overview" | "claims" | "automation" }) {
  const rows = variant === "claims"
    ? ["Eligibility verified", "Claim edits resolved", "Payer rules checked", "Ready for submission"]
    : variant === "automation"
      ? ["Charge capture", "Coding review", "Eligibility", "Claim assembly"]
      : ["Claims", "Denials", "Payments", "A/R"];

  return (
    <div className="dashboard-shell" aria-label="MEDVOXA platform preview">
      <div className="dashboard-topbar">
        <div className="dashboard-brand"><span className="dashboard-mark">M</span> MEDVOXA</div>
        <span className="dashboard-status"><span /> Live workspace</span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <span className="active">Overview</span>
          <span>Claims</span>
          <span>Denials</span>
          <span>Payments</span>
          <span>Reports</span>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading">
            <div><small>Revenue operations</small><strong>{variant === "claims" ? "Claim control center" : variant === "automation" ? "Workflow automation" : "Revenue overview"}</strong></div>
            <span className="dashboard-period">Last 30 days⌄</span>
          </div>
          <div className="metric-grid">
            <div><small>Total billed</small><strong>$2.45M</strong><span className="positive">+12%</span></div>
            <div><small>Collections</small><strong>$1.82M</strong><span className="positive">+9%</span></div>
            <div><small>Denial rate</small><strong>7.6%</strong><span className="negative">−2.4%</span></div>
            <div><small>A/R outstanding</small><strong>$412K</strong><span className="positive">−8%</span></div>
          </div>
          <div className="dashboard-panels">
            <div className="chart-panel">
              <div className="panel-title">Collection trend <span>View report →</span></div>
              <div className="chart"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="queue-panel">
              <div className="panel-title">Workflow queue</div>
              {rows.map((row, i) => <div className="queue-row" key={row}><span className={`queue-icon q${i}`}>{i + 1}</span><span>{row}</span><b>{i === 0 ? "Ready" : i === 1 ? "Review" : "Active"}</b></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CTASection({
  title,
  description,
  primary = "Request a Demo",
  href = "/contact",
}: {
  title: string;
  description: string;
  primary?: string;
  href?: string;
}) {
  return (
    <section className="cta-section">
      <div className="site-container cta-inner">
        <div>
          <Kicker>Start the conversation</Kicker>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link href={href} className="btn btn-red">{primary} <Arrow /></Link>
      </div>
    </section>
  );
}

export function ListCard({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <article className="list-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
    </article>
  );
}
