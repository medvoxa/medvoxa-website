// components/home/WhoWeServe.tsx

import Link from "next/link";

export default function WhoWeServe() {
  const audiences = [
    {
      title: "Providers & Hospitals",
      description:
        "Reduce denials, accelerate reimbursement cycles, and eliminate manual claim rework with autonomous revenue operations.",
      href: "/providers",
      icon: "🏥",
    },
    {
      title: "Investors",
      description:
        "Explore a scalable, defensible AI-driven RCM platform with clear market fit, high automation value, and enterprise adoption potential.",
      href: "/investors",
      icon: "📈",
    },
    {
      title: "Career Aspirants",
      description:
        "Join a mission-driven team building the future of autonomous claim processing, healthcare AI, and next-generation RCM analytics.",
      href: "/careers",
      icon: "💼",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-10">
          Who We Serve
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((a, i) => (
            <Link
              key={i}
              href={a.href}
              className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm transition-transform 
                         hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {a.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2A2220] mb-2">
                {a.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-base leading-relaxed mb-3">
                {a.description}
              </p>

              {/* CTA */}
              <span className="text-[#5A3A2E] font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
