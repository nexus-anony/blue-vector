"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="inline-flex items-center text-[11px] tracking-[0.18em] uppercase font-medium select-none"
      role="radiogroup"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`px-2 py-1 cursor-pointer transition-colors ${theme === "dark" ? "text-[var(--ink)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}
        role="radio"
        aria-checked={theme === "dark" ? "true" : "false"}
      >
        Dk
      </button>
      <span className="text-[var(--ink-faint)]">/</span>
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`px-2 py-1 cursor-pointer transition-colors ${theme === "light" ? "text-[var(--ink)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}
        role="radio"
        aria-checked={theme === "light" ? "true" : "false"}
      >
        Lt
      </button>
    </div>
  );
}
