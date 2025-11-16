// components/home/ImpactMetrics.tsx

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "92%+",
      label: "Automated Denial Repair Potential",
    },
    {
      value: "17–24%",
      label: "Additional Revenue Recovered",
    },
    {
      value: "5–12 Days",
      label: "Faster Reimbursement Cycle",
    },
    {
      value: "Up to 60%",
      label: "Reduction in Manual Workload",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-10">
          Proven Impact for Providers & Hospitals
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm text-center"
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#B87A57" }} // Copper accent
              >
                {m.value}
              </div>

              <p className="text-[#6A5045] text-base leading-relaxed">
                {m.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
