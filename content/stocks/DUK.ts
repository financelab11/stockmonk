import type { StockStory } from "./types";

export const DUK: StockStory = {
  "ticker": "DUK",
  "kicker": "Utilities · Regulated electric and gas",
  "title": "Duke Energy's 6.9x trailing P/E is an artefact, not a bargain",
  "dek": "One quarter reported more than twice the normal revenue and seven times the normal profit. Strip that out and the picture is a $32B regulated utility earning roughly $5B a year, which is a different company from the one the multiples describe.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $42.6B trailing twelve months, +36.4% year over year.",
    "Profitability: 44.1% operating margin and 34.0% net margin.",
    "Cash: -$3.7B free cash flow, a -8.7% margin.",
    "Scorecard: 56/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1326160/000132616026000014/duk-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001326160&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Duke Energy CORP. generated $42.6B of revenue over the last twelve months, +36.4% versus the prior year. Returns depend on regulated rates, capital investment and the cost of financing the asset base.",
      "The latest reported quarter was Q3 FY26, with $18.2B of revenue and an operating margin of 65.0%. The stock closed at $129.84 on 2026-11-17, giving a market capitalization of $101.2B.",
      "The shares sit 79% of the way up their 52-week range ($112.40 to $134.49). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Before using any trailing multiple, check whether the trailing period contains a quarter that does not belong. In regulated utilities, one unusual quarter can make a 20x business look like a 7x one."
  },
  "whatItDoes": {
    "paragraphs": [
      "The electric utilities generate, transmit and distribute power to millions of retail customers under state-regulated tariffs. The gas utilities distribute natural gas for heating and industrial use, earning a delivery margin rather than a commodity margin. Commercial renewables owns and contracts renewable generation, some of it sold to third parties rather than to regulated customers.",
      "The regulated segments are the core. A commission sets the rates, and those rates are designed to recover operating costs plus a return on the capital invested in the system. The customer has no alternative supplier, and the company has no competitor to lose share to. In exchange, the company accepts a regulated return and must justify its spending.",
      "The commercial renewables segment operates differently. It sells power under contracts and takes construction and offtake risk, which is why it is usually a small share of earnings even when it is a large share of the headlines."
    ],
    "bullets": [
      {
        "title": "Electric utilities and infrastructure",
        "detail": "Generation, transmission and distribution in regulated territories. The largest share of the asset base and of group earnings."
      },
      {
        "title": "Gas utilities and infrastructure",
        "detail": "Local gas distribution. Revenue is the delivery charge, and the commodity is largely passed through."
      },
      {
        "title": "Commercial renewables",
        "detail": "Contracted wind, solar and storage. Smaller earnings, more construction and offtake risk."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The earnings equation is the asset base, times the return the commission authorises, plus recovery of approved operating costs. Rate base grows when the company invests in plants, poles, pipes and software. The regulator decides how much of that investment enters the base and what return it earns.",
      "That is why the reported margins look odd. Duke's gross margin is 5.5% while its operating margin is 44.1%, and the trailing net margin of 34.0% is above both. For a utility, the gross line is dominated by fuel and purchased power that are largely passed through, so it is not a measure of pricing power. The operating margin is distorted by the same unusual quarter that inflated revenue.",
      "The useful measure is not a margin at all. It is the spread between the allowed return on equity and the cost of the debt and equity used to finance the rate base. A utility that earns 9.5% on equity and finances at 7% creates value; one that earns 9% and finances at 9% does not, no matter how large the rate base grows."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 4.5% a year across the fiscal years in the dataset, and the latest quarter changed +117.4% year over year. Third-party estimates for the current fiscal year point to $33.8B of revenue and $6.75 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 44.1% and return on invested capital of 61.2% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Rate base growth",
        "detail": "Capital invested in regulated assets earns the allowed return once it enters service and is accepted into rates."
      },
      {
        "title": "Load growth",
        "detail": "Data centres and electrification raise long-run demand, which supports new generation and transmission investment."
      },
      {
        "title": "Cost recovery mechanisms",
        "detail": "Riders and formula rates reduce the wait between paying for something and being paid for it."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 44.1%, the net margin is 34.0% and diluted EPS is $4.85. The latest quarter's operating margin was 65.0%.",
      "Return on equity is 114.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $18.2B, an operating margin of 65.0% and a net margin of 58.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$3.7B, a -8.7% margin. Net debt is $11.5B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$3.7B over the last twelve months and net debt was $11.5B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 7.0x trailing earnings and 9.0x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $132.87; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "19 analysts contribute to the third-party consensus. The mean target is $132.87, with a range of $121.00 to $145.00.",
      "Current-year estimates call for $33.8B of revenue and $6.75 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 19 analysts with a mean target of $132.87; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Duke's risks are the standard regulated-utility set: what the commission allows, what the construction costs, and what the financing costs. The demand for electricity in its territories is not the problem.",
    "items": [
      {
        "title": "Regulatory outcomes",
        "severity": "High",
        "detail": "A commission can cut the authorised return, strike out spending it considers unnecessary, or stretch the recovery period over more years.",
        "watch": "Filed cases, settlement offers and the authorised return in each state."
      },
      {
        "title": "Construction cost and schedule",
        "severity": "High",
        "detail": "Large generation and transmission projects are approved years before completion. Overruns are borne by shareholders until a regulator rules otherwise.",
        "watch": "Capital cost estimates, in-service dates and any prudency proceedings."
      },
      {
        "title": "Financing cost",
        "severity": "Medium",
        "detail": "Negative free cash flow has to be funded. Higher interest rates raise the cost of that funding before rates adjust.",
        "watch": "New debt issuance rates, the maturity schedule and any equity issuance."
      },
      {
        "title": "Weather and sales",
        "severity": "Medium",
        "detail": "Heating and cooling demand drive volumes, and a mild season reduces revenue that the rate design only partly recovers.",
        "watch": "Weather-normalised sales and degree-day comparisons."
      },
      {
        "title": "Accounting complexity",
        "severity": "Medium",
        "detail": "A single quarter can move every trailing ratio by a wide margin. Readers who take the headline multiples at face value will misjudge the valuation.",
        "watch": "One-off items in the quarterly results, and the gap between the trailing figures and the fiscal-year estimates."
      }
    ],
    "watchlist": [
      {
        "title": "Allowed return versus cost of capital",
        "detail": "The spread between what the commission allows and what the debt costs is the value creation test."
      },
      {
        "title": "Rate base",
        "detail": "The asset base should grow in line with the capital plan, and every dollar of it should be earning."
      },
      {
        "title": "Normalised earnings",
        "detail": "Use the fiscal-year figures, not the trailing ones, until the unusual quarter drops out of the comparison."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Duke Energy is a large regulated utility with a constructive service territory and a capital plan that should keep the rate base growing. The FY2025 results, with $31.74B of revenue and $4.97B of net income, describe a stable business earning a regulated return.",
      "The reporting in the trailing period does not describe that business. One quarter carried more than twice the normal revenue and roughly seven times the normal profit, and every trailing ratio inherited the distortion. The 6.9x P/E and the 114.2% return on equity are the most obvious symptoms.",
      "The lesson is procedural as much as analytical. Before comparing a utility's multiple with its peers, check whether the trailing period is representative. In a business where earnings are set by regulators and move slowly, a single anomalous quarter is a strong signal that the denominator is wrong."
    ],
    "questions": [
      "What caused the Q3 FY26 revenue and earnings spike, and will it recur?",
      "What return on equity is allowed in each jurisdiction, and what has actually been earned?",
      "How much of the capital plan is already reflected in rates?",
      "What does the financing plan imply for dilution and interest cost?"
    ]
  }
};
