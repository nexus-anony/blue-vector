import "server-only";
import { sql } from "./db";

export type NewsRow = {
  id: number;
  slug: string;
  date_published: string;
  category_en: string;
  category_jp: string;
  title_en: string;
  title_jp: string;
  excerpt_en: string;
  excerpt_jp: string;
  body_en: string;
  body_jp: string;
  sort_order: number;
};

function normalize(rows: Record<string, unknown>[]): NewsRow[] {
  return rows.map((r) => ({
    id: r.id as number,
    slug: r.slug as string,
    date_published:
      r.date_published instanceof Date
        ? (r.date_published as Date).toISOString().slice(0, 10)
        : (r.date_published as string),
    category_en: r.category_en as string,
    category_jp: r.category_jp as string,
    title_en: r.title_en as string,
    title_jp: r.title_jp as string,
    excerpt_en: r.excerpt_en as string,
    excerpt_jp: r.excerpt_jp as string,
    body_en: r.body_en as string,
    body_jp: r.body_jp as string,
    sort_order: r.sort_order as number,
  }));
}

export async function listNews(): Promise<NewsRow[]> {
  const rows = await sql`
    SELECT id, slug, date_published, category_en, category_jp,
           title_en, title_jp, excerpt_en, excerpt_jp,
           body_en, body_jp, sort_order
    FROM news
    ORDER BY date_published DESC, id DESC
  `;
  return normalize(rows as Record<string, unknown>[]);
}

export async function getNews(id: number): Promise<NewsRow | null> {
  const rows = await sql`
    SELECT id, slug, date_published, category_en, category_jp,
           title_en, title_jp, excerpt_en, excerpt_jp,
           body_en, body_jp, sort_order
    FROM news WHERE id = ${id}
  `;
  const list = normalize(rows as Record<string, unknown>[]);
  return list[0] ?? null;
}

export type NewsInput = Omit<NewsRow, "id">;

export async function createNews(input: NewsInput): Promise<number> {
  const rows = await sql`
    INSERT INTO news (
      slug, date_published, sort_order,
      category_en, category_jp,
      title_en, title_jp,
      excerpt_en, excerpt_jp,
      body_en, body_jp
    ) VALUES (
      ${input.slug}, ${input.date_published}, ${input.sort_order},
      ${input.category_en}, ${input.category_jp},
      ${input.title_en}, ${input.title_jp},
      ${input.excerpt_en}, ${input.excerpt_jp},
      ${input.body_en}, ${input.body_jp}
    )
    RETURNING id
  `;
  return (rows[0] as { id: number }).id;
}

export async function updateNews(id: number, input: NewsInput): Promise<void> {
  await sql`
    UPDATE news SET
      slug = ${input.slug},
      date_published = ${input.date_published},
      sort_order = ${input.sort_order},
      category_en = ${input.category_en},
      category_jp = ${input.category_jp},
      title_en = ${input.title_en},
      title_jp = ${input.title_jp},
      excerpt_en = ${input.excerpt_en},
      excerpt_jp = ${input.excerpt_jp},
      body_en = ${input.body_en},
      body_jp = ${input.body_jp},
      updated_at = now()
    WHERE id = ${id}
  `;
}

export async function deleteNews(id: number): Promise<void> {
  await sql`DELETE FROM news WHERE id = ${id}`;
}
