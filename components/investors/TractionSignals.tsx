// components/investors/TractionSignals.tsx

export default function TractionSignals() {
  const signals = [
    {
      title: "Engine Architecture Completed",
      desc: "The core MEDVOXA engine — including payer-pattern learning, correction workflows, and ICD/CPT optimization logic — is fully built and evolving.",
      icon: "🧩",
    },
    {
      title: "Automation Use-Cases Finalized",
      desc: "High-impact denial categories (CO-16, CO-50, CO-97, CO-109, PR-204) mapped into autonomous correction logic for real-world deployment.",
      icon: "⚙️",
    },
    {
      title: "Strong Industry Pull",
      desc: "Providers and billing teams consistently highlight the same pain points MEDVOXA solves — validating product direction and adoption demand.",
      icon: "📣",
    },
    {
      title: "Pilot-Ready Infrastructure",
      desc: "System architecture, compliance alignment, and data workflows are ready for controlled pilot onboarding with early provider partners.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Early Traction & Signals of Market Fit
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
