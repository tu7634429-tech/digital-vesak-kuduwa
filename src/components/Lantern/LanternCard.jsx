import { motion } from "framer-motion";
import LanternLight from "./LanternLight";

export default function LanternCard({ lantern, active, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border p-4 text-left transition duration-300 sm:p-5 ${
        active
          ? "border-amber-300 bg-amber-300/10 shadow-[0_0_45px_rgba(251,191,36,0.18)]"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
      }`}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="mb-4 flex h-36 items-center justify-center rounded-2xl bg-slate-950/45 sm:h-44">
        <LanternLight lantern={lantern} size="small" />
      </div>

      <h3 className="text-base font-semibold text-white sm:text-lg">
        {lantern.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/60">
        {lantern.description}
      </p>
    </motion.button>
  );
}