import type { StockStory } from "./types";

export const ADI: StockStory = {
  "ticker": "ADI",
  "kicker": "Semiconductors · Analog and mixed-signal",
  "title": "Analog Devices sells the chips that make other machines behave",
  "dek": "The company's revenue falls and rises with the industrial and automotive inventory cycle, not with a consumer product launch. The trailing margin of 35.5% is a recovery number, and the question is how much of it is structural.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue of $13.9B is up 33.6%, and the 35.5% operating margin is a recovery from 21.6% in FY2024.",
    "Industrial and automotive are the core at 44.7% and 29.7% of revenue, so the cycle in capital spending still sets the earnings path.",
    "Free cash flow of $4.9B is a 35.6% margin, and net debt of $6.8B is 1.3x EBITDA.",
    "At 44.4x earnings the shares price a full recovery, while 10.2% ROIC trails the 22.6% peer median on acquired capital."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/6281/000000628125000153/adi-20251101.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000006281&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Analog Devices is late in a recovery, not at the start of one. Revenue rose 33.6% over the trailing year to $13.9B, and the quarter ended 1 August 2026 produced $4.0B at a 40.1% operating margin, against $2.9B and 28.4% a year earlier. The improvement is mostly utilisation: the company owns fabs, so incremental volume drops through to gross profit at a high rate. Trailing gross margin of 65.8% and operating margin of 35.5% are the evidence, and both are close to the best levels in the record.",
      "The end-market mix explains why the cycle has been sharp in both directions. Industrial is 44.7% of revenue and automotive 29.7%, so three-quarters of the business depends on capital spending and vehicle production rather than on consumer launches. Both are design-win markets with long qualification cycles: a part that passes an automotive qualification stays on the board for years, which supports the 65.8% gross margin. The flip side is inventory. When distributors stop restocking, revenue falls before end demand does, which is what happened in FY2024 when revenue dropped 23.4%.",
      "The valuation is the unresolved part. At $379 the shares trade at 44.4x trailing earnings, 35.6x EV/EBITDA and 37.2x free cash flow, against a 31.0x peer earnings multiple and 24.8x EV/EBITDA. Net debt of $6.8B is 1.3x EBITDA, a legacy of acquisitions, and return on invested capital of 10.2% sits below the 22.6% peer median, while return on equity is 12.3%. The gap is mostly acquired goodwill in the capital base, not weak operations. The question is whether a 40% operating margin is a new floor or the top of a cycle."
    ],
    "quote": "Analog Devices owns fabs that cost the same when they are idle, so the 40.1% operating margin is a utilisation number as much as a franchise number."
  },
  "whatItDoes": {
    "paragraphs": [
      "The catalogue is broad and deliberately unglamorous: amplifiers, data converters, power management, radio-frequency parts, sensors and digital signal processors. Each part is engineered for a narrow job, and the customer chooses it because it meets a specification, not because it is the cheapest option. That is why the company can earn a 65.8% gross margin on components that often sell for a few dollars.",
      "End markets are diversified by design. Industrial automation, instrumentation and healthcare use analog parts in low volumes across many customers. Automotive adds safety, electrification and infotainment systems with long qualification cycles. Communications infrastructure and consumer electronics are smaller and more cyclical. No single end market dominates enough to make the whole company a bet on one product.",
      "Manufacturing is a mix of internal fabs and external foundries. Owning some capacity protects process know-how and supply in tight markets, but it also puts fixed costs on the income statement. When volumes fall, those costs do not. That is the mechanism behind the margin collapse in FY2024 and the recovery since."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from selling parts, not from subscriptions. A design win generates an initial order and then years of follow-on business as the customer's product ships. Because the part is specified into the board, switching suppliers requires a redesign, which is expensive and slow. That is the source of pricing power and of the 65.8% gross margin.",
      "The cost structure is fixed-heavy. Wafer fabrication, test and assembly run at high utilisation when demand is strong, and gross margin expands quickly as volumes rise. In Q3 FY2026, operating margin reached 40.1% against 28.4% in Q3 FY2025 on revenue that grew from $2.88B to $4.02B. Incremental revenue carried an unusually high drop-through.",
      "Below the operating line the company carries $6.80B of net debt, or 1.3x EBITDA, with interest cover of 55.6x. The debt is a legacy of acquisitions and is comfortably serviced, but it means the equity is geared to changes in operating income. Return on invested capital of 9.7% is below return on equity of 12.3%, a gap that usually reflects acquired goodwill sitting in the invested-capital base."
    ]
  },
  "growth": {
    "paragraphs": [
      "The revenue path is a clean cycle. Revenue was $12.3B in FY2023, fell to $9.4B in FY2024, recovered to $11.0B in FY2025 and reached $13.9B on a trailing basis. The quarterly sequence through FY2026 was $3.2B, $3.6B and $4.0B, so the second derivative is still positive. Consensus expects $15.1B in FY2026, up 37.3%, and $18.4B in FY2027, up 21.6%. The forecast assumes the recovery continues but at half the current pace, which is a reasonable description of a restock that matures into end demand.",
      "The durable part of the mix is industrial and automotive, at 44.7% and 29.7%. Communications and consumer, at 12.5% and 13.0%, are smaller and more cyclical, so they can swing the quarterly rate without changing the franchise. Non-US revenue is 70.6%, which adds currency and regional capex exposure. Backlog and book-to-bill are not disclosed, so the design-win pipeline has to be inferred from end-market revenue and from the gross margin, which is the best available signal that utilisation is rising.",
      "The consensus shape is more demanding than the headline. FY2027 EPS of $16.52 would be 28.3% above FY2026's $12.88, on revenue growth of 21.6%. That implies margin expansion continues even as revenue growth slows, which is possible only if the mix shifts toward higher-value industrial and automotive parts. If the recovery is mostly restocking, the operating margin will peak before the revenue line does, and the estimate will be too high."
    ],
    "bullets": [
      {
        "title": "Industrial automation",
        "detail": "44.7% of revenue, spread across many customers and low unit volumes. It is the most durable end market and the slowest to turn."
      },
      {
        "title": "Automotive qualification",
        "detail": "29.7% of revenue. Safety and electrification content grows per vehicle, but design wins take years to convert into shipments."
      },
      {
        "title": "Owned fabs",
        "detail": "Internal capacity protects process know-how and supply. It also puts depreciation on the income statement when orders slow."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Margin progression is almost entirely operating leverage. Gross margin went from 57.1% in FY2024 to 61.5% in FY2025 and 65.8% on a trailing basis; operating margin went from 21.6% to 26.6% and then 35.5%. Revenue rose 33.6% over the trailing year while operating income rose faster, which is what a fixed-cost fab base does when utilisation improves. The August quarter's 40.1% operating margin compared with 28.4% in the August 2025 quarter, on revenue that rose from $2.9B to $4.0B.",
      "Returns are the weak spot. Return on invested capital is 10.2% and return on equity 12.3%, against a 22.6% peer median. That shortfall is not a margin problem: the operating margin is above the 27.7% peer median. It is a capital problem, because acquisitions left goodwill and intangibles in the invested-capital base. A higher ROIC would need either better operating profit or a smaller capital base, and neither happens quickly. The 1.3x leverage is comfortable, but it makes the equity more sensitive to the next downturn than the margin alone suggests.",
      "The comparison with Broadcom is instructive. Broadcom reported a 48.0% operating margin, a 24.8% ROIC, 48.7% revenue growth and trades at 38.6x earnings. Analog Devices has the higher gross margin but the lower return on capital, because its balance sheet carries the cost of past deals. The market is paying 44.4x for ADI, a premium to Broadcom on earnings despite the lower ROIC and slower growth. That premium is for the analog franchise, but it leaves less room for a cyclical miss."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex was $4.9B, a 35.6% margin, and FY2025 operating cash flow of $4.8B came against $533.6M of capex. That spend is small against $13.9B of revenue, which is low for a company that owns fabs, because the heavy investment happened earlier and the current base is being utilised rather than expanded. Net debt of $6.8B is 1.3x EBITDA, and the 1.3% dividend yield absorbs a modest share of the cash generated.",
      "The quarterly cash line is more volatile than the annual one. Free cash flow was $977.8M in Q1 FY2025, $729.2M in Q2, $1.1B in Q3 and $1.5B in Q4, then $1.3B, $734.3M and $1.5B in the first three quarters of FY2026. That pattern points to inventory and receivables moving with the cycle rather than to a change in the underlying economics. The cash conversion is real, but it is not smooth, and a single quarter should not be read as a trend.",
      "Capital allocation has three claims: the dividend, debt reduction and acquisitions. The dividend yield of 1.3% is small relative to a 35.6% free-cash-flow margin, and net debt has fallen from $6.0B in FY2023 to $4.9B in FY2025 before rising to $6.8B on a trailing basis. The rise is worth watching because it coincided with the recovery, which suggests working capital or a small deal rather than a structural change. A company with a 10.2% ROIC should be cautious about paying premiums for more capacity."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $379 Analog Devices carries a 44.4x trailing multiple, 35.6x EV/EBITDA, 13.7x sales and 37.2x free cash flow. The peer set trades at 31.0x earnings and 24.8x EV/EBITDA, and the stock sits in the 69th and 79th percentiles respectively. The premium is not as extreme as Palantir's, but it is real for a cyclical business at a high point in its margin cycle. The 2.7% free-cash-flow yield is thin compensation for that risk.",
      "Forward numbers change the picture. FY2026 EPS of $12.88 implies 29.4x, below the trailing multiple, and FY2027 EPS of $16.52 implies 22.9x. The de-rating depends on the estimates, which have moved only 3.6% over 90 days and 0.3% over 30 days. That stable revision pattern suggests the analysts are comfortable with the recovery but not adding to it. If the FY2027 number lands, the shares would be cheaper than the peer median for the first time in the cycle.",
      "Broadcom sets the peer benchmark. It trades at 38.6x earnings and 34.9x EV/EBITDA with a 48.0% operating margin and a 24.8% ROIC; ADI trades at 44.4x and 35.6x with a 35.5% operating margin and a 10.2% ROIC. A higher multiple for a lower return on capital is hard to defend unless the automotive mix deserves it. The analog franchise is real, but the burden of proof sits with the FY2027 margin estimate."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The 18 November 2026 Yahoo Finance snapshot draws on 33 analysts, with a mean target of $473 and a range of $365 to $675. The mean is above the $379 price even though the low end is below it, so the bullish consensus still contains a real bear case.",
      "FY2026 estimates are $15.1B of revenue and $12.88 of EPS; FY2027 is $18.4B and $16.52. EPS revisions are plus 3.6% over 90 days but only plus 0.3% over 30 days, so the upgrade cycle has slowed. The consensus assumes the August quarter's $4.3B revenue, up 40.4%, and then FY2027 growth of 21.6%, which is the point at which the restock has to become end demand."
    ]
  },
  "risks": {
    "intro": "The risks are cyclical and operational rather than financial. The balance sheet can absorb a downturn; the income statement cannot absorb one without a large margin hit.",
    "items": [
      {
        "title": "Industrial and automotive capex",
        "severity": "High",
        "detail": "The two largest end markets are driven by capital spending and vehicle production. A pause cuts orders faster than the company can adjust fixed costs.",
        "watch": "Order trends, book-to-bill commentary and distributor inventory."
      },
      {
        "title": "Inventory correction",
        "severity": "High",
        "detail": "Customers and distributors hold stock of analog parts. When they stop restocking, revenue falls even if end demand is stable.",
        "watch": "Days of inventory at distributors and the company's own inventory balance."
      },
      {
        "title": "Manufacturing utilisation",
        "severity": "Medium",
        "detail": "Owned fabs carry fixed costs. Low utilisation compresses gross margin quickly, as FY2024 showed.",
        "watch": "Gross margin against revenue and any fab-loading commentary."
      },
      {
        "title": "Acquired goodwill and returns",
        "severity": "Medium",
        "detail": "Return on invested capital of 9.7% sits below return on equity of 12.3%, which points to a large acquired asset base. A write-down would be an accounting event, not a cash one, but it would reset the return profile.",
        "watch": "Goodwill and intangible balances and any impairment disclosure."
      },
      {
        "title": "Design-win competition",
        "severity": "Medium",
        "detail": "Analog parts are sticky once designed in, but the design win itself is contested. Losing a socket costs years of revenue, not one quarter.",
        "watch": "Design-win disclosures and the growth rate of the industrial segment."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "65.8% is the number that separates a pricing-power business from a commodity supplier."
      },
      {
        "title": "Book-to-bill",
        "detail": "Orders relative to shipments turn before revenue does in this industry."
      },
      {
        "title": "Net debt",
        "detail": "$6.80B at 1.3x EBITDA is manageable, but it limits flexibility if another downturn arrives."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Analog Devices is a high-quality component supplier in a cyclical industry. The gross margin and the design-win model are durable advantages. The 35.5% operating margin is not a permanent floor; it is where the company sits in the recovery.",
      "The important distinction is between the business and the cycle. Revenue at $13.88B is above the FY2023 peak, and the latest quarter's 40.1% operating margin is close to the best the company has shown. Both could improve further, and both could fall if industrial customers slow their spending.",
      "The valuation leaves little room for a normal cycle. A reader should decide whether the current earnings power is the right base for a multiple, and what a 20% revenue decline would do to it."
    ],
    "questions": [
      "How much of the 40.1% quarterly operating margin comes from utilisation rather than mix?",
      "What is the inventory position at distributors today?",
      "How much of revenue is exposed to industrial capital spending?",
      "What would a repeat of the FY2024 downturn do to the current multiple?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
