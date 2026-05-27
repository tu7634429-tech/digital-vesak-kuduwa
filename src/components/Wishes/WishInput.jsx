import { useState } from "react";
import { useLantern } from "../../context/LanternContext";
import Button from "../UI/Button";
import LanternCanvas from "../Lantern/LanternCanvas";
import Modal from "../UI/Modal";

export default function WishInput() {
  const { wish, setWish, lightLantern, selectedLantern, t } = useLantern();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedWish, setSubmittedWish] = useState("");

  function handleLightLantern() {
    const finalWish = wish.trim() || t.defaultWish;

    setSubmittedWish(finalWish);
    lightLantern();
    setIsModalOpen(true);
  }

  return (
    <>
      <section className="relative px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:grid-cols-2 md:gap-10 md:p-10">
          <LanternCanvas />

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-amber-200/70 sm:text-xs md:tracking-[0.35em]">
              {t.wishEyebrow}
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              {t.wishTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60 md:mt-5 md:text-base md:leading-8">
              {t.wishTextStart}{" "}
              <span className="font-medium text-amber-200">
                {selectedLantern.name}
              </span>
              . {t.wishTextEnd}
            </p>

            <textarea
              value={wish}
              onChange={(event) => setWish(event.target.value)}
              maxLength={120}
              placeholder={t.wishPlaceholder}
              className="mt-6 min-h-32 w-full resize-none rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-amber-300 md:mt-8 md:min-h-36 md:text-base"
            />

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button onClick={handleLightLantern}>{t.lightButton}</Button>

              <p className="text-center text-sm text-white/45 sm:text-left">
                {wish.length}/120 {t.characters}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t.modalTitle}
      >
        <p>{t.modalDescription}</p>

        <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-amber-100">
          “{submittedWish}”
        </p>
      </Modal>
    </>
  );
}