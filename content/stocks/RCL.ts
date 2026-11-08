import type { StockStory } from "./types";

export const RCL: StockStory = {
  ticker: "RCL",
  kicker: "Cruises · Leisure travel",
  title: "Royal Caribbean sells berths, and the ship is the fixed cost",
  dek: "A cruise line makes money by filling very expensive ships. Occupancy, price per passenger day and fuel decide the profit; the debt raised to build the fleet decides the risk.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $19.1B, up 9.7%, with a 27.6% operating margin earned on full ships.",
    "Fiscal 2025 free cash flow fell to $1.24B from $2.00B even as operating income rose, because new capacity consumes cash before it earns.",
    "Net debt of $21.5B is 3.0x EBITDA and dates from a shutdown that produced a $5.26B net loss in fiscal 2021.",
    "Return on equity of 38.3% is flattered by borrowing; return on invested capital of 12.5% is the stricter test of the fleet.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/884887/000088488726000007/rcl-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000884887&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Royal Caribbean Cruises owns and operates three cruise brands — Royal Caribbean International, Celebrity Cruises and Azamara Club Cruises — and employs 85,000 people. Passengers buy a bundled holiday: a cabin, meals, entertainment and transport between ports. The company owns the ships, the crews and the itinerary, so almost every cost is fixed once the vessel sails.",
      "That structure explains the shape of the financials. Revenue is $19.1B on a trailing basis, up 9.7%, and the operating margin is 27.6%. The latest quarter, Q3 FY26, produced $5.59B of revenue at a 33.5% operating margin, which is the seasonal peak of the summer season.",
      "The shares closed at $327.16, giving a market capitalisation of $87.5B and a price 78% of the way up a 52-week range of $222.22 to $356.39. At 19.2x trailing earnings and 15.3x EV/EBITDA, the market is paying for a full fleet with pricing power, not for a recovery from the shutdown years.",
    ],
    quote:
      "A cruise line has two levers: the price it can charge per passenger day and the share of cabins it fills. Everything else — fuel, food, crew, interest — is mostly the cost of putting the ship to sea.",
  },
  whatItDoes: {
    paragraphs: [
      "The three brands sit at different price points but share the same operating model. Royal Caribbean International is the largest and serves families and younger travellers on big resort-style ships. Celebrity Cruises targets adults who want a quieter, more premium experience. Azamara Club Cruises runs smaller vessels on destination-heavy itineraries.",
      "The customer buys a voyage, not a single night, so demand is booked months ahead. That forward book is the industry's real order pipeline: management can see occupancy and pricing for future sailings before the quarter begins, which makes revenue more predictable than a hotel's but also means a weak booking season shows up in results with a lag.",
      "Itineraries are concentrated in the Caribbean and the Mediterranean, with the rest spread across Alaska, northern Europe and Asia Pacific. Deployment is a capital-allocation decision: moving a ship to a stronger market costs fuel and time, but it is faster than building a new one.",
    ],
    bullets: [
      {
        title: "Ticket revenue",
        detail:
          "The cabin fare is the base. It covers the voyage and is priced against hotels, resorts and other cruise lines rather than against other cruises alone.",
      },
      {
        title: "Onboard revenue",
        detail:
          "Drinks, speciality dining, shore excursions, wifi and retail are sold once the guest is aboard. They carry high incremental margins because the ship and crew are already paid for.",
      },
      {
        title: "The fleet",
        detail:
          "Ships are ordered years in advance and delivered in steps. Capacity growth therefore arrives in lumps rather than as a smooth annual percentage.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is passengers multiplied by nights and then by the average fare, plus whatever each guest spends on board. Cost of sales is dominated by fuel, food, crew wages, port charges and travel agent commissions. Gross margin of 49.1% is what remains after those direct costs; the operating margin of 27.6% is what remains after marketing, administration and the depreciation of the fleet.",
      "The operating leverage is extreme in both directions. A ship costs roughly the same to sail whether it is 80% or 100% full, so the last few thousand berths are almost pure contribution. In fiscal 2021, when travel stopped, revenue fell to $1.53B and the operating loss reached $3.87B. By fiscal 2023, revenue of $13.90B produced $2.88B of operating income. Same assets, different utilisation.",
      "Depreciation and interest sit below that line and are the reason the business needs pricing power. A new vessel is financed with debt, so each delivery adds interest expense before it adds a single passenger. That is why management talks about yield and occupancy as much as about revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $13.90B in fiscal 2023 to $16.48B in fiscal 2024 and $17.93B in fiscal 2025, and the trailing figure is $19.1B. Two things drove that: ships returning to full occupancy after the shutdown, and prices rising faster than costs. The first is largely spent; the second is the one that has to keep working.",
      "The attributed third-party consensus expects $19.56B of revenue this fiscal year with EPS of $17.93, then $20.99B and $20.48 next year. Read those two lines together and the forecast is not really about volume: $20.99B of revenue is only a little above this year's $19.56B, while EPS is forecast to rise from $17.93 to $20.48. That is a forecast of margin expansion on top of modest capacity growth.",
      "New ships are the structural part of growth. Each delivery adds berths for decades, but it also adds depreciation and interest immediately, so a delivery year can show lower free cash flow and higher earnings at the same time. Pricing is the cyclical part: it depends on consumer confidence, air fares to ports and how aggressively the rest of the industry adds capacity.",
    ],
    bullets: [
      {
        title: "Capacity",
        detail:
          "Berths added by new deliveries. Lumpy by nature because ships arrive on shipyard schedules.",
      },
      {
        title: "Pricing",
        detail:
          "Fare per passenger day plus onboard spend. This is where the operating margin is won or lost.",
      },
      {
        title: "Occupancy",
        detail:
          "The share of berths sold. Already high, so further gains are limited and discounting is the risk.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record shows how seasonal the business is. Operating margin was 29.3% in Q2 FY25, 33.1% in Q3 FY25, then 21.9% in Q4 FY25 and 26.1% in Q1 FY26 before recovering to 33.5% in Q3 FY26. The summer quarter always carries the year; the winter quarter is where discounting and cost control get tested.",
      "Across the annual statements the recovery is stark: operating income of negative $3.87B in fiscal 2021, negative $766.0M in fiscal 2022, then $2.88B, $4.11B and $4.91B in the three years after. Net income followed, reaching $4.29B in fiscal 2025 on diluted EPS of $16.91.",
      "Return on equity of 38.3% looks exceptional, but it is measured against a small equity base that was deeply damaged during the shutdown. Return on invested capital of 12.5% is the more honest number: it says the fleet earns a real return above its cost of capital, but not a spectacular one. The gap between the two figures is leverage, not superior economics.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.51B over the trailing period, a margin of 7.9%. That is a long way below the 23.8% net margin, and the difference is capital expenditure. In fiscal 2023 free cash flow was $580.0M, in fiscal 2024 $2.00B and in fiscal 2025 $1.24B — the pattern follows the delivery schedule more than it follows earnings.",
      "Net debt is $21.5B, equal to 3.0x EBITDA. That is manageable for a business with visible forward bookings, but it is the highest leverage in this coverage group's travel names and it makes the company sensitive to refinancing costs. A rise in rates shows up as interest expense for years, because ships are financed with long-dated debt.",
      "The cash flow supports three things at once: the newbuild programme, the dividend and any buyback. When a delivery year coincides with a soft pricing environment, something has to give, and historically that has been the buyback rather than the order book.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $327.16 the shares trade at 19.2x trailing earnings, 15.3x EV/EBITDA, 5.7x sales and 58.0x free cash flow. The last multiple is the informative one: the company is not yet converting its earnings into distributable cash at a rate that justifies a high price-to-cash-flow, because the fleet is still being rebuilt and expanded.",
      "Against the peer set in this report, 15.3x EV/EBITDA sits close to Home Depot at 16.1x and below McDonald's at 17.3x, even though McDonald's earns a 46.9% operating margin on a franchised model. Booking Holdings, a capital-light travel marketplace, trades at 10.6x. Cruise lines normally sit between hotels and casinos on the multiple ladder, and this one is priced toward the top of that band.",
      "The multiple therefore assumes that pricing holds, that fuel does not spike and that the new ships earn their cost of capital. Stockmonk does not publish a target price; the consensus figure in the next section is third-party context and nothing more.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the third-party consensus, with a mean target of $353.50 and a range of $270.00 to $425.00. The spread is wide for a company with this much forward visibility, which suggests the disagreement is about the cycle rather than the next quarter.",
      "The estimate path is $4.66B of revenue and $3.56 of EPS for the next quarter, then $4.70B and $3.74, against $19.56B and $17.93 for the full fiscal year. Those quarterly numbers imply a normal seasonal fade from the summer peak rather than a collapse, and the following year's forecast of $20.99B of revenue and $20.48 of EPS asks the company to grow earnings faster than sales for another year — precisely the outcome that depends on pricing rather than on new berths.",
    ],
  },
  risks: {
    intro:
      "The risks here are operational and financial rather than competitive. The brand is strong and the order book is long; the questions are what happens to demand in a downturn and how much debt the fleet carries into it.",
    items: [
      {
        title: "Fuel and voyage costs",
        severity: "High",
        detail:
          "Fuel is one of the largest variable costs and cannot be passed through immediately. A sustained price rise compresses the margin in the same quarter it occurs.",
        watch:
          "Fuel cost per passenger day and any surcharge announcements.",
      },
      {
        title: "Consumer demand for discretionary travel",
        severity: "High",
        detail:
          "A cruise is a discretionary purchase booked months ahead. In a downturn, occupancy holds only if prices fall, and price is the main driver of margin.",
        watch:
          "Booking curves, occupancy guidance and onboard spend per guest.",
      },
      {
        title: "Debt and refinancing",
        severity: "High",
        detail:
          "Net debt of $21.5B at 3.0x EBITDA means interest costs are a permanent charge against cash flow, and new ships add to the balance before they add to earnings.",
        watch:
          "Interest expense, maturity schedule and the pace of deleveraging.",
      },
      {
        title: "Capacity additions across the industry",
        severity: "Medium",
        detail:
          "When several operators take delivery in the same region, berths grow faster than demand and pricing weakens.",
        watch:
          "Industry order book and Caribbean deployment announcements.",
      },
      {
        title: "Operational and weather disruption",
        severity: "Medium",
        detail:
          "Itineraries depend on ports, weather and health rules. A cancelled voyage loses the revenue but not the fuel or crew cost.",
        watch:
          "Voyage cancellations, itinerary changes and insurance costs.",
      },
    ],
    watchlist: [
      {
        title: "Net yield",
        detail:
          "Revenue per available passenger day captures pricing and occupancy in one figure. It is the cleanest read on whether the model is still working.",
      },
      {
        title: "Free cash flow after newbuilds",
        detail:
          "Earnings can rise while cash falls if ships are being delivered. Track the two together.",
      },
      {
        title: "Net debt to EBITDA",
        detail:
          "The ratio decides how much of a demand shock the balance sheet can absorb before capital returns are cut.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Royal Caribbean is a well-run operator of a capital-intensive asset. The trailing numbers show a business at full occupancy with pricing power: $19.1B of revenue, a 27.6% operating margin and $4.29B of net income in fiscal 2025. The same numbers show $21.5B of net debt and a free-cash-flow margin of 7.9%.",
      "The educational point is that a cruise line's income statement and its cash flow statement tell different stories at different points in the shipbuilding cycle. Earnings are driven by price and occupancy on ships that already exist; cash is driven by how many new ships are under construction. A reader who only looks at EPS will miss the second effect.",
      "What is not known from these figures is the shape of the booking curve for the next two years, the fuel hedges in place, or how much of the current pricing is a post-pandemic catch-up that will not repeat. Those are the questions to answer before forming a view.",
    ],
    questions: [
      "How much of the last three years of revenue growth came from occupancy rather than price?",
      "What is the committed newbuild spend, and how is it financed?",
      "Does the 12.5% return on invested capital exceed the cost of the debt used to build the ships?",
      "How far could occupancy fall before the operating margin turns negative?",
    ],
  },
};
