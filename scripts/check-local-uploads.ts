import { sql } from "./db";

async function main() {
  const team = await sql`
    SELECT id, name_en, photo FROM team_members
    WHERE photo LIKE '/uploads/%'
  `;
  const news = await sql`
    SELECT id, title_en, image FROM news
    WHERE image LIKE '/uploads/%'
  `;
  console.log(`Team members still referencing /uploads/: ${team.length}`);
  if (team.length) console.table(team);
  console.log(`News posts still referencing /uploads/: ${news.length}`);
  if (news.length) console.table(news);
  if (team.length === 0 && news.length === 0) {
    console.log("✓ Safe to delete public/uploads/");
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
