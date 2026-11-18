import type { StockStory } from "./types";

export const CRCL: StockStory = {
  "ticker": "CRCL",
  "kicker": "Fintech & Crypto · Financial Services",
  "title": "Circle earns the interest on the cash behind its stablecoin",
  "dek": "Reserve income rises with coins in circulation and with short-term rates, and a large share of it is paid to distribution partners. That is why a 26.6% gross margin sits under a $17.4B market value.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $319.3M trailing twelve months, +323.6% year over year.",
    "Profitability: 107.4% operating margin and 145.0% net margin.",
    "Cash: $740.7M free cash flow, a 232.0% margin.",
    "Scorecard: 65/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
  "irUrl": "https://www.circle.com",
  "bigPicture": {
    "paragraphs": [
      "Circle Internet Group generated $319.3M of revenue over the last twelve months, +323.6% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $207.3M of revenue and an operating margin of 100.5%. The stock closed at $54.63 on 2026-11-17, giving a market capitalization of $14B.",
      "The shares sit 5% of the way up their 52-week range ($49.90 to $140.00). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A stablecoin issuer is a float business. The token is the liability, the reserve is the asset, and the spread between them is the revenue."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is the token: a digital dollar that can be transferred globally in minutes and used inside crypto markets without converting back to a bank deposit. Issuance and redemption are the plumbing — a customer mints tokens by sending dollars and redeems them by sending tokens back.",
      "Around the token sits a developer platform. Businesses use it to embed dollar accounts, cross-border payouts and settlement into their own products without building the compliance and custody themselves. That is the part of the business that looks like software: recurring fees, integration work, and a customer relationship that is not purely a function of interest rates.",
      "The customers are exchanges, fintech companies, payment providers, developers and, increasingly, enterprises that want to move money across borders. The token's usefulness grows with the number of places that accept it, which is why distribution partnerships matter so much — and why they can charge for access."
    ],
    "bullets": [
      {
        "title": "Reserve income",
        "detail": "Interest earned on the cash and short-term government securities backing the tokens. The largest revenue line."
      },
      {
        "title": "Distribution costs",
        "detail": "The share of reserve income paid to partners that hold and distribute the token. The reason gross margin is 26.6%."
      },
      {
        "title": "Platform and services",
        "detail": "APIs, integration and settlement products sold to businesses. Smaller, but less rate-sensitive."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The arithmetic is simple even if the accounting is not. Take the number of tokens in circulation, multiply by the yield earned on the reserves, and that is gross reserve income. Subtract the share paid to distribution partners, and what remains is the company's gross profit. A 26.6% gross margin says that roughly three-quarters of revenue leaves as distribution cost.",
      "That margin structure is the single most important fact about the business. It means revenue can grow quickly while profit grows slowly, because every new token issued through a partner carries a revenue share. Growth through the company's own channels would be more profitable but slower to acquire.",
      "The cost base below gross profit is people, compliance and technology. Those costs are largely fixed, so once gross profit covers them the operating margin expands quickly. The trailing operating margin of 24.1% and the quarterly swings between deeply negative and strongly positive show both the operating leverage and the instability of a business whose revenue moves with rates and circulation."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 135.2% a year across the fiscal years in the dataset, and the latest quarter changed +626.8% year over year. Third-party estimates for the current fiscal year point to $3B of revenue and $1.29 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 107.4% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 107.4%, the net margin is 145.0% and diluted EPS is $2.32. The latest quarter's operating margin was 100.5%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $207.3M, an operating margin of 100.5% and a net margin of 109.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $740.7M, a 232.0% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 30.3x trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $102.37; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "24 analysts contribute to the third-party consensus. The mean target is $102.37, with a range of $34.00 to $243.00.",
      "Current-year estimates call for $3B of revenue and $1.29 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 24 analysts with a mean target of $102.37; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Circle's risks are structural rather than operational. The business depends on a float it does not control, a spread set by short-term rates, and partners who take most of the gross profit.",
    "items": [
      {
        "title": "Short-term interest rates",
        "severity": "High",
        "detail": "Reserve income is the revenue model. A sustained fall in rates reduces revenue on the same float, and there is no cost offset.",
        "watch": "Reserve yield, the average float and the sensitivity disclosed for a rate change."
      },
      {
        "title": "Distribution partner economics",
        "severity": "High",
        "detail": "A 26.6% gross margin means most reserve income goes to partners. One renegotiation changes the profit materially.",
        "watch": "Distribution costs as a share of reserve income."
      },
      {
        "title": "Regulation of stablecoin issuance",
        "severity": "High",
        "detail": "Reserve composition, redemption rights and custody rules are all subject to change, and Circle's model depends on the current framework.",
        "watch": "Any change to permitted reserve assets or to the treatment of token holders in insolvency."
      },
      {
        "title": "Competition from other issuers",
        "severity": "Medium",
        "detail": "Bank-issued tokens and rival stablecoins compete for the same float. Distribution is the battlefield, and partners know it.",
        "watch": "Circulation growth against the growth of the overall stablecoin market."
      },
      {
        "title": "Redemption and reserve risk",
        "severity": "Medium",
        "detail": "The tokens are redeemable at par. Confidence in the reserve is the product, and a loss of confidence is not recoverable with marketing.",
        "watch": "Reserve composition, custody arrangements and attestation frequency."
      },
      {
        "title": "Revenue concentration",
        "severity": "Medium",
        "detail": "A small number of distribution partners can account for a large share of circulation and of the revenue share paid out.",
        "watch": "Partner concentration disclosure and the trend in gross margin."
      }
    ],
    "watchlist": [
      {
        "title": "Float growth",
        "detail": "Tokens in circulation are the base on which reserve income is earned."
      },
      {
        "title": "Reserve yield",
        "detail": "The rate earned on reserves, which moves with short-term interest rates rather than with company performance."
      },
      {
        "title": "Gross margin",
        "detail": "At 26.6% it captures the balance of power between Circle and its distribution partners."
      },
      {
        "title": "Platform revenue",
        "detail": "The fee-based line that does not depend on rates or float, and the best evidence of a durable business."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Circle is a stablecoin issuer with $319.3M of trailing revenue, a 26.6% gross margin, a 24.1% operating margin and $740.7M of free cash flow. The revenue is interest on the reserves behind its tokens, less the share paid to the partners that distribute them.",
      "That makes the business a float and a spread. Both are outside management's control in the short run: the float depends on adoption and the spread depends on short-term rates. What management controls is the share of reserve income retained and the growth of fee-based platform revenue.",
      "The valuation of $17.41B against a revenue base of this size assumes that both the float and the retained share hold. A reader should focus on the two variables that would break that assumption rather than on the quarterly revenue growth rate."
    ],
    "questions": [
      "How much of reserve income is retained after distribution costs, and is that share rising or falling?",
      "What happens to revenue if short-term rates fall by a percentage point?",
      "How concentrated is circulation among the largest distribution partners?",
      "How large is the fee-based platform revenue that does not depend on the float?"
    ]
  }
};
