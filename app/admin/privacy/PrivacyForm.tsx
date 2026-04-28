"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updatePrivacyAction, type PrivacyActionState } from "./actions";

type Initial = {
  title_en: string;
  title_jp: string;
  body_en: string;
  body_jp: string;
  agree_en: string;
  agree_jp: string;
  cancel_en: string;
  cancel_jp: string;
};

export default function PrivacyForm({
  initial,
  defaults,
}: {
  initial: Initial;
  defaults: Initial;
}) {
  const [state, formAction, pending] = useActionState<PrivacyActionState | undefined, FormData>(
    updatePrivacyAction,
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.ok) router.refresh();
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-8">
      <Pair
        label="Title"
        nameEn="title_en"
        nameJp="title_jp"
        initialEn={initial.title_en}
        initialJp={initial.title_jp}
        placeholderEn={defaults.title_en}
        placeholderJp={defaults.title_jp}
      />
      <Pair
        label="Body"
        nameEn="body_en"
        nameJp="body_jp"
        initialEn={initial.body_en}
        initialJp={initial.body_jp}
        placeholderEn={defaults.body_en}
        placeholderJp={defaults.body_jp}
        textarea
      />
      <Pair
        label="Agree button"
        nameEn="agree_en"
        nameJp="agree_jp"
        initialEn={initial.agree_en}
        initialJp={initial.agree_jp}
        placeholderEn={defaults.agree_en}
        placeholderJp={defaults.agree_jp}
      />
      <Pair
        label="Cancel button"
        nameEn="cancel_en"
        nameJp="cancel_jp"
        initialEn={initial.cancel_en}
        initialJp={initial.cancel_jp}
        placeholderEn={defaults.cancel_en}
        placeholderJp={defaults.cancel_jp}
      />

      <div className="flex items-center gap-4 pt-4 border-t border-[var(--rule)]">
        <button
          type="submit"
          disabled={pending}
          className="px-5 py-2.5 bg-[var(--invert)] text-[var(--on-invert)] text-[10px] font-semibold tracking-[0.22em] uppercase cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Saving…" : "Save"}
        </button>
        <p className="text-[11px] text-[var(--ink-muted)]">
          Empty fields fall back to the bundled defaults.
        </p>
        {state?.error && (
          <span className="text-[11px] text-red-400">{state.error}</span>
        )}
        {state?.ok && !pending && (
          <span className="text-[11px] text-emerald-400">Saved.</span>
        )}
      </div>
    </form>
  );
}

function Pair({
  label,
  nameEn,
  nameJp,
  initialEn,
  initialJp,
  placeholderEn,
  placeholderJp,
  textarea = false,
}: {
  label: string;
  nameEn: string;
  nameJp: string;
  initialEn: string;
  initialJp: string;
  placeholderEn: string;
  placeholderJp: string;
  textarea?: boolean;
}) {
  return (
    <div className="border border-[var(--rule)] p-5 space-y-4">
      <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)]">
        {label}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          name={nameEn}
          subLabel="English"
          initial={initialEn}
          placeholder={placeholderEn}
          textarea={textarea}
        />
        <Field
          name={nameJp}
          subLabel="日本語"
          initial={initialJp}
          placeholder={placeholderJp}
          textarea={textarea}
        />
      </div>
    </div>
  );
}

function Field({
  name,
  subLabel,
  initial,
  placeholder,
  textarea,
}: {
  name: string;
  subLabel: string;
  initial: string;
  placeholder: string;
  textarea: boolean;
}) {
  const baseClass =
    "w-full bg-transparent border border-[var(--rule)] focus:border-[var(--rule-strong)] outline-none px-3 py-2 text-[12px] text-[var(--ink)] placeholder:text-[var(--ink-faint)]";
  return (
    <label className="block">
      <span className="block mb-1.5 text-[10px] tracking-[0.18em] uppercase text-[var(--ink-muted)]">
        {subLabel}
      </span>
      {textarea ? (
        <textarea
          name={name}
          defaultValue={initial}
          placeholder={placeholder}
          rows={14}
          className={`${baseClass} font-mono leading-[1.6] resize-y`}
        />
      ) : (
        <input
          type="text"
          name={name}
          defaultValue={initial}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
