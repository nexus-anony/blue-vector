import Link from "next/link";
import { listNews } from "@/app/lib/news-queries";
import { listTeam } from "@/app/lib/team-queries";

export default async function AdminDashboard() {
  const [news, team] = await Promise.all([listNews(), listTeam()]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Manage news announcements and team members.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/admin/news"
          className="block border border-[var(--rule)] p-6 hover:bg-[var(--surface-hover)] transition-colors"
        >
          <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] font-semibold mb-2">
            News
          </div>
          <div className="font-display text-xl font-bold mb-1">
            {news.length} {news.length === 1 ? "item" : "items"}
          </div>
          <div className="text-[12px] text-[var(--ink-soft)]">
            Announcements, briefings, perspectives, and events →
          </div>
        </Link>
        <Link
          href="/admin/team"
          className="block border border-[var(--rule)] p-6 hover:bg-[var(--surface-hover)] transition-colors"
        >
          <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] font-semibold mb-2">
            Team
          </div>
          <div className="font-display text-xl font-bold mb-1">
            {team.length} {team.length === 1 ? "member" : "members"}
          </div>
          <div className="text-[12px] text-[var(--ink-soft)]">
            Founding and staff profiles →
          </div>
        </Link>
        <Link
          href="/admin/images"
          className="block border border-[var(--rule)] p-6 hover:bg-[var(--surface-hover)] transition-colors"
        >
          <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] font-semibold mb-2">
            Images
          </div>
          <div className="font-display text-xl font-bold mb-1">
            Hero & backgrounds
          </div>
          <div className="text-[12px] text-[var(--ink-soft)]">
            Carousels and section backgrounds across the site →
          </div>
        </Link>
        <Link
          href="/admin/privacy"
          className="block border border-[var(--rule)] p-6 hover:bg-[var(--surface-hover)] transition-colors"
        >
          <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] font-semibold mb-2">
            Privacy
          </div>
          <div className="font-display text-xl font-bold mb-1">
            Policy text
          </div>
          <div className="text-[12px] text-[var(--ink-soft)]">
            Title, body, and button labels for the contact form modal →
          </div>
        </Link>
      </div>
    </div>
  );
}
