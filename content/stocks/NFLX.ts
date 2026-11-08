import type { StockStory } from "./types";

export const NFLX: StockStory = {
  ticker: "NFLX",
  kicker: "Media · Streaming subscriptions",
  title: "Netflix has finished buying growth and started keeping the cash",
  dek: "Almost $50B of subscription revenue now converts into a 31% operating margin. The open question is how much more the library can earn before content costs catch up.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $49.7B on a trailing basis, up 14.7% year over year.",
    "Operating margin is 31.3%, and free cash flow reached $11.4B, or 22.9% of revenue.",
    "Content is the largest cost, so margin depends on spending less per hour watched, not only on raising price.",
    "Net debt of $6.9B is small next to $11.4B of annual free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065280&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Netflix sells access, not ownership. A household pays a monthly fee and receives a catalogue of series, films and, increasingly, live events. The company pays to make and license that catalogue and keeps what is left. With 9,400 employees and $49.7B of trailing revenue, it is a media company built like a software company: one product, a price list per country, and a cost base that does not rise one-for-one with each new member.",
      "Trailing revenue grew 14.7%, and the September quarter produced $12.87B of revenue at a 34.6% operating margin. The shares closed at $63.41, close to the bottom of a 52-week range of $61.39 to $116.73, which values the company at $260.4B, or 17.6x trailing earnings.",
      "That combination is the puzzle worth understanding. Revenue and margin have grown together, yet the shares are 42.2% lower than a year ago. Nothing in the trailing statements explains the gap, so the market is marking down the length of the growth runway rather than the last quarter. Hold both facts: the machine works today, and the price now assumes less of the future.",
    ],
    quote:
      "A streaming service earns money on the difference between what a household pays each month and what it costs to keep that household watching.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a membership that unlocks streaming on phones, televisions and browsers. Netflix sells it in three broad forms: an advertising-supported tier, an ad-free tier, and higher-priced variants that add members or resolution. The company also licenses some titles to other outlets and has moved into live programming and games, both of which exist to give people a reason to open the app more often.",
      "The reporting does not split revenue by segment, so there is no reliable figure for advertising versus subscription. That matters: advertising behaves like a media business, sold in advance against audience, while subscriptions behave like a utility bill. Until the split is disclosed, the consolidated margin blends two businesses with different cycles.",
    ],
    bullets: [
      {
        title: "Memberships",
        detail:
          "Recurring monthly fees, priced separately in each market. The base is the annuity that pays for content.",
      },
      {
        title: "Advertising tier",
        detail:
          "A lower subscription price in exchange for ad breaks. It only adds profit if ad revenue per member exceeds the discount.",
      },
      {
        title: "Content",
        detail:
          "Originals, licensed titles, live events and games. Spending is decided years before the revenue it is meant to attract.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Content sits in cost of revenue, which is why the gross margin is 50.7% rather than the 80% a pure software company would report. Marketing, technology and staff costs take the rest down to a 31.3% operating margin and a 29.7% net margin.",
      "The leverage mechanism is unusual. A title costs roughly the same whether ten million or a hundred million households watch it, so the average cost per viewer falls as the member base grows. Raising price in a fixed-cost base drops almost entirely to operating profit. The reverse is also true: content that neither attracts nor retains viewers hits margin in the quarter it is amortised.",
      "Plan mix complicates the arithmetic. The advertising tier trades subscription revenue for ad revenue, and the cheaper plans that once looked like a land grab now have to prove they earn more per member than the plans they replaced.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $29.70B in FY2021 to $45.18B in FY2025. The latest quarter grew 11.8%, slower than the trailing rate, which is what a maturing member base looks like. The easy growth from adding broadband households is largely done in the mature markets.",
      "Third-party estimates put the current fiscal year at $51.12B and the next at $56.60B, roughly 13% and 11% growth. Those forecasts assume price increases, a growing advertising contribution and further monetisation of shared accounts rather than a return to the subscriber growth of the pandemic years.",
      "The realistic drivers are price, advertising and content that travels across borders. The brake is churn: households that accept one increase may cancel at the second, and the ad tier only helps if advertisers pay enough to cover the discount it gives away.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income rose from $6.19B in FY2021 to $13.33B in FY2025 while revenue grew 52%. That took the operating margin from 20.8% to 29.5%, and the trailing figure is now 31.3%. Incremental revenue has been arriving at a very high margin, which is the signature of a fixed content base spread over more subscribers.",
      "The quarterly record shows how much timing matters. Operating margin moved from 24.5% in the December 2025 quarter to 32.3%, 33.4% and 34.6% in the following three quarters as the release slate and content amortisation shifted. That is schedule noise, not a change in demand.",
      "Return on equity is 50.4% and return on invested capital 34.0%, both high because the business needs little physical capital. Diluted EPS was $3.46 on a trailing basis.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow went from -$132.0M in FY2021 to $9.46B in FY2025 and $11.38B on a trailing basis, a 22.9% margin. The swing is the story of the last five years: as the library matured, cash content spending grew more slowly than revenue, and the gap between accounting profit and cash narrowed.",
      "Net debt is $6.91B, or 0.4x EBITDA. There are no networks, no spectrum and few stores, so almost all of the cash generated is discretionary. The real commitment is the content slate, which is contracted years ahead even though it does not appear as debt.",
      "That is the right way to read the balance sheet. A company with modest borrowings can still be constrained if its content obligations are large, and free cash flow is the number that shows whether the slate is being funded from operations or from the future.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $63.41 the shares trade at 17.6x trailing earnings, 16.8x EV/EBITDA, 5.4x sales and 22.9x free cash flow, for a 4.4% free-cash-flow yield. Those multiples assume mid-teens revenue growth continues and the operating margin stays above 30%.",
      "The peer table puts that in context. Meta trades at 14.9x EV/EBITDA on 27.5% growth, Alphabet at 18.6x, Disney at 10.3x and Comcast at 5.0x. Netflix sits between the advertising platforms and the legacy media companies, which is roughly where its economics sit too.",
      "A 17.6x earnings multiple is not demanding for 14.7% growth. The sensitivity is on the growth side: if revenue growth halves while the multiple holds, the shares stop looking cheap without any change in the reported profit. This report describes the business and does not attach a target price to the shares.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 43 analysts with a mean target of $84.76 and a range of $57.00 to $126.00. The low end sits below the current share price while the high end is roughly double it, so this is genuine disagreement rather than a clustered view.",
      "Estimates call for $13.45B of revenue next quarter and $51.12B for the current fiscal year, with EPS of $3.58. The following year is put at $56.60B and $3.77. Implied EPS growth is slower than revenue growth, which means the forecasts embed some margin or tax pressure.",
      "These are third-party numbers and they change. The useful part is the shape: analysts expect double-digit revenue growth to continue but do not expect profit to compound at the same rate.",
    ],
  },
  risks: {
    intro:
      "Netflix carries little debt and generates cash, so the risks are about the content and pricing engine rather than solvency. Each one shows up in a different line of the accounts.",
    items: [
      {
        title: "Content cost inflation",
        severity: "High",
        detail:
          "Talent, sports rights and production costs rise faster than inflation. If content spend grows faster than revenue, the operating margin that took five years to build erodes.",
        watch:
          "Content amortisation as a share of revenue, and cash spending on content versus the amortisation charge.",
      },
      {
        title: "Mature-market saturation",
        severity: "High",
        detail:
          "Most broadband households in the largest markets already subscribe. Growth then depends on price rises, which raise churn.",
        watch:
          "Revenue growth against the size of any price increase, and commentary on member retention.",
      },
      {
        title: "Advertising execution",
        severity: "Medium",
        detail:
          "The ad tier requires sales infrastructure, measurement and inventory that a subscription company did not previously need.",
        watch:
          "Ad-tier revenue per member and whether ad pricing holds when inventory expands.",
      },
      {
        title: "Competition for attention",
        severity: "Medium",
        detail:
          "Streaming rivals, short video and games all compete for the same evening. Switching costs for a viewer are close to zero.",
        watch:
          "Engagement disclosures and the number of titles that reach a wide audience.",
      },
      {
        title: "Expectations",
        severity: "Medium",
        detail:
          "The shares have fallen 42.2% in a year while the business grew, which shows how quickly the market can reprice a long growth runway.",
        watch:
          "Forward revenue estimates and the multiple applied to them.",
      },
    ],
    watchlist: [
      {
        title: "Content spend",
        detail:
          "Compare the cash cost of the slate with the amortisation charged to the income statement.",
      },
      {
        title: "Membership and pricing",
        detail:
          "Revenue growth is the product of members and price; the two move in opposite directions after an increase.",
      },
      {
        title: "Advertising",
        detail:
          "The ad tier is the main new revenue line, so its contribution per member is the number that matters.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Netflix is a subscription business with a 31.3% operating margin, $11.4B of free cash flow and almost no leverage. The financial statements describe a company that has moved from spending to earn growth to earning cash from the base it built.",
      "What is not known is how much pricing power remains. Revenue growth of 14.7% is strong, but it now comes from price and advertising more than from new households, and those levers are easier to exhaust.",
      "The educational point is that content businesses have a fixed cost that behaves like capital. Two companies can report the same revenue and very different free cash flow depending on how much they spend on the slate and when the cash leaves.",
    ],
    questions: [
      "How much of the recent revenue growth came from price rather than new members?",
      "What share of revenue does advertising contribute, and at what margin?",
      "Is content amortisation growing faster or slower than revenue?",
      "What would a 5% decline in members do to the operating margin?",
    ],
  },
};
