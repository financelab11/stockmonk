import type { StockStory } from "./types";

export const HAPN: StockStory = {
  "ticker": "HAPN",
  "kicker": "Capital Markets · Banks - Regional",
  "title": "Happen: The renamed LendingClub bank",
  "dek": "Happen's revenue rose 10.0% to $1B, at a 25.8% operating margin. The key risk is credit and funding costs.",
  "readingMinutes": 10,
  "takeaways": [
    "Revenue: $1B, +10.0% year over year.",
    "Profitability: 25.8% operating margin and 20.2% net margin.",
    "Cash: reported free cash flow of -$2.9B is not comparable to the reported revenue line.",
    "Valuation: 8.0x trailing earnings and no meaningful EV/EBITDA multiple."
  ],
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-26",
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000018/lc-20251231.htm",
  "irUrl": "https://www.happen.com",
  "bigPicture": {
    "paragraphs": [
      "Happen's revenue rose 10.0% to $1B, with a 13.2% return on equity. The latest quarter (Q3 FY26) fell 1.2%. The spread between asset yields and funding costs is the core variable.",
      "Lending Club Bank is 98.2% of revenue and Lending Club Corporation is 3.8%. The upside is deposit growth and credit normalisation. What would break it is credit and funding costs.",
      "At $14.59, the equity is worth $1.7B, or 8.0x trailing earnings and no meaningful EV/EBITDA multiple. The earnings multiple is 33.6% below the 12.0x peer median. The stock is 18% of the way up its 52-week range. The price already embeds a view on growth and margins; the analysis below tests it."
    ],
    "quote": "Happen is the renamed LendingClub bank, a digital lender where credit quality, funding costs and the loan marketplace determine earnings."
  },
  "whatItDoes": {
    "paragraphs": [
      "Happen, Inc. operates as a bank holding company that provides financial and lending services in the United States.",
      "The operating margin is a spread measure rather than a product margin: it reflects the difference between asset yields and funding costs after expenses. The relevant drivers are the loan book, deposit costs and credit losses rather than product pricing.",
      "Capital is regulatory rather than physical: CET1, deposit funding and book value matter more than capex. Return on equity was 13.2%, and the relevant comparison is with other regional banks."
    ],
    "bullets": [
      {
        "title": "Revenue mix",
        "detail": "Lending Club Bank at 98.2% and Lending Club Corporation at 3.8%. The largest segment sets the consolidated margin; the second is the next swing factor."
      },
      {
        "title": "Margin engine",
        "detail": "Net interest margin and credit costs are the bridge between revenue and profit; the reported operating margin is a spread measure."
      },
      {
        "title": "Capital intensity",
        "detail": "Deposits and CET1 are the capital base; ROE 13.2%, ROIC 13.2%."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Net interest income, fees and credit costs drive revenue and margin. The edge is digital bank and loan marketplace.",
      "The bank earns a spread between asset yields and deposit costs. For a bank, deposits and regulatory capital matter more than a conventional net-debt figure. Return on equity was 13.2%; the key variables are net interest margin, credit costs and capital returns."
    ]
  },
  "growth": {
    "paragraphs": [
      "Reported revenue growth is not a clean like-for-like measure for a bank because the revenue line moves with rates and balance-sheet mix. The latest quarter (Q3 FY26) fell 1.2% year over year. The current-year consensus looks for $1B of revenue and $1.89 of EPS.",
      "The next leg depends on deposit growth and credit normalisation. For Happen, top-line growth only matters if it is priced above funding costs and credit losses."
    ],
    "bullets": [
      {
        "title": "Net interest income",
        "detail": "Loan and securities yields less funding costs are the core revenue line. Revenue growth is 10.0%."
      },
      {
        "title": "Fee income",
        "detail": "Advisory, asset management and trading diversify the revenue base. Net interest margin and credit costs are the key variables; revenue growth is 10.0%."
      },
      {
        "title": "Capital returns",
        "detail": "Buybacks and dividends can grow per-share value when capital is abundant. Return on equity is 13.2%."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "For a bank, the operating margin is a spread measure and the reported history is not comparable across rate cycles. Return on equity was 13.2%, and diluted EPS was $1.79.",
      "Return on equity was 13.2%. For a bank, return on invested capital is distorted by deposit funding; net interest margin, credit costs and capital ratios are the more useful comparisons."
    ]
  },
  "cash": {
    "paragraphs": [
      "Reported free cash flow was -$2.9B, but it is not comparable to the reported revenue line in the current data. The cash profile is better judged through the balance sheet than the free-cash-flow margin.",
      "For a bank, deposits and regulatory capital matter more than a conventional net-debt figure. Cash flow is shaped by balance-sheet movements, so the free-cash-flow margin is less comparable than it is for an industrial."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $14.59, the shares trade at 8.0x trailing earnings and no meaningful EV/EBITDA multiple, with a -171.0% free-cash-flow yield. The earnings yield is 12.5%. The earnings multiple is 33.6% below the 12.0x peer median.",
      "The multiple implies the market expects little growth and assumes the current margin is close to peak. The multiple is below the peer median, so some of the risk is already in the price. For a bank, price-to-book and P/E are more relevant than EV/EBITDA."
    ]
  },
  "analysts": {
    "paragraphs": [
      "8 analysts in the third-party consensus carry a mean target of $23.88, 63.6% above the latest close. The range runs from $20.00 to $29.00. That is the published view, not a Stockmonk target.",
      "The current-year consensus looks for $1B of revenue and $1.89 of EPS. EPS estimates are up 2.5% over 30 days and up 2.0% over 90 days. That implies a 0.4% decline from the trailing base."
    ]
  },
  "risks": {
    "intro": "The central tension is deposit growth and credit normalisation versus credit and funding costs.",
    "items": [
      {
        "title": "Credit and funding costs",
        "severity": "High",
        "detail": "The main risk is credit and funding costs.",
        "watch": "Provisions, charge-offs and non-performing loans."
      },
      {
        "title": "Interest rates",
        "severity": "High",
        "detail": "Rate changes affect net interest income and deposit repricing.",
        "watch": "Net interest income guidance and deposit betas."
      },
      {
        "title": "Regulation",
        "severity": "Medium",
        "detail": "Capital and liquidity rules influence returns and buybacks.",
        "watch": "Stress tests and CET1 requirements."
      },
      {
        "title": "Capital markets cyclicality",
        "severity": "Medium",
        "detail": "Advisory and trading revenue can fall quickly.",
        "watch": "Investment banking fees and trading revenue."
      },
      {
        "title": "Competition",
        "severity": "Medium",
        "detail": "Deposit and loan pricing competition can compress spreads.",
        "watch": "Loan and deposit growth relative to peers."
      }
    ],
    "watchlist": [
      {
        "title": "Net interest income",
        "detail": "The largest revenue line and the most rate-sensitive."
      },
      {
        "title": "Credit costs",
        "detail": "Provisioning is the main swing factor in a downturn."
      },
      {
        "title": "Capital returns",
        "detail": "Buybacks depend on capital ratios and stress-test results."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "The investment case rests on valuation and the durability of 13.2% returns on equity. The weak link is cash generation.",
      "What would change the view is the free-cash-flow margin rising above -272.2%, not a single quarter. The key exposure is credit and funding costs.",
      "The scorecard averages 59/100, but the dispersion matters more: valuation is 99/100 and cash generation is 4/100."
    ],
    "questions": [
      "How much of net interest income is rate-sensitive?",
      "Is credit provisioning normalising or deteriorating?",
      "What does regulation do to buybacks?",
      "How sustainable is the current return on equity?"
    ]
  }
};
