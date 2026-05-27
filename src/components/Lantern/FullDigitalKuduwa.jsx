import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLantern } from "../../context/LanternContext";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";

export default function FullDigitalKuduwa() {
  const { selectedLantern, wish, t, language } = useLantern();
  const [isLit, setIsLit] = useState(true);

  const displayWish = useMemo(() => {
    if (wish.trim()) return wish.trim();
    return t.defaultWish;
  }, [wish, t.defaultWish]);

  const miniLanterns = [
    { className: "lck-mini lck-mini-1", duration: 5.2, delay: 0 },
    { className: "lck-mini lck-mini-2", duration: 5.8, delay: 0.4 },
    { className: "lck-mini lck-mini-3", duration: 6.1, delay: 0.9 },
    { className: "lck-mini lck-mini-4", duration: 5.6, delay: 1.2 },
    { className: "lck-mini lck-mini-5", duration: 6.3, delay: 0.7 },
    { className: "lck-mini lck-mini-6", duration: 5.4, delay: 1.5 },
  ];

  function renderLantern(imageClass = "lck-main-image") {
    if (selectedLantern?.image) {
      return (
        <img
          src={selectedLantern.image}
          alt={selectedLantern.name}
          className={imageClass}
        />
      );
    }

    return <div className="lck-fallback-lantern" />;
  }

  return (
    <section className="relative px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={
            language === "si"
              ? "ලෝටස් වෙසක් කූඩු අත්දැකීම"
              : "Lotus Vesak Lantern Experience"
          }
          title={
            language === "si"
              ? "මැද ලෝටස් කූඩුවක්, වටේ පොඩි කූඩු"
              : "A central lotus lantern with smaller lanterns around it"
          }
          description={
            language === "si"
              ? "main lotus vesak kuduwa එක center එකේ, ඒ වටේ පොඩි lotus kudu tikak hang වෙන festive layout එකක්."
              : "A cleaner festive layout with one central lotus Vesak lantern and smaller lotus lanterns surrounding it."
          }
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className={`lck-scene ${isLit ? "lck-lit" : "lck-dim"}`}
            style={{
              "--lck-glow":
                selectedLantern?.glow || "rgba(251, 191, 36, 0.85)",
            }}
          >
            <div className="lck-stars" />
            <div className="lck-moon" />
            <div className="lck-floor-glow" />

            <div className="lck-wish-box">
              <p>{language === "si" ? "ඔබේ පැතුම" : "Your Wish"}</p>
              <strong>“{displayWish}”</strong>
            </div>

            {miniLanterns.map((item, index) => (
              <motion.div
                key={index}
                className={item.className}
                animate={{
                  y: [0, 10, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
              >
                <span className="lck-mini-line" />
                <div className="lck-mini-body">
                  {renderLantern("lck-mini-image")}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="lck-main-wrap"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="lck-main-line" />
              <div className="lck-main-lantern-holder">
                {renderLantern()}
              </div>

              <div className="lck-main-light-glow" />

              <span className="lck-thread lck-thread-1" />
              <span className="lck-thread lck-thread-2" />
              <span className="lck-thread lck-thread-3" />
              <span className="lck-thread lck-thread-4" />
            </motion.div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-7">
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-amber-200/70 sm:text-xs">
              {language === "si" ? "Lotus Cluster View" : "Lotus Cluster View"}
            </p>

            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {language === "si"
                ? "ලොකු frame එක නැතුව clean lotus scene එකක්"
                : "A cleaner lotus lantern scene without the large frame"}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
              {language === "si"
                ? "දැන් main lotus lantern එක center එකේ hero element එකක්. ඒ වටේ පොඩි lotus lanterns add කරලා elegant vesak feel එකක් දීලා තියෙනවා."
                : "The main lotus lantern is now the hero element at the center, with smaller lotus lanterns around it for an elegant Vesak feel."}
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/45 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200/60">
                {language === "si" ? "Selected Lantern" : "Selected Lantern"}
              </p>
              <p className="mt-2 text-white">{selectedLantern.name}</p>

              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-amber-200/60">
                {language === "si" ? "Current Wish" : "Current Wish"}
              </p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                “{displayWish}”
              </p>
            </div>

            <div className="mt-6">
              <Button onClick={() => setIsLit((prev) => !prev)}>
                {isLit
                  ? language === "si"
                    ? "ආලෝකය අඩු කරන්න"
                    : "Dim The Lanterns"
                  : language === "si"
                    ? "කූඩු දල්වන්න"
                    : "Light The Lanterns"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}