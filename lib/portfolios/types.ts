export type PortfolioPrimaryCategory =
  | "Quantitative"
  | "Thematic"
  | "Sector"
  | "Fundamental"
  | "Technical"
  | "Single-Factor"
  | "Multi-Factor"
  | "Growth"
  | "Value"
  | "Quality & Dividend"
  | "Defensive"
  | "Small & Mid Cap";

export type PortfolioStrategyType =
  | "Quantitative"
  | "Thematic"
  | "Sector"
  | "Fundamental"
  | "Technical"
  | "Momentum"
  | "Growth"
  | "Value"
  | "Quality"
  | "Multi-Factor"
  | "Single-Factor"
  | "Dividend & Income"
  | "Defensive"
  | "Small & Mid Cap";

export type MarketCapFocus =
  | "Mega Cap"
  | "Large Cap"
  | "Mid Cap"
  | "Small Cap"
  | "Multi-Cap";

export type VolatilityLevel = "Low" | "Medium" | "High";
export type RebalanceFrequency = "Monthly" | "Quarterly";
export type WeightingMethod =
  | "score"
  | "equal"
  | "marketCap"
  | "dividend"
  | "lowVolatility";

export type PortfolioFilters = {
  sectors?: string[];
  industries?: string[];
  excludeIndustries?: string[];
  /** Curated theme membership drawn from the existing coverage universe. */
  tickers?: string[];
  /** Theme-defining names that must be included when they exist in the universe. */
  requiredTickers?: string[];
  researchOnly?: boolean;
  minMarketCap?: number;
  maxMarketCap?: number;
  minRevenueGrowth?: number;
  minRoe?: number;
  minRoce?: number;
  minFcfMargin?: number;
  maxPe?: number;
  maxEvEbitda?: number;
  minDividendYield?: number;
  maxNetDebtEbitda?: number;
  minReturn1y?: number;
  minPriceVs50dma?: number;
  minPriceVs200dma?: number;
  minComposite?: number;
  minCoverage?: number;
  /** 20-day average volume divided by 60-day average volume. */
  minRelativeVolume?: number;
  /** Distance from the 52-week closing high; 0 is at the high, -0.05 is 5% below. */
  maxDistFrom52wHigh?: number;
  minRoicTrend?: number;
};

export type PortfolioSpec = {
  slug: string;
  name: string;
  primaryCategory: PortfolioPrimaryCategory;
  strategyType: PortfolioStrategyType;
  tags: string[];
  description: string;
  thesis: string;
  focus: string;
  risks: string;
  holdings: number;
  weights: {
    growth: number;
    quality: number;
    valuation: number;
    technical: number;
  };
  filters: PortfolioFilters;
  benchmark: string;
  minimumInvestment: number;
  rebalanceFrequency: RebalanceFrequency;
  weighting: WeightingMethod;
  /** Maximum single-stock weight, in percent. */
  concentration: number;
  /** Maximum sector weight, in percent. */
  maxSectorWeight: number;
  marketCapFocus: MarketCapFocus;
  popularity: number;
};

export type PortfolioScoreBundle = {
  growth: number | null;
  quality: number | null;
  valuation: number | null;
  technical: number | null;
  composite: number | null;
  coverage: number | null;
};

export type PortfolioConstituent = {
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  marketCap: number | null;
  price: number;
  weight: number;
  return1y: number | null;
  scores: PortfolioScoreBundle;
  research: boolean;
  rationale: string;
};

export type PortfolioSeriesPoint = {
  date: string;
  portfolio: number;
  benchmark: number;
};

export type PortfolioPeriodMetrics = {
  period: string;
  portfolioReturn: number | null;
  benchmarkReturn: number | null;
  excessReturn: number | null;
  annualisedReturn: number | null;
  volatility: number | null;
  maxDrawdown: number | null;
  sharpe: number | null;
};

export type PortfolioBenchmarkSeries = {
  id: string;
  name: string;
  series: PortfolioSeriesPoint[];
  metrics: PortfolioPeriodMetrics[];
};

export type PortfolioPerformance = {
  available: boolean;
  basis: string;
  source: string;
  inception: string | null;
  asOf: string | null;
  periods: string[];
  series: PortfolioSeriesPoint[];
  metrics: PortfolioPeriodMetrics[];
  benchmarks: PortfolioBenchmarkSeries[];
  volatility: number | null;
  volatilityLevel: VolatilityLevel;
};

export type PortfolioAllocation = {
  label: string;
  weight: number;
  count: number;
};

export type PortfolioRebalanceEvent = {
  date: string;
  title: string;
  summary: string;
};

export type PortfolioReviewChange = {
  action: "Add" | "Remove" | "Increase" | "Reduce";
  ticker: string;
  name: string;
  currentWeight: number | null;
  proposedWeight: number | null;
  reasons: string[];
};

export type PortfolioReview = {
  asOf: string;
  status: "proposed" | "none";
  note: string;
  changes: PortfolioReviewChange[];
};

export type PortfolioReportSection = {
  title: string;
  paragraphs: string[];
};

export type PortfolioReport = {
  headline: string;
  dek: string;
  sections: PortfolioReportSection[];
  constituentNotes: Array<{ ticker: string; note: string }>;
};

export type PortfolioSummary = {
  slug: string;
  name: string;
  description: string;
  primaryCategory: PortfolioPrimaryCategory;
  strategyType: PortfolioStrategyType;
  tags: string[];
  marketCapFocus: MarketCapFocus;
  minimumInvestment: number;
  rebalanceFrequency: RebalanceFrequency;
  holdingsCount: number;
  volatility: VolatilityLevel;
  volatilityValue: number | null;
  return1y: number | null;
  return1m: number | null;
  return6m: number | null;
  benchmark: { id: string; name: string };
  performanceBasis: string;
  performanceAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  popularity: number;
};

export type PortfolioDetail = PortfolioSummary & {
  thesis: string;
  focus: string;
  risks: string;
  /** Intended holding horizon for the strategy, not a recommendation. */
  horizon: string;
  methodology: {
    version: string;
    summary: string;
    paragraphs: string[];
    scoreWeights: PortfolioSpec["weights"];
    selectionCriteria: string[];
    weighting: string;
    constraints: string[];
  };
  rationale: {
    opportunity: string[];
    whyTheseCompanies: string[];
    risks: string[];
    invalidation: string[];
  };
  constituents: PortfolioConstituent[];
  allocations: {
    sectors: PortfolioAllocation[];
    marketCap: PortfolioAllocation[];
    top10Weight: number;
  };
  performance: PortfolioPerformance;
  benchmarkOptions: Array<{ id: string; name: string }>;
  rebalance: {
    frequency: RebalanceFrequency;
    lastRebalanced: string;
    nextRebalance: string;
    events: PortfolioRebalanceEvent[];
  };
  review: PortfolioReview;
  report: PortfolioReport;
};

export type PortfolioIndex = {
  generatedAt: string;
  methodologyVersion: string;
  universeSize: number;
  researchUniverseSize: number;
  portfolios: PortfolioSummary[];
};
