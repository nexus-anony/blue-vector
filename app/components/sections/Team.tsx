"use client";

import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";

function Avatar({
  name,
  photo,
  initials,
}: {
  name: string;
  photo?: string;
  initials: string;
}) {
  return (
    <div className="aspect-[4/5] bg-[var(--color-stone)] text-[var(--color-navy-900)] relative overflow-hidden flex items-center justify-center border border-[var(--color-rule)]">
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 768px) 20vw, 40vw"
          className="object-cover object-top grayscale"
        />
      ) : (
        <>
          <div className="absolute inset-0 bv-diag opacity-30" aria-hidden />
          <div
            className="font-display text-[64px] md:text-[96px] font-bold tracking-tight"
            aria-hidden
          >
            {initials}
          </div>
        </>
      )}
    </div>
  );
}

export default function Team() {
  const { t } = useLanguage();
  const team = t.team;
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={team.eyebrow}
          heading={team.heading}
          lede={team.lede}
        />
        <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-14 border-t border-[var(--color-rule)] pt-12">
          {team.members.map((m) => (
            <article
              key={m.id}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8"
            >
              <div className="w-36 sm:w-40 lg:w-44 shrink-0">
                <Avatar name={m.name} photo={m.photo} initials={m.initials} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-[20px] md:text-[24px] font-bold text-[var(--color-navy-900)] leading-tight">
                  {m.name}
                </h3>
                <div className="mt-2 text-[10px] tracking-[0.22em] uppercase text-[var(--color-navy-700)] font-semibold">
                  {m.role}
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--color-rule)]">
                  <p className="text-[13px] md:text-[14px] leading-[1.75] text-[var(--color-ink-soft)]">
                    {m.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
