import type { StockStory } from "./types";
import { AAPL } from "./AAPL";
import { AMZN } from "./AMZN";
import { AVGO } from "./AVGO";
import { GOOGL } from "./GOOGL";
import { JPM } from "./JPM";
import { LLY } from "./LLY";
import { META } from "./META";
import { MSFT } from "./MSFT";
import { NVDA } from "./NVDA";
import { TSLA } from "./TSLA";

export const STOCK_STORIES: Record<string, StockStory> = {
  AAPL,
  AMZN,
  AVGO,
  GOOGL,
  JPM,
  LLY,
  META,
  MSFT,
  NVDA,
  TSLA,
};

export function getStockStory(ticker: string): StockStory | null {
  return STOCK_STORIES[ticker.toUpperCase()] ?? null;
}

export type { StockStory } from "./types";
