export default function ContactHero() {
  return (
    <section className="pt-16 pb-14 relative">
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-4 py-1.5 
                        rounded-full text-sm font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          Get in Touch
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2A2220] leading-tight">
          Let’s Connect
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto mt-5 text-lg text-[#6A5045] leading-relaxed">
          Whether you’re a provider, investor, partner, or candidate —  
          our team is here to help. Reach out and we’ll respond promptly.
        </p>

      </div>

      {/* Copper Glow */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto max-w-3xl h-[220px] 
                   blur-[90px] opacity-20 -z-10"
        style={{ background: "radial-gradient(circle, #B87A57 0%, transparent 70%)" }}
      />
    </section>
  );
}
