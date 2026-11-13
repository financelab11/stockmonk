import { z } from "zod";

export const thresholdUnitSchema = z.enum(["INR_CRORE", "USD_MILLION"]);
export type ThresholdUnit = z.infer<typeof thresholdUnitSchema>;

export const jobSettingsSchema = z.object({
  thresholdValue: z.number().positive(),
  thresholdUnit: thresholdUnitSchema,
  /** The same threshold converted to absolute INR for auditability. */
  thresholdInr: z.number().positive().optional(),
  fxRate: z.number().positive(),
  fxAsOf: z.string(),
  minAnalysts: z.number().int().min(1).max(50),
  divergenceFlagPct: z.number().positive().max(1),
});
export type JobSettings = z.infer<typeof jobSettingsSchema>;

export const uploadMappingSchema = z.object({
  ticker: z.string().nullable(),
  name: z.string().nullable(),
  exchange: z.string().nullable(),
  marketCap: z.string().nullable(),
});
export type UploadMapping = z.infer<typeof uploadMappingSchema>;

export const uploadRowSchema = z.object({
  rowNumber: z.number().int().positive(),
  values: z.record(z.string(), z.string()),
});
export type UploadRow = z.infer<typeof uploadRowSchema>;

export const parsedUploadSchema = z.object({
  headers: z.array(z.string()),
  rows: z.array(uploadRowSchema),
  delimiter: z.string(),
  format: z.enum(["csv", "xlsx", "text"]),
  mapping: uploadMappingSchema,
  truncated: z.boolean().default(false),
});
export type ParsedUpload = z.infer<typeof parsedUploadSchema>;

export const resolutionSuggestionSchema = z.object({
  ticker: z.string(),
  name: z.string(),
  score: z.number(),
});
export type ResolutionSuggestion = z.infer<typeof resolutionSuggestionSchema>;

export const resolvedRowSchema = z.object({
  rowNumber: z.number().int().positive(),
  inputTicker: z.string(),
  inputName: z.string(),
  status: z.enum(["matched", "ambiguous", "unmatched", "skipped"]),
  ticker: z.string().nullable(),
  name: z.string().nullable(),
  sector: z.string().nullable(),
  marketCapInr: z.number().nullable(),
  marketCapAsOf: z.string().nullable(),
  marketCapSource: z.string().nullable(),
  suggestions: z.array(resolutionSuggestionSchema),
});
export type ResolvedRow = z.infer<typeof resolvedRowSchema>;

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

export const jobItemStatusSchema = z.enum([
  "queued",
  "fetching",
  "analyzing",
  "done",
  "failed",
  "skipped",
]);
export type JobItemStatus = z.infer<typeof jobItemStatusSchema>;

export const jobItemSchema = z.object({
  rowNumber: z.number().int().positive(),
  ticker: z.string(),
  name: z.string(),
  status: jobItemStatusSchema,
  method: projectionMethodSchema.nullable(),
  cagr: z.number().nullable(),
  error: z.string().nullable(),
  updatedAt: z.string(),
});
export type JobItem = z.infer<typeof jobItemSchema>;

export const jobCountsSchema = z.object({
  total: z.number().int(),
  queued: z.number().int(),
  running: z.number().int(),
  done: z.number().int(),
  failed: z.number().int(),
  skipped: z.number().int(),
});
export type JobCounts = z.infer<typeof jobCountsSchema>;

export const jobSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  status: z.enum(["queued", "running", "completed", "failed", "cancelled"]),
  settings: jobSettingsSchema,
  items: z.array(jobItemSchema),
  counts: jobCountsSchema,
  results: z.array(forecastResultSchema),
  errors: z.array(z.string()),
});
export type Job = z.infer<typeof jobSchema>;

export const jobSummarySchema = jobSchema.omit({ results: true });
export type JobSummary = z.infer<typeof jobSummarySchema>;

export type ForecastInput = {
  ticker: string;
  name: string;
  sector: string;
  marketCap: MarketCap;
  baseYear: BaseYear;
  history: HistoryPoint[];
  segments: SegmentPoint[];
  consensus: ConsensusYear[];
  evidence: EvidenceItem[];
};
