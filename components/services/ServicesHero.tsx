export default function ServicesHero() {
  return (
    <section className="pt-16 pb-16 relative">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-3 py-1.5 
                        rounded-full text-xs font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          Our Services
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2A2220] leading-tight">
          Modern Revenue Cycle Services  
          <br className="hidden sm:block" />
          Powered by Autonomous Intelligence
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto mt-5 text-lg leading-relaxed text-[#6A5045]">
          MEDVOXA combines expert RCM teams with an automation-first engine  
          to deliver accuracy, speed, and end-to-end revenue optimization.
        </p>

      </div>

      {/* Copper Glow */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto max-w-3xl h-[220px] 
                   blur-[90px] opacity-20 -z-10"
        style={{ background: "radial-gradient(circle, #B87A57 0%, transparent 70%)" }}
      ></div>
    </section>
  );
}
