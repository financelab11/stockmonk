import type { StockStory } from "./types";

export const SOFI: StockStory = {
  ticker: "SOFI",
  kicker: "Fintech & Crypto · Credit Services",
  title: "SoFi turned a $484M loss into a $481M profit by lending its own balance sheet",
  dek: "The swing came from net interest income on loans funded by deposits, not from a software business. Net debt of $45.7B and free cash flow of -$7.43B are what a fast-growing loan book looks like, not signs of distress.",
  readingMinutes: 9,
  takeaways: [
    "Net income moved from -$483.9M in FY2021 to +$481.3M in FY2025 as the lending model reached scale.",
    "Net interest income, not subscription software, is the core engine; the technology platform is the capital-light part.",
    "Net debt is $45.7B, or 38.4x EBITDA, because loans are funded on the balance sheet.",
    "Free cash flow of -$7.43B is largely the cash cost of adding loans, which are assets rather than expenses.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000013/sofi-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001818874&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "SoFi Technologies is a digital bank with a technology business attached. It takes deposits, makes student, personal and home loans, offers cards and investing, and separately sells the plumbing behind other financial apps through a platform segment. The company was founded in 2011, is based in San Francisco and employs about 4,200 people.",
      "The financial story is an inflection. Net income went from -$483.9M in FY2021 to -$320.4M in FY2022, -$300.7M in FY2023, +$498.7M in FY2024 and +$481.3M in FY2025. Quarterly net income has risen from $97.3M in Q2 FY2025 to $241.0M in Q3 FY2026. A business that was burning cash to acquire members now earns money from them.",
      "What produced that swing matters more than the fact of it. SoFi did not become a software company with high margins. It became a lender with a deposit franchise, and lending is a spread business: the profit is the difference between what loans earn and what funding costs, multiplied by the size of the book.",
    ],
    quote:
      "For a lender, free cash flow and net debt read differently. Originating a loan uses cash today and creates an asset that pays interest for years, so a growing book always looks cash-hungry.",
  },
  whatItDoes: {
    paragraphs: [
      "The company reports three segments. Lending holds the loan book and earns interest and origination fees on student, personal and home loans. Financial Services holds the deposit account, the credit card, the investing product and the insurance offering, and earns interchange and fee income. Technology Platform sells banking and investing infrastructure to other institutions, mostly through Galileo for account processing, Technisys for core banking and Apex for brokerage custody and clearing.",
      "The strategic idea is that the three reinforce each other. A member who opens a checking account is cheaper to lend to because the deposit funds the loan and the relationship data improves credit decisions. The platform business gives the company a second source of revenue that does not consume balance sheet, and gives it insight into how other institutions operate.",
      "The member relationship is the unit that matters. SoFi's pitch is that a customer who arrives for a student loan refinance stays for a deposit account, a card and an investment account, and that each additional product lowers the cost of acquiring the next one. Whether that holds is the central question in the equity story.",
    ],
    bullets: [
      {
        title: "Lending",
        detail:
          "Student, personal and home loans. Earns net interest income and origination fees; carries the credit risk.",
      },
      {
        title: "Financial Services",
        detail:
          "Deposits, cards, investing and insurance. Funds the loan book and earns fee and interchange income.",
      },
      {
        title: "Technology Platform",
        detail:
          "Galileo, Technisys and Apex sell infrastructure to other institutions. Capital-light, fee-based, and the closest thing here to software economics.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The largest profit pool is the spread between loan yields and funding costs. Personal loans carry the highest yield and the highest credit risk; student loans are larger and longer; home loans are the safest and the least profitable per dollar. Deposits are the cheap funding source, and the share of the loan book funded by deposits rather than warehouse lines or securitisation determines how much of the spread the company keeps.",
      "The second pool is fees: origination fees when a loan is made, interchange when a card is used, and subscription-like charges on investing and deposit products. The third is the platform business, which charges other institutions for processing and custody. That last one is the only part with software-like gross margins, and it is small relative to the balance sheet.",
      "This is why the reported margin percentages need care. Operating and net margins above 100% mean the revenue line and the profit lines are not measured on the same basis. For a lender the honest starting point is net interest income after funding costs, then credit losses, then operating expense. A margin percentage computed on a net revenue line will always flatter the business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue in the reported annual series rose from $247.7M in FY2021 to $619.4M in FY2025, with the trailing figure growing 5.5% and the latest quarter 4.2%. Those growth rates are far below the company's earlier pace and sit in the 23rd percentile of the coverage universe on the approved factor screen. The deceleration is what happens when a lender matures: the loan book can only grow as fast as funding and capital allow.",
      "The third-party estimates tell a different story, projecting $5.05B of revenue this fiscal year and $6.41B next year, with EPS of $0.61 rising to $0.90. Whatever basis those estimates use, the implied direction is a substantial step-up from the reported run-rate, driven by more members, more products per member and a larger deposit base.",
      "The realistic drivers are deposit growth, which lowers funding cost, credit performance on the personal loan book, and fee attach rates on cards and investing. The thing that would slow it is a credit cycle that forces provisioning up at the same time as deposit costs stay high — the combination that squeezed the company in FY2022 and FY2023.",
    ],
  },
  performance: {
    paragraphs: [
      "The recovery is visible quarter by quarter. Net income went from $97.3M in Q2 FY2025 to $139.4M, $173.5M, $166.7M, $156.6M and then $241.0M in Q3 FY2026. Diluted EPS rose from $0.08 to $0.18 over the same span. The dip in Q1 FY2026 is a reminder that the line is not monotonic.",
      "The returns are more modest than the income growth suggests. Return on equity is 6.7% and return on invested capital is 1.3%. A bank earning 6.7% on equity is below the return most investors would demand for equity risk, which means the current profit level is not yet a satisfactory outcome — it is a step toward one.",
      "That gap is the useful observation. The company has proved it can cover its costs. It has not yet proved that the loan book earns an adequate return after credit losses and the cost of the capital it must hold against the loans.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is -$7.43B on a trailing basis, a -1204.2% margin, and the annual series shows the same pattern: -$1.40B, -$7.35B, -$7.34B, -$1.27B and -$3.98B. For a lender this is not automatically alarming. When SoFi originates a loan it pays out cash and receives a financial asset; the cash-flow statement records the outflow, and the balance sheet records the asset.",
      "The consequence is a large funding requirement. Net debt is $45.7B, or 38.4x EBITDA. That figure is the loan book and the deposits and borrowings that support it, not corporate leverage in the usual sense. A reader who compares it with an industrial company's net debt will misread the risk.",
      "What actually constrains the company is capital: the equity it must hold against risk-weighted assets, and the deposit franchise that funds them. The cash-flow statement is the wrong lens; the right one is the growth of the loan book against the growth of deposits and equity.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $16.21 the equity is valued at $20.94B, or 28.4x trailing earnings. EV/EBITDA of 55.9x and EV/sales of 108.1x are not useful comparisons for a balance-sheet lender, because enterprise value here includes tens of billions of funding liabilities that exist to support assets. The factor screen places the shares in the 9th percentile for cheapness on EV/EBITDA, which reflects the distortion rather than the price.",
      "The frame that fits is price against book value and sustainable return on equity. A bank earning 6.7% on equity and trading at 28.4x earnings is being valued on the expectation that both numbers rise. If the return on equity climbs toward the mid-teens, the multiple can be justified; if it stays near 7%, it cannot.",
      "For context, Affirm trades at 9.5x earnings and 23.2x EV/EBITDA, Upstart at 19.4x EV/EBITDA with no meaningful P/E, and Toast at 36.6x earnings. Those are different business models with different capital needs, which is why the peer table is a starting point for questions rather than a verdict.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-three analysts contribute to the attributed third-party consensus, with a mean target of $20.84 and a range of $12.00 to $30.00. The range spans more than double the low end, which is normal for a lender whose value depends on credit assumptions.",
      "Estimates for the current fiscal year are $5.05B of revenue and EPS of $0.61, rising to $6.41B and $0.90 next year. Only nine and ten analysts contribute to those annual figures respectively, while the quarterly estimates carry eight and seven. Coverage is thinner than the headline count suggests.",
      "A mean target well above the last close is a statement about the direction analysts expect, not a Stockmonk view. The more informative item is the EPS path: $0.61 to $0.90 implies profit growth far ahead of the 5.5% trailing revenue growth, which requires margin expansion rather than volume alone.",
    ],
  },
  risks: {
    intro:
      "SoFi's risks are the classic risks of a young lender: credit, funding, capital and the temptation to grow the book faster than the underwriting can support.",
    items: [
      {
        title: "Credit losses on unsecured lending",
        severity: "High",
        detail:
          "Personal loans carry the highest yield and the most risk. A rise in unemployment would show up as charge-offs on the book the company now holds rather than sells.",
        watch:
          "Provision expense, net charge-off rates and the share of the book that is unsecured.",
      },
      {
        title: "Funding cost and deposit competition",
        severity: "High",
        detail:
          "The spread only works if deposits stay cheaper than wholesale funding. Paying up for deposits compresses net interest income directly.",
        watch:
          "Net interest margin, deposit balances and the rate paid on deposits.",
      },
      {
        title: "Capital requirements",
        severity: "Medium",
        detail:
          "As a bank, growth is bounded by the equity held against risk-weighted assets. Raising capital dilutes; slowing growth limits the model.",
        watch:
          "Capital ratios, risk-weighted asset growth and any capital raise.",
      },
      {
        title: "Member growth and cross-sell",
        severity: "Medium",
        detail:
          "The economics assume each new product costs less to sell than the last. If product attach stalls, acquisition costs stay high.",
        watch:
          "Products per member and the trend in marketing spend relative to new members.",
      },
      {
        title: "Technology platform execution",
        severity: "Low",
        detail:
          "Galileo, Technisys and Apex are meant to provide capital-light growth. Integration problems would slow that contribution without threatening the bank.",
        watch:
          "Platform segment revenue growth and any client concentration disclosure.",
      },
      {
        title: "Valuation on an unproven return",
        severity: "Medium",
        detail:
          "At 28.4x earnings with a 6.7% return on equity, the price assumes improvement that has not yet appeared in the returns.",
        watch:
          "Return on equity and return on tangible common equity each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Net interest margin",
        detail:
          "The spread between loan yield and funding cost is the single largest driver of profit.",
      },
      {
        title: "Provision for credit losses",
        detail:
          "The line that decides whether loan growth adds to earnings or subtracts from them.",
      },
      {
        title: "Deposit growth",
        detail:
          "Deposits fund the loan book and are cheaper than wholesale borrowing; their growth rate sets the pace.",
      },
      {
        title: "Return on equity",
        detail:
          "At 6.7% it is the clearest measure of whether the model is working as intended.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SoFi is a digital bank with a fee-based technology platform and a large loan book. It has crossed from a $483.9M annual loss in FY2021 to a $481.3M profit in FY2025, and quarterly net income reached $241.0M in Q3 FY2026. That is a genuine operating achievement.",
      "The open question is the quality of the return. A 6.7% return on equity and 1.3% return on invested capital are low for the risk being carried, and the path to better numbers runs through cheaper funding and better credit, not through the software segment. The $45.7B net debt figure is the balance sheet doing its job; the capital ratio is the constraint that matters.",
      "A reader should treat the negative free cash flow as an accounting feature of lending rather than a warning, and then ask whether the loan book earns more than it costs to fund and provision against. That is the whole investment case in one sentence.",
    ],
    questions: [
      "How much of the loan book is funded by deposits rather than wholesale borrowing?",
      "What net charge-off rate is embedded in the current provision expense?",
      "How many products does the average member hold, and is that number rising?",
      "What return on equity would justify 28.4x trailing earnings?",
    ],
  },
};
