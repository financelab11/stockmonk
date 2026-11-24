import type { StockStory } from "./types";

export const SOFI: StockStory = {
  "ticker": "SOFI",
  "kicker": "Fintech & Crypto · Credit Services",
  "title": "SoFi turned a $484M loss into a $481M profit by lending its own balance sheet",
  "dek": "The swing came from net interest income on loans funded by deposits, not from a software business. Net debt of $45.7B and free cash flow of -$7.43B are what a fast-growing loan book looks like, not signs of distress.",
  "readingMinutes": 9,
  "takeaways": [
    "Net income reached $241.0M in the September 2026 quarter on a 147.5% net margin, a ratio that only makes sense on a net revenue base.",
    "Return on equity of 6.5% and return on invested capital of 4.9% are low for a lender trading at 23.3x earnings.",
    "Deposits fund the loan book, so the profit is a spread decision before it is a software decision.",
    "Twenty-three analysts are split: 11 positive, 10 neutral and four cautious, with a $12 to $30 target range around a $13 price."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000013/sofi-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001818874&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Deposits, not software, explain SoFi's swing from a $483.9M loss in FY2021 to a $481.3M profit in FY2025. The loan book earns a spread over the cost of funding it, and the share of that book funded by deposits rather than warehouse lines or securitisation decides how much of the spread the company keeps. Net income of $241.0M in the September 2026 quarter is the clearest evidence that the model works; the 6.5% return on equity is the evidence that it is not yet working well.",
      "The three segments are a lending book, a deposit and fee business, and a technology platform that sells account processing, core banking and brokerage custody to other institutions. The strategic claim is that they reinforce each other: a member with a checking account is cheaper to lend to, and the platform gives the company fee income that does not consume balance sheet. The platform is the only part with software-like margins, and it is small relative to the loan book.",
      "The multiple is a bet on the return, not on the growth. At 23.3x trailing earnings and 6.5% return on equity, the shares are priced above PayPal at 9.7x and below Robinhood at 30.7x, two businesses with very different balance sheets. EV/EBITDA of 15.3x is not a useful comparison for a deposit-funded lender, because enterprise value includes the deposits that fund the assets. The multiple that matters is the one on book value, which the reported figures do not provide."
    ],
    "quote": "SoFi has proved it can lend profitably; the open question is whether a 6.5% return on equity is a starting point or the ceiling."
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
      "Member cross-sell is the engine, and it is measured in products per member rather than in revenue. A customer who arrives for a student loan refinance and stays for a deposit account, a card and an investment account costs less to acquire with each product. That is the theory behind the three segments, and the product count itself is not disclosed. What is visible is the consequence: deposits have become the funding source, which lowers the cost of the loan book.",
      "The estimates assume growth slows but stays high. Revenue is modelled at $5.1B in 2026, up 40.7%, and $6.4B in 2027, up 26.9%, with EPS of $0.61 and $0.90. That is a forecast of 62.6% EPS growth followed by 47.8%, which is a lot of operating leverage for a lender whose revenue grows with its balance sheet. The EPS path assumes the spread widens or the cost of funding falls.",
      "The technology platform is the part of the model that could change the multiple, and it is the part with the least disclosure. Galileo, Technisys and Apex earn fees from other institutions, do not consume balance sheet and would be valued differently from a loan book. If the platform grows faster than lending, the consolidated multiple should compress toward a software multiple; if it does not, SoFi stays a bank with a fee business attached. The company reports three segments but not the margin inside each."
    ],
    "bullets": [
      {
        "title": "Deposit funding",
        "detail": "The cheaper the deposit base, the more of the loan yield the company keeps; deposit competition is the direct threat to the spread."
      },
      {
        "title": "Credit quality",
        "detail": "Personal loans carry the highest yield and the highest risk, and a rise in unemployment would show up as charge-offs on a book the company now holds."
      },
      {
        "title": "Platform fee income",
        "detail": "Galileo, Technisys and Apex sell infrastructure to other institutions, the only segment with software-like margins and the smallest contributor."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Margins above 100% are the first thing to understand about SoFi's reported figures. An operating margin of 147.1% and a net margin of 119.6% mean the revenue line and the profit lines are not measured on the same basis; a lender's revenue is net of funding cost, and the percentage flatters the business. The honest sequence is net interest income after funding, then credit losses, then operating expense. The reported figures give the endpoints, not the sequence.",
      "What the endpoints show is genuine improvement. The company moved from a $483.9M loss in FY2021 to a $481.3M profit in FY2025, and quarterly net income reached $241.0M in September 2026. EPS of $0.18 in that quarter compares with $0.39 for the whole of FY2025, a striking concentration of earnings in the most recent period. Return on equity of 6.5% and return on invested capital of 4.9% say how much of that profit is earned on the capital employed."
    ]
  },
  "cash": {
    "paragraphs": [
      "For a lender, free cash flow is not the measure it is for a software company. The trailing figure of -$7.4B is a balance-sheet expansion: loan originations sit in operating cash flow, and a growing book consumes cash by design. Reading that number as distress would be a category error. What matters is the spread between loan yields and funding costs, the provision charge and the capital held against risk-weighted assets.",
      "Those three measures are the ones the reported figures do not give in full. Return on equity of 6.5% and return on invested capital of 4.9% are the summary, and they say the book is earning less than a well-run bank should. The capital constraint is the one that binds: growth is limited by the equity held against assets, so a raise dilutes and a slowdown limits the model. Neither is visible in the cash-flow statement."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Twenty-three times earnings is a growth multiple for a bank earning 6.5% on equity. PayPal at 9.7x earns 13.0% on invested capital; Robinhood at 30.7x earns 15.7%; SoFi at 23.3x earns 4.9%. The market is paying for the direction of the return rather than its level, and the peer median of 26.7x is not a helpful anchor because the peer set includes payment networks and brokerages with different balance sheets.",
      "EV/EBITDA of 15.3x should be set aside for a deposit-funded lender. Enterprise value includes the deposits that fund the loan book, and EBITDA is not a measure of a bank's earnings power. The relevant multiple is price to book or price to tangible book, neither of which is in the reported figures, so the P/E and the return on equity have to carry the argument. On those two, the shares are priced for improvement that has not yet appeared.",
      "What would justify the multiple is return on equity moving toward the low teens as deposits replace wholesale funding and credit losses stay contained. What would break it is a rise in charge-offs on unsecured personal loans, which would hit the spread and the capital ratio at the same time. The $12 to $30 target range captures both outcomes, and the current $13 price sits at the bottom of it."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Dispersion is widest at the cautious end for SoFi. Twenty-three analysts contribute, and the published views split eleven positive, ten neutral and four cautious, with a mean target of $21 against a $13 price and a range of $12 to $30. That is not a consensus; it is a debate about whether a 6.5% return on equity deserves a growth multiple.",
      "Estimates have edged up, with EPS revisions of 2.8% over 7 days and 2.7% over 90, and the last four quarters have met or beaten, most recently $0.18 against $0.17. FY2026 EPS of $0.61 implies 62.6% growth and FY2027 of $0.90 implies 47.8%. The consensus is assuming the loan book keeps growing and the spread holds, the same assumption the multiple makes."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
