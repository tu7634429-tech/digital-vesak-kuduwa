export default function Button({ children, onClick, href, className = "" }) {
  const classes =
    "inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_38px_rgba(251,191,36,0.38)] transition duration-300 hover:scale-105 hover:bg-amber-300 sm:w-auto";

  if (href) {
    return (
      <a href={href} className={`${classes} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${classes} ${className}`}>
      {children}
    </button>
  );
}