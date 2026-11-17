/**
 * Applies Supabase SQL migrations through a direct Postgres connection.
 * Requires SUPABASE_DB_PASSWORD or SUPABASE_DB_URL.
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";
loadEnv({ path: ".env.local" });
loadEnv();

const password = process.env.SUPABASE_DB_PASSWORD || undefined;
const connectionString = process.env.SUPABASE_DB_URL || undefined;
const host =
  process.env.SUPABASE_DB_HOST || "aws-0-ap-northeast-1.pooler.supabase.com";
const port = Number(process.env.SUPABASE_DB_PORT || 6543);
const user =
  process.env.SUPABASE_DB_USER || "postgres.fqzfmvnmmiisvtgnsyqa";

async function main() {
  const client = connectionString
    ? new Client({
        connectionString,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 20_000,
      })
    : new Client({
        host,
        port,
        user,
        password,
        database: "postgres",
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 20_000,
      });

  await client.connect();
  console.log("[db] connected");

  const migrationsDir = path.join(process.cwd(), "supabase", "migrations");
  const files = fs.readdirSync(migrationsDir).filter((file) => file.endsWith(".sql")).sort();
  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
    await client.query(sql);
    console.log(`[db] applied ${file}`);
  }

  const tables = await client.query(
    "select table_name from information_schema.tables where table_schema = 'public' order by table_name",
  );
  console.log(`[db] ${tables.rowCount} public tables`);
  console.log(tables.rows.map((row) => row.table_name).join(", "));
  await client.end();
}

main().catch((error) => {
  console.error("[db] failed", error);
  process.exit(1);
});
