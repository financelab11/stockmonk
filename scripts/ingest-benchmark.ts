/**
 * Refreshes the S&P 500 and sector ETF price files used by the screener and
 * the V2 technical score.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { BENCHMARK_ETFS } from "../config/sector-etfs";
import { buildRangeFiles } from "../lib/metrics";
import { yahooChart } from "../lib/yahoo";

const ROOT = path.join(process.cwd(), "public", "data", "prices");

async function main() {
  let written = 0;
  for (const ticker of BENCHMARK_ETFS) {
    const chart = await yahooChart(ticker, "10y");
    if (!chart?.points.length) {
      console.warn(`[benchmark] ${ticker}: no price history`);
      continue;
    }
    const ranges = buildRangeFiles(chart.points, ticker);
    const out = path.join(ROOT, ticker);
    await fs.mkdir(out, { recursive: true });
    for (const [range, points] of Object.entries(ranges)) {
      await fs.writeFile(
        path.join(out, `${range}.json`),
        JSON.stringify(points),
        "utf8",
      );
    }
    written += 1;
    console.log(
      `[benchmark] ${ticker}: ${chart.points.length} prices, ${Object.keys(ranges).length} ranges`,
    );
  }
  console.log(`[benchmark] wrote ${written} benchmark files`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
