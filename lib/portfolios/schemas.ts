import { z } from "zod";

export const portfolioCategorySchema = z.enum([
  "Quantitative",
  "Thematic",
  "Sector",
  "Fundamental",
  "Technical",
  "Single-Factor",
  "Multi-Factor",
  "Growth",
  "Value",
  "Quality & Dividend",
  "Defensive",
  "Small & Mid Cap",
]);

export const portfolioStrategySchema = z.enum([
  "Quantitative",
  "Thematic",
  "Sector",
  "Fundamental",
  "Technical",
  "Momentum",
  "Growth",
  "Value",
  "Quality",
  "Multi-Factor",
  "Single-Factor",
  "Dividend & Income",
  "Defensive",
  "Small & Mid Cap",
]);

export const marketCapFocusSchema = z.enum([
  "Mega Cap",
  "Large Cap",
  "Mid Cap",
  "Small Cap",
  "Multi-Cap",
]);

export const volatilityLevelSchema = z.enum(["Low", "Medium", "High"]);
export const rebalanceFrequencySchema = z.enum(["Monthly", "Quarterly"]);

export const portfolioScoreBundleSchema = z.object({
  growth: z.number().nullable(),
  quality: z.number().nullable(),
  valuation: z.number().nullable(),
  technical: z.number().nullable(),
  composite: z.number().nullable(),
  coverage: z.number().nullable(),
});

export const portfolioConstituentSchema = z.object({
  ticker: z.string().min(1),
  name: z.string().min(1),
  sector: z.string().min(1),
  industry: z.string().min(1),
  marketCap: z.number().nullable(),
  price: z.number(),
  weight: z.number().positive(),
  return1y: z.number().nullable(),
  scores: portfolioScoreBundleSchema,
  research: z.boolean(),
  rationale: z.string().min(1),
});

export const portfolioSeriesPointSchema = z.object({
  date: z.string().min(8),
  portfolio: z.number(),
  benchmark: z.number(),
});

export const portfolioPeriodMetricsSchema = z.object({
  period: z.string(),
  portfolioReturn: z.number().nullable(),
  benchmarkReturn: z.number().nullable(),
  excessReturn: z.number().nullable(),
  annualisedReturn: z.number().nullable(),
  volatility: z.number().nullable(),
  maxDrawdown: z.number().nullable(),
  sharpe: z.number().nullable(),
});

export const portfolioBenchmarkSeriesSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  series: z.array(portfolioSeriesPointSchema),
  metrics: z.array(portfolioPeriodMetricsSchema),
});

export const portfolioPerformanceSchema = z.object({
  available: z.boolean(),
  basis: z.string(),
  source: z.string(),
  inception: z.string().nullable(),
  asOf: z.string().nullable(),
  periods: z.array(z.string()),
  series: z.array(portfolioSeriesPointSchema),
  metrics: z.array(portfolioPeriodMetricsSchema),
  benchmarks: z.array(portfolioBenchmarkSeriesSchema),
  volatility: z.number().nullable(),
  volatilityLevel: volatilityLevelSchema,
});

export const portfolioAllocationSchema = z.object({
  label: z.string(),
  weight: z.number(),
  count: z.number().int(),
});

export const portfolioRebalanceEventSchema = z.object({
  date: z.string(),
  title: z.string(),
  summary: z.string(),
});

export const portfolioReviewChangeSchema = z.object({
  action: z.enum(["Add", "Remove", "Increase", "Reduce"]),
  ticker: z.string(),
  name: z.string(),
  currentWeight: z.number().nullable(),
  proposedWeight: z.number().nullable(),
  reasons: z.array(z.string()),
});

export const portfolioReviewSchema = z.object({
  asOf: z.string(),
  status: z.enum(["proposed", "none"]),
  note: z.string(),
  changes: z.array(portfolioReviewChangeSchema),
});

export const portfolioReportSectionSchema = z.object({
  title: z.string(),
  paragraphs: z.array(z.string()),
});

export const portfolioReportSchema = z.object({
  headline: z.string(),
  dek: z.string(),
  sections: z.array(portfolioReportSectionSchema),
  constituentNotes: z.array(
    z.object({ ticker: z.string(), note: z.string() }),
  ),
});

export const portfolioSummarySchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  description: z.string().min(1),
  primaryCategory: portfolioCategorySchema,
  strategyType: portfolioStrategySchema,
  tags: z.array(z.string()),
  marketCapFocus: marketCapFocusSchema,
  minimumInvestment: z.number().positive(),
  rebalanceFrequency: rebalanceFrequencySchema,
  holdingsCount: z.number().int().min(1),
  volatility: volatilityLevelSchema,
  volatilityValue: z.number().nullable(),
  return1y: z.number().nullable(),
  return1m: z.number().nullable(),
  return6m: z.number().nullable(),
  benchmark: z.object({ id: z.string(), name: z.string() }),
  performanceBasis: z.string(),
  performanceAvailable: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  popularity: z.number(),
});

export const portfolioDetailSchema = portfolioSummarySchema.extend({
  thesis: z.string().min(1),
  focus: z.string().min(1),
  risks: z.string().min(1),
  horizon: z.string().min(1),
  methodology: z.object({
    version: z.string(),
    summary: z.string(),
    paragraphs: z.array(z.string()),
    scoreWeights: z.object({
      growth: z.number(),
      quality: z.number(),
      valuation: z.number(),
      technical: z.number(),
    }),
    selectionCriteria: z.array(z.string()),
    weighting: z.string(),
    constraints: z.array(z.string()),
  }),
  rationale: z.object({
    opportunity: z.array(z.string()),
    whyTheseCompanies: z.array(z.string()),
    risks: z.array(z.string()),
    invalidation: z.array(z.string()),
  }),
  constituents: z.array(portfolioConstituentSchema).min(5),
  allocations: z.object({
    sectors: z.array(portfolioAllocationSchema),
    marketCap: z.array(portfolioAllocationSchema),
    top10Weight: z.number(),
  }),
  performance: portfolioPerformanceSchema,
  benchmarkOptions: z.array(
    z.object({ id: z.string(), name: z.string() }),
  ),
  rebalance: z.object({
    frequency: rebalanceFrequencySchema,
    lastRebalanced: z.string(),
    nextRebalance: z.string(),
    events: z.array(portfolioRebalanceEventSchema),
  }),
  review: portfolioReviewSchema,
  report: portfolioReportSchema,
});

export const portfolioIndexSchema = z.object({
  generatedAt: z.string(),
  methodologyVersion: z.string(),
  universeSize: z.number().int(),
  researchUniverseSize: z.number().int(),
  portfolios: z.array(portfolioSummarySchema).min(100),
});

export type PortfolioIndexData = z.infer<typeof portfolioIndexSchema>;
export type PortfolioDetailData = z.infer<typeof portfolioDetailSchema>;
