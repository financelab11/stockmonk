export const SITE = {
  name: "Stockmonk",
  legalName: "Stockmonk Research",
  tagline: "Independent equity research for learners.",
  description:
    "Equity research built from SEC, NSE and BSE filings: business breakdowns, sourced fundamentals and third-party analyst estimates for US and Indian companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stockmonk.app",
  email: "hello@stockmonk.app",
  twitter: "@stockmonk",
} as const;

export const DISCLAIMER =
  "For informational and educational purposes only. Not investment advice. Stockmonk is not a registered investment adviser and does not provide buy, sell or hold recommendations.";

export const DISCLAIMER_SHORT =
  "Informational and educational only. Not investment advice.";

export const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/screener", label: "Screener" },
  { href: "/newsfeed", label: "Newsfeed" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Research",
    links: [
      { href: "/discover", label: "Discover" },
      { href: "/discover/all-stocks", label: "All stocks" },
      { href: "/screener", label: "US screener" },
      { href: "/tools/growth-ranker", label: "Forward growth ranker" },
      { href: "/india", label: "India Stocks" },
      { href: "/india/all-stocks", label: "All India stocks" },
      { href: "/gcc", label: "GCC Stocks" },
      { href: "/gcc/all-stocks", label: "All GCC stocks" },
      { href: "/newsfeed", label: "Newsfeed" },
      { href: "/framework", label: "Framework" },
      { href: "/watchlist", label: "Watchlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/editorial-guidelines", label: "Editorial guidelines" },
      { href: "/data-sources", label: "Data sources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/offline", label: "Offline" },
    ],
  },
] as const;

export const PRICE_RANGES = ["1M", "3M", "6M", "YTD", "1Y", "5Y", "MAX"] as const;
export type PriceRange = (typeof PRICE_RANGES)[number];

export const RANGE_LABELS: Record<PriceRange, string> = {
  "1M": "1M",
  "3M": "3M",
  "6M": "6M",
  YTD: "YTD",
  "1Y": "1Y",
  "5Y": "5Y",
  MAX: "MAX",
};

export const SORT_OPTIONS = [
  { value: "marketCap", label: "Market cap" },
  { value: "revenue", label: "Revenue" },
  { value: "growth", label: "Revenue growth" },
  { value: "margin", label: "Operating margin" },
  { value: "return1y", label: "1-year return" },
  { value: "name", label: "Name" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];

export const ARTICLE_SECTIONS = [
  { id: "big-picture", number: "01", title: "The big picture" },
  { id: "what-it-does", number: "02", title: "What the company does" },
  { id: "how-it-makes-money", number: "03", title: "How it makes money" },
  { id: "growth-drivers", number: "04", title: "Growth drivers" },
  { id: "financial-performance", number: "05", title: "Financial performance" },
  { id: "cash-and-balance-sheet", number: "06", title: "Cash flow and balance sheet" },
  { id: "valuation", number: "07", title: "Valuation" },
  { id: "analysts", number: "08", title: "What analysts expect" },
  { id: "risks", number: "09", title: "Risks and what to watch" },
  { id: "bottom-line", number: "10", title: "Key takeaways and what to monitor" },
] as const;

export type ArticleSectionId = (typeof ARTICLE_SECTIONS)[number]["id"];
