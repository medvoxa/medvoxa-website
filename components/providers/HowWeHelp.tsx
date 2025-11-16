// components/providers/HowWeHelp.tsx

export default function HowWeHelp() {
  const items = [
    {
      title: "Autonomous Denial Prevention",
      desc: "Identifies and fixes coding, modifier, and coverage issues before submission — drastically reducing preventable denials.",
      icon: "🛡️",
    },
    {
      title: "Smart Coding & Validation",
      desc: "Real-time checks ensure ICD/CPT alignment and payer-compliant coding, reducing manual work and improving clean claim rates.",
      icon: "📄",
    },
    {
      title: "Coverage Rule Alignment",
      desc: "Understands payer-specific rules using historical data and payer logic — minimizing rejections and speeding up approvals.",
      icon: "📘",
    },
    {
      title: "Workflow Automation",
      desc: "Automates repetitive correction tasks so your team can focus on high-value work instead of fixing the same issues repeatedly.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="how-it-works" className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          How MEDVOXA Helps Providers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
