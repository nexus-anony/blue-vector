"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/app/lib/content";
import BrandMark from "./BrandMark";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;
    const TOP_FLOOR = 20;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const last = lastYRef.current;
        if (y < TOP_FLOOR) {
          setHidden(false);
        } else if (y > last) {
          setHidden(true);
        } else if (y < last) {
          setHidden(false);
        }
        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) setHidden(false);
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const transformClass = `transition-transform duration-150 ease-out will-change-transform ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"}`;
  // Home page in light mode has a fixed navy hero, so a transparent header
  // would be unreadable. Force a solid surface background in that case so the
  // navbar looks the same as on other light-mode pages.
  const forceSolid = pathname === "/" && theme === "light";
  const bgClass =
    mobileOpen || forceSolid
      ? "bg-[var(--surface)]/95 backdrop-blur-[2px]"
      : "bg-transparent";
  const shellClass = `fixed inset-x-0 top-0 z-40 ${bgClass} border-b border-[var(--rule)] ${transformClass}`;

  return (
    <header className={shellClass}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
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
              <ThemeToggle />
            </div>
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
            <div className="mt-3 pt-3 border-t border-[var(--rule)] flex items-center gap-4">
              <ThemeToggle />
              <span className="text-[var(--ink-faint)]">·</span>
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
