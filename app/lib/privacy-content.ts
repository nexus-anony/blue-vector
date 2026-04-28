import "server-only";
import { sql } from "./db";
import { content } from "./content";

export type PrivacyContent = {
  title_en: string;
  title_jp: string;
  body_en: string;
  body_jp: string;
  agree_en: string;
  agree_jp: string;
  cancel_en: string;
  cancel_jp: string;
};

export const PRIVACY_DEFAULTS: PrivacyContent = {
  title_en: content.en.contact.privacyTitle,
  title_jp: content.jp.contact.privacyTitle,
  body_en: content.en.contact.privacyBody,
  body_jp: content.jp.contact.privacyBody,
  agree_en: content.en.contact.privacyAgree,
  agree_jp: content.jp.contact.privacyAgree,
  cancel_en: content.en.contact.privacyCancel,
  cancel_jp: content.jp.contact.privacyCancel,
};

let initialized = false;
async function ensureTable() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS privacy_policy (
      id INTEGER PRIMARY KEY,
      title_en TEXT NOT NULL DEFAULT '',
      title_jp TEXT NOT NULL DEFAULT '',
      body_en TEXT NOT NULL DEFAULT '',
      body_jp TEXT NOT NULL DEFAULT '',
      agree_en TEXT NOT NULL DEFAULT '',
      agree_jp TEXT NOT NULL DEFAULT '',
      cancel_en TEXT NOT NULL DEFAULT '',
      cancel_jp TEXT NOT NULL DEFAULT '',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      CONSTRAINT privacy_singleton CHECK (id = 1)
    )
  `;
  initialized = true;
}

function pick(value: string | null | undefined, fallback: string): string {
  const v = (value ?? "").trim();
  return v.length > 0 ? (value as string) : fallback;
}

export async function getPrivacyContent(): Promise<PrivacyContent> {
  await ensureTable();
  const rows = (await sql`
    SELECT title_en, title_jp, body_en, body_jp, agree_en, agree_jp, cancel_en, cancel_jp
    FROM privacy_policy WHERE id = 1
  `) as Partial<PrivacyContent>[];
  const r = rows[0];
  if (!r) return { ...PRIVACY_DEFAULTS };
  return {
    title_en: pick(r.title_en, PRIVACY_DEFAULTS.title_en),
    title_jp: pick(r.title_jp, PRIVACY_DEFAULTS.title_jp),
    body_en: pick(r.body_en, PRIVACY_DEFAULTS.body_en),
    body_jp: pick(r.body_jp, PRIVACY_DEFAULTS.body_jp),
    agree_en: pick(r.agree_en, PRIVACY_DEFAULTS.agree_en),
    agree_jp: pick(r.agree_jp, PRIVACY_DEFAULTS.agree_jp),
    cancel_en: pick(r.cancel_en, PRIVACY_DEFAULTS.cancel_en),
    cancel_jp: pick(r.cancel_jp, PRIVACY_DEFAULTS.cancel_jp),
  };
}

export async function getRawPrivacyContent(): Promise<PrivacyContent> {
  await ensureTable();
  const rows = (await sql`
    SELECT title_en, title_jp, body_en, body_jp, agree_en, agree_jp, cancel_en, cancel_jp
    FROM privacy_policy WHERE id = 1
  `) as Partial<PrivacyContent>[];
  const r = rows[0];
  if (!r) {
    return {
      title_en: "", title_jp: "",
      body_en: "", body_jp: "",
      agree_en: "", agree_jp: "",
      cancel_en: "", cancel_jp: "",
    };
  }
  return {
    title_en: r.title_en ?? "",
    title_jp: r.title_jp ?? "",
    body_en: r.body_en ?? "",
    body_jp: r.body_jp ?? "",
    agree_en: r.agree_en ?? "",
    agree_jp: r.agree_jp ?? "",
    cancel_en: r.cancel_en ?? "",
    cancel_jp: r.cancel_jp ?? "",
  };
}

export async function setPrivacyContent(input: PrivacyContent): Promise<void> {
  await ensureTable();
  await sql`
    INSERT INTO privacy_policy (
      id, title_en, title_jp, body_en, body_jp, agree_en, agree_jp, cancel_en, cancel_jp, updated_at
    ) VALUES (
      1, ${input.title_en}, ${input.title_jp}, ${input.body_en}, ${input.body_jp},
      ${input.agree_en}, ${input.agree_jp}, ${input.cancel_en}, ${input.cancel_jp}, now()
    )
    ON CONFLICT (id) DO UPDATE SET
      title_en = EXCLUDED.title_en,
      title_jp = EXCLUDED.title_jp,
      body_en = EXCLUDED.body_en,
      body_jp = EXCLUDED.body_jp,
      agree_en = EXCLUDED.agree_en,
      agree_jp = EXCLUDED.agree_jp,
      cancel_en = EXCLUDED.cancel_en,
      cancel_jp = EXCLUDED.cancel_jp,
      updated_at = now()
  `;
}
