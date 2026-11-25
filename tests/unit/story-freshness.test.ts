import { describe, expect, it } from "vitest";
import {
  emptyCounts,
  latestQuarterLabel,
  latestQuarterScore,
  quarterScore,
  statusFromEvents,
  storyQuarterScore,
  type StoryEvent,
} from "@/lib/story-freshness";
import type { StockStory } from "@/content/stocks/types";

const story = {
  ticker: "TEST",
  kicker: "Test",
  title: "Test",
  dek: "Test",
  readingMinutes: 5,
  takeaways: [],
  filingUrl: "",
  irUrl: "",
  narrativeUpdatedAt: "2026-11-24",
  bigPicture: { paragraphs: [] },
  whatItDoes: { paragraphs: [] },
  howItMakesMoney: { paragraphs: [] },
  growth: { paragraphs: [] },
  performance: { paragraphs: [] },
  cash: { paragraphs: [] },
  valuation: { paragraphs: [] },
  analysts: { paragraphs: [] },
  risks: { intro: "", items: [], watchlist: [] },
  bottomLine: { paragraphs: [], questions: [] },
} satisfies StockStory;

describe("story freshness", () => {
  it("scores fiscal quarters across year boundaries", () => {
    expect(quarterScore("Q2", 2027)).toBe(8110);
    expect(quarterScore("Q4", 2026)).toBe(8108);
    expect(
      latestQuarterScore([
        { period: "Q1", fyear: 2027 },
        { period: "Q3", fyear: 2026 },
      ]),
    ).toBe(8109);
    expect(
      latestQuarterLabel([
        { period: "Q1", fyear: 2027 },
        { period: "Q3", fyear: 2026 },
      ]),
    ).toBe("Q1 FY27");
  });

  it("extracts the newest quarter named in a story", () => {
    const text = {
      ...story,
      bigPicture: { paragraphs: ["Q4 FY2025 was the latest, after Q1 FY27."] },
    };
    expect(storyQuarterScore(text)).toBe(2027 * 4 + 1);
  });

  it("prioritises a material rewrite over an accepted source gap", () => {
    const price: StoryEvent = {
      type: "price-stale",
      date: "2026-04-28",
      detail: "old price",
    };
    expect(statusFromEvents([price], true)).toBe("source-gap");
    expect(statusFromEvents([price], false)).toBe("data-stale");
    expect(
      statusFromEvents(
        [
          price,
          { type: "new-earnings", date: "2026-11-24", detail: "new 8-K" },
        ],
        true,
      ),
    ).toBe("rewrite-pending");
    expect(statusFromEvents([])).toBe("current");
  });

  it("starts every freshness counter at zero", () => {
    expect(emptyCounts()).toEqual({
      current: 0,
      "rewrite-pending": 0,
      "data-stale": 0,
      "source-gap": 0,
      archived: 0,
    });
  });
});
