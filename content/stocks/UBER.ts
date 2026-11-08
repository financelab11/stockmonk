import type { StockStory } from "./types";

export const UBER: StockStory = {
  ticker: "UBER",
  kicker: "Mobility · Ride-hailing and delivery platform",
  title: "Uber keeps a slice of every trip, and the slice is getting thinner",
  dek: "Revenue is the commission Uber retains after paying drivers and couriers, not the value of the rides. That distinction explains the 43.2% gross margin, the 12.4% operating margin and why free cash flow is larger than net income.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $56.5B, up 13.9%, but the latest quarter grew 9.6%, a slower rate than the year.",
    "Operating income went from a $3.83B loss in fiscal 2021 to $5.57B of profit in fiscal 2025, one of the sharpest turnarounds in the dataset.",
    "Free cash flow of $10.4B is far above net income, which was 6.2% of revenue; the gap comes from non-cash charges and working capital and needs checking.",
    "Net debt of $19.3B is 2.5x EBITDA, and the shares are 15% of the way up a 52-week range after a 25.5% one-year decline.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001543151&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Uber runs a platform that connects people who want a ride with drivers who have a car, and people who want food with restaurants and couriers. It reports two segments: Core Platform, which contains ride-hailing and the delivery business, and Other Bets, which contains freight and newer mobility products. The company employs 22,800 people.",
      "The important thing to understand before reading any number is that Uber does not book the full value of a trip as revenue. It books its commission. A $20 ride might produce $6 of revenue and $14 of driver earnings, so the revenue line is already net of the largest cost. That is why the gross margin is 43.2% and not 100%: the driver and courier payments are treated as a cost of revenue.",
      "Trailing revenue is $56.5B, up 13.9%, with a 12.4% operating margin. The shares closed at $68.59 for a market capitalisation of $140.1B, only 15% of the way up a 52-week range of $64.04 to $95.18. The stock is down 25.5% over the past year while the business has been profitable, which is the tension in the story.",
    ],
    quote:
      "A platform's revenue is a fee, so a growing top line can mean either more trips or a higher fee. Separating the two is the whole analysis.",
  },
  whatItDoes: {
    paragraphs: [
      "Ride-hailing is the original product and still the one that defines the brand. A rider opens the app, a nearby driver accepts, and the platform sets the price. Density is the engine: more riders per square kilometre shorten pick-up times, which makes drivers more productive per hour, which lowers the price the platform needs to charge to attract riders.",
      "Delivery works differently. The customer orders from a restaurant, a courier collects and delivers, and the platform takes a commission from the restaurant and a fee from the customer. The economics are thinner than ride-hailing because the order value is smaller and the delivery cost is a larger share of it. It is also more labour-intensive per dollar of revenue.",
      "Freight is a brokerage business that matches shippers with carriers. It is cyclical, capital-light and lower-margin, and it sits in Other Bets alongside the newer mobility products. The newer products are options on future platforms rather than current profit centres.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue per trip is the take rate. Uber sets the fare, pays the driver, and keeps the difference; on delivery it takes a commission from the restaurant and charges the customer a delivery and service fee. The take rate is the single most important variable in the model because the platform's costs — engineering, sales, support, insurance administration — do not scale with the number of trips in the same way.",
      "The cost structure has three layers. Direct costs include driver and courier payments, insurance and payment processing. Operating costs include product development, sales and marketing, and general administration. Below that sit interest and taxes. When trips grow faster than the middle layer, the operating margin expands; when the company invests in a new category, it contracts.",
      "Insurance is the cost that outsiders underestimate. Ride-hailing platforms carry commercial coverage for the trips on their network, and claims inflation raises the cost per mile regardless of the fare. That is one reason the operating margin moved from 14.6% in Q1 FY26 to 9.8% in Q3 FY26 even as revenue grew.",
    ],
    bullets: [
      {
        title: "Mobility",
        detail:
          "Ride commissions. The highest-margin part of the platform because the driver supplies the vehicle and the fuel.",
      },
      {
        title: "Delivery",
        detail:
          "Restaurant commissions plus customer fees. More orders but a lower margin per dollar of revenue.",
      },
      {
        title: "Freight",
        detail:
          "Brokerage margin between shipper and carrier. Cyclical and sensitive to freight rates.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 26.0% a year over the five fiscal years in the dataset, from $17.45B in fiscal 2021 to $52.02B in fiscal 2025. That rate is flattered by the recovery from the pandemic, when ride volumes were depressed. The trailing growth rate of 13.9% is the more relevant number now, and the latest quarter's 9.6% is slower again.",
      "The consensus expects $57.81B of revenue and $2.63 of EPS this fiscal year, then $67.02B and $4.38 next year. That second year asks for revenue well above the current year's $57.81B and a much larger increase in earnings, which would require both more trips and a better margin. It is a confident forecast against a latest quarter that grew 9.6%.",
      "The realistic drivers are frequency — more trips per user — and penetration in markets outside the largest cities. Both are gradual. The step changes come from new categories, such as grocery delivery or advertising on the platform, and those have to be paid for before they earn.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a story of an operating model crossing over. Operating income was negative $3.83B in fiscal 2021 and negative $1.83B in fiscal 2022, then positive $1.11B, $2.80B and $5.57B in the next three years. Revenue roughly tripled over the same period. Fixed costs that had been built for a much larger business were finally covered by volume.",
      "Net income is a poor guide to that progress. It was negative $570.0M in fiscal 2021 and negative $9.14B in fiscal 2022, then $2.16B, $9.85B and $10.09B. In fiscal 2025 net income of $10.09B was nearly double operating income of $5.57B, which means a large part of the profit came from below the operating line. The third quarter of fiscal 2025 shows the pattern clearly: an 8.3% operating margin alongside $6.63B of net income.",
      "Use operating income for the operating business and treat the below-the-line items as what they are — gains, charges and tax effects that will not repeat on a schedule. Return on equity of 12.0% and return on invested capital of 11.5% are the honest measures, and they say the business now earns a real return on the capital it employs.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $10.4B over the trailing period, an 18.4% margin, against a net margin of 6.2%. That gap is the most interesting number in the report. Part of it is stock-based compensation, which is added back in the cash-flow statement but is a real cost to shareholders because it dilutes them. Part is working capital: cash collected from riders and restaurants before it is paid to drivers and couriers.",
      "The annual record shows the same trend. Free cash flow was negative $743.0M in fiscal 2021, then $390.0M, $3.36B, $6.89B and $9.76B. That is a genuine improvement in cash generation, and it is what allowed the company to start returning capital and to reduce the debt it took on during the expansion years.",
      "Net debt of $19.3B is 2.5x EBITDA. That is not a strained balance sheet for a business with this much cash flow, but it is not trivial either: interest costs are a fixed claim, and the debt was raised when the company was losing money. The pace of deleveraging is a better indicator of financial health than the headline profit.",
      "Cash flow of this size gives management a choice between repaying debt, buying back shares and funding new categories. These statements show the result of those choices rather than the reasoning: net debt is still $19.3B, and the share count is not disclosed here. A reader who wants to know whether cash is being returned or reinvested has to go to the financing section of the cash-flow statement.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $68.59 the shares trade at 40.2x trailing earnings, 20.4x EV/EBITDA, 2.8x sales and 13.4x free cash flow, for a free-cash-flow yield of 7.4%. The P/E and the P/FCF point in very different directions, and the reason is the gap between net income and free cash flow described above. Which multiple is right depends on whether stock-based compensation is treated as a cost.",
      "Against the peer set, 20.4x EV/EBITDA is above Home Depot at 16.1x and McDonald's at 17.3x, and far above Booking Holdings at 10.6x. Uber is being valued as a platform with a long runway rather than as a transport company, which is a claim about the future rather than the present.",
      "The 13.4x free cash flow multiple is the more forgiving number, and it is the one that would matter if cash flow held. If it does not hold because the add-backs are not sustainable, the stock is expensive on the other measures. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty-seven analysts contribute to the third-party consensus, with a mean target of $99.16 and a range of $70.00 to $150.00. The mean is well above the last close, an unusually wide gap that says the sell side expects the share price to recover from a weak year.",
      "Estimates call for $15.65B of revenue and $1.01 of EPS next quarter, then $15.51B and $0.96, with $57.81B and $2.63 for the fiscal year. The sequential revenue decline in the second estimate is seasonal, not a forecast of contraction.",
      "The following year's $67.02B of revenue and $4.38 of EPS is the forecast that carries the target. It assumes that the slower growth in the latest quarter is temporary and that margins expand. That is a coherent view, but it is a forecast, not an observation.",
    ],
  },
  risks: {
    intro:
      "Uber's biggest risks are legal and competitive rather than financial. The company generates cash and carries debt at 2.5x EBITDA; what it does not control is how its drivers are classified or who owns the next transport platform.",
    items: [
      {
        title: "Driver classification",
        severity: "High",
        detail:
          "If regulators or courts require drivers to be employees, the cost structure changes fundamentally: benefits, minimum hours and payroll taxes would move onto the platform.",
        watch:
          "Court rulings and legislation in large markets, and any change to driver pay structures.",
      },
      {
        title: "Insurance and claims inflation",
        severity: "High",
        detail:
          "Commercial coverage for trips is a large cost that rises with claims trends. It cannot be passed to riders immediately without losing volume.",
        watch:
          "Cost per trip, insurance reserves and the share of trips covered by the platform.",
      },
      {
        title: "Autonomous vehicles",
        severity: "Medium",
        detail:
          "If robotaxis scale, the value of a human-driver network falls. Uber can partner with operators, but the margin and the moat would both change.",
        watch:
          "Autonomous partnerships, pilot markets and the economics quoted per mile.",
      },
      {
        title: "Competition and take rate",
        severity: "Medium",
        detail:
          "Rival apps can subsidise riders and drivers. Fighting for share means lower fees or higher incentives, both of which reduce revenue per trip.",
        watch:
          "Take rate, rider discounts and driver incentives as a share of bookings.",
      },
      {
        title: "Freight and Other Bets",
        severity: "Low",
        detail:
          "The smaller segments are cyclical and can absorb investment without contributing profit. They dilute the platform margin without adding much revenue today.",
        watch:
          "Segment profitability and any change in disclosure.",
      },
    ],
    watchlist: [
      {
        title: "Trips and take rate",
        detail:
          "Trip growth shows demand; the take rate shows pricing power. A rising take rate with slowing trips is a warning.",
      },
      {
        title: "Operating margin",
        detail:
          "The cleanest measure of the platform, because it excludes the below-the-line items that flatter net income.",
      },
      {
        title: "Free cash flow quality",
        detail:
          "Compare free cash flow with net income and check how much of the gap is stock-based compensation rather than working capital.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Uber is a platform that has crossed from losses to profit. Revenue of $56.5B, operating income of $5.57B in fiscal 2025 and free cash flow of $10.4B are the evidence. It did that without owning vehicles or employing most of the people who do the work.",
      "The educational point is the difference between bookings and revenue. Because Uber reports only its commission, the revenue line is small relative to the activity on the platform, and the gross margin reflects driver pay rather than the cost of a product. A reader who compares Uber's revenue with a logistics company's revenue is comparing two different things.",
      "The open questions are whether the take rate holds against competition, whether the legal model survives, and whether free cash flow of $10.4B is a durable figure or an artefact of add-backs. Those three answers decide whether 13.4x cash flow is cheap or 40.2x earnings is expensive.",
    ],
    questions: [
      "How much of free cash flow comes from stock-based compensation add-backs?",
      "Is the take rate rising because of pricing power or because of higher rider fees?",
      "What would employee classification cost per trip in the largest markets?",
      "Which segment is carrying the growth, and at what margin?",
    ],
  },
};
