import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useLantern } from "../../context/LanternContext";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";

export default function VesakCardGenerator() {
  const { language, selectedLantern } = useLantern();
  const cardRef = useRef(null);

  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [cardWish, setCardWish] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const defaultWish =
    language === "si"
      ? "ඔබටත් ඔබේ පවුලේ සියලු දෙනාටත් සාමය, සතුට සහ කරුණාවෙන් පිරුණු පින්බර වෙසක් මංගල්‍යයක් වේවා."
      : "Wishing you and your family a peaceful Vesak filled with light, kindness, and serenity.";

  const displayTo =
    toName.trim() || (language === "si" ? "ආදරණීය ඔබට" : "Dear Friend");

  const displayFrom =
    fromName.trim() || (language === "si" ? "ඔබේ මිතුරා" : "Your Friend");

  const displayWish = cardWish.trim() || defaultWish;

  async function downloadCard() {
    if (!cardRef.current) return;

    try {
      setIsDownloading(true);

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      link.href = image;
      link.download = "modern-vesak-card.png";
      link.click();
    } catch (error) {
      console.error("Card download failed:", error);
      alert(
        language === "si"
          ? "Card එක download කරන්න බැරි වුණා. නැවත උත්සාහ කරන්න."
          : "Could not download the card. Please try again."
      );
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <section className="relative px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={language === "si" ? "ඩිජිටල් වෙසක් කාඩ්පත" : "Digital Vesak Card"}
          title={
            language === "si"
              ? "නිර්මාණාත්මක සහ නවීන වෙසක් කාඩ්පතක් සාදන්න"
              : "Create a modern and creative Vesak greeting card"
          }
          description={
            language === "si"
              ? "ඔබගේ නම, ලබන්නාගේ නම සහ සුබ පැතුම සමඟ elegant digital Vesak card එකක් සාදන්න."
              : "Create an elegant Vesak e-card with a receiver name, your name, and a personal message."
          }
        />

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:p-7">
            <p className="mb-5 text-sm leading-7 text-white/60">
              {language === "si"
                ? "නම, wish එක සහ sender name එක add කරන්න. Preview එක live update වෙනවා."
                : "Add the receiver name, your message, and sender name. The preview updates live."}
            </p>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-amber-100">
                  {language === "si" ? "ලබන්නා" : "To"}
                </span>
                <input
                  value={toName}
                  onChange={(event) => setToName(event.target.value)}
                  placeholder={language === "si" ? "උදා: අම්මා" : "Example: Amma"}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none placeholder:text-white/35 transition focus:border-amber-300"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-amber-100">
                  {language === "si" ? "ඔබේ නම" : "From"}
                </span>
                <input
                  value={fromName}
                  onChange={(event) => setFromName(event.target.value)}
                  placeholder={language === "si" ? "උදා: Shafraz" : "Example: Shafraz"}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none placeholder:text-white/35 transition focus:border-amber-300"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-amber-100">
                  {language === "si" ? "වෙසක් සුබ පැතුම" : "Wish / Message"}
                </span>
                <textarea
                  value={cardWish}
                  onChange={(event) => setCardWish(event.target.value)}
                  maxLength={240}
                  placeholder={
                    language === "si"
                      ? "ඔබේ වෙසක් wish එක මෙතන ලියන්න..."
                      : "Write your Vesak message here..."
                  }
                  className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none placeholder:text-white/35 transition focus:border-amber-300"
                />
                <span className="mt-2 block text-right text-xs text-white/40">
                  {cardWish.length}/240
                </span>
              </label>

              <Button onClick={downloadCard}>
                {isDownloading
                  ? language === "si"
                    ? "Download වෙමින්..."
                    : "Downloading..."
                  : language === "si"
                    ? "කාඩ්පත Download කරන්න"
                    : "Download Card"}
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-white/70">
                {language === "si" ? "Live Preview" : "Live Preview"}
              </p>
              <p className="text-xs text-white/40">
                {language === "si" ? "Modern Vesak E-Card" : "Modern Vesak E-Card"}
              </p>
            </div>

            <div className="flex justify-center overflow-hidden rounded-[1.7rem] bg-slate-950/40 p-4 md:p-6">
              <div ref={cardRef} className="vesak-card-preview modern-vesak-card">
                <div className="modern-card-bg-glow modern-card-bg-glow-one" />
                <div className="modern-card-bg-glow modern-card-bg-glow-two" />

                <div className="modern-card-stars" />

                <div className="modern-card-top">
                  <div className="modern-card-badge">
                    {language === "si" ? "පින්බර වෙසක්" : "Blessed Vesak"}
                  </div>

                  <div className="modern-card-moon" />
                </div>

                <div className="modern-card-lantern-row">
                  <div className="hanging-card-lantern">
                    <div className="hanging-line" />
                    <div className="hanging-body">
                      {selectedLantern?.image ? (
                        <img
                          src={selectedLantern.image}
                          alt={selectedLantern.name}
                          className="hanging-lantern-image"
                        />
                      ) : (
                        <div className="hanging-lantern-fallback" />
                      )}
                    </div>
                  </div>

                  <div className="hanging-card-lantern center-lantern">
                    <div className="hanging-line" />
                    <div className="hanging-body large-body">
                      {selectedLantern?.image ? (
                        <img
                          src={selectedLantern.image}
                          alt={selectedLantern.name}
                          className="hanging-lantern-image"
                        />
                      ) : (
                        <div className="hanging-lantern-fallback" />
                      )}
                    </div>
                  </div>

                  <div className="hanging-card-lantern">
                    <div className="hanging-line" />
                    <div className="hanging-body">
                      {selectedLantern?.image ? (
                        <img
                          src={selectedLantern.image}
                          alt={selectedLantern.name}
                          className="hanging-lantern-image"
                        />
                      ) : (
                        <div className="hanging-lantern-fallback" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="modern-vesak-card-content">
                  <p className="modern-card-subtitle">
                    {language === "si" ? "සාමය • කරුණාව • ආලෝකය" : "Peace • Kindness • Light"}
                  </p>

                  <h3 className="modern-card-title">
                    {language === "si" ? "වෙසක් සුබ පැතුම්" : "Happy Vesak"}
                  </h3>

                  <p className="modern-card-to">{displayTo}</p>

                  <div className="modern-card-message-box">
                    <p className="modern-card-message">{displayWish}</p>
                  </div>

                  <div className="modern-card-lotus-wrap">
                    <div className="modern-lotus-glow" />
                    <div className="modern-lotus">
                      <span className="m-petal m-petal-1" />
                      <span className="m-petal m-petal-2" />
                      <span className="m-petal m-petal-3" />
                      <span className="m-petal m-petal-4" />
                      <span className="m-petal m-petal-5" />
                      <span className="m-petal m-petal-6" />
                      <span className="m-petal m-petal-7" />
                    </div>
                  </div>

                  <div className="modern-card-signoff">
                    <span>{language === "si" ? "ආදරයෙන්" : "With metta"}</span>
                    <strong>{displayFrom}</strong>
                  </div>
                </div>

                <div className="modern-card-temple" />
                <div className="modern-card-bottom-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}