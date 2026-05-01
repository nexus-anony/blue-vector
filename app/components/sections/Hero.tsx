"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

const ROTATION_MS = 6000;

export type HeroImage = { url: string; bottomFadeStyle: string; topFadeStyle: string };

export default function Hero({ images }: { images: HeroImage[] }) {
  const { t } = useLanguage();
  const hero = t.hero;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section className="font-sans relative flex flex-col min-h-[88svh] sm:min-h-[92svh] md:min-h-screen bg-[var(--surface)] overflow-hidden">
      {images.map((img, i) => {
        const prev = (active - 1 + images.length) % images.length;
        const isActive = i === active;
        const isPrev = i === prev;
        const transform = isActive
          ? "translate-x-0"
          : isPrev
            ? "-translate-x-full"
            : "translate-x-full";
        const opacity = isActive || isPrev ? "opacity-75" : "opacity-0";
        const fadeOpacity = isActive ? "opacity-100" : "opacity-0";
        const motion =
          isActive || isPrev
            ? "transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
            : "transition-none";
        return (
          <div key={`${img.url}-${i}`} className="contents">
            <Image
              src={img.url}
              alt=""
              fill
              sizes="100vw"
              quality={92}
              preload={i === 0}
              className={`absolute inset-0 object-cover pointer-events-none select-none ${motion} ${transform} ${opacity}`}
              aria-hidden
            />
            {img.topFadeStyle && (
              <div
                aria-hidden
                className={`absolute inset-0 pointer-events-none transition-opacity duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${fadeOpacity}`}
                style={{ background: img.topFadeStyle }}
              />
            )}
            {img.bottomFadeStyle && (
              <div
                aria-hidden
                className={`absolute inset-0 pointer-events-none transition-opacity duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${fadeOpacity}`}
                style={{ background: img.bottomFadeStyle }}
              />
            )}
          </div>
        );
      })}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/35 via-[var(--surface)]/25 to-[var(--surface)]/65 pointer-events-none"
        aria-hidden
      />
      <div className="relative flex-1 flex items-center mx-auto w-full max-w-7xl px-6 lg:px-10 pt-28 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32">
        <div className="grid w-full grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="flex items-center gap-5 mb-8 md:mb-10">
              <span className="inline-block w-14 md:w-16 h-px bg-(--rule-strong)" />
              <span className="font-segoe font-light tracking-[0.2em] uppercase text-(--ink) text-[18px] md:text-[22px] lg:text-[26px] leading-[1.3]">
                {hero.eyebrow}
              </span>
            </div>
            <h1 className="mb-3 md:mb-4">
              <span className="sr-only">
                {hero.headline} — {hero.tagline}
              </span>
              <span
                aria-hidden
                className="block overflow-hidden w-56 sm:w-72 md:w-96 lg:w-md xl:w-lg aspect-1264/174"
              >
                <Image
                  src="/BLUE VECTOR logo_word.png"
                  alt=""
                  width={1920}
                  height={1080}
                  priority
                  aria-hidden
                  className="w-[152%] max-w-none -translate-x-[17.1%] -translate-y-[39.1%] select-none pointer-events-none"
                />
              </span>
            </h1>
            <p className="font-segoe font-semibold tracking-[-0.01em] text-(--ink) text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[64px] leading-[1.1] mb-6 md:mb-8 lg:whitespace-nowrap">
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