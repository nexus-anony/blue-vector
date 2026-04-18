"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
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
    <section className="pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32 bg-[var(--color-navy-900)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.22em] uppercase text-white/60 font-medium mb-5">
              {c.eyebrow}
            </div>
            <h1 className="font-display text-[30px] md:text-[40px] lg:text-[46px] leading-[1.15] font-bold tracking-tight mb-6">
              {c.heading}
            </h1>
            <p className="text-[15px] leading-[1.8] text-white/75 max-w-md">
              {c.lede}
            </p>
            <div className="mt-12 pt-8 border-t border-white/15 space-y-5 text-[13px]">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50 mb-1">
                  {c.officeLabel}
                </div>
                <div className="text-white">{c.officeValue}</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50 mb-1">
                  {c.emailContactLabel}
                </div>
                <a
                  href={`mailto:${c.emailContactValue}`}
                  className="text-white bv-underline"
                >
                  {c.emailContactValue}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-white/20 bg-white/5 p-8 md:p-12">
                <div className="text-[11px] tracking-[0.22em] uppercase text-white/60 mb-4">
                  ✓ Received
                </div>
                <p className="font-display text-[22px] md:text-[26px] leading-[1.4] text-white">
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
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-navy-900)] text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[var(--color-stone)] transition-colors disabled:opacity-60"
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
    "w-full bg-transparent border border-white/20 px-4 py-3 text-[15px] text-white placeholder:text-white/35 focus:border-white focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-white/60 font-medium mb-2">
        {label}
        {required && <span className="text-white/40 ml-1">*</span>}
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
