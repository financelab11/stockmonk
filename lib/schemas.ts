import { z } from "zod";

export const pricePointSchema = z.object({
  d: z.string(),
  o: z.number(),
  h: z.number(),
  l: z.number(),
  c: z.number(),
  a: z.number(),
  v: z.number(),
  mc: z.number().nullable().optional(),
  pe: z.number().nullable().optional(),
  ps: z.number().nullable().optional(),
  pfcf: z.number().nullable().optional(),
  evEbitda: z.number().nullable().optional(),
  evSales: z.number().nullable().optional(),
  dy: z.number().nullable().optional(),
});

export type PricePoint = z.infer<typeof pricePointSchema>;

/** Public range files use a Unix timestamp rather than a date string. */
export const rangePricePointSchema = z.object({
  t: z.number(),
  o: z.number(),
  h: z.number(),
  l: z.number(),
  c: z.number(),
  v: z.number(),
});

export type RangePricePoint = z.infer<typeof rangePricePointSchema>;

export const financialRowSchema = z.object({
  period: z.string(),
  fyear: z.number(),
  reportDate: z.string(),
  publishDate: z.string().nullable().optional(),
  ttm: z.boolean(),
  restated: z.boolean().optional(),
  revenue: z.number().nullable(),
  grossProfit: z.number().nullable(),
  operatingIncome: z.number().nullable(),
  netIncome: z.number().nullable(),
  epsDiluted: z.number().nullable(),
  epsBasic: z.number().nullable(),
  interestExpense: z.number().nullable(),
  pretaxIncome: z.number().nullable(),
  incomeTax: z.number().nullable(),
  rnd: z.number().nullable(),
  sga: z.number().nullable(),
  cashAndInvestments: z.number().nullable(),
  totalDebt: z.number().nullable(),
  totalEquity: z.number().nullable(),
  totalAssets: z.number().nullable(),
  inventory: z.number().nullable(),
  receivables: z.number().nullable(),
  cfo: z.number().nullable(),
  capex: z.number().nullable(),
  freeCashFlow: z.number().nullable(),
  da: z.number().nullable(),
  sbc: z.number().nullable(),
  dividendsPaid: z.number().nullable(),
  buybacks: z.number().nullable(),
  ebitda: z.number().nullable(),
  grossMargin: z.number().nullable(),
  operatingMargin: z.number().nullable(),
  netMargin: z.number().nullable(),
  fcfMargin: z.number().nullable(),
  roic: z.number().nullable(),
  netDebt: z.number().nullable(),
  netDebtToEbitda: z.number().nullable(),
  roe: z.number().nullable(),
});

export type FinancialRow = z.infer<typeof financialRowSchema>;

export const factorChipSchema = z.object({
  key: z.enum(["growth", "profitability", "cash", "balance", "valuation"]),
  label: z.string(),
  tone: z.enum(["positive", "neutral", "caution", "info"]),
  detail: z.string(),
});

export type FactorChip = z.infer<typeof factorChipSchema>;

export const tickerDataSchema = z.object({
  ticker: z.string(),
  name: z.string(),
  description: z.string(),
  sector: z.string(),
  industry: z.string(),
  employees: z.number().nullable(),
  isin: z.string().nullable(),
  cik: z.string().nullable().optional(),
  latest10KUrl: z.string().nullable().optional(),
  market: z.enum(["US"]).nullable().optional(),
  hq: z.string().nullable().optional(),
  founded: z.string().nullable().optional(),
  website: z.string().nullable().optional(),
  currency: z.string().default("USD"),
  /** Currency the shares trade in, when it differs from the reporting currency. */
  quoteCurrency: z.string().nullable().optional(),
  isResearch: z.boolean(),
  latestPrice: z.object({
    close: z.number(),
    prevClose: z.number().nullable(),
    changePct: z.number().nullable(),
    asOf: z.string(),
    high52: z.number().nullable(),
    low52: z.number().nullable(),
    marketCap: z.number().nullable(),
    sharesOutstanding: z.number().nullable(),
    dividendYield: z.number().nullable(),
  }),
  ttm: financialRowSchema.nullable(),
  quarterly: z.array(financialRowSchema),
  annual: z.array(financialRowSchema),
  metrics: z.object({
    revenueTtm: z.number().nullable(),
    revenueGrowthTtm: z.number().nullable(),
    revenueGrowthLatestQ: z.number().nullable(),
    epsTtm: z.number().nullable(),
    epsGrowthTtm: z.number().nullable(),
    grossMargin: z.number().nullable(),
    operatingMargin: z.number().nullable(),
    netMargin: z.number().nullable(),
    fcfMargin: z.number().nullable(),
    roic: z.number().nullable(),
    roe: z.number().nullable(),
    netDebt: z.number().nullable(),
    netDebtToEbitda: z.number().nullable(),
    interestCover: z.number().nullable(),
    freeCashFlowTtm: z.number().nullable(),
    ebitdaTtm: z.number().nullable(),
    pe: z.number().nullable(),
    evEbitda: z.number().nullable(),
    evSales: z.number().nullable(),
    pfcf: z.number().nullable(),
    fcfYield: z.number().nullable(),
    return1y: z.number().nullable(),
    returnYtd: z.number().nullable(),
    return5y: z.number().nullable(),
  }),
  factorChips: z.array(factorChipSchema),
  multipleHistory: z
    .array(
      z.object({
        date: z.string(),
        pe: z.number().nullable(),
        evEbitda: z.number().nullable(),
        evSales: z.number().nullable(),
        pfcf: z.number().nullable(),
      }),
    )
    .default([]),
  sources: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
      date: z.string().optional(),
    }),
  ),
  updatedAt: z.string(),
});

export type TickerData = z.infer<typeof tickerDataSchema>;

export const universeEntrySchema = z.object({
  ticker: z.string(),
  name: z.string(),
  sector: z.string(),
  industry: z.string(),
  description: z.string(),
  isResearch: z.boolean(),
  market: z.enum(["US"]).nullable().optional(),
  currency: z.string().nullable().optional(),
  price: z.number().nullable(),
  changePct: z.number().nullable(),
  marketCap: z.number().nullable(),
  return1y: z.number().nullable(),
  revenueTtm: z.number().nullable(),
  revenueGrowthTtm: z.number().nullable(),
  epsGrowthTtm: z.number().nullable().optional(),
  operatingMargin: z.number().nullable(),
  pe: z.number().nullable(),
  evEbitda: z.number().nullable(),
  dataQuality: z.enum(["High", "Moderate", "Limited"]).optional(),
  dataQualityScore: z.number().optional(),
  v2Scores: z
    .object({
      growth: z.number().nullable(),
      quality: z.number().nullable(),
      valuation: z.number().nullable(),
      technical: z.number().nullable(),
      composite: z.number().nullable(),
      status: z.enum(["complete", "incomplete"]),
      coverage: z.number(),
    })
    .optional(),
  factorChips: z.array(factorChipSchema),
  asOf: z.string().nullable(),
});

export type UniverseEntry = z.infer<typeof universeEntrySchema>;

export const mixSliceSchema = z.object({
  name: z.string(),
  revenue: z.number(),
  share: z.number(),
});

export const segmentMixSchema = z.object({
  ticker: z.string(),
  asOf: z.string(),
  source: z.object({
    name: z.string(),
    url: z.string(),
    date: z.string(),
  }),
  segmentLabel: z.string(),
  segments: z.array(mixSliceSchema),
  geographyLabel: z.string().nullable(),
  geography: z.array(mixSliceSchema),
});

export type SegmentMix = z.infer<typeof segmentMixSchema>;
export type MixSlice = z.infer<typeof mixSliceSchema>;

export const consensusSchema = z.object({
  ticker: z.string(),
  provider: z.string(),
  asOf: z.string(),
  sourceUrl: z.string(),
  targetMean: z.number().nullable(),
  targetHigh: z.number().nullable(),
  targetLow: z.number().nullable(),
  recommendationKey: z.string().nullable(),
  analystCount: z.number().nullable(),
  distribution: z
    .object({
      strongBuy: z.number(),
      buy: z.number(),
      hold: z.number(),
      sell: z.number(),
      strongSell: z.number(),
    })
    .nullable(),
  estimates: z.array(
    z.object({
      period: z.string(),
      endDate: z.string().nullable(),
      revenueAvg: z.number().nullable(),
      revenueGrowth: z.number().nullable(),
      epsAvg: z.number().nullable(),
      epsGrowth: z.number().nullable(),
      analystCount: z.number().nullable(),
    }),
  ),
  history: z.array(
    z.object({
      quarter: z.string(),
      endDate: z.string().nullable(),
      epsActual: z.number().nullable(),
      epsEstimate: z.number().nullable(),
      revenueActual: z.number().nullable(),
      revenueEstimate: z.number().nullable(),
    }),
  ),
  currentQuarter: z
    .object({
      endDate: z.string().nullable(),
      revenueAvg: z.number().nullable(),
      revenueGrowth: z.number().nullable(),
      epsAvg: z.number().nullable(),
      epsGrowth: z.number().nullable(),
      analystCount: z.number().nullable(),
    })
    .nullable(),
  revisions: z
    .object({
      eps7d: z.number().nullable(),
      eps30d: z.number().nullable(),
      eps60d: z.number().nullable(),
      eps90d: z.number().nullable(),
      revenue30d: z.number().nullable(),
    })
    .nullable()
    .optional(),
});

export type Consensus = z.infer<typeof consensusSchema>;
