// components/careers/CareersHero.tsx

export default function CareersHero() {
  return (
    <section className="pt-16 pb-16 relative">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-3 py-1.5 
                        rounded-full text-xs font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          Careers at MEDVOXA
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2A2220] leading-tight">
          Build the Future of Autonomous  
          <br className="hidden sm:block" />
          Healthcare Revenue Systems.
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto mt-5 text-lg leading-relaxed text-[#6A5045]">
          Join a mission-driven team creating technology that reduces  
          healthcare friction, accelerates revenue, and brings automation  
          to one of the most complex industries in the world.
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
