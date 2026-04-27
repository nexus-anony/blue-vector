"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

const HERO_IMAGES: { src: string; fit?: "cover" | "contain"; position?: string }[] = [
  { src: "/hero-1.jpg" },
  { src: "/hero-2.jpg" },
  { src: "/hero-3.jpg" },
  { src: "/hero-4.jpg" },
];
const ROTATION_MS = 6000;

export default function Hero() {
  const { t, lang } = useLanguage();
  const hero = t.hero;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen bg-[var(--surface)] overflow-hidden">
      {HERO_IMAGES.map((img, i) => {
        const prev = (active - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;
        const isActive = i === active;
        const isPrev = i === prev;
        const transform = isActive
          ? "translate-x-0"
          : isPrev
            ? "-translate-x-full"
            : "translate-x-full";
        const opacity = isActive || isPrev ? "opacity-75" : "opacity-0";
        const motion =
          isActive || isPrev
            ? "transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
            : "transition-none";
        const fitClass = img.fit === "contain" ? "object-contain" : "object-cover";
        return (
          <Image
            key={img.src}
            src={img.src}
            alt=""
            fill
            sizes="100vw"
            quality={92}
            preload={i === 0}
            className={`absolute inset-0 ${fitClass} pointer-events-none select-none ${motion} ${transform} ${opacity}`}
            aria-hidden
          />
        );
      })}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/35 via-[var(--surface)]/25 to-[var(--surface)]/65 pointer-events-none"
        aria-hidden
      />
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
            <p
              className={
                lang === "en"
                  ? "font-display font-bold tracking-tighter text-[var(--ink)] text-[22px] md:text-[28px] lg:text-[32px] leading-[1.15] max-w-xl mb-10 md:mb-12"
                  : "text-[15px] md:text-base lg:text-[17px] text-[var(--ink-soft)] leading-[1.55] max-w-xl mb-10 md:mb-12"
              }
            >
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