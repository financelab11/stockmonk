import fs from "node:fs";

let text = fs.readFileSync("components/home/pro-features.tsx", "utf8");
const images = {
  report: "/screenshots/pro-report.webp",
  screens: "/screenshots/pro-screens.webp",
  alerts: "/screenshots/pro-alerts.webp",
  earnings: "/screenshots/pro-earnings.webp",
  watchlist: "/screenshots/pro-watchlist.webp",
};
for (const [key, image] of Object.entries(images)) {
  text = text.replace(
    `visual: "${key}",`,
    `visual: "${key}",\n    image: "${image}",`,
  );
}
fs.writeFileSync("components/home/pro-features.tsx", text);
console.log("ok");
