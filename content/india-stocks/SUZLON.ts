import type { StockStory } from "@/content/stocks/types";

export const SUZLON: StockStory = {
  ticker: "SUZLON",
  kicker: "Power & Renewables · Wind turbines",
  title: "Suzlon has deleveraged; now it has to earn a manufacturing margin",
  dek: "The wind turbine maker came through a debt crisis with ₹472 crore of net cash. Revenue is ₹18,434 crore, but reported profit still includes gains that do not come from manufacturing.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was ₹184.3B trailing, up 33.9%; Q2 FY2027 revenue was ₹48.76B.",
    "Operating margin 12.7% trailing, down from 19.1% in Q1 FY2026.",
    "FY2026 net profit of ₹31.63B exceeded operating income of ₹30.25B.",
    "Net cash ₹4.72B and interest cover of 6.0x, a reversal from the leveraged years.",
    "At ₹39.00 the shares trade at 23.7x earnings and 17.6x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=SUZLON",
  irUrl: "https://www.suzlon.com",
  bigPicture: {
    paragraphs: [
      "Suzlon Energy is India's best-known wind turbine manufacturer. It designs and builds onshore turbines in the 2-6 MW class, makes blades, nacelles, towers and forgings in-house, runs an operations and maintenance business for its installed fleet, and develops wind sites through a renewable development arm.",
      "The question is whether the company can earn a normal manufacturing margin now that the balance sheet is fixed. Between FY2021 and FY2026 revenue went from ₹33.46B to ₹167.32B, but the profit line is distorted by one-off gains: net income was ₹28.87B in FY2023 on operating income of ₹8.33B, and ₹31.63B in FY2026 on operating income of ₹30.25B.",
      "At ₹39 the market capitalisation is ₹53,612 crore, 23.7x trailing earnings and 17.6x EV/EBITDA. The shares are near the bottom of a 52-week range of ₹33.15 to ₹60.45.",
    ],
    quote:
      "Wind turbine manufacturing is a volume business with a service annuity attached. The annuity is worth more than the turbine, but only if the fleet stays in the field.",
  },
  whatItDoes: {
    paragraphs: [
      "The turbine business sells machines per megawatt and includes the tower, the blades and the control system. In-house component manufacturing captures more of the value chain than assembling imported kits, but it also loads fixed cost onto the factory. The operations and maintenance business services the installed fleet under long-term contracts, producing recurring revenue with little capital.",
      "Customers are independent power producers, public sector utilities, corporates buying captive or group-captive wind capacity, and project developers. The development arm sells or sub-leases land and takes projects through permitting, which brings in revenue before a turbine is ordered.",
    ],
    bullets: [
      {
        title: "Turbines",
        detail:
          "Onshore machines in the 2-6 MW class, sold with supply, erection and commissioning.",
      },
      {
        title: "Components",
        detail:
          "Blades, nacelles, towers and forgings made in-house, which raises fixed cost but keeps more value per megawatt.",
      },
      {
        title: "Service and development",
        detail:
          "Long-term O&M on the installed fleet plus land and site development for new projects.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A turbine is sold at a price per megawatt that includes supply, erection and commissioning. The cost is steel, composites, copper, gearboxes, generators and labour. Because a large share of the components is made in-house, the margin depends on factory utilisation as much as on the selling price.",
      "The service contract is the better business. Once a turbine is installed, the owner needs maintenance for the life of the machine, and switching providers is difficult. That revenue is predictable and requires little new capital, which is why the O&M fleet is the part of Suzlon a manufacturer would most want to protect.",
      "The catch is working capital. Turbines are built against orders, so inventory and receivables build before cash arrives, and project milestones can stretch. The 12.7% trailing operating margin is what is left after all of that.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from ₹33.46B in FY2021 to ₹167.32B in FY2026. The consensus expects ₹217.47B this fiscal year and ₹254.62B next, which would be slower but still substantial growth.",
      "The drivers are the renewable purchase obligation on discoms, the falling cost of wind power, corporate power purchase agreements, and the repowering of older sites. The constraints are land, transmission connectivity and turbine pricing. Wind projects need contiguous land and an evacuation line, and both are state subjects that move slowly.",
    ],
    bullets: [
      {
        title: "Renewable purchase obligations",
        detail:
          "Discoms must buy a rising share of renewable power, which underpins wind tendering.",
      },
      {
        title: "Corporate PPAs",
        detail:
          "Industrial buyers contract wind directly to manage power costs and their own green targets.",
      },
      {
        title: "Repowering",
        detail:
          "Older sites with small turbines can be rebuilt with larger machines on the same land.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating record is a recovery. Operating income was ₹5.37B in FY2021, ₹9.00B in FY2022 and ₹8.33B in FY2023, then rose to ₹30.25B in FY2026 as volume returned. The net income line is much more volatile because of one-off items, including the debt-resolution gains that turned a small operating profit into a large reported profit in FY2023.",
      "The quarterly margin is the cleanest read on the manufacturing business. Operating margin was 19.1% in Q1 FY2026, 17.4% in Q3 FY2026 and 14.8% in Q2 FY2027. The direction is down, which is what happens when competition for orders intensifies. Return on equity is 24.9% and return on capital 34.0%, flattered by the one-off gains.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹6.26B in FY2026, 3.7% of revenue, after ₹7.24B in FY2025. The company now has net cash of ₹4.72B and interest cover of 6.0x, a remarkable change from the years when debt service was the central question.",
      "Cash flow still lags profit. Net income of ₹31.63B against free cash flow of ₹6.26B means most of the reported profit was either non-cash or absorbed by working capital. The deleveraging is real; the cash conversion is not yet at the level the profit line suggests.",
    ],
  },
  valuation: {
    paragraphs: [
      "At ₹39 the shares trade at 23.7x trailing earnings, 17.6x EV/EBITDA and 2.9x sales. The P/E is computed on earnings that include one-off gains, so it understates the multiple on operating profit: the market capitalisation is about 17.7 times FY2026 operating income.",
      "The peer table is not a clean comparison because Suzlon is the only pure wind OEM in it. Hitachi Energy India at 83.9x and Voltamp at 26.5x are equipment makers with different cycles. The relevant question is what multiple a wind turbine business should command at a mid-cycle margin, and the answer depends on whether the 15%+ operating margin of FY2026 is the new normal.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twelve analysts contribute to the attributed consensus, with a mean target of ₹55 and a range of ₹40 to ₹68, against a close of ₹39.",
      "Estimates are ₹217.47B of revenue and ₹1.51 of EPS this fiscal year, then ₹254.62B and ₹2.04. Note that the current-year EPS estimate is below the ₹2.33 reported for FY2026, which implies the analysts expect the one-off gains to disappear and the operating margin to compress.",
    ],
  },
  risks: {
    intro:
      "Suzlon's balance sheet is no longer the problem. The risks now sit in the income statement: whether the margin holds as competitors chase the same orders, and whether the reported profit reflects the manufacturing business.",
    items: [
      {
        title: "Margin competition",
        severity: "High",
        detail:
          "Operating margin has fallen from 19.1% in Q1 FY2026 to 14.8% in Q2 FY2027 while revenue kept growing.",
        watch: "Quarterly operating margin and the price per megawatt realised.",
      },
      {
        title: "Execution and land",
        severity: "High",
        detail:
          "A turbine order cannot be delivered until the land, access roads and evacuation line are ready.",
        watch: "Order book in megawatts and the commissioning schedule.",
      },
      {
        title: "Quality of reported profit",
        severity: "Medium",
        detail:
          "Net profit has exceeded operating income in several years because of one-off gains, so the P/E understates the operating multiple.",
        watch: "The split between operating income and other income in each result.",
      },
      {
        title: "Working capital",
        severity: "Medium",
        detail:
          "Free cash flow is a small fraction of net profit, and turbine projects absorb cash before they release it.",
        watch: "Inventory, receivables and the gap between profit and operating cash flow.",
      },
      {
        title: "Policy and grid connectivity",
        severity: "Medium",
        detail:
          "Wind demand depends on renewable purchase obligations and on transmission capacity reaching windy states.",
        watch: "Tender volumes and inter-state transmission approvals.",
      },
    ],
    watchlist: [
      {
        title: "Order book in MW",
        detail:
          "Revenue follows commissioning, so the megawatt backlog is the leading indicator.",
      },
      {
        title: "Operating margin",
        detail:
          "The single number that separates a manufacturing recovery from a cyclical peak.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow has been positive but small relative to the profit line.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Suzlon has done the hard part: it survived a debt crisis, rebuilt the order book and now carries net cash. That is a genuine turnaround and it explains why the shares have re-rated over five years.",
      "The next phase is less dramatic. A turbine manufacturer earns its return from volume, factory utilisation and service contracts, and the margin has been slipping for four quarters. The reported profit also overstates the manufacturing result because of one-off gains.",
      "The valuation is not extreme for a recovery story, but it is not cheap for a business with a 12.7% trailing operating margin. The reader has to decide where the margin settles once the current order cycle matures.",
    ],
    questions: [
      "How much of FY2026 net profit came from one-off items rather than operations?",
      "What is the order book in megawatts, and how much of it is at risk from land or evacuation delays?",
      "Why has operating margin fallen while revenue has grown?",
      "How large is the O&M fleet, and how much of group profit does it contribute?",
    ],
  },
};
