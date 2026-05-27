import { motion } from "framer-motion";
import { useState } from "react";

export default function LanternLight({
  lantern,
  size = "medium",
  className = "",
}) {
  const [imageError, setImageError] = useState(false);

  const defaultLantern = {
    name: "Vesak Lantern",
    gradient: "from-orange-200 via-amber-400 to-orange-600",
    shape: "rounded-[42%]",
    image: "",
  };

  const activeLantern = lantern || defaultLantern;

  const sizeClasses = {
    small: "h-28 w-20",
    medium: "h-44 w-28",
    large: "h-56 w-40 md:h-72 md:w-52",
  };

  const glowStyle = {
    filter: `drop-shadow(0 0 18px ${
      activeLantern.glow || "rgba(251, 191, 36, 0.75)"
    }) drop-shadow(0 0 42px ${
      activeLantern.glow || "rgba(251, 191, 36, 0.45)"
    })`,
  };

  const shouldShowImage = activeLantern.image && !imageError;

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      animate={{
        y: [0, -14, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute -top-8 left-1/2 h-10 w-px -translate-x-1/2 bg-amber-100/50" />

      <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-3xl" />

      {shouldShowImage ? (
        <img
          src={activeLantern.image}
          alt={activeLantern.name}
          onError={() => setImageError(true)}
          className="relative z-10 h-full w-full object-contain"
          style={glowStyle}
        />
      ) : (
        <div
          className={`relative z-10 h-full w-full bg-gradient-to-b ${activeLantern.gradient} ${activeLantern.shape} animate-glow-breath`}
          style={glowStyle}
        >
          <div className="flex h-full w-full items-center justify-center rounded-inherit border border-white/25 bg-white/10">
            <div className="h-2/3 w-1/2 rounded-full border border-white/35 bg-white/10" />
          </div>
        </div>
      )}

      <div className="absolute -bottom-8 left-1/2 h-12 w-px -translate-x-1/2 bg-amber-100/40" />
    </motion.div>
  );
}