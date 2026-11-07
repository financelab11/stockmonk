import fs from "node:fs";

const file = "components/home/pro-features.tsx";
let text = fs.readFileSync(file, "utf8");
const start = text.indexOf("function Visual(");
const end = text.indexOf("export function ProFeatures()");
text = `${text.slice(0, start)}${text.slice(end)}`;
text = text.replace(
  "<Visual kind={feature.visual} />",
  `<div className="overflow-hidden rounded-lg border border-line bg-white">
                  <div className="flex items-center gap-1 border-b border-line bg-paper-deep px-2 py-1.5">
                    <span className="size-1.5 rounded-full bg-[#ff7a45]" />
                    <span className="size-1.5 rounded-full bg-[#f5b544]" />
                    <span className="size-1.5 rounded-full bg-[#2fbf8f]" />
                    <span className="ml-2 text-[8px] text-muted">stockmonk.app</span>
                  </div>
                  <img
                    src={feature.image}
                    alt=""
                    width={960}
                    height={615}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                </div>`,
);
fs.writeFileSync(file, text);
console.log("ok");
