import { useLantern } from "../../context/LanternContext";
import LanternCard from "./LanternCard";
import SectionTitle from "../UI/SectionTitle";

export default function LanternSelector() {
  const { lanterns, selectedLantern, setSelectedLantern, t } = useLantern();

  return (
    <section id="light-lantern" className="relative px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={t.selectorEyebrow}
          title={t.selectorTitle}
          description={t.selectorDescription}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {lanterns.map((lantern) => (
            <LanternCard
              key={lantern.id}
              lantern={lantern}
              active={selectedLantern.id === lantern.id}
              onClick={() => setSelectedLantern(lantern)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}