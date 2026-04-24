import Link from "next/link";
import { listNews } from "@/app/lib/news-queries";
import { deleteNewsAction } from "./actions";

export default async function NewsAdminPage() {
  const news = await listNews();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">News</h1>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            {news.length} {news.length === 1 ? "item" : "items"}
          </p>
        </div>
        <Link
          href="/admin/news/new"
          className="bg-[var(--ink)] text-[var(--surface)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-semibold cursor-pointer hover:opacity-90 transition-opacity"
        >
          + New post
        </Link>
      </div>

      <div className="border border-[var(--rule)]">
        {news.length === 0 ? (
          <div className="p-8 text-sm text-[var(--ink-soft)] text-center">
            No news items yet.
          </div>
        ) : (
          <ul>
            {news.map((n) => (
              <li
                key={n.id}
                className="border-b border-[var(--rule)] last:border-b-0 px-5 py-4 flex items-center gap-4 hover:bg-[var(--surface-hover)] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <time className="text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)] font-semibold">
                      {n.date_published}
                    </time>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--ink-muted)] border border-[var(--rule-strong)] px-2 py-0.5">
                      {n.category_en}
                    </span>
                  </div>
                  <div className="font-display text-sm font-bold truncate">
                    {n.title_en}
                  </div>
                  <div className="text-[11px] text-[var(--ink-soft)] truncate">
                    {n.title_jp}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/admin/news/${n.id}`}
                    className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  >
                    Edit
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteNewsAction(n.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="text-[11px] tracking-[0.2em] uppercase font-semibold text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
