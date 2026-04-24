"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, lang } = useLanguage();
  const about = t.about;
  const pillars = [
    { label: about.visionLabel, text: about.vision, n: "I" },
    { label: about.missionLabel, text: about.mission, n: "II" },
    { label: about.valuesLabel, text: about.values, n: "III" },
  ];
  return (
    <section className="relative min-h-screen pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-60 pointer-events-none" aria-hidden />
      <div className="relative w-full h-[50vh] mb-16 md:mb-20 lg:mb-24 overflow-hidden">
        <Image
          src="/about-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={92}
          className="object-cover object-[center_30%] opacity-85 pointer-events-none select-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[var(--surface)] pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex items-end pb-10 md:pb-14 lg:pb-16">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <h1 className="font-display text-[44px] leading-[1] md:text-[64px] lg:text-[80px] xl:text-[92px] font-bold tracking-tight text-white mb-3 md:mb-4">
                {lang === "jp" ? "会社概要" : "About"}
              </h1>
              <p className="text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-white/75 max-w-md">
                {lang === "jp"
                  ? "分析から実装まで。"
                  : "Analysis to execution."}
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
                    {lang === "jp" ? "企業理念" : "The Firm"}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] font-bold text-[var(--ink)] tracking-tight">
                  {about.heading}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--ink-soft)]">
                  {about.lede}
                </p>
              </div>
            </div>
            <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-0 md:gap-px bg-[var(--rule)] border-y border-[var(--rule)]">
              {pillars.map((p) => (
                <div key={p.label} className="bg-[var(--surface)] p-6 md:p-8">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="font-display text-[var(--ink-faint)] text-xl">{p.n}</span>
                    <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)]">
                      {p.label}
                    </span>
                  </div>
                  <p className="font-display text-[14px] md:text-[15px] leading-[1.6] text-[var(--ink)]">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 md:mt-14 pt-8 border-t border-[var(--rule)] grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)] mb-2">
                  {about.establishedLabel}
                </div>
                <div className="text-[13px] text-[var(--ink)]">{about.established}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)] mb-2">
                  {about.clientsLabel}
                </div>
                <div className="text-[13px] text-[var(--ink-soft)] leading-relaxed">
                  {about.clients}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
