import type { PortfolioSummary } from "./portfolios/types";

export const HOME_PORTFOLIO_FILTERS = [
  "All",
  "Quantitative",
  "Growth",
  "Momentum",
  "Quality",
  "Value",
  "AI & Technology",
  "Healthcare",
  "Energy",
  "Multi-Factor",
] as const;

export type HomePortfolioFilter = (typeof HOME_PORTFOLIO_FILTERS)[number];

export function matchesHomePortfolioFilter(
  portfolio: PortfolioSummary,
  filter: HomePortfolioFilter,
): boolean {
  if (filter === "All") return true;
  const text =
    `${portfolio.name} ${portfolio.description} ${portfolio.primaryCategory} ${portfolio.strategyType} ${portfolio.tags.join(" ")}`.toLowerCase();
  switch (filter) {
    case "Quantitative":
      return (
        portfolio.primaryCategory === "Quantitative" ||
        portfolio.strategyType === "Quantitative"
      );
    case "Growth":
      return /growth/.test(text);
    case "Momentum":
      return /momentum|technical|trend/.test(text);
    case "Quality":
      return /quality|dividend|defensive/.test(text);
    case "Value":
      return /value/.test(text);
    case "AI & Technology":
      return /ai|artificial|technology|cloud|cyber|semiconductor|software|data/.test(
        text,
      );
    case "Healthcare":
      return /health|biotech|genomic|pharma|medical/.test(text);
    case "Energy":
      return /energy|nuclear|clean|utility|power/.test(text);
    case "Multi-Factor":
      return /multi-factor|multi factor/.test(text);
    default:
      return true;
  }
}
