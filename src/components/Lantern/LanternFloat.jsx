import { motion } from "framer-motion";
import { useState } from "react";

export default function LanternFloat({ item, index }) {
  const [imageError, setImageError] = useState(false);

  const isMobile = window.innerWidth < 640;

  const left = isMobile ? 8 + ((index * 29) % 78) : 4 + ((index * 23) % 88);
  const size = isMobile ? 42 + ((index * 7) % 20) : 54 + ((index * 9) % 28);
  const duration = isMobile ? 26 + (index % 8) : 24 + (index % 10);
  const delay = index * 1.45;
  const drift = isMobile ? (index % 2 === 0 ? 18 : -18) : index % 2 === 0 ? 34 : -34;

  const shouldShowImage = item.lantern.image && !imageError;

  return (
    <motion.div
      className="absolute bottom-[-220px] text-center"
      style={{
        left: `${left}%`,
        width: `${size + 92}px`,
      }}
      initial={{
        y: 0,
        x: 0,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        y: isMobile ? -920 : -1180,
        x: [0, drift, -drift / 2, 0],
        opacity: [0, 0.95, 0.9, 0],
        scale: [0.75, 1, 0.92],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {shouldShowImage ? (
          <img
            src={item.lantern.image}
            alt={item.lantern.name}
            onError={() => setImageError(true)}
            className="mx-auto object-contain"
            style={{
              width: `${size}px`,
              height: `${size * 1.45}px`,
              filter: `drop-shadow(0 0 16px ${
                item.lantern.glow || "rgba(251,191,36,0.75)"
              }) drop-shadow(0 0 38px ${
                item.lantern.glow || "rgba(251,191,36,0.35)"
              })`,
            }}
          />
        ) : (
          <div
            className={`mx-auto bg-gradient-to-b ${item.lantern.gradient} ${item.lantern.shape}`}
            style={{
              width: `${size}px`,
              height: `${size * 1.45}px`,
              filter: `drop-shadow(0 0 16px ${
                item.lantern.glow || "rgba(251,191,36,0.75)"
              })`,
            }}
          >
            <div className="h-full w-full rounded-inherit border border-white/20 bg-white/10" />
          </div>
        )}
      </motion.div>

      <div className="mx-auto mt-3 max-w-[130px] rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-[11px] leading-5 text-white/75 shadow-[0_0_25px_rgba(0,0,0,0.25)] backdrop-blur-md md:mt-4 md:max-w-[150px] md:text-xs">
        {item.message}
      </div>
    </motion.div>
  );
}