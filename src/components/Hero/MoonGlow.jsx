export default function MoonGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-12 z-[1] h-96 w-96 -translate-x-1/2 rounded-full bg-orange-300/16 blur-3xl" />

      <div className="absolute left-1/2 top-20 z-[1] h-36 w-36 -translate-x-1/2 rounded-full border border-amber-100/20 bg-amber-100/8 shadow-[0_0_80px_rgba(251,191,36,0.18)]" />

      <div className="absolute bottom-24 left-8 z-[1] h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="absolute right-10 top-1/3 z-[1] h-56 w-56 rounded-full bg-cyan-200/6 blur-3xl" />
    </>
  );
}