import type { StockStory } from "./types";

export const WFC: StockStory = {
  ticker: "WFC",
  kicker: "Banks · US consumer, commercial and wealth",
  title: "Wells Fargo has the deposits; the question is the return on them",
  dek: "A nationwide branch network and a large low-cost deposit base should produce a strong return on equity. At 6.5%, Wells Fargo earns far less than its peers, which makes cost, credit and regulation the numbers that matter.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $87.2B, up 5.4%, with the latest quarter at $21.87B.",
    "Operating margin is 31.7% and net margin is 26.3%, broadly in line with a large US bank.",
    "Return on equity is 6.5%, the weakest in this peer group and the central puzzle in the story.",
    "At $83.94 the shares trade at 11.0x trailing earnings and 9.4x EV/EBITDA, a discount to JPMorgan and Morgan Stanley.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/72971/000007297126000133/wfc-20251231_d2.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000072971&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Wells Fargo is one of the largest US banks, built on a national branch network and a deep base of consumer and small-business deposits. It lends to consumers through cards, mortgages and personal loans, to companies through commercial and corporate banking, and it manages money for wealthy clients. The branch network is expensive, but it is also the source of funding that wholesale-funded competitors cannot replicate.",
      "The puzzle is the return. A bank with this deposit base should earn a mid-teens return on equity in a normal environment. Wells Fargo earned 6.5%. That gap can come from a higher cost base, a less profitable loan mix, regulatory constraints on the balance sheet or a larger equity cushion than peers. The dataset does not identify which, but the size of the gap makes it the first question to ask.",
      "Trailing revenue of $87.2B is 5.4% higher than a year earlier, and the latest quarter reached $21.87B with a 32.5% operating margin. At $83.94 the equity is worth $252.0B, or 11.0x trailing earnings. The shares sit 45% of the way up a 52-week range of $72.78 to $97.76, and the one-year return is 0.3%.",
    ],
    quote:
      "Deposits are the raw material. A branch bank that cannot turn them into a respectable return on equity is leaving value on the table, and the market will price that gap.",
  },
  whatItDoes: {
    paragraphs: [
      "Community Banking is the consumer and small-business franchise: checking and savings accounts, debit and credit cards, mortgages, auto loans and small-business lending. It is the largest source of deposits and the main source of credit risk. The branch network and the mobile app are the distribution; the deposit relationship is the product that funds everything else.",
      "Wholesale Banking serves mid-sized and large companies with commercial lending, treasury management, trade finance and investment banking. It is smaller than the consumer bank but carries lower credit risk per dollar and deeper client relationships. Wealth and Investment Management serves affluent clients with advisory, brokerage and trust services, earning fees on assets rather than spreads on loans.",
      "The segment mix matters because fee businesses require less capital and produce higher returns than lending. Wells Fargo has historically been more consumer-lending-heavy than JPMorgan or Bank of America, with a smaller investment-banking and trading franchise. That mix explains part of the ROE gap, but not all of it.",
    ],
    bullets: [
      {
        title: "Community Banking",
        detail:
          "Deposits, cards, mortgages and small-business lending. The funding base and the main credit exposure.",
      },
      {
        title: "Wholesale Banking",
        detail:
          "Commercial lending, treasury and trade services for companies. Lower credit risk per dollar.",
      },
      {
        title: "Wealth and Investment Management",
        detail:
          "Advisory, brokerage and trust services. Fee revenue with little balance-sheet intensity.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the spread between what the bank earns on loans and securities and what it pays depositors. Wells Fargo's branch network gives it a large base of checking and savings deposits that are cheaper than wholesale funding. That is the franchise's core advantage, and it is why the bank can earn a spread even when loan yields are modest.",
      "Fee income comes from cards, mortgage servicing, treasury management, advisory and asset management. These lines are less capital-intensive than lending and more recurring than trading. Wells Fargo's fee mix is smaller than JPMorgan's, which means a larger share of revenue is sensitive to the rate cycle.",
      "The cost base is the branch network, technology and 268,531 employees. Branches are expensive to run, but they are also a moat: they attract deposits that fund loans at a lower cost than online-only banks. The tension is that the cost is fixed while the revenue is cyclical, so operating leverage works in both directions.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was $79.17B in FY2021, $74.37B in FY2022, $82.60B in FY2023, $82.30B in FY2024 and $83.70B in FY2025. The path is essentially flat over five years, with a dip in FY2022 and a recovery since. The trailing $87.23B is 5.4% higher, and the latest quarter grew 2.0%. This is a mature bank growing with the economy, not a compounder.",
      "Consensus estimates call for $88.18B of revenue and $7.34 of EPS this fiscal year, then $92.89B and $8.06 next year. The implied EPS growth is modest, and the near-term quarterly estimates are flat to slightly down. That is consistent with a bank that is still working through cost and regulatory issues rather than one entering a new growth phase.",
      "The durable drivers are loan growth, deposit gathering, fee income from wealth and treasury, and the normalisation of the cost base. The brakes are credit losses, deposit competition, regulatory constraints and a housing market that limits mortgage volumes. None of those is unusual for a bank; the question is which one explains the low ROE.",
    ],
    bullets: [
      {
        title: "Deposit franchise",
        detail:
          "Branch-gathered checking and savings balances fund the loan book at a lower cost than wholesale borrowing.",
      },
      {
        title: "Fee income",
        detail:
          "Cards, treasury, mortgage servicing and wealth fees diversify away from the spread.",
      },
      {
        title: "Cost efficiency",
        detail:
          "The branch network is a moat and a burden. Reducing the cost per account is the lever.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 31.7%, net margin is 26.3% and diluted EPS is $7.09. Return on equity is 6.5%. The margins are respectable; the ROE is the outlier. A bank earning 6.5% on equity is barely covering its cost of capital, which is why the shares trade at a discount to peers.",
      "The annual record shows revenue of $79.17B, $74.37B, $82.60B, $82.30B and $83.70B, with net income of $22.11B, $13.68B, $19.14B, $19.72B and $21.34B. FY2022 was the weak year, with operating income falling to $15.63B from $29.56B. The recovery since then has been steady but not complete.",
      "Quarterly operating margins have ranged from 27.9% to 35.6% over the last six quarters, and EPS moved between $1.60 and $2.00. The Q2 FY26 result — $22.62B of revenue and a 35.6% margin — was the strongest of the six, while Q1 FY26 was the weakest at 27.9%. That volatility is normal for a bank with a large consumer book.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is reported as not available, which is appropriate for a bank. Deposits, loan growth and securities purchases all move through the balance sheet, and a conventional free-cash-flow calculation would confuse operating activity with funding decisions. The cash-flow statement is not the primary lens.",
      "The relevant measures are the CET1 ratio, the allowance for credit losses, the loan-to-deposit ratio and tangible book value per share. CET1 determines how much lending the equity can support and how much can be returned. The allowance determines how much of a downturn is already provisioned. Tangible book value is the anchor for a bank trading below or above book.",
      "Capital return is set through the stress test and the capital plan. Buybacks are the main lever for per-share growth, but they are constrained by the regulatory position. A bank with a 6.5% ROE and a discount to book has to weigh repurchasing shares against investing in the businesses that could raise the return.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $83.94, Wells Fargo trades at 11.0x trailing earnings and 9.4x EV/EBITDA. JPMorgan is at 13.5x and 9.3x, Morgan Stanley at 13.9x and 9.3x, Goldman at 11.3x and 8.3x, and Bank of America at 10.6x and 7.9x. The discount to the best banks is a direct function of the 6.5% ROE.",
      "The right frame is price to tangible book value against a sustainable return on equity. A bank earning 6.5% should trade below book if that return is permanent, and closer to book if the return can be lifted toward the low-to-mid teens. The P/E alone cannot tell you which case you are in.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context. The valuation debate is really a debate about the ROE: a higher return would justify a higher multiple without any change in the revenue base.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the attributed consensus, with a mean target of $97.38 and a range of $88.00 to $108.00. Even the low end is above the latest close, which suggests the sell side expects some improvement in the return.",
      "Estimates call for $88.18B of revenue and $7.34 of EPS this fiscal year, then $92.89B and $8.06 next year, with 21 analysts contributing to each. The EPS estimate rises, and getting there would require either a lower cost base or a better loan mix rather than a sudden acceleration in revenue.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for a bank the estimate dispersion usually reflects different assumptions about rates, credit and regulation.",
    ],
  },
  risks: {
    intro:
      "Wells Fargo's risks are the standard bank risks — credit, rates and regulation — plus a company-specific execution risk around the cost base and the return on equity.",
    items: [
      {
        title: "Credit losses",
        severity: "High",
        detail:
          "The consumer book includes cards, auto loans and mortgages. Commercial real estate adds another exposure. A recession would push provisions above current levels.",
        watch:
          "Net charge-offs, non-performing loans and the allowance for credit losses.",
      },
      {
        title: "Interest rates and deposit costs",
        severity: "High",
        detail:
          "Net interest income is sensitive to rate cuts and to deposit repricing. A branch bank with a large deposit base is exposed to both.",
        watch: "Net interest income guidance and deposit betas.",
      },
      {
        title: "Regulatory constraints",
        severity: "High",
        detail:
          "Capital, liquidity and consent-order requirements can limit balance-sheet growth and buybacks, which keeps ROE below peers.",
        watch: "CET1, stress-test results and regulatory disclosures.",
      },
      {
        title: "Cost base and efficiency",
        severity: "Medium",
        detail:
          "The branch network and headcount are expensive. If revenue growth is slow, the cost base prevents the ROE from recovering.",
        watch: "Efficiency ratio, branch count and headcount.",
      },
      {
        title: "Housing and mortgage volumes",
        severity: "Medium",
        detail:
          "Mortgage originations fall when rates rise. A weak housing market reduces fee income and loan growth at the same time.",
        watch: "Mortgage origination volumes and gain-on-sale margins.",
      },
    ],
    watchlist: [
      {
        title: "Return on equity",
        detail:
          "The single number that explains the valuation discount and the recovery case.",
      },
      {
        title: "Efficiency ratio",
        detail: "The cost lever that management can control.",
      },
      {
        title: "Net interest income",
        detail: "The largest revenue line and the most rate-sensitive.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Wells Fargo is a deposit-rich US bank with a strong consumer franchise and a modest fee business. The 31.7% operating margin and 26.3% net margin are respectable, but the 6.5% return on equity is the number that defines the investment story.",
      "The teaching point is that a bank's P/E is only half the picture. Two banks can trade at similar earnings multiples and deserve very different price-to-book ratings because one earns 6.5% on equity and the other earns 15%. ROE, tangible book value and the cost base are the instruments that explain the gap.",
      "The open questions are whether the low ROE is structural or fixable, how much regulation constrains the balance sheet, and whether the branch network is an asset or a cost in a digital market.",
    ],
    questions: [
      "Why is the return on equity only 6.5% when the deposit franchise is so strong?",
      "How much of the cost base can be reduced without damaging the branch network?",
      "Is the bank capitalised above the level needed to support its loan book?",
      "What would a two-point rise in the ROE do to the valuation multiple?",
    ],
  },
};
