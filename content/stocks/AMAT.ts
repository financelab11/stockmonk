import type { StockStory } from "./types";

export const AMAT: StockStory = {
  ticker: "AMAT",
  kicker: "Semiconductors · Wafer fabrication equipment",
  title: "Applied Materials sells what every new fab needs before it can make anything",
  dek: "Trailing growth of 7.8% and a 24.8% latest quarter describe the same business. The difference is the timing of fab construction.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $30.84B on a trailing basis, up 7.8%, and the latest quarter grew 24.8% to $9.12B.",
    "Operating margin is 29.6% with a 32.6% return on invested capital, and it has barely moved in five years.",
    "Free cash flow was $5.62B, an 18.2% margin, with $1.79B of net cash.",
    "Third-party estimates call for $34.25B this fiscal year and $46.38B the next, a step change from the historical pace.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/6951/000162828025056742/amat-20251026.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000006951&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Applied Materials builds the machines that turn a bare silicon wafer into working chips. Its tools deposit thin films, etch patterns, implant ions and measure the result. Before a fab can produce a single sellable wafer it has to buy equipment, which makes this company an early beneficiary of any capacity decision and an early casualty of any pause.",
      "The top line looks slow at first: $30.84B, up 7.8%. Then the latest quarter grew 24.8% to $9.12B at a 33.7% operating margin. Both numbers are correct. Equipment revenue arrives in lumps tied to project schedules, so a trailing year can look slow while the most recent quarter is accelerating.",
      "The price is $332.71, which is $264.16B of market value and a good deal closer to the 52-week low of $203.40 than the high of $739.67, even though the business is growing. Trailing P/E is 28.5x and EV/EBITDA is 27.1x.",
    ],
    quote:
      "Equipment orders are a leading indicator of chip supply and a lagging indicator of chip demand. That gap is where the volatility lives.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio covers most of the steps in wafer fabrication. Deposition adds layers of material, etch removes them, ion implantation dopes the silicon, and chemical mechanical polishing flattens the surface between steps. Metrology and inspection check whether any of it worked.",
      "Customers are the small group of companies that build and operate fabs, plus the memory makers and the foundries that serve everyone else. A single leading-edge fab can require hundreds of tools, and the tool mix depends on the process the customer is running, so the sale is closer to an engineering project than a product order.",
      "Alongside the equipment sits a service business that sells spare parts, upgrades and maintenance on the installed base. That revenue is smaller than tool sales in a boom and larger in a downturn, which is precisely the point: it keeps the factory and the field organization busy when new orders slow.",
    ],
    bullets: [
      {
        title: "Process equipment",
        detail:
          "Deposition, etch, implant, polishing and cleaning tools. The bulk of revenue and the most cyclical part.",
      },
      {
        title: "Process control",
        detail:
          "Metrology and inspection systems that verify each step. Sold on the same projects but with different competitors.",
      },
      {
        title: "Service and spares",
        detail:
          "Recurring revenue on the installed base. It cushions the trough between equipment cycles.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A tool sells for a great deal of money and contains a great deal of precision engineering, which is why gross margin is 49.4% rather than the 80% or more a software company reports. The customer is paying for process knowledge as much as for metal: a tool that improves yield by a fraction of a percent pays for itself quickly.",
      "Operating margin of 29.6% means about 20 points of the gross margin go to research, field support and administration. That spending is largely fixed, so incremental tool revenue carries a high contribution margin. The quarterly operating margin moving from 25.2% in Q4 FY2025 to 33.7% in Q3 FY2026 on a 34% revenue increase is that operating leverage at work.",
      "One detail in the trailing figures is worth pausing on: net margin of 30.1% is slightly above operating margin of 29.6%. The company earns a little more below the operating line than it spends there, which for a business holding $1.79B of net cash means interest income rather than financial engineering.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $23.06B in FY2021 to $28.37B in FY2025, a 23% increase over four years. For a company exposed to the largest capital-spending cycle in the industry, that is a remarkably flat line. It reflects a period in which fab construction ran below the peak years.",
      "The latest quarter changed the shape. Revenue of $9.12B was up 24.8% and the operating margin reached 33.7%. Third-party estimates follow through with $34.25B this fiscal year and $46.38B the next. The second figure would be a 63% increase over FY2025, which is the kind of step that only happens when several large fab projects overlap.",
      "The drivers are leading-edge logic capacity, memory capacity for AI systems, and the increasing number of process steps per advanced node. The brake is that all three depend on the same customers approving the same capital budgets at the same time.",
    ],
    bullets: [
      {
        title: "Leading-edge logic",
        detail:
          "Each new node adds deposition and etch steps, which raises the equipment content per wafer.",
      },
      {
        title: "Memory capacity",
        detail:
          "AI accelerators need more DRAM and high-bandwidth memory, and memory makers buy tools in large blocks.",
      },
      {
        title: "Installed-base service",
        detail:
          "A growing fleet of tools in the field produces recurring parts and service revenue.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has sat between 28.8% and 30.2% in every year of the annual table. That stability is unusual for a capital-goods company and says something about pricing discipline: Applied Materials has not had to buy volume with margin.",
      "The quarterly record shows more movement: 30.5%, 30.6%, 25.2%, 26.1%, 31.9% and 33.7%. The dip in Q4 FY2025 and Q1 FY2026 came with lower revenue, which is the same operating leverage working in reverse. The recovery in the last two quarters came with revenue growth.",
      "Return on equity is 38.8% and return on invested capital is 32.6%. Those are high for a manufacturer, and they are supported by a business that does not carry fabs of its own. Diluted EPS was $11.59 on a trailing basis.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $5.62B, an 18.2% margin. The annual record is uneven: $4.77B, $4.61B, $7.59B, $7.49B and $5.70B. The two strong years reflect working-capital swings as much as profit, because equipment makers collect progress payments and then build inventory ahead of shipments.",
      "Net cash is $1.79B and net debt to EBITDA is negative. The balance sheet is not a constraint, and the company has been able to fund research and acquisitions from operating cash flow rather than borrowings.",
      "The cash question for an equipment maker is the timing of customer payments. A large order can consume cash for two or three quarters before it produces it, which is why free cash flow can fall while revenue rises.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $332.71, Applied Materials trades at 28.5x trailing earnings, 27.1x EV/EBITDA, 8.5x sales and 47.0x free cash flow, for a 2.1% free-cash-flow yield. In the peer table that sits below Broadcom at 36.6x earnings and above Nvidia at 23.3x, roughly in line with Microsoft at 27.6x.",
      "The multiple is being applied to a revenue base that has grown slowly for four years. If the FY2027 estimate of $46.38B arrives, the earnings base behind the multiple will be materially larger. If it does not, 28.5x is a full price for a 7.8% grower.",
      "That is the tension in one sentence: the price reflects the estimate, and the estimate reflects a construction schedule the company does not control. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-seven analysts put the mean target at $626.86, inside a range of $358.00 to $900.00: five in the strongest positive bucket, 30 positive and six neutral.",
      "Their estimates move revenue from $10.30B next quarter to $34.25B this fiscal year and $46.38B next, with EPS of $4.06, $12.79 and $18.56. The EPS estimate rises 45% alongside a 35% revenue increase, which assumes the operating margin keeps expanding from here.",
      "Thirty of the 37 sit in the positive bucket and none are negative, a strong consensus for a business whose revenue depends on a handful of construction schedules.",
    ],
  },
  risks: {
    intro:
      "Applied Materials' risks run through a small number of customers and a small number of very large projects. The balance sheet is not one of them.",
    items: [
      {
        title: "Order cyclicality",
        severity: "High",
        detail:
          "Revenue depends on fab projects that customers can delay by a year without losing the demand. A pause shows up in orders before it shows up in revenue.",
        watch:
          "Bookings, backlog and the revenue mix between leading-edge and mature nodes.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A handful of foundries and memory makers account for a large share of sales. One customer's capital budget can move a year of estimates.",
        watch:
          "Concentration disclosures and the split between logic, memory and foundry.",
      },
      {
        title: "Export controls",
        severity: "High",
        detail:
          "Rules on selling advanced equipment into certain markets can remove addressable demand and force product redesigns.",
        watch:
          "License changes and the geographic revenue split.",
      },
      {
        title: "Technology transitions",
        severity: "Medium",
        detail:
          "New deposition or patterning approaches can shift spending toward tools where Applied Materials is weaker.",
        watch:
          "Share of wallet at leading-edge nodes and wins in advanced packaging.",
      },
      {
        title: "Service attach",
        severity: "Low",
        detail:
          "The recurring service base cushions downturns. If customers extend tool life instead of buying new ones, service revenue rises but equipment revenue does not.",
        watch:
          "Service revenue growth relative to the installed base.",
      },
    ],
    watchlist: [
      {
        title: "Bookings",
        detail:
          "The earliest public signal of the next two years of revenue, and the number that moves the stock first.",
      },
      {
        title: "Operating margin",
        detail:
          "It has held near 29% for five years. A sustained break below that would suggest pricing pressure.",
      },
      {
        title: "Memory spending",
        detail:
          "Memory makers buy in blocks. Their capital plans decide whether the FY2027 estimate is reachable.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Applied Materials is the broadest supplier in wafer fabrication equipment, with a service annuity attached to every tool it installs. Revenue of $30.84B, an operating margin of 29.6% and a 32.6% return on invested capital describe a business that earns well even in a flat period.",
      "The current estimate cycle is the opposite of flat. Third-party forecasts have revenue rising from $34.25B to $46.38B in one year, a step that requires several large fab projects to proceed on schedule. The 52-week range, from $203.40 to $739.67, shows how violently the market has already repriced that expectation once.",
      "The educational point is that equipment revenue is a derivative of someone else's capital budget. Following the customer's spending plan tells you more about next year than following the company's trailing growth rate.",
    ],
    questions: [
      "How much of the backlog is tied to a single customer or a single region?",
      "What share of revenue comes from leading-edge nodes versus mature ones?",
      "Does the service business grow when equipment sales fall?",
      "How much of the FY2027 estimate depends on memory capacity rather than logic?",
    ],
  },
};
