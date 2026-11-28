import "server-only";

import { annualRevenueSeries, sparklinePoints } from "./analytics";
import { getResearchBundle, getPrices } from "./data";
import { getV2Score, getV2Scores } from "./scores-v2-data";
import { getPortfolio, getPortfolioIndex } from "./portfolios/data";
import {
  HOME_PORTFOLIO_FILTERS,
  matchesHomePortfolioFilter,
} from "./home-portfolio-filters";
import { getScreenerRows, getScreenerSummary } from "./screener-data";
import type { PortfolioSummary } from "./portfolios/types";
import type { ScreenerRow } from "./screener-model";
import { getStockStory } from "@/content/stocks";
import type {
  HomeCompany,
  HomeCompanyIndexEntry,
  HomeFeaturedResearch,
  HomeHeroCompany,
  HomeIntelligenceTab,
  HomeQuickScreen,
  HomeStats,
  HomeTheme,
} from "./homepage-types";

const DEFAULT_WEIGHTS = {
  growth: 0.25,
  quality: 0.35,
  valuation: 0.25,
  technical: 0.15,
};

function finite(value: number | null | undefined): value is number {
  return value != null && Number.isFinite(value);
}

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)] ?? null;
}

function hrefFor(row: ScreenerRow): string {
  return row.research
    ? `/stocks/${row.ticker}`
    : `/stocks/${row.ticker}/scores`;
}

function toCompany(row: ScreenerRow): HomeCompany {
  return {
    ticker: row.ticker,
    name: row.name,
    sector: row.sector,
    group: row.group,
    research: row.research,
    href: hrefFor(row),
    price: row.price,
    marketCap: row.marketCap,
    asOf: row.asOf,
    return1d: row.return1d,
    return1y: row.return1y,
    revenueGrowth: row.revenueGrowth,
    operatingMargin: row.operatingMargin,
    fcfMargin: row.fcfMargin,
    pe: row.pe,
    evEbitda: row.evEbitda,
    composite: row.v2Composite,
    growth: row.v2Growth,
    quality: row.v2Quality,
    valuation: row.v2Valuation,
    technical: row.v2Technical,
    coverage: row.v2Coverage,
  };
}

function sortBy(
  rows: ScreenerRow[],
  key: "v2Composite" | "v2Technical" | "v2Quality" | "v2Valuation" | "v2Growth",
): ScreenerRow[] {
  return [...rows].sort(
    (a, b) =>
      (finite(b[key]) ? (b[key] as number) : -Infinity) -
      (finite(a[key]) ? (a[key] as number) : -Infinity),
  );
}

export function getHomepageStatistics(): HomeStats {
  const rows = getScreenerRows();
  const summary = getScreenerSummary();
  const index = getPortfolioIndex();
  const scores = getV2Scores();
  return {
    companies: rows.length,
    reports: rows.filter((row) => row.research).length,
    portfolios: index.portfolios.length,
    asOf: summary.asOf,
    scoreAsOf: scores?.generatedAt.slice(0, 10) ?? null,
    weights: scores?.weights ?? DEFAULT_WEIGHTS,
  };
}

export function getHeroCompanies(): HomeHeroCompany[] {
  const rows = getScreenerRows();
  const eligible = rows.filter(
    (row) => !row.archived && row.research && finite(row.v2Composite),
  );
  const preferred = ["NVDA", "MSFT", "LLY"]
    .map((ticker) => eligible.find((row) => row.ticker === ticker))
    .filter((row): row is ScreenerRow => Boolean(row));
  const picks = [...preferred];
  for (const row of sortBy(eligible, "v2Composite")) {
    if (picks.length >= 3) break;
    if (!picks.some((item) => item.ticker === row.ticker)) picks.push(row);
  }

  return picks.slice(0, 3).map((row) => {
    const prices = getPrices(row.ticker, "1Y").slice(-90);
    return {
      ...toCompany(row),
      sparkPath: sparklinePoints(prices, 280, 64),
      sparkFirst: prices[0]?.c ?? null,
      sparkLast: prices[prices.length - 1]?.c ?? null,
    };
  });
}

export function getIntelligenceTabs(): HomeIntelligenceTab[] {
  const rows = getScreenerRows();
  const eligible = rows.filter(
    (row) => !row.archived && finite(row.v2Composite),
  );
  const tabs: Array<
    Omit<HomeIntelligenceTab, "rows"> & {
      key: "v2Composite" | "v2Technical" | "v2Quality" | "v2Valuation";
    }
  > = [
    {
      id: "composite",
      label: "Top composite scores",
      description:
        "The highest combined Growth, Quality, Valuation and Technical scores in the coverage universe.",
      defaultSort: "composite",
      key: "v2Composite",
      exploreHref: "/screener?sort=v2Composite&dir=desc",
    },
    {
      id: "momentum",
      label: "Momentum leaders",
      description:
        "Companies with the strongest price trend, relative strength and technical structure.",
      defaultSort: "technical",
      key: "v2Technical",
      exploreHref: "/screener?view=momentum&sort=v2Technical&dir=desc",
    },
    {
      id: "quality",
      label: "Quality compounders",
      description:
        "Businesses scoring highest on returns, margins, cash conversion and balance-sheet resilience.",
      defaultSort: "quality",
      key: "v2Quality",
      exploreHref: "/screener?view=quality&sort=v2Quality&dir=desc",
    },
    {
      id: "valuation",
      label: "Valuation opportunities",
      description:
        "Companies with the strongest valuation score relative to their own history and peers.",
      defaultSort: "valuation",
      key: "v2Valuation",
      exploreHref: "/screener?view=valuation&sort=v2Valuation&dir=desc",
    },
  ];

  return tabs.map(({ key, ...tab }) => ({
    ...tab,
    rows: sortBy(eligible, key).slice(0, 7).map(toCompany),
  }));
}

type ThemeDefinition = {
  id: string;
  title: string;
  thesis: string;
  href: string;
  linkLabel: string;
  basis: string;
  predicate?: (row: ScreenerRow) => boolean;
  portfolioSlug?: string;
};

function medianMetric(rows: ScreenerRow[]) {
  return {
    medianComposite: median(rows.map((row) => row.v2Composite).filter(finite)),
    medianReturn1y: median(rows.map((row) => row.return1y).filter(finite)),
  };
}

export function getFeaturedThemes(): HomeTheme[] {
  const rows = getScreenerRows();
  const definitions: ThemeDefinition[] = [
    {
      id: "ai-infrastructure",
      title: "AI infrastructure",
      thesis:
        "Compute, networking, power and data-centre businesses supplying the build-out of artificial intelligence.",
      href: "/screener?group=AI%20Infrastructure%20%26%20Power&sort=v2Composite&dir=desc",
      linkLabel: "Explore screen",
      basis: "Screener coverage group",
      predicate: (row) => row.group === "AI Infrastructure & Power",
    },
    {
      id: "semiconductors",
      title: "Semiconductor leaders",
      thesis:
        "Chip designers, foundries and equipment makers with the scale to benefit from rising compute intensity.",
      href: "/screener?q=semiconductor&sort=v2Composite&dir=desc",
      linkLabel: "Explore screen",
      basis: "Name and coverage group",
      predicate: (row) =>
        /semiconductor/i.test(row.name) ||
        row.group === "Semiconductors & Hardware",
    },
    {
      id: "quality-compounders",
      title: "Quality compounders",
      thesis:
        "High-return businesses with durable margins and cash conversion, filtered for a strong composite score.",
      href: "/screener?v2QualityMin=70&v2CompositeMin=60&sort=v2Composite&dir=desc",
      linkLabel: "Explore screen",
      basis: "Quality 70+ and composite 60+",
      predicate: (row) =>
        (row.v2Quality ?? -Infinity) >= 70 &&
        (row.v2Composite ?? -Infinity) >= 60,
    },
    {
      id: "high-growth",
      title: "High-growth businesses",
      thesis:
        "Companies in the top growth band on revenue, earnings and forward estimate momentum.",
      href: "/screener?v2GrowthMin=70&sort=v2Growth&dir=desc",
      linkLabel: "Explore screen",
      basis: "Growth score 70+",
      predicate: (row) => (row.v2Growth ?? -Infinity) >= 70,
    },
    {
      id: "momentum",
      title: "Momentum leaders",
      thesis:
        "Strong relative strength and improving technical structure, without treating momentum as a recommendation.",
      href: "/screener?v2TechnicalMin=70&sort=v2Technical&dir=desc",
      linkLabel: "Explore screen",
      basis: "Technical score 70+",
      predicate: (row) => (row.v2Technical ?? -Infinity) >= 70,
    },
    {
      id: "healthcare",
      title: "Healthcare innovators",
      thesis:
        "Pharmaceutical, device and healthcare-service businesses with quality support and scalable end markets.",
      href: "/screener?group=Healthcare&sort=v2Quality&dir=desc",
      linkLabel: "Explore screen",
      basis: "Healthcare coverage group",
      predicate: (row) => row.group === "Healthcare",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      thesis:
        "Software and infrastructure companies protecting identity, endpoints, networks and cloud workloads.",
      href: "/portfolio/cybersecurity-leaders",
      linkLabel: "Explore theme portfolio",
      basis: "Thematic model portfolio",
      portfolioSlug: "cybersecurity-leaders",
    },
    {
      id: "energy-transition",
      title: "Energy transition",
      thesis:
        "Clean generation, storage, grid and efficiency businesses tied to the changing power mix.",
      href: "/portfolio/clean-energy-transition",
      linkLabel: "Explore theme portfolio",
      basis: "Thematic model portfolio",
      portfolioSlug: "clean-energy-transition",
    },
    {
      id: "cash-flow",
      title: "Cash flow champions",
      thesis:
        "Businesses converting a meaningful share of revenue into free cash flow, with the balance sheet to sustain it.",
      href: "/screener?fcfMarginMin=0.15&sort=v2Composite&dir=desc",
      linkLabel: "Explore screen",
      basis: "Free-cash-flow margin 15%+",
      predicate: (row) => (row.fcfMargin ?? -Infinity) >= 0.15,
    },
    {
      id: "small-mid",
      title: "Small and mid-cap opportunities",
      thesis:
        "Smaller US-listed companies with a strong composite score and a market capitalisation below $10B.",
      href: "/screener?marketCapBMin=0.3&marketCapBMax=10&v2CompositeMin=55&sort=v2Composite&dir=desc",
      linkLabel: "Explore screen",
      basis: "$0.3B–$10B market cap",
      predicate: (row) =>
        finite(row.marketCap) &&
        row.marketCap >= 300_000_000 &&
        row.marketCap <= 10_000_000_000 &&
        (row.v2Composite ?? -Infinity) >= 55,
    },
  ];

  const byTicker = new Map(rows.map((row) => [row.ticker, row]));

  return definitions.map((definition) => {
    const portfolio = definition.portfolioSlug
      ? getPortfolio(definition.portfolioSlug)
      : null;
    const matched = portfolio
      ? portfolio.constituents
          .map((constituent) => byTicker.get(constituent.ticker))
          .filter((row): row is ScreenerRow => Boolean(row))
      : rows.filter((row) => definition.predicate?.(row));
    const metrics = medianMetric(matched);
    const featured = sortBy(
      matched.filter((row) => finite(row.v2Composite)),
      "v2Composite",
    )
      .slice(0, 3)
      .map(toCompany);

    return {
      id: definition.id,
      title: definition.title,
      thesis: definition.thesis,
      count: matched.length,
      medianComposite: metrics.medianComposite,
      medianReturn1y: metrics.medianReturn1y,
      href: definition.href,
      linkLabel: definition.linkLabel,
      basis: definition.basis,
      featured,
    };
  });
}

export function getFeaturedPortfolios(): PortfolioSummary[] {
  const all = getPortfolioIndex().portfolios;
  const selected = new Map<string, PortfolioSummary>();
  for (const filter of HOME_PORTFOLIO_FILTERS) {
    all
      .filter((portfolio) => matchesHomePortfolioFilter(portfolio, filter))
      .sort((a, b) => a.popularity - b.popularity)
      .slice(0, 6)
      .forEach((portfolio) => selected.set(portfolio.slug, portfolio));
  }
  return [...selected.values()].sort((a, b) => a.popularity - b.popularity);
}

export function getFeaturedResearch(): HomeFeaturedResearch | null {
  const rows = getScreenerRows();
  const eligible = rows.filter(
    (row) => row.research && !row.archived && finite(row.v2Composite),
  );
  const candidates = sortBy(eligible, "v2Composite").slice(0, 8);
  for (const row of candidates) {
    const bundle = getResearchBundle(row.ticker);
    if (!bundle) continue;
    const story = getStockStory(row.ticker);
    const score = getV2Score(row.ticker);
    const data = bundle.data;
    return {
      company: toCompany(row),
      title: story?.title ?? `${data.name}: business and financial research`,
      dek:
        story?.dek ??
        data.description ??
        `A structured review of ${data.name}'s financial statements and market position.`,
      chartPoints: annualRevenueSeries(data, 6),
      chartTitle: "Revenue and operating margin",
      chartDescription:
        "Annual revenue and operating margin. Hover or use the accessible table for exact values.",
      scoreRecord: {
        growth: row.v2Growth,
        quality: row.v2Quality,
        valuation: row.v2Valuation,
        technical: row.v2Technical,
        composite: row.v2Composite,
        coverage: row.v2Coverage,
        classification: score?.composite.classification ?? "Quantitative score",
      },
      metrics: [
        {
          label: "Revenue growth",
          value: data.metrics.revenueGrowthTtm,
          kind: "percent",
        },
        {
          label: "EPS growth",
          value: data.metrics.epsGrowthTtm,
          kind: "percent",
        },
        {
          label: "Operating margin",
          value: data.metrics.operatingMargin,
          kind: "percent",
        },
        {
          label: "FCF margin",
          value: data.metrics.fcfMargin,
          kind: "percent",
        },
        { label: "P/E", value: data.metrics.pe, kind: "multiple" },
        { label: "EV/EBITDA", value: data.metrics.evEbitda, kind: "multiple" },
      ],
    };
  }
  return null;
}

export function getQuickScreens(): HomeQuickScreen[] {
  const rows = getScreenerRows();
  const definitions: Array<{
    id: string;
    title: string;
    description: string;
    criteria: string;
    href: string;
    predicate: (row: ScreenerRow) => boolean;
    sort:
      "v2Composite" | "v2Growth" | "v2Quality" | "v2Valuation" | "v2Technical";
  }> = [
    {
      id: "growth",
      title: "High-growth companies",
      description: "Top growth scores across revenue, earnings and estimates.",
      criteria: "Growth score 70+",
      href: "/screener?v2GrowthMin=70&sort=v2Growth&dir=desc",
      predicate: (row) => (row.v2Growth ?? -Infinity) >= 70,
      sort: "v2Growth",
    },
    {
      id: "quality",
      title: "High-quality businesses",
      description: "Returns, margins and cash conversion in the top band.",
      criteria: "Quality score 70+",
      href: "/screener?v2QualityMin=70&sort=v2Quality&dir=desc",
      predicate: (row) => (row.v2Quality ?? -Infinity) >= 70,
      sort: "v2Quality",
    },
    {
      id: "valuation",
      title: "Attractive valuations",
      description: "Strong valuation scores versus own history and peers.",
      criteria: "Valuation score 70+",
      href: "/screener?v2ValuationMin=70&sort=v2Valuation&dir=desc",
      predicate: (row) => (row.v2Valuation ?? -Infinity) >= 70,
      sort: "v2Valuation",
    },
    {
      id: "momentum",
      title: "Strong momentum",
      description:
        "Improving trend, relative strength and technical structure.",
      criteria: "Technical score 70+",
      href: "/screener?v2TechnicalMin=70&sort=v2Technical&dir=desc",
      predicate: (row) => (row.v2Technical ?? -Infinity) >= 70,
      sort: "v2Technical",
    },
    {
      id: "composite",
      title: "Highest composite scores",
      description: "The most balanced four-factor scores in the universe.",
      criteria: "Composite score 80+",
      href: "/screener?v2CompositeMin=80&sort=v2Composite&dir=desc",
      predicate: (row) => (row.v2Composite ?? -Infinity) >= 80,
      sort: "v2Composite",
    },
    {
      id: "ai-infrastructure",
      title: "AI infrastructure leaders",
      description:
        "Compute, power and data-centre businesses in the AI build-out.",
      criteria: "AI Infrastructure & Power",
      href: "/screener?group=AI%20Infrastructure%20%26%20Power&sort=v2Composite&dir=desc",
      predicate: (row) => row.group === "AI Infrastructure & Power",
      sort: "v2Composite",
    },
  ];

  return definitions.map((definition) => {
    const matched = rows.filter(definition.predicate);
    return {
      id: definition.id,
      title: definition.title,
      description: definition.description,
      criteria: definition.criteria,
      count: matched.length,
      href: definition.href,
      featured: sortBy(matched, definition.sort).slice(0, 3).map(toCompany),
    };
  });
}

export function getHomepageCompanyIndex(): HomeCompanyIndexEntry[] {
  return getScreenerRows()
    .filter((row) => row.research)
    .map((row) => ({
      ticker: row.ticker,
      name: row.name,
      sector: row.sector,
      href: `/stocks/${row.ticker}`,
    }));
}

export function getWorkspaceSuggestions(): HomeCompany[] {
  return sortBy(
    getScreenerRows().filter(
      (row) => row.research && !row.archived && finite(row.v2Composite),
    ),
    "v2Composite",
  )
    .slice(0, 3)
    .map(toCompany);
}
