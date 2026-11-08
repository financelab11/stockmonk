import type { StockStory } from "./types";

export const DHI: StockStory = {
  ticker: "DHI",
  kicker: "Homebuilding · US residential construction",
  title: "D. R. Horton turns land into houses, and land is the risk",
  dek: "A volume homebuilder earns a thin spread on each house and ties up capital in land and work in progress. The margin depends on price versus construction cost; the balance sheet depends on how much land it owns.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $33.3B, down 3.5%, with operating income of $4.74B in fiscal 2025 against $7.63B in fiscal 2022 on similar revenue.",
    "Gross margin of 16.2% is the spread on a house; the operating margin of 12.3% leaves little room for error on land or incentives.",
    "Free cash flow has swung between $413.6M and $4.16B across five years as land spending moved, which is why the cash figure is noisy.",
    "Net debt of $4.65B is only 1.1x EBITDA, and the third-party mean target of $146.50 sits below the $152.28 close.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/882184/000088218425000081/dhi-20250930.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000882184&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "D. R. Horton builds and sells houses in the United States under the D.R. Horton, America's Builder, Emerald Homes and Breland Homes names. It buys land, develops lots, constructs homes and sells them at closing. Only 7,735 people are employed directly, because most of the actual construction is done by subcontractors.",
      "The business is a spread business. A house sells for a price, and land, materials, labour and financing costs consume most of it. Gross margin of 16.2% is what is left; operating margin of 12.3% is what is left after sales and administration. On $33.3B of trailing revenue that is $4.1B of operating profit, which is a large number built on a narrow percentage.",
      "The shares closed at $152.28 for a market capitalisation of $43.2B, in the middle of a 52-week range of $130.40 to $170.78. At 14.1x trailing earnings, 11.4x EV/EBITDA and 1.4x sales, the stock is priced as a cyclical with a solid balance sheet rather than as a growth business.",
    ],
    quote:
      "A homebuilder's income statement is a record of houses already sold. The signal about the future sits in order intake and in the land the company has already committed to buy.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a new house in a subdivision. The company buys land, puts in roads and utilities, builds homes on speculation — meaning without a buyer lined up — and sells them from model homes. Buyers are mostly owner-occupiers, with a mortgage arranged through the company's financing operation or an outside lender.",
      "Because homes are built before they are sold, inventory is the core operating asset. It appears on the balance sheet as land, land under development, and homes finished or in progress. A healthy builder holds enough to keep crews working and enough sold homes to convert into revenue, but not so much that a slowdown leaves it holding depreciating stock in a falling market.",
      "The brands cover entry-level and move-up product, and the geographic footprint is spread across many states and metropolitan markets. That spread matters: housing is a local business, and a builder with exposure across several regions is less exposed to a single employment market than a concentrated one.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is recognised when a house closes, not when the buyer signs. Between the sale and the closing there are months of construction, during which the company has already paid for the land and most of the materials. That timing is why a builder can report strong orders and weak revenue in the same quarter.",
      "The gross margin of 16.2% is the difference between the sales price and the cost to build, including land. Sales incentives — rate buydowns, closing-cost help, upgrades — are deducted from revenue, so they show up as a lower margin rather than as a separate expense line. When affordability tightens, builders usually protect volume by raising incentives, which is why margins fall before revenue does.",
      "Operating margin of 12.3% covers sales offices, model homes, marketing, warranty and corporate overhead. The capital employed is the inventory, so the relevant test is not the margin alone but the return on that inventory. Return on invested capital of 11.2% says the company earns a real return, but a modest one for a business whose earnings can halve in a downturn.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 11.0% a year over the five fiscal years in the dataset, from $27.77B in fiscal 2021 to $34.25B in fiscal 2025. That is not a smooth line: it rose to $36.80B in fiscal 2024 and then fell back. The trailing figure of $33.3B is 3.5% below a year earlier, and the latest quarter was flat.",
      "Growth in this industry comes from three places, and only one of them is within management's control. The first is the number of homes closed, which follows order intake from earlier quarters. The second is the average price of a home, which follows mix and geography. The third is the market itself: mortgage rates, household formation, wage growth and the supply of existing homes for sale.",
      "The consensus expects $31.32B of revenue and $8.80 of EPS this fiscal year, then $33.18B and $11.01 next year. That is a forecast of a modest trough followed by a recovery in both volume and margin. It is a reasonable shape for a cyclical, but it depends on affordability improving rather than on anything the company can decide on its own.",
    ],
    bullets: [
      {
        title: "Closings",
        detail:
          "The count of homes sold and delivered. It follows orders with a lag of a few months.",
      },
      {
        title: "Average sales price",
        detail:
          "A function of geography, house size and incentives. Mix can lift the average while the underlying market weakens.",
      },
      {
        title: "Incentives",
        detail:
          "Rate buydowns and closing-cost contributions support volume but reduce the gross margin on every house.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The clearest fact in the annual history is that revenue was almost identical in fiscal 2022 and fiscal 2025 — $33.48B against $34.25B — while operating income fell from $7.63B to $4.74B. Costs, incentives and the price of land relative to the price of a house moved against the company, and no amount of volume could hide it.",
      "The quarterly record shows the same pressure with more detail. Operating margin was 13.8% in Q2 FY25, 14.7% in Q3 FY25 and 12.4% in Q4 FY25, then 11.6% and 11.5% in the first two quarters of fiscal 2026 before recovering to 13.3% in Q3 FY26. The recovery in the latest quarter came with $9.23B of revenue, exactly the same figure as Q3 FY25 — better margin on flat sales.",
      "Return on equity of 12.7% and return on invested capital of 11.2% are close together, which is what you would expect from a company financed with modest debt. The absence of a wide gap is a feature, not a weakness: it means the reported return is coming from the business rather than from borrowing.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.20B over the trailing period, a 9.6% margin, and $3.28B in fiscal 2025. The five-year record is far more uneven: $440.9M in fiscal 2021, $413.6M in fiscal 2022, then $4.16B in fiscal 2023, $2.02B in fiscal 2024 and $3.28B in fiscal 2025. Those swings follow land purchases, not sales.",
      "That is the key to reading a builder's cash flow. When the company is buying land for future communities, cash goes out and free cash flow falls even if the income statement looks fine. When it slows land spending, cash comes back quickly. A single year of strong free cash flow therefore says more about the land cycle than about the quality of the business.",
      "Net debt of $4.65B is 1.1x EBITDA, and the dividend yield is 1.1%. The modest leverage gives the company room to keep buying land through a downturn, which is how builders gain share when smaller competitors cannot finance inventory. The trade-off is that the same land, if housing demand falls, becomes a write-down.",
    ],
    bullets: [
      {
        title: "Land spend",
        detail:
          "The largest discretionary cash outflow. It is forward-looking and largely invisible in current earnings.",
      },
      {
        title: "Inventory turns",
        detail:
          "How quickly homes and lots convert into closings. Slower turns tie up cash and raise the risk of impairment.",
      },
      {
        title: "Dividend",
        detail:
          "A 1.1% yield is small relative to cash flow, which leaves room for land investment and buybacks.",
      },
    ],
  },
  valuation: {
    paragraphs: [
      "At $152.28 the shares trade at 14.1x trailing earnings, 11.4x EV/EBITDA, 1.4x sales and 13.5x free cash flow, with a free-cash-flow yield of 7.4%. For a cyclical at a mid-cycle point in the housing market, those are ordinary multiples rather than distressed ones.",
      "The peer set in this report is retail-heavy and only partly comparable. Home Depot trades at 16.1x EV/EBITDA on a 12.4% operating margin, Lowe's at 12.9x on 11.4%. A builder normally trades at a discount to the retailers because its earnings are more cyclical and its inventory is less liquid. At 11.4x, D. R. Horton sits between the two, which is roughly where a well-capitalised builder belongs.",
      "The multiple therefore embeds a view on the housing cycle rather than on the company's execution. If margins stay near 12% and closings hold, 14x earnings is not demanding. If the cycle turns and earnings fall by a third, the same price becomes much more expensive. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fourteen analysts contribute to the third-party consensus, with a mean target of $146.50 and a range of $114.00 to $186.00. The mean sits below the $152.28 close, which is worth noting: the average published target implies slightly less value than the current price, even though the range extends well above it.",
      "Estimates call for $6.08B of revenue and $1.28 of EPS next quarter, then $7.33B and $1.84, with $31.32B and $8.80 for the current fiscal year. Those quarterly figures are heavily seasonal, so the sequential jump says more about the spring selling season than about accelerating demand. The wide range between the high and low target reflects different assumptions about mortgage rates and about how much margin the company gives away in incentives; that is the real disagreement, and it is not resolved by the average.",
    ],
  },
  risks: {
    intro:
      "The risks for a homebuilder are cyclical and balance-sheet related. The company is conservatively financed, so the main question is how much of the current gross margin survives if affordability worsens.",
    items: [
      {
        title: "Mortgage rates and affordability",
        severity: "High",
        detail:
          "Higher monthly payments shrink the pool of buyers. Builders usually respond with incentives, which protects volume at the cost of margin.",
        watch:
          "Order trends, cancellation rates and the level of sales incentives.",
      },
      {
        title: "Land and inventory impairment",
        severity: "High",
        detail:
          "Land bought at one price can be worth less if local prices fall. Impairments are taken against inventory and hit earnings in a single quarter.",
        watch:
          "Inventory balance, lot count and any impairment charges.",
      },
      {
        title: "Construction cost inflation",
        severity: "Medium",
        detail:
          "Materials and subcontractor labour are the largest cost after land. A house sold before costs are locked in can be built at a loss.",
        watch:
          "Gross margin per house and the gap between orders and closings.",
      },
      {
        title: "Local market concentration",
        severity: "Medium",
        detail:
          "Housing is local. An employment shock in a large metropolitan market can hit a meaningful share of closings even if the national picture is stable.",
        watch:
          "Revenue by region and the mix of active communities.",
      },
      {
        title: "Cyclical earnings and multiple compression",
        severity: "Medium",
        detail:
          "Builders trade on mid-cycle earnings. If the market decides the cycle has peaked, the multiple can fall faster than earnings.",
        watch:
          "The EV/EBITDA multiple against the direction of order growth.",
      },
    ],
    watchlist: [
      {
        title: "Net sales orders",
        detail:
          "The leading indicator. Closings in two quarters are largely determined by orders taken today.",
      },
      {
        title: "Gross margin and incentives",
        detail:
          "A falling margin with stable volume means the company is buying sales. That is a choice with a cost.",
      },
      {
        title: "Inventory and land spend",
        detail:
          "Track how much cash is going into land while sales are slowing. That combination is what precedes impairments.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "D. R. Horton is a volume builder with a conservative balance sheet and a spread business model. It produced $33.3B of trailing revenue, a 12.3% operating margin, $3.20B of free cash flow and $4.65B of net debt.",
      "The important comparison is not this year against last year but fiscal 2022 against fiscal 2025: similar revenue, operating income down from $7.63B to $4.74B. That gap is the cost of affordability — incentives, land prices and construction costs — and it is the number that decides whether the next upturn restores the old margin.",
      "What the figures cannot tell you is where the housing cycle goes next. Order intake, the inventory of unsold homes and the level of incentives are the three things that would answer that, and none of them is visible in a trailing twelve-month income statement.",
    ],
    questions: [
      "How much of the margin decline came from incentives rather than from land or construction costs?",
      "What share of inventory is finished and unsold, and how fast is it turning?",
      "Are orders growing in the markets that carry the most closings?",
      "How much land has been optioned rather than owned outright?",
    ],
  },
};
