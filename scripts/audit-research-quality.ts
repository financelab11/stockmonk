/**
 * Editorial quality audit for the research library.
 *
 * Checks the seven data-driven sections for cross-company sentence reuse,
 * banned boilerplate, rating language, missing sections and paragraph lengths.
 *
 * Run: pnpm audit:research
 */
import { STOCK_STORIES } from "../content/stocks";
import type { StockStory } from "../content/stocks/types";

const REWRITTEN_SECTIONS = [
  "takeaways",
  "bigPicture",
  "growth",
  "performance",
  "cash",
  "valuation",
  "analysts",
] as const;

const BANNED = [
  "sections below use reported financials",
  "growth is only useful if it earns a return",
  "cash flow is the link between reported earnings",
  "a growing gap between net income and free cash flow",
  "the market is paying for the growth and margin profile",
  "the peer table below compares",
  "these are third-party forecasts and can change",
  "scorecard",
  "average percentile across the factor screens",
  "for a capital-intensive business, compare that with the cost of capital",
  "the sections below",
];

const RATING_LANGUAGE = [
  /\bstrong buys?\b/i,
  /\bbuy ratings?\b/i,
  /\bsell ratings?\b/i,
  /\bhold ratings?\b/i,
  /\bunderperform\b/i,
  /\btimely buy\b/i,
  /\b(?:analyst|broker|consensus) ratings?\b/i,
];

const words = (text: string) =>
  text.split(/\s+/).filter((word) => /[A-Za-z0-9]/.test(word)).length;

function sectionText(
  story: StockStory,
  section: (typeof REWRITTEN_SECTIONS)[number],
): string {
  switch (section) {
    case "takeaways":
      return story.takeaways.join(" ");
    case "bigPicture":
      return [
        ...story.bigPicture.paragraphs,
        story.bigPicture.quote ?? "",
      ].join(" ");
    case "growth":
      return [
        ...story.growth.paragraphs,
        ...(story.growth.bullets ?? []).flatMap((bullet) => [
          bullet.title,
          bullet.detail,
        ]),
      ].join(" ");
    case "performance":
      return story.performance.paragraphs.join(" ");
    case "cash":
      return story.cash.paragraphs.join(" ");
    case "valuation":
      return story.valuation.paragraphs.join(" ");
    case "analysts":
      return story.analysts.paragraphs.join(" ");
  }
}

const stories = Object.values(STOCK_STORIES) as StockStory[];
const curatedStories = stories.filter(
  (story) =>
    story.narrativeSource === "curated" ||
    story.narrativeSource === "handwritten",
);
const curatedTickers = new Set(curatedStories.map((story) => story.ticker));
const autoCurated = stories.filter(
  (story) =>
    story.narrativeSource === "auto-curated" ||
    story.narrativeSource === "generated",
).length;
const sentenceOwners = new Map<string, Set<string>>();
const sectionSentenceOwners = new Map<string, Map<string, Set<string>>>();
const issues: string[] = [];

for (const story of stories) {
  const editorial =
    story.narrativeSource !== "auto-curated" &&
    story.narrativeSource !== "generated";
  for (const section of REWRITTEN_SECTIONS) {
    const text = sectionText(story, section);
    if (!text.trim()) {
      issues.push(`${story.ticker}: empty ${section}`);
      continue;
    }
    if (!editorial) continue;
    for (const sentence of text.split(/(?<=[.!?])\s+/)) {
      const key = sentence
        .toLowerCase()
        .replace(/[^a-z0-9 ]+/g, "")
        .replace(/\s+/g, " ")
        .trim();
      if (key.split(" ").length < 8) continue;
      const owners = sentenceOwners.get(key) ?? new Set<string>();
      owners.add(story.ticker);
      sentenceOwners.set(key, owners);
      const bySection =
        sectionSentenceOwners.get(section) ?? new Map<string, Set<string>>();
      const sectionOwners = bySection.get(key) ?? new Set<string>();
      sectionOwners.add(story.ticker);
      bySection.set(key, sectionOwners);
      sectionSentenceOwners.set(section, bySection);
    }
  }

  const all = REWRITTEN_SECTIONS.map((section) =>
    sectionText(story, section),
  ).join(" ");
  const lower = all.toLowerCase();
  for (const phrase of BANNED) {
    if (lower.includes(phrase))
      issues.push(`${story.ticker}: banned phrase - ${phrase}`);
  }
  for (const pattern of RATING_LANGUAGE) {
    const match = all.match(pattern);
    if (match) issues.push(`${story.ticker}: rating language - ${match[0]}`);
  }
  if (story.takeaways.length !== 4) {
    issues.push(`${story.ticker}: ${story.takeaways.length} takeaways`);
  }
  for (const section of [
    "bigPicture",
    "growth",
    "performance",
    "cash",
    "valuation",
    "analysts",
  ] as const) {
    const paragraphs = story[section].paragraphs;
    if (paragraphs.length < 2)
      issues.push(
        `${story.ticker}: ${section} has ${paragraphs.length} paragraphs`,
      );
    for (const paragraph of paragraphs) {
      const count = words(paragraph);
      if (count < 25)
        issues.push(`${story.ticker}: ${section} paragraph is ${count} words`);
      if (count > 180)
        issues.push(`${story.ticker}: ${section} paragraph is ${count} words`);
    }
  }
}

const duplicates = [...sentenceOwners.entries()]
  .filter(([, owners]) => owners.size > 1)
  .sort((a, b) => b[1].size - a[1].size);

const curatedDuplicates = duplicates.filter(([, owners]) =>
  [...owners].every((ticker) => curatedTickers.has(ticker)),
);

const openingOwners = new Map<string, Map<string, Set<string>>>();
const shingleOwners = new Map<string, Set<string>>();
for (const story of curatedStories) {
  for (const section of REWRITTEN_SECTIONS) {
    const first = sectionText(story, section).split(/(?<=[.!?])\s+/)[0] ?? "";
    const opening = first
      .toLowerCase()
      .replace(/[^a-z0-9 ]+/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .slice(0, 3)
      .join(" ");
    const bySection =
      openingOwners.get(section) ?? new Map<string, Set<string>>();
    const owners = bySection.get(opening) ?? new Set<string>();
    owners.add(story.ticker);
    bySection.set(opening, owners);
    openingOwners.set(section, bySection);

    for (const sentence of sectionText(story, section).split(/(?<=[.!?])\s+/)) {
      const tokens = sentence
        .toLowerCase()
        .replace(/[^a-z0-9 ]+/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ");
      for (let i = 0; i + 8 <= tokens.length; i += 1) {
        const shingle = tokens.slice(i, i + 8).join(" ");
        const set = shingleOwners.get(shingle) ?? new Set<string>();
        set.add(story.ticker);
        shingleOwners.set(shingle, set);
      }
    }
  }
}
const repeatedOpenings = [...openingOwners.entries()].flatMap(
  ([section, map]) =>
    [...map.entries()]
      .filter(([, owners]) => owners.size > 2)
      .map(([opening, owners]) => ({ section, opening, owners })),
);
const repeatedShingles = [...shingleOwners.entries()].filter(
  ([, owners]) => owners.size > 2,
);

console.log(
  `[research] ${stories.length} reports audited (${curatedTickers.size} curated, ${autoCurated} auto-curated)`,
);
console.log(
  `[research] ${duplicates.length} sentences appear in more than one report`,
);
console.log(
  `[research] ${curatedDuplicates.length} duplicate sentences among curated reports`,
);
console.log(
  `[research] ${repeatedOpenings.length} curated 3-word openings shared by 3+ reports`,
);
console.log(
  `[research] ${repeatedShingles.length} curated 8-word sequences shared by 3+ reports`,
);
console.log(`[research] ${issues.length} structural/style issues`);

for (const section of REWRITTEN_SECTIONS) {
  const bySection = sectionSentenceOwners.get(section);
  if (!bySection) continue;
  const dupes = [...bySection.entries()].filter(
    ([, owners]) => owners.size > 1,
  );
  console.log(
    `[research] ${section}: ${dupes.length} cross-company duplicates`,
  );
}

if (repeatedOpenings.length) {
  console.log("\nCurated openings shared by 3+ reports:");
  for (const item of repeatedOpenings
    .sort((a, b) => b.owners.size - a.owners.size)
    .slice(0, 20)) {
    console.log(
      `- ${item.section} / ${item.owners.size}: "${item.opening}" (${[...item.owners].slice(0, 8).join(", ")})`,
    );
  }
}

if (repeatedShingles.length) {
  console.log("\nCurated 8-word sequences shared by 3+ reports:");
  for (const [shingle, owners] of repeatedShingles
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, 20)) {
    console.log(
      `- ${owners.size}: "${shingle}" (${[...owners].slice(0, 8).join(", ")})`,
    );
  }
}

if (curatedDuplicates.length) {
  console.log("\nCurated duplicate sentences:");
  for (const [sentence, owners] of curatedDuplicates.slice(0, 40)) {
    console.log(
      `- ${owners.size} companies (${[...owners].slice(0, 8).join(", ")}): ${sentence.slice(0, 180)}`,
    );
  }
}

if (duplicates.length) {
  console.log("\nCross-company duplicate sentences:");
  for (const [sentence, owners] of duplicates.slice(0, 30)) {
    console.log(
      `- ${owners.size} companies (${[...owners].slice(0, 6).join(", ")}): ${sentence.slice(0, 180)}`,
    );
  }
}

if (issues.length) {
  console.log("\nIssues:");
  for (const issue of issues.slice(0, 60)) console.log(`- ${issue}`);
}

if (duplicates.length > 0 || issues.length > 0) process.exitCode = 1;
