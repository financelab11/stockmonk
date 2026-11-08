import type { StockStory } from "./types";

export const PL: StockStory = {
  ticker: "PL",
  kicker: "Space · Earth-observation data",
  title: "Planet Labs sells pictures of the Earth by subscription",
  dek: "Gross margin of 55.4% and positive free cash flow sit above a -27.2% operating margin, while net income swings enough to make the 71.3x P/E misleading.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $378.3M, up 44.1%, with the latest quarter at $116.1M.",
    "Gross margin of 55.4% is the highest in this peer group; operating margin is -27.2%.",
    "Free cash flow turned positive at $24.7M even though the FY2026 operating loss was $95.1M.",
    "Net income moved from -$111.8M in FY2025 to +$54.2M in FY2026, so the P/E rests on a volatile number.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1836833/000119312526119957/pl-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001836833&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Planet Labs operates a constellation of small satellites that photograph the Earth's surface repeatedly, then sells access to that imagery and the software that makes it usable. The product is not a single picture. It is a time series: the same field, port or forest photographed often enough that a customer can see change rather than a snapshot.",
      "That is a subscription business built on capital expenditure. The satellites are expensive to design, launch and replace, but the data they produce can be sold to many customers without being consumed. Gross margin of 55.4% reflects that non-rival quality. The operating margin of -27.2% reflects everything required to run the constellation and sell into large organisations.",
      "The shares closed at $12.55, giving a $4.34B market value; EV/sales is 9.8x. The trailing P/E of 71.3x looks reasonable only until you notice that net income was $54.2M in FY2026, -$111.8M in FY2025 and $148.6M in a single quarter of FY2026. That line is not a stable measure of the business.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company designs, builds and launches its own satellites, then delivers imagery through a cloud platform that handles processing, harmonisation and analysis. Customers buy either a subscription to a region and cadence or a licence to a data set, and increasingly they buy the analytics layered on top.",
      "The customer list is broad by design. Agriculture uses the data to track crop health, mapping and forestry use it for land classification, insurers use it to assess damage, and governments use it for monitoring and defence. Breadth protects the company from any single industry's budget cycle, but it also means selling to many buyers with different needs.",
    ],
    bullets: [
      {
        title: "Constellation",
        detail:
          "Small satellites built in-house and replaced on a cycle. Coverage frequency is the product differentiator.",
      },
      {
        title: "Data platform",
        detail:
          "Cloud delivery, processing and harmonisation. This is where imagery becomes a usable time series.",
      },
      {
        title: "Analytics",
        detail:
          "Derived products for agriculture, insurance and government that carry higher margin than raw pixels.",
      },
      {
        title: "Customers",
        detail:
          "Agribusiness, mapping, forestry, finance and insurance, plus federal, state and local government.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is mostly subscription and licence based. A customer pays for access to a defined area at a defined revisit rate, or for a archive of imagery, and renews if the data keeps answering a question they care about. Renewal is the whole game: acquiring a new agriculture or government account costs more than keeping one.",
      "The cost structure has two layers. The first is the constellation: building, launching and operating satellites, which is capital spending followed by depreciation. The second is the go-to-market organisation: solution engineers, salespeople and support staff who translate imagery into a workflow a customer will pay for. The second layer is why a 55.4% gross margin becomes a -27.2% operating margin.",
      "Incremental revenue is valuable once the constellation exists. The same image can be licensed to an agribusiness and a reinsurer without additional manufacturing cost, so each additional customer improves the margin. The constraint is capacity: satellites have finite downlink and imaging time, and coverage promises have to be met before they can be sold.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 21.5% a year across the fiscal years in the dataset, from $131.2M in FY2022 to $307.7M in FY2026. The latest quarter grew 58.1% year over year to $116.1M, well above the annual rate, which suggests either a large new contract or a faster-selling product mix.",
      "The consensus expects $437.7M this fiscal year and $570.5M next, with $104.4M next quarter and $123.6M the quarter after. The first of those is below the $116.1M just reported, so the forecast assumes quarter-to-quarter unevenness rather than a straight line.",
      "Growth comes from more coverage sold to existing customers, new government programmes and analytics attached to raw imagery. What would slow it is a launch failure that interrupts replenishment, a budget delay at a large government customer, or price competition from cheaper imaging capacity.",
    ],
  },
  performance: {
    paragraphs: [
      "After widening from $128.1M in FY2022 to $175.7M in FY2023, the operating loss has narrowed every year: $169.7M in FY2024, $116.1M in FY2025 and $95.1M in FY2026. Revenue rose every year over the same period. The company is moving toward profitability, just not quickly.",
      "The quarterly operating margins show the same direction with noise: -34.4%, -24.5%, -22.6%, -41.5%, -37.1% and -11.6%. The final quarter is the best of the six. The earlier -41.5% print in Q4 FY2026 is a reminder that a single quarter can break the trend.",
      "The net income line is the confusing one. It was $148.6M in Q4 FY2026 and -$138.9M in Q1 FY2027, on operating results that moved far less. Those swings come from below the operating line and make diluted EPS of -$1.11 and return on equity of -31.2% hard to compare across periods.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $24.7M over the trailing period, a 6.5% margin. That is a genuine achievement for a satellite operator: the annual history went from -$52.5M in FY2022, -$84.4M in FY2023 and -$88.7M in FY2024 to -$58.7M in FY2025 and +$57.6M in FY2026.",
      "A swing of that size deserves scrutiny. Free cash flow improved by more than $100M in one year while the operating loss was still $95.1M, which means working capital or customer prepayments did much of the work. Those effects can reverse.",
      "The balance sheet carries $640.1M of net cash, enough to fund satellite replenishment without raising money at a bad moment. Capital expenditure is the recurring claim on that cash: satellites wear out and must be replaced to keep the coverage promise that subscriptions depend on.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $12.55 the company trades at 9.8x EV/sales, 71.3x trailing earnings and 176.1x free cash flow. Three multiples, three different stories. The sales multiple is the most stable; the earnings multiple rests on a net income figure that swings by hundreds of millions; the cash-flow multiple says the market is paying a great deal for a cash flow that has only just turned positive.",
      "Compared with the peer group, 9.8x EV/sales sits below Rocket Lab at 38.2x and AST SpaceMobile at 26.1x, and above Kratos at 3.2x and AeroVironment at 2.9x. Planet is priced as a data business rather than a hardware contractor, which is consistent with its 55.4% gross margin.",
      "The multiple implies that revenue keeps growing and that operating margin eventually follows gross margin. If operating margin reached the mid-teens on $570.5M of revenue, the earnings base would justify a very different multiple. The company is not there yet.",
    ],
  },
  analysts: {
    paragraphs: [
      "Eleven analysts cover Planet. The mean target is $30.27, with a range of $17.00 to $50.00, and it sits well above the $12.55 share price — a gap that reflects how far the stock has fallen from its 52-week high of $51.76.",
      "Their numbers are $437.7M of revenue and -$0.06 of EPS this fiscal year, then $570.5M and -$0.00 next year. The move to roughly break-even EPS is the important part: it assumes operating leverage arrives without a jump in capital spending.",
      "With eleven contributors, the average is more reliable than a two-analyst number but still sensitive to one or two changed models. The estimates are third-party context, not a Stockmonk view.",
    ],
  },
  risks: {
    intro:
      "Planet Labs has the balance sheet and the gross margin of a viable data business. The risks are the cost of staying in orbit, the concentration of large contracts and the quality of a cash-flow improvement that has only one year behind it.",
    items: [
      {
        title: "Satellite replenishment",
        severity: "High",
        detail:
          "Subscriptions promise a revisit rate. If launches fail or replacement satellites are delayed, the coverage promise weakens and renewals follow.",
        watch:
          "Launch schedule, satellites in orbit and capital spending on the constellation.",
      },
      {
        title: "Government customer concentration",
        severity: "High",
        detail:
          "Large defence and civil contracts can dominate a quarter, and budget timing decides when revenue is recognised.",
        watch:
          "Contract mix, backlog and the share of revenue from the largest customers.",
      },
      {
        title: "Cash-flow quality",
        severity: "Medium",
        detail:
          "The swing to positive free cash flow coincided with a $95.1M operating loss. Working capital can reverse.",
        watch:
          "Operating cash flow excluding working-capital changes, and receivables.",
      },
      {
        title: "Price competition",
        severity: "Medium",
        detail:
          "More imaging capacity is being launched by others, and free or cheap imagery competes for the low end of the market.",
        watch:
          "Average revenue per customer and gross margin trends.",
      },
      {
        title: "Net income volatility",
        severity: "Low",
        detail:
          "Non-operating items have moved net income by more than $100M between quarters, which distorts per-share measures.",
        watch:
          "The reconciliation between operating income and net income each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The path from -27.2% toward break-even is the core of the equity story.",
      },
      {
        title: "Gross margin",
        detail:
          "At 55.4%, it is the company's main structural advantage and should be defended.",
      },
      {
        title: "Renewal and expansion",
        detail:
          "Subscription businesses live or die on whether existing customers spend more each year.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Planet Labs has built a differentiated data asset, the best gross margin in this peer group and a balance sheet with $640.1M of net cash. It has not yet converted that into operating profit: the trailing operating margin is -27.2%.",
      "The educational point is that three multiples can disagree because they measure different things. Sales are stable, earnings are volatile and free cash flow has just crossed zero. Reading all three prevents a single number from doing too much work.",
      "What is not known is whether the FY2026 cash improvement repeats, how much of growth is new customers versus expansion, and what replacing the constellation costs over a full cycle.",
    ],
    questions: [
      "How much of the $57.6M FY2026 free cash flow came from working capital?",
      "What is the annual cost of keeping the constellation at its promised coverage?",
      "How concentrated is revenue among the largest government customers?",
      "Does the 58.1% latest-quarter growth repeat in the following quarter?",
    ],
  },
};
