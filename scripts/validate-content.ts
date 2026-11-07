import { validateContent } from "../lib/validate-content";

const errors = validateContent();

if (errors.length > 0) {
  console.error("[validate:content] failed");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log("[validate:content] all ten stories pass the editorial checks");
