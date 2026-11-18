import type { StockStory } from "./types";

export const TOST: StockStory = {
  "ticker": "TOST",
  "kicker": "Fintech & Crypto · Application Software",
  "title": "Toast gets paid twice per restaurant: a subscription and a slice of card volume",
  "dek": "Revenue of $7.15B carries only a 27.0% gross margin because payment volume is recorded near gross. The operating margin has climbed from 5.1% to 8.3% as the installed restaurant base filled in.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $7.2B trailing twelve months, +22.1% year over year.",
    "Profitability: 7.2% operating margin and 7.7% net margin.",
    "Cash: $604M free cash flow, a 8.4% margin.",
    "Scorecard: 58/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001650164&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Toast, Inc. generated $7.2B of revenue over the last twelve months, +22.1% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $2B of revenue and an operating margin of 8.3%. The stock closed at $33.65 on 2026-11-17, giving a market capitalization of $19.6B.",
      "The shares sit 75% of the way up their 52-week range ($22.26 to $37.43). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The software is the wedge and the payments are the business. Every restaurant that installs a Toast terminal becomes a stream of card volume that Toast processes at a spread."
  },
  "whatItDoes": {
    "paragraphs": [
      "The hardware is a set of terminals, handhelds and kitchen displays, sold or leased to the restaurant. The software covers the parts of the day a restaurant has to manage: taking orders at the counter, sending tickets to the kitchen, running a delivery integration, tracking labour, and closing the books. The payments product authorises and settles the card transactions that flow through the same system.",
      "Toast also lends to its restaurant customers, which is a natural extension: it can see daily card volume and therefore has a real-time view of a borrower's revenue. That lending is small relative to payments but it is strategically important, because it deepens the relationship and gives the customer a reason not to switch.",
      "The customer base spans independent restaurants, multi-unit operators and franchise groups. Independents are numerous and cheap to reach through channel partners and referrals; multi-unit chains are fewer, larger and harder to win from incumbent systems. The mix between them determines both the average revenue per location and the churn rate."
    ],
    "bullets": [
      {
        "title": "Subscription software",
        "detail": "A recurring fee per location for the operating system. High margin, low revenue per customer, and the part that makes the product sticky."
      },
      {
        "title": "Payments",
        "detail": "A spread on card volume. The largest revenue line and the reason the consolidated gross margin looks like a processor's."
      },
      {
        "title": "Lending and add-ons",
        "detail": "Merchant cash advances, payroll, marketing and supplier tools. Small today, but each one raises the cost of leaving."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Payments revenue is recognised on the volume processed, with the card network and issuing bank costs sitting in cost of revenue. That is why the gross margin is 27.0%: the company keeps a spread on each transaction rather than the whole ticket. A restaurant doing $1M a year in card sales contributes a few percent of that as gross profit, plus a subscription fee per terminal.",
      "The operating leverage comes from the software layer. Once a restaurant is installed, the incremental cost of processing its payments is close to variable, but the cost of the platform, the sales channel and the support organisation is largely fixed. Each additional location spreads those costs further. That is what moved the operating margin from 5.1% in Q3 FY2025 to 8.3% in Q3 FY2026.",
      "The unit economics therefore hinge on two numbers a reader cannot see directly in the consolidated statements: revenue per location and the retention rate. Growing locations at a constant revenue per location produces linear growth; growing revenue per location through more products produces margin expansion on top of it."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 44.9% a year across the fiscal years in the dataset, and the latest quarter changed +21.3% year over year. Third-party estimates for the current fiscal year point to $7.5B of revenue and $1.44 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 7.2% and return on invested capital of 100.6% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 7.2%, the net margin is 7.7% and diluted EPS is $0.92. The latest quarter's operating margin was 8.3%.",
      "Return on equity is 24.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $2B, an operating margin of 8.3% and a net margin of 8.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $604M, a 8.4% margin. The balance sheet carries $1.9B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $604M over the last twelve months and net debt was -$1.9B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 35.5x trailing earnings and 31.4x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $38.89; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "27 analysts contribute to the third-party consensus. The mean target is $38.89, with a range of $27.00 to $45.00.",
      "Current-year estimates call for $7.5B of revenue and $1.44 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 27 analysts with a mean target of $38.89; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Toast's risks are the risks of its customers. Restaurants fail often, they are cyclical, and they negotiate hard when they get large.",
    "items": [
      {
        "title": "Restaurant closures and churn",
        "severity": "High",
        "detail": "A large share of the customer base is independent restaurants, a category with high failure rates. Closures remove both the subscription and the payment volume.",
        "watch": "Net location additions, which separate new wins from losses, rather than gross installs."
      },
      {
        "title": "Payments spread pressure",
        "severity": "Medium",
        "detail": "Large multi-unit operators can negotiate lower processing rates, and competitors bundle hardware cheaply to win them.",
        "watch": "Revenue as a percentage of processed volume and the mix between independent and chain locations."
      },
      {
        "title": "Competition from bundled terminals",
        "severity": "Medium",
        "detail": "Other terminal providers and software vendors sell overlapping products. Switching costs are real but not absolute, especially for a new restaurant.",
        "watch": "Win rates in multi-unit deals and any change in hardware subsidy."
      },
      {
        "title": "Credit risk on restaurant lending",
        "severity": "Medium",
        "detail": "Merchant advances are underwritten against daily card volume. A restaurant slowdown raises losses on that book.",
        "watch": "Loan book size, loss rates and provisioning for the lending product."
      },
      {
        "title": "Margin dependence on scale",
        "severity": "Medium",
        "detail": "The valuation assumes the operating margin keeps rising. If location growth slows, the fixed cost base becomes a drag rather than a lever.",
        "watch": "Operating margin against location growth: both need to move together."
      },
      {
        "title": "Hardware and integration execution",
        "severity": "Low",
        "detail": "Terminals, kitchen displays and delivery integrations have to work in a live service environment where downtime is measured in lost covers.",
        "watch": "Any increase in hardware subsidies or service credits."
      }
    ],
    "watchlist": [
      {
        "title": "Net location additions",
        "detail": "The growth engine. Gross installs hide churn; net additions do not."
      },
      {
        "title": "Operating margin",
        "detail": "The path from 8.3% toward the mid-teens is the entire valuation case."
      },
      {
        "title": "Revenue per location",
        "detail": "Rising revenue per location means more products are being sold to the same restaurant."
      },
      {
        "title": "Payments take rate",
        "detail": "The spread kept on card volume, which is where most of the gross profit comes from."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Toast is a restaurant software and payments company with $7.15B of trailing revenue, a 7.2% operating margin, $604.0M of free cash flow and $1.89B of net cash. It has grown revenue every year in the series and turned an operating loss of $228.0M in FY2021 into a profit of $292.0M in FY2025.",
      "The 27.0% gross margin is the number most likely to be misread. It is a consequence of recording payment volume near gross, not evidence that the software is cheap or the business is weak. On gross profit the company looks much more like a software business, and the operating margin trend is the proof that the model scales.",
      "The open question is how much more margin is available. At 8.3%, Toast keeps a modest share of each restaurant's spend. The valuation assumes that share rises as the installed base grows, which is plausible and not yet demonstrated."
    ],
    "questions": [
      "What were net location additions in the last four quarters, after closures?",
      "How much revenue does the average location generate per year, and is it rising?",
      "What share of locations are multi-unit operators, and how does their pricing differ?",
      "How large is the lending book and what losses is it carrying?"
    ]
  }
};
