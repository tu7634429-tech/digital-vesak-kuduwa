import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { lanterns } from "../data/lanterns";
import { peacefulQuotes, translations } from "../data/quotes";

const LanternContext = createContext(null);

const STORAGE_KEY = "digital-vesak-lanterns";
const LANGUAGE_KEY = "digital-vesak-language";

const defaultCommunityLanterns = [
  {
    id: 1,
    message: peacefulQuotes[0],
    lantern: lanterns[0],
    createdAt: Date.now(),
  },
  {
    id: 2,
    message: peacefulQuotes[1],
    lantern: lanterns[1],
    createdAt: Date.now(),
  },
  {
    id: 3,
    message: peacefulQuotes[2],
    lantern: lanterns[2],
    createdAt: Date.now(),
  },
];

function getSavedLanterns() {
  try {
    const savedLanterns = localStorage.getItem(STORAGE_KEY);

    if (!savedLanterns) {
      return defaultCommunityLanterns;
    }

    const parsedLanterns = JSON.parse(savedLanterns);

    if (!Array.isArray(parsedLanterns)) {
      return defaultCommunityLanterns;
    }

    return parsedLanterns;
  } catch {
    return defaultCommunityLanterns;
  }
}

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

    if (savedLanguage === "si" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "en";
  } catch {
    return "en";
  }
}

export function LanternProvider({ children }) {
  const [selectedLantern, setSelectedLantern] = useState(lanterns[0]);
  const [wish, setWish] = useState("");
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [communityLanterns, setCommunityLanterns] = useState(getSavedLanterns);
  const [language, setLanguage] = useState(getSavedLanguage);

  const t = translations[language] || translations.en;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(communityLanterns));
  }, [communityLanterns]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  function playBell() {
    try {
      const bell = new Audio("/audio/bell.mp3");
      bell.volume = 0.35;
      bell.play().catch(() => {});
    } catch {
      // Optional audio fallback
    }
  }

  function scrollToLanternSky() {
    window.setTimeout(() => {
      const skySection = document.getElementById("lantern-sky");

      if (skySection) {
        skySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }

  function lightLantern() {
    const cleanWish = wish.trim();

    const newLantern = {
      id: Date.now(),
      message: cleanWish || t.defaultWish,
      lantern: selectedLantern,
      createdAt: Date.now(),
    };

    setCommunityLanterns((prev) => [newLantern, ...prev].slice(0, 24));
    setWish("");
    playBell();
    scrollToLanternSky();
  }

  function clearLanterns() {
    setCommunityLanterns(defaultCommunityLanterns);
    localStorage.removeItem(STORAGE_KEY);
  }

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "si" : "en"));
  }

  const value = useMemo(
    () => ({
      lanterns,
      selectedLantern,
      setSelectedLantern,
      wish,
      setWish,
      communityLanterns,
      lightLantern,
      clearLanterns,
      isSoundEnabled,
      setIsSoundEnabled,
      language,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [selectedLantern, wish, communityLanterns, isSoundEnabled, language, t]
  );

  return (
    <LanternContext.Provider value={value}>
      {children}
    </LanternContext.Provider>
  );
}

export function useLantern() {
  const context = useContext(LanternContext);

  if (!context) {
    throw new Error("useLantern must be used inside LanternProvider");
  }

  return context;
}