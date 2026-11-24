import type { StockStory } from "./types";

export const CME: StockStory = {
  "ticker": "CME",
  "kicker": "Exchanges · Futures, options and clearing",
  "title": "CME Group runs the market where interest-rate risk gets priced",
  "dek": "Traders and hedgers pay a fee per contract to use the exchange and its clearing house. The cost of running the matching engine barely moves with volume, so a 65.7% operating margin and a 62.1% free-cash-flow margin are the natural result.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $7.0B grew 9.0% at a 65.7% operating margin, and free cash flow of $4.3B was 62.1% of revenue.",
    "Net cash of $2.3B and interest cover of 26.2x make this the least constrained balance sheet in the group.",
    "At 29.4x EV/EBITDA the shares carry the highest multiple in the peer set, against a 12.8x median.",
    "Consensus revenue growth slows from 8.7% in 2026 to 5.4% in 2027, with a 1.7% dividend yield and a 4.0% free-cash-flow yield."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1156375/000115637526000009/cme-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001156375&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "CME Group's revenue of $1.7B in the September quarter was 13% higher than a year earlier, and the operating margin was 65.7%. Net income was 59.7% of revenue and EPS was $2.89, against $2.49 a year earlier. Revenue was flat on the June quarter while the margin improved by 0.8 points, which is the fixed-cost model working: the platform handled a similar volume at a slightly better mix. It is also a thinner quarter than the March period, when revenue reached $1.9B.",
      "The franchise is listed derivatives across interest rates, equity indices, foreign exchange, energy, metals and agriculture, plus clearing and market data. Customers are banks hedging rate exposure, asset managers adjusting equity exposure and producers hedging commodities. CME takes no position; it charges per contract and, through the clearing house, collects margin and runs the default fund. Rates are the core product, which is why the rate cycle drives the revenue line.",
      "The shares carry 24.7x trailing earnings, 29.4x EV/EBITDA, 15.3x sales and 25.2x free cash flow, well above a 13.3x peer median and at the top of the group on EV/EBITDA. The comparison that matters is ICE at 23.2x, 16.8x and 18.3x. CME's premium buys a 65.7% operating margin, no net debt and a 4.0% free-cash-flow yield; ICE offers faster growth and more leverage. The 1.7% dividend yield is small next to the free cash flow the business produces."
    ],
    "quote": "CME turns 62.1% of revenue into free cash flow, and 29.4x EV/EBITDA is what the market pays for that conversion."
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
      "Revenue was $4.9B in FY2020, $4.7B in FY2021, $5.0B, $5.6B, $6.1B and $6.5B in FY2025, with $7.0B trailing. The 4.0% decline in FY2021 is the important data point: it shows what a quiet, low-volatility year does to a volume-based revenue line. Since then growth has compounded at 6-11% a year, and the trailing 9.0% is in the upper part of that range.",
      "The March 2026 quarter is the outlier, with $1.9B of revenue and a 69.7% operating margin; June and September settled at $1.7B and 64.9-65.7%. A volatility spike lifts volume without adding cost, so a single strong quarter can move the annual margin by a point. The annual figure therefore depends on how many such quarters a year contains, which is why the 2027 estimate matters more than the 2026 one.",
      "Consensus has FY2026 revenue at $7.1B, up 8.7%, and FY2027 at $7.5B, up 5.4%, with EPS of $12.40 and $13.24. The deceleration to 5.4% is the sell side assuming normal volatility rather than another spike. A 5.4% revenue year at a 65% margin still produces mid-single-digit EPS growth, and that is the base case the multiple has to justify against a 4.0% free-cash-flow yield."
    ],
    "bullets": [
      {
        "title": "Rate per contract",
        "detail": "Revenue is volume times fee, and the fee varies by product and by member status. Mix shifts toward lower-fee contracts can hold back revenue even when volume rises."
      },
      {
        "title": "Rates franchise",
        "detail": "Interest-rate futures are the largest product group. A change in the rate cycle or in hedging demand hits the core directly, which is the concentration risk inside the margin."
      },
      {
        "title": "Clearing",
        "detail": "The clearing house brings margin balances, a default fund and counterparty risk. It is the trust layer that keeps liquidity on the venue, and it is also the tail risk."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The margin record is unusually clean: 54.0% in FY2020, 56.4%, 60.1%, 61.6%, 64.1% and 64.9% in FY2025, with 65.7% trailing. Six years of steady expansion on revenue that grew 6-11% a year is operating leverage rather than pricing power, because the fee per contract has not obviously risen. Costs grew far more slowly than volume, and the margin absorbed the difference.",
      "Net margin is 63.3% trailing against 62.5% in FY2025. The gap between operating and net margin is small because there is almost no interest expense: net cash of $2.3B and interest cover of 26.2x. Return on equity is 16.6% and return on invested capital 13.2%, the latter held back by goodwill and the clearing house's capital rather than by operating weakness."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement was $4.3B, or 62.1% of revenue, and it is close to net income because there is almost nothing to reinvest: capex was $83.5M in FY2025, 1.3% of revenue. The matching engine, the data centres and the clearing systems are already built, and additional contracts cost very little to process. That is why the free-cash-flow margin has stayed near 60% for three years.",
      "Net cash of $2.3B means the balance sheet is not a constraint on capital returns. The 1.7% dividend yield is the visible payout, and the 4.0% free-cash-flow yield is the pool it comes from; the payout is not broken down between dividends and buybacks. With no debt to repay, the allocation question is how much cash to keep against clearing obligations.",
      "Clearing margin and default-fund balances sit outside the operating cash flow in principle, but they can still move the reported figure when client activity changes. The stability of the free-cash-flow margin across quarters suggests the conversion is genuine rather than a working-capital effect. At 25.2x free cash flow, that stability is most of what the market is buying, and the distinction matters when the yield is compared with a bank's."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Trailing multiples of 24.7x earnings, 29.4x EV/EBITDA, 15.3x sales and 25.2x free cash flow produce a 4.0% free-cash-flow yield. EV/EBITDA at 29.4x is the highest in the peer set, against a 12.8x median, and the P/E is at the 76th percentile. Those percentiles are inflated by a peer group of banks; against ICE, the relevant comparison, CME is at a premium on every line.",
      "Forward, FY2026 EPS of $12.40 is 24.6x and FY2027 EPS of $13.24 is 23.0x. The multiple barely de-rates, which means the price already assumes the 5.4% revenue growth and the 65% margin hold. A 4.0% free-cash-flow yield plus mid-single-digit growth is a low-teens expected return, which is a fair description of a utility-like toll business rather than a cheap stock.",
      "The risk is symmetric operating leverage. A 10% fall in revenue would take operating income down by roughly the same proportion, but the fixed cost base does not flex, so the margin would fall faster than revenue. FY2021's 4.0% revenue decline is the template, and a volatility spike would do the opposite. At 23x forward, the multiple is a bet on market conditions as much as on the franchise."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Yahoo Finance's 18 November 2026 survey, covers 16 analysts with a mean target of $317 and a range of $227 to $367. The mean is 4% above the last price and the low end 26% below it, the widest downside in this group.",
      "Revisions are small and positive: 0.8% over 30 days and 1.2% over 60. Quarterly estimates are tightly calibrated, with a one-cent miss in March and a three-cent beat in September, so the dispersion is about the cycle rather than the quarter. Consensus assumes FY2026 EPS of $12.40 and FY2027 of $13.24, which implicitly assumes trading volumes stay near current levels without another volatility spike."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
