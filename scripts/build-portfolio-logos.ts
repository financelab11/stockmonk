/**
 * Generates one deterministic, name-relevant logo per model portfolio.
 *
 * Run after `pnpm build:portfolios` when specs or names change:
 *   pnpm build:portfolio-logos
 *
 * The logos are static SVGs in public/portfolio-logos and are committed so
 * Vercel does not need to regenerate them.
 */
import fs from "node:fs";
import path from "node:path";
import { createElement, type ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as Lucide from "lucide-react";
import index from "../public/data/portfolios/index.json";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
};

type PortfolioSummary = {
  slug: string;
  name: string;
  primaryCategory: string;
  strategyType: string;
  tags: string[];
};

const ICONS = Lucide as unknown as Record<
  string,
  ComponentType<IconProps>
>;

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "portfolio-logos");

const PALETTES: Array<[string, string]> = [
  ["#2456d8", "#12122b"],
  ["#0d6b4d", "#0e7490"],
  ["#ff7a45", "#b21f4a"],
  ["#8b3dff", "#2456d8"],
  ["#0e7490", "#1b1464"],
  ["#b45309", "#7c2d12"],
  ["#1b1464", "#0d6b4d"],
  ["#343a52", "#12122b"],
  ["#c62f3e", "#6b1020"],
  ["#0b6b53", "#1b1464"],
  ["#7c3aed", "#0e7490"],
  ["#e85d2a", "#7c2d12"],
];

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0;
  }
  return result;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const CATEGORY_PALETTE: Record<string, number[]> = {
  Quantitative: [0, 3, 4],
  Thematic: [2, 3, 4],
  Sector: [0, 4, 7],
  Fundamental: [1, 9, 6],
  Technical: [0, 4, 3],
  "Single-Factor": [5, 8, 11],
  "Multi-Factor": [3, 0, 4],
  Growth: [2, 3, 0],
  Value: [1, 9, 6],
  "Quality & Dividend": [6, 1, 4],
  Defensive: [7, 6, 4],
  "Small & Mid Cap": [9, 5, 1],
};

function iconFor(portfolio: PortfolioSummary): string {
  const name = portfolio.name.toLowerCase();
  const context = `${portfolio.strategyType} ${portfolio.tags.join(" ")}`.toLowerCase();

  if (/cyber/.test(name)) return "ShieldCheck";
  if (/data cent|data-cent/.test(name)) return "Server";
  if (/semiconductor equipment/.test(name)) return "CircuitBoard";
  if (/semiconductor|chip/.test(name)) return "Cpu";
  if (/\bai\b|artificial intelligence/.test(name)) return "Cpu";
  if (/cloud|software|saas/.test(name)) return "Cloud";
  if (/payment|fintech/.test(name)) return "CreditCard";
  if (/space|satellite/.test(name)) return "Satellite";
  if (/defence|defense/.test(name)) return "ShieldCheck";
  if (/aerospace/.test(name)) return "Plane";
  if (/nuclear|uranium/.test(name)) return "Atom";
  if (/clean energy|solar|renewable/.test(name)) return "Leaf";
  if (/genomic/.test(name)) return "Dna";
  if (/longevity|biotech|healthcare|medical/.test(name)) return "HeartPulse";
  if (/robotics|automation/.test(name)) return "Bot";
  if (/mobility|auto|vehicle/.test(name)) return "Car";
  if (/insurance/.test(name)) return "Umbrella";
  if (/bank/.test(name)) return "Landmark";
  if (/dividend|income/.test(name)) return "Coins";
  if (/free cash flow|cash generator|cash generation/.test(name))
    return "Banknote";
  if (/capital allocation/.test(name)) return "PieChart";
  if (/balance sheet/.test(name)) return "Scale";
  if (/margin expansion/.test(name)) return "TrendingUp";
  if (/high roe|high roic|earnings yield|\broe\b|\broic\b/.test(name))
    return "Percent";
  if (/defensive|low volatility|recession|all-weather/.test(name))
    return "Shield";
  if (/quality/.test(name)) return "BadgeCheck";
  if (/value/.test(name)) return "Scale";
  if (/growth/.test(name)) return "Rocket";
  if (/relative volume/.test(name)) return "BarChart3";
  if (/momentum|technical|trend|breakout|relative strength/.test(name))
    return "Gauge";
  if (/rotation/.test(name)) return "RefreshCw";
  if (/small|mid cap|smid/.test(name)) return "Sprout";
  if (/quant|systematic|alpha|efficiency|adaptive|multi-variable|statistical|balanced factor|network/.test(name))
    return "Sigma";
  if (/technology|tech/.test(name)) return "Cpu";
  if (/financial/.test(name)) return "Landmark";
  if (/communication/.test(name)) return "Wifi";
  if (/utilities|power/.test(name)) return "Zap";
  if (/materials|mining/.test(name)) return "Pickaxe";
  if (/energy|oil|gas/.test(name)) return "Fuel";
  if (/consumer|retail|staples/.test(name)) return "ShoppingBag";
  if (/infrastructure|industrial|manufactur/.test(name)) return "Factory";

  if (/cyber|security/.test(context)) return "ShieldCheck";
  if (/dividend|income/.test(context)) return "Coins";
  if (/quality/.test(context)) return "BadgeCheck";
  if (/value/.test(context)) return "Scale";
  if (/momentum|technical/.test(context)) return "Gauge";
  if (/defensive|low volatility/.test(context)) return "Shield";
  if (/small|mid cap/.test(context)) return "Sprout";
  return "Layers";
}

function monogram(name: string): string {
  const lower = name.toLowerCase();
  if (/bank/.test(lower)) return "BNK";
  if (/insurance/.test(lower)) return "INS";
  if (/dividend/.test(lower)) return "DIV";
  if (/cyber/.test(lower)) return "SEC";
  if (/^ai\b/.test(lower)) return "AI";
  if (/semiconductor/.test(lower)) return "SEM";
  if (/space|satellite/.test(lower)) return "SPC";
  if (/nuclear|uranium/.test(lower)) return "NUK";
  if (/genomic/.test(lower)) return "DNA";
  if (/robotics/.test(lower)) return "BOT";
  if (/fintech|payment/.test(lower)) return "FIN";
  if (/cloud/.test(lower)) return "CLD";
  if (/software|saas/.test(lower)) return "SFT";

  const cleaned = name
    .replace(/[^A-Za-z0-9 +&]/g, " ")
    .replace(/\b(and|the|of|for|to|vs|us)\b/gi, " ");
  const words = cleaned
    .split(/[\s+&]+/)
    .map((word) => word.trim())
    .filter(Boolean)
    .filter((word) => /[A-Za-z]/.test(word));
  if (!words.length) return "SM";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function logo(portfolio: PortfolioSummary): string {
  const seed = hash(portfolio.slug);
  const categoryPalettes = CATEGORY_PALETTE[portfolio.primaryCategory] ?? [
    0, 4, 7,
  ];
  const palette = PALETTES[categoryPalettes[seed % categoryPalettes.length]];
  const iconName = iconFor(portfolio);
  const Icon = ICONS[iconName] ?? ICONS.Layers;
  const iconMarkup = renderToStaticMarkup(
    createElement(Icon, {
      size: 60,
      strokeWidth: 1.55,
      color: "#ffffff",
    }),
  );
  const code = escapeXml(monogram(portfolio.name));
  const title = escapeXml(portfolio.name);
  const id = portfolio.slug.replace(/[^a-z0-9]/g, "");
  const x1 = 12 + (seed % 24);
  const y1 = 10 + ((seed >> 3) % 22);
  const x2 = 84 + ((seed >> 5) % 20);
  const y2 = 78 + ((seed >> 7) % 26);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" role="img">
  <title>${title}</title>
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${palette[0]}"/>
      <stop offset="100%" stop-color="${palette[1]}"/>
    </linearGradient>
    <linearGradient id="sheen-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bg-${id})"/>
  <circle cx="${x1}" cy="${y1}" r="34" fill="#ffffff" opacity="0.06"/>
  <circle cx="${x2}" cy="${y2}" r="46" fill="#ffffff" opacity="0.05"/>
  <circle cx="${x2 - 6}" cy="${y1 + 24}" r="2.2" fill="#ffffff" opacity="0.55"/>
  <circle cx="${x1 + 10}" cy="${y2 - 8}" r="1.7" fill="#ffffff" opacity="0.4"/>
  <rect x="0" y="0" width="128" height="128" rx="28" fill="url(#sheen-${id})"/>
  <g transform="translate(34 25)">
    ${iconMarkup}
  </g>
  <text x="64" y="108" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2.2" fill="#ffffff" fill-opacity="0.9">${code}</text>
</svg>
`;
}

const summaries = (index as { portfolios: PortfolioSummary[] }).portfolios;
fs.mkdirSync(OUT, { recursive: true });
for (const summary of summaries) {
  fs.writeFileSync(
    path.join(OUT, `${summary.slug}.svg`),
    logo(summary),
    "utf8",
  );
}
fs.writeFileSync(
  path.join(OUT, "default.svg"),
  logo({
    slug: "stockmonk-portfolio",
    name: "Stockmonk Portfolio",
    primaryCategory: "Fundamental",
    strategyType: "Quantitative",
    tags: ["Quantitative"],
  }),
  "utf8",
);
console.log(
  `[portfolio-logos] wrote ${summaries.length + 1} SVGs to public/portfolio-logos`,
);
