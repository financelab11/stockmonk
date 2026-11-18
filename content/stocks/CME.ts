import type { StockStory } from "./types";

export const CME: StockStory = {
  "ticker": "CME",
  "kicker": "Exchanges · Futures, options and clearing",
  "title": "CME Group runs the market where interest-rate risk gets priced",
  "dek": "Traders and hedgers pay a fee per contract to use the exchange and its clearing house. The cost of running the matching engine barely moves with volume, so a 65.7% operating margin and a 62.1% free-cash-flow margin are the natural result.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $7B trailing twelve months, +9.0% year over year.",
    "Profitability: 65.7% operating margin and 63.3% net margin.",
    "Cash: $4.3B free cash flow, a 62.1% margin.",
    "Scorecard: 60/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1156375/000115637526000009/cme-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001156375&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "CME Group Inc. generated $7B of revenue over the last twelve months, +9.0% versus the prior year. The earnings cycle is driven by net interest income, credit costs, capital markets activity and capital returns.",
      "The latest reported quarter was Q3 FY26, with $1.7B of revenue and an operating margin of 65.7%. The stock closed at $311.56 on 2026-11-17, giving a market capitalization of $111.5B.",
      "The shares sit 84% of the way up their 52-week range ($218.31 to $329.16). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "An exchange is a fixed-cost factory with a variable revenue line. Once the platform is built, every additional contract is almost pure profit — until volumes fall and the fixed cost stays."
  },
  "whatItDoes": {
    "paragraphs": [
      "The exchange business matches buyers and sellers of standardized contracts. Customers range from the largest banks hedging interest-rate exposure to farmers hedging grain prices to asset managers adjusting equity exposure. CME does not take a market position; it provides the rules, the matching engine and the price discovery, and earns a fee per contract.",
      "Clearing and settlement sit alongside the exchange. The clearing house collects margin, manages the default fund and ensures that a winning trade is paid. That requires capital and risk management, but it also creates a network effect: the more participants clear at CME, the more valuable membership becomes.",
      "Market data and other services add a smaller, recurring revenue stream. The exchange is the official source for its own settlement prices, which are used by funds, auditors and risk systems around the world. That data is sold on subscription and is far less volatile than trading volume."
    ],
    "bullets": [
      {
        "title": "Listed derivatives",
        "detail": "Interest-rate, equity-index, FX, energy, metals and agricultural futures and options."
      },
      {
        "title": "Clearing",
        "detail": "Central counterparty services, margin and default-fund management. The trust layer."
      },
      {
        "title": "Market data and services",
        "detail": "Settlement prices, reference data and connectivity sold on subscription."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The core fee is charged per contract, with different rates for members and non-members and for different product groups. Revenue therefore depends on three things: the number of contracts traded, the mix between high-fee and low-fee products, and the rate per contract. A surge in volatility can lift volume sharply; a quiet market can leave the platform idle.",
      "The cost structure is the source of the margin. The matching engine, the clearing systems, the data centres and the regulatory staff are largely fixed. Adding a million contracts does not require a million dollars of new cost, so incremental revenue drops through to profit. That is why operating margin is 65.7% and why it can move by several points when volume changes.",
      "The competitive position is liquidity and clearing. A trader goes where the liquidity is, and liquidity attracts more liquidity. Competing exchanges can list similar contracts, but building the same depth and the same clearing membership takes years. The moat is strongest in interest-rate futures, where CME is the benchmark venue."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 5.0% a year across the fiscal years in the dataset, and the latest quarter changed +13.0% year over year. Third-party estimates for the current fiscal year point to $7.1B of revenue and $12.40 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 65.7% and return on invested capital of 13.1% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Volatility",
        "detail": "Higher volatility brings more hedging and trading volume, which lifts fee revenue."
      },
      {
        "title": "Product expansion",
        "detail": "New contracts and clearing services extend the franchise beyond the core rates business."
      },
      {
        "title": "Price per contract",
        "detail": "Modest fee increases compound across a very large volume base."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 65.7%, the net margin is 63.3% and diluted EPS is $12.19. The latest quarter's operating margin was 65.7%.",
      "Return on equity is 16.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.7B, an operating margin of 65.7% and a net margin of 59.7%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $4.3B, a 62.1% margin. Net debt is $1.1B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $4.3B over the last twelve months and net debt was $1.1B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 25.3x trailing earnings and 23.7x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $317.06; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "16 analysts contribute to the third-party consensus. The mean target is $317.06, with a range of $227.00 to $367.00.",
      "Current-year estimates call for $7.1B of revenue and $12.40 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 16 analysts with a mean target of $317.06; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "CME's risks are volume, regulation and systemic. The balance sheet is conservatively positioned, so the main threat is a quiet market or a regulatory change, not a funding crisis.",
    "items": [
      {
        "title": "Low volatility and volumes",
        "severity": "High",
        "detail": "Revenue depends on trading activity. A prolonged calm market reduces hedging and speculative volume while the cost base stays fixed.",
        "watch": "Average daily volume, open interest and volatility levels."
      },
      {
        "title": "Regulation of derivatives",
        "severity": "High",
        "detail": "Position limits, margin rules and clearing requirements can change the economics of certain contracts or push volume to other venues.",
        "watch": "Regulatory proposals, position-limit changes and cross-border recognition."
      },
      {
        "title": "Competition from other venues",
        "severity": "Medium",
        "detail": "Other exchanges can list similar contracts and compete on fees. Liquidity is sticky, but not permanently so.",
        "watch": "Market share by product and fee per contract."
      },
      {
        "title": "Clearing-house risk",
        "severity": "Medium",
        "detail": "A member default in a stressed market could test the default fund and the clearing house's risk management.",
        "watch": "Default-fund size, margin coverage and stress-test disclosures."
      },
      {
        "title": "Product concentration",
        "severity": "Medium",
        "detail": "Interest-rate futures are the largest product group. A change in the rate cycle or in hedging demand would hit the core.",
        "watch": "Revenue mix by product and rate-futures volume."
      }
    ],
    "watchlist": [
      {
        "title": "Average daily volume",
        "detail": "The primary driver of transaction revenue."
      },
      {
        "title": "Rate per contract",
        "detail": "The pricing lever, and the part competitors can attack."
      },
      {
        "title": "Clearing margin and default fund",
        "detail": "The risk buffer that supports the exchange's systemic role."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "CME Group is a high-margin exchange and clearing business with a conservatively financed balance sheet. The 65.7% operating margin, 63.3% net margin and 62.1% free-cash-flow margin are the economics of a fixed-cost platform with a fee per contract.",
      "The teaching point is that an exchange is not a bank. It takes no credit risk, holds little corporate debt and earns a toll on activity. ROE and ROIC are useful, but volume, rate per contract and clearing risk are the operating variables that explain the business.",
      "The open questions are whether trading volumes are structurally higher or cyclically elevated, and how much regulatory change the core rates franchise can absorb."
    ],
    "questions": [
      "How much of revenue comes from interest-rate futures?",
      "What happens to earnings if average daily volume falls 20%?",
      "Is the fee per contract rising or being competed away?",
      "How large is the clearing default fund relative to plausible member losses?"
    ]
  }
};
