import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { portfolioDetailSchema, portfolioIndexSchema } from "./schemas";
import type { PortfolioDetail, PortfolioIndex, PortfolioSummary } from "./types";

const PORTFOLIO_DIR = path.join(process.cwd(), "public", "data", "portfolios");
const INDEX_FILE = path.join(PORTFOLIO_DIR, "index.json");
const SLUG_PATTERN = /^[a-z0-9-]+$/;

const EMPTY_INDEX: PortfolioIndex = {
  generatedAt: "",
  methodologyVersion: "",
  universeSize: 0,
  researchUniverseSize: 0,
  portfolios: [],
};

function readJson(file: string): unknown | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as unknown;
  } catch {
    return null;
  }
}

export const getPortfolioIndex = cache((): PortfolioIndex => {
  const raw = readJson(INDEX_FILE);
  if (!raw) return EMPTY_INDEX;
  const parsed = portfolioIndexSchema.safeParse(raw);
  return parsed.success ? parsed.data : EMPTY_INDEX;
});

export const getPortfolio = cache((rawSlug: string): PortfolioDetail | null => {
  const slug = rawSlug.trim().toLowerCase();
  if (!SLUG_PATTERN.test(slug)) return null;
  const raw = readJson(path.join(PORTFOLIO_DIR, `${slug}.json`));
  if (!raw) return null;
  const parsed = portfolioDetailSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
});

export const getPortfolioSummaries = cache((): PortfolioSummary[] => {
  return getPortfolioIndex().portfolios;
});

export const getPortfolioSlugs = cache((): string[] => {
  return getPortfolioIndex().portfolios.map((portfolio) => portfolio.slug);
});

export function getPortfolioCategoryCounts(): Array<{
  category: string;
  count: number;
}> {
  const counts = new Map<string, number>();
  for (const portfolio of getPortfolioIndex().portfolios) {
    counts.set(
      portfolio.primaryCategory,
      (counts.get(portfolio.primaryCategory) ?? 0) + 1,
    );
  }
  return [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}
