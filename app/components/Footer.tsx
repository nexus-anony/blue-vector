"use client";

import Link from "next/link";
import BrandMark from "./BrandMark";
import { useLanguage } from "./LanguageContext";

const LEGAL_PATHS = ["/privacy", "/terms", "/accessibility"];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[var(--surface)] text-[var(--ink-soft)] border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <BrandMark brand={t.brand} />
            <p className="mt-5 text-[13px] leading-[1.7] text-[var(--ink-soft)] max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="mt-6 text-[12px] tracking-[0.18em] uppercase text-[var(--ink-muted)]">
              {t.footer.address}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ink-muted)] mb-4">
              Legal
            </div>
            <ul className="space-y-2 text-[13px]">
              {t.footer.legal.map((item, i) => (
                <li key={item}>
                  <Link
                    href={LEGAL_PATHS[i] ?? "#"}
                    className="text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-[var(--rule)] text-[11px] tracking-[0.14em] uppercase text-[var(--ink-muted)]">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
