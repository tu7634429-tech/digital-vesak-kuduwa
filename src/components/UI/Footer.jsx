import { useLantern } from "../../context/LanternContext";

export default function Footer() {
  const { language } = useLantern();

  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-center">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm leading-7 text-white/55">
          {language === "si"
            ? "සාමය, කරුණාව සහ ආලෝකය සමඟ නිර්මාණය කළ ඩිජිටල් වෙසක් අත්දැකීමක්."
            : "A peaceful digital Vesak experience created with light, kindness, and community."}
        </p>

        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-amber-200/45">
          Digital Vesak Kuduwa
        </p>
      </div>
    </footer>
  );
}