import "server-only";
import { sql } from "./db";

export type SiteImageSlot = {
  key: string;
  label: string;
  section: "home" | "team" | "news" | "about" | "services" | "contact";
  defaultUrl: string;
};

export const SITE_IMAGE_SLOTS: SiteImageSlot[] = [
  { key: "home_hero_1", label: "Home carousel · 1", section: "home", defaultUrl: "/hero-1.jpg" },
  { key: "home_hero_2", label: "Home carousel · 2", section: "home", defaultUrl: "/hero-2.jpg" },
  { key: "home_hero_3", label: "Home carousel · 3", section: "home", defaultUrl: "/hero-3.jpg" },
  { key: "home_hero_4", label: "Home carousel · 4", section: "home", defaultUrl: "/hero-4.jpg" },
  { key: "team_hero_1", label: "Team carousel · 1", section: "team", defaultUrl: "/team-photo.jpg" },
  { key: "team_hero_2", label: "Team carousel · 2", section: "team", defaultUrl: "/team-photo-2.jpg" },
  { key: "team_hero_3", label: "Team carousel · 3", section: "team", defaultUrl: "/team-photo-3.jpg" },
  { key: "news_hero_1", label: "News carousel · 1", section: "news", defaultUrl: "/news-bg.jpg" },
  { key: "news_hero_2", label: "News carousel · 2", section: "news", defaultUrl: "/news-bg-2.jpg" },
  { key: "about_bg", label: "About hero", section: "about", defaultUrl: "/about-bg.jpg" },
  { key: "services_bg", label: "Services hero", section: "services", defaultUrl: "/services-bg.jpg" },
  { key: "contact_bg", label: "Contact hero", section: "contact", defaultUrl: "/contact-bg.jpg" },
];

const DEFAULTS = Object.fromEntries(
  SITE_IMAGE_SLOTS.map((s) => [s.key, s.defaultUrl])
) as Record<string, string>;

let initialized = false;
async function ensureTable() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS site_images (
      slot TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  initialized = true;
}

export async function getSiteImages(): Promise<Record<string, string>> {
  await ensureTable();
  const rows = (await sql`SELECT slot, url FROM site_images`) as { slot: string; url: string }[];
  const map: Record<string, string> = { ...DEFAULTS };
  for (const r of rows) {
    if (r.url && r.url.length > 0) map[r.slot] = r.url;
  }
  return map;
}

export async function setSiteImage(slot: string, url: string | null): Promise<void> {
  await ensureTable();
  if (!url || url.length === 0) {
    await sql`DELETE FROM site_images WHERE slot = ${slot}`;
    return;
  }
  await sql`
    INSERT INTO site_images (slot, url, updated_at)
    VALUES (${slot}, ${url}, now())
    ON CONFLICT (slot) DO UPDATE SET url = EXCLUDED.url, updated_at = now()
  `;
}

export function getDefaults(): Record<string, string> {
  return { ...DEFAULTS };
}
