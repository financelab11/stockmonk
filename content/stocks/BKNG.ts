import type { StockStory } from "./types";

export const BKNG: StockStory = {
  ticker: "BKNG",
  kicker: "Travel · Online booking",
  title: "Booking Holdings earns a commission on other people's holidays",
  dek: "The company takes reservations for hotels, flights and cars and keeps a slice of each one. A 32.8% operating margin depends on marketing spend staying under control.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $28.1B, up 8.0%, with a 69.6% gross margin.",
    "Operating margin 32.8%, but net margin only 13.3%.",
    "Free cash flow $9.2B, 32.8% of revenue, and $15.8B of net cash.",
    "The shares trade at 31.9x earnings but 10.6x EV/EBITDA and 12.9x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001075531&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Booking Holdings owns the storefronts, including Booking.com, Priceline, Agoda and KAYAK, but not the hotel rooms behind them. It earns a commission when a reservation is made and paid, which makes it a marketplace with almost no inventory risk and a marketing bill instead.",
      "Trailing revenue was $28.13B, up 8.0%. The September quarter produced $8.89B at a 38.4% operating margin, and the shares closed at $160.66, inside a 52-week range of $146.28 to $220.81, for a market capitalisation of $119.5B.",
      "Whether growth comes from more bookings or from a higher take rate, and how much of the margin is protected from the rising cost of search traffic, are the two things to test. Revenue fell 1.3% in the latest quarter, which is the first evidence in this file that the travel cycle may be turning.",
    ],
    quote:
      "An online travel agent sells distribution to hotels and buys demand from search engines. The spread between the two is the business.",
  },
  whatItDoes: {
    paragraphs: [
      "Accommodation is the core: hotels, apartments and homes, sold either on a merchant basis, where the company takes the customer's payment and later remits it to the property, or on an agency basis, where the property collects and the company invoices its commission. That distinction drives the balance sheet, because merchant bookings put customer cash on the company's books for a few weeks.",
      "Flights, rental cars, restaurant reservations and cruises sit around the accommodation core, mostly as a way to keep travellers inside the brands. The company employs 26,400 people, and its customers are global. The network effect is weaker than it looks: a traveller can book the same room on several sites, so the platforms compete on price, selection and the quality of the search experience rather than on lock-in.",
    ],
    bullets: [
      {
        title: "Merchant model",
        detail:
          "The company takes payment and remits to the property later. Creates a cash float and some currency exposure.",
      },
      {
        title: "Agency model",
        detail:
          "The property collects and pays a commission. Less cash on the balance sheet, similar economics.",
      },
      {
        title: "Advertising and other",
        detail:
          "KAYAK and the restaurant booking business earn from referrals and advertising rather than commissions.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a commission on a booking. Gross margin is 69.6%, which leaves room for payment processing and customer service but not for the largest cost: marketing. Performance advertising and brand spending take the operating margin down to 32.8%.",
      "That is the unit economic that matters. Each incremental booking costs almost nothing to serve, but winning it requires paid traffic. The margin therefore depends on the mix between direct and repeat visits, which cost less, and paid search, which does not. A shift of a few points in that mix moves operating profit more than a similar shift in booking volume.",
      "The fall from a 32.8% operating margin to a 13.3% net margin is large, and it happens below the operating line: interest, taxes and non-operating items take a substantial share. A reader comparing the two should not assume the difference is a one-off.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $10.96B in FY2021, a travel-depressed base, to $26.92B in FY2025. The latest fiscal year grew 8.0% and the latest quarter fell 1.3%, a sharp deceleration that matters more than the annual figure.",
      "The attributed consensus expects $28.62B this fiscal year and $31.55B next, with $6.52B next quarter. That implies about 6% then 10% growth, an unusual shape for a travel business that is usually strongest in the summer quarter.",
      "The drivers are international travel, alternative accommodation, the connected trip and advertising. The constraint is competition for the same rooms from other platforms and from hotels selling direct, which raises the cost of winning each booking.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 22.8% in FY2021, 29.8% in FY2022, 27.3% in FY2023, 31.8% in FY2024 and 32.8% in FY2025. The recovery from the pandemic year is the dominant feature: revenue more than doubled while the cost base grew more slowly, and the margin followed.",
      "Quarterly margins run from 23.0% in the March quarter to 38.7% in the September quarter. That is seasonality, not volatility: the summer booking season carries the year, and a weak summer cannot be recovered in the winter.",
      "Return on equity is -19.5% because buybacks have pushed equity below zero, and return on invested capital is not available in this dataset. The useful return measure here is the operating margin combined with the free-cash-flow conversion described below.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $2.52B in FY2021, $6.19B in FY2022, $7.00B in FY2023, $7.89B in FY2024 and $9.09B in FY2025, or $9.24B trailing at a 32.8% margin. That margin is higher than the operating margin because customer cash arrives before supplier payments, which flatters the cash flow statement relative to the income statement.",
      "The balance sheet holds $15.81B of net cash. The negative equity is a result of repurchases, not distress: the company has bought back enough stock to leave book equity negative while holding more cash than debt.",
      "At 12.9x free cash flow and a 7.7% free-cash-flow yield, the shares are priced as a cash-generative mature business. The float means the cash figure should be read alongside the change in customer payables, which can move it by a lot in a single year.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $160.66 the shares trade at 31.9x trailing earnings, 10.6x EV/EBITDA, 3.7x sales and 12.9x free cash flow. The earnings multiple is three times the EBITDA multiple, which points to charges below the operating line rather than to a weak operating business.",
      "The peer table puts the EBITDA multiple in context. McDonald's trades at 17.3x, Home Depot at 16.1x, TJX at 15.6x, Amazon at 15.6x and Lowe's at 12.9x. Booking is the cheapest on EBITDA of that group and among the cheapest in the covered universe, at the 78th percentile for cheapness.",
      "A 10.6x multiple on a business with a 32.8% operating margin is not demanding, provided travel demand holds and marketing efficiency does not deteriorate. No target price is attached to this analysis.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-five analysts contribute to the attributed consensus, with a mean target of $215.80 and a range of $150.00 to $267.00. The low end is below the current price, which makes the distribution less one-sided than most in this batch.",
      "Estimates call for $6.52B of revenue next quarter and $28.62B for the current fiscal year, then $31.55B. The sequential pattern is seasonal, so the following quarter's $5.87B is not a signal of decline.",
      "The revenue estimates are the reliable part of the consensus here. Earnings estimates for a company with a negative equity base and a large cash float are harder to compare across analysts, because small changes in below-the-line items move the per-share figure a long way.",
    ],
  },
  risks: {
    intro:
      "Booking's risks are demand, traffic cost and the travel cycle. The balance sheet is strong, so the pressure arrives through the marketing line rather than through solvency.",
    items: [
      {
        title: "Travel demand",
        severity: "High",
        detail:
          "Bookings depend on household travel budgets. A recession or a security shock can postpone trips, and a postponed trip is often never taken.",
        watch:
          "Room night growth and quarterly revenue against the prior year.",
      },
      {
        title: "Cost of search traffic",
        severity: "High",
        detail:
          "Marketing is the largest cost after the cost of revenue. If paid traffic becomes more expensive, the operating margin falls before revenue does.",
        watch:
          "Marketing spend as a share of revenue and the direct booking mix.",
      },
      {
        title: "Competition from hotels and platforms",
        severity: "Medium",
        detail:
          "Hotels want direct bookings and other platforms want the same customer. Both raise the price of winning a reservation.",
        watch:
          "Take rate and the growth of alternative accommodation.",
      },
      {
        title: "Regulation of short-term rentals",
        severity: "Medium",
        detail:
          "Local rules on apartment rentals can remove inventory in the cities where alternative accommodation is most profitable.",
        watch:
          "Changes to local accommodation rules in major markets.",
      },
      {
        title: "Currency and geopolitics",
        severity: "Medium",
        detail:
          "Revenue is earned across many currencies and borders. Exchange rates and travel restrictions move the reported result without changing the underlying business.",
        watch:
          "The currency effect on revenue and regional booking trends.",
      },
    ],
    watchlist: [
      {
        title: "Marketing efficiency",
        detail:
          "Revenue per dollar of marketing spend is the clearest signal of whether the moat is holding.",
      },
      {
        title: "Room night growth",
        detail:
          "Volume is the base of the commission; price alone cannot carry the model.",
      },
      {
        title: "Cash conversion",
        detail:
          "The float makes free cash flow look better than profit, so track the change in customer payables.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Booking Holdings is a marketplace with $28.1B of revenue, a 32.8% operating margin and $9.2B of free cash flow. It holds $15.8B of net cash and has bought back enough stock to make book equity negative.",
      "The business has recovered fully from the pandemic and then some: revenue more than doubled from FY2021 to FY2025 and the margin reached a record for the period. The latest quarter's 1.3% decline is the first sign that the recovery is behind it.",
      "The valuation is undemanding on EBITDA and free cash flow, which is what a mature travel intermediary should look like. The risk is that the marketing line, not the demand line, is what breaks first.",
    ],
    questions: [
      "What share of bookings comes from repeat or direct traffic rather than paid search?",
      "Is the take rate rising, or is growth coming only from volume?",
      "How much of the free cash flow is the customer-payment float rather than profit?",
      "What happens to the margin if travel demand falls 10%?",
    ],
  },
};
