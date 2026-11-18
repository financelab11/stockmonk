import type { StockStory } from "./types";

export const BKNG: StockStory = {
  "ticker": "BKNG",
  "kicker": "Travel · Online booking",
  "title": "Booking Holdings earns a commission on other people's holidays",
  "dek": "The company takes reservations for hotels, flights and cars and keeps a slice of each one. A 32.8% operating margin depends on marketing spend staying under control.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $28.1B trailing twelve months, +8.0% year over year.",
    "Profitability: 32.8% operating margin and 13.3% net margin.",
    "Cash: $9.2B free cash flow, a 32.8% margin.",
    "Scorecard: 67/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001075531&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Booking Holdings Inc. generated $28.1B of revenue over the last twelve months, +8.0% versus the prior year. The business depends on traffic, basket size and the cost of serving the next customer.",
      "The latest reported quarter was Q3 FY26, with $8.9B of revenue and an operating margin of 38.4%. The stock closed at $154.46 on 2026-11-17, giving a market capitalization of $114.9B.",
      "The shares sit 11% of the way up their 52-week range ($146.28 to $220.81). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "An online travel agent sells distribution to hotels and buys demand from search engines. The spread between the two is the business."
  },
  "whatItDoes": {
    "paragraphs": [
      "Accommodation is the core: hotels, apartments and homes, sold either on a merchant basis, where the company takes the customer's payment and later remits it to the property, or on an agency basis, where the property collects and the company invoices its commission. That distinction drives the balance sheet, because merchant bookings put customer cash on the company's books for a few weeks.",
      "Flights, rental cars, restaurant reservations and cruises sit around the accommodation core, mostly as a way to keep travellers inside the brands. The company employs 26,400 people, and its customers are global. The network effect is weaker than it looks: a traveller can book the same room on several sites, so the platforms compete on price, selection and the quality of the search experience rather than on lock-in."
    ],
    "bullets": [
      {
        "title": "Merchant model",
        "detail": "The company takes payment and remits to the property later. Creates a cash float and some currency exposure."
      },
      {
        "title": "Agency model",
        "detail": "The property collects and pays a commission. Less cash on the balance sheet, similar economics."
      },
      {
        "title": "Advertising and other",
        "detail": "KAYAK and the restaurant booking business earn from referrals and advertising rather than commissions."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a commission on a booking. Gross margin is 69.6%, which leaves room for payment processing and customer service but not for the largest cost: marketing. Performance advertising and brand spending take the operating margin down to 32.8%.",
      "That is the unit economic that matters. Each incremental booking costs almost nothing to serve, but winning it requires paid traffic. The margin therefore depends on the mix between direct and repeat visits, which cost less, and paid search, which does not. A shift of a few points in that mix moves operating profit more than a similar shift in booking volume.",
      "The fall from a 32.8% operating margin to a 13.3% net margin is large, and it happens below the operating line: interest, taxes and non-operating items take a substantial share. A reader comparing the two should not assume the difference is a one-off."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 10.2% a year across the fiscal years in the dataset, and the latest quarter changed -1.3% year over year. Third-party estimates for the current fiscal year point to $28.5B of revenue and $10.42 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 32.8% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 32.8%, the net margin is 13.3% and diluted EPS is $168.21. The latest quarter's operating margin was 38.4%.",
      "Return on equity is -19.5%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $8.9B, an operating margin of 38.4% and a net margin of 152.8%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $9.2B, a 32.8% margin. The balance sheet carries $15.8B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $9.2B over the last twelve months and net debt was -$15.8B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 30.7x trailing earnings and 10.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $215.53; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "34 analysts contribute to the third-party consensus. The mean target is $215.53, with a range of $150.00 to $267.00.",
      "Current-year estimates call for $28.5B of revenue and $10.42 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 34 analysts with a mean target of $215.53; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Booking's risks are demand, traffic cost and the travel cycle. The balance sheet is strong, so the pressure arrives through the marketing line rather than through solvency.",
    "items": [
      {
        "title": "Travel demand",
        "severity": "High",
        "detail": "Bookings depend on household travel budgets. A recession or a security shock can postpone trips, and a postponed trip is often never taken.",
        "watch": "Room night growth and quarterly revenue against the prior year."
      },
      {
        "title": "Cost of search traffic",
        "severity": "High",
        "detail": "Marketing is the largest cost after the cost of revenue. If paid traffic becomes more expensive, the operating margin falls before revenue does.",
        "watch": "Marketing spend as a share of revenue and the direct booking mix."
      },
      {
        "title": "Competition from hotels and platforms",
        "severity": "Medium",
        "detail": "Hotels want direct bookings and other platforms want the same customer. Both raise the price of winning a reservation.",
        "watch": "Take rate and the growth of alternative accommodation."
      },
      {
        "title": "Regulation of short-term rentals",
        "severity": "Medium",
        "detail": "Local rules on apartment rentals can remove inventory in the cities where alternative accommodation is most profitable.",
        "watch": "Changes to local accommodation rules in major markets."
      },
      {
        "title": "Currency and geopolitics",
        "severity": "Medium",
        "detail": "Revenue is earned across many currencies and borders. Exchange rates and travel restrictions move the reported result without changing the underlying business.",
        "watch": "The currency effect on revenue and regional booking trends."
      }
    ],
    "watchlist": [
      {
        "title": "Marketing efficiency",
        "detail": "Revenue per dollar of marketing spend is the clearest signal of whether the moat is holding."
      },
      {
        "title": "Room night growth",
        "detail": "Volume is the base of the commission; price alone cannot carry the model."
      },
      {
        "title": "Cash conversion",
        "detail": "The float makes free cash flow look better than profit, so track the change in customer payables."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Booking Holdings is a marketplace with $28.1B of revenue, a 32.8% operating margin and $9.2B of free cash flow. It holds $15.8B of net cash and has bought back enough stock to make book equity negative.",
      "The business has recovered fully from the pandemic and then some: revenue more than doubled from FY2021 to FY2025 and the margin reached a record for the period. The latest quarter's 1.3% decline is the first sign that the recovery is behind it.",
      "The valuation is undemanding on EBITDA and free cash flow, which is what a mature travel intermediary should look like. The risk is that the marketing line, not the demand line, is what breaks first."
    ],
    "questions": [
      "What share of bookings comes from repeat or direct traffic rather than paid search?",
      "Is the take rate rising, or is growth coming only from volume?",
      "How much of the free cash flow is the customer-payment float rather than profit?",
      "What happens to the margin if travel demand falls 10%?"
    ]
  }
};
