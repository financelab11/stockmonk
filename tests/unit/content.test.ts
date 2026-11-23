import { describe, expect, it } from "vitest";
import { STOCK_STORIES } from "@/content/stocks";
import { ARTICLE_SECTIONS } from "@/lib/constants";
import { validateContent } from "@/lib/validate-content";
import { RESEARCH_TICKERS } from "@/config/universe";

describe("research content", () => {
  it("has a story for every research ticker", () => {
    expect(Object.keys(STOCK_STORIES).sort()).toEqual(
      [...RESEARCH_TICKERS].sort(),
    );
  });

  it("passes the editorial validator", () => {
    const errors = validateContent();
    expect(errors).toEqual([]);
  });

  it("has ten mandatory sections in the article template", () => {
    expect(ARTICLE_SECTIONS).toHaveLength(10);
    expect(ARTICLE_SECTIONS.map((section) => section.id)).toEqual([
      "big-picture",
      "what-it-does",
      "how-it-makes-money",
      "growth-drivers",
      "financial-performance",
      "cash-and-balance-sheet",
      "valuation",
      "analysts",
      "risks",
      "bottom-line",
    ]);
  });

  it("writes a substantial story for every ticker", () => {
    for (const story of Object.values(STOCK_STORIES)) {
      const words = JSON.stringify(story)
        .replace(/[{}[\]",:]/g, " ")
        .split(/\s+/)
        .filter((word) => /[A-Za-z]/.test(word)).length;
      expect(words, story.ticker).toBeGreaterThan(600);
      expect(story.risks.items.length).toBeGreaterThanOrEqual(5);
      expect(story.bottomLine.questions.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("does not leave placeholder text in a story", () => {
    for (const story of Object.values(STOCK_STORIES)) {
      const text = JSON.stringify(story).toLowerCase();
      expect(text, story.ticker).not.toContain("lorem ipsum");
      expect(text, story.ticker).not.toContain("tbd");
      expect(text, story.ticker).not.toContain("placeholder");
      expect(text, story.ticker).not.toContain("[insert");
    }
  });
});
