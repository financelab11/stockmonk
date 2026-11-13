import { z } from "zod";

export const evidenceKindSchema = z.enum([
  "annual_report",
  "quarterly_results",
  "earnings_call",
  "investor_presentation",
  "guidance",
  "consensus",
  "market_data",
]);
export type EvidenceKind = z.infer<typeof evidenceKindSchema>;

export const evidenceItemSchema = z.object({
  kind: evidenceKindSchema,
  title: z.string(),
  url: z.string().nullable(),
  date: z.string().nullable(),
  fetchedAt: z.string(),
  available: z.boolean(),
  note: z.string().nullable(),
});
export type EvidenceItem = z.infer<typeof evidenceItemSchema>;

export const historyPointSchema = z.object({
  label: z.string(),
  periodEnd: z.string(),
  revenue: z.number(),
  growth: z.number().nullable(),
});
export type HistoryPoint = z.infer<typeof historyPointSchema>;

export const segmentPointSchema = z.object({
  name: z.string(),
  revenue: z.number(),
  share: z.number(),
});
export type SegmentPoint = z.infer<typeof segmentPointSchema>;

export const projectionMethodSchema = z.enum([
  "CONSENSUS",
  "CONSENSUS_PLUS_ANALYST_EXTENSION",
  "ANALYST_MODEL",
]);
export type ProjectionMethod = z.infer<typeof projectionMethodSchema>;

export const projectionSourceSchema = z.enum([
  "CONSENSUS",
  "ANALYST_EXTENSION",
  "ANALYST_MODEL",
]);

export const projectionPointSchema = z.object({
  label: z.string(),
  periodEnd: z.string(),
  base: z.number(),
  bear: z.number(),
  bull: z.number(),
  source: projectionSourceSchema,
  analystCount: z.number().nullable(),
});
export type ProjectionPoint = z.infer<typeof projectionPointSchema>;

export const cagrSchema = z.object({
  base: z.number(),
  bear: z.number(),
  bull: z.number(),
});
export type Cagr = z.infer<typeof cagrSchema>;

export const consensusYearSchema = z.object({
  label: z.string(),
  periodEnd: z.string(),
  revenue: z.number().nullable(),
  revenueHigh: z.number().nullable().default(null),
  revenueLow: z.number().nullable().default(null),
  analystCount: z.number().nullable(),
});
export type ConsensusYear = z.infer<typeof consensusYearSchema>;

export const consensusCheckSchema = z.object({
  available: z.boolean(),
  analystCount: z.number().nullable(),
  years: z.array(consensusYearSchema),
  baseDifferencePct: z.number().nullable(),
  flagged: z.boolean(),
  note: z.string().nullable(),
});
export type ConsensusCheck = z.infer<typeof consensusCheckSchema>;

export const marketCapSchema = z.object({
  value: z.number(),
  currency: z.literal("INR"),
  asOf: z.string(),
  source: z.string(),
});
export type MarketCap = z.infer<typeof marketCapSchema>;

export const baseYearSchema = z.object({
  label: z.string(),
  endDate: z.string(),
  revenue: z.number(),
  currency: z.literal("INR"),
  unit: z.literal("INR"),
});
export type BaseYear = z.infer<typeof baseYearSchema>;

export const forecastResultSchema = z.object({
  company_id: z.string(),
  ticker: z.string(),
  name: z.string(),
  sector: z.string(),
  fiscal_year_end: z.string(),
  market_cap: marketCapSchema,
  base_year: baseYearSchema,
  projections: z.object({
    FY1: projectionPointSchema,
    FY2: projectionPointSchema,
    FY3: projectionPointSchema,
  }),
  cagr_3y: cagrSchema,
  method: projectionMethodSchema,
  consensus: consensusCheckSchema,
  evidence: z.array(evidenceItemSchema),
  historical_reference: z.array(historyPointSchema),
  segment_context: z.array(segmentPointSchema),
  assumptions: z.array(z.string()),
  risks: z.array(z.string()),
  confidence: z.enum(["high", "medium", "low"]),
  generated_at: z.string(),
});
export type ForecastResult = z.infer<typeof forecastResultSchema>;
