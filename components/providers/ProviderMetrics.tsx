// components/providers/ProviderMetrics.tsx

export default function ProviderMetrics() {
  const metrics = [
    {
      value: "40–70%",
      label: "Reduction in Preventable Denials",
      icon: "📉",
    },
    {
      value: "17–24%",
      label: "Revenue Recovered From Missed Opportunities",
      icon: "💰",
    },
    {
      value: "5–12 Days",
      label: "Faster Average Reimbursement Cycle",
      icon: "⏱️",
    },
    {
      value: "Up to 60%",
      label: "Reduction in Manual Claim Correction Workload",
      icon: "🔧",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Proven Outcomes for Providers & Hospitals
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-2" style={{ color: "#B87A57" }}>
                {m.icon}
              </div>

              {/* Value */}
              <div className="text-3xl font-bold mb-1 text-[#2A2220]">
                {m.value}
              </div>

              {/* Label */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {m.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
