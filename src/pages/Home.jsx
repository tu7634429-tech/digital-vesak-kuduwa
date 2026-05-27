import Hero from "../components/Hero/Hero";
import LanternSelector from "../components/Lantern/LanternSelector";
import FullDigitalKuduwa from "../components/Lantern/FullDigitalKuduwa";
import WishInput from "../components/Wishes/WishInput";
import VesakCardGenerator from "../components/Wishes/VesakCardGenerator";
import WishWall from "../components/Wishes/WishWall";
import BackgroundSound from "../components/Audio/BackgroundSound";
import Footer from "../components/UI/Footer";
import { useLantern } from "../context/LanternContext";

export default function Home() {
  const { toggleLanguage, t } = useLantern();

  return (
    <main className="relative min-h-screen overflow-hidden bg-vesak-night text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-25" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-noise opacity-20" />

      <button
        type="button"
        onClick={toggleLanguage}
        className="fixed left-4 top-4 z-50 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-xs font-medium text-white/80 backdrop-blur transition hover:bg-white/15 sm:left-5 sm:top-5 sm:px-5"
      >
        {t.languageLabel}
      </button>

      <div className="relative z-10">
        <BackgroundSound />
        <Hero />
        <LanternSelector />
        <FullDigitalKuduwa />
        <WishInput />
        <VesakCardGenerator />
        <WishWall />
        <Footer />
      </div>
    </main>
  );
}