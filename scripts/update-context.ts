/**
 * Refreshes the small auto-context block in CLAUDE.md.
 * Run by .githooks/pre-commit, or manually with `pnpm context:update`.
 */
import fs from "node:fs";
import path from "node:path";

const read = <T>(file: string): T | null => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
};

const count = (file: string): number => {
  const data = read<unknown[]>(file);
  return Array.isArray(data) ? data.length : 0;
};

const us = count("public/data/stocks.json");
const migrations = fs.existsSync("supabase/migrations")
  ? fs
      .readdirSync("supabase/migrations")
      .filter((file) => file.endsWith(".sql")).length
  : 0;

const block = `<!-- AUTO_CONTEXT_START -->
_Context snapshot ${new Date().toISOString().slice(0, 10)}: ${us} US names, ${migrations} database migration(s)._
<!-- AUTO_CONTEXT_END -->`;

const file = path.join(process.cwd(), "CLAUDE.md");
const current = fs.readFileSync(file, "utf8");
const next = current.includes("<!-- AUTO_CONTEXT_START -->")
  ? current.replace(
      /<!-- AUTO_CONTEXT_START -->[\s\S]*?<!-- AUTO_CONTEXT_END -->/,
      block,
    )
  : `${current.trimEnd()}\n\n${block}\n`;
fs.writeFileSync(file, next);
console.log("[context] CLAUDE.md updated");
