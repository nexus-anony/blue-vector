"use client";

import { useEffect, useMemo, useState } from "react";
import SectionHeading from "../SectionHeading";
import { useLanguage } from "../LanguageContext";
import { content, type Lang } from "@/app/lib/content";

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
  const altEyebrow = content[lang === "en" ? "jp" : "en"].news.eyebrow;
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-50 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <SectionHeading
              eyebrow={news.eyebrow}
              eyebrowAlt={altEyebrow}
              heading={news.heading}
              lede={news.lede}
            />
            <div className="mt-16 md:mt-20 border-t border-[var(--rule)] pt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-px bg-[var(--rule)]">
              {news.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setExpanded(item.id)}
                  className="group text-left bg-[var(--surface)] p-5 md:p-6 flex flex-col h-full border border-[var(--rule)] md:border-0 mb-[-1px] md:mb-0 hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-[10px] tracking-[0.18em] uppercase text-[var(--ink-soft)] font-semibold">
                      {formatDate(item.date, lang)}
                    </time>
                    <span className="text-[9px] tracking-[0.18em] uppercase text-[var(--ink-muted)] border border-[var(--rule-strong)] px-2 py-0.5">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-[13px] md:text-[14px] leading-[1.4] font-bold text-[var(--ink)] mb-2 line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-[11px] leading-[1.7] text-[var(--ink-soft)] line-clamp-4 flex-1">
                    {item.excerpt}
                  </p>
                  <div className="mt-5 text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-soft)] group-hover:text-[var(--ink)] inline-flex items-center gap-2">
                    {news.readMore} <span aria-hidden>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
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
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[var(--surface)] text-[var(--ink)] w-full max-w-2xl max-h-[92vh] overflow-y-auto border border-[var(--rule)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--rule)]">
          <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)]">
            {item.category}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)]"
          >
            {news.close} ×
          </button>
        </div>
        <article className="px-6 py-8 md:px-10 md:py-12">
          <time className="block mb-4 text-[11px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)]">
            {formatDate(item.date, lang)}
          </time>
          <h3 className="font-display text-[17px] md:text-[20px] leading-[1.3] font-bold text-[var(--ink)] mb-4">
            {item.title}
          </h3>
          <p className="text-[13px] leading-[1.8] text-[var(--ink-soft)]">
            {item.body}
          </p>
        </article>
      </div>
    </div>
  );
}
