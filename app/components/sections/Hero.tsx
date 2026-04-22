"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

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
