"use client";

import { useEffect, useMemo, useState } from "react";
import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";
import type { Lang } from "@/app/lib/content";

function formatDate(raw: string, lang: Lang) {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  if (lang === "jp") {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function News() {
  const { t, lang } = useLanguage();
  const news = t.news;
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={news.eyebrow}
          heading={news.heading}
          lede={news.lede}
        />
        <div className="mt-14 border-t border-[var(--color-rule)] pt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-px bg-[var(--color-rule-soft)]">
          {news.items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setExpanded(item.id)}
              className="group text-left bg-white p-6 md:p-7 flex flex-col h-full border border-[var(--color-rule)] md:border-0 mb-[-1px] md:mb-0 hover:bg-[var(--color-navy-50)] transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <time className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-navy-700)] font-semibold">
                  {formatDate(item.date, lang)}
                </time>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)] border border-[var(--color-rule)] px-2 py-0.5">
                  {item.category}
                </span>
              </div>
              <h3 className="font-display text-[18px] leading-[1.35] font-bold text-[var(--color-navy-900)] mb-3 line-clamp-3">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[var(--color-ink-soft)] line-clamp-4 flex-1">
                {item.excerpt}
              </p>
              <div className="mt-6 text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--color-navy-700)] group-hover:text-[var(--color-navy-900)] inline-flex items-center gap-2">
                {news.readMore} <span aria-hidden>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {expanded && (
        <NewsModal
          id={expanded}
          onClose={() => setExpanded(null)}
          lang={lang}
        />
      )}
    </section>
  );
}

function NewsModal({
  id,
  onClose,
  lang,
}: {
  id: string;
  onClose: () => void;
  lang: Lang;
}) {
  const { t } = useLanguage();
  const news = t.news;
  const item = useMemo(() => news.items.find((x) => x.id === id), [news, id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-[var(--color-navy-900)]/70 p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[92vh] overflow-y-auto border border-[var(--color-rule)] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-rule)]">
          <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--color-navy-700)]">
            {item.category}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            {news.close} ×
          </button>
        </div>
        <article className="px-6 py-8 md:px-10 md:py-12">
          <time className="eyebrow block mb-4">
            {formatDate(item.date, lang)}
          </time>
          <h3 className="font-display text-[26px] md:text-[32px] leading-[1.2] font-bold text-[var(--color-navy-900)] mb-6">
            {item.title}
          </h3>
          <p className="text-[15px] leading-[1.8] text-[var(--color-ink-soft)]">
            {item.body}
          </p>
        </article>
      </div>
    </div>
  );
}
