import type { StockStory } from "./types";

export const JPM: StockStory = {
  ticker: "JPM",
  kicker: "Banks · Diversified financial services",
  title: "JPMorgan is a scale bank with a markets business attached",
  dek: "Net interest income, credit quality and capital markets activity drive the earnings. Free cash flow and ROIC are not the right lenses for a bank — ROE and book value are.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $203.2B on a trailing basis, up 13.2% year over year.",
    "Commercial & Investment Bank is 43.0% of revenue; Consumer & Community Banking is 41.7%.",
    "Return on equity is 23.4%, a strong result for a large bank.",
    "The balance sheet is a bank balance sheet; net debt and free cash flow are not meaningful in the usual sense.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/19617/000162828026008131/jpm-20251231.htm",
  irUrl: "https://www.jpmorganchase.com/ir",
  earningsReleaseUrl:
    "https://www.sec.gov/Archives/edgar/data/19617/000162828026065582/a3q26erfex992supplement.htm",
  bigPicture: {
    paragraphs: [
      "JPMorgan Chase is the largest US bank by assets, with businesses spanning consumer banking, commercial and investment banking, asset and wealth management, and corporate functions. It earns money from the spread between what it pays for deposits and what it earns on loans and securities, plus fees from advisory, trading and asset management.",
      "Trailing revenue reached $203.2B, up 13.2%, and the latest quarter grew 8.1%. Return on equity is 23.4%, which is a strong result for a bank of this size. Operating margin is 42.0%, though bank margins are not directly comparable to industrial companies.",
      "At $334.49, JPM trades at 13.5x trailing earnings and 9.3x EV/EBITDA. Bank valuations are usually anchored on price-to-tangible-book and ROE rather than EV/EBITDA, so those multiples should be read with care.",
    ],
    quote:
      "Banks are not compounders in the same way as software companies. The key variables are net interest income, credit losses, capital returns and the regulatory framework.",
  },
  whatItDoes: {
    paragraphs: [
      "JPMorgan reports four major segments: Consumer & Community Banking, Commercial & Investment Bank, Asset & Wealth Management, and Corporate. The consumer bank takes deposits, makes loans and issues cards. The CIB advises on deals, underwrites securities, trades and lends to companies. Asset and wealth management earns fees on client assets.",
      "The revenue mix is 43.0% CIB, 41.7% CCB, 13.2% AWM and 2.1% corporate/other. The balance is unusually diversified for a bank, which smooths earnings across cycles but also makes the consolidated result sensitive to capital markets activity.",
      "North America is 76.6% of revenue and international is 23.4%. The international footprint is concentrated in corporate and investment banking rather than retail.",
    ],
    bullets: [
      {
        title: "Commercial & Investment Bank",
        detail:
          "43.0% of revenue. Advisory, underwriting, markets, treasury services and lending.",
      },
      {
        title: "Consumer & Community Banking",
        detail:
          "41.7% of revenue. Deposits, cards, mortgages and small-business banking.",
      },
      {
        title: "Asset & Wealth Management",
        detail:
          "13.2% of revenue. Fee-based asset management and private banking.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The largest profit driver is net interest income: the difference between interest earned on loans and securities and interest paid on deposits and borrowings. The second is non-interest revenue from fees, trading and asset management.",
      "JPMorgan's deposit franchise gives it a funding advantage. Low-cost deposits are the raw material of a bank, and scale in consumer banking provides a stable base that smaller banks cannot match.",
      "Credit quality is the other side of the equation. Provision for credit losses rises when borrowers struggle, which can offset revenue growth. The current environment has been benign, but that can change.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $115.7B in 2019 to $182.4B in 2025, a 7.9% compound annual growth rate. The latest quarter grew 8.1% to $50.2B, helped by net interest income and capital markets activity.",
      "The attributed consensus expects $207.8B of revenue this fiscal year, up 13.9%, and $217.3B next year, up 4.6%. EPS is expected to be $23.91 this year and $25.57 next year.",
      "The growth drivers are loan growth, deposit repricing, capital markets activity and wealth management fees. The risk is that rate cuts, credit losses or a capital-markets slowdown reverse the trend.",
    ],
    bullets: [
      {
        title: "Net interest income",
        detail:
          "The core earnings driver, sensitive to rates and deposit mix.",
      },
      {
        title: "Capital markets",
        detail:
          "Advisory, underwriting and trading are cyclical but high-return when activity is strong.",
      },
      {
        title: "Wealth and asset management",
        detail:
          "Fee-based revenue that grows with assets under management.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Return on equity is 23.4%, well above the cost of equity for a large bank. Operating margin is 42.0% and net margin is 32.5%, but those figures are less informative than ROE and pre-provision profitability.",
      "The revenue history shows the rate cycle: $115.7B in 2019, $119.9B in 2020, $121.6B in 2021, $128.7B in 2022, then a jump to $158.1B in 2023 as rates rose. Revenue growth has been driven by net interest income and scale.",
      "Diluted EPS was $20.02 in 2025. The consensus expects $23.91 this year and $25.57 next year. EPS is the cleanest per-share measure for a bank, but it should be read alongside book value and ROE.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow, net debt and ROIC are not meaningful for a bank in the same way they are for an industrial company. Banks fund themselves with deposits and borrowings, and their balance sheets are the product.",
      "The relevant measures are capital ratios, tangible book value, loan-loss reserves and liquidity. JPMorgan has historically operated with strong capital levels and a diversified deposit base.",
      "Investors should look at the CET1 ratio, the allowance for credit losses and the pace of buybacks rather than the cash-flow statement.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $334.49, JPM trades at 13.5x trailing earnings and 9.3x EV/EBITDA. The P/E is in line with large-bank history. The EV/EBITDA multiple is less useful because bank capital structure is different.",
      "The more relevant valuation framework is price-to-tangible-book versus sustainable ROE. A bank earning 23% ROE should trade at a premium to tangible book if that return is durable.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 23 analysts with a mean target of $373.48. The recommendation mix is positive. Estimates call for $207.8B of revenue this fiscal year and EPS of $23.91.",
      "The following year's EPS estimate of $25.57 implies 6.9% growth, a slower rate that reflects expected normalization in net interest income and credit costs.",
      "A mean target is not a Stockmonk rating. For a bank, the estimate dispersion often reflects different assumptions about rates and credit, not just valuation.",
    ],
  },
  risks: {
    intro:
      "JPMorgan's risks are credit, rates and regulation. The bank is well capitalized, but those three variables drive the earnings cycle.",
    items: [
      {
        title: "Credit cycle",
        severity: "High",
        detail:
          "Loan losses rise in a recession. Commercial real estate and consumer credit are the areas to watch.",
        watch:
          "Provision for credit losses, net charge-offs and non-performing loans.",
      },
      {
        title: "Interest rates",
        severity: "High",
        detail:
          "Net interest income is sensitive to rate cuts and deposit repricing.",
        watch:
          "Net interest income guidance and deposit betas.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Capital and liquidity rules can change the amount of capital the bank must hold and the returns it can earn.",
        watch:
          "Basel III endgame, stress-test results and CET1 requirements.",
      },
      {
        title: "Capital markets cyclicality",
        severity: "Medium",
        detail:
          "Advisory and trading revenue can fall quickly when markets are quiet.",
        watch:
          "Investment banking fees and trading revenue.",
      },
      {
        title: "Key-person and execution",
        severity: "Low",
        detail:
          "JPMorgan has a deep management bench, but the CEO transition is a long-term consideration.",
        watch:
          "Management succession and strategic changes.",
      },
    ],
    watchlist: [
      {
        title: "Net interest income",
        detail:
          "The largest revenue line and the most sensitive to rates.",
      },
      {
        title: "Credit costs",
        detail:
          "Provisioning is the main swing factor in a downturn.",
      },
      {
        title: "Capital returns",
        detail:
          "Buybacks and dividends depend on capital ratios and stress-test results.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "JPMorgan is a diversified, well-capitalized bank with a strong deposit franchise and a leading investment bank. The current ROE is high, but banks are cyclical and the return is not guaranteed.",
      "The educational point is that bank analysis uses different tools. Free cash flow and ROIC are not the right measures; ROE, tangible book value, net interest income and credit costs are.",
      "The key questions are how much of the current ROE is rate-driven, how credit costs evolve, and what regulation does to capital returns.",
    ],
    questions: [
      "How much of net interest income is sensitive to rate cuts?",
      "What is the allowance for credit losses relative to non-performing loans?",
      "Is the 23% ROE sustainable through a cycle?",
      "How do capital rules affect buybacks?",
    ],
  },
};
