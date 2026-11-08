import type { StockStory } from "./types";

export const CME: StockStory = {
  ticker: "CME",
  kicker: "Exchanges · Futures, options and clearing",
  title: "CME Group runs the market where interest-rate risk gets priced",
  dek: "Traders and hedgers pay a fee per contract to use the exchange and its clearing house. The cost of running the matching engine barely moves with volume, so a 65.7% operating margin and a 62.1% free-cash-flow margin are the natural result.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $7.0B, up 9.0%, and the latest quarter grew 13.0%.",
    "Operating margin is 65.7%, net margin is 63.3% and free cash flow is $4.3B, a 62.1% margin.",
    "Return on equity is 16.6% and net debt is only $1.1B, or 0.2x EBITDA.",
    "At $305.89 the shares trade at 24.9x trailing earnings and 23.4x EV/EBITDA, a premium to ICE at 23.1x and 16.3x.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1156375/000115637526000009/cme-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001156375&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "CME Group operates futures and options exchanges and a clearing house. Its largest products are interest-rate futures, equity-index contracts, foreign exchange, energy, metals and agricultural commodities. Banks, asset managers, corporations and proprietary traders use the venue to hedge or to take a view, and they pay a fee for each contract that clears.",
      "The clearing house is as important as the exchange. It stands between buyer and seller, manages the default fund and ensures that a winning trade is paid. That function is what makes the exchange systemically important and what gives it a durable position: participants need a clearing house they trust, and trust is hard to build from scratch.",
      "Trailing revenue of $6.97B is 9.0% higher than a year earlier, and the latest quarter grew 13.0%. Operating margin is 65.7%, net margin is 63.3% and free cash flow is $4.33B. At $305.89 the equity is worth $109.8B, or 24.9x trailing earnings. The shares sit 79% of the way up a 52-week range of $218.31 to $329.16.",
    ],
    quote:
      "An exchange is a fixed-cost factory with a variable revenue line. Once the platform is built, every additional contract is almost pure profit — until volumes fall and the fixed cost stays.",
  },
  whatItDoes: {
    paragraphs: [
      "The exchange business matches buyers and sellers of standardized contracts. Customers range from the largest banks hedging interest-rate exposure to farmers hedging grain prices to asset managers adjusting equity exposure. CME does not take a market position; it provides the rules, the matching engine and the price discovery, and earns a fee per contract.",
      "Clearing and settlement sit alongside the exchange. The clearing house collects margin, manages the default fund and ensures that a winning trade is paid. That requires capital and risk management, but it also creates a network effect: the more participants clear at CME, the more valuable membership becomes.",
      "Market data and other services add a smaller, recurring revenue stream. The exchange is the official source for its own settlement prices, which are used by funds, auditors and risk systems around the world. That data is sold on subscription and is far less volatile than trading volume.",
    ],
    bullets: [
      {
        title: "Listed derivatives",
        detail:
          "Interest-rate, equity-index, FX, energy, metals and agricultural futures and options.",
      },
      {
        title: "Clearing",
        detail:
          "Central counterparty services, margin and default-fund management. The trust layer.",
      },
      {
        title: "Market data and services",
        detail:
          "Settlement prices, reference data and connectivity sold on subscription.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The core fee is charged per contract, with different rates for members and non-members and for different product groups. Revenue therefore depends on three things: the number of contracts traded, the mix between high-fee and low-fee products, and the rate per contract. A surge in volatility can lift volume sharply; a quiet market can leave the platform idle.",
      "The cost structure is the source of the margin. The matching engine, the clearing systems, the data centres and the regulatory staff are largely fixed. Adding a million contracts does not require a million dollars of new cost, so incremental revenue drops through to profit. That is why operating margin is 65.7% and why it can move by several points when volume changes.",
      "The competitive position is liquidity and clearing. A trader goes where the liquidity is, and liquidity attracts more liquidity. Competing exchanges can list similar contracts, but building the same depth and the same clearing membership takes years. The moat is strongest in interest-rate futures, where CME is the benchmark venue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $4.69B in FY2021 to $6.52B in FY2025, a steady climb with no down year in the series. Operating income rose from $2.65B to $4.23B. The growth came from higher volumes, new products and price increases, and the latest quarter's 13.0% growth shows the trend continuing.",
      "Consensus estimates call for $7.09B of revenue and $12.40 of EPS this fiscal year, then $7.47B and $13.23 next year. That revenue path is modest for a company trading at 24.9x earnings, while the EPS path is steeper and relies on buybacks as well as volume.",
      "The durable drivers are global hedging demand, the growth of interest-rate derivatives and the expansion of clearing. The brakes are low volatility, regulatory limits on certain contracts, and competition from other venues. Volume is the swing factor, and volume is notoriously hard to forecast.",
    ],
    bullets: [
      {
        title: "Volatility",
        detail:
          "Higher volatility brings more hedging and trading volume, which lifts fee revenue.",
      },
      {
        title: "Product expansion",
        detail:
          "New contracts and clearing services extend the franchise beyond the core rates business.",
      },
      {
        title: "Price per contract",
        detail:
          "Modest fee increases compound across a very large volume base.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 65.7%, net margin is 63.3% and diluted EPS is $12.19. Return on equity is 16.6% and return on invested capital is 13.1%. The ROE is lower than the margin might suggest because the clearing house must hold capital and because the company carries goodwill and intangibles from acquisitions.",
      "The annual record is unusually consistent: revenue of $4.69B, $5.02B, $5.58B, $6.13B and $6.52B, with net income rising from $2.64B to $4.07B. There is no loss year in the series, which is rare for a financial business and reflects the fee-based, non-lending model. Quarterly margins ranged from 61.8% to 69.7% over the last six quarters, and EPS moved between $2.49 and $3.24; the variation is mostly volume and product mix, not cost, so the margin should stay high without expanding indefinitely.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.33B on $6.97B of revenue, a 62.1% margin. Capital expenditure is modest relative to revenue because the platform is software and data centres. The company converts most of its operating profit into cash, which supports a large dividend and a steady buyback.",
      "Net debt is $1.10B, or 0.2x EBITDA. That is a very comfortable position and a stark contrast with ICE's $22.4B. The clearing house holds margin deposits and default-fund resources that are not corporate debt; those balances are segregated and should not be read as leverage.",
      "Capital return is the main use of cash. CME pays a substantial dividend and buys back stock, and it has little need for acquisitions to sustain growth. The constraint is the clearing house's regulatory capital and the margin requirements of the exchanges, not the parent's ability to generate cash.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $305.89, CME trades at 24.9x trailing earnings, 23.4x EV/EBITDA, 15.9x sales and 25.3x free cash flow. ICE trades at 23.1x earnings and 16.3x EV/EBITDA, so CME is more expensive on both measures. The premium reflects the higher margin and the cleaner balance sheet.",
      "The peer table puts Visa at 37.1x earnings and Mastercard at 33.5x, while the banks trade between 10.6x and 13.9x. CME sits between the networks and the banks: a fee-based business with a strong moat, but with revenue tied to trading volume rather than to consumer spending.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context. At 24.9x, the multiple assumes volumes hold and the dividend keeps growing; a sustained drop in volatility would test both assumptions.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed consensus, with a mean target of $317.06 and a range of $227.00 to $367.00. The range is wide for a company with such stable margins, which shows how much of the debate is about trading volume rather than about the business model.",
      "Estimates call for $12.40 of EPS this fiscal year and $13.23 next year, with 16 and 17 analysts contributing. The revenue estimates are $7.09B and $7.47B, implying low-single-digit growth and a reliance on buybacks for EPS growth.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for an exchange the volume assumption is the variable that matters most.",
    ],
  },
  risks: {
    intro:
      "CME's risks are volume, regulation and systemic. The balance sheet is conservatively positioned, so the main threat is a quiet market or a regulatory change, not a funding crisis.",
    items: [
      {
        title: "Low volatility and volumes",
        severity: "High",
        detail:
          "Revenue depends on trading activity. A prolonged calm market reduces hedging and speculative volume while the cost base stays fixed.",
        watch: "Average daily volume, open interest and volatility levels.",
      },
      {
        title: "Regulation of derivatives",
        severity: "High",
        detail:
          "Position limits, margin rules and clearing requirements can change the economics of certain contracts or push volume to other venues.",
        watch:
          "Regulatory proposals, position-limit changes and cross-border recognition.",
      },
      {
        title: "Competition from other venues",
        severity: "Medium",
        detail:
          "Other exchanges can list similar contracts and compete on fees. Liquidity is sticky, but not permanently so.",
        watch: "Market share by product and fee per contract.",
      },
      {
        title: "Clearing-house risk",
        severity: "Medium",
        detail:
          "A member default in a stressed market could test the default fund and the clearing house's risk management.",
        watch:
          "Default-fund size, margin coverage and stress-test disclosures.",
      },
      {
        title: "Product concentration",
        severity: "Medium",
        detail:
          "Interest-rate futures are the largest product group. A change in the rate cycle or in hedging demand would hit the core.",
        watch: "Revenue mix by product and rate-futures volume.",
      },
    ],
    watchlist: [
      {
        title: "Average daily volume",
        detail: "The primary driver of transaction revenue.",
      },
      {
        title: "Rate per contract",
        detail: "The pricing lever, and the part competitors can attack.",
      },
      {
        title: "Clearing margin and default fund",
        detail: "The risk buffer that supports the exchange's systemic role.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "CME Group is a high-margin exchange and clearing business with a conservatively financed balance sheet. The 65.7% operating margin, 63.3% net margin and 62.1% free-cash-flow margin are the economics of a fixed-cost platform with a fee per contract.",
      "The teaching point is that an exchange is not a bank. It takes no credit risk, holds little corporate debt and earns a toll on activity. ROE and ROIC are useful, but volume, rate per contract and clearing risk are the operating variables that explain the business.",
      "The open questions are whether trading volumes are structurally higher or cyclically elevated, and how much regulatory change the core rates franchise can absorb.",
    ],
    questions: [
      "How much of revenue comes from interest-rate futures?",
      "What happens to earnings if average daily volume falls 20%?",
      "Is the fee per contract rising or being competed away?",
      "How large is the clearing default fund relative to plausible member losses?",
    ],
  },
};
