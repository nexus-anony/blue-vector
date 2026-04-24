"use client";

import { useActionState, useState } from "react";
import { loginAction, type LoginState } from "@/app/lib/auth-actions";

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={action} className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="block text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)] mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={state.email}
          className="w-full bg-transparent border border-[var(--rule-strong)] px-3 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--ink)]"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)] mb-2"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="w-full bg-transparent border border-[var(--rule-strong)] px-3 py-2.5 pr-11 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--ink)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-[var(--ink-soft)] hover:text-[var(--ink)] cursor-pointer"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>
      {state.error && (
        <p className="text-[12px] text-red-400" role="alert">
          {state.error}
        </p>
      )}
      <SubmitButton pending={pending} />
    </form>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[var(--ink)] text-[var(--surface)] py-2.5 text-[11px] tracking-[0.25em] uppercase font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
    >
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9.88 5.09A11.6 11.6 0 0 1 12 5c6.5 0 10 7 10 7a18.3 18.3 0 0 1-3.06 4.16M6.36 6.36A18.6 18.6 0 0 0 2 12s3.5 7 10 7a11.4 11.4 0 0 0 5.64-1.36" />
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </svg>
  );
}

