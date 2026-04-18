"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { content, type Dict, type Lang } from "@/app/lib/content";

const NAV_ITEMS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "team", key: "team" as const },
  { id: "news", key: "news" as const },
  { id: "contact", key: "contact" as const },
];

export default function Site() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedNews, setExpandedNews] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const t: Dict = content[lang];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "jp" ? "ja" : "en";
    }
  }, [lang]);

  const fontClass = lang === "jp" ? "font-jp" : "";

  return (
    <div className={fontClass}>
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Services t={t.services} />
        <Team t={t.team} />
        <News
          t={t.news}
          expanded={expandedNews}
          setExpanded={setExpandedNews}
          lang={lang}
        />
        <Contact
          t={t.contact}
          submitted={submitted}
          submitting={submitting}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            window.setTimeout(() => {
              setSubmitting(false);
              setSubmitted(true);
            }, 650);
          }}
        />
      </main>
      <Footer t={t.footer} brand={t.brand} nav={t.nav} />
      {expandedNews && (
        <NewsModal
          t={t.news}
          id={expandedNews}
          onClose={() => setExpandedNews(null)}
          lang={lang}
        />
      )}
    </div>
  );
}

function BrandMark({
  brand,
  onDark = false,
}: {
  brand: { name: string; subtitle: string };
  onDark?: boolean;
}) {
  return (
    <a href="#home" className="flex items-center gap-3 group shrink-0">
      <Image
        src="/logo.png"
        alt={`${brand.name} logo`}
        width={32}
        height={32}
        priority
        className="h-8 w-8 object-contain"
      />
      <div className="leading-tight">
        <div
          className={`text-[13px] tracking-[0.28em] font-bold ${
            onDark ? "text-white" : "text-[var(--color-navy-900)]"
          }`}
        >
          {brand.name}
        </div>
        <div
          className={`text-[9px] tracking-[0.32em] uppercase mt-0.5 ${
            onDark ? "text-white/60" : "text-[var(--color-ink-muted)]"
          }`}
        >
          {brand.subtitle}
        </div>
      </div>
    </a>
  );
}

function LanguageToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div
      className="inline-flex items-center text-[11px] tracking-[0.18em] uppercase font-medium select-none"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2 py-1 transition-colors ${
          lang === "en"
            ? "text-[var(--color-navy-900)]"
            : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
        }`}
        aria-pressed={lang === "en" ? "true" : "false"}
      >
        EN
      </button>
      <span className="text-[var(--color-rule)]">/</span>
      <button
        type="button"
        onClick={() => setLang("jp")}
        className={`px-2 py-1 transition-colors ${
          lang === "jp"
            ? "text-[var(--color-navy-900)]"
            : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
        }`}
        aria-pressed={lang === "jp" ? "true" : "false"}
      >
        JP
      </button>
    </div>
  );
}

function Header({
  t,
  lang,
  setLang,
  mobileOpen,
  setMobileOpen,
}: {
  t: Dict;
  lang: Lang;
  setLang: (l: Lang) => void;
  mobileOpen: boolean;
  setMobileOpen: (o: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-[2px] border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <BrandMark brand={t.brand} />
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[var(--color-ink-soft)]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="bv-link hover:text-[var(--color-navy-900)]"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:block border-l border-[var(--color-rule)] pl-4">
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-[var(--color-rule)] text-[var(--color-ink)]"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen ? "true" : "false"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {mobileOpen ? (
                  <path
                    d="M3 3 L13 13 M13 3 L3 13"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                ) : (
                  <path
                    d="M2 4 H14 M2 8 H14 M2 12 H14"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--color-rule)] py-4 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-[15px] text-[var(--color-ink-soft)] hover:text-[var(--color-navy-900)]"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[var(--color-rule-soft)]">
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero({ t }: { t: Dict["hero"] }) {
  return (
    <section
      id="home"
      className="relative bg-[var(--color-navy-900)] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bv-diag opacity-50" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-[0.04] pointer-events-none"
        aria-hidden
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          <g stroke="white" strokeWidth="0.5" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx="300"
                cy="200"
                r={20 + i * 18}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-px bg-white/60" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-white/70">
              {t.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-[40px] leading-[1.05] md:text-[68px] lg:text-[88px] md:leading-[1] font-bold tracking-tight mb-8">
            {t.headline}
          </h1>
          <p className="font-display text-xl md:text-2xl lg:text-[28px] text-white/90 leading-[1.35] max-w-3xl mb-8">
            {t.tagline}
          </p>
          <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.75] max-w-2xl mb-10">
            {t.subtext}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[var(--color-navy-900)] text-[12px] font-semibold tracking-[0.18em] uppercase hover:bg-[var(--color-stone)] transition-colors"
            >
              {t.cta}
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white text-[12px] font-semibold tracking-[0.18em] uppercase hover:bg-white/10 transition-colors"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[10px] tracking-[0.24em] uppercase text-white/55">
          <span>Est. 2026</span>
          <span className="text-white/20">·</span>
          <span>Tokyo, Japan</span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Defense · Security</span>
          <span className="text-white/20 hidden md:inline">·</span>
          <span className="hidden md:inline">Strategic Advisory</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  heading,
  lede,
}: {
  eyebrow: string;
  heading: string;
  lede?: string;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-4">
        <div className="eyebrow">{eyebrow}</div>
      </div>
      <div className="lg:col-span-8">
        <h2 className="font-display text-[30px] md:text-[40px] lg:text-[46px] leading-[1.15] font-bold text-[var(--color-navy-900)] tracking-tight">
          {heading}
        </h2>
        {lede && (
          <p className="mt-6 text-[15px] md:text-[16px] leading-[1.75] text-[var(--color-ink-soft)] max-w-3xl">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}

function About({ t }: { t: Dict["about"] }) {
  const pillars = [
    { label: t.visionLabel, text: t.vision, n: "I" },
    { label: t.missionLabel, text: t.mission, n: "II" },
    { label: t.valuesLabel, text: t.values, n: "III" },
  ];
  return (
    <section
      id="about"
      className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.eyebrow}
          heading={t.heading}
          lede={t.lede}
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
            <div className="eyebrow mb-2">{t.establishedLabel}</div>
            <div className="text-[15px] text-[var(--color-ink)]">
              {t.established}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow mb-2">{t.clientsLabel}</div>
            <div className="text-[15px] text-[var(--color-ink)] leading-relaxed">
              {t.clients}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ t }: { t: Dict["services"] }) {
  return (
    <section
      id="services"
      className="py-20 md:py-28 lg:py-32 bg-[var(--color-stone)] border-t border-[var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.eyebrow}
          heading={t.heading}
          lede={t.lede}
        />
        <ul className="mt-14 border-t border-[var(--color-rule)]">
          {t.items.map((item) => (
            <li
              key={item.id}
              className="border-b border-[var(--color-rule)] py-10 md:py-12 grid lg:grid-cols-12 gap-6 lg:gap-10"
            >
              <div className="lg:col-span-2">
                <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[var(--color-navy-700)]">
                  {item.number} / 0{t.items.length}
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] md:text-[26px] leading-[1.25] font-bold text-[var(--color-navy-900)] mb-3">
                  {item.title}
                </h3>
                <div className="text-[13px] leading-[1.55] text-[var(--color-ink-soft)]">
                  {item.subtitle}
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] leading-[1.75] text-[var(--color-ink-soft)] mb-5">
                  {item.description}
                </p>
                <ul className="space-y-2.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[14px] text-[var(--color-ink)]"
                    >
                      <span
                        className="text-[var(--color-navy-700)] mt-[0.55rem] inline-block w-3 h-px bg-current"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="aspect-[4/5] bg-[var(--color-navy-900)] text-white relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bv-diag opacity-40" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
      <div
        className="font-display text-[80px] md:text-[120px] font-bold text-white/90 tracking-tight"
        aria-hidden
      >
        {initials}
      </div>
    </div>
  );
}

function Team({ t }: { t: Dict["team"] }) {
  return (
    <section
      id="team"
      className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-rule)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.eyebrow}
          heading={t.heading}
          lede={t.lede}
        />
        <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-14 border-t border-[var(--color-rule)] pt-12">
          {t.members.map((m) => (
            <article key={m.id}>
              <Avatar initials={m.initials} />
              <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-[var(--color-rule)] pb-4">
                <h3 className="font-display text-[22px] md:text-[26px] font-bold text-[var(--color-navy-900)]">
                  {m.name}
                </h3>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-navy-700)] font-semibold text-right shrink-0">
                  {m.role}
                </div>
              </div>
              <p className="mt-5 text-[14px] md:text-[15px] leading-[1.8] text-[var(--color-ink-soft)]">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function News({
  t,
  expanded,
  setExpanded,
  lang,
}: {
  t: Dict["news"];
  expanded: string | null;
  setExpanded: (id: string | null) => void;
  lang: Lang;
}) {
  return (
    <section
      id="news"
      className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-rule)] bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.eyebrow}
          heading={t.heading}
          lede={t.lede}
        />
        <div className="mt-14 border-t border-[var(--color-rule)] pt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-px bg-[var(--color-rule-soft)]">
          {t.items.map((item) => (
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
                {t.readMore} <span aria-hidden>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsModal({
  t,
  id,
  onClose,
  lang,
}: {
  t: Dict["news"];
  id: string;
  onClose: () => void;
  lang: Lang;
}) {
  const item = useMemo(() => t.items.find((x) => x.id === id), [t, id]);

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
            {t.close} ×
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

function Contact({
  t,
  submitted,
  submitting,
  onSubmit,
}: {
  t: Dict["contact"];
  submitted: boolean;
  submitting: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 lg:py-32 bg-[var(--color-navy-900)] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.22em] uppercase text-white/60 font-medium mb-5">
              {t.eyebrow}
            </div>
            <h2 className="font-display text-[30px] md:text-[40px] lg:text-[46px] leading-[1.15] font-bold tracking-tight mb-6">
              {t.heading}
            </h2>
            <p className="text-[15px] leading-[1.8] text-white/75 max-w-md">
              {t.lede}
            </p>
            <div className="mt-12 pt-8 border-t border-white/15 space-y-5 text-[13px]">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50 mb-1">
                  {t.officeLabel}
                </div>
                <div className="text-white">{t.officeValue}</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50 mb-1">
                  {t.emailContactLabel}
                </div>
                <a
                  href={`mailto:${t.emailContactValue}`}
                  className="text-white bv-underline"
                >
                  {t.emailContactValue}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-white/20 bg-white/5 p-8 md:p-12">
                <div className="text-[11px] tracking-[0.22em] uppercase text-white/60 mb-4">
                  ✓ Received
                </div>
                <p className="font-display text-[22px] md:text-[26px] leading-[1.4] text-white">
                  {t.success}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 md:gap-6">
                <Field
                  label={t.nameLabel}
                  name="name"
                  placeholder={t.namePlaceholder}
                  required
                />
                <Field
                  label={t.emailLabel}
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  required
                />
                <Field
                  label={t.subjectLabel}
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                />
                <Field
                  label={t.messageLabel}
                  name="message"
                  placeholder={t.messagePlaceholder}
                  textarea
                  required
                />
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-navy-900)] text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[var(--color-stone)] transition-colors disabled:opacity-60"
                  >
                    {submitting ? t.submitting : t.submit}
                    {!submitting && <span aria-hidden>→</span>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "w-full bg-transparent border border-white/20 px-4 py-3 text-[15px] text-white placeholder:text-white/35 focus:border-white focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-white/60 font-medium mb-2">
        {label}
        {required && <span className="text-white/40 ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          required={required}
          className={base + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </label>
  );
}

function Footer({
  t,
  brand,
  nav,
}: {
  t: Dict["footer"];
  brand: Dict["brand"];
  nav: Dict["nav"];
}) {
  return (
    <footer className="bg-[var(--color-navy-900)] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <BrandMark brand={brand} onDark />
            <p className="mt-5 text-[13px] leading-[1.7] text-white/60 max-w-sm">
              {t.tagline}
            </p>
            <div className="mt-6 text-[12px] tracking-[0.18em] uppercase text-white/45">
              {t.address}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-[13px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/70 hover:text-white"
                  >
                    {nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">
              Legal
            </div>
            <ul className="space-y-2 text-[13px]">
              {t.legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 text-[11px] tracking-[0.14em] uppercase text-white/40">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
