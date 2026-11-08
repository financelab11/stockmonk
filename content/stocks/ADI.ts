import type { StockStory } from "./types";

export const ADI: StockStory = {
  ticker: "ADI",
  kicker: "Semiconductors · Analog and mixed-signal",
  title: "Analog Devices sells the chips that make other machines behave",
  dek: "The company's revenue falls and rises with the industrial and automotive inventory cycle, not with a consumer product launch. The trailing margin of 35.5% is a recovery number, and the question is how much of it is structural.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $13.88B, up 33.6% year over year, after a sharp downturn in FY2024.",
    "Gross margin is 65.8% and operating margin 35.5%, with the latest quarter at 40.1%.",
    "Free cash flow was $4.94B, a 35.6% margin, against $6.80B of net debt.",
    "At $363.56 the shares trade at 42.6x trailing earnings and 34.2x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/6281/000000628125000153/adi-20251101.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000006281&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Analog Devices designs the interface between the physical world and digital electronics. Its chips measure temperature, pressure, current and motion, convert signals between analog and digital form, and manage power. They are sold into industrial equipment, cars, communications infrastructure and consumer devices, usually in small quantities per system and in large numbers across thousands of customers.",
      "The business is cyclical in a specific way. Demand is driven by what customers are building and by the inventory they hold, so a downturn in industrial capital spending shows up as a violent swing in orders. Revenue went from $12.01B in FY2022 to $12.31B in FY2023, then fell to $9.43B in FY2024 before recovering to $11.02B in FY2025 and $13.88B on a trailing basis.",
      "At $363.56 the market capitalisation is $176.2B, or 42.6x trailing earnings and 34.2x EV/EBITDA. That is a rich multiple for a company whose revenue was lower two years ago than it is today. It is a bet that the recovery has further to run and that the gross margin holds near 65.8%.",
    ],
    quote:
      "Analog chips are designed into a customer's board and then stay there for years. The moat is the design win, and the cycle is the inventory that builds up around it.",
  },
  whatItDoes: {
    paragraphs: [
      "The catalogue is broad and deliberately unglamorous: amplifiers, data converters, power management, radio-frequency parts, sensors and digital signal processors. Each part is engineered for a narrow job, and the customer chooses it because it meets a specification, not because it is the cheapest option. That is why the company can earn a 65.8% gross margin on components that often sell for a few dollars.",
      "End markets are diversified by design. Industrial automation, instrumentation and healthcare use analog parts in low volumes across many customers. Automotive adds safety, electrification and infotainment systems with long qualification cycles. Communications infrastructure and consumer electronics are smaller and more cyclical. No single end market dominates enough to make the whole company a bet on one product.",
      "Manufacturing is a mix of internal fabs and external foundries. Owning some capacity protects process know-how and supply in tight markets, but it also puts fixed costs on the income statement. When volumes fall, those costs do not. That is the mechanism behind the margin collapse in FY2024 and the recovery since.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from selling parts, not from subscriptions. A design win generates an initial order and then years of follow-on business as the customer's product ships. Because the part is specified into the board, switching suppliers requires a redesign, which is expensive and slow. That is the source of pricing power and of the 65.8% gross margin.",
      "The cost structure is fixed-heavy. Wafer fabrication, test and assembly run at high utilisation when demand is strong, and gross margin expands quickly as volumes rise. In the latest quarter, operating margin reached 40.1% against 25.7% in Q2 FY2025 on revenue that grew from $2.64B to $4.02B. Incremental revenue carried an unusually high drop-through.",
      "Below the operating line the company carries $6.80B of net debt, or 1.3x EBITDA, with interest cover of 55.6x. The debt is a legacy of acquisitions and is comfortably serviced, but it means the equity is geared to changes in operating income. Return on invested capital of 9.7% is below return on equity of 12.3%, a gap that usually reflects acquired goodwill sitting in the invested-capital base.",
    ],
  },
  growth: {
    paragraphs: [
      "The current growth rate is a rebound. Revenue of $13.88B is up 33.6% on the prior year, and the latest quarter grew 39.6%. Neither figure should be extrapolated: they are measured against a period when customers were working through inventory. The five-year record, a 14.5% compound annual rate, is a better guide to what the business can do across a cycle.",
      "The attributed consensus expects $15.13B of revenue and $12.88 of EPS this fiscal year, then $18.39B and $16.50 next year. That second step is large, and it implies both higher volumes and a richer mix. The near-term quarterly estimates of $4.32B and $4.31B suggest the forecasters see the recovery flattening before it reaccelerates.",
      "The durable drivers are content per system and the number of systems. More sensors in a factory, more power management in an electric vehicle and more radio content in a base station all raise the dollar value of Analog Devices content per unit. The limit is capital spending by industrial and automotive customers, which is the variable that turned the cycle down in FY2024.",
    ],
    bullets: [
      {
        title: "Content per system",
        detail:
          "Each new generation of industrial and automotive equipment tends to carry more sensing, power conversion and connectivity.",
      },
      {
        title: "Design-win pipeline",
        detail:
          "Revenue arrives two to three years after a design win, so the current pipeline is the best guide to the medium term.",
      },
      {
        title: "Capacity utilisation",
        detail:
          "Margins depend on loading the fabs. Volume growth matters more to profit than price does.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the cycle clearly. Operating income was $3.82B on $12.31B of revenue in FY2023, then $2.03B on $9.43B in FY2024, then $2.93B on $11.02B in FY2025. The margin did not fall because prices collapsed; it fell because fixed manufacturing costs were spread over fewer units.",
      "Quarterly margins tell the recovery story in more detail. Operating margin was 25.7% in Q2 FY2025, 28.4% in Q3, 30.7% in Q4, 31.5% in Q1 FY2026, 38.1% in Q2 and 40.1% in Q3. Revenue rose in every one of those quarters. This is operating leverage working in the upward direction, and it can reverse just as quickly.",
      "Net margin is 29.8% and diluted EPS is $8.42. Return on equity of 12.3% is modest for a semiconductor company with these gross margins, which is a reminder that the balance sheet carries a large acquired asset base and $6.80B of net debt.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.94B, a 35.6% margin, which is higher than the trailing net margin. That is typical of a company with heavy depreciation on owned fabs: the accounting charge for wear and tear is large, while the cash spent on maintenance is lower in a year when capacity is not being expanded.",
      "The annual cash record shows the same cyclicality. Free cash flow was $2.39B, $3.78B, $3.56B, $3.12B and $4.28B across the five fiscal years. It held up better than operating income in the downturn because working capital was released as inventory was sold down. That is a useful buffer, but it is not repeatable every year.",
      "With $6.80B of net debt and interest cover of 55.6x, the balance sheet is not a constraint. The dividend consumes a modest share of cash at a 1.2% yield. The main call on cash is capital expenditure and acquisitions, both of which have shaped the current asset base.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 42.6x trailing earnings, 34.2x EV/EBITDA, 13.2x sales and 35.7x free cash flow, with a 2.8% free-cash-flow yield. On trailing numbers that is expensive, and it is being applied to earnings that have only just recovered.",
      "The peer set puts the multiple in context. Nvidia trades at 23.3x earnings and Broadcom at 36.6x, both growing faster. Texas Instruments, the closest analogue in analog semiconductors, is not in this peer table, but the comparison that matters is the margin and the cycle, not the ticker list. Analog Devices earns a 21st-percentile cheapness score on EV/EBITDA, meaning it is among the more expensive names in the coverage universe on that measure.",
      "A high multiple on cyclical earnings is a specific kind of risk. If the cycle turns, the earnings base falls and the multiple rises at the same moment, because the price is slow to adjust. That is what happened to the stock in the FY2024 downturn, and it is the pattern to keep in mind now.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-two analysts contribute to the attributed consensus, with a mean target of $472.44 and a range of $365.00 to $675.00. The mean is above the $363.56 close and the low end is roughly at it. The dispersion reflects different assumptions about the durability of the industrial recovery.",
      "Estimates call for $15.13B of revenue and $12.88 of EPS this fiscal year, with next year at $18.39B and $16.50. Earnings are forecast to grow faster than sales, which only works if margins keep expanding from the current 35.5%.",
      "Those are third-party figures. A mean target is not a recommendation, and the range is more informative than the average when the cycle is turning.",
    ],
  },
  risks: {
    intro:
      "The risks are cyclical and operational rather than financial. The balance sheet can absorb a downturn; the income statement cannot absorb one without a large margin hit.",
    items: [
      {
        title: "Industrial and automotive capex",
        severity: "High",
        detail:
          "The two largest end markets are driven by capital spending and vehicle production. A pause cuts orders faster than the company can adjust fixed costs.",
        watch:
          "Order trends, book-to-bill commentary and distributor inventory.",
      },
      {
        title: "Inventory correction",
        severity: "High",
        detail:
          "Customers and distributors hold stock of analog parts. When they stop restocking, revenue falls even if end demand is stable.",
        watch:
          "Days of inventory at distributors and the company's own inventory balance.",
      },
      {
        title: "Manufacturing utilisation",
        severity: "Medium",
        detail:
          "Owned fabs carry fixed costs. Low utilisation compresses gross margin quickly, as FY2024 showed.",
        watch:
          "Gross margin against revenue and any fab-loading commentary.",
      },
      {
        title: "Acquired goodwill and returns",
        severity: "Medium",
        detail:
          "Return on invested capital of 9.7% sits below return on equity of 12.3%, which points to a large acquired asset base. A write-down would be an accounting event, not a cash one, but it would reset the return profile.",
        watch:
          "Goodwill and intangible balances and any impairment disclosure.",
      },
      {
        title: "Design-win competition",
        severity: "Medium",
        detail:
          "Analog parts are sticky once designed in, but the design win itself is contested. Losing a socket costs years of revenue, not one quarter.",
        watch:
          "Design-win disclosures and the growth rate of the industrial segment.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "65.8% is the number that separates a pricing-power business from a commodity supplier.",
      },
      {
        title: "Book-to-bill",
        detail:
          "Orders relative to shipments turn before revenue does in this industry.",
      },
      {
        title: "Net debt",
        detail:
          "$6.80B at 1.3x EBITDA is manageable, but it limits flexibility if another downturn arrives.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Analog Devices is a high-quality component supplier in a cyclical industry. The gross margin and the design-win model are durable advantages. The 35.5% operating margin is not a permanent floor; it is where the company sits in the recovery.",
      "The important distinction is between the business and the cycle. Revenue at $13.88B is above the FY2023 peak, and the latest quarter's 40.1% operating margin is close to the best the company has shown. Both could improve further, and both could fall if industrial customers slow their spending.",
      "The valuation leaves little room for a normal cycle. A reader should decide whether the current earnings power is the right base for a multiple, and what a 20% revenue decline would do to it.",
    ],
    questions: [
      "How much of the 40.1% quarterly operating margin comes from utilisation rather than mix?",
      "What is the inventory position at distributors today?",
      "How much of revenue is exposed to industrial capital spending?",
      "What would a repeat of the FY2024 downturn do to the current multiple?",
    ],
  },
};
