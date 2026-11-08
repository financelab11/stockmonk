import type { StockStory } from "./types";

export const TXN: StockStory = {
  ticker: "TXN",
  kicker: "Semiconductors · Analog and embedded",
  title: "Texas Instruments spent through the downturn and is now collecting",
  dek: "Free cash flow fell to $1.35B in FY2024 as capital spending outran demand, then recovered to $7.32B. The 47.5% quarterly operating margin is what the other side of that cycle looks like.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $20.77B, up 20.3%, and the latest quarter grew 27.7%.",
    "Operating margin is 40.8%, with 47.5% in the latest quarter.",
    "Free cash flow recovered to $7.32B from $1.35B in FY2023.",
    "At $277.36 the shares trade at 35.6x earnings and 34.6x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/97476/000009747626000059/txn-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000097476&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Texas Instruments makes analog chips and embedded processors. Analog parts manage power, measure signals and connect the physical world to digital electronics. Embedded parts are the small computers inside cars, appliances, industrial machines and medical devices. Both are sold in large catalogues, in modest volumes per customer, to thousands of designers and manufacturers.",
      "The company owns and operates its own wafer fabs, including 300-millimetre capacity, rather than outsourcing. That decision is the reason its financial history looks the way it does. Building capacity ahead of demand is expensive, and the expense arrives before the revenue. Free cash flow fell to $1.35B in FY2023 and $1.50B in FY2024 while revenue was also falling, then recovered to $7.32B as the capacity came online and demand returned.",
      "At $277.36 the market capitalisation is $253.4B, or 35.6x trailing earnings, 23.0x EV/EBITDA and 34.6x free cash flow. The shares are 69% of the way up a 52-week range of $152.73 to $334.03 and returned 75.7% over the past year. The market has already rewarded the recovery.",
    ],
    quote:
      "Owning the fab turns a cyclical business into a capital-allocation decision. The question is not whether demand returns, but whether the capacity was built at the right time and the right cost.",
  },
  whatItDoes: {
    paragraphs: [
      "The analog portfolio covers amplifiers, data converters, power management, interface and motor-drive chips. These are designed into a customer's circuit board and then stay there for the life of the product, which can be a decade in industrial and automotive equipment. The embedded portfolio includes microcontrollers and processors that run the control logic in those same systems.",
      "Customers are industrial equipment makers, automotive suppliers, communications infrastructure providers and consumer device manufacturers. Industrial and automotive are the largest and most durable, because the design cycles are long and the qualification requirements are strict. A part that passes automotive qualification is difficult to replace.",
      "The company employed 2,021 people at the last count. That number is small relative to revenue because manufacturing is capital-intensive rather than labour-intensive: the fabs do the work that headcount would do in a services business. The asset base, not the payroll, is the constraint on growth.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from selling parts. A design win produces an initial order and then years of follow-on business as the customer's product ships. Because the part is specified into the board, switching requires a redesign, which is expensive and slow. That is why gross margin is 60.2% on components that often sell for a few dollars.",
      "The cost structure is fixed-heavy. A fab runs at high utilisation when demand is strong, and each additional wafer carries a small incremental cost. When demand falls, the depreciation continues. That is why operating margin collapsed during the downturn and why it has expanded so sharply in the recovery.",
      "The balance sheet holds $8.14B of net cash, and the company pays a dividend yielding 2.0%. Return on equity is 37.1% and return on invested capital is 60.6%. Those returns are high for a capital-intensive manufacturer, which is the point: the capital is deployed in a business with pricing power and long product lives.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 3.5% a year over the five fiscal years in the record, which understates the cycle inside it. The path was $18.34B in FY2021, $20.03B in FY2022, $17.52B in FY2023, $15.64B in FY2024 and $17.68B in FY2025. The peak-to-trough decline was severe, and the recovery has taken two years.",
      "The latest numbers are much stronger than the average. Trailing revenue is $20.77B, up 20.3%, and the latest quarter grew 27.7% to $6.05B. The attributed consensus expects $22.40B this fiscal year and $26.28B next year, with EPS of $9.06 and $11.58.",
      "The drivers are content growth per system, the electrification of vehicles and industrial automation. Each of those increases the number of analog and embedded parts in a product. The brake is that customers order ahead when supply is tight and hold back when it is not, so the order pattern amplifies the underlying demand.",
    ],
    bullets: [
      {
        title: "Content per system",
        detail:
          "More power management, sensing and control in each new product raises the dollar value of Texas Instruments content.",
      },
      {
        title: "Long design cycles",
        detail:
          "Industrial and automotive parts stay in production for years, so today's design wins become tomorrow's recurring revenue.",
      },
      {
        title: "Capacity timing",
        detail:
          "New fabs add depreciation before they add revenue. The payoff arrives when utilisation catches up.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the cycle in operating income: $8.96B in FY2021, $10.14B in FY2022, $7.33B in FY2023, $5.46B in FY2024 and $6.02B in FY2025. Revenue fell from $20.03B to $15.64B over the downturn, and operating income fell by more than the revenue did because depreciation on the new capacity kept running.",
      "The quarterly recovery is steep. Operating margin was 35.1% in Q2 FY2025, 35.1% in Q3, 33.3% in Q4, 37.5% in Q1 FY2026, 42.3% in Q2 and 47.5% in Q3. Revenue rose in every quarter except one. A 47.5% margin on $6.05B of revenue is the best combination in the record, and it is the number that justifies the capital programme.",
      "Net margin is 34.3% and diluted EPS is $7.71. The gap between operating and net margin is small, which is what you would expect from a company with net cash and little interest expense. The earnings are clean.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is the line that tells the capital-intensity story. It was $6.29B in FY2021, $5.92B in FY2022, $1.35B in FY2023, $1.50B in FY2024 and $2.60B in FY2025, and it is $7.32B on a trailing basis. The trough was not caused by weak demand alone; it was caused by capital expenditure on fabs that were not yet producing revenue.",
      "That pattern is a deliberate choice. A fabless competitor would have reported higher free cash flow through the downturn and less control over supply and cost. Texas Instruments traded near-term cash flow for long-term cost advantage, and the recovery in free cash flow is the first evidence that the trade is paying off.",
      "Net cash is $8.14B, and the dividend consumes a modest share of cash at a 2.0% yield. The remaining cash flow is available for buybacks and further capacity. The company is not capital-constrained, which is unusual for a manufacturer at this point in a cycle.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 35.6x trailing earnings, 23.0x EV/EBITDA, 11.8x sales and 34.6x free cash flow, with a 2.9% free-cash-flow yield. Those multiples are high for a cyclical manufacturer. They are being applied to earnings that are recovering from a trough, which is when multiples usually look most expensive.",
      "The historical pattern in this industry is that the multiple compresses as earnings recover. If the consensus for $11.58 of EPS next year is right, the earnings multiple falls without the share price changing. That is the arithmetic the market is using, and it depends on the recovery continuing.",
      "The peer table shows Nvidia at 22.0x EV/EBITDA and Broadcom at 33.1x, both with higher margins and faster growth. Texas Instruments at 23.0x is priced as a high-quality cyclical with a structural cost advantage, not as a commodity supplier.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-nine analysts contribute to the attributed consensus, with a mean target of $336.86 and a range of $250.00 to $400.00. The mean is above the last close and the low end is below it, which is a narrower spread than most names in this batch.",
      "Estimates call for $22.40B of revenue and $9.06 of EPS this fiscal year, then $26.28B and $11.58. Next quarter is expected to produce $6.07B and $2.62, which is essentially flat with the $6.05B just reported. The forecasters expect the recovery to pause before it resumes.",
      "Those are third-party figures and they embed the assumption that industrial and automotive demand keeps improving. A reader should compare the quarterly estimate with the actual result, because a flat quarter after three strong ones is the point where a cycle usually changes direction.",
    ],
  },
  risks: {
    intro:
      "Texas Instruments' risks are cyclical and capital-allocation related. The balance sheet is strong, and the question is whether the capacity was built at the right time for the demand that follows.",
    items: [
      {
        title: "Industrial and automotive demand",
        severity: "High",
        detail:
          "The two largest end markets are cyclical. A pause in capital spending or vehicle production reduces orders faster than the fab base can adjust.",
        watch:
          "Revenue growth by end market and order trends.",
      },
      {
        title: "Depreciation from new capacity",
        severity: "High",
        detail:
          "New fabs add depreciation before they add revenue. A slow demand recovery would keep gross margin under pressure even with revenue growth.",
        watch:
          "Gross margin and depreciation as a share of revenue.",
      },
      {
        title: "Inventory in the channel",
        severity: "Medium",
        detail:
          "Customers and distributors hold stock. When they stop restocking, shipments fall below end demand.",
        watch:
          "Days of inventory and distributor commentary.",
      },
      {
        title: "Valuation at a cyclical peak",
        severity: "Medium",
        detail:
          "A 35.6x earnings multiple on recovering earnings leaves little room for a disappointment in the next year's estimate.",
        watch:
          "The forward multiple against the consensus growth rate.",
      },
      {
        title: "Competition from fab-lite rivals",
        severity: "Low",
        detail:
          "Analog competitors that outsource manufacturing can price aggressively in commodity parts, though they cannot match the cost structure at scale.",
        watch:
          "Gross margin versus peers and pricing commentary.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "$7.32B is the proof that the capital programme is past its peak spending phase.",
      },
      {
        title: "Gross margin",
        detail:
          "60.2% is the number that shows utilisation and pricing at the same time.",
      },
      {
        title: "Capital expenditure",
        detail:
          "The pace of spending decides whether free cash flow keeps recovering.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Texas Instruments is a high-quality analog manufacturer that used a downturn to build capacity. The 60.2% gross margin and 40.8% operating margin show the earning power of the model; the free-cash-flow trough shows its cost.",
      "The recovery is now in the numbers: revenue up 20.3%, operating margin at 47.5% in the latest quarter, and free cash flow back above $7B. The valuation already reflects a good deal of that.",
      "The reader should ask whether the current margin is the new normal or the top of a cycle. The answer depends on utilisation, which depends on demand, which is the one variable the company cannot control.",
    ],
    questions: [
      "How much of the margin recovery is utilisation rather than price?",
      "What is the remaining capital commitment on the new fabs?",
      "Are customers restocking or consuming?",
      "What would flat revenue for two years do to the 34.6x free-cash-flow multiple?",
    ],
  },
};
