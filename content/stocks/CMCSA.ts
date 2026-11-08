import type { StockStory } from "./types";

export const CMCSA: StockStory = {
  ticker: "CMCSA",
  kicker: "Cable · Broadband, media and parks",
  title: "Comcast is priced for decline and still produces a great deal of cash",
  dek: "Revenue is flat at $123B, free cash flow is $19.7B and the shares trade at 5.0x EV/EBITDA. Broadband and parks have to offset a shrinking video business.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $123.0B, down 0.2%, the first flat year in the five-year record.",
    "Free cash flow $19.7B, 16.0% of revenue, against $79.8B of net debt.",
    "The shares trade at 7.7x earnings and 5.0x EV/EBITDA, the cheapest multiple in the media peer group.",
    "Consensus expects revenue to fall again this year and next, to $119.8B and $116.4B.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1166691/000162828026004994/cmcsa-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001166691&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Comcast owns both the pipes and the programming. Its cable business sells broadband, video, voice and mobile service to US households and businesses. NBCUniversal supplies the broadcast network, cable channels, a film studio and theme parks, and the streaming service sells subscriptions and advertising. The pieces sit together because the cable bill was once the distribution channel for the programming.",
      "Trailing revenue was $123.00B, down 0.2%, and the September quarter fell 6.1% to $29.30B, though its operating margin improved to 18.2%. Diluted EPS was $3.17 on a trailing basis. At $24.39, inside a 52-week range of $20.48 to $32.86, the company is worth $86.6B.",
      "How fast the distribution base erodes, and whether parks and streaming can replace the lost profit, is the central issue. The price already assumes a lot of erosion: 7.7x earnings, 5.0x EV/EBITDA, 4.4x free cash flow and a 22.7% free-cash-flow yield are the multiples of a business the market expects to shrink.",
    ],
    quote:
      "A cable company is a toll road with a programming bill attached. The tolls recur, the bill is renegotiated every few years, and the traffic can leave.",
  },
  whatItDoes: {
    paragraphs: [
      "Connectivity is the largest profit pool: broadband, video, voice and mobile sold to homes and businesses over a network the company owns. Media includes the NBC broadcast network, the cable channels, the film studio and the streaming service. Parks operates theme parks in the United States and abroad.",
      "The pieces are more connected than they look. Cable distribution historically gave the media arm leverage when negotiating carriage fees, and the parks sell advertising for films. That integration is also a trap: when the distribution base shrinks, the programming arm loses both a customer and a bargaining chip. The company employs 168,000 people, and most of its revenue is earned in the United States.",
    ],
    bullets: [
      {
        title: "Connectivity",
        detail:
          "Broadband, video, mobile and voice. Recurring revenue with a fixed network underneath.",
      },
      {
        title: "Media",
        detail:
          "Broadcast and cable networks, the film studio and the streaming service. Advertising plus subscriptions.",
      },
      {
        title: "Parks",
        detail:
          "Theme parks in the United States and internationally. Attendance, tickets and in-park spending.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Broadband is the good business: a subscription with a high incremental margin because the network cost is already sunk. Video is the difficult one, because the company resells programming it does not own while the cost of that programming keeps rising. Advertising is cyclical, and parks are capital-heavy but earn high margins at the gate.",
      "The consolidated gross margin of 69.8% overstates how profitable the group is, because the largest cost lines, including programming, marketing and corporate overhead, are reported below it. The operating margin of 14.7% is the honest measure of what is left after everything is paid.",
      "Operating leverage runs in both directions here. Revenue fell 0.2% while operating income dropped from $23.30B in FY2024 to $20.67B in FY2025, a fall of more than a tenth on essentially flat sales. Fixed costs in cable and media do not shrink with the subscriber base.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $116.39B in FY2021 to $123.71B in FY2025, less than 2% a year, and the latest quarter was 6.1% lower than a year earlier. Operating income did not follow a straight line: it fell to $14.04B in FY2022, recovered to $23.31B in FY2023 and then drifted down to $20.67B.",
      "The attributed consensus expects $119.78B this fiscal year and $116.43B next, with EPS of $3.50 and $3.52. Revenue is forecast to fall while earnings hold flat, which implies cost cuts and share repurchases rather than organic growth.",
      "The available offsets are broadband pricing, mobile bundling, park investment and streaming advertising. None of them is large enough to counter a structural decline in video subscribers on its own, so the consolidated revenue line is likely to keep drifting.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 17.9% in FY2021, 11.6% in FY2022, 19.2% in FY2023, 18.8% in FY2024 and 16.7% in FY2025. The trailing figure is 14.7% and the latest quarter 18.2%. The swings are large for a subscription business, which says that one-off items and content costs move the result as much as the subscriber base does.",
      "The quarterly net income line is even lumpier: $11.12B in the June 2025 quarter against $2.17B in the December 2025 quarter. Those differences come from items below the operating line, so the net margin of 9.2% should not be read as a steady run rate.",
      "Return on equity is 12.2% and return on invested capital 8.3%. For a business with $79.8B of net debt and heavy network and park assets, 8.3% is close to the return required to justify the capital, which leaves little margin for error.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $19.97B in FY2021, dipped to $15.49B in FY2024, then reached $21.89B in FY2025 and $19.67B on a trailing basis, a 16.0% margin. Cash generation has been more stable than operating income, because depreciation on the network is large and non-cash.",
      "Net debt is $79.77B, or 2.4x EBITDA. At 4.4x free cash flow the equity is a leveraged claim on a flat cash flow: the debt is serviced first, and what remains funds the dividend, buybacks and network investment.",
      "The important check is whether free cash flow covers capital expenditure, interest and maturities without new borrowing. The trailing numbers say it does, but the cushion depends on the cash flow not falling much further.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $24.39 the shares trade at 7.7x earnings, 5.0x EV/EBITDA, 1.4x sales and 4.4x free cash flow, with a 22.7% free-cash-flow yield. A yield that high is not a free lunch; it is the market demanding compensation for decline and leverage.",
      "The peer table makes the discount obvious. Disney trades at 10.3x EV/EBITDA, T-Mobile at 7.5x, Netflix at 16.8x and Meta at 14.9x. Comcast is the cheapest of the group and also the only one with falling revenue.",
      "On the covered universe the shares rank in the 93rd percentile for cheapness on EV/EBITDA. That is a statement about the price relative to current cash flow, not about whether the cash flow will still be there in five years.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed consensus, with a mean target of $27.98 and a range of $17.00 to $42.00. The low end is well below the current price and the high end well above it, which is what a genuine debate about terminal decline looks like.",
      "Estimates call for $29.82B of revenue next quarter and $119.78B for the current fiscal year, with EPS of $3.50. The following year is put at $116.43B and $3.52. Falling revenue with flat earnings is the arithmetic of cost reduction.",
      "For a company like this, the mean target is less informative than the assumptions behind it. A target near the top of the range implies the cable base stabilises; one near the bottom implies the decline accelerates.",
    ],
  },
  risks: {
    intro:
      "Comcast's risks are structural rather than financial in origin, but they arrive through a leveraged balance sheet. The first two determine whether the cash flow is durable.",
    items: [
      {
        title: "Broadband competition",
        severity: "High",
        detail:
          "Fibre and fixed wireless operators are taking share in the one segment that carries the group. Broadband is the profit pool that funds everything else.",
        watch:
          "Broadband subscriber additions and revenue per user.",
      },
      {
        title: "Video and linear decline",
        severity: "High",
        detail:
          "Video subscribers keep leaving, and the channels lose affiliate fees and advertising as they go. Programming costs do not fall as fast.",
        watch:
          "Video subscribers, affiliate fee revenue and channel advertising.",
      },
      {
        title: "Programming costs",
        severity: "Medium",
        detail:
          "Content contracts reset every few years. A higher cost per subscriber compresses the margin on every customer who remains.",
        watch:
          "Programming expense per video subscriber and segment margins.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "$79.8B of net debt at 2.4x EBITDA makes the equity sensitive to refinancing costs and to any fall in cash flow.",
        watch:
          "Net debt to EBITDA, interest expense and the maturity schedule.",
      },
      {
        title: "Park cyclicality",
        severity: "Medium",
        detail:
          "Theme park attendance depends on travel budgets. A park is a fixed-cost asset with a discretionary admission price.",
        watch:
          "Attendance and per-capita spending at the parks.",
      },
    ],
    watchlist: [
      {
        title: "Broadband net additions",
        detail:
          "The single most important number: it decides whether the cash engine is stable.",
      },
      {
        title: "Free cash flow",
        detail:
          "Cash generation has held up better than operating income, and that is what services the debt.",
      },
      {
        title: "Debt reduction",
        detail:
          "Lower net debt would reduce the discount the market applies to the equity.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Comcast is a cable and media group with $123.0B of revenue, a 14.7% operating margin and $19.7B of free cash flow. It carries $79.8B of net debt and trades at 5.0x EV/EBITDA.",
      "The puzzle is not the current cash flow but its duration. A 22.7% free-cash-flow yield says the market expects the distribution business to shrink faster than management can replace the profit.",
      "The educational point is that a low multiple and a high yield can be a warning rather than an opportunity. When revenue is falling, the denominator of every multiple is the thing that needs checking first.",
    ],
    questions: [
      "Are broadband subscribers still growing, and at what revenue per user?",
      "How much of free cash flow comes from parks rather than connectivity?",
      "What does the debt maturity schedule look like over the next five years?",
      "Can streaming advertising replace the profit lost from linear channels?",
    ],
  },
};
