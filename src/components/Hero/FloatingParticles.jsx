import { motion } from "framer-motion";

const particles = Array.from({ length: 70 });

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {particles.map((_, index) => {
        const left = (index * 17) % 100;
        const top = (index * 31) % 100;
        const duration = 5 + (index % 8);
        const size = index % 5 === 0 ? 3 : 2;

        return (
          <motion.span
            key={index}
            className="absolute rounded-full bg-amber-200/70"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              y: [-20, -130],
              opacity: [0, 1, 0],
              scale: [0.5, 1.35, 0.4],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: index * 0.11,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}