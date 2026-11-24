import type { StockStory } from "./types";

export const ESTC: StockStory = {
  "ticker": "ESTC",
  "kicker": "Software & Cyber · Search, observability and security",
  "title": "Elastic sells a search engine by the gigabyte, and that changes the economics",
  "dek": "Revenue of $1.80B grew 16.2% while the operating line stayed near breakeven. Usage pricing makes the product easier to adopt and the revenue harder to forecast.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.8B trailing twelve months, +16.2% year over year.",
    "Profitability: -2.6% operating margin and 20.8% net margin.",
    "Cash: $349M free cash flow, a 19.4% margin.",
    "Factor summary: 48/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Elastic N.V. Generated $1.8B of revenue over the last twelve months, +16.2% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was Q1 FY27, with $478.1M of revenue and an operating margin of -4.9%. The stock closed at $81.45 on 2026-11-23, giving a market capitalization of $8.6B.",
      "The shares sit 60% of the way up their 52-week range ($42.05 to $108.00). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "ESTC is a Software & Cyber business with $1.8B of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "Customers choose between running the software themselves and buying it as a hosted service. Self-managed deployments suit large organisations with data-residency constraints and existing infrastructure teams. The hosted service suits everyone who would rather pay for capacity than hire for it, and it is the part of the business that grows with the customer's data volume.",
      "The buying centre is technical: platform engineers, site reliability teams and security operations. That matters because the decision to adopt is often made by an individual developer and the decision to pay is made later, by a manager facing a production incident. The company employs 1,936 people and reports one revenue line, with no segment or geography split in the dataset."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "There are two revenue mechanics underneath the single reported line. Self-managed subscriptions are sold as annual tiers with support and extra features. The hosted service is billed on consumption — storage, compute and data ingest — so the bill moves month to month with how much the customer indexes and queries.",
      "Consumption pricing is genuinely customer-friendly at the start: a team can begin small and grow without renegotiating. It also means revenue falls when a customer tidies up its logging pipeline, a routine event in every observability account. A seat-based product loses revenue only when someone leaves; a consumption product loses revenue when someone becomes more efficient. That is the single most important difference between Elastic and a per-user software company.",
      "Gross margin is 75.5%. The shortfall from a pure licence business is the cost of running other people's workloads: servers, storage and the people who keep them available. Operating margin is -2.6%, so sales and research spending consume the gross profit. The company is close enough to breakeven that small changes in growth have large effects on the margin."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 30.4% a year across the fiscal years in the dataset, and the latest quarter changed +15.1% year over year. Third-party estimates for the current fiscal year point to $2B of revenue and $3.38 of EPS.",
      "Growth matters when it produces a return on capital. The operating margin of -2.6% and return on invested capital of -2.0% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Net revenue retention",
        "detail": "Expansion within existing customers compounds revenue."
      },
      {
        "title": "New customer adds",
        "detail": "New logos broaden the base and fund future expansion."
      },
      {
        "title": "Operating leverage",
        "detail": "Scale should improve margins as sales and R&D mature."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -2.6%, the net margin is 20.8% and diluted EPS is $3.50. The latest quarter's operating margin was -4.9%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is 29.0%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "FCF over the trailing period was $349M, a 19.4% margin. The balance sheet carries $889.8M of net cash. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "Cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 23.0x trailing earnings and no meaningful EV/EBITDA multiple. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $103.19; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "27 analysts contribute to the third-party consensus. The mean target is $103.19, with a range of $70.00 to $132.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $2B of revenue and $3.38 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "Elastic's risks are concentrated in its pricing mechanic and its open-source heritage. The balance sheet is strong; the uncertainty is how much revenue survives when customers optimise.",
    "items": [
      {
        "title": "Consumption volatility",
        "severity": "High",
        "detail": "Hosted revenue moves with data ingested and queries run. A customer that halves its log volume halves that part of the bill without cancelling anything.",
        "watch": "Growth in hosted revenue versus self-managed subscription revenue."
      },
      {
        "title": "Open-source and managed-service competition",
        "severity": "High",
        "detail": "The engine's availability has always created a tension: it drives adoption, and it also lets cloud platforms offer a managed version that competes with the paid service.",
        "watch": "Changes to licensing terms and the growth rate of the hosted business."
      },
      {
        "title": "Purpose-built search alternatives",
        "severity": "Medium",
        "detail": "Specialist vector databases and retrieval services are competing for the AI workload that Elastic wants to serve. A general engine is convenient; a specialised one can be faster.",
        "watch": "Product announcements around vector search and the attach rate in AI projects."
      },
      {
        "title": "Hosted gross margin",
        "severity": "Medium",
        "detail": "Renting infrastructure rather than owning it keeps capital spending low but places a floor under the cost of delivery.",
        "watch": "Gross margin by quarter and any shift toward owned capacity."
      },
      {
        "title": "Concentration of large spenders",
        "severity": "Medium",
        "detail": "Consumption models are sensitive to a few accounts that spend heavily. One customer reducing ingest can move a quarter.",
        "watch": "The revenue contribution of the largest customers and net expansion rates."
      }
    ],
    "watchlist": [
      {
        "title": "Hosted revenue growth",
        "detail": "The consumption side is the growth engine and the volatility source; its rate explains most of the quarter-to-quarter noise."
      },
      {
        "title": "Operating margin",
        "detail": "At -2.6% the company is close enough to breakeven that a small revenue miss changes the sign."
      },
      {
        "title": "Free-cash-flow margin",
        "detail": "The 19.4% margin is what supports the valuation while earnings are unreliable."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Elastic has a real technology franchise, three products built on one engine, and a distribution model that has put its software in front of far more developers than it could ever have sold to directly. It has converted that reach into $1.80B of revenue and a healthy cash flow.",
      "The lesson in its accounts is about pricing mechanics. Consumption revenue behaves differently from seat revenue: it expands without a sales call and contracts without a cancellation. That makes the growth rate noisier and the customer relationship more efficient, and it puts a premium on understanding what the customer is actually buying.",
      "The reader should finish by deciding whether the AI search wave expands Elastic's market or merely changes who competes in it."
    ],
    "questions": [
      "What share of revenue is consumption-based, and how does it grow relative to subscription?",
      "How much of the FY2026 net profit came from the one quarter, and from what item?",
      "Is the AI search opportunity adding new customers or selling more to existing ones?",
      "Does gross margin hold at 75% as hosted usage grows?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
