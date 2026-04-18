export default function SectionHeading({
  eyebrow,
  heading,
  lede,
}: {
  eyebrow: string;
  heading: string;
  lede?: string;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-4">
        <div className="eyebrow">{eyebrow}</div>
      </div>
      <div className="lg:col-span-8">
        <h1 className="font-display text-[30px] md:text-[40px] lg:text-[46px] leading-[1.15] font-bold text-[var(--color-navy-900)] tracking-tight">
          {heading}
        </h1>
        {lede && (
          <p className="mt-6 text-[15px] md:text-[16px] leading-[1.75] text-[var(--color-ink-soft)] max-w-3xl">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
