import { AnimatePresence, motion } from "framer-motion";
import { useLantern } from "../../context/LanternContext";

export default function Modal({ isOpen, onClose, title, children }) {
  const { t } = useLantern();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-amber-200/20 bg-slate-950 p-7 text-center text-white shadow-[0_0_80px_rgba(251,191,36,0.18)]"
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.35 }}
          >
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-3xl shadow-[0_0_45px_rgba(251,191,36,0.45)]">
                🏮
              </div>

              <h3 className="text-2xl font-semibold text-white">{title}</h3>

              <div className="mt-4 text-sm leading-7 text-white/70">
                {children}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-7 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:bg-amber-300"
              >
                {t.modalButton}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}