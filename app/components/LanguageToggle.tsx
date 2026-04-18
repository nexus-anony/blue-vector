"use client";

import { useLanguage } from "./LanguageContext";
import type { Lang } from "@/app/lib/content";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="inline-flex items-center text-[11px] tracking-[0.18em] uppercase font-medium select-none"
      role="radiogroup"
      aria-label="Language"
    >
      <Option code="en" label="EN" lang={lang} setLang={setLang} />
      <span className="text-[var(--ink-faint)]">/</span>
      <Option code="jp" label="JP" lang={lang} setLang={setLang} />
    </div>
  );
}

function Option({
  code,
  label,
  lang,
  setLang,
}: {
  code: Lang;
  label: string;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const active = lang === code;
  return (
    <button
      type="button"
      onClick={() => setLang(code)}
      className={`px-2 py-1 cursor-pointer transition-colors ${active ? "text-[var(--ink)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}
      role="radio"
      aria-checked={active ? "true" : "false"}
    >
      {label}
    </button>
  );
}
