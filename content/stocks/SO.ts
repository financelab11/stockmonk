import type { StockStory } from "./types";

export const SO: StockStory = {
  "ticker": "SO",
  "kicker": "Utilities · Regulated electric and gas",
  "title": "At Southern, negative free cash flow is the business model",
  "dek": "The company spends more on new plants and wires than it collects in depreciation, which is why it reports a minus $3.5B cash margin and still pays a dividend. A regulator, not a market, decides whether that works.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $30.2B trailing twelve months, +8.3% year over year.",
    "Profitability: 24.2% operating margin and 14.4% net margin.",
    "Cash: -$3.5B free cash flow, a -11.5% margin.",
    "Scorecard: 34/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/92122/000009212226000006/so-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000092122&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SOUTHERN CO. generated $30.2B of revenue over the last twelve months, +8.3% versus the prior year. Returns depend on regulated rates, capital investment and the cost of financing the asset base.",
      "The latest reported quarter was Q1 FY26, with $8.4B of revenue and an operating margin of 24.0%. The stock closed at $93.60 on 2026-11-17, giving a market capitalization of $109B.",
      "The shares sit 67% of the way up their 52-week range ($81.69 to $99.58). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A regulated utility converts capital spending into earnings, but only at the rate the commission allows and only after the spending is judged to be prudent."
  },
  "whatItDoes": {
    "paragraphs": [
      "The electric utilities generate, transmit and distribute power. Generation is a mix of gas, coal, nuclear and renewables; transmission moves bulk power across the region; distribution delivers it to homes and businesses. Each of those functions carries a different cost structure and a different regulatory treatment.",
      "The gas distribution business buys gas in the wholesale market and delivers it through local pipes. It earns a margin on delivery rather than on the commodity, so the customer's gas bill is mostly a pass-through with a regulated delivery charge attached.",
      "The customer base is the asset that cannot be replicated. Nine million meters in a growing region produce a predictable volume of sales, and a growing population means new connections and new capital investment without the company having to win a customer from a competitor."
    ],
    "bullets": [
      {
        "title": "Electric utilities",
        "detail": "Generation, transmission and distribution across the Southeast. The bulk of the rate base and most of the earnings."
      },
      {
        "title": "Gas distribution",
        "detail": "Local gas delivery to homes and businesses. Revenue is the delivery charge, not the commodity."
      },
      {
        "title": "Wholesale and other",
        "detail": "Sales to other utilities and industrial customers, plus smaller unregulated investments."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The first thing to understand is the strange margin pair. Southern reports a gross margin of negative 31.6% and an operating margin of 24.2%. That combination is possible because fuel and purchased power are large pass-through costs booked in cost of revenue, and the timing of when those costs are recognised does not always match when they are recovered from customers through the fuel clause.",
      "In plain terms, the gross line for a regulated utility says very little. The meaningful margin is the one the commission sets: the allowed return on rate base, plus recovery of costs the commission accepts as prudent. A negative gross margin and a healthy operating margin in the same year is an accounting presentation, not evidence that the company sells electricity below cost.",
      "The second thing to understand is that capital is the product. Every dollar invested in a new plant, a substation or a transmission line is a dollar of rate base that earns the allowed return once it enters service. The company's job is to make that investment useful and to persuade the regulator that it was needed."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 5.5% a year across the fiscal years in the dataset, and the latest quarter changed +8.0% year over year. Third-party estimates for the current fiscal year point to $31.1B of revenue and $4.64 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 24.2% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Rate base growth",
        "detail": "New capital entering service increases the asset base on which the allowed return is earned."
      },
      {
        "title": "Customer growth",
        "detail": "Population and business migration into the Southeast add meters and load without competing for them."
      },
      {
        "title": "Cost recovery",
        "detail": "Fuel clauses and formula rates shorten the lag between spending and recovering the cost."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 24.2%, the net margin is 14.4% and diluted EPS is $3.91. The latest quarter's operating margin was 24.0%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY26: revenue of $8.4B, an operating margin of 24.0% and a net margin of 16.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$3.5B, a -11.5% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 25.1x trailing earnings and 26.6x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $96.28; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "20 analysts contribute to the third-party consensus. The mean target is $96.28, with a range of $74.00 to $115.00.",
      "Current-year estimates call for $31.1B of revenue and $4.64 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 20 analysts with a mean target of $96.28; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Southern's risks are regulatory, constructional and financial. The territory and the demand are not in question; the return on the capital invested to serve them is.",
    "items": [
      {
        "title": "Rate-case outcomes",
        "severity": "High",
        "detail": "A ruling can strike out spending the company has already made, lower the return it is permitted to earn, or push recovery years into the future.",
        "watch": "Pending rate cases, the allowed return on equity in each state and any disallowance in the final order."
      },
      {
        "title": "Construction cost overruns",
        "severity": "High",
        "detail": "Large generating projects are approved years before completion. A delay or an overrun is borne by shareholders until the regulator decides otherwise.",
        "watch": "Capital cost estimates against budget, in-service dates and any prudency review."
      },
      {
        "title": "Financing cost",
        "severity": "Medium",
        "detail": "The company funds construction with debt and equity. Higher rates raise the cost of the capital before the allowed return adjusts.",
        "watch": "Interest expense, new debt issuance rates and the equity issuance plan."
      },
      {
        "title": "Weather and sales volume",
        "severity": "Medium",
        "detail": "A mild summer or winter reduces kilowatt-hour sales, and weather normalisation only adjusts part of the effect.",
        "watch": "Weather-normalised retail sales and degree-day comparisons."
      },
      {
        "title": "Fuel and commodity cost",
        "severity": "Medium",
        "detail": "Gas prices flow through the fuel clause with a lag. A sharp move creates a working-capital gap even when the cost is ultimately recovered.",
        "watch": "Under-recovered fuel balances and the timing of fuel-clause true-ups."
      }
    ],
    "watchlist": [
      {
        "title": "Rate base growth",
        "detail": "The asset base is the earnings engine. It should grow in line with the capital plan."
      },
      {
        "title": "Allowed return",
        "detail": "The authorised return on equity in each jurisdiction sets the ceiling on profitability."
      },
      {
        "title": "Equity issuance",
        "detail": "Selling shares to fund construction dilutes existing holders, so the size and price matter."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Southern is a large regulated utility with nine million customers, about 50 gigawatts of capacity and a long record of investing in its territory. Revenue of $30.2B, an operating margin of 24.2% and net income of $4.34B describe a stable, unspectacular business.",
      "The two numbers most likely to confuse a reader are the negative gross margin and the negative free cash flow. Neither is a distress signal. The first is a fuel-accounting artefact; the second is what a utility looks like when it is building faster than its assets depreciate.",
      "What matters is whether the commission allows a return above the cost of the capital being sunk into the territory. That question is answered in rate cases, not in the income statement, which is why the regulatory docket is more informative than the quarterly earnings release for this kind of company."
    ],
    "questions": [
      "What return on equity has each state commission allowed, and what has the company actually earned?",
      "How much of the construction programme is already included in rates?",
      "Why is the gross margin negative, and what does the fuel clause recover?",
      "How much equity will have to be issued to fund the capital plan?"
    ]
  }
};
