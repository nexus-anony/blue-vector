"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const hero = t.hero;
  const isDark = theme === "dark";

  if (!isDark) {
    // Light mode — reverted to pre-theme layout (commit 3a0c13c).
    // This branch intentionally uses fixed navy-900 regardless of theme tokens,
    // to match the original "office and little ui updates" design.
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 md:pt-36 lg:pt-44 pb-15 md:pb-30 lg:pb-38">
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
            <span>Japan</span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Defense · Security</span>
            <span className="text-white/20 hidden md:inline">·</span>
            <span className="hidden md:inline">Strategic Advisory</span>
          </div>
        </div>
      </section>
    );
  }

  // Dark mode — current treatment with hero background image.
  return (
    <section className="relative flex flex-col min-h-screen bg-[var(--surface)] overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-75 pointer-events-none select-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/35 via-[var(--surface)]/25 to-[var(--surface)]/65 pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 bv-diag opacity-40 pointer-events-none" aria-hidden />
      <div className="relative flex-1 flex items-center mx-auto w-full max-w-7xl px-6 lg:px-10 pt-28 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32">
        <div className="grid w-full grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="flex items-center gap-4 mb-10 md:mb-12">
              <span className="inline-block w-10 h-px bg-[var(--rule-strong)]" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--ink-soft)]">
                {hero.eyebrow}
              </span>
            </div>
            <h1 className="font-display text-[36px] leading-[1.05] md:text-[56px] lg:text-[72px] xl:text-[80px] md:leading-[1] font-bold tracking-tight mb-10 md:mb-14 text-[var(--ink)]">
              {hero.headline}
            </h1>
            <p className="text-[15px] md:text-base lg:text-[17px] text-[var(--ink-soft)] leading-[1.55] max-w-xl mb-10 md:mb-12">
              {hero.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--invert)] text-[var(--on-invert)] text-[10px] font-semibold tracking-[0.22em] uppercase hover:opacity-90 transition-opacity"
              >
                {hero.cta}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--rule-strong)] text-[var(--ink)] text-[10px] font-semibold tracking-[0.22em] uppercase hover:bg-[var(--surface-hover)] transition-colors"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
