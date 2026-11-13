/**
 * Refresh cached Screener statements (consolidated first) and Yahoo summary
 * (including annual income statements) for the forward-growth universe.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fetchScreener } from "../lib/screener";
import { yahooQuoteSummary } from "../lib/yahoo";

const RAW = path.join(process.cwd(), "data", "growth-ranker", "raw");
const MODULES =
  "price,summaryDetail,financialData,defaultKeyStatistics,earningsTrend,incomeStatementHistory";

async function main() {
  const files = (await fs.readdir(RAW)).filter((file) => file.endsWith(".json"));
  let cursor = 0;
  let done = 0;
  const workers = 3;

  await Promise.all(
    Array.from({ length: workers }, async () => {
      while (cursor < files.length) {
        const file = files[cursor];
        cursor += 1;
        const target = path.join(RAW, file);
        const raw = JSON.parse(await fs.readFile(target, "utf8")) as {
          symbol: string;
          stem: string;
          refinitiv: unknown;
          fetchedAt: string;
        };
        const [screener, summary] = await Promise.all([
          fetchScreener(raw.stem, { force: true }).catch(() => null),
          yahooQuoteSummary(raw.symbol, MODULES).catch(() => null),
        ]);
        await fs.writeFile(
          target,
          JSON.stringify(
            {
              ...raw,
              fetchedAt: new Date().toISOString(),
              screener: screener ?? undefined,
              summary: summary ?? undefined,
            },
            null,
            0,
          ),
        );
        done += 1;
        if (done % 25 === 0) console.log(`[gr-refresh] ${done}/${files.length}`);
      }
    }),
  );
  console.log(`[gr-refresh] done ${done}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
