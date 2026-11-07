import fs from "node:fs";
import path from "node:path";

const dir = ".lighthouseci";
const files = fs
  .readdirSync(dir)
  .filter((file) => /^lhr-.*\.json$/.test(file))
  .map((file) => ({ file, time: fs.statSync(path.join(dir, file)).mtimeMs }))
  .sort((a, b) => b.time - a.time)
  .slice(0, 8);

for (const { file } of files) {
  const report = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  const scores = Object.fromEntries(
    Object.entries(report.categories).map(([key, value]) => [key, value.score]),
  );
  console.log(
    report.finalDisplayedUrl,
    JSON.stringify(scores),
    "TBT",
    report.audits["total-blocking-time"]?.displayValue,
    "LCP",
    report.audits["largest-contentful-paint"]?.displayValue,
  );
  if (report.categories.accessibility.score < 1) {
    for (const ref of report.categories.accessibility.auditRefs) {
      const audit = report.audits[ref.id];
      if (audit.score === null || audit.score === 1) continue;
      if (["notApplicable", "informative"].includes(audit.scoreDisplayMode)) continue;
      console.log("  ", ref.id, audit.title);
      for (const item of (audit.details?.items ?? []).slice(0, 6)) {
        console.log(
          "    ",
          item.node?.selector,
          "|",
          item.node?.nodeLabel,
          "|",
          item.node?.explanation?.split("\n")[1],
        );
      }
    }
  }
}
