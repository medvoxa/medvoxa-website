// components/careers/OpenRoles.tsx

export default function OpenRoles() {
  const roles = [
    {
      title: "AI / ML Engineer",
      type: "Full-time · Remote",
      desc: "Build and refine payer-pattern models, ICD/CPT optimization logic, and autonomous correction intelligence for real-world claim workflows.",
      icon: "🤖",
      link: "/contact",
    },
    {
      title: "Full Stack Engineer",
      type: "Full-time · Remote",
      desc: "Work across Next.js, FastAPI, and internal tooling to deliver fast, reliable, and elegant interfaces for RCM automation workflows.",
      icon: "🧩",
      link: "/contact",
    },
    {
      title: "Backend Engineer (Python / FastAPI)",
      type: "Full-time · Remote",
      desc: "Architect scalable data pipelines, payer-rule engines, and workflow automation layers powering the MEDVOXA Engine.",
      icon: "⚙️",
      link: "/contact",
    },
    {
      title: "Data Engineer",
      type: "Full-time · Remote",
      desc: "Own ETL pipelines, payer data ingestion, claim normalization, and the secure infrastructure behind PHI-minimalist processing.",
      icon: "📊",
      link: "/contact",
    },
    {
      title: "RCM Specialist / Analyst",
      type: "Full-time · Remote",
      desc: "Translate denial categories, payer rules, and real-world billing workflows into automation-ready logic for the engine.",
      icon: "📎",
      link: "/contact",
    },
    {
      title: "Product Designer",
      type: "Full-time · Remote",
      desc: "Design workflow-first, accessible interfaces for complex RCM tasks — blending clarity, compliance, and automation insights.",
      icon: "🎨",
      link: "/contact",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220]">
          Open Roles
        </h2>
        <p className="text-center text-[#6A5045] mt-3 mb-8">
          Join a team building the future of autonomous healthcare revenue systems.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm flex flex-col"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {role.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2A2220] mb-1">
                {role.title}
              </h3>

              {/* Type */}
              <p className="text-sm text-[#8C756B] mb-3">
                {role.type}
              </p>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed mb-4">
                {role.desc}
              </p>

              {/* CTA */}
              <a
                href={role.link}
                className="mt-auto inline-block text-[#5A3A2E] font-medium
                           hover:underline"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
