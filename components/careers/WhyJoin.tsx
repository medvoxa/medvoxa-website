// components/careers/WhyJoin.tsx

export default function WhyJoin() {
  const reasons = [
    {
      title: "Work on Hard, Meaningful Problems",
      desc: "Healthcare revenue systems are complex, high-impact, and underserved by modern technology — your work will directly improve provider operations.",
      icon: "🔥",
    },
    {
      title: "Build with Autonomy & Ownership",
      desc: "We trust talented people to take responsibility, lead initiatives, and ship real product — without bureaucratic overhead.",
      icon: "🚀",
    },
    {
      title: "Engineering-First Culture",
      desc: "We prioritize technical excellence, thoughtful architecture, clean code, and smart engineering decisions that stand the test of time.",
      icon: "🛠️",
    },
    {
      title: "Rapid Growth & Learning",
      desc: "You’ll work across AI, RCM workflows, compliance-safe design, product strategy, and modern infrastructure — learning faster than anywhere else.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Why Join MEDVOXA?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {r.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
