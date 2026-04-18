"use client";

import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;
  return (
    <section className="pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32 bg-[var(--color-stone)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow={s.eyebrow} heading={s.heading} lede={s.lede} />
        <ul className="mt-14 border-t border-[var(--color-rule)]">
          {s.items.map((item) => (
            <li
              key={item.id}
              className="border-b border-[var(--color-rule)] py-10 md:py-12 grid lg:grid-cols-12 gap-6 lg:gap-10"
            >
              <div className="lg:col-span-2">
                <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[var(--color-navy-700)]">
                  {item.number} / 0{s.items.length}
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] md:text-[26px] leading-[1.25] font-bold text-[var(--color-navy-900)] mb-3">
                  {item.title}
                </h3>
                <div className="text-[13px] leading-[1.55] text-[var(--color-ink-soft)]">
                  {item.subtitle}
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] leading-[1.75] text-[var(--color-ink-soft)] mb-5">
                  {item.description}
                </p>
                <ul className="space-y-2.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[14px] text-[var(--color-ink)]"
                    >
                      <span
                        className="text-[var(--color-navy-700)] mt-[0.55rem] inline-block w-3 h-px bg-current"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
