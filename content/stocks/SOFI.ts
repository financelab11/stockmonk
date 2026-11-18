import type { StockStory } from "./types";

export const SOFI: StockStory = {
  "ticker": "SOFI",
  "kicker": "Fintech & Crypto · Credit Services",
  "title": "SoFi turned a $484M loss into a $481M profit by lending its own balance sheet",
  "dek": "The swing came from net interest income on loans funded by deposits, not from a software business. Net debt of $45.7B and free cash flow of -$7.43B are what a fast-growing loan book looks like, not signs of distress.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $616.8M trailing twelve months, +5.5% year over year.",
    "Profitability: 147.1% operating margin and 119.6% net margin.",
    "Cash: -$7.4B free cash flow, a -1204.2% margin.",
    "Scorecard: 24/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000013/sofi-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001818874&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SoFi Technologies, Inc. generated $616.8M of revenue over the last twelve months, +5.5% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $163.4M of revenue and an operating margin of 194.5%. The stock closed at $14.28 on 2026-11-17, giving a market capitalization of $18.5B.",
      "The shares sit 3% of the way up their 52-week range ($13.86 to $30.42). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "For a lender, free cash flow and net debt read differently. Originating a loan uses cash today and creates an asset that pays interest for years, so a growing book always looks cash-hungry."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company reports three segments. Lending holds the loan book and earns interest and origination fees on student, personal and home loans. Financial Services holds the deposit account, the credit card, the investing product and the insurance offering, and earns interchange and fee income. Technology Platform sells banking and investing infrastructure to other institutions, mostly through Galileo for account processing, Technisys for core banking and Apex for brokerage custody and clearing.",
      "The strategic idea is that the three reinforce each other. A member who opens a checking account is cheaper to lend to because the deposit funds the loan and the relationship data improves credit decisions. The platform business gives the company a second source of revenue that does not consume balance sheet, and gives it insight into how other institutions operate.",
      "The member relationship is the unit that matters. SoFi's pitch is that a customer who arrives for a student loan refinance stays for a deposit account, a card and an investment account, and that each additional product lowers the cost of acquiring the next one. Whether that holds is the central question in the equity story."
    ],
    "bullets": [
      {
        "title": "Lending",
        "detail": "Student, personal and home loans. Earns net interest income and origination fees; carries the credit risk."
      },
      {
        "title": "Financial Services",
        "detail": "Deposits, cards, investing and insurance. Funds the loan book and earns fee and interchange income."
      },
      {
        "title": "Technology Platform",
        "detail": "Galileo, Technisys and Apex sell infrastructure to other institutions. Capital-light, fee-based, and the closest thing here to software economics."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The largest profit pool is the spread between loan yields and funding costs. Personal loans carry the highest yield and the highest credit risk; student loans are larger and longer; home loans are the safest and the least profitable per dollar. Deposits are the cheap funding source, and the share of the loan book funded by deposits rather than warehouse lines or securitisation determines how much of the spread the company keeps.",
      "The second pool is fees: origination fees when a loan is made, interchange when a card is used, and subscription-like charges on investing and deposit products. The third is the platform business, which charges other institutions for processing and custody. That last one is the only part with software-like gross margins, and it is small relative to the balance sheet.",
      "This is why the reported margin percentages need care. Operating and net margins above 100% mean the revenue line and the profit lines are not measured on the same basis. For a lender the honest starting point is net interest income after funding costs, then credit losses, then operating expense. A margin percentage computed on a net revenue line will always flatter the business."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 127.1% a year across the fiscal years in the dataset, and the latest quarter changed +4.2% year over year. Third-party estimates for the current fiscal year point to $5.1B of revenue and $0.61 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 147.1% and return on invested capital of 1.3% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 147.1%, the net margin is 119.6% and diluted EPS is $0.56. The latest quarter's operating margin was 194.5%.",
      "Return on equity is 6.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $163.4M, an operating margin of 194.5% and a net margin of 147.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$7.4B, a -1204.2% margin. Net debt is $45.7B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$7.4B over the last twelve months and net debt was $45.7B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 25.1x trailing earnings and 53.9x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $20.84; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "23 analysts contribute to the third-party consensus. The mean target is $20.84, with a range of $12.00 to $30.00.",
      "Current-year estimates call for $5.1B of revenue and $0.61 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 23 analysts with a mean target of $20.84; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "SoFi's risks are the classic risks of a young lender: credit, funding, capital and the temptation to grow the book faster than the underwriting can support.",
    "items": [
      {
        "title": "Credit losses on unsecured lending",
        "severity": "High",
        "detail": "Personal loans carry the highest yield and the most risk. A rise in unemployment would show up as charge-offs on the book the company now holds rather than sells.",
        "watch": "Provision expense, net charge-off rates and the share of the book that is unsecured."
      },
      {
        "title": "Funding cost and deposit competition",
        "severity": "High",
        "detail": "The spread only works if deposits stay cheaper than wholesale funding. Paying up for deposits compresses net interest income directly.",
        "watch": "Net interest margin, deposit balances and the rate paid on deposits."
      },
      {
        "title": "Capital requirements",
        "severity": "Medium",
        "detail": "As a bank, growth is bounded by the equity held against risk-weighted assets. Raising capital dilutes; slowing growth limits the model.",
        "watch": "Capital ratios, risk-weighted asset growth and any capital raise."
      },
      {
        "title": "Member growth and cross-sell",
        "severity": "Medium",
        "detail": "The economics assume each new product costs less to sell than the last. If product attach stalls, acquisition costs stay high.",
        "watch": "Products per member and the trend in marketing spend relative to new members."
      },
      {
        "title": "Technology platform execution",
        "severity": "Low",
        "detail": "Galileo, Technisys and Apex are meant to provide capital-light growth. Integration problems would slow that contribution without threatening the bank.",
        "watch": "Platform segment revenue growth and any client concentration disclosure."
      },
      {
        "title": "Valuation on an unproven return",
        "severity": "Medium",
        "detail": "At 28.4x earnings with a 6.7% return on equity, the price assumes improvement that has not yet appeared in the returns.",
        "watch": "Return on equity and return on tangible common equity each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Net interest margin",
        "detail": "The spread between loan yield and funding cost is the single largest driver of profit."
      },
      {
        "title": "Provision for credit losses",
        "detail": "The line that decides whether loan growth adds to earnings or subtracts from them."
      },
      {
        "title": "Deposit growth",
        "detail": "Deposits fund the loan book and are cheaper than wholesale borrowing; their growth rate sets the pace."
      },
      {
        "title": "Return on equity",
        "detail": "At 6.7% it is the clearest measure of whether the model is working as intended."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "SoFi is a digital bank with a fee-based technology platform and a large loan book. It has crossed from a $483.9M annual loss in FY2021 to a $481.3M profit in FY2025, and quarterly net income reached $241.0M in Q3 FY2026. That is a genuine operating achievement.",
      "The open question is the quality of the return. A 6.7% return on equity and 1.3% return on invested capital are low for the risk being carried, and the path to better numbers runs through cheaper funding and better credit, not through the software segment. The $45.7B net debt figure is the balance sheet doing its job; the capital ratio is the constraint that matters.",
      "A reader should treat the negative free cash flow as an accounting feature of lending rather than a warning, and then ask whether the loan book earns more than it costs to fund and provision against. That is the whole investment case in one sentence."
    ],
    "questions": [
      "How much of the loan book is funded by deposits rather than wholesale borrowing?",
      "What net charge-off rate is embedded in the current provision expense?",
      "How many products does the average member hold, and is that number rising?",
      "What return on equity would justify 28.4x trailing earnings?"
    ]
  }
};
