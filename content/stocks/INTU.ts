import type { StockStory } from "./types";

export const INTU: StockStory = {
  ticker: "INTU",
  kicker: "Technology · Small-business and consumer finance software",
  title: "Intuit's year is decided between January and April",
  dek: "Tax season produces one quarter with a 47% operating margin and three that look ordinary. Only the annual numbers are a fair read.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $21.45B on a trailing basis, up 13.9%, and the latest quarter grew 13.7%.",
    "The fiscal third quarter alone produced $8.56B of revenue at a 47.0% operating margin.",
    "Free cash flow was $8.66B, a 40.4% margin, with $618.0M of net cash.",
    "At 20.5x earnings and 10.8x free cash flow, the shares carry the lowest multiples in this batch.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/896878/000089687826000037/intu-20260731.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000896878&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Intuit sells software to small businesses and to consumers filing their own taxes. QuickBooks is the accounting system for a large share of small companies in the United States; TurboTax is the consumer tax product; Credit Karma is a consumer finance marketplace; and a marketing platform serves small businesses that want to reach customers.",
      "The annual figures are strong: $21.45B of revenue, a 27.4% operating margin and $8.66B of free cash flow, with revenue up 13.9%. Those figures hide the shape of the year. The fiscal third quarter, which covers the US tax filing season, produced $8.56B of revenue at a 47.0% operating margin. The other three quarters together produced less revenue at a fraction of the margin.",
      "Intuit is worth $93.41B at $341.50, inside a 52-week range of $252.84 to $682.27. Trailing P/E is 20.5x and P/FCF is 10.8x. The shares are down 47.0% over the year and 42.2% over five years, while revenue rose from $12.73B in FY2022 to $21.45B.",
    ],
    quote:
      "A business that earns most of its money in twelve weeks is valued on what those twelve weeks say about the next ten years.",
  },
  whatItDoes: {
    paragraphs: [
      "The small business segment sells accounting, payroll, payments and marketing tools, mostly on subscription. The consumer segment sells tax preparation, either as software the customer uses or as a service where a professional does the work. Credit Karma earns money from financial-product offers rather than from consumers directly.",
      "Customers are small businesses, self-employed people, consumers and accounting professionals. The segments reinforce each other: a small business that uses QuickBooks for its books is a natural buyer of payroll and payments, and its owner is a natural buyer of tax software.",
      "The company employs 10,600 people. Most of the cost base is product development and marketing, and the marketing spend is concentrated in the months before tax season, which is one reason the quarterly margins are so uneven.",
    ],
    bullets: [
      {
        title: "Small business",
        detail:
          "Accounting, payroll, payments and marketing. Subscription revenue that renews monthly or annually.",
      },
      {
        title: "Consumer tax",
        detail:
          "Software and assisted tax preparation. Revenue is recognized almost entirely in one fiscal quarter.",
      },
      {
        title: "Credit Karma",
        detail:
          "A consumer finance marketplace earning fees from lenders and financial-product providers.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The tax business has a peculiar economics. The cost of building the software is fixed and largely incurred before the season, and the cost of serving one more return is small. Revenue arrives in a narrow window, so the fixed cost base is absorbed almost entirely in one quarter. That is how a company earns a 47.0% operating margin in Q3 and 10.9% in Q4 on the same products.",
      "The small business side behaves more like conventional software. Gross margin of 64.3% is the blend of software, payments processing and services across both segments. Payments revenue carries a much lower margin than a software license because a share goes to the card networks and banks.",
      "Free cash flow of 40.4% of revenue is far above the 27.4% operating margin. Two things explain it: deferred revenue collected before the tax season, and non-cash charges. In FY2026, free cash flow of $8.66B was nearly twice net income of $4.57B, which is the cash-collection effect at its clearest.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $12.73B in FY2022 to $21.45B in FY2026, an increase of 68% in four years. Growth has been between 13% and 16% in each of the last three years, which for a company of this size in mature markets is a good result.",
      "Third-party estimates call for $23.41B this fiscal year and $25.53B next, implying about 9% growth in each. That is a step down from the recent rate, and it is the number to reconcile with the company's own commentary.",
      "The drivers are price increases, more services sold per small business, and the shift of tax preparation from assisted to software. The brake is the size of the tax market: the number of returns filed does not grow much, so growth has to come from price and share.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin rose from 20.2% in FY2022 to 27.4% in FY2026, a steady expansion as revenue outgrew the cost base. Net margin is 21.3%, return on equity is 22.1% and return on invested capital is 23.2%.",
      "The quarterly table is the more useful document. Q3 FY2026 produced $8.56B at 47.0%, Q4 produced $4.35B at 10.9%, Q2 produced $4.65B at 18.4% and Q1 produced $3.88B at 13.7%. A reader who looked only at Q4 would conclude this is a low-margin business. A reader who looked only at Q3 would conclude the opposite.",
      "Diluted EPS was $16.57 on a trailing basis, with $11.09 in the single tax quarter. Any quarter-by-quarter comparison of earnings per share for this company is close to meaningless without adjusting for the season.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $8.66B, a 40.4% margin, and the annual record is consistently strong: $3.73B, $5.54B, $4.69B, $6.12B and $8.66B. The dip in FY2024 and the recovery since show how much working capital moves around the tax season.",
      "Net cash is $618.0M, which is a small buffer relative to the size of the business. The company has used its cash for buybacks and acquisitions rather than accumulating a balance sheet, and it does not pay a dividend.",
      "The cash flow supports continued investment in the tax and small business products. It also means the company can fund acquisitions without leverage, which matters because the growth rate depends partly on buying adjacent products.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $341.50, Intuit trades at 20.5x trailing earnings, 15.3x EV/EBITDA, 4.3x sales and 10.8x free cash flow, with a 9.3% free-cash-flow yield. Those are the lowest multiples in this batch on every measure except the earnings multiple, where Oracle is lower.",
      "A 4.3x sales multiple and a 9.3% free-cash-flow yield are not the profile of a growth software company. They are the profile of a mature franchise that the market expects to grow slowly. The revenue estimates, at about 9% a year, are consistent with that view.",
      "The gap between the price and the historical multiple is the real question. Either the market is wrong about the durability of the tax franchise, or it is pricing a specific threat to it. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-one analysts cover Intuit. The mean target is $407.76 and the range is $290.00 to $732.00, from 15% below the last close to more than double it.",
      "Twelve neutral ratings and two negative ones out of 31 is the most divided coverage in this batch. A spread that wide is unusual for a business whose revenue is as visible as a subscription base, which suggests the disagreement is about the multiple rather than the earnings.",
      "The revenue estimates are $4.31B next quarter, $23.41B this fiscal year and $25.53B next, with EPS of $2.64, $23.81 and $26.94. That implies about 9% growth in each year, a clear deceleration from the 13.9% trailing rate.",
    ],
  },
  risks: {
    intro:
      "Intuit's risks are about the durability of a franchise that depends on a regulated, seasonal activity and on customers choosing to pay for help.",
    items: [
      {
        title: "Tax-season concentration",
        severity: "High",
        detail:
          "Most of the year's profit arrives in one quarter. A weak season cannot be recovered later in the year.",
        watch:
          "Third-quarter revenue and the number of returns filed through the software products.",
      },
      {
        title: "Competition in tax and accounting",
        severity: "High",
        detail:
          "Free and low-cost filing alternatives, including ones built by tax authorities, and new AI tools can take share at the low end of the market.",
        watch:
          "Consumer segment revenue and the mix between software and assisted preparation.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Tax filing rules and government-provided filing services are set by policy, not by the market.",
        watch:
          "Changes to filing requirements and any expansion of public filing systems.",
      },
      {
        title: "Small-business churn",
        severity: "Medium",
        detail:
          "Small businesses fail at a high rate, so the base requires constant replacement before it can grow.",
        watch:
          "Subscriber counts and revenue per small business customer.",
      },
      {
        title: "Credit Karma cyclicality",
        severity: "Low",
        detail:
          "Marketplace revenue depends on lending and credit-card volumes, which slow when consumers borrow less.",
        watch:
          "Segment revenue and the volume of financial-product offers.",
      },
    ],
    watchlist: [
      {
        title: "Third-quarter revenue",
        detail:
          "One quarter carries the year. Its growth rate is the single most important number in the report.",
      },
      {
        title: "Consumer segment mix",
        detail:
          "Whether revenue is shifting toward the lower-priced software product or the higher-priced assisted service.",
      },
      {
        title: "Free cash flow",
        detail:
          "The 40.4% margin is what supports a 10.8x multiple. Watch whether it holds as growth slows.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Intuit owns two franchises that most small businesses and many consumers interact with annually: the accounting system and the tax return. Revenue of $21.45B is growing 13.9%, operating margin is 27.4% and free cash flow is 40.4% of revenue.",
      "The market has repriced the shares sharply. A 47.0% decline over a year and a 42.2% decline over five years, against 68% revenue growth, means the multiple has compressed far more than the business has slowed. At 10.8x free cash flow the price now assumes modest growth.",
      "The educational point is that seasonality distorts every quarterly comparison. For a business like this, the annual table and the cash-flow statement are the honest documents, and the quarterly margins are a description of the calendar rather than of the business.",
    ],
    questions: [
      "How much of the growth comes from price rather than more customers?",
      "What share of consumer tax revenue is software versus assisted preparation?",
      "Why has the multiple compressed while revenue kept growing?",
      "How exposed is the tax franchise to free public filing alternatives?",
    ],
  },
};
