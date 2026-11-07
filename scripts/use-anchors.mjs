import fs from "node:fs";

const files = [
  "app/page.tsx",
  "components/layout/site-header.tsx",
  "components/layout/site-footer.tsx",
  "components/layout/main-nav.tsx",
  "components/layout/mobile-nav.tsx",
  "components/ui/section-header.tsx",
  "components/ui/pro-cta.tsx",
  "components/ui/disclaimer.tsx",
  "components/home/recently-researched.tsx",
  "components/home/spotlight.tsx",
  "components/cards/news-card.tsx",
  "components/cards/stock-card-static.tsx",
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  text = text.replace(/import Link from "next\/link";\r?\n/g, "");
  text = text.replace(/\s*prefetch=\{false\}/g, "");
  text = text.replace(/<Link/g, "<a").replace(/<\/Link>/g, "</a>");
  fs.writeFileSync(file, text);
  console.log(file);
}
