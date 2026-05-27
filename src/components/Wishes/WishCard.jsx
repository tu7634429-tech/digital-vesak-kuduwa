import { useState } from "react";

export default function WishCard({ item }) {
  const [imageError, setImageError] = useState(false);
  const shouldShowImage = item.lantern.image && !imageError;

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      {shouldShowImage ? (
        <img
          src={item.lantern.image}
          alt={item.lantern.name}
          onError={() => setImageError(true)}
          className="lantern-glow mb-4 h-16 w-11 object-contain"
        />
      ) : (
        <div
          className={`lantern-glow mb-4 h-16 w-11 bg-gradient-to-b ${item.lantern.gradient} ${item.lantern.shape}`}
        />
      )}

      <p className="text-sm leading-7 text-white/75">“{item.message}”</p>

      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-amber-200/50">
        {item.lantern.shortName}
      </p>
    </article>
  );
}