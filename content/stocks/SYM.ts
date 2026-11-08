import type { StockStory } from "./types";

export const SYM: StockStory = {
  ticker: "SYM",
  kicker: "Automation · Warehouse robotics",
  title: "Symbotic builds warehouses, and its cash flow is a timing story",
  dek: "Revenue of $2.65B at a 21.3% gross margin leaves almost no operating profit, yet free cash flow was $524.6M. The gap is working capital, not profitability.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $2.65B, up 20.6%, with the latest quarter at $720.8M.",
    "Operating margin was effectively zero for the year, but the latest quarter reached 4.6%.",
    "Free cash flow was $524.6M, a 19.8% margin, after -$100.3M the year before.",
    "Net cash of $1.75B against a $2.80B market value explains the 0.4x EV/sales multiple.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1837240/000183724025000278/sym-20250927.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001837240&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Symbotic sells warehouse automation to large retailers and wholesalers in the United States. The product is not a robot; it is a system. Dense structures hold robots that move cases in and out of storage, software decides where everything goes, and the company designs, installs and supports the whole arrangement.",
      "That makes revenue project-based and customer-concentrated. A deployment is a multi-year construction project inside someone else's distribution centre, billed as milestones are reached. Revenue was $2.65B over the trailing period, up 20.6%, but gross margin of 21.3% and an operating margin of essentially zero show how little of that revenue reaches the operating line.",
      "At $36.82 the market value is $2.80B. Net cash of $1.75B is more than half of that, which is why the enterprise value looks small against sales: the EV/sales multiple is 0.4x while the market value is close to trailing sales. The same net cash explains why the trailing P/E of 341.0x and the P/FCF of 5.3x tell opposite stories.",
    ],
    quote:
      "A systems integrator can report strong cash flow while reporting no profit, because customers pay at milestones and the company pays its suppliers later. The cash arrives before the accounting profit does.",
  },
  whatItDoes: {
    paragraphs: [
      "The Symbotic System combines hardware and software. Robots travel on a modular structure and move cases between storage and outbound; the software orchestrates inventory, sequencing and replenishment. Because the system is installed inside a customer's building, the sale includes design, construction, commissioning and then ongoing support.",
      "Customers are a small number of very large retailers and wholesalers. That is a deliberate strategy: a single site is a large contract, and a customer with a national network can replicate the design across many buildings. It also means the revenue line is exposed to a handful of capital budgets.",
    ],
    bullets: [
      {
        title: "The system",
        detail:
          "Robots, structures and software installed inside a distribution centre as one integrated product.",
      },
      {
        title: "Deployment revenue",
        detail:
          "Design, construction and commissioning, recognised as milestones are met over the build.",
      },
      {
        title: "Support and software",
        detail:
          "Maintenance, spare parts and software updates after commissioning. The recurring layer of the model.",
      },
      {
        title: "Customer base",
        detail:
          "A small number of large US retailers and wholesalers, each with multiple sites that can be replicated.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is recognised as a site is built, so the income statement follows construction progress rather than the signing of a contract. A large deployment can take several quarters, and the margin on it is set by the original bid. If installation takes longer or costs more than planned, the extra cost lands on the company.",
      "The 21.3% gross margin is the economics of systems integration: a lot of purchased hardware and subcontract labour passes through the income statement at a modest markup. Software and support carry better margins, but they only become material once a site is running and the installed base is large.",
      "That is the operating leverage mechanism. Each new site adds deployment revenue at a thin margin and a small amount of high-margin recurring revenue afterwards. The recurring layer compounds as the installed base grows, which is why the quarterly operating margin moved from negative to 4.6% as the base matured.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year record shows 89.4% annual revenue growth, from $593.3M in FY2022 to $2.25B in FY2025. That rate cannot persist, and it has not: trailing growth was 20.6% and the latest quarter grew 21.7%. The company has moved from a standing start to a scale where each additional dollar is harder to win.",
      "The consensus expects $2.80B this fiscal year and $3.59B next, with $774.4M and $818.3M in the next two quarters. That is a continuation of roughly 20% growth rather than a reacceleration.",
      "Growth comes from adding sites at existing customers, signing new ones and selling more software per site. What would slow it is a customer delaying a capital project, a concentration problem if one large account pauses, or a deployment that goes wrong enough to damage the reference.",
    ],
  },
  performance: {
    paragraphs: [
      "Read the annual record and you see a business that scaled revenue faster than it could scale profit. Operating losses were $140.4M in FY2022, $223.2M in FY2023, $116.7M in FY2024 and $115.0M in FY2025, while revenue went from $593.3M to $2.25B. The loss stopped widening but did not close.",
      "The quarterly trend is the more useful signal. Operating margin went from -3.7% in Q2 FY2025 to -4.4%, -7.4%, then +1.0%, +0.9% and +4.6% in the first three quarters of FY2026. Three consecutive positive quarters is the first real evidence of operating leverage in the file.",
      "Net income has been much less negative than operating income, which is a warning about relying on it. In FY2022 the operating loss was $140.4M while the net loss was $6.9M. Return on equity was 0.7% and return on invested capital -3.1%, so the business is not yet earning a return on the capital tied up in it.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $524.6M over the trailing period, a 19.8% margin, against an operating margin of zero. That combination is only possible because of working capital. Customers pay at milestones, the company holds cash before it recognises the related revenue, and the balance sheet temporarily supplies the difference.",
      "The volatility proves the point: -$166.2M in FY2022, +$215.1M in FY2023, -$100.3M in FY2024 and +$625.8M in FY2025. A business with stable economics does not swing like that. Each positive year reflects the timing of deployments and payments as much as profitability.",
      "Net cash is $1.75B, which is a genuine strength: it funds the working-capital swings without borrowing. It also means the free-cash-flow yield of 18.7% should not be capitalised as if it were recurring earnings.",
    ],
  },
  valuation: {
    paragraphs: [
      "Four multiples, four answers. The P/E of 341.0x is high because earnings are close to zero. The P/FCF of 5.3x is low because free cash flow is flattered by working capital. EV/EBITDA of 27.2x is the middle ground. EV/sales of 0.4x looks cheap mainly because $1.75B of net cash is subtracted from the market value.",
      "That last point is the one to understand. Enterprise value is market value minus net cash, so a company holding a lot of cash can look inexpensive on sales while the equity is not. The 0.4x multiple is arithmetically correct and economically misleading if the cash is needed to run the business.",
      "Compared with Kratos at 3.2x sales and AeroVironment at 2.9x, Symbotic is in a different category: a systems integrator with a large cash balance, thin margins and a small but growing software layer. The peer comparison is less useful than the internal one between deployment revenue and recurring revenue.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fifteen analysts cover Symbotic, with a mean target of $61.50 and a range of $38.00 to $85.00. The mean is well above the $36.82 share price, a gap that opened as the stock fell 47.5% over the past year.",
      "Forecasts are $2.80B of revenue and $0.57 of EPS this fiscal year, then $3.59B and $0.74 next year. Those EPS numbers are large relative to the $0.04 reported on a trailing basis, so the forecasts assume the operating margin continues to improve from the 4.6% just delivered.",
      "The estimates are third-party views and the margin assumption is doing most of the work. A slower improvement would leave the EPS number well short without any change in revenue.",
    ],
  },
  risks: {
    intro:
      "Symbotic's risks are concentration, project execution and the quality of its cash conversion. The balance sheet is strong; the uncertainty is whether the recurring layer grows fast enough to carry the deployment business.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of large retailers account for most revenue. One paused capital programme would be visible immediately.",
        watch:
          "Revenue by customer, site count and the largest customer's share.",
      },
      {
        title: "Project execution",
        severity: "High",
        detail:
          "Deployments are priced before they are built. A delayed or over-budget installation consumes the margin on that site and possibly others.",
        watch:
          "Gross margin per quarter and any contract loss provisions.",
      },
      {
        title: "Working-capital reversal",
        severity: "Medium",
        detail:
          "Free cash flow has swung by hundreds of millions between years. A slowdown in milestone payments would turn the inflow into an outflow.",
        watch:
          "Deferred revenue, receivables and operating cash flow excluding working capital.",
      },
      {
        title: "Margin proof",
        severity: "Medium",
        detail:
          "Three positive quarters do not establish a durable operating margin for a business that lost money at every stage of its growth.",
        watch:
          "Operating margin against revenue growth for the next four quarters.",
      },
      {
        title: "Technology competition",
        severity: "Low",
        detail:
          "Warehouse automation has several credible suppliers, and customers can choose to automate more slowly.",
        watch:
          "Win rates, pricing and the size of the opportunity pipeline.",
      },
    ],
    watchlist: [
      {
        title: "Recurring revenue share",
        detail:
          "Software and support are the high-margin layer. Its share of total revenue is the key to the margin story.",
      },
      {
        title: "Operating margin",
        detail:
          "The move from negative to 4.6% needs to hold through a full year.",
      },
      {
        title: "Deferred revenue",
        detail:
          "It shows how much cash has been collected for work not yet recognised, which drives the free-cash-flow swings.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Symbotic has real scale, a $1.75B net cash position and a business that has just produced three consecutive quarters of positive operating margin. It also has a 21.3% gross margin, a history of operating losses and cash flow that moves with project timing.",
      "The distinction to keep in view is that free cash flow and profit measure different things. A $524.6M inflow alongside a zero operating margin is a working-capital event, and working capital reverses.",
      "The question that matters is whether the recurring software and support layer becomes large enough to make the consolidated margin durable, or whether the company remains a project business with a cash balance.",
    ],
    questions: [
      "How much of revenue is recurring support and software rather than deployment?",
      "What share of revenue comes from the largest customer?",
      "How much of the $524.6M free cash flow came from deferred revenue?",
      "Can the 4.6% operating margin hold for four quarters?",
    ],
  },
};
