import type { StockStory } from "./types";

export const BAC: StockStory = {
  ticker: "BAC",
  kicker: "Banks · Consumer, wealth and corporate lending",
  title: "Bank of America earns its living on deposits, not on deal fees",
  dek: "A $120.2B revenue base and an 11.9% return on equity describe a rate-sensitive deposit franchise. The latest quarter shows how quickly the margin can move when funding costs and credit costs change.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $120.2B, up 5.4%, but the latest quarter grew only 3.2% and its operating margin fell to 29.9%.",
    "Return on equity is 11.9% on $30.5B of FY2025 net income, a middling result for a money-centre bank.",
    "Net interest income and provisioning drive the earnings cycle; free cash flow and EV/EBITDA are poor lenses here.",
    "At $49.42 the shares trade at 10.6x trailing earnings, below the multiples shown for JPMorgan, Goldman and Morgan Stanley.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/70858/000007085826000157/bac-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000070858&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Bank of America is a universal bank: it takes deposits and makes loans through a national branch network, manages money for wealthy clients, and lends to and advises companies. The holding company structure matters because every one of those activities is funded from the same deposit base and measured against the same capital ratio.",
      "The question that decides the next few years is whether the bank can earn a respectable return on equity when short-term rates are no longer rising. Trailing revenue of $120.2B is 5.4% higher than a year earlier, but the latest quarter grew 3.2% and the operating margin dropped to 29.9% from 36.6% in the prior quarter. That is the shape of a spread business being squeezed, not a fee business compounding.",
      "At $49.42 the market values the equity at $341.0B, or 10.6x trailing earnings. The shares sit near the bottom of their 52-week range of $46.12 to $65.22, and the one-year return is negative 5.3% even though five-year holders are up 18.0%. The price is telling you that investors are debating the durability of the return, not the size of the franchise.",
    ],
    quote:
      "A bank's raw material is a cheap deposit. Everything else — the branches, the app, the advisers, the loan book — is a way of turning that raw material into a spread and a fee.",
  },
  whatItDoes: {
    paragraphs: [
      "The consumer bank is the engine: checking and savings accounts, credit cards, mortgages and small-business loans sold through branches and a large digital base. It is where the deposits come from and where most credit risk sits. Global Wealth & Investment Management manages portfolios for affluent and high-net-worth clients and earns fees on assets rather than on balances.",
      "Global Banking serves mid-sized and large companies with credit, treasury and cash-management services. Global Markets is the trading and underwriting arm, competing with the investment banks for corporate issuance and investor flow. The fee businesses — wealth, treasury, advisory and trading — are smaller than net interest income but require far less balance sheet per dollar of revenue.",
      "The bank employs 213,000 people, which is the physical footprint of a branch-and-adviser model that fintech competitors do not carry. That cost base is also why operating leverage matters: once the network exists, incremental deposits and loans are highly profitable, but the fixed cost does not disappear in a quiet quarter.",
    ],
    bullets: [
      {
        title: "Consumer banking",
        detail:
          "Deposits, cards, mortgages and small-business lending. The cheapest funding source and the largest source of credit exposure.",
      },
      {
        title: "Wealth and investment management",
        detail:
          "Fee revenue tied to client assets. Less balance-sheet intensive and more recurring than trading.",
      },
      {
        title: "Global banking and markets",
        detail:
          "Corporate lending, treasury services, underwriting and trading. Cyclical, but it deepens relationships with the largest clients.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the difference between what the bank earns on loans and securities and what it pays depositors and wholesale funders. The franchise value is in the deposit beta: how little the bank has to raise savings rates when market rates rise. A national branch network and a sticky checking account base keep that beta low, which is why the same loan book produces a wider spread here than at a deposit-light lender.",
      "Fee income comes from managing assets, servicing mortgages, issuing cards, moving corporate cash and trading. These lines are less capital-hungry than lending, so a dollar of wealth or treasury revenue is worth more to returns than a dollar of spread income at the same margin.",
      "The cost structure is largely fixed in the short run: branches, technology and 213,000 salaries. When revenue falls, the operating margin falls faster. The Q3 FY26 result illustrates the mechanism: revenue of $29.96B produced an operating margin of 29.9%, while the prior quarter's $31.56B produced 36.6%. A 5% revenue decline became a much larger profit decline.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 3.6% a year from FY2021 to FY2025, rising from $89.11B to $113.10B. That is roughly nominal GDP growth for a mature bank, and it came in steps: a small increase in FY2022, a larger one in FY2023 as rates rose, then slower gains. The trailing $120.2B figure extends the same trend rather than breaking it.",
      "Third-party estimates point to $122.49B of revenue and $4.37 of EPS for the current fiscal year, then $130.23B and $5.10 next year. If those numbers are right, the bank would grow revenue and earnings faster than the recent trend, which implies both loan growth and a friendlier funding environment. That is a forecast, not a fact, and it assumes no serious credit deterioration.",
      "The realistic drivers are loan growth, deposit gathering, wealth fees and capital markets activity. The obvious brakes are rate cuts that reprice the loan book lower, deposit competition that raises funding costs, and credit losses that force provisions. None of those is visible in the current revenue line, which is why the estimate direction is more informative than the trailing multiple.",
    ],
    bullets: [
      {
        title: "Deposit gathering",
        detail:
          "More checking and savings balances fund more loans without wholesale borrowing. Growth here is cheaper than growth in certificates of deposit.",
      },
      {
        title: "Wealth fees",
        detail:
          "Revenue rises with client assets, so market levels matter as much as net new money.",
      },
      {
        title: "Card and lending volumes",
        detail:
          "Consumer spending and loan demand drive both interest income and fee income, but they also drive credit losses.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "FY2025 produced $113.10B of revenue, $37.70B of operating income and $30.51B of net income, a 26.8% net margin. Return on equity was 11.9%. For a bank, that is the number to argue about: it is above the return on a government bond but below what a well-run large bank has historically delivered at the top of a rate cycle.",
      "The quarterly series shows how uneven the business is. Operating margin ran from 31.6% in Q2 FY25 to 35.8% in Q3 FY25, then 33.9%, 34.4%, 36.6% and finally 29.9% in Q3 FY26. Net income moved from $7.17B to $9.07B and back to $6.93B over the same six quarters. Diluted EPS of $4.20 on a trailing basis conceals that swing.",
      "The pattern is consistent with a spread lender: revenue is fairly stable, but provisioning and funding costs move the bottom line. A reader should treat the 36.6% margin as a good quarter rather than a new baseline, and the 29.9% quarter as a reminder of operating leverage working in reverse.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is reported as not available, and for a bank that is the honest answer. Deposits and borrowings are operating inputs, loan growth consumes cash, and the balance sheet is the product. A conventional cash-flow statement would mix customer deposits with financing decisions and tell you very little about earnings power.",
      "The measures that matter are capital, liquidity and asset quality. CET1 capital relative to risk-weighted assets determines how much lending the bank can support and how much it can return. The allowance for credit losses relative to non-performing loans determines how much of a downturn is already absorbed. Tangible book value per share is the anchor for valuation, because it approximates what would be left for shareholders in a liquidation.",
      "Capital return is the link between those measures and per-share results. Buybacks increase EPS and book value per share only when the bank is earning above its cost of capital and trading at a sensible multiple of book. Dividends and repurchases are constrained by stress-test results, so the annual capital plan is a better guide to future distributions than the cash-flow statement.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $49.42, Bank of America trades at 10.6x trailing earnings and 7.9x EV/EBITDA. The peer table puts JPMorgan at 13.5x earnings and 9.3x EV/EBITDA, Goldman at 11.3x and 8.3x, and Morgan Stanley at 13.9x and 9.3x. The discount is not a market error; it reflects a lower return on equity and a more rate-sensitive earnings mix.",
      "EV/EBITDA is a weak tool for a bank because enterprise value treats deposits and debt as capital structure rather than raw material. The same criticism applies to price-to-sales. The useful comparison is price to tangible book value against a sustainable return on equity: a bank earning 11.9% should trade near or modestly above book if that return is durable, and below book if credit costs are about to normalize higher.",
      "Stockmonk does not publish a target price. The third-party mean shown in the next section is context for the debate, not a valuation conclusion, and it should be read next to the estimate range rather than on its own.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed consensus. The mean target is $62.48, with a range of $56.00 to $71.00. The spread is wide enough to matter: the low end is only modestly above the latest close, while the high end assumes a materially better earnings path.",
      "Current-year estimates call for $122.49B of revenue and $4.37 of EPS, with 18 analysts contributing; next year's figures are $130.23B and $5.10 from 17 analysts. The implied acceleration in EPS is the part to interrogate. It requires net interest income to recover and credit costs to stay contained at the same time.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for a bank the dispersion usually reflects different assumptions about rates, deposit betas and provisioning rather than disagreement about the franchise.",
    ],
  },
  risks: {
    intro:
      "Bank of America's risks cluster around the balance sheet: the cost of funding, the quality of the loan book and the capital rules that govern distributions. The fee businesses add cyclicality but not existential risk.",
    items: [
      {
        title: "Deposit competition and funding costs",
        severity: "High",
        detail:
          "If depositors move cash into higher-yielding products, the bank must pay more to keep funding, which compresses net interest income even if loan volumes grow.",
        watch:
          "Net interest income guidance, deposit betas and the mix of non-interest-bearing deposits.",
      },
      {
        title: "Credit losses in consumer and commercial books",
        severity: "High",
        detail:
          "Cards, small business and commercial real estate are the areas where a downturn would show up first. Provisions hit earnings before charge-offs peak.",
        watch:
          "Provision for credit losses, net charge-offs and non-performing loan ratios.",
      },
      {
        title: "Interest-rate path",
        severity: "High",
        detail:
          "A spread bank is sensitive to both the level and the direction of rates. Falling short rates can reprice assets faster than deposits.",
        watch:
          "Asset sensitivity disclosure and the spread between loan yields and deposit costs.",
      },
      {
        title: "Capital and regulatory requirements",
        severity: "Medium",
        detail:
          "Higher risk-weighted capital requirements would reduce the lending the same equity can support and could slow buybacks.",
        watch:
          "CET1 ratio, stress-test results and any change to capital rules.",
      },
      {
        title: "Cost base and operating leverage",
        severity: "Medium",
        detail:
          "The branch and technology footprint is expensive to maintain. Revenue declines flow through to profit quickly, as the latest quarter showed.",
        watch: "Efficiency ratio and management's expense guidance.",
      },
    ],
    watchlist: [
      {
        title: "Net interest income",
        detail:
          "The largest and most rate-sensitive revenue line. Track the dollar level, not just the growth rate.",
      },
      {
        title: "Provision for credit losses",
        detail: "The main swing factor between a good quarter and a poor one.",
      },
      {
        title: "CET1 and buybacks",
        detail:
          "Capital return depends on the stress test and the capital ratio, not on reported earnings alone.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Bank of America is a large, deposit-funded lender with a real wealth franchise and a cyclical markets arm. The $120.2B revenue base, 26.8% net margin and 11.9% return on equity are solid but not exceptional, and the latest quarter shows how fast a spread business can lose margin.",
      "The educational point is that bank analysis runs on different rails. Free cash flow is not meaningful when deposits are raw material; EV/EBITDA blends operating and financing items; return on equity, tangible book value, net interest income and credit costs are the tools that fit.",
      "What is not known is how much of the current earnings base depends on rates staying where they are, and whether provisions are at a normal level or a cyclical low. Those two questions matter more than the 10.6x multiple.",
    ],
    questions: [
      "How much of net interest income would disappear if deposit costs caught up with market rates?",
      "Is the allowance for credit losses still above likely charge-offs, or is it being drawn down?",
      "Does the wealth business grow fees faster than the branch network grows costs?",
      "What CET1 ratio does the bank need to sustain buybacks through a downturn?",
    ],
  },
};
