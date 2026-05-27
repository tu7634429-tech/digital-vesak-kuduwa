import { useLantern } from "../../context/LanternContext";
import LanternFloat from "../Lantern/LanternFloat";
import WishCard from "./WishCard";
import SectionTitle from "../UI/SectionTitle";

export default function WishWall() {
  const { communityLanterns, clearLanterns, t } = useLantern();

  return (
    <section
      id="lantern-sky"
      className="relative min-h-screen overflow-hidden px-5 py-16 md:py-24"
    >
      <div className="absolute inset-0 lantern-sky-bg" />

      <div className="pointer-events-none absolute inset-0">
        <div className="sky-star star-one" />
        <div className="sky-star star-two" />
        <div className="sky-star star-three" />
        <div className="shooting-star shooting-star-one" />
        <div className="shooting-star shooting-star-two" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl md:h-96 md:w-96" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl md:h-72 md:w-72" />

      <div className="pointer-events-none absolute inset-0 z-0">
        {communityLanterns.map((item, index) => (
          <LanternFloat key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={t.skyEyebrow}
          title={t.skyTitle}
          description={t.skyDescription}
        />

        <div className="mb-8 flex justify-center">
          <button
            type="button"
            onClick={clearLanterns}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-medium text-white/65 backdrop-blur transition hover:bg-white/10 hover:text-white"
          >
            {t.resetSky}
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {communityLanterns.slice(0, 3).map((item) => (
            <WishCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent md:h-80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-950/60 to-transparent md:h-60" />
    </section>
  );
}