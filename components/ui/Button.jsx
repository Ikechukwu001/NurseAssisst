export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md",
    accent:
      "bg-[var(--color-accent)] text-white hover:brightness-95 shadow-sm hover:shadow-md",
    outline:
      "border border-navy-200 text-navy-900 hover:bg-navy-50",
    ghost: "text-navy-700 hover:bg-navy-50",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}