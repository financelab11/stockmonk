import type { StockStory } from "./types";

export const ORCL: StockStory = {
  ticker: "ORCL",
  kicker: "Technology · Enterprise software and cloud infrastructure",
  title: "Oracle is trading a software multiple for a data-center balance sheet",
  dek: "Revenue is accelerating while free cash flow is deeply negative. This report explains why those two facts belong in the same paragraph.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $71.78B on a trailing basis, up 21.6%, and the latest quarter grew 29.6%.",
    "Operating margin is 32.1%, but trailing free cash flow is -$28.72B because of the cloud build-out.",
    "Net debt is $88.26B, or 2.7x EBITDA, and the trailing P/FCF multiple is negative.",
    "Third-party estimates call for $90.45B of revenue this fiscal year and $131.82B the next.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001341439&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Oracle is one of the oldest enterprise software companies still growing at a double-digit rate. It sells a database, the middleware around it, business applications, and, increasingly, cloud infrastructure that runs other companies' workloads. The installed base is the asset: large organizations run Oracle software in places that are painful to change.",
      "The revenue line is accelerating: $71.78B on a trailing basis, up 21.6%, with the latest quarter up 29.6% to $19.34B at a 34.8% operating margin. The catch sits in the cash-flow statement. Free cash flow was -$28.72B over the trailing period, a -40.0% margin, against positive $11.81B in FY2024. Net debt is $88.26B, or 2.7x EBITDA.",
      "The stock has been repriced: $116.10 against a 52-week range of $109.21 to $250.25, down 51.7% over the year, for a market value of $351.06B. The trailing P/E is 18.6x and EV/EBITDA is 13.5x. A company that just accelerated revenue has been de-rated, which is the puzzle the rest of this report works through.",
    ],
    quote:
      "The question is not whether Oracle can sign cloud contracts. It is whether the capital required to serve them earns more than that capital costs.",
  },
  whatItDoes: {
    paragraphs: [
      "Oracle reports as one operating company, so the consolidated revenue line is what the tables show. Behind it sit three businesses. The first is the database and middleware franchise: licenses, support and maintenance on software that runs payroll, supply chains and transaction systems at very large organizations.",
      "The second is applications — finance, human resources, supply chain and industry suites for large enterprises, plus a mid-market accounting and planning product. The third is cloud infrastructure, where Oracle rents compute, storage and database services, including capacity aimed at artificial-intelligence training and inference.",
      "The parts have different economics. Support renewals on existing licenses arrive with very little incremental cost. Cloud infrastructure requires Oracle to buy servers, networking and data-center capacity before a customer pays for any of it. The company employs 135,000 people, and the mix between the three parts decides whether the consolidated margin holds.",
    ],
    bullets: [
      {
        title: "Database and support",
        detail:
          "License and support revenue on software already installed at large enterprises. High margin, slow growth, very sticky.",
      },
      {
        title: "Applications",
        detail:
          "Enterprise resource planning, human capital and industry suites, plus a mid-market product. Sold on subscription.",
      },
      {
        title: "Cloud infrastructure",
        detail:
          "Rented compute and database services, including capacity for AI workloads. Capital-hungry and priced against hyperscale competitors.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Support contracts are the engine of the historical margin. A customer running Oracle databases pays an annual fee to keep them patched, supported and licensed, and the cost of providing that is small relative to the fee. That is why gross margin has held at 64.0% even as lower-margin hardware and cloud capacity have grown.",
      "Cloud infrastructure inverts the model. Oracle builds capacity first — land, power, servers, networking — and rents it afterwards. Revenue from a new region arrives after depreciation has started. The 32.1% operating margin is therefore a blend of a very high-margin annuity and a capital-intensive rental business, and the blend moves as the second grows faster than the first.",
      "The unit economics to watch are revenue per dollar of capital spent and the depreciation life assigned to the equipment. A long useful life flatters near-term margins and moves the cost into later years, which is why the accounting policy note matters as much as the growth rate.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $42.44B in FY2022 to $67.36B in FY2026. The path was not smooth: $52.96B in FY2024, $57.40B in FY2025, then a 17.4% jump. The latest quarter grew 29.6% and the trailing figure is up 21.6%.",
      "Third-party estimates assume the step-up continues: $90.45B this fiscal year and $131.82B the next. Those are not extrapolations of the historical trend. They take the FY2026 base close to double in two years, which means the estimates embed signed cloud capacity being delivered and billed, not just demand for it.",
      "The drivers are AI training and inference capacity, database migrations from on-premise systems to Oracle's cloud, and application cross-sell into the existing customer base. The brake is the same as the accelerator: every unit of cloud growth needs capital, and a growing share of that capital is borrowed.",
    ],
    bullets: [
      {
        title: "AI capacity",
        detail:
          "Large blocks of GPU and CPU capacity contracted by AI developers and model builders.",
      },
      {
        title: "Database migration",
        detail:
          "Moving existing on-premise workloads into Oracle's cloud protects the customer relationship but changes the margin.",
      },
      {
        title: "Application attach",
        detail:
          "Selling finance, HR and industry suites into a database customer base that already trusts the vendor.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has improved in each year of the table, from 25.8% in FY2022 to 30.6% in FY2026, and the latest quarter printed 34.8%. Net margin is 26.4% on a trailing basis and diluted EPS is $6.38.",
      "The return figures diverge in a way that matters. Return on equity is 28.2% while return on invested capital is 11.7%. The gap is leverage: debt and a growing asset base sit between the equity return and the operating return. A business earning 11.7% on invested capital while adding billions of dollars of assets needs each new dollar to earn more than the last, or the return falls as the asset base grows.",
      "One quarter in the table needs care. In Q2 FY2026 net income of $6.13B was higher than operating income, so a gain outside the operating business flattered that quarter's $2.10 of EPS. The operating trend is better read from operating margin than from the per-share line.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$28.72B over the trailing twelve months. The annual table shows the turn: $5.03B in FY2022, $8.47B, $11.81B, then -$394.0M in FY2025 and -$23.69B in FY2026. The negative P/FCF multiple of -16.0x is arithmetic, not a valuation signal.",
      "Net debt of $88.26B is 2.7x EBITDA. That is manageable against $20.61B of operating income, but it is a different balance sheet from the one Oracle carried when support contracts were the whole story. The company still pays a dividend, at a 1.8% yield, while funding a build of this size.",
      "What the cash flow supports is capacity rather than distributions. The relevant comparison is annual capital spending against the cloud revenue it is meant to produce, and the lag between the two. If the lag stretches, the funding mix becomes the story.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $116.10 the trailing P/E is 18.6x and EV/EBITDA is 13.5x. Against the large peers in the table — Nvidia at 22.0x EBITDA, Microsoft at 19.4x, Broadcom at 33.1x — Oracle is the cheapest apart from Micron, whose multiple reflects a memory cycle rather than a software franchise.",
      "Cheapness on EBITDA has a catch. EBITDA does not subtract the capital spending the cloud business consumes, and for Oracle that spending is the largest item in the cash-flow statement. EV/Sales of 6.1x and a negative P/FCF describe a company in the middle of a build, not a mature annuity.",
      "The framework that fits is enterprise value against the cash the assets will produce once the build is finished, discounted for the risk that it is not. Stockmonk does not publish a target price. The consensus figures in the next section are third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty analysts, a mean target of $235.77 and a range of $110.00 to $400.00: the group is far more optimistic than the share price. Seven sit in the strongest positive bucket, 28 are positive, six neutral and one negative.",
      "The estimate set has $21.33B of revenue next quarter, $90.45B this fiscal year with $8.15 of EPS, and $131.82B next fiscal year with $11.06. The revenue numbers are the part to focus on, because they assume the cloud build converts into billed revenue roughly on schedule.",
      "The low end of the range is essentially the share price. That spread is a disagreement about capital intensity and contract duration, not about the next quarter.",
    ],
  },
  risks: {
    intro:
      "Oracle's risks concentrate where the balance sheet has changed: capital spending, leverage, and the customers behind the new capacity.",
    items: [
      {
        title: "Capital intensity",
        severity: "High",
        detail:
          "Cloud growth consumes cash before it produces it. If billed revenue lags the build, free cash flow stays negative for longer than planned.",
        watch:
          "Capital spending, free cash flow, and the gap between the two.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "Net debt of $88.26B is 2.7x EBITDA. Refinancing costs and covenants matter more when operating cash flow is under pressure.",
        watch:
          "Net debt to EBITDA, interest expense and the maturity schedule.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of very large cloud buyers can swing revenue and pricing. Losing one contract would be visible immediately.",
        watch:
          "Concentration disclosures and contracted but unbilled backlog.",
      },
      {
        title: "Hyperscale competition",
        severity: "Medium",
        detail:
          "The largest cloud providers sell equivalent compute and database services and can cut price faster than Oracle can cut its capital budget.",
        watch:
          "Cloud revenue growth measured against growth in capital spending.",
      },
      {
        title: "Installed-base migration",
        severity: "Medium",
        detail:
          "The on-premise database base is the profit pool. Moving it to Oracle's cloud keeps the customer but changes the margin on that relationship.",
        watch:
          "Support revenue trend compared with cloud revenue.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "The single number that decides whether the build is working: how close it gets to zero, and when.",
      },
      {
        title: "Cloud revenue versus capital spending",
        detail:
          "Compare the change in each over the same period. Revenue should eventually outrun the spending that produced it.",
      },
      {
        title: "Net debt to EBITDA",
        detail:
          "Watch for leverage rising while free cash flow is still negative.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Oracle is a high-margin software annuity with a capital-intensive cloud business attached. Revenue growth has accelerated to 21.6% on a trailing basis and 29.6% in the latest quarter, and the operating margin has expanded to 34.8%.",
      "What the numbers do not settle is whether the new capacity earns an adequate return. Free cash flow of -$28.72B, net debt of $88.26B and a return on invested capital of 11.7% say that question is still open. The consensus expects $90.45B this year and $131.82B next, which is a large bet on delivery.",
      "The educational point is that a low P/E is not automatically cheap when the business has changed shape. For a company funding growth with debt, both P/E and EV/EBITDA flatter the picture until capital spending is subtracted.",
    ],
    questions: [
      "How much of the new cloud capacity is contracted before it is built?",
      "What depreciation life is applied to the servers and data-center equipment?",
      "How much of the $88.26B net debt refinances within two years?",
      "Does support revenue hold up as customers migrate to the cloud?",
    ],
  },
};
