import type { StockStory } from "./types";

export const ORCL: StockStory = {
  "ticker": "ORCL",
  "kicker": "Technology · Enterprise software and cloud infrastructure",
  "title": "Oracle is trading a software multiple for a data-center balance sheet",
  "dek": "Revenue is accelerating while free cash flow is deeply negative. This report explains why those two facts belong in the same paragraph.",
  "readingMinutes": 9,
  "takeaways": [
    "First-quarter fiscal 2027 revenue was $19.3B, up 29.6%, with a 34.8% operating margin and EPS of $1.56.",
    "Trailing revenue is $71.8B, up 21.6%, but free cash flow is negative $28.7B as capex reached $55.7B in fiscal 2026.",
    "Net debt is $88.3B, about 2.7x EBITDA, and interest cover is 4.5x; the balance sheet is the constraint.",
    "{{pe}} trailing earnings and {{evEbitda}} EV/EBITDA are discounts to peer medians of 32.0x and 25.5x."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001341439&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Cloud infrastructure demand is accelerating the top line, but it is also changing the balance sheet. Revenue reached $19.3B in the first fiscal quarter, up 29.6%, with an operating margin of 34.8%, a net margin of 24.6% and EPS of $1.56. Growth has accelerated from 8.4% in fiscal 2025 to 17.3% in fiscal 2026 and 21.6% trailing. The growth is concentrated in cloud infrastructure, and the multiple is trying to resolve that tension.",
      "The business is a high-margin annuity with a capital-intensive rental arm attached. Database support and applications generate recurring revenue at low incremental cost; cloud infrastructure requires Oracle to buy servers, networking and data-center capacity before a customer pays. Cloud & Software is 86.9% of revenue, Services 8.5% and Hardware 4.6%. The question is whether support revenue can fund the transition while the rental arm scales. The support base is the funding source for the build.",
      "The {{pe}} trailing multiple and {{evEbitda}} EV/EBITDA are discounts to peer medians of 32.0x and 25.5x. The discount is not a hidden bargain; it reflects negative free cash flow, $88.3B of net debt and a 4.5x interest cover. The market is asking whether the new capacity is contracted before it is built, and no backlog figure is disclosed. The balance sheet is the constraint on the answer. That is the central test."
    ],
    "quote": "Oracle's software annuity still funds the dividend; the data-center build is a leveraged wager that the capacity will be rented at a return."
  },
  "whatItDoes": {
    "paragraphs": [
      "Oracle reports as one operating company, so the consolidated revenue line is what the tables show. Behind it sit three businesses. The first is the database and middleware franchise: licenses, support and maintenance on software that runs payroll, supply chains and transaction systems at very large organizations.",
      "The second is applications — finance, human resources, supply chain and industry suites for large enterprises, plus a mid-market accounting and planning product. The third is cloud infrastructure, where Oracle rents compute, storage and database services, including capacity aimed at artificial-intelligence training and inference.",
      "The parts have different economics. Support renewals on existing licenses arrive with very little incremental cost. Cloud infrastructure requires Oracle to buy servers, networking and data-center capacity before a customer pays for any of it. The company employs 135,000 people, and the mix between the three parts decides whether the consolidated margin holds."
    ],
    "bullets": [
      {
        "title": "Database and support",
        "detail": "License and support revenue on software already installed at large enterprises. High margin, slow growth, very sticky."
      },
      {
        "title": "Applications",
        "detail": "Enterprise resource planning, human capital and industry suites, plus a mid-market product. Sold on subscription."
      },
      {
        "title": "Cloud infrastructure",
        "detail": "Rented compute and database services, including capacity for AI workloads. Capital-hungry and priced against hyperscale competitors."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Support contracts are the engine of the historical margin. A customer running Oracle databases pays an annual fee to keep them patched, supported and licensed, and the cost of providing that is small relative to the fee. That is why gross margin has held at 64.0% even as lower-margin hardware and cloud capacity have grown.",
      "Cloud infrastructure inverts the model. Oracle builds capacity first — land, power, servers, networking — and rents it afterwards. Revenue from a new region arrives after depreciation has started. The 32.1% operating margin is therefore a blend of a very high-margin annuity and a capital-intensive rental business, and the blend moves as the second grows faster than the first.",
      "The unit economics to watch are revenue per dollar of capital spent and the depreciation life assigned to the equipment. A long useful life flatters near-term margins and moves the cost into later years, which is why the accounting policy note matters as much as the growth rate."
    ]
  },
  "growth": {
    "paragraphs": [
      "Cloud & Software is 86.9% of revenue and the growth vector, while database support is the profit pool. Revenue reached $53.0B in fiscal 2024, $57.4B in fiscal 2025, $67.4B in fiscal 2026 and $71.8B trailing. The growth rates were 6.0%, 8.4%, 17.3% and 21.6%, and the first quarter grew 29.6%. That is an unusual acceleration for a mature software company.",
      "Revenue is shifting toward infrastructure, which should compress the consolidated margin. Yet the trailing operating margin of 32.1% is above the 30.6% of fiscal 2026, because support revenue and cost discipline are offsetting the mix. The question is how long that offset lasts as the rental arm grows faster than the annuity. The support base is what funds the build.",
      "Consensus for fiscal 2027 is $90.5B revenue and $8.15 EPS, with fiscal 2028 at $131.8B and $11.06. Revenue growth of 34.3% and 45.7% is a large bet on capacity delivery, while EPS growth of 6.8% in fiscal 2027 reflects the depreciation that comes with it. The November quarter is estimated at $21.3B and $1.89. A delay would hit the fiscal 2028 number hardest."
    ],
    "bullets": [
      {
        "title": "AI capacity",
        "detail": "The growth vector is rented compute and database capacity. The revenue arrives after the capex, which is why free cash flow is negative."
      },
      {
        "title": "Support annuity",
        "detail": "Database support and applications are the high-margin base. They fund the transition but grow far more slowly than cloud."
      },
      {
        "title": "Debt load",
        "detail": "Net debt of $88.3B is about 2.7x EBITDA. Interest cover of 4.5x leaves little room for a demand air pocket."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating margin expanded to 34.8% in the first fiscal quarter from 32.0% in the fourth, and the net margin was 24.6%. Trailing operating margin is 32.1% and net margin 26.4%. The expansion is modest given the cloud mix, which suggests support revenue and cost control are doing more work than the headline. The cash statement is where the build shows up.",
      "Trailing return on equity is 28.3% and return on invested capital 11.7%, below the 18.8% peer median. The 32.1% operating margin is above the 27.7% peer median. The accounting returns look strong, but they are calculated on a capital base that is still being built. Free cash flow is negative $28.7B, so the cash return is the opposite of the accounting return."
    ]
  },
  "cash": {
    "paragraphs": [
      "Borrowing funded the build. In fiscal 2026, operating cash flow of $32.0B was outweighed by $55.7B of capex, leaving negative $23.7B; trailing free cash flow was negative $28.7B, a -40.0% margin. Net debt is $88.3B, or 2.7x EBITDA, and interest cover is 4.5x. The dividend yield is 2.0%, a lot of debt for a business with negative free cash flow.",
      "The capital-allocation model is the opposite of Microsoft and Alphabet, where capex is funded from free cash flow. That makes Oracle more sensitive to financing conditions and to the timing of customer payments. The question is whether the capacity is pre-leased or speculative; no contracted backlog is disclosed, so the cash-flow inflection is the evidence to wait for. The refinancing schedule matters as much as the demand story."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Fourteen times fiscal 2027 EPS of $8.15 is the forward anchor, and it is cheap against the 32.0x technology peer median. The {{pe}} trailing multiple is 18.8x and {{evEbitda}} is 10.0x; EV/Sales is 4.5x. P/FCF is not meaningful because free cash flow is negative, and the -8.1% free-cash-flow yield is the more honest signal. The shares have ranged from {{range52}}, sit {{rangePosition}} of the way up that band and have returned {{return1y}}.",
      "The forward multiple assumes the depreciation cycle is manageable. Fiscal 2028 EPS of $11.06 implies about 10x, but both years are calculated before the full depreciation of the new capacity. EV/EBITDA of 10.0x flatters the business for the same reason: capex is not in EBITDA. A low P/E is not cheap when the capital base is still being built. The 2028 estimate is the first clean year.",
      "The peer gap is a leverage discount. Microsoft trades at 26.0x with a 47.1% operating margin and positive free cash flow; Nvidia at 20.9x with 65.2%; Broadcom at 38.6x with 48.0% and manageable leverage. Oracle at 18.8x is the cheapest, but it is the only one with negative free cash flow and a 2.7x net debt load. The discount is earned."
    ]
  },
  "analysts": {
    "paragraphs": [
      "A $236 mean target is more than double the current price, and the $110-to-$400 range is the widest in this group. The 40 analysts disagree about financing and delivery risk, not about the direction of cloud demand. That split is unusual for a company of this size. The range is a financing debate, not a demand debate.",
      "Fiscal 2027 revenue is forecast at $90.5B and EPS at $8.15; fiscal 2028 at $131.8B and $11.06. The November quarter is estimated at $21.3B and $1.89. The 90-day EPS revision is 1.2%, so the estimates are stable rather than rising. The numbers assume the capacity converts into revenue on schedule and margins hold through the depreciation cycle."
    ]
  },
  "risks": {
    "intro": "Oracle's risks concentrate where the balance sheet has changed: capital spending, leverage, and the customers behind the new capacity.",
    "items": [
      {
        "title": "Capital intensity",
        "severity": "High",
        "detail": "Cloud growth consumes cash before it produces it. If billed revenue lags the build, free cash flow stays negative for longer than planned.",
        "watch": "Capital spending, free cash flow, and the gap between the two."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "Net debt of $88.26B is 2.7x EBITDA. Refinancing costs and covenants matter more when operating cash flow is under pressure.",
        "watch": "Net debt to EBITDA, interest expense and the maturity schedule."
      },
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of very large cloud buyers can swing revenue and pricing. Losing one contract would be visible immediately.",
        "watch": "Concentration disclosures and contracted but unbilled backlog."
      },
      {
        "title": "Hyperscale competition",
        "severity": "Medium",
        "detail": "The largest cloud providers sell equivalent compute and database services and can cut price faster than Oracle can cut its capital budget.",
        "watch": "Cloud revenue growth measured against growth in capital spending."
      },
      {
        "title": "Installed-base migration",
        "severity": "Medium",
        "detail": "The on-premise database base is the profit pool. Moving it to Oracle's cloud keeps the customer but changes the margin on that relationship.",
        "watch": "Support revenue trend compared with cloud revenue."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "The single number that decides whether the build is working: how close it gets to zero, and when."
      },
      {
        "title": "Cloud revenue versus capital spending",
        "detail": "Compare the change in each over the same period. Revenue should eventually outrun the spending that produced it."
      },
      {
        "title": "Net debt to EBITDA",
        "detail": "Watch for leverage rising while free cash flow is still negative."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Oracle is a high-margin software annuity with a capital-intensive cloud business attached. Revenue growth has accelerated to 21.6% on a trailing basis and 29.6% in the latest quarter, and the operating margin has expanded to 34.8%.",
      "What the numbers do not settle is whether the new capacity earns an adequate return. Free cash flow of -$28.72B, net debt of $88.26B and a return on invested capital of 11.7% say that question is still open. The consensus expects $90.45B this year and $131.82B next, which is a large bet on delivery.",
      "The educational point is that a low P/E is not automatically cheap when the business has changed shape. For a company funding growth with debt, both P/E and EV/EBITDA flatter the picture until capital spending is subtracted."
    ],
    "questions": [
      "How much of the new cloud capacity is contracted before it is built?",
      "What depreciation life is applied to the servers and data-center equipment?",
      "How much of the $88.26B net debt refinances within two years?",
      "Does support revenue hold up as customers migrate to the cloud?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
