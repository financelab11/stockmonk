/** Refreshes the S&P 500 benchmark price files used by the screener. */
import fs from "node:fs/promises";
import path from "node:path";
import { buildRangeFiles } from "../lib/metrics";
import { yahooChart } from "../lib/yahoo";

const PUBLIC = path.join(process.cwd(), "public", "data", "prices", "SPY");

async function main() {
  const chart = await yahooChart("SPY", "10y");
  if (!chart?.points.length) {
    throw new Error("No SPY price history returned");
  }
  const ranges = buildRangeFiles(chart.points, "SPY");
  await fs.mkdir(PUBLIC, { recursive: true });
  for (const [range, points] of Object.entries(ranges)) {
    await fs.writeFile(
      path.join(PUBLIC, `${range}.json`),
      JSON.stringify(points),
      "utf8",
    );
  }
  console.log(
    `[benchmark] SPY: ${chart.points.length} prices, ${Object.keys(ranges).length} ranges`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
