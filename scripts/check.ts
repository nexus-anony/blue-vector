import { sql } from "./db";

async function main() {
  const rows = await sql`
    SELECT table_schema, table_name
    FROM information_schema.tables
    WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
    ORDER BY table_schema, table_name
  `;
  console.log("Tables in DB:");
  console.table(rows);

  const counts = await sql`
    SELECT
      (SELECT COUNT(*)::int FROM news) AS news,
      (SELECT COUNT(*)::int FROM team_members) AS team,
      (SELECT COUNT(*)::int FROM users) AS users
  `;
  console.log("Row counts:", counts[0]);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
