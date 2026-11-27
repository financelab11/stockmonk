/**
 * Applies the portfolio migration with the direct Postgres credentials.
 * Prefer `supabase db push` when the Supabase CLI is linked.
 *
 * Run: pnpm db:migrate:portfolios
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";

loadEnv({ path: ".env.local" });
loadEnv();

async function main() {
  if (!process.env.SUPABASE_DB_PASSWORD) {
    console.error("[portfolio-migration] SUPABASE_DB_PASSWORD is required");
    process.exit(1);
  }
  const file = path.join(
    process.cwd(),
    "supabase",
    "migrations",
    "202611270001_portfolios.sql",
  );
  const sql = fs.readFileSync(file, "utf8");
  const client = new Client({
    host:
      process.env.SUPABASE_DB_HOST ||
      "aws-0-ap-northeast-1.pooler.supabase.com",
    port: Number(process.env.SUPABASE_DB_PORT || 6543),
    user: process.env.SUPABASE_DB_USER || "postgres.fqzfmvnmmiisvtgnsyqa",
    password: process.env.SUPABASE_DB_PASSWORD,
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 15000,
  });
  await client.connect();
  try {
    await client.query(sql);
    console.log("[portfolio-migration] applied 202611270001_portfolios.sql");
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error("[portfolio-migration] failed", error);
  process.exit(1);
});
