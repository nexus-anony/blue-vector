"use client";

import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";
import { content } from "@/app/lib/content";

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
    <div className="aspect-[4/5] bg-[var(--surface-raised)] relative overflow-hidden flex items-center justify-center border border-[var(--rule)]">
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
          <div className="absolute inset-0 bv-diag opacity-60" aria-hidden />
          <div
            className="font-display text-[64px] md:text-[96px] font-bold tracking-tight text-[var(--ink-muted)]"
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
  const { t, lang } = useLanguage();
  const team = t.team;
  const altEyebrow = content[lang === "en" ? "jp" : "en"].team.eyebrow;
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-50 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <SectionHeading
              eyebrow={team.eyebrow}
              eyebrowAlt={altEyebrow}
              heading={team.heading}
              lede={team.lede}
            />
            <div className="mt-12 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-10 border-t border-[var(--rule)] pt-8 md:pt-10">
              {team.members.map((m) => (
                <article
                  key={m.id}
                  className="flex flex-col sm:flex-row gap-5 sm:gap-7"
                >
                  <div className="w-32 sm:w-36 lg:w-40 shrink-0">
                    <Avatar name={m.name} photo={m.photo} initials={m.initials} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-[16px] md:text-[18px] font-bold text-[var(--ink)] leading-tight">
                      {m.name}
                    </h3>
                    <div className="mt-1.5 text-[9px] tracking-[0.22em] uppercase text-[var(--ink-soft)] font-semibold">
                      {m.role}
                    </div>
                    <div className="mt-3 pt-3 border-t border-[var(--rule)]">
                      <p className="text-[12px] leading-[1.7] text-[var(--ink-soft)]">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
