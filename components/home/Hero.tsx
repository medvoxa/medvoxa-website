// components/home/Hero.tsx

export default function Hero() {
  return (
    <section className="pt-5 pb-5">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-1.5 
                        rounded-full text-sm font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] 
                        text-[#8C756B]">
          Autonomous RCM Engine
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight 
                       text-[#2A2220]">
          AI That Repairs Claims <br className="hidden sm:block" />
          Before You Even Notice the Problem.
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed 
                      text-[#6A5045]">
          MEDVOXA is the autonomous RCM engine built for providers, hospitals, and
          healthcare enterprises—eliminating manual work, reducing denials, and
          accelerating revenue with intelligent, self-correcting workflows.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl shadow-sm
                       bg-[#5A3A2E] text-white font-medium
                       hover:bg-[#7B5243] transition-colors"
          >
            Get a Demo
          </a>

          {/* Secondary CTA */}
          <a
            href="/services"
            className="px-8 py-3 rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            Explore Services
          </a>
        </div>

        {/* Soft Copper Glow */}
        <div
          className="pointer-events-none absolute inset-0 mx-auto max-w-4xl h-[400px] 
                     blur-[120px] opacity-20 -z-10"
          style={{ background: "radial-gradient(circle, #B87A57 0%, transparent 60%)" }}
        ></div>

      </div>
    </section>
  );
}
