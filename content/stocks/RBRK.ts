import type { StockStory } from "./types";

export const RBRK: StockStory = {
  "ticker": "RBRK",
  "kicker": "Software & Cyber · Data security and cyber resilience",
  "title": "Rubrik turned data backup into a security product, and the cash arrived first",
  "dek": "Revenue is growing 42.4% while the GAAP loss narrows. The open question is whether a subscription that includes the hardware it runs on can earn software margins at scale.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.5B trailing twelve months, +42.4% year over year.",
    "Profitability: -18.3% operating margin and -10.9% net margin.",
    "Cash: $303.9M free cash flow, a 19.7% margin.",
    "Scorecard: 54/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
  "irUrl": "https://www.rubrik.com",
  "bigPicture": {
    "paragraphs": [
      "Rubrik, Inc. generated $1.5B of revenue over the last twelve months, +42.4% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was Q2 FY27, with $427.3M of revenue and an operating margin of -16.8%. The stock closed at $100.68 on 2026-11-17, giving a market capitalization of $20.7B.",
      "The shares sit 60% of the way up their 52-week range ($42.25 to $139.92). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The product is only tested on the worst day of a customer's year. That makes proof of recovery, not storage cost, the thing being bought."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core subscription covers data protection, threat detection on the copied data, and orchestration of the recovery itself. Around it sit modules for cloud posture, data classification, and the monitoring of sensitive data wherever it lives. Each module is designed to attach to an account that already trusts the recovery layer, which is how revenue per customer rises without a new buying cycle.",
      "Customers are large enterprises and public-sector organisations with substantial data estates and a regulatory reason to prove they can recover. The company employs 3,797 people and reports a single revenue line, so the mix between subscription, appliance and support is not disclosed in the dataset. Neither is the geography split."
    ],
    "bullets": [
      {
        "title": "Protect",
        "detail": "Immutable copies of workloads, databases, cloud accounts and SaaS data, with the copy store isolated from production credentials."
      },
      {
        "title": "Detect",
        "detail": "Anomaly detection on the backup data itself, which is useful precisely because an attacker may already be inside production."
      },
      {
        "title": "Recover",
        "detail": "Orchestrated restoration at scale, including to a clean environment, which is the capability customers actually pay to test."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The subscription is term-based, usually multi-year, and priced on the amount of data protected and the modules in use. Gross margin is 80.2%, which is healthy but below what a pure software licence would earn, because delivering the service involves running and shipping infrastructure as well as code. A subscription that bundles software with the hardware it runs on carries a cost of goods that a hosted-only product does not.",
      "The operating loss of 16.8% comes from sales and marketing rather than delivery. Rubrik sells to large organisations through a mix of direct account teams and channel partners, and enterprise data-security deals are slow, technical and proof-heavy. The company is paying for distribution ahead of the recurring revenue that distribution will eventually produce.",
      "That is also why the cash flow looks so different from the income statement: multi-year contracts are often billed annually in advance, so cash arrives before revenue is recognised, and a portion of compensation is paid in stock. Both effects flatter free cash flow relative to operating income, and both are normal at this stage."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 29.9% a year across the fiscal years in the dataset, and the latest quarter changed +37.9% year over year. Third-party estimates for the current fiscal year point to $1.7B of revenue and $0.50 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -18.3% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -18.3%, the net margin is -10.9% and diluted EPS is -$1.27. The latest quarter's operating margin was -16.8%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $427.3M, an operating margin of -16.8% and a net margin of -14.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $303.9M, a 19.7% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $124.18; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "28 analysts contribute to the third-party consensus. The mean target is $124.18, with a range of $110.00 to $155.00.",
      "Current-year estimates call for $1.7B of revenue and $0.50 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 28 analysts with a mean target of $124.18; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Rubrik's risks sit at the intersection of competition, delivery cost and the credibility of its cash conversion. The income statement is still the problem, and it is competition plus cost of goods that will decide whether it stops being one.",
    "items": [
      {
        "title": "Platform bundling",
        "severity": "High",
        "detail": "Cloud providers and large infrastructure vendors sell native backup and snapshot tooling as part of a broader agreement. For a customer already committed to that platform, the incremental cost of using it is close to zero.",
        "watch": "Win rates in accounts that are heavy users of a single cloud platform, and average selling price at renewal."
      },
      {
        "title": "Durability of the growth rate",
        "severity": "High",
        "detail": "Growth accelerated from a flat year to 42.4%. Re-acceleration is harder to sustain than steady compounding, and the comparison base gets tougher each quarter.",
        "watch": "Quarterly revenue growth and the split between new customers and expansion."
      },
      {
        "title": "Gross margin and delivery cost",
        "severity": "Medium",
        "detail": "A subscription that includes infrastructure carries a cost of goods that grows with the customer's data. Scale does not automatically improve this the way it does for a pure licence.",
        "watch": "Gross margin by quarter and any shift toward cloud-hosted delivery."
      },
      {
        "title": "Cash conversion quality",
        "severity": "Medium",
        "detail": "Free cash flow of 19.7% of revenue against a 16.8% operating loss depends on billing terms and stock compensation. If billings slow, the cash advantage narrows quickly.",
        "watch": "Deferred revenue growth and stock-based compensation as a share of revenue."
      },
      {
        "title": "Large-deal concentration",
        "severity": "Medium",
        "detail": "Enterprise data-security purchases are lumpy. A handful of large contracts can decide a quarter, in either direction.",
        "watch": "The number of large deals per quarter and the spread of revenue across the customer base."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin trend",
        "detail": "The path from -33.4% to -13.6% and back to -16.8% needs to resume its direction for the growth story to hold together."
      },
      {
        "title": "Free cash flow versus operating loss",
        "detail": "The 19.7% cash margin is the company's strongest argument; a narrowing gap would weaken it."
      },
      {
        "title": "Gross margin",
        "detail": "Eighty percent is the floor to defend. Below that, the hardware inside the subscription starts to look like a structural drag."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Rubrik has found a way to sell an old category — backup — as a new one — cyber resilience — and has priced it accordingly. Revenue growth and cash generation both support the story. The GAAP loss is the part that has not yet been resolved.",
      "The instructive feature of this company is the distance between its three profit measures. Gross margin says the product is worth 80 cents on the dollar. Operating margin says the company spends more than that to sell it. Free cash flow says the cash arrives early. All three are true at once.",
      "The reader should leave asking whether the growth is being bought with sales spending that will eventually fall, or maintained with spending that has to stay."
    ],
    "questions": [
      "How much of the 42.4% growth comes from expansion inside existing accounts?",
      "What share of the subscription is infrastructure rather than software, and how does that cap gross margin?",
      "Is the 19.7% free-cash-flow margin a permanent feature of multi-year billing or a timing effect?",
      "How quickly does the operating loss close if growth slows to 25%?"
    ]
  }
};
