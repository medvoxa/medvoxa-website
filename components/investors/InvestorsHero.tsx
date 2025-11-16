// components/investors/InvestorsHero.tsx

export default function InvestorsHero() {
  return (
    <section className="pt-16 pb-16 relative">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-3 py-1.5 
                        rounded-full text-xs font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          For Investors
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2A2220] leading-tight">
          Autonomous Revenue Intelligence  
          <br className="hidden sm:block" />
          for a $60B Healthcare RCM Market.
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto mt-5 text-lg leading-relaxed text-[#6A5045]">
          MEDVOXA is building the first self-correcting RCM engine —  
          reducing denials, lowering operational cost, and unlocking provider revenue  
          at a scale impossible with human-only workflows.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">

          <a
            href="/contact"
            className="px-8 py-3 rounded-xl shadow-sm
                       bg-[#5A3A2E] text-white font-medium
                       hover:bg-[#7B5243] transition-colors"
          >
            Request Investor Brief
          </a>

          <a
            href="#market"
            className="px-8 py-3 rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            Explore Opportunity
          </a>

        </div>

      </div>

      {/* Soft Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto max-w-3xl h-[220px] 
                   blur-[90px] opacity-20 -z-10"
        style={{ background: "radial-gradient(circle, #B87A57 0%, transparent 70%)" }}
      ></div>
    </section>
  );
}
