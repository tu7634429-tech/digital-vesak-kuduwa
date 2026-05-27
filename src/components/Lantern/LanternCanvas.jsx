import { useLantern } from "../../context/LanternContext";
import LanternLight from "./LanternLight";

export default function LanternCanvas() {
  const { selectedLantern } = useLantern();

  return (
    <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 md:min-h-[380px] md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_42%)]" />

      <div className="relative z-10 scale-[0.86] md:scale-100">
        <LanternLight lantern={selectedLantern} size="large" />
      </div>
    </div>
  );
}