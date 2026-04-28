"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";

export type HeroImage = { url: string; bottomFadeStyle: string };

export default function Services({ background }: { background: HeroImage }) {
  const { t, lang } = useLanguage();
  const s = t.services;
  return (
    <section className="relative min-h-screen pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="relative w-full h-[50vh] mb-16 md:mb-20 lg:mb-24 overflow-hidden">
        <Image
          src={background.url}
          alt=""
          fill
          sizes="100vw"
          quality={92}
          className="object-cover opacity-85 pointer-events-none select-none"
          aria-hidden
        />
        {background.bottomFadeStyle && (
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: background.bottomFadeStyle }}
          />
        )}
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex items-end pb-10 md:pb-14 lg:pb-16">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <h1 className="font-display text-[44px] leading-[1] md:text-[64px] lg:text-[80px] xl:text-[92px] font-bold tracking-tight text-white mb-3 md:mb-4">
                {lang === "jp" ? "サービス" : "Services"}
              </h1>
              <p className="text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-white/75 max-w-md">
                {lang === "jp"
                  ? "コンサル、コミュニティ、テック、投資。"
                  : "Consulting. Community. Technology. Capital."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bv-glow pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-3">
                  <span className="inline-block w-6 h-px mt-[0.6rem] bg-[var(--rule-strong)]" aria-hidden />
                  <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)]">
                    {lang === "jp" ? "サービス" : "Our Services"}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] font-bold text-[var(--ink)] tracking-tight">
                  {s.heading}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--ink-soft)]">
                  {s.lede}
                </p>
              </div>
            </div>
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
                    <p className="text-[13px] leading-[1.8] text-[var(--ink-soft)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
