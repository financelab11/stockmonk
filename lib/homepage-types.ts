import type { ChartPoint } from "./analytics";

export type HomeCompany = {
  ticker: string;
  name: string;
  sector: string;
  group: string;
  research: boolean;
  href: string;
  price: number | null;
  marketCap: number | null;
  asOf: string | null;
  return1d: number | null;
  return1y: number | null;
  revenueGrowth: number | null;
  operatingMargin: number | null;
  fcfMargin: number | null;
  pe: number | null;
  evEbitda: number | null;
  composite: number | null;
  growth: number | null;
  quality: number | null;
  valuation: number | null;
  technical: number | null;
  coverage: number | null;
};

export type HomeStats = {
  companies: number;
  reports: number;
  portfolios: number;
  asOf: string | null;
  scoreAsOf: string | null;
  weights: {
    growth: number;
    quality: number;
    valuation: number;
    technical: number;
  };
};

export type HomeHeroCompany = HomeCompany & {
  sparkPath: string;
  sparkFirst: number | null;
  sparkLast: number | null;
};

export type HomeIntelligenceTab = {
  id: "composite" | "momentum" | "quality" | "valuation";
  label: string;
  description: string;
  defaultSort: "composite" | "growth" | "quality" | "valuation" | "technical";
  rows: HomeCompany[];
  exploreHref: string;
};

export type HomeTheme = {
  id: string;
  title: string;
  thesis: string;
  count: number;
  medianComposite: number | null;
  medianReturn1y: number | null;
  href: string;
  featured: HomeCompany[];
  linkLabel: string;
  basis: string;
};

export type HomeQuickScreen = {
  id: string;
  title: string;
  description: string;
  criteria: string;
  count: number;
  href: string;
  featured: HomeCompany[];
};

export type HomeFeaturedResearch = {
  company: HomeCompany;
  title: string;
  dek: string;
  chartPoints: ChartPoint[];
  chartTitle: string;
  chartDescription: string;
  scoreRecord: {
    growth: number | null;
    quality: number | null;
    valuation: number | null;
    technical: number | null;
    composite: number | null;
    coverage: number | null;
    classification: string;
  };
  metrics: Array<{
    label: string;
    value: number | null;
    kind: "percent" | "multiple" | "currency";
  }>;
};

export type HomeCompanyIndexEntry = {
  ticker: string;
  name: string;
  sector: string;
  href: string;
};
