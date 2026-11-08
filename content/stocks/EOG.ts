import type { StockStory } from "./types";

export const EOG: StockStory = {
  ticker: "EOG",
  kicker: "Energy · Exploration and production",
  title: "EOG shows how fast shale operating leverage works both ways",
  dek: "Operating margin went from 16.7% to 41.9% in three quarters on a 52% rise in revenue. Nothing about the wells changed. The price did, and a fixed cost base turned a modest revenue move into a large earnings one.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $29.7B, up 31.7%, with a 35.8% operating margin and 27.5% net margin.",
    "Operating margin moved from 16.7% in Q4 FY25 to 41.9% in Q3 FY26 on a 52% increase in quarterly revenue.",
    "Free cash flow is $8.0B, a 27.0% margin, and the balance sheet holds $5.7B of net cash.",
    "At $147.13 the stock trades at 9.3x earnings and 4.5x EV/EBITDA, the lowest EBITDA multiple in its peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/821189/000082118926000054/eog-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000821189&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Start with one number. In Q4 FY25, EOG earned an operating margin of 16.7% on $5.64B of revenue and $1.31 of EPS. Three quarters later it earned 41.9% on $8.55B of revenue and $5.33 of EPS. Revenue rose 52%; earnings per share quadrupled. No acquisition, no new basin, no change in strategy explains that. The oil and gas price did.",
      "That is the defining feature of a shale producer. Once the wells are drilled, the cash cost of keeping them flowing is small and mostly fixed. Every dollar of higher realised price above that cost falls almost intact to operating income, and every dollar below it cuts just as deep. Investors who model an E&P company with a stable margin are modelling something that does not exist.",
      "EOG is valued at $76.3B at $147.13 a share, The shares have traded between $101.59 and $165.93 over the past year and sit about three-quarters of the way up that band. Trailing revenue is $29.7B, return on equity 30.1% and return on invested capital 39.2%. Those are exceptional returns for a capital-intensive industry, and the question is how much of them belong to EOG and how much belong to the price.",
    ],
    quote:
      "A high return on capital in a commodity business is a statement about the price as much as about the asset. The distinction matters when the price changes.",
  },
  whatItDoes: {
    paragraphs: [
      "EOG explores for, develops and produces crude oil and natural gas, mostly in the United States, with smaller positions in Trinidad and Tobago, the United Kingdom, China and Argentina, and occasional interests elsewhere. The domestic focus is deliberate: short-cycle shale wells can be brought onstream in months rather than years, which lets the company respond to price instead of forecasting it.",
      "The company sells crude to refiners and marketers at benchmark-linked prices and gas to pipelines, utilities and industrial buyers. It also sells natural gas liquids, the ethane, propane and butane that come out of the gas stream, which are priced separately and often move with petrochemical demand rather than with heating demand.",
      "The asset base is a collection of drilling locations rather than a set of long-lived fields. That distinction drives the accounting: shale wells decline steeply in their first two years, so production has to be continually replaced by new drilling. The inventory of undrilled locations is therefore the real asset, and its quality decides the cost per barrel for the next decade.",
    ],
    bullets: [
      {
        title: "Crude oil",
        detail:
          "The highest-value product per barrel. Priced off a benchmark with adjustments for quality and transport.",
      },
      {
        title: "Natural gas",
        detail:
          "Regional pricing, often at a discount to global markets because of pipeline and export capacity.",
      },
      {
        title: "Natural gas liquids",
        detail:
          "Ethane, propane and butane sold to petrochemical and industrial buyers. Prices track a different cycle from crude.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The income statement for an E&P company is short. Revenue is price times volume. The costs are lease operating expense, gathering and processing fees, production and ad valorem taxes, and then depletion. The gross margin is not disclosed in this dataset, which is fine, because for an upstream company the operating margin is the number that matters.",
      "The economics of a single well are simple to state and hard to achieve. A well costs a fixed sum to drill and complete. It produces a declining stream of hydrocarbons over its life. The present value of that stream, discounted at the company's cost of capital, has to exceed the drilling cost, or the well destroys value even though it produces oil. That is why finding and development cost per barrel is the number management is judged on.",
      "The cost structure explains the leverage. Lease operating expense per well is largely fixed, and the corporate overhead is largely fixed, so the operating margin is a steep function of price. At $5.64B of quarterly revenue the margin was 16.7%; at $8.55B it was 41.9%. The fixed cost base did not change, so the incremental revenue carried an unusually high contribution.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual history shows a company that grew through the price spike and then shrank in dollar terms as prices normalised. Revenue went from $18.6B in FY2021 to $25.7B in FY2022, then $24.2B, $23.7B and $22.6B. Net income followed the same arc: $4.66B, $7.76B, $7.59B, $6.40B and $4.98B. The compound revenue growth rate of 4.5% over the period hides two very different halves.",
      "The trailing period is the inflection. Revenue of $29.7B is up 31.7% year over year, and the latest quarter grew 46.2%. Both are well clear of the FY2025 total. Estimates point to $31.7B of revenue and $18.66 of EPS this fiscal year, then $27.8B and $16.38 next year. The forecast decline in both lines is the consensus view that the current price does not last.",
      "For a shale producer, growth has a specific meaning. Increasing production requires increasing drilling, which consumes cash today for barrels sold later. A company can grow volumes by spending more, or grow cash flow by spending less. EOG has chosen the second path at various points in its history, and the free-cash-flow record reflects those choices.",
    ],
    bullets: [
      {
        title: "Well productivity",
        detail:
          "More barrels per dollar of drilling is the only sustainable source of cost advantage in shale.",
      },
      {
        title: "Inventory depth",
        detail:
          "A deep bench of undrilled locations lets a producer keep activity flat through a price fall.",
      },
      {
        title: "Product mix",
        detail:
          "A higher oil share lifts revenue per unit of production but concentrates exposure to one price.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income fell from $9.97B in FY2022 to $9.60B, $8.08B and $6.38B, on revenue that fell by a smaller percentage. The margin compressed because the cost of service work, labour and steel did not fall as fast as the price of the barrel being sold.",
      "The recovery in the trailing quarters has been sharp. Operating margin went 16.7%, 37.5%, 40.9% and 41.9% across the last four reported quarters, with net income rising from $701M to $2.78B. Return on equity of 30.1% and return on invested capital of 39.2% are the product of that recovery landing on a balance sheet with only modest leverage.",
      "The comparison worth holding onto is between the two ends of the range. The same company, with the same assets and the same cost discipline, produced a 16.7% margin and a 41.9% margin inside nine months. A reader who annualises either number will be wrong.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow over the trailing period was $8.02B, a 27.0% margin, against a market value of $76.3B for a 10.5% free-cash-flow yield. The balance sheet carries $5.75B of net cash, so the cash is genuinely uncommitted.",
      "The annual free-cash-flow record is incomplete because several years are not disclosed in the dataset, but the two years that are show the pattern: $8.12B in FY2021 and $10.22B in FY2022, both well above net income of $4.66B and $7.76B. That gap is depletion, which is a real economic cost but not a cash one in the year it is booked. The cash has to be reinvested to replace the barrels, which is why free cash flow in an E&P company is only meaningful alongside a rising or stable production base.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $147.13 the shares trade at 9.3x trailing earnings, 4.5x EV/EBITDA, 2.4x sales and 9.5x free cash flow, with a 2.8% dividend yield. On EV/EBITDA it is the cheapest company in the peer table, below ConocoPhillips at 5.1x, Chevron at 6.4x and ExxonMobil at 7.0x.",
      "That is an odd combination: the highest return on invested capital in the group and the lowest multiple. It is not a contradiction. The market is not paying for a 39% return on capital because it does not believe the return belongs to the company rather than to the price. A 9.3x P/E on peak-cycle earnings is roughly a 4.5x multiple on mid-cycle earnings, and that is the level at which a commodity producer normally trades.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-nine analysts follow the company. The attributed mean target is $167.45 and the range runs from $141.00 to $213.00. The low end is below the current price, so the consensus is not unanimous about direction.",
      "Current-year estimates are $31.7B of revenue and $18.66 of EPS, with next year at $27.8B and $16.38. Next quarter is forecast at $7.97B and $5.52 across 19 analysts, slightly below the $8.55B just reported. The estimates describe a company earning more this year than the trailing figure and less next year, which is the same price-normalisation assumption embedded in the multiple.",
    ],
  },
  risks: {
    intro:
      "The financial position is strong and the operating record is good, so the risks are concentrated in price, inventory quality and the cost of replacing produced barrels.",
    items: [
      {
        title: "Commodity price",
        severity: "High",
        detail:
          "The margin moved 25 percentage points in three quarters on price alone. That sensitivity does not go away.",
        watch: "Realised oil, gas and natural gas liquid prices per unit, and the oil share of production.",
      },
      {
        title: "Inventory exhaustion",
        severity: "High",
        detail:
          "Shale production declines quickly. A thinning inventory of high-quality drilling locations raises the cost of holding production flat.",
        watch:
          "Drilling inventory disclosures, well productivity per lateral foot and finding cost per barrel.",
      },
      {
        title: "Service cost inflation",
        severity: "Medium",
        detail:
          "Drilling and completion costs rise when the industry is active, and they lag the oil price on the way down.",
        watch: "Well cost per completed lateral and the capital budget per rig.",
      },
      {
        title: "Regulatory and permitting",
        severity: "Medium",
        detail:
          "Federal leasing, flaring rules and state permitting all affect where and how quickly the company can drill.",
        watch: "Permit approvals, flaring and emissions rules, and any change to lease terms.",
      },
      {
        title: "Gas takeaway",
        severity: "Medium",
        detail:
          "Associated gas has to go somewhere. Without pipeline or export capacity, gas can be sold at a deep local discount or flared.",
        watch: "Regional gas price differentials and pipeline utilisation.",
      },
    ],
    watchlist: [
      {
        title: "Realised price per barrel",
        detail:
          "The gap to benchmark is where transport, quality and processing costs show up.",
      },
      {
        title: "Reinvestment rate",
        detail:
          "The share of cash flow spent on drilling tells you whether the company is growing, holding flat or harvesting.",
      },
      {
        title: "Free cash flow per share",
        detail:
          "The measure that survives a price swing, unlike earnings per share.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "EOG is a well-run domestic shale producer with high returns, net cash and a free-cash-flow margin that would be the envy of most industries. Trailing revenue of $29.7B and free cash flow of $8.0B are real, and the 35.8% operating margin reflects genuine cost discipline.",
      "What a reader should not do is treat 39.2% return on invested capital as a durable franchise. It was earned at a particular price, and the same assets produced a fraction of that margin nine months earlier. The return is a function of the commodity, and the commodity is not managed by the company.",
      "The valuation is consistent with that reading. A 4.5x EV/EBITDA multiple on a strong year is the market saying that the denominator will not hold, which leaves the reader with one question worth answering: what does the business earn at a normal price?",
    ],
    questions: [
      "What is the finding and development cost per barrel, and how does it compare with three years ago?",
      "How many years of high-quality drilling inventory remain?",
      "What share of production is oil, and how sensitive is revenue to that price alone?",
      "What would free cash flow be at a mid-cycle price rather than today's?",
    ],
  },
};
