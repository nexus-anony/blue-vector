"use client";

import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";
import { content } from "@/app/lib/content";

export default function Services() {
  const { t, lang } = useLanguage();
  const s = t.services;
  const altEyebrow = content[lang === "en" ? "jp" : "en"].services.eyebrow;
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-50 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <SectionHeading eyebrow={s.eyebrow} eyebrowAlt={altEyebrow} heading={s.heading} lede={s.lede} />
            <ul className="mt-16 md:mt-20 border-t border-[var(--rule)]">
              {s.items.map((item) => (
                <li
                  key={item.id}
                  className="group border-b border-[var(--rule)] py-8 md:py-10 grid lg:grid-cols-12 gap-5 lg:gap-8 transition-colors hover:bg-[var(--surface-hover)]"
                >
                  <div className="lg:col-span-2">
                    <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-muted)]">
                      {item.number} / 0{s.items.length}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-[16px] md:text-[18px] leading-[1.3] font-bold text-[var(--ink)] mb-2">
                      {item.title}
                    </h3>
                    <div className="text-[12px] leading-[1.55] text-[var(--ink-muted)]">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-[13px] leading-[1.8] text-[var(--ink-soft)] mb-5">
                      {item.description}
                    </p>
                    <ul className="space-y-2.5">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-4 text-[12px] text-[var(--ink)]"
                        >
                          <span
                            className="mt-[0.58rem] inline-block w-3 h-px bg-[var(--rule-strong)]"
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
        </div>
      </div>
    </section>
  );
}
