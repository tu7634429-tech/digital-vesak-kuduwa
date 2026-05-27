import { useEffect, useRef } from "react";
import { useLantern } from "../../context/LanternContext";

export default function BackgroundSound() {
  const audioRef = useRef(null);
  const { isSoundEnabled, setIsSoundEnabled, language } = useLantern();

  useEffect(() => {
    if (!audioRef.current) return;

    if (isSoundEnabled) {
      audioRef.current.volume = 0.18;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isSoundEnabled]);

  return (
    <>
      <audio ref={audioRef} src="/audio/ambience.mp3" loop />

      <button
        type="button"
        onClick={() => setIsSoundEnabled(!isSoundEnabled)}
        className="fixed bottom-4 right-4 z-50 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-xs font-medium text-white/80 backdrop-blur transition hover:bg-white/15 sm:bottom-5 sm:right-5 sm:px-5"
      >
        {isSoundEnabled
          ? language === "si"
            ? "ශබ්දය On"
            : "Sound On"
          : language === "si"
            ? "ශබ්දය Off"
            : "Sound Off"}
      </button>
    </>
  );
}