import type { StockStory } from "@/content/stocks/types";
import { saudiAramco } from "./2222";
import { alRajhiBank } from "./1120";
import { saudiNationalBank } from "./1180";
import { riyadBank } from "./1010";
import { saudiAwwalBank } from "./1060";
import { alinmaBank } from "./1150";
import { arabNationalBank } from "./1080";
import { banqueSaudiFransi } from "./1050";
import { bankAlbilad } from "./1140";
import { bankAljazira } from "./1020";

const STORIES: Record<string, StockStory> = {
  "2222": saudiAramco,
  "1120": alRajhiBank,
  "1180": saudiNationalBank,
  "1010": riyadBank,
  "1060": saudiAwwalBank,
  "1150": alinmaBank,
  "1080": arabNationalBank,
  "1050": banqueSaudiFransi,
  "1140": bankAlbilad,
  "1020": bankAljazira,
};

export function getGccStockStory(ticker: string): StockStory | null {
  return STORIES[ticker.toUpperCase()] ?? null;
}

export const GCC_STORY_TICKERS = Object.keys(STORIES);
