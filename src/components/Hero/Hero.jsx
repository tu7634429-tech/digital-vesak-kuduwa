import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";
import MoonGlow from "./MoonGlow";
import Button from "../UI/Button";
import LanternLight from "../Lantern/LanternLight";
import { useLantern } from "../../context/LanternContext";

export default function Hero() {
  const { t } = useLantern();

  return (
    <section className="hero-section relative flex min-h-[92svh] items-center justify-center overflow-hidden px-5 py-20 text-center md:min-h-screen md:py-24">
      <div className="absolute inset-0 hero-vesak-bg" />
      <div className="absolute inset-0 hero-star-layer" />

      <FloatingParticles />
      <MoonGlow />

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-[2] hidden h-40 md:block">
        <div className="hanging-wire" />
        <div className="mini-lantern mini-lantern-one" />
        <div className="mini-lantern mini-lantern-two" />
        <div className="mini-lantern mini-lantern-three" />
        <div className="mini-lantern mini-lantern-four" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 temple-silhouette md:h-64" />

      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-9 flex justify-center md:mb-12">
          <LanternLight size="large" className="scale-[0.82] md:scale-100" />
        </div>

        <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-amber-200/80 sm:text-xs md:tracking-[0.42em]">
          {t.heroEyebrow}
        </p>

        <h1 className="text-glow mx-auto max-w-4xl text-[2.35rem] font-semibold leading-[1.05] text-white sm:text-5xl md:text-7xl">
          {t.heroTitle}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:mt-6 md:text-lg md:leading-8">
          {t.heroDescription}
        </p>

        <div className="mx-auto mt-8 max-w-xs sm:max-w-none md:mt-10">
          <Button href="#light-lantern">{t.heroButton}</Button>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-t from-slate-950 to-transparent md:h-40" />
    </section>
  );
}