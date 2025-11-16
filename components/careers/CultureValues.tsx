// components/careers/CultureValues.tsx

export default function CultureValues() {
  const values = [
    {
      title: "Ownership",
      desc: "We take responsibility for the work we deliver and the outcomes we create — individually and as a team.",
      icon: "🎯",
    },
    {
      title: "Precision",
      desc: "Healthcare deserves accuracy. We design systems with rigor, craftsmanship, and deep respect for real-world complexity.",
      icon: "🧩",
    },
    {
      title: "Velocity",
      desc: "We move fast, but never carelessly. We ship, learn, and iterate — building momentum through consistent progress.",
      icon: "⚡",
    },
    {
      title: "Integrity",
      desc: "Patients and providers depend on the systems we build. Our work is grounded in honesty, trust, and responsibility.",
      icon: "🛡️",
    },
    {
      title: "Empathy",
      desc: "We build products for real humans — billers, providers, patients — and we design with their challenges in mind.",
      icon: "💛",
    },
    {
      title: "Impact",
      desc: "Our mission is to meaningfully reduce healthcare friction. Every feature, workflow, and model should serve that purpose.",
      icon: "🌱",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Our Culture & Values
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {v.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {v.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
