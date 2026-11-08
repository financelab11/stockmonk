import type { StockStory } from "./types";

export const DIS: StockStory = {
  ticker: "DIS",
  kicker: "Media · Studios, parks and streaming",
  title: "Disney turns one library of characters into tickets, merchandise and subscriptions",
  dek: "Four businesses share the same stories. Parks and products supply the profit and the capital spending, while streaming has only recently started paying its way.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $98.9B, up 4.6%, with an 18.4% operating margin.",
    "Operating income rose from $7.77B in FY2021 to $17.55B in FY2025 on 40% more revenue.",
    "Free cash flow is $8.3B, only 8.4% of revenue, because parks and content absorb capital.",
    "Net debt is $41.7B, or 1.8x EBITDA, and the shares pay a 1.1% dividend yield.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1744489/000174448925000155/dis-20250927.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001744489&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Disney monetises the same characters several times. A film runs in cinemas, then on the streaming service, then in a theme park attraction, on a cruise ship and on a t-shirt. That recycling is the business model, and it is why the company reports four segments rather than one: media networks, parks and resorts, studio entertainment, and consumer products with interactive media.",
      "Trailing revenue was $98.86B, up 4.6%. The June quarter produced $25.25B at a 22.0% operating margin and $1.51 of diluted EPS. The shares closed at $116.75, high in a 52-week range of $92.19 to $120.80, giving a market capitalisation of $202.7B.",
      "Whether parks and experiences can keep growing profit while streaming margins mature and linear television declines is the central issue. The price reflects some optimism: 23.6x trailing earnings but only 10.3x EV/EBITDA, a gap that exists because park depreciation is heavy and sits between the two measures.",
    ],
    quote:
      "A studio sells a story once. A park sells it again every day, to a new family, at full price.",
  },
  whatItDoes: {
    paragraphs: [
      "Media networks combine the linear channels, which earn affiliate fees from distributors and advertising from advertisers, with the streaming service, which earns subscription and advertising revenue directly from households. Parks and resorts sell admission, food, merchandise and hotel nights, and the cruise line sells berths. Studio entertainment produces and distributes film and television. Consumer products licenses characters to manufacturers and retailers.",
      "The segments are not independent. A hit film raises park attendance, fills cruise ships and sells toys, so content success is monetised in several places at once. That is also the weakness: a weak slate shows up in three segments, and none of the pieces is large enough to carry the group alone. The company employs 182,700 people and operates worldwide, though the dataset does not provide a geographic split.",
    ],
    bullets: [
      {
        title: "Media networks",
        detail:
          "Linear channels plus the streaming service. Subscription fees, advertising and carriage deals.",
      },
      {
        title: "Parks and resorts",
        detail:
          "Admissions, hotels, food and merchandise. Capital-heavy, with high incremental margins once a park is built.",
      },
      {
        title: "Studio and products",
        detail:
          "Film and television production, plus licensing of characters to consumer goods.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There are three revenue types under one roof. Subscriptions arrive as affiliate fees and streaming charges, advertising is sold against audiences on television and on the ad tier of streaming, and parks take money at the gate and inside. Licensing characters is the highest-margin activity; running a park is the most capital-intensive; producing content is the most hit-driven.",
      "The cost structure follows. Content is amortised over its expected life and dominates the media segments. Parks carry labour, maintenance and depreciation on land and rides. Consolidated gross margin is 27.3%, operating margin 18.4% and net margin 8.7%; the fall from operating to net margin reflects interest on $41.7B of net debt and the tax charge.",
      "Operating leverage is strong once a park is full and weak when it is not. The marginal cost of one more visitor is small, but the fixed cost of the park is there whether anyone comes. That is why a modest change in attendance moves segment profit much more than it moves revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $67.42B in FY2021, a pandemic-depressed base, to $94.42B in FY2025. The latest quarter grew 6.8%. Operating income more than doubled over the same period, from $7.77B to $17.55B, so growth came with margin rather than from it.",
      "The attributed consensus expects $101.51B this fiscal year and $106.02B next, with EPS of $6.93 and $7.50. That is roughly 7% then 4% revenue growth, which assumes parks hold up and streaming keeps adding profit but not at the pace of the recovery years.",
      "The drivers are park investment and pricing, new cruise capacity, streaming price increases and advertising, and the film slate. The brake is the consumer: travel and leisure spending is discretionary, and a park ticket is one of the easier purchases to postpone.",
    ],
  },
  performance: {
    paragraphs: [
      "The margin record shows the recovery. Operating margin was 11.5% in FY2021, 14.5% in FY2023 and 18.6% in FY2025. The trailing figure is 18.4% and the latest quarter reached 22.0%. Quarterly margins range from 15.5% to 22.0%, which reflects both the summer park season and the timing of film releases.",
      "Return on equity is 7.5% and return on invested capital 9.2%. Those are modest numbers for a company with strong brands, and they are the honest measure of a business that ties up capital in ships, rides and film libraries. A park that earns a good return still consumes a great deal of cash before it opens.",
      "Diluted EPS was $4.85 on a trailing basis. Net income rose from $2.00B in FY2021 to $12.40B in FY2025, a much larger move than operating income over the same period, so the bottom line also reflects tax and interest swings. The operating line is the cleaner read of the business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow went from $1.99B in FY2021 to $10.08B in FY2025, then $8.29B on a trailing basis, an 8.4% margin. The gap between $17.55B of operating income and $8.29B of free cash flow is capital expenditure on parks, ships and technology, plus content spending that runs through the cash flow statement before it runs through the income statement.",
      "Net debt is $41.68B, or 1.8x EBITDA. That is manageable, but it is not small, and it competes with the capital programme. A new cruise ship or a park expansion is a multi-year commitment that has to be funded whether or not the economy cooperates.",
      "The dividend yield is 1.1% and the free-cash-flow yield is 4.1%. Both are modest, which is consistent with a company that reinvests most of its cash in attractions and content rather than returning it.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $116.75 the shares trade at 23.6x trailing earnings, 10.3x EV/EBITDA, 2.5x sales and 24.4x free cash flow. The earnings multiple assumes margins hold and streaming continues to improve; the EBITDA multiple is kinder because it adds back the depreciation on all those parks.",
      "The peer table shows why the comparison is awkward. Comcast trades at 5.0x EV/EBITDA with a declining cable business, Netflix at 16.8x with a 31.3% operating margin, and the advertising platforms at 14.9x to 18.6x. Disney at 10.3x sits between the cable company and the streamer, which is where a hybrid belongs.",
      "Within the covered universe the shares rank in the 79th percentile for cheapness on EV/EBITDA. A low multiple on a capital-heavy business can be deserved: EBITDA flatters a company that must keep spending to maintain its assets. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-two analysts contribute to the attributed consensus, with a mean target of $126.83 and a range of $86.00 to $144.00. The spread is wide relative to the share price, which reflects genuine disagreement about whether parks or streaming deserves to set the valuation.",
      "Estimates call for $25.15B of revenue next quarter and $101.51B for the current fiscal year, with EPS of $6.93. The following year is put at $106.02B and $7.50. Both years assume steady single-digit revenue growth and a modestly better margin.",
      "For a company with four segments, a single mean target hides the important question: which segment the analyst is really underwriting. A parks-led view and a streaming-led view can produce the same average and very different risk.",
    ],
  },
  risks: {
    intro:
      "Disney's risks sit in the consumer economy and in the cost of its own assets. The balance sheet is adequate, so the pressure comes through the income statement first.",
    items: [
      {
        title: "Park attendance and pricing",
        severity: "High",
        detail:
          "Travel and leisure spending is discretionary. Parks carry fixed costs, so a fall in attendance hits profit harder than revenue.",
        watch:
          "Attendance, per-capita spending and hotel occupancy in the parks segment.",
      },
      {
        title: "Decline of linear television",
        severity: "High",
        detail:
          "Cable subscribers keep falling, taking affiliate fees and advertising with them. Streaming has to replace that profit, not just the revenue.",
        watch:
          "Affiliate fee revenue, channel subscribers and streaming segment profit.",
      },
      {
        title: "Content spending",
        severity: "Medium",
        detail:
          "Film and series budgets are committed before the audience is known. A weak slate leaves costs without a corresponding return.",
        watch:
          "Content spend versus studio and streaming revenue, and the number of titles that travel across segments.",
      },
      {
        title: "Streaming competition",
        severity: "Medium",
        detail:
          "Price increases are the easiest way to improve streaming margins, but they also encourage churn in a market with several close substitutes.",
        watch:
          "Streaming subscribers, churn and advertising revenue.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Cruise ships and park expansions consume years of cash before they earn. A weak consumer arriving at the same time as a big project is the difficult combination.",
        watch:
          "Capital expenditure, net debt to EBITDA and returns on new attractions.",
      },
    ],
    watchlist: [
      {
        title: "Park spending per guest",
        detail:
          "Attendance gets the headlines, but the profit comes from what each visitor spends once inside.",
      },
      {
        title: "Streaming margin",
        detail:
          "The segment has to earn enough to replace the profit that linear television is losing.",
      },
      {
        title: "Content spend",
        detail:
          "Watch whether spending on film and series is producing hits that feed the other segments.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Disney is a portfolio of assets built on a single library of characters. It earned $17.55B of operating income in FY2025 on $94.42B of revenue, and it generates $8.3B of free cash flow after spending heavily on parks, ships and content.",
      "The unresolved question is the handover from linear television to streaming. One is shrinking with high margins; the other is growing with thinner ones. Until streaming profit exceeds the linear profit it replaces, the group margin has a ceiling.",
      "The balance sheet is not the problem at 1.8x EBITDA. The problem is that the capital programme and the content slate are both discretionary in theory and committed in practice, which leaves little room to react quickly if the consumer retrenches.",
    ],
    questions: [
      "How much of parks profit growth came from price rather than attendance?",
      "Does streaming profit now exceed the profit lost from linear channels?",
      "What is the return on the capital going into new cruise ships and park expansions?",
      "How much of free cash flow is committed to content before any dividend is paid?",
    ],
  },
};
