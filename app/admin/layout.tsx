import Link from "next/link";
import type { Metadata } from "next";
import { verifySession } from "@/app/lib/dal";
import { logoutAction } from "@/app/lib/auth-actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <header className="sticky top-0 z-30 bg-[var(--surface)]/95 backdrop-blur border-b border-[var(--rule)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link
              href="/admin"
              className="font-display text-sm font-bold tracking-tight"
            >
              BLUE VECTOR · Admin
            </Link>
            <nav className="flex items-center gap-5 text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-soft)]">
              <Link href="/admin/news" className="hover:text-[var(--ink)]">
                News
              </Link>
              <Link href="/admin/team" className="hover:text-[var(--ink)]">
                Team
              </Link>
              <Link href="/admin/images" className="hover:text-[var(--ink)]">
                Images
              </Link>
              <Link
                href="/"
                className="hover:text-[var(--ink)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site ↗
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[var(--ink-soft)] hidden sm:inline">
              {session.email}
            </span>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] cursor-pointer"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 lg:px-10 py-10 md:py-14">
        {children}
      </main>
    </div>
  );
}
