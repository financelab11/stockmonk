import type { StockStory } from "./types";

export const WM: StockStory = {
  ticker: "WM",
  kicker: "Industrials · Waste services",
  title: "Waste Management's moat is a landfill permit and a dense route",
  dek: "Hauling is a fixed-cost business measured in stops per truck. Owning the landfill at the end of the route is what turns that cost base into an 18% operating margin.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $26.07B, up 5.2%, with the latest quarter at $6.85B and an 18.7% operating margin.",
    "Free cash flow was $3.74B over the trailing period, a 14.3% margin, against $23.12B of net debt.",
    "Return on equity of 31.1% is flattered by leverage; return on invested capital is 11.5%.",
    "At $236.26 the shares trade at 30.6x trailing earnings and 15.1x EV/EBITDA on a 4.0% free-cash-flow yield.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/823768/000110465926012049/wm-20251231x10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000823768&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Waste Management is the largest waste-handling business in North America. It picks up refuse from households, offices, restaurants, factories and construction sites, owns the landfills and transfer stations where that material ends up, and runs recycling and landfill-gas operations alongside the trucks. Trailing revenue is $26.07B across 48,250 employees.",
      "The question that decides the investment is whether the company can keep raising price faster than wages, fuel and disposal costs rise while volume tracks the wider economy. Waste volumes are tied to construction, industrial output and consumer spending, so this is a cyclical business wearing the clothes of a utility. The latest quarter, Q3 FY26, produced $6.85B of revenue at an 18.7% operating margin, a touch better than the 18.4% trailing figure.",
      "The shares closed at $236.26, giving a market capitalisation of $93.95B and a place 77% of the way up the 52-week range of $197.47 to $248.13. That price is 30.6x trailing earnings, 15.1x EV/EBITDA and 25.1x free cash flow, with a 4.0% free-cash-flow yield and a 1.6% dividend yield. On the factor screen the stock sits in the 67th percentile for cheapness on EV/EBITDA within the coverage universe.",
    ],
    quote:
      "A collection route is a factory that moves. The cost is the truck, the driver and the fuel, and those are paid whether the truck is full or half empty.",
  },
  whatItDoes: {
    paragraphs: [
      "The collection business is organised around routes. Residential work is contracted with municipalities and homeowner associations, usually on multi-year terms. Commercial work is the dumpster outside a restaurant or shop, priced by container size and pickup frequency. Industrial and construction work uses roll-off containers that are dropped, swapped and hauled to a disposal site. Each of these is a different density of stops per hour, and density is what decides whether a route makes money.",
      "Disposal is the second leg. Waste Management owns landfills and transfer stations, so the material its own trucks collect is buried at its own sites, and third-party haulers pay a tipping fee to use them. That vertical link matters: a hauling-only competitor has to buy disposal from someone else, while Waste Management keeps that margin inside the group. Recycling processing and landfill-gas-to-energy sit on top, and both carry commodity exposure that the collection business does not.",
      "Competition is local even though the industry is national. Republic Services, Waste Connections and GFL Environmental compete for the same contracts, and municipal sanitation departments still handle a lot of residential collection themselves. Contracts typically include annual escalators, which is why revenue is steadier than a typical industrial order book, but those escalators can lag a sudden move in fuel or labour costs.",
    ],
    bullets: [
      {
        title: "Collection",
        detail:
          "Residential, commercial and roll-off hauling. The route is the unit of production, and stop density sets the cost per tonne.",
      },
      {
        title: "Disposal",
        detail:
          "Landfills and transfer stations earn a tipping fee per tonne and internalise the disposal cost of the group's own collection volumes.",
      },
      {
        title: "Recycling and energy",
        detail:
          "Processing plants and landfill-gas projects add revenue but bring commodity prices and contract terms into the earnings mix.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The economics of a route are mostly fixed. A truck, a driver, insurance, maintenance and fuel are committed before the first bin is emptied, so the incremental cost of adding a nearby customer is small and the incremental margin is high. This is why haulers fight for route density rather than raw geography: two companies can serve the same town and earn very different margins depending on how many stops sit on each truck-day.",
      "Landfills work the same way. Once a site is permitted and built, the cost of burying an additional tonne is low relative to the tipping fee, so volume through an owned landfill converts almost directly into operating profit. That is the operating leverage in the model. It also explains why the industry consolidates: buying a hauler brings both its routes and its volumes to an existing disposal network.",
      "Costs sit in labour, fuel, maintenance and the long-tail obligations of closed sites. Contract escalators usually reset once a year, so a sharp move in diesel or wages compresses margin for a few quarters before pricing catches up. The 40.4% gross margin and 18.4% operating margin are the result of that structure, not of any single pricing decision.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $17.93B in FY2021 to $25.20B in FY2025, and the trailing figure is $26.07B. Part of that came from price, part from volume and part from acquisitions of smaller haulers and disposal assets. The latest quarter grew 6.3%, faster than the 5.2% trailing rate, which suggests pricing was still holding as the year progressed.",
      "The third-party consensus looks for $26.46B of revenue and $8.10 of EPS this fiscal year, then $27.87B and $8.95 next year, with $6.71B and $2.08 for the coming quarter. Read those numbers as a mid-single-digit business: the analysts are not modelling a volume rebound, they are modelling price plus modest growth plus more tuck-in deals.",
      "What would slow it down is straightforward. Landfill tonnage falls when construction slows. Recycling revenue depends on commodity prices that the company does not set. Above-inflation price increases become harder to push through each year, and a large acquisition would bring integration risk and more debt to a balance sheet already carrying $23.12B of net debt.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has moved in a narrow band. Across the last six quarters it printed 17.9%, 15.3%, 18.3%, 17.9%, 18.7% and 18.7%. The 15.3% in Q3 FY25 is the outlier and shows how quickly a cost or weather problem can dent a quarter; the recovery to 18.7% shows how quickly it can come back when volumes and pricing normalise. Net margin is 11.8% and diluted EPS is $7.62.",
      "The return figures need care. Return on equity is 31.1%, but $23.12B of net debt and a history of acquisitions mean the equity base is small relative to the assets. Return on invested capital of 11.5% is the more honest measure of the operating business, and it sits only modestly above the cost of capital for a capital-intensive hauler. That gap is the difference between a good business and a great one.",
      "Operating income reached $4.31B in FY2025 on $25.20B of revenue, up from $2.96B in FY2021. Operating income grew a little faster than revenue over that stretch, which means some of the gain came from margin rather than scale alone. The quarterly trend since the Q3 FY25 dip has been upward, but one year of margin expansion is not a structural change.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.74B over the trailing period, a 14.3% margin. The path there was uneven: $2.43B in FY2021, $1.95B in FY2022, $1.82B in FY2023, $2.16B in FY2024 and $2.82B in FY2025. Revenue rose every year in that stretch while free cash flow fell for two of them, which tells you the constraint is capital spending and working capital rather than demand.",
      "The capital budget is the reason. Trucks, carts, landfill cells and recycling plants all have to be bought before the revenue arrives, and a landfill cell is a multi-year asset that sits idle until it is filled. Net debt of $23.12B is 3.0x EBITDA, a level where the interest line starts to matter and where a large debt-funded acquisition would be felt by equity holders.",
      "What the cash flow supports is a 1.6% dividend yield, continued tuck-in acquisitions and buybacks. At 25.1x free cash flow and a 4.0% free-cash-flow yield, the market is paying for the recurring nature of the revenue rather than for rapid growth. The test is whether the capex that produces that cash can be kept near current levels as the fleet and the landfill network age.",
    ],
    bullets: [
      {
        title: "Capex",
        detail:
          "Fleet, containers, landfill cells and recycling plants consume most of operating cash flow before free cash flow is struck.",
      },
      {
        title: "Dividend",
        detail:
          "A 1.6% yield is modest for a utility-like business, leaving room for reinvestment.",
      },
      {
        title: "Tuck-in deals",
        detail:
          "Small haulers and disposal sites are the main use of discretionary cash and the main source of above-market growth.",
      },
    ],
  },
  valuation: {
    paragraphs: [
      "At $236.26 the shares trade at 30.6x trailing earnings, 15.1x EV/EBITDA and 4.5x sales. The free-cash-flow multiple of 25.1x and the 4.0% free-cash-flow yield are the numbers that matter for a business whose earnings are backed by real assets and recurring contracts. The 1.6% dividend yield is below the free-cash-flow yield, which is what you would expect from a company that still has places to put capital.",
      "The peer set gives a sense of where that sits. Caterpillar trades at 21.6x earnings and 14.5x EV/EBITDA, RTX at 30.4x and 18.1x, Eaton at 34.0x and 20.9x, and GE at 36.7x and 24.3x. Waste Management's 15.1x EBITDA multiple is a premium to Caterpillar and a discount to Eaton, which is a reasonable place for a business with steadier revenue and lower growth than either.",
      "What the multiple assumes is mid-single-digit revenue growth, an operating margin at or above 18%, and continued acquisitions at prices that do not dilute returns. If margin stalls at 18% and growth stays near 5%, 30.6x earnings is a full price and the return depends on the dividend and buybacks rather than on re-rating. Stockmonk does not publish a target price; the consensus figure appears in the next section as third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 25 analysts with a mean target of $255.60 and a range of $220.00 to $283.00. For current fiscal-year estimates, 28 analysts contribute $26.46B of revenue and $8.10 of EPS; the following year carries $27.87B and $8.95. The coming quarter is expected to produce $6.71B and $2.08.",
      "That range is narrow for a company of this size, and the mean target sits only modestly above the $236.26 share price. It suggests the analysts disagree about the pace of margin improvement and acquisition spending rather than about the direction of the business. Next year's EPS estimate implies growth from $8.10, but not much of it, which is consistent with a price-led model.",
      "These are third-party views collected from published estimates. A mean target is not a Stockmonk rating, and the average hides the range. The more useful read is the shape of the estimate revisions over time, which the summary above cannot show.",
    ],
  },
  risks: {
    intro:
      "Waste Management's risks are mostly operational and financial rather than existential. The franchise is durable; the question is what happens to margin and cash conversion when volumes fall or costs jump.",
    items: [
      {
        title: "Volume tied to the industrial cycle",
        severity: "High",
        detail:
          "Roll-off and construction waste fall first when building slows, and commercial volumes follow consumer spending. Fixed route costs do not fall with them.",
        watch:
          "Tonnage trends and the split between price and volume in quarterly revenue growth.",
      },
      {
        title: "Cost inflation outrunning contract escalators",
        severity: "High",
        detail:
          "Labour, diesel and third-party disposal costs can move faster than the annual price increases written into municipal and commercial contracts.",
        watch:
          "Gross margin and the price-cost spread disclosed on the earnings call.",
      },
      {
        title: "Landfill permitting and local opposition",
        severity: "Medium",
        detail:
          "New disposal capacity is hard to permit and takes years to build. Losing an existing site would raise the cost of the collection network around it.",
        watch:
          "Permit renewals, site closures and any change in the stated life of the landfill portfolio.",
      },
      {
        title: "Recycling commodity exposure",
        severity: "Medium",
        detail:
          "Recycled paper and plastics trade at prices the company does not control, and processing contracts can shift the risk back to the hauler.",
        watch:
          "Recycling revenue per tonne and the margin of the recycling line.",
      },
      {
        title: "Leverage and acquisition prices",
        severity: "Medium",
        detail:
          "Net debt is $23.12B, or 3.0x EBITDA. Paying a high multiple for the next acquisition would dilute returns and add interest cost.",
        watch:
          "Net debt to EBITDA, acquisition spending and the return on invested capital trend.",
      },
    ],
    watchlist: [
      {
        title: "Price versus volume",
        detail:
          "The quarterly split shows whether growth is coming from pricing power or from tonnage. They carry very different margins.",
      },
      {
        title: "Free-cash-flow conversion",
        detail:
          "Cash flow has lagged revenue for two stretches in five years. Watch capex and working capital against net income.",
      },
      {
        title: "Net debt to EBITDA",
        detail:
          "At 3.0x there is room for deals, but not much room for a bad one.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Waste Management is a scale operator in a local business. Its advantage comes from owning disposal capacity and running dense routes, which is why an 18% operating margin is possible on work that looks like a commodity service. Revenue is recurring, contracts escalate, and the assets are hard to replicate.",
      "The complication is that the shares already reflect those qualities. At 30.6x earnings and 15.1x EBITDA, with a 4.0% free-cash-flow yield, the price assumes margins hold and acquisitions keep adding volume at sensible prices. Return on invested capital of 11.5% is the number to keep in view: it says the business earns a modest spread over its cost of capital, not a wide one.",
      "What is not known from the summary data is how much of the recent growth came from price rather than tonnage, and whether the trailing free-cash-flow improvement is a new baseline or a catch-up year after heavy spending. Those two answers would change the interpretation more than any single quarter's earnings.",
    ],
    questions: [
      "How much of the 5.2% revenue growth came from price, and how much from tonnage?",
      "Is the trailing free-cash-flow margin of 14.3% sustainable if capex normalises?",
      "What acquisition multiple is the company paying for tuck-in volume?",
      "How much of the 31.1% return on equity depends on leverage rather than operating returns?",
    ],
  },
};
