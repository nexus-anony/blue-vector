import type { Metadata } from "next";
import News, { type NewsItemView } from "@/app/components/sections/News";
import { listNews } from "@/app/lib/news-queries";

export const metadata: Metadata = {
  title: "News",
  description:
    "News, briefings, and announcements from BLUE VECTOR — firm updates, research perspectives, and commentary on the defense landscape.",
};

export default async function NewsPage() {
  const rows = await listNews();
  const items: NewsItemView[] = rows.map((r) => ({
    id: r.id,
    date: r.date_published,
    category_en: r.category_en,
    category_jp: r.category_jp,
    title_en: r.title_en,
    title_jp: r.title_jp,
    excerpt_en: r.excerpt_en,
    excerpt_jp: r.excerpt_jp,
    body_en: r.body_en,
    body_jp: r.body_jp,
  }));
  return <News items={items} />;
}
