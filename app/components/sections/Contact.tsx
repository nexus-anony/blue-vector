"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLanguage } from "../LanguageContext";
import { content } from "@/app/lib/content";

export default function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const altEyebrowRaw = content[lang === "en" ? "jp" : "en"].contact.eyebrow;
  const eyebrowLabel = c.eyebrow.replace(/^\d{2}\s*[—–-]\s*/, "");
  const altLabel = altEyebrowRaw.replace(/^\d{2}\s*[—–-]\s*/, "");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  }

  return (
    <section className="relative min-h-screen pb-24 md:pb-32 lg:pb-40 bg-[var(--surface)] text-[var(--ink)] overflow-hidden">
      <div className="absolute inset-0 bv-diag opacity-50 pointer-events-none" aria-hidden />
      <div className="relative w-full h-[50vh] mb-16 md:mb-20 lg:mb-24 overflow-hidden">
        <Image
          src="/contact-bg.png"
          alt=""
          fill
          sizes="100vw"
          quality={92}
          className="object-cover opacity-85 pointer-events-none select-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/30 via-[var(--surface)]/10 to-[var(--surface)] pointer-events-none"
          aria-hidden
        />
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
                <h1 className="font-display text-[22px] md:text-[28px] lg:text-[34px] leading-[1.2] font-bold tracking-tight mb-4 text-[var(--ink)]">
                  {c.heading}
                </h1>
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
                        className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--invert)] text-[var(--on-invert)] text-[10px] font-semibold tracking-[0.22em] uppercase hover:opacity-90 transition-opacity disabled:opacity-60"
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
        {required && <span className="text-[var(--ink-muted)] ml-1">*</span>}
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
