"use client";

import BrandMark from "./BrandMark";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[var(--color-navy-900)] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <BrandMark brand={t.brand} onDark />
            <p className="mt-5 text-[13px] leading-[1.7] text-white/60 max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="mt-6 text-[12px] tracking-[0.18em] uppercase text-white/45">
              {t.footer.address}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">
              Legal
            </div>
            <ul className="space-y-2 text-[13px]">
              {t.footer.legal.map((item) => (
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
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
