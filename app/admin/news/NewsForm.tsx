"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { NewsRow } from "@/app/lib/news-queries";
import type { NewsFormState } from "./actions";
import ImageUpload from "../ImageUpload";

type Action = (
  state: NewsFormState | undefined,
  formData: FormData
) => Promise<NewsFormState>;

export default function NewsForm({
  initial,
  action,
  submitLabel,
}: {
  initial?: NewsRow;
  action: Action;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState<NewsFormState | undefined, FormData>(
    action,
    undefined
  );

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          label="Date (YYYY-MM-DD)"
          name="date_published"
          defaultValue={initial?.date_published}
          errors={state?.fieldErrors?.date_published}
          required
        />
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={String(initial?.sort_order ?? 0)}
          errors={state?.fieldErrors?.sort_order}
        />
      </div>

      <ImageUpload
        name="image"
        label="Cover image — optional"
        initialUrl={initial?.image}
      />

      <Section title="English">
        <Field
          label="Category"
          name="category_en"
          defaultValue={initial?.category_en}
          errors={state?.fieldErrors?.category_en}
          required
        />
        <Field
          label="Title"
          name="title_en"
          defaultValue={initial?.title_en}
          errors={state?.fieldErrors?.title_en}
          required
        />
        <Field
          label="Excerpt"
          name="excerpt_en"
          defaultValue={initial?.excerpt_en}
          errors={state?.fieldErrors?.excerpt_en}
          textarea
          rows={3}
          required
        />
        <Field
          label="Body"
          name="body_en"
          defaultValue={initial?.body_en}
          errors={state?.fieldErrors?.body_en}
          textarea
          rows={6}
          required
        />
      </Section>

      <Section title="日本語">
        <Field
          label="Category"
          name="category_jp"
          defaultValue={initial?.category_jp}
          errors={state?.fieldErrors?.category_jp}
          required
        />
        <Field
          label="Title"
          name="title_jp"
          defaultValue={initial?.title_jp}
          errors={state?.fieldErrors?.title_jp}
          required
        />
        <Field
          label="Excerpt"
          name="excerpt_jp"
          defaultValue={initial?.excerpt_jp}
          errors={state?.fieldErrors?.excerpt_jp}
          textarea
          rows={3}
          required
        />
        <Field
          label="Body"
          name="body_jp"
          defaultValue={initial?.body_jp}
          errors={state?.fieldErrors?.body_jp}
          textarea
          rows={6}
          required
        />
      </Section>

      {state?.error && (
        <p className="text-[12px] text-red-400" role="alert">
          {state.error}
        </p>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-[var(--rule)]">
        <button
          type="submit"
          disabled={pending}
          className="bg-[var(--ink)] text-[var(--surface)] px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        >
          {pending ? "Saving…" : submitLabel}
        </button>
        <Link
          href="/admin/news"
          className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)]"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 pt-4 border-t border-[var(--rule)]">
      <h2 className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[var(--ink-soft)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
  textarea = false,
  rows = 3,
  required = false,
  errors,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
  required?: boolean;
  errors?: string[];
}) {
  const inputCls =
    "w-full bg-transparent border border-[var(--rule-strong)] px-3 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--ink)]";
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)] mb-2"
      >
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          defaultValue={defaultValue}
          className={inputCls}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue}
          className={inputCls}
        />
      )}
      {errors && errors.length > 0 && (
        <p className="mt-1.5 text-[11px] text-red-400">{errors[0]}</p>
      )}
    </div>
  );
}
