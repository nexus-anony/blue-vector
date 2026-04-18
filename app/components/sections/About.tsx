"use client";

import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";
import { content } from "@/app/lib/content";

export default function About() {
  const { t, lang } = useLanguage();
  const about = t.about;
  const altEyebrow = content[lang === "en" ? "jp" : "en"].about.eyebrow;
  const pillars = [
    { label: about.visionLabel, text: about.vision, n: "I" },
    { label: about.missionLabel, text: about.mission, n: "II" },
    { label: about.valuesLabel, text: about.values, n: "III" },
  ];
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-60 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <SectionHeading
              eyebrow={about.eyebrow}
              eyebrowAlt={altEyebrow}
              heading={about.heading}
              lede={about.lede}
            />
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
    </section>
  );
}
