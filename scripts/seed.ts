import bcrypt from "bcryptjs";
import { sql } from "./db";
import { content } from "../app/lib/content";

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME ?? "Admin";

  if (!email || !password) {
    console.warn(
      "Skipping admin seed: ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env"
    );
    return;
  }

  const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
  if (existing.length > 0) {
    console.log(`Admin ${email} already exists, skipping.`);
    return;
  }

  const hash = await bcrypt.hash(password, 12);
  await sql`
    INSERT INTO users (email, password_hash, name, role)
    VALUES (${email}, ${hash}, ${name}, 'admin')
  `;
  console.log(`Created admin user: ${email}`);
}

async function seedNews() {
  const existing = await sql`SELECT COUNT(*)::int AS c FROM news`;
  if (existing[0].c > 0) {
    console.log("News already seeded, skipping.");
    return;
  }

  const en = content.en.news.items;
  const jp = content.jp.news.items;

  for (let i = 0; i < en.length; i++) {
    const e = en[i];
    const j = jp.find((x) => x.id === e.id) ?? e;
    await sql`
      INSERT INTO news (
        slug, date_published, sort_order,
        category_en, category_jp,
        title_en, title_jp,
        excerpt_en, excerpt_jp,
        body_en, body_jp
      ) VALUES (
        ${e.id}, ${e.date}, ${i},
        ${e.category}, ${j.category},
        ${e.title}, ${j.title},
        ${e.excerpt}, ${j.excerpt},
        ${e.body}, ${j.body}
      )
    `;
  }
  console.log(`Seeded ${en.length} news items.`);
}

async function seedTeam() {
  const existing = await sql`SELECT COUNT(*)::int AS c FROM team_members`;
  if (existing[0].c > 0) {
    console.log("Team already seeded, skipping.");
    return;
  }

  const en = content.en.team.members;
  const jp = content.jp.team.members;

  for (let i = 0; i < en.length; i++) {
    const e = en[i];
    const j = jp.find((x) => x.id === e.id) ?? e;
    await sql`
      INSERT INTO team_members (
        slug, sort_order,
        name_en, name_jp,
        role_en, role_jp,
        bio_en, bio_jp,
        initials, photo
      ) VALUES (
        ${e.id}, ${i},
        ${e.name}, ${j.name},
        ${e.role}, ${j.role},
        ${e.bio}, ${j.bio},
        ${e.initials}, ${e.photo}
      )
    `;
  }
  console.log(`Seeded ${en.length} team members.`);
}

async function main() {
  await seedAdmin();
  await seedNews();
  await seedTeam();
  console.log("Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
