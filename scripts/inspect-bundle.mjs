import fs from "node:fs";

const html = fs.readFileSync(".next/server/app/index.html", "utf8");
const srcs = [...html.matchAll(/src="([^"]+\.js)"/g)].map((match) => match[1]);
console.log(srcs);
for (const src of srcs) {
  const file = `.next${src.replace("/_next", "")}`;
  try {
    console.log(src, fs.statSync(file).size);
  } catch {
    console.log(src, "?");
  }
}
