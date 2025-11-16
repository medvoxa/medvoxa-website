// components/providers/AutomationFlow.tsx

export default function AutomationFlow() {
  const steps = [
    {
      step: "01",
      title: "Detection",
      desc: "The engine scans each claim for coding errors, missing modifiers, LCD/NCD alignment, and potential denial triggers.",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Auto-Correction",
      desc: "Automatically applies corrections: ICD refinements, modifier adjustments, coverage fixes, and payer-aligned formatting.",
      icon: "⚙️",
    },
    {
      step: "03",
      title: "Validation",
      desc: "Ensures compatibility with payer policies, coverage rules, medical necessity guidelines, and prior paid-history patterns.",
      icon: "✔️",
    },
    {
      step: "04",
      title: "Optimization",
      desc: "Uses historical payer outcomes to select the most accurate ICDs & coding combinations for maximum acceptance.",
      icon: "📊",
    },
    {
      step: "05",
      title: "Ready for Submission",
      desc: "Claims are packaged into clean, payer-ready output with documented AI-driven corrections for full audit traceability.",
      icon: "📄",
    },
    {
      step: "06",
      title: "Continuous Learning",
      desc: "Every payer response improves future predictions — making the engine smarter with each claim cycle.",
      icon: "🔁",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          How the MEDVOXA Engine Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {s.icon}
              </div>

              {/* Step Number */}
              <p className="text-xs font-semibold text-[#8C756B] mb-1">
                STEP {s.step}
              </p>

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
