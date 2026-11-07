import type { StockStory } from "./types";

export const LLY: StockStory = {
  ticker: "LLY",
  kicker: "Drug manufacturers · Cardiometabolic health",
  title: "Eli Lilly's obesity franchise is a once-in-a-generation growth engine",
  dek: "Cardiometabolic drugs are 74% of revenue and still growing fast. The questions are competition, manufacturing capacity and whether the valuation already assumes perfection.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $86.5B on a trailing basis, up 45.5% year over year.",
    "Cardiometabolic Health is 74.0% of annual revenue.",
    "Operating margin is 40.2% and return on invested capital is 32.4%.",
    "Net debt of $44.6B reflects manufacturing investment and acquisitions.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/59478/000005947826000013/lly-20251231.htm",
  irUrl: "https://investor.lilly.com/",
  bigPicture: {
    paragraphs: [
      "Eli Lilly is a pharmaceutical company whose growth is dominated by cardiometabolic drugs, including GLP-1 treatments for diabetes and obesity. Those products have created one of the strongest growth stories in large-cap healthcare.",
      "Trailing revenue reached $86.5B, up 45.5%, and the latest quarter grew 38.6%. Operating margin is 40.2% and return on invested capital is 32.4%, both strong for a company investing heavily in manufacturing capacity.",
      "At $1,354, Lilly trades at 46.2x trailing earnings and 35.7x EV/EBITDA. The multiple is high, but it is lower than it was when growth was more uncertain. The market is now debating durability and competition rather than whether the franchise exists.",
    ],
    quote:
      "Lilly's valuation is a referendum on the duration of the obesity market. The near-term numbers are strong; the long-term question is how much competition and pricing pressure arrive.",
  },
  whatItDoes: {
    paragraphs: [
      "Lilly discovers, develops, manufactures and sells human pharmaceuticals. The portfolio spans cardiometabolic health, oncology, immunology, neuroscience and other areas. The cardiometabolic franchise includes diabetes and obesity treatments.",
      "The segment mix is 74.0% cardiometabolic, 14.4% oncology, 8.1% immunology, 2.1% neuroscience and 1.4% other. That concentration is unusual for a large pharma company and explains both the growth and the risk.",
      "Lilly is investing billions in manufacturing capacity to meet demand for its obesity and diabetes drugs. That spending is necessary but weighs on free cash flow in the near term.",
    ],
    bullets: [
      {
        title: "Cardiometabolic Health",
        detail:
          "74.0% of revenue. Diabetes and obesity medicines, including the GLP-1 franchise.",
      },
      {
        title: "Oncology",
        detail:
          "14.4% of revenue. A diversified portfolio with several marketed products.",
      },
      {
        title: "Immunology and neuroscience",
        detail:
          "10.2% of revenue combined. Smaller but growing therapeutic areas.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Lilly earns revenue from patented medicines sold through wholesalers, pharmacies and healthcare providers. Pricing depends on the market, insurance coverage and competition. The US is 66.7% of revenue and non-US markets are 33.3%.",
      "The economics of a successful drug are attractive: development costs are sunk before launch, and manufacturing costs are low relative to the price. That is why operating margins can expand quickly when a product scales.",
      "The offset is policy risk. Drug pricing legislation, Medicare negotiation and international reference pricing can cap the price of successful products over time.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $22.3B in 2019 to $65.2B in 2025, a 19.6% compound annual growth rate, with acceleration in the last two years. The latest quarter grew 38.6% to $24.4B.",
      "The attributed consensus expects $91.8B of revenue this fiscal year, up 40.9%, and $106.2B next year, up 15.6%. EPS is expected to be $35.35 this year and $50.35 next year.",
      "The growth drivers are obesity and diabetes adoption, new indications, international expansion and manufacturing capacity. The risk is that competition and pricing pressure arrive before the capacity build is finished.",
    ],
    bullets: [
      {
        title: "Obesity and diabetes",
        detail:
          "The core franchise, with large unmet demand and expanding reimbursement.",
      },
      {
        title: "New indications",
        detail:
          "Cardiovascular, sleep apnea and other uses could broaden the addressable market.",
      },
      {
        title: "Manufacturing capacity",
        detail:
          "New plants are needed to meet demand; execution determines how much revenue can be supplied.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin is 40.2%, net margin 31.9% and return on invested capital 32.4%. The margin has expanded from 19.2% in 2023 as the cardiometabolic franchise scaled.",
      "The margin history shows the inflection: 23.6% in 2019, 21.7% in 2021, 19.2% in 2023, 39.5% in 2025 and 40.2% on a trailing basis. That is a remarkable operating leverage story.",
      "Diluted EPS was $22.95 in 2025. The consensus expects $35.35 this year and $50.35 next year. The trajectory is steep and depends on supply, pricing and competition.",
    ],
  },
  cash: {
    paragraphs: [
      "Lilly generated $7.8B of free cash flow on a trailing basis, only a 9.0% margin, because capital expenditure on manufacturing capacity is high. That is the main difference between the income statement and the cash-flow statement.",
      "The balance sheet carries $44.6B of net debt, reflecting investment and acquisitions. It is manageable against EBITDA but higher than the net-cash peers in this universe.",
      "The cash-flow statement is the place to watch the capacity build. If capex normalizes as plants come online, free cash flow should grow much faster than revenue.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $1,354, Lilly trades at 46.2x trailing earnings, 35.7x EV/EBITDA and 164.3x free cash flow. The earnings multiple is high but not unusual for a large-cap biopharma with this growth rate. The free-cash-flow multiple is distorted by the capex cycle.",
      "The market is pricing a long duration for the obesity franchise. If the growth rate stays above 20% for several years, the multiple can be justified. If competition compresses pricing sooner, the multiple has room to fall.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 29 analysts with a mean target of $1,453.40. The recommendation mix is positive. Estimates call for $91.8B of revenue this fiscal year and EPS of $35.35.",
      "The following year's EPS estimate of $50.35 implies 42.4% growth, which is a strong assumption but consistent with the current trajectory. The key uncertainty is supply and competition, not demand.",
      "A high mean target is not a Stockmonk rating. It reflects sell-side confidence in the obesity franchise and the capacity build.",
    ],
  },
  risks: {
    intro:
      "Lilly's risks are competition, pricing, manufacturing execution and pipeline concentration. The balance sheet is manageable but not a fortress.",
    items: [
      {
        title: "Obesity competition",
        severity: "High",
        detail:
          "Competing GLP-1 therapies and next-generation drugs could pressure pricing and share.",
        watch:
          "Prescription trends, competitor launches and pricing.",
      },
      {
        title: "Drug pricing policy",
        severity: "High",
        detail:
          "Medicare negotiation and international pricing rules can cap revenue per patient.",
        watch:
          "US policy changes and net price realizations.",
      },
      {
        title: "Manufacturing capacity",
        severity: "Medium",
        detail:
          "Demand exceeds supply. Delays in plant construction or validation would limit revenue.",
        watch:
          "Capacity announcements and product availability.",
      },
      {
        title: "Pipeline concentration",
        severity: "Medium",
        detail:
          "74% of revenue is cardiometabolic. A clinical or competitive setback would be material.",
        watch:
          "Late-stage trial readouts and regulatory decisions.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "A 46x earnings multiple assumes sustained high growth.",
        watch:
          "Forward EPS revisions and the pace of competition.",
      },
    ],
    watchlist: [
      {
        title: "Obesity prescription growth",
        detail:
          "The cleanest signal on demand and competitive position.",
      },
      {
        title: "Net price realization",
        detail:
          "Volume growth can be offset by lower prices; track both.",
      },
      {
        title: "Capex normalization",
        detail:
          "The timing of manufacturing investment determines the free-cash-flow recovery.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Lilly has one of the strongest growth franchises in large-cap healthcare. The cardiometabolic business is large, growing quickly and supported by real clinical need.",
      "The educational point is that pharma valuations depend on duration and pricing, not just current growth. A drug franchise can grow fast and still disappoint if competition or policy changes the trajectory.",
      "The key questions are how long the obesity market can grow at this rate, how much pricing pressure arrives, and whether manufacturing capacity keeps up with demand.",
    ],
    questions: [
      "How much of the growth is volume versus price?",
      "What does the competitive landscape look like in three years?",
      "When does the manufacturing capex cycle normalize?",
      "What would Medicare negotiation cost the franchise?",
    ],
  },
};
