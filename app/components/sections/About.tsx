"use client";

import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const about = t.about;
  const pillars = [
    { label: about.visionLabel, text: about.vision, n: "I" },
    { label: about.missionLabel, text: about.mission, n: "II" },
    { label: about.valuesLabel, text: about.values, n: "III" },
  ];
  return (
    <section className="pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={about.eyebrow}
          heading={about.heading}
          lede={about.lede}
        />
        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-12 border-t border-[var(--color-rule)] pt-12">
          {pillars.map((p) => (
            <div key={p.label}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-[var(--color-navy-600)] text-lg">
                  {p.n}
                </span>
                <span className="eyebrow">{p.label}</span>
              </div>
              <p className="font-display text-[20px] md:text-[22px] leading-[1.45] text-[var(--color-navy-900)]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-[var(--color-rule)] pt-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="eyebrow mb-2">{about.establishedLabel}</div>
            <div className="text-[15px] text-[var(--color-ink)]">
              {about.established}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow mb-2">{about.clientsLabel}</div>
            <div className="text-[15px] text-[var(--color-ink)] leading-relaxed">
              {about.clients}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
