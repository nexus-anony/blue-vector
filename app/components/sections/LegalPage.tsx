"use client";

import { useLanguage } from "../LanguageContext";

type LegalKey = "privacy" | "terms" | "accessibility";

export default function LegalPage({
  pageKey,
  draft = false,
}: {
  pageKey: LegalKey;
  draft?: boolean;
}) {
  const { t } = useLanguage();
  const page = t.legalPages[pageKey];
  const { contentsLabel, effectiveLabel } = t.legalPages;

  return (
    <section className="relative min-h-screen pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-glow pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            {/* Document header */}
            <header className="border-b border-[var(--rule)] pb-8 md:pb-10">
              <div className="flex items-start gap-3 mb-5">
                <span className="inline-block w-6 h-px mt-[0.6rem] bg-[var(--rule-strong)]" aria-hidden />
                <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)]">
                  {draft ? t.legalPages.draftTag : "Legal"}
                </span>
              </div>
              <h1 className="font-display text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-bold text-[var(--ink)] tracking-tight max-w-3xl">
                {page.title}
              </h1>
              <p className="mt-6 text-[14px] md:text-[15px] leading-[1.75] text-[var(--ink-soft)] max-w-2xl">
                {page.lede}
              </p>
              <div className="mt-8 text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-muted)] tabular-nums">
                {effectiveLabel} · {page.effective}
              </div>
            </header>

            {/* Body grid: ToC + Document */}
            <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-14">
              {/* Table of Contents (sticky on desktop, collapsed on mobile) */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-muted)] mb-4 pb-3 border-b border-[var(--rule)]">
                    {contentsLabel}
                  </div>
                  <ol className="space-y-2.5">
                    {page.sections.map((s) => (
                      <li key={s.id} className="flex gap-3 text-[12px] leading-[1.5]">
                        <span className="font-mono text-[var(--ink-faint)] tabular-nums shrink-0 w-5">
                          {s.number}
                        </span>
                        <a
                          href={`#${s.id}`}
                          className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>

              {/* Document body */}
              <article className="lg:col-span-8 max-w-2xl">
                {page.sections.map((s, idx) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className={`scroll-mt-28 ${idx > 0 ? "mt-12 md:mt-14 pt-12 md:pt-14 border-t border-[var(--rule)]" : ""}`}
                  >
                    <div className="flex items-baseline gap-4 mb-5">
                      <span className="font-mono text-[14px] md:text-[15px] text-[var(--ink-soft)] tabular-nums shrink-0 font-semibold">
                        {s.number}.
                      </span>
                      <h2 className="font-display text-[18px] md:text-[20px] lg:text-[22px] leading-[1.25] font-bold text-[var(--ink)] tracking-tight">
                        {s.heading}
                      </h2>
                    </div>
                    <div className="space-y-4 text-[13px] md:text-[14px] leading-[1.85] text-[var(--ink-soft)]">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}