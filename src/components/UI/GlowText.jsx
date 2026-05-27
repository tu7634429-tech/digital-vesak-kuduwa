export default function GlowText({ children, className = "" }) {
  return (
    <span className={`text-glow text-amber-200 ${className}`}>
      {children}
    </span>
  );
}