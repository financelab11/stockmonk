import type { StockStory } from "./types";

export const GS: StockStory = {
  ticker: "GS",
  kicker: "Investment banks · Advisory, markets and asset management",
  title: "Goldman Sachs is a fee machine wrapped in a balance sheet",
  dek: "The firm earns advisory and underwriting fees, trades for clients and takes principal risk, then manages money for institutions and wealthy families. Its negative free cash flow is a feature of that model, not a sign of distress.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $69.7B, up 18.7%, and the latest quarter grew 23.0% year over year.",
    "Return on equity is 17.7% and the operating margin is 40.0%, both strong for a securities firm.",
    "Free cash flow of -$40.0B is a balance-sheet effect from trading and secured financing, not an operating cash burn.",
    "At $865.82 the shares trade at 11.3x trailing earnings, a discount to Morgan Stanley and JPMorgan in the peer table.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/886982/000088698226000091/gs-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000886982&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Goldman Sachs sits at the centre of capital markets. Companies hire it to sell shares, raise debt and negotiate mergers; investors pay it to execute trades and finance positions; institutions and wealthy clients pay it to manage money. Each activity produces fees or spreads, and several of them require the firm to carry inventory and collateral on its own balance sheet.",
      "Trailing revenue of $69.7B is 18.7% above the prior year, and the latest quarter grew 23.0%. Return on equity is 17.7%, which is close to what a well-run investment bank can earn when capital markets are open. The catch is that the same franchise produced far less revenue two years earlier, when deal activity stalled.",
      "At $865.82 the market values the equity at $249.7B, or 11.3x trailing earnings. The shares sit 28% of the way up a 52-week range of $754.00 to $1,153.99. A five-year holder is up 139.3%, a one-year holder 12.1%: the long-run compounding is real, but the path is a series of fee cycles.",
    ],
    quote:
      "The investment bank does not sell a product that customers need every day. It sells access to capital and liquidity at the moments when those things are scarce, and it gets paid accordingly.",
  },
  whatItDoes: {
    paragraphs: [
      "Investment banking is the advisory and underwriting arm. It earns fees when a client announces a merger, issues equity or sells bonds. Those fees are lumpy and event-driven: a single large transaction can move a quarter, and a quiet market can leave the pipeline intact but unbilled.",
      "Global Markets is the trading and financing business. It makes markets in fixed income, currencies, commodities and equities, and lends securities and cash to clients. This is where the balance sheet is largest and where revenue depends on client flow, volatility and the firm's willingness to take risk. Asset & Wealth Management earns fees on managed assets and private-banking relationships, which is the most recurring revenue in the mix.",
      "The firm employs 40,500 people, and compensation is the single largest cost. That creates a distinctive operating model: revenue is split between the people who generate it and the shareholders, and the split is renegotiated every year. When revenue falls, management can cut the compensation ratio, but the best bankers and traders have alternatives.",
    ],
    bullets: [
      {
        title: "Advisory and underwriting",
        detail:
          "M&A fees, equity and debt issuance. Event-driven, high-margin and cyclical.",
      },
      {
        title: "Markets and financing",
        detail:
          "Client trading, market-making and secured lending. Balance-sheet intensive and sensitive to volatility.",
      },
      {
        title: "Asset and wealth management",
        detail:
          "Fees on managed assets and private-banking services. Smaller revenue, but more recurring and less capital-hungry.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model is a set of tolls on capital-market activity. Advisory fees are a percentage of deal value; underwriting fees are a percentage of securities sold; trading revenue is the spread between bid and offer plus the profit or loss on inventory; asset-management fees are a percentage of assets. There is no single price list, which is why the mix shifts with the cycle.",
      "The cost structure is dominated by compensation and technology. Compensation is deliberately variable, so gross operating margin can stay in the high 30s even when revenue drops. Technology and compliance costs are largely fixed and have risen as a share of revenue across the industry. The operating leverage is therefore weaker than it looks: the firm can protect the margin by cutting pay, but it cannot cut the platform.",
      "Geography matters less than client type. The largest customers are corporations, institutional investors, sovereign wealth funds and family offices. They buy the whole relationship — financing, hedging, advice, research — rather than a single product, which is why the franchise survives bad years. The relationship is also why losing senior bankers can cost more than losing a single deal.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue is cyclical, not steadily compounding. It fell from $59.34B in FY2021 to $47.37B in FY2022 and $46.25B in FY2023 as deal activity and trading calmed, then recovered to $53.51B in FY2024 and $58.28B in FY2025. The trailing $69.7B shows the recovery extending into the current year, helped by a strong Q2 FY26 with $20.34B of revenue.",
      "Consensus estimates call for $73.34B of revenue and $71.46 of EPS this fiscal year, then $74.28B and $74.63 next year. The revenue growth implied is modest, while the EPS growth is thin — a signal that analysts expect the revenue base to hold but costs and the share count to do the rest. That is a different bet from the one embedded in a high-growth multiple.",
      "The drivers to watch are the deal pipeline, equity and debt issuance volumes, volatility in rates and currencies, and the asset-management fee base. The brakes are a closed IPO market, a merger drought, a trading accident or a regulatory capital charge that forces the firm to shrink its markets book.",
    ],
    bullets: [
      {
        title: "Capital-market activity",
        detail:
          "Advisory and underwriting fees recover when boards are confident enough to transact.",
      },
      {
        title: "Client flow and volatility",
        detail:
          "Trading revenue rises when clients need to hedge or reposition, and falls when markets are quiet.",
      },
      {
        title: "Asset gathering",
        detail:
          "Wealth and asset-management fees grow with markets and net new assets, smoothing the cycle.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The trailing operating margin is 40.0%, the net margin is 31.8% and diluted EPS is $69.53. Return on equity of 17.7% is the cleaner summary: it says the firm earned a genuine spread over its cost of equity in the period, which is not true of every investment bank at every point in the cycle.",
      "The quarterly record shows the swing. Operating margin was 34.0% in Q2 FY25, 35.5% in Q3, 43.5% in Q4, then 37.7%, 42.1% and 37.5% in the three quarters of FY26. EPS moved from $10.91 to $20.98 and back to $17.01. The Q4 margin spike is a reminder that year-end compensation decisions can flatter or depress a single quarter.",
      "Return on invested capital is reported at 1.2%. That number should be ignored for a securities firm: invested capital includes trading assets and secured financing that turn over constantly and exist to serve clients. ROE, revenue per employee and the compensation ratio are the relevant operating measures.",
    ],
  },
  cash: {
    paragraphs: [
      "Trailing free cash flow is negative $39.98B, a -57.4% margin. For an industrial company that would be alarming. For Goldman it mostly reflects movements in trading assets, collateral and secured financing, which are the machinery of the markets business. A growing balance sheet consumes cash in the accounting statement even when the underlying franchise is profitable.",
      "The cash that belongs to shareholders is the capital the firm can release after funding its businesses and meeting regulatory requirements. That is why buybacks and dividends are set through the capital plan and stress test rather than through a payout ratio on free cash flow. The relevant constraints are the CET1 ratio, the supplementary leverage ratio and the liquidity coverage ratio.",
      "The practical implication is that a negative cash-flow year is not evidence of a liquidity problem. The firm funds itself in wholesale markets and holds a large pool of liquid assets. A reader should look at the balance sheet and the capital ratios before drawing conclusions from the cash-flow statement.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $865.82, Goldman trades at 11.3x trailing earnings, 8.3x EV/EBITDA and 3.6x sales. JPMorgan is at 13.5x earnings and 9.3x EV/EBITDA, Morgan Stanley at 13.9x and 9.3x, and Bank of America at 10.6x and 7.9x. The discount to the universal banks reflects the absence of a deposit franchise and the volatility of capital-markets revenue.",
      "The right frame is price to tangible book value versus sustainable return on equity. A firm earning 17.7% ROE through a cycle can justify a premium to book; a firm earning that only at the top of a deal cycle cannot. The 11.3x P/E is a claim about the durability of the current earnings, not a cheapness signal on its own.",
      "Stockmonk does not publish a target price. The consensus mean in the next section is third-party context, and its range is wide because analysts disagree about the next deal cycle rather than about the current quarter.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-one analysts contribute to the attributed consensus, with a mean target of $1,030.67 and a range of $730.00 to $1,250.00. The low end is below the latest close, which is unusual for a large-cap consensus and tells you that some contributors expect the cycle to turn.",
      "Estimates call for $73.34B of revenue and $71.46 of EPS this fiscal year, then $74.28B and $74.63 next year. The near-flat revenue path alongside modest EPS growth implies cost discipline and continued buybacks rather than a new revenue upcycle. These are third-party forecasts: a mean target is not a Stockmonk rating, and for a cyclical securities firm the estimate dispersion is often a better signal of uncertainty than the average itself.",
    ],
  },
  risks: {
    intro:
      "Goldman's risks are cyclical and operational rather than balance-sheet solvency risks. The firm is well capitalized; the question is how much revenue survives when clients stop transacting.",
    items: [
      {
        title: "Capital-markets drought",
        severity: "High",
        detail:
          "Advisory and underwriting fees can fall sharply when boards defer deals. The cost base cannot shrink as fast as revenue.",
        watch:
          "Announced M&A volumes, equity issuance and the investment-banking fee backlog.",
      },
      {
        title: "Trading and principal risk",
        severity: "High",
        detail:
          "Market-making requires inventory. A large adverse move or a concentrated position can produce a loss that overwhelms a quarter of fees.",
        watch:
          "Value at risk, daily trading revenue volatility and inventory concentrations.",
      },
      {
        title: "Compensation pressure",
        severity: "Medium",
        detail:
          "Top bankers and traders capture a large share of the revenue they generate. Retaining them requires paying up, which limits operating leverage.",
        watch: "Compensation ratio and headcount by division.",
      },
      {
        title: "Regulation and capital rules",
        severity: "Medium",
        detail:
          "Higher capital or leverage requirements force the firm to hold more equity against the same book, lowering ROE.",
        watch: "CET1, leverage ratio and stress-test outcomes.",
      },
      {
        title: "Concentration in a few large clients",
        severity: "Medium",
        detail:
          "A small number of corporations and institutions account for a meaningful share of fees. Losing a relationship can move a division.",
        watch:
          "Client concentration disclosure and the pipeline of mandated deals.",
      },
    ],
    watchlist: [
      {
        title: "Investment-banking fees",
        detail:
          "The cleanest read on whether the deal cycle is opening or closing.",
      },
      {
        title: "Return on equity",
        detail:
          "The test of whether the franchise earns more than its cost of capital through the cycle.",
      },
      {
        title: "Compensation ratio",
        detail:
          "The main lever management uses to defend margins when revenue falls.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Goldman Sachs is a high-quality capital-markets franchise with a cyclical earnings stream. The 17.7% return on equity and 40.0% operating margin are strong, but they were earned in a period when deal activity and trading were both reasonably good.",
      "The teaching point is that cash flow and ROIC can mislead for a securities firm. Trading assets, collateral and secured financing are operating inventory, so a negative free-cash-flow figure is not a cash crisis and a 1.2% ROIC is not a measure of profitability. ROE, tangible book and the compensation ratio are the right instruments.",
      "The open questions are how much of the current revenue is cycle versus share gains, and whether the firm can hold its ROE if capital-market activity cools.",
    ],
    questions: [
      "How much of the trailing revenue came from advisory and underwriting versus trading?",
      "What compensation ratio is required to retain the top producers?",
      "Does the asset-management business grow fast enough to offset deal-cycle swings?",
      "How much capital would new rules require, and what would that do to ROE?",
    ],
  },
};
