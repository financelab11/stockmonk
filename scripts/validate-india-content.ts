import { INDIA_STOCK_STORIES } from "../content/india-stocks";
import { validateStories } from "../lib/validate-content";

const errors = validateStories(INDIA_STOCK_STORIES, "IN");

if (errors.length > 0) {
  console.error("[validate:india-content] failed");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `[validate:india-content] all ${Object.keys(INDIA_STOCK_STORIES).length} stories pass the editorial checks`,
);
