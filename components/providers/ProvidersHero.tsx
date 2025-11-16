// components/providers/ProvidersHero.tsx

export default function ProvidersHero() {
  return (
    <section className="pt-16 pb-16 relative">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-3 py-1.5 
                        rounded-full text-xs font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          For Providers & Hospitals
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2A2220] leading-tight">
          Autonomous Revenue Cycle  
          <br className="hidden sm:block" />
          Built for Real-World Providers.
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-[#6A5045]">
          Reduce denials, accelerate reimbursements, and eliminate manual claim work  
          with an AI engine that repairs issues before payers ever see your claims.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          
          {/* Primary CTA */}
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl shadow-sm
                       bg-[#5A3A2E] text-white font-medium
                       hover:bg-[#7B5243] transition-colors"
          >
            Get a Demo
          </a>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className="px-8 py-3 rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            See How It Works
          </a>
        </div>

      </div>

      {/* Soft Copper Glow */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto max-w-3xl h-[220px] 
                   blur-[90px] opacity-20 -z-10"
        style={{ background: "radial-gradient(circle, #B87A57 0%, transparent 70%)" }}
      ></div>
    </section>
  );
}
