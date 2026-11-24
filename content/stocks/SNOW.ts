import type { StockStory } from "./types";

export const SNOW: StockStory = {
  "ticker": "SNOW",
  "kicker": "Software · Cloud data platforms",
  "title": "Snowflake sells compute by the second and still loses money on paper",
  "dek": "A 67.0% gross margin and a 22.0% free-cash-flow margin sit alongside a 22.8% operating loss. The distance between those numbers is the whole investment question.",
  "readingMinutes": 9,
  "takeaways": [
    "Second-quarter fiscal 2027 revenue was $1.5B, up from $1.1B, and the operating loss narrowed to 17.0% from 29.7%.",
    "Free cash flow is $1.2B, a 22.0% margin, but the company has never reported an operating profit and return on invested capital is -45.5%.",
    "The $96.4B market value is 16.9x sales and 80.7x free cash flow, with no meaningful P/E or EV/EBITDA because earnings are negative.",
    "Consensus expects 35.0% revenue growth this fiscal year and a swing to $2.23 of EPS, and the 90-day estimate is up 15.0%."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001640147&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Snowflake's second quarter of fiscal 2027, ended 31 July 2026, produced $1.5B of revenue against $1.1B a year earlier. The operating loss narrowed to 17.0% of revenue from 29.7%, and the net loss to 12.4% from 26.0%; free cash flow was $83.8M. What stands out is that the loss is closing while revenue is still growing, the combination a consumption business needs before the market will underwrite a profit. The 12.7-point margin improvement came with 36% growth, not instead of it.",
      "The economics are those of a data platform that resells cloud compute. Customers buy credits and consume them as queries run, so revenue follows usage rather than seats. Gross margin of 67.0% is well below a software company's because storage and compute are real costs, and the trailing 22.8% operating loss reflects a direct sales force and a product surface that is still widening into data engineering, sharing and AI workloads.",
      "The $273 share price values Snowflake at $96.4B, or 16.9x trailing sales and 80.7x free cash flow. The peer median revenue growth is 21.8% and the median operating margin 28.9%, so the multiple assumes Snowflake both outgrows the group and closes a 50-point margin gap. The $4.3B net cash balance gives it time; the question is whether the operating loss is a scale problem or a structural one. At 80.7x free cash flow, the cash multiple is already pricing the profit that the income statement has not delivered."
    ],
    "quote": "Snowflake sells compute by the second, which makes growth real and profit late; the loss is the price of a sales machine built ahead of the consumption it serves."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is a data warehouse that runs on cloud infrastructure. Around it sit data engineering tools, data sharing between organisations, a marketplace for third-party data and, more recently, application and AI workloads that run close to the data. The strategic idea is that data is more valuable when it can be combined, and combining is easier when everything lives in one governed platform.",
      "Customers are enterprises with large and messy data estates: retailers analysing transactions, financial firms running risk models, healthcare organisations combining clinical and operational records. The buying centre is usually the data engineering or analytics team, with information technology and security approving the platform.",
      "Snowflake employed 2,495 people. That is a small organisation for $5.43B of revenue, and it reflects a product that runs on rented infrastructure. The company does not own data centres; it pays cloud providers for storage and compute and charges customers for the service on top."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is consumption of credits. A customer buys a commitment, then draws it down as it runs queries. Gross margin is 67.0%, which is lower than a pure software company's because the cloud infrastructure that powers the queries is a real cost of revenue. Snowflake is, in part, reselling compute with software on top.",
      "The operating loss of 22.8% comes from sales and marketing and research and development spending that is large relative to revenue. The company is still building its customer base and its product surface, and it is doing so with a direct sales force that is expensive per dollar of new revenue.",
      "The difference between the operating loss and the free-cash-flow profit is the most important thing to understand about the financial statements. Free cash flow adds back share-based compensation and the amortisation of capitalised commissions, and it benefits from customers paying in advance. The cash is real, but part of it is funded by dilution rather than by profit."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue grew from $592.0M in fiscal 2021 to $4.7B in fiscal 2026, and trailing revenue is $5.4B, up 32.0%. The quarterly sequence has re-accelerated: $1.3B in the January 2026 quarter, $1.4B in April and $1.5B in July. That is unusual at this size and it is the strongest part of the story, because it says the consumption base is expanding faster than the law of large numbers would suggest.",
      "Growth comes from three places. Existing customers run more workloads as data volumes rise; new customers are added through a direct sales force; and the product surface widens into data engineering, sharing and AI. The first is the largest and the least visible. Because revenue is metered, a customer that consolidates more data into Snowflake grows the bill without a new contract, and a customer that optimises queries shrinks it without leaving.",
      "Consensus assumes the re-acceleration continues. The fiscal 2027 estimate is $6.3B, up 35.0%, and fiscal 2028 is $8.2B, up 29.1%; those are above the 21.8% peer median. The 90-day EPS revision of 15.0% shows estimates moving up, while the 30-day change of 0.2% suggests the move happened earlier. A 35% year at $6.3B would require the existing base to keep expanding at the pace of the last two quarters."
    ],
    "bullets": [
      {
        "title": "Consumption base",
        "detail": "Revenue follows queries, not seats. The installed base can grow without new logos, and it can shrink without churn."
      },
      {
        "title": "Product breadth",
        "detail": "Data engineering, sharing and AI workloads widen the entry points. Each one raises the chance a customer consolidates more data on the platform."
      },
      {
        "title": "Loss narrowing",
        "detail": "The operating loss fell from 29.7% to 17.0% in a year. Holding that trajectory is what the 16.9x sales multiple requires."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin has drifted from 68.0% in fiscal 2024 to 67.2% in fiscal 2026 and 67.0% trailing, a modest decline that reflects the compute-heavy mix of newer workloads. The operating margin is the number that has moved: -40.2% in fiscal 2025, -30.6% in fiscal 2026, -22.8% trailing and -17.0% in the July quarter. Each step reflects revenue growing faster than sales and development spending.",
      "Net margin has followed the operating line, from -35.5% in fiscal 2025 to -20.1% trailing. Return on invested capital is -45.5% and return on equity -50.7%, both negative and therefore not comparable with the peer median of 22.6%. The meaningful comparison is gross profit: 67 cents of every revenue dollar is left after cloud costs, which is enough to fund a profitable business at scale if the sales spend stops outgrowing revenue.",
      "The July quarter is the first where the model looks close. Operating margin improved 12.7 points year over year on 36% revenue growth, and free cash flow was positive at $83.8M despite the loss. The gap between a -17.0% operating margin and a positive cash flow is the add-back machine: share-based compensation and capitalised commissions. A reader should treat the cash as real but not as evidence that the income statement has turned."
    ]
  },
  "cash": {
    "paragraphs": [
      "Trailing cash generation was $1.2B, a 22.0% margin. Fiscal 2026 operating cash flow was $1.2B and capital spending $101.6M. The company does not own data centres, so capex is small and the cash conversion is high. The balance sheet holds $4.3B of net cash, which is a multi-year cushion against the current cost base rather than an immediate constraint.",
      "The cash figure needs adjustment for how it is produced. Share-based compensation is added back in full, and customers pay commitments in advance, so free cash flow can exceed operating profit by a wide margin for years. The July quarter's $83.8M compared with $232.8M in April and $765.1M in the January quarter, a seasonal pattern tied to billing rather than to a deterioration in the business.",
      "Capital allocation is narrow: research and development and sales capacity, with no dividend and no debt burden. Interest cover of -148.8x is not meaningful while operating income is negative. The relevant test is whether the $4.3B net cash lasts long enough for the operating margin to cross zero; at the current trajectory that is a question of quarters, not years."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $273, Snowflake is worth $96.4B, equal to 16.9x trailing sales and 80.7x free cash flow, with a 1.2% free-cash-flow yield. A P/E and EV/EBITDA are not reported because earnings and EBITDA are negative; applying them would produce a meaningless number. The sales multiple is therefore the primary measure, and the company has to grow faster than the 21.8% peer median to earn it.",
      "On the fiscal 2027 estimate of $6.3B, the market value is about 15.3x sales, and on fiscal 2028's $8.2B about 11.8x. Those multiples fall only if revenue compounds; they do not fall because the company becomes more profitable. That is the asymmetry in a loss-making software valuation: profit progress helps the cash multiple, but only revenue growth moves the sales multiple that sets the price.",
      "The peer set offers two reference points. Microsoft, the closest platform competitor in the group, earns a 47.1% operating margin and trades at 26.0x earnings and 18.2x EBITDA, while Broadcom grows 48.7% at a 48.0% margin and trades at 38.6x earnings. Snowflake has neither the margin nor the profit, so its 16.9x sales is a bet that it will acquire one of them. The $4.3B net cash reduces financing risk but does not shorten the distance."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The attributed Yahoo Finance consensus, as of 18 November 2026, covers 47 analysts with a mean target of $434 and a range of $280 to $540. The distribution is almost uniformly positive, with five analysts neutral and no negative outliers. The mean is 59% above the $273 price, but the lowest target is only 2.6% above it, so the bullish average depends on the upper half of the range being right.",
      "Estimates call for $6.3B of revenue and $2.23 of EPS in fiscal 2027, then $8.2B and $3.06 in fiscal 2028. Over 90 days the EPS estimate has risen 15.0%, while the 30-day change is 0.2%, so the upgrades came earlier in the autumn. The consensus implicitly assumes the operating loss closes on schedule and that consumption growth does not slow; the 35.0% revenue estimate leaves little room for a cautious guide."
    ]
  },
  "risks": {
    "intro": "Snowflake's risks are competitive and financial. The product is strong and the cash flow is positive, but the company is still loss-making and the valuation assumes years of fast growth.",
    "items": [
      {
        "title": "Consumption optimisation",
        "severity": "High",
        "detail": "Customers can lower their bill by using the platform more efficiently. Revenue then falls without any customer leaving.",
        "watch": "Product revenue growth and commentary on consumption patterns."
      },
      {
        "title": "Competition from cloud platforms",
        "severity": "High",
        "detail": "The largest cloud providers sell competing data warehouses and can bundle them into existing infrastructure agreements.",
        "watch": "Win rates, customer additions and pricing."
      },
      {
        "title": "Path to profitability",
        "severity": "High",
        "detail": "A 22.8% operating loss is narrowing, but the company has never reported an operating profit. A slower growth year would delay breakeven further.",
        "watch": "Operating margin and the growth of sales and marketing spend."
      },
      {
        "title": "Thin net cash",
        "severity": "Medium",
        "detail": "$673.1M of net cash is small relative to the cost base. A downturn could force a financing.",
        "watch": "Cash and investments against operating cash burn."
      },
      {
        "title": "Share-based compensation",
        "severity": "Medium",
        "detail": "Free cash flow depends on adding back share-based pay. Dilution is a real cost to per-share value.",
        "watch": "Diluted share count and stock compensation as a share of revenue."
      }
    ],
    "watchlist": [
      {
        "title": "Product revenue growth",
        "detail": "The consumption model shows up here first. A deceleration is the leading signal."
      },
      {
        "title": "Operating margin",
        "detail": "Negative 17.0% is an improvement from negative 42.9%. The pace of improvement matters more than the level."
      },
      {
        "title": "Net cash",
        "detail": "$673.1M is the buffer. Watch it against the quarterly cash burn."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Snowflake is a high-growth data platform with a genuine architectural advantage and a cash-generative business underneath the accounting loss. The 67.0% gross margin shows the software economics; the 22.0% free-cash-flow margin shows that customers pay.",
      "The losses are narrowing and the cash flow is positive, which is the right direction. The valuation, at 17.5x sales, assumes that the direction continues for several years. The thin net cash position is the detail that makes the assumption matter.",
      "A reader should separate three questions: how much of growth is new data versus new customers, how much of the cash flow is add-backs, and how much runway the balance sheet provides if growth slows."
    ],
    "questions": [
      "How much of revenue growth comes from existing customers consuming more?",
      "What would a 20% reduction in customer consumption do to the operating loss?",
      "How large is share-based compensation relative to revenue?",
      "How many quarters of operating expenses does $673.1M of net cash cover if growth slows?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
