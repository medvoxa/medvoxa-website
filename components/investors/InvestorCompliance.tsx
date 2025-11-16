// components/investors/InvestorCompliance.tsx

export default function InvestorCompliance() {
  const items = [
    {
      title: "HIPAA-Aligned Architecture",
      desc: "MEDVOXA is built with strict data isolation, encrypted pipelines, and PHI-minimalist processing — reducing operational and regulatory risk.",
      icon: "🔒",
    },
    {
      title: "Enterprise-Grade Auditability",
      desc: "Every AI-driven correction and workflow action is logged with full traceability, enabling clean audit trails and transparent oversight.",
      icon: "🧾",
    },
    {
      title: "Risk-Reduced Deployment Model",
      desc: "The engine operates within controlled data boundaries and automates pre-submission workflows, minimizing exposure while maximizing value.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Built With Compliance, Safety & Trust at the Core
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
