"use client";

import type { ReactNode } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

function ShellInner({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();
  return (
    <div className={`flex min-h-full flex-col ${lang === "jp" ? "font-jp" : ""}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ShellInner>{children}</ShellInner>
      </LanguageProvider>
    </ThemeProvider>
  );
}
