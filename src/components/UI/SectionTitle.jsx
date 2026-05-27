export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
      {eyebrow && (
        <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-amber-200/70 sm:text-xs md:tracking-[0.35em]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 md:mt-5 md:text-base md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}