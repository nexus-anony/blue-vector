export default function SectionHeading({
  eyebrow,
  eyebrowAlt,
  heading,
  lede,
}: {
  eyebrow: string;
  eyebrowAlt?: string;
  heading: string;
  lede?: string;
  onDark?: boolean;
}) {
  const numberMatch = eyebrow.match(/^(\d{2})\s*[—–-]\s*(.*)$/);
  const sectionNum = numberMatch?.[1];
  const eyebrowLabel = numberMatch?.[2] ?? eyebrow;

  const altMatch = eyebrowAlt?.match(/^(\d{2})\s*[—–-]\s*(.*)$/);
  const altLabel = altMatch?.[2] ?? eyebrowAlt;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-4">
        <div className="flex items-start gap-3">
          {sectionNum && (
            <span
              className="font-mono text-[11px] leading-[1.1] text-[var(--ink-faint)] tabular-nums"
              aria-hidden
            >
              § {sectionNum}
            </span>
          )}
          <span className="inline-block w-6 h-px mt-[0.55rem] bg-[var(--rule-strong)]" aria-hidden />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)]">
              {eyebrowLabel}
            </span>
            {altLabel && altLabel !== eyebrowLabel && (
              <span
                lang="ja"
                className="mt-1 text-[11px] tracking-[0.18em] text-[var(--ink-muted)]"
              >
                {altLabel}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-8">
        <h1 className="font-display text-[22px] md:text-[28px] lg:text-[34px] leading-[1.2] font-bold text-[var(--ink)] tracking-tight">
          {heading}
        </h1>
        {lede && (
          <p className="mt-5 text-[13px] md:text-[14px] leading-[1.75] text-[var(--ink-soft)] max-w-2xl">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
