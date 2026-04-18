"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;
  return (
    <section className="relative bg-[var(--color-navy-900)] text-white overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-50" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-[0.04] pointer-events-none"
        aria-hidden
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          <g stroke="white" strokeWidth="0.5" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <circle key={i} cx="300" cy="200" r={20 + i * 18} />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-px bg-white/60" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-white/70">
              {hero.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-[40px] leading-[1.05] md:text-[68px] lg:text-[88px] md:leading-[1] font-bold tracking-tight mb-8">
            {hero.headline}
          </h1>
          <p className="font-display text-xl md:text-2xl lg:text-[28px] text-white/90 leading-[1.35] max-w-3xl mb-8">
            {hero.tagline}
          </p>
          <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.75] max-w-2xl mb-10">
            {hero.subtext}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[var(--color-navy-900)] text-[12px] font-semibold tracking-[0.18em] uppercase hover:bg-[var(--color-stone)] transition-colors"
            >
              {hero.cta}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white text-[12px] font-semibold tracking-[0.18em] uppercase hover:bg-white/10 transition-colors"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[10px] tracking-[0.24em] uppercase text-white/55">
          <span>Est. 2026</span>
          <span className="text-white/20">·</span>
          <span>Tokyo, Japan</span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Defense · Security</span>
          <span className="text-white/20 hidden md:inline">·</span>
          <span className="hidden md:inline">Strategic Advisory</span>
        </div>
      </div>
    </section>
  );
}
