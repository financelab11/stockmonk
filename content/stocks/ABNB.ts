import type { StockStory } from "./types";

export const ABNB: StockStory = {
  ticker: "ABNB",
  kicker: "Travel · Short-term rental marketplace",
  title: "Airbnb is a two-sided marketplace with a summer-shaped year",
  dek: "Guests pay, hosts supply the rooms, and Airbnb keeps a fee on both sides. The model is asset-light and highly seasonal, which makes the summer quarter carry the annual result.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $13.9B, up 16.7%, at an 83.1% gross margin and a 22.5% operating margin.",
    "The three summer quarters in the record earned 39.7%, 41.5% and 21.0% operating margins; the first quarter of fiscal 2026 earned 3.2%.",
    "The dataset carries no trailing free-cash-flow figure, so cash conversion has to be judged from the $10.2B net cash balance instead.",
    "At 43.1x EV/EBITDA the shares are the most expensive in this travel peer group, and the scorecard ranks them in the 15th percentile for cheapness.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001559720&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Airbnb runs a marketplace for stays. Hosts list rooms, apartments and houses; guests book them; the company collects a fee from the transaction and never owns the property. The description in the filing counts roughly 4 million hosts who have welcomed more than 800 million guest arrivals across about 100,000 cities, and the company does it with 5,597 employees.",
      "That is an unusual combination: a global accommodation business with no buildings, no housekeeping staff and no inventory risk. Revenue of $13.9B is up 16.7% on a trailing basis, and the gross margin of 83.1% shows how little each additional booking costs to serve once the platform exists.",
      "The shares closed at $189.99, for a market capitalisation of $120.6B, just below the top of a 52-week range of $110.81 to $193.45. The stock is up 57.6% over the past year but down 5.2% over five years, a reminder that this was once priced for much faster growth than it has delivered.",
    ],
    quote:
      "The platform's profit is the gap between what a guest pays and what a host receives. Everything about the business — trust, supply density, regulation — affects the size of that gap or the number of times it is charged.",
  },
  whatItDoes: {
    paragraphs: [
      "Supply is the product. A guest chooses a destination and a date, and the platform has to show enough credible options that the guest books rather than opening a hotel site. Density in a city is therefore the thing that makes the marketplace work: more listings improve the odds of a match, and more bookings attract more hosts.",
      "Demand is leisure-led, with a meaningful share of longer stays and family or group travel where a whole home beats several hotel rooms. The guest segment matters for the economics: a group splitting a house is less price-sensitive than a business traveller on an expense account, but also more exposed to a consumer slowdown.",
      "The company also sells experiences and services alongside stays, and hosts pay for additional tools. Those are smaller lines, but they matter strategically because they increase the revenue per booking without adding a night of accommodation.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a percentage of the value of the booking, not the value itself. That single sentence explains most of the financial statements: a $1,000 stay might produce a few hundred dollars of revenue, so the company's top line grows with nights booked and with average daily rates, and it is unaffected by the cost of the room.",
      "The cost of revenue is mostly payment processing, customer support and the technology to run the platform. Everything else — engineering, marketing, administration — is largely fixed in the short run. That is why an 83.1% gross margin turns into a 22.5% operating margin rather than a much higher one: the fixed costs are big, and they do not shrink when bookings fall.",
      "Seasonality is the defining feature of the income statement. Operating margin was 19.8% in Q2 FY25, 39.7% in Q3 FY25 and 9.7% in Q4 FY25, then 3.2% in Q1 FY26, 21.0% in Q2 FY26 and 41.5% in Q3 FY26. The fixed cost base is spread over a demand curve that peaks in the northern summer, so a single quarter's margin tells you more about the calendar than about the business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 16.9% a year across the five fiscal years in the dataset, from $5.99B in fiscal 2021 to $12.24B in fiscal 2025. The trailing figure is $13.9B after 16.7% growth and the latest quarter grew 18.9%, so the rate has been remarkably stable through a period when travel demand normalised.",
      "Growth comes from four places: more nights booked, higher average daily rates, more revenue per booking through adjacent lines, and expansion into countries where the platform is less penetrated. The first two are the traditional drivers and both are now mature in the largest markets. The last two are the ones that can keep the rate in the mid-teens.",
      "The consensus expects $14.38B of revenue and $5.56 of EPS this fiscal year, then $16.10B and $6.35 next year. The step up to 12% revenue growth in the following year assumes some acceleration from the current pace, which would have to come from new markets or from the adjacent businesses rather than from the core stay product.",
      "The main constraint is supply-side regulation. Several cities limit short-term rentals, require registration or impose taxes, and each restriction reduces the number of bookable nights in that market. The company can adapt, but it cannot create listings where local law forbids them.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income moved from $429.0M in fiscal 2021 to $1.80B in fiscal 2022, $1.52B in fiscal 2023, $2.55B in fiscal 2024 and $2.54B in fiscal 2025. The flat year in fiscal 2023 is instructive: revenue grew 18% while operating income fell, because spending on marketing and product rose faster than the top line. In fiscal 2024 the company held revenue growth and let the margin recover.",
      "Net income is a less reliable guide than operating income here. It was negative $352.0M in fiscal 2021, then $1.89B in fiscal 2022, $4.79B in fiscal 2023, $2.65B in fiscal 2024 and $2.51B in fiscal 2025, and the trailing net margin of 30.6% is above the operating margin of 22.5%. When net margin exceeds operating margin, something below the operating line is adding to profit — interest income on the cash balance, or gains on investments — and that source should not be treated as permanent.",
      "Return on equity of 45.7% and return on invested capital of 23.8% are both high, and they are high for the same reason: the business needs very little capital. The equity base is small relative to profit, so any change in earnings moves the return sharply.",
    ],
  },
  cash: {
    paragraphs: [
      "The dataset does not carry a trailing free-cash-flow figure for Airbnb, so the usual check — comparing earnings with cash — cannot be done from these tables. What is visible is $10.2B of net cash on the balance sheet, which is consistent with a business that earns a high margin on a small asset base.",
      "For a marketplace, the cash-flow statement has two unusual features. Guest payments arrive before host payouts, so the platform holds money that belongs to hosts for a short period; that timing can flatter operating cash flow. And stock-based compensation is a real cost to owners even though it is added back in the cash-flow statement, so free cash flow overstates the cash available for shareholders by that amount.",
      "With no factories, no property and no inventory, capital expenditure is small. The cash is therefore available for buybacks, for the balance sheet, or for investment in new markets. The absence of a reported figure in this dataset means a reader should go to the filing's cash-flow statement before drawing a conclusion about how much is actually being generated.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $189.99 the shares trade at 28.3x trailing earnings, 43.1x EV/EBITDA and 7.9x sales. Those are growth multiples, and they sit on a company whose revenue is growing in the high teens and whose operating margin is in the low twenties.",
      "The comparison with Booking Holdings is the most useful one in this peer set. Booking trades at 10.6x EV/EBITDA on a 32.8% operating margin and 8.0% revenue growth. Airbnb trades at 43.1x on a lower operating margin and faster growth. The gap is large enough that it has to be explained by something other than the numbers on the page — brand, supply density, or the expectation that margins will expand as the fixed cost base matures.",
      "A 43x EV/EBITDA multiple assumes that the current margin is a floor and that growth persists. If either assumption weakens, the multiple has more room to fall than the earnings have to disappoint. Stockmonk does not publish a target price.",
      "The share price history makes that risk concrete. The stock is up 57.6% over the past year and down 5.2% over five, while revenue more than doubled from $5.99B to $13.93B. The business compounded and the share price did not, because the multiple it started from was higher than the one it trades on now.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty analysts contribute to the third-party consensus, with a mean target of $200.40 and a range of $135.00 to $245.00. The low end is close to 29% below the current price, which is a wide spread for a company of this size.",
      "Estimates are $3.26B of revenue and $0.80 of EPS next quarter, then $3.05B and $0.41, then $14.38B and $5.56 for the full fiscal year. The drop from the fourth-quarter revenue estimate to the first-quarter figure is normal seasonality, not a forecast of decline.",
      "The consensus is a set of third-party views and changes with the travel cycle. A mean target above the current price is not an endorsement, and a 40-analyst average hides a considerable range of assumptions about regulation and margin.",
    ],
  },
  risks: {
    intro:
      "Airbnb's risks are external. The financial model is strong and the balance sheet has net cash, so the threats come from regulators, competitors and the travel cycle rather than from the capital structure.",
    items: [
      {
        title: "Short-term rental regulation",
        severity: "High",
        detail:
          "Cities and countries can cap nights, require permits or ban certain listings. Each rule reduces bookable supply in that market and can spread to others.",
        watch:
          "Registration requirements in the largest cities and the number of active listings there.",
      },
      {
        title: "Travel demand cyclicality",
        severity: "High",
        detail:
          "Leisure travel is discretionary. A consumer slowdown reduces nights booked, and because costs are fixed, it hits the operating margin harder than revenue.",
        watch:
          "Nights and gross booking value growth, especially in the off-season quarters.",
      },
      {
        title: "Competition for supply and guests",
        severity: "Medium",
        detail:
          "Hotels, online travel agencies and other rental platforms compete for the same trip. Discounting or higher host incentives would lower the take rate.",
        watch:
          "Take rate, marketing spend as a share of revenue and host churn.",
      },
      {
        title: "Trust and safety incidents",
        severity: "Medium",
        detail:
          "A serious incident in a listing damages the brand in a way that advertising cannot repair. The platform's quality controls matter more than its growth rate in that moment.",
        watch:
          "Verification policies, insurance coverage and any change in guest refunds.",
      },
      {
        title: "Margin dependency on fixed costs",
        severity: "Medium",
        detail:
          "The 22.5% operating margin exists because fixed costs are spread across a large booking base. If growth stalls, the same costs produce a much thinner margin.",
        watch:
          "Operating margin in the seasonally weak quarters, not only in the summer.",
      },
    ],
    watchlist: [
      {
        title: "Nights and average daily rate",
        detail:
          "Volume and price move the top line separately. A rising rate with falling nights is a different business from the reverse.",
      },
      {
        title: "Take rate",
        detail:
          "Revenue as a share of booking value. A falling take rate means the platform is paying to keep either guests or hosts.",
      },
      {
        title: "Cash conversion",
        detail:
          "The dataset omits free cash flow, so the filing's cash-flow statement is the place to check how much of the operating profit becomes cash.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Airbnb is an asset-light marketplace with a genuinely global supply base, a high gross margin and a seasonal profit pattern. Trailing revenue is $13.9B, operating margin is 22.5% and the balance sheet holds $10.2B of net cash.",
      "The educational point is the difference between gross margin and operating margin in a platform business. An 83.1% gross margin sounds like a software company, but the fixed costs of engineering, marketing and support are what turn it into a 22.5% operating margin. In the weakest quarter of the year, that same cost base produces 3.2%.",
      "The open questions are about durability rather than solvency: whether regulation shrinks the addressable market, whether the take rate holds as competition intensifies, and whether a 43x EBITDA multiple can survive a year of slower bookings.",
    ],
    questions: [
      "How much of revenue growth comes from nights booked rather than from higher nightly rates?",
      "What share of listings sits in cities with active restrictions on short-term rentals?",
      "Why does net margin exceed operating margin, and is that source of income repeatable?",
      "What does the summer quarter's margin look like after stock-based compensation?",
    ],
  },
};
