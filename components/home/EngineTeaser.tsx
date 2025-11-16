// components/home/EngineTeaser.tsx

import AdaptiveWave from "@/components/AdaptiveWave";

export default function EngineTeaser() {
  return (
    <section className="py-5 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-3 px-3 py-1 
                        rounded-full text-xs font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          The MEDVOXA Engine
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A2220] leading-tight">
          Autonomous. Self-Correcting.
          <br className="hidden sm:block" />
          Built for Real-World RCM Complexity.
        </h2>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto mt-3 text-base leading-relaxed text-[#6A5045]">
          The MEDVOXA Engine repairs, validates, and optimizes claims using 
          real-time inference, payer-specific patterns, and autonomous correction 
          workflows — reducing denials before they occur.
        </p>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Self-Learning Models",
              desc: "Understands payer rules and historical patterns to drive accurate claim preparation.",
            },
            {
              title: "Autonomous Corrections",
              desc: "Fixes modifiers, ICDs, and coverage alignment BEFORE submission to minimize denials.",
            },
            {
              title: "Continuous Optimization",
              desc: "Learns from every outcome to eliminate repeat denials and improve clean claim rates.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              <h3
                className="text-lg font-semibold mb-1.5"
                style={{ color: "#B87A57" }} // Copper Accent
              >
                {item.title}
              </h3>
              <p className="text-[#6A5045] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle AdaptiveWave — even smaller footprint */}
      <div className="absolute inset-0 -z-10 opacity-[0.12] scale-100">
        <AdaptiveWave />
      </div>
    </section>
  );
}
