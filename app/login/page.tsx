import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { getSessionOrNull } from "@/app/lib/dal";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const session = await getSessionOrNull();
  if (session) redirect("/admin");

  return (
    <section className="relative min-h-screen pt-28 md:pt-36 pb-24 bg-[var(--surface)] text-[var(--ink)]">
      <div className="absolute inset-0 bv-diag opacity-40 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-md px-6 lg:px-10">
        <div className="mb-10">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--ink-soft)] font-semibold mb-3">
            Admin · Sign in
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold leading-tight">
            BLUE VECTOR Console
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">
            Authorized personnel only. Use your administrator credentials.
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
