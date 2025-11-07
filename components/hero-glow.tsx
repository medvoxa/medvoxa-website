export default function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full 
        bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-violet-400/20 blur-3xl" 
      />
    </div>
  );
}
