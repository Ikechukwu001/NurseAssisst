export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-navy-600">{subtitle}</p>}
    </div>
  );
}