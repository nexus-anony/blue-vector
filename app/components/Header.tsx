"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/app/lib/content";
import BrandMark from "./BrandMark";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const RAMP = 160;
    const onScroll = () => {
      const y = window.scrollY;
      setFade(Math.min(1, Math.max(0, y / RAMP)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const shellClass = `fixed inset-x-0 top-0 z-40 ${mobileOpen ? "bg-[var(--surface)] md:bg-transparent" : "bg-transparent"}`;
  const fadeOpacity = mobileOpen ? 1 : fade;

  return (
    <header className={shellClass}>
      <div
        aria-hidden
        className="bv-nav-fade pointer-events-none absolute inset-x-0 top-0 h-32 -z-10 transition-opacity duration-200 ease-out"
        style={{ opacity: fadeOpacity }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-28 md:h-32 lg:h-36">
          <BrandMark brand={t.brand} />
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className={`bv-link ${isActive(item.path) ? "text-[var(--ink)] font-semibold" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:block border-l border-[var(--rule)] pl-4">
              <LanguageToggle />
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-[var(--rule)] text-[var(--ink)]"
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
          <div className="md:hidden border-t border-[var(--rule)] py-4 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 text-[15px] ${isActive(item.path) ? "text-[var(--ink)] font-semibold" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[var(--rule)]">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
