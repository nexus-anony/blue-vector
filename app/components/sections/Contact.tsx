"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "../LanguageContext";
import { content } from "@/app/lib/content";

export type HeroImage = { url: string; bottomFadeStyle: string; topFadeStyle: string };

export type PrivacyContent = {
  title_en: string;
  title_jp: string;
  body_en: string;
  body_jp: string;
  agree_en: string;
  agree_jp: string;
  cancel_en: string;
  cancel_jp: string;
};

export default function Contact({
  background,
  privacy,
}: {
  background: HeroImage;
  privacy: PrivacyContent;
}) {
  const { t, lang } = useLanguage();
  const c = t.contact;
  void privacy;
  const modTitle = c.modTitle;
  const modBody = c.modBody;
  const modAgree = c.modAgree;
  const modCancel = c.modCancel;
  const modPdfLabel = c.modPdfLabel;
  const modPdfUrl = c.modPdfUrl;
  const altEyebrowRaw = content[lang === "en" ? "jp" : "en"].contact.eyebrow;
  const eyebrowLabel = c.eyebrow.replace(/^\d{2}\s*[—–-]\s*/, "");
  const altLabel = altEyebrowRaw.replace(/^\d{2}\s*[—–-]\s*/, "");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowPrivacy(true);
  }

  function confirmSubmit() {
    setShowPrivacy(false);
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  }

  useEffect(() => {
    if (!showPrivacy) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPrivacy(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showPrivacy]);

  return (
    <section className="relative min-h-screen pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="relative w-full h-[50vh] mb-16 md:mb-20 lg:mb-24 overflow-hidden">
        <Image
          src={background.url}
          alt=""
          fill
          sizes="100vw"
          quality={92}
          className="object-cover opacity-85 pointer-events-none select-none"
          aria-hidden
        />
        {background.topFadeStyle && (
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: background.topFadeStyle }}
          />
        )}
        {background.bottomFadeStyle && (
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: background.bottomFadeStyle }}
          />
        )}
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex items-end pb-10 md:pb-14 lg:pb-16">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <h1 className="font-display text-[44px] leading-[1] md:text-[64px] lg:text-[80px] xl:text-[92px] font-bold tracking-tight text-white mb-3 md:mb-4">
                {lang === "jp" ? "お問い合わせ" : "Contact"}
              </h1>
              <p className="text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-white/75 max-w-md">
                {lang === "jp"
                  ? "機密保持のもと、ご相談を承ります。"
                  : "Discreet engagement. Qualified inquiries."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bv-glow pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-3 mb-5">
                  <span className="inline-block w-6 h-px mt-[0.55rem] bg-[var(--rule-strong)]" aria-hidden />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-soft)]">
                      {eyebrowLabel}
                    </span>
                    {altLabel && altLabel !== eyebrowLabel && (
                      <span lang="ja" className="mt-1 text-[10px] tracking-[0.18em] text-[var(--ink-muted)]">
                        {altLabel}
                      </span>
                    )}
                  </div>
                </div>
                <h2 className="font-display text-[22px] md:text-[28px] lg:text-[34px] leading-[1.2] font-bold tracking-tight mb-4 text-[var(--ink)]">
                  {lang === "jp" ? (
                    <>
                      BLUE VECTOR
                      <br />
                      へのご連絡
                    </>
                  ) : (
                    <>
                      Engage with
                      <br />
                      BLUE VECTOR
                    </>
                  )}
                </h2>
                <p className="text-[13px] leading-[1.8] text-[var(--ink-soft)] max-w-md">
                  {c.lede}
                </p>
                <div className="mt-10 pt-6 border-t border-[var(--rule)] space-y-4 text-[12px]">
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ink-muted)] mb-1">
                      {c.officeLabel}
                    </div>
                    <div className="text-[var(--ink)] whitespace-pre-line leading-[1.6]">
                      {c.officeValue}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ink-muted)] mb-1">
                      {c.emailContactLabel}
                    </div>
                    <a
                      href={`mailto:${c.emailContactValue}`}
                      className="text-[var(--ink)] bv-underline"
                    >
                      {c.emailContactValue}
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="mb-6 md:mb-8 pb-4 border-b border-[var(--rule)]">
                  <div className="text-[14px] md:text-[15px] tracking-[0.28em] font-bold text-[var(--ink)]">
                    {t.brand.name}
                  </div>
                </div>
                {submitted ? (
                  <div className="border border-[var(--rule)] bg-[var(--surface-raised)] p-6 md:p-10">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ink-soft)] mb-3">
                      ✓ Received
                    </div>
                    <p className="font-display text-[15px] md:text-[17px] leading-[1.5] text-[var(--ink)]">
                      {c.success}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid gap-5 md:gap-6">
                    <Field
                      label={c.companyLabel}
                      name="company"
                      placeholder={c.companyPlaceholder}
                    />
                    <Field
                      label={c.nameLabel}
                      name="name"
                      placeholder={c.namePlaceholder}
                      required
                    />
                    <Field
                      label={c.emailLabel}
                      name="email"
                      type="email"
                      placeholder={c.emailPlaceholder}
                      required
                    />
                    <Field
                      label={c.subjectLabel}
                      name="subject"
                      placeholder={c.subjectPlaceholder}
                    />
                    <Field
                      label={c.messageLabel}
                      name="message"
                      placeholder={c.messagePlaceholder}
                      textarea
                      required
                    />
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--rule-strong)] bg-[var(--invert)] text-[var(--on-invert)] text-[10px] font-semibold tracking-[0.22em] uppercase hover:bg-[var(--surface-hover)] hover:border-[var(--ink)] transition-colors disabled:opacity-60"
                      >
                        {submitting ? c.submitting : c.submit}
                        {!submitting && <span aria-hidden>→</span>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {showPrivacy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-6"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-[var(--surface)] text-[var(--ink)] w-full max-w-2xl max-h-[92vh] flex flex-col border border-[var(--rule)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--rule)]">
              <span className="text-[12px] md:text-[13px] font-semibold text-(--ink) pr-4">
                {modTitle}
              </span>
              <button
                type="button"
                onClick={() => setShowPrivacy(false)}
                className="text-[11px] tracking-[0.2em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)] shrink-0"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="px-6 py-6 md:px-10 md:py-8 overflow-y-auto flex-1">
              <p className="text-[13px] leading-[1.8] text-[var(--ink-soft)] whitespace-pre-line">
                {modBody}
              </p>
              <div className="mt-4 text-[12px] tracking-[0.04em] text-ink-muted">
                {modPdfLabel}:{" "}
                <a
                  href={modPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bv-underline text-(--ink)"
                >
                  {modPdfUrl}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 px-6 py-4 border-t border-[var(--rule)]">
              <button
                type="button"
                onClick={confirmSubmit}
                className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--rule-strong)] bg-[var(--invert)] text-[var(--on-invert)] text-[10px] font-semibold tracking-[0.22em] uppercase hover:bg-[var(--surface-hover)] hover:border-[var(--ink)] transition-colors"
              >
                {modAgree}
                <span aria-hidden>→</span>
              </button>
              <button
                type="button"
                onClick={() => setShowPrivacy(false)}
                className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--rule)] text-[var(--ink-soft)] text-[10px] font-semibold tracking-[0.22em] uppercase hover:text-[var(--ink)] hover:border-[var(--rule-strong)] transition-colors"
              >
                {modCancel}
              </button>
            </div>
          </div>
        </div>
      )}
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
    "w-full bg-transparent border border-[var(--rule)] px-3.5 py-2.5 text-[13px] text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:border-[var(--ink)] focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-[9px] tracking-[0.22em] uppercase text-[var(--ink-soft)] font-medium mb-1.5">
        {label}
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
