import type { StockStory } from "./types";

export const PSTG: StockStory = {
  "ticker": "PSTG",
  "kicker": "Enterprise storage · All-flash arrays",
  "title": "Pure Storage sells storage as a subscription, and the accounts need care",
  "dek": "A 77.6% gross margin is what software-like storage economics look like. The published multiples are not, and a reader has to reconstruct the income statement before using them.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $4.3B trailing twelve months, +27.2% year over year.",
    "Profitability: 5.3% operating margin and 5.9% net margin.",
    "Cash: $128.2M free cash flow, a 3.0% margin.",
    "Scorecard: 45/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1474432/000147443226000027/pstg-20260201.htm",
  "irUrl": "https://www.sec.gov/edgar/search/",
  "bigPicture": {
    "paragraphs": [
      "Everpure, Inc. generated $4.3B of revenue over the last twelve months, +27.2% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q2 FY27, with $1.2B of revenue and an operating margin of 5.3%. The stock closed at $67.80 on 2026-04-16, giving a market capitalization of $22.4B.",
      "The shares sit 46% of the way up their 52-week range ($39.72 to $100.59). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Storage is bought on a three-to-five year replacement cycle. A vendor that keeps the customer through two cycles is selling a subscription; one that loses them at refresh is selling boxes."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product line is a set of all-flash arrays for block, file and object storage, plus the management software that runs across them. Block storage serves databases and virtual machines; file and object storage serve analytics, container platforms and, increasingly, the data sets used to train and run AI models. The same hardware platform serves all three through different software.",
      "The channel is a network of resellers and systems integrators. That choice keeps the company's own sales cost low and puts the product in front of customers who already buy infrastructure from a partner, but it also means Pure shares the margin with the channel and depends on partners to position the product correctly.",
      "The customer base is enterprises and service providers rather than hyperscalers, who design their own storage. That is an important distinction in an AI context: Pure is not selling into the largest training clusters, which are usually built with custom or directly attached storage. It is selling the storage that sits behind enterprise AI projects, analytics and virtualisation, which is a smaller and steadier pool of demand."
    ],
    "bullets": [
      {
        "title": "All-flash arrays",
        "detail": "Block, file and object storage on solid-state media. The hardware platform, differentiated by the software that runs on it."
      },
      {
        "title": "Subscription and consumption",
        "detail": "Capacity sold with an expectation of continuous upgrade, with a large share of revenue recognised over time."
      },
      {
        "title": "Channel distribution",
        "detail": "Resellers and integrators carry the product to enterprise buyers. Lower selling cost, less control over the message."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from three places: hardware and the software licence bundled with it, subscription services that include support and upgrade rights, and consumption-based arrangements where the customer pays for what they use. The subscription portion is the strategic one, because it is recurring and because it keeps the customer inside the upgrade cycle.",
      "A 77.6% gross margin tells a reader where the cost sits. Flash media is a commodity bought from a handful of suppliers; the controllers and the software are where the price is set. Deduplication and compression matter commercially because they let a customer store more data on less media, so the software effectively competes against the cost of buying more drives.",
      "The operating leverage should come from the installed base. Each array sold adds a support and subscription revenue stream that costs relatively little to serve, so a growing base should expand the margin over time. The data here cannot confirm that, because the annual operating income figures and the quarterly margins do not reconcile. What can be said is that the gross margin is consistent with a software-rich product and that the model has the right shape for operating leverage."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 15.2% a year across the fiscal years in the dataset, and the latest quarter changed +37.7% year over year. A current-year consensus estimate is not available in the dataset.",
      "Growth is only useful if it earns a return. The operating margin of 5.3% and return on invested capital of 13.2% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 5.3%, the net margin is 5.9% and diluted EPS is $0.73. The latest quarter's operating margin was 5.3%.",
      "Return on equity is 16.4%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $1.2B, an operating margin of 5.3% and a net margin of 6.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $128.2M, a 3.0% margin. The balance sheet carries $385.7M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $128.2M over the last twelve months and net debt was -$385.7M; interest cover was 213.9x."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 88.5x trailing earnings and 58.3x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "A third-party consensus target is not available in the dataset. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "A group of analysts contribute to the third-party consensus. The mean target is n/a, with a range of n/a to n/a.",
      "Current-year estimates call for n/a of revenue and n/a of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers an undisclosed number of analysts with a mean target of n/a; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Pure Storage's risks are competitive, cyclical and, in this dataset, analytical: the reported figures do not yet support a confident read on profitability.",
    "items": [
      {
        "title": "Reporting consistency",
        "severity": "High",
        "detail": "Operating income, net margin, EPS and free cash flow do not reconcile with each other or with the quarterly table. Any conclusion about profitability rests on unverified numbers.",
        "watch": "The income statement and cash flow statement in the next filing, read together."
      },
      {
        "title": "Storage competition",
        "severity": "High",
        "detail": "Storage is a mature market with large incumbents and price pressure from commodity flash. Growth depends on taking share rather than on market expansion.",
        "watch": "Gross margin by quarter and the revenue growth rate relative to the market."
      },
      {
        "title": "Subscription conversion",
        "severity": "Medium",
        "detail": "A subscription model should produce recurring revenue and rising cash conversion. A 0.7% free cash flow margin against a 46.8% reported net margin is not that.",
        "watch": "Deferred revenue, remaining performance obligations and operating cash flow."
      },
      {
        "title": "Replacement cycle timing",
        "severity": "Medium",
        "detail": "Storage is bought on a three-to-five year cycle. A pause in enterprise infrastructure spending delays refresh decisions and hits revenue quickly.",
        "watch": "Order trends and the age of the installed base."
      },
      {
        "title": "Channel dependence",
        "severity": "Low",
        "detail": "Most revenue arrives through partners, which lowers selling cost but reduces control over pricing and positioning.",
        "watch": "Channel concentration and partner certification levels."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "77.6% is the number that makes the model work. A decline would compress everything below it."
      },
      {
        "title": "Free cash flow",
        "detail": "For a subscription business, this is the measure that matters and the one that currently looks wrong."
      },
      {
        "title": "Filing reconciliation",
        "detail": "Until the annual and quarterly figures agree, any valuation multiple is a guess."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Pure Storage sells all-flash enterprise storage with a software-heavy product and a subscription-style commercial model. Revenue is $7.76B, up 15.5%, gross margin is 77.6%, and the balance sheet holds $1.55B of net cash. Those are the parts of the record that hold together.",
      "The educational point is that a dataset can be internally inconsistent, and a reader has to notice. When operating income is $2.78B on $6.00B of revenue while the quarterly margins in the same era are in the single digits, one of those numbers is not measuring what its label says. Recognising that is more valuable than any multiple, because a multiple built on the wrong denominator is worse than no multiple at all.",
      "What is not known is the true operating margin, the split between recurring and product revenue, and why free cash flow is 0.7% of revenue when the reported net margin is 46.8%. The AI build-out creates demand for shared storage behind enterprise AI projects; it does not resolve any of those questions, and it does not make a 2.7x sales multiple cheap or expensive on its own."
    ],
    "questions": [
      "Which figures in the quarterly table are three-month periods and which are fiscal-year totals?",
      "What share of revenue is recurring subscription rather than product?",
      "Why is free cash flow 0.7% of revenue when the reported net margin is 46.8%?",
      "How much of the growth comes from AI-related storage rather than the general replacement cycle?"
    ]
  }
};
