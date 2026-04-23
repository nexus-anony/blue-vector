"use client";

import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";
import { content, type Lang } from "@/app/lib/content";

export type TeamMemberView = {
  id: number;
  name_en: string;
  name_jp: string;
  role_en: string;
  role_jp: string;
  bio_en: string;
  bio_jp: string;
  photo: string | null;
};

function pick(m: TeamMemberView, field: "name" | "role" | "bio", lang: Lang) {
  return lang === "jp"
    ? (m[`${field}_jp` as const] as string)
    : (m[`${field}_en` as const] as string);
}

function Avatar({
  name,
  photo,
}: {
  name: string;
  photo?: string | null;
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
          <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--ink-muted)]">
            No image
          </div>
        </>
      )}
    </div>
  );
}

export default function Team({ members }: { members: TeamMemberView[] }) {
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
            {members.length === 0 ? (
              <div className="mt-12 border-t border-[var(--rule)] pt-10 text-sm text-[var(--ink-soft)]">
                No team members yet.
              </div>
            ) : (
              <div className="mt-12 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-10 border-t border-[var(--rule)] pt-8 md:pt-10">
                {members.map((m) => {
                  const name = pick(m, "name", lang);
                  return (
                    <article
                      key={m.id}
                      className="flex flex-col sm:flex-row gap-5 sm:gap-7"
                    >
                      <div className="w-32 sm:w-36 lg:w-40 shrink-0">
                        <Avatar name={name} photo={m.photo} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-[16px] md:text-[18px] font-bold text-[var(--ink)] leading-tight">
                          {name}
                        </h3>
                        <div className="mt-1.5 text-[9px] tracking-[0.22em] uppercase text-[var(--ink-soft)] font-semibold">
                          {pick(m, "role", lang)}
                        </div>
                        <div className="mt-3 pt-3 border-t border-[var(--rule)]">
                          <p className="text-[12px] leading-[1.7] text-[var(--ink-soft)] whitespace-pre-line">
                            {pick(m, "bio", lang)}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
