import fs from "node:fs";

const files = [
  "app/page.tsx",
  "components/layout/main-nav.tsx",
  "components/layout/mobile-nav.tsx",
  "components/layout/site-header.tsx",
  "components/layout/site-footer.tsx",
  "components/ui/section-header.tsx",
  "components/ui/pro-cta.tsx",
  "components/home/recently-researched.tsx",
  "components/home/spotlight.tsx",
  "components/cards/news-card.tsx",
  "components/cards/stock-card.tsx",
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  text = text.replace(/<Link(\r?\n)(\s+)(?=key=|href=)/g, "<Link$1$2prefetch={false}$1$2");
  text = text.replace(/<Link href=/g, "<Link prefetch={false} href=");
  text = text.replace(/<Link(\s+)className=/g, "<Link prefetch={false}$1className=");
  fs.writeFileSync(file, text);
  console.log(file, (text.match(/prefetch=\{false\}/g) ?? []).length);
}
