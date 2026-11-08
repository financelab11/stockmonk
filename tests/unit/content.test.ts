import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { STOCK_STORIES } from "@/content/stocks";
import { ARTICLE_SECTIONS } from "@/lib/constants";
import { generateStockStory } from "@/lib/generated-story";
import { tickerDataSchema } from "@/lib/schemas";
import { validateContent, validateStory } from "@/lib/validate-content";
import { CORE_RESEARCH_TICKERS } from "@/config/universe";

describe("research content", () => {
  it("has a hand-written story for every core research ticker", () => {
    expect(Object.keys(STOCK_STORIES).sort()).toEqual(
      [...CORE_RESEARCH_TICKERS].sort(),
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

  it("writes a substantial story for every core ticker", () => {
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

  it("generates compliant reports for expanded names across sector types", () => {
    const samples = ["CAVA", "JPM", "XOM", "VKTX", "OKLO", "LIN", "PLD", "KNSL"];
    for (const ticker of samples) {
      const data = tickerDataSchema.parse(
        JSON.parse(
          fs.readFileSync(
            path.join(process.cwd(), "data", "processed", ticker, "data.json"),
            "utf8",
          ),
        ),
      );
      const story = generateStockStory({
        data,
        consensus: null,
        segments: null,
        prices: [],
        pricesMax: [],
        factors: {
          growth: 50,
          profitability: 50,
          cash: 50,
          balance: 50,
          valuation: 50,
        },
        cagr: null,
        latestQYoY: null,
        rangePosition: null,
      });
      expect(story.ticker, ticker).toBe(ticker);
      expect(story.irUrl, ticker).not.toBe(story.filingUrl);
      expect(validateStory(story), ticker).toEqual([]);
    }
  });
});
