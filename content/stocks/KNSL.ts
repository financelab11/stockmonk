import type { StockStory } from "./types";

export const KNSL: StockStory = {
  "ticker": "KNSL",
  "kicker": "Specialty Financials · Insurance - Property & Casualty",
  "title": "Kinsale's premium growth stalled while its earnings multiple stayed at 87.4x",
  "dek": "The latest quarter shrank 8.6% and the third-party consensus expects flat revenue for two years. A 33.7% operating margin against a 5.1% net margin explains why the earnings multiple is not what it appears.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $2B trailing twelve months, +8.3% year over year.",
    "Profitability: 33.7% operating margin and 5.1% net margin.",
    "Cash: $973M free cash flow, a 49.8% margin.",
    "Scorecard: 47/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1669162/000166916226000015/knsl-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001669162&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Kinsale Capital Group, Inc. generated $2B of revenue over the last twelve months, +8.3% versus the prior year. Underwriting discipline and reserve adequacy matter more than premium growth.",
      "The latest reported quarter was Q3 FY26, with $454.8M of revenue and an operating margin of 27.2%. The stock closed at $394.61 on 2026-11-17, giving a market capitalization of $8.9B.",
      "The shares sit 80% of the way up their 52-week range ($287.20 to $421.90). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "An insurer earns two ways: underwriting profit when premium exceeds claims and expenses, and investment income on the float held between collecting premium and paying claims."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is admitted and surplus lines property and casualty insurance for small and mid-sized commercial accounts, sold through wholesale brokers and managing general underwriters. Kinsale does not have a large field force; it relies on a technology platform and a handful of underwriting offices to process a high volume of small submissions.",
      "That distribution choice matters. Wholesale brokers specialise in placing hard risks, so they bring Kinsale submissions that other carriers have declined. The company's underwriters then price them individually. The volume of submissions is a function of how many risks the standard market is refusing, which is why the business accelerates when admitted carriers retrench.",
      "The expense ratio reflects the operating model: 329 employees producing $1.87B of premium means a great deal of automation and a small, specialised underwriting team. That is the structural reason Kinsale can earn an underwriting profit at prices where a larger, more bureaucratic carrier would not."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Premium is collected up front. Claims are paid later. The difference between the two is the float, and the insurer earns investment income on it while it waits. On top of that, if premium exceeds claims and expenses, the company records an underwriting profit. The two together are the pre-tax return, which is why insurers are described as combining an underwriting business and an investment business.",
      "The core measure is the combined ratio: losses plus expenses divided by premium. Below 100% is an underwriting profit, above 100% is a loss covered by investment income. Kinsale's operating margin of 33.7% is consistent with a business that has been running comfortably below 100%, though the consolidated figure also includes investment returns.",
      "Reinsurance is the lever that shapes the risk. An insurer cedes part of its premium to reinsurers in exchange for protection against large or catastrophic losses. Ceding reduces both the upside and the volatility. A company of this size cannot retain unlimited exposure on a single property, so the reinsurance programme is a material part of the economics even though it does not appear as a headline metric."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 34.5% a year across the fiscal years in the dataset, and the latest quarter changed -8.6% year over year. Third-party estimates for the current fiscal year point to $1.9B of revenue and $22.06 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 33.7% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Submission flow",
        "detail": "The volume of declined risks reaching wholesale brokers. It rises when admitted carriers pull back."
      },
      {
        "title": "Renewal pricing",
        "detail": "Rate achieved on business that renews. Flat or negative pricing erodes premium even with stable policy counts."
      },
      {
        "title": "Retention",
        "detail": "The share of policies that renew. A soft market tempts brokers to shop accounts elsewhere."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 33.7%, the net margin is 5.1% and diluted EPS is $22.94. The latest quarter's operating margin was 27.2%.",
      "Return on equity is 2793.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $454.8M, an operating margin of 27.2% and a net margin of 21.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $973M, a 49.8% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 89.9x trailing earnings and 49.2x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $354.56; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "9 analysts contribute to the third-party consensus. The mean target is $354.56, with a range of $285.00 to $405.00.",
      "Current-year estimates call for $1.9B of revenue and $22.06 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 9 analysts with a mean target of $354.56; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Kinsale's risks are underwriting risks. The company has been profitable because it prices difficult risks well; the question is whether that discipline survives a softer market.",
    "items": [
      {
        "title": "Reserve adequacy",
        "severity": "High",
        "detail": "Loss reserves are estimates of claims that have not yet been paid. If prior-year reserves prove short, the charge lands against current earnings, as the Q4 FY2025 net loss shows.",
        "watch": "Prior-year reserve development and the ratio of reserves to earned premium."
      },
      {
        "title": "Catastrophe exposure",
        "severity": "High",
        "detail": "Property and casualty cover carries concentration risk. A single event can exceed a quarter's underwriting profit.",
        "watch": "Probable maximum loss disclosure and the structure of the reinsurance programme."
      },
      {
        "title": "The excess and surplus cycle",
        "severity": "High",
        "detail": "Growth depends on admitted carriers refusing risks. When they return, submissions and pricing both fall, and the latest quarter already shows an 8.6% decline.",
        "watch": "Submission flow, renewal rate change and retention."
      },
      {
        "title": "Reinsurance availability and cost",
        "severity": "Medium",
        "detail": "The company cedes a large share of its risk. A harder reinsurance market raises the cost of protecting the book.",
        "watch": "Cession ratios and the price of reinsurance at renewal."
      },
      {
        "title": "Concentration in small commercial accounts",
        "severity": "Medium",
        "detail": "A book built on many small policies is diversified by count but exposed to a common factor: small-business conditions.",
        "watch": "Premium by line and by state, and any shift in the average policy size."
      },
      {
        "title": "Valuation on depressed earnings",
        "severity": "Medium",
        "detail": "At 87.4x earnings, the multiple depends on the net line recovering. If the charge in Q4 FY2025 recurs, the multiple stays high.",
        "watch": "The gap between operating income and net income each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Renewal rate change",
        "detail": "The single best measure of pricing power in a softening market."
      },
      {
        "title": "Prior-year reserve development",
        "detail": "Favourable development flatters earnings; adverse development is the fastest way to lose a year."
      },
      {
        "title": "Submission flow",
        "detail": "The leading indicator of premium growth, ahead of written premium by a quarter or more."
      },
      {
        "title": "Net margin against operating margin",
        "detail": "The gap explains why the P/E and the cash flow multiple disagree."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Kinsale is an excess and surplus lines insurer with $1.95B of trailing revenue, a 33.7% operating margin, a 5.1% net margin and $973.0M of free cash flow. It grew revenue from $653.5M to $1.87B in five years by writing risks the admitted market would not price.",
      "The growth has stopped. The latest quarter fell 8.6% and the consensus expects flat revenue for two years, which is what the end of a hard insurance cycle looks like. The company is still highly profitable on an operating basis; the question is how much of that margin survives when pricing power fades.",
      "The multiple confusion is instructive rather than mysterious. An 87.4x P/E and an 8.9x P/FCF describe the same company at the same price, and the difference is a charge below the operating line. A reader who wants to value an insurer has to look through that."
    ],
    "questions": [
      "What was prior-year reserve development in the last four quarters?",
      "How much rate was achieved on renewals in the latest quarter?",
      "What caused the Q4 FY2025 net loss, and is it recurring?",
      "How much of the book is ceded to reinsurers, and at what cost?"
    ]
  }
};
