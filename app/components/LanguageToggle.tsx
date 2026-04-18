"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
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
