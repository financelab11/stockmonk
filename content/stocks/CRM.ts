import type { StockStory } from "./types";

export const CRM: StockStory = {
  ticker: "CRM",
  kicker: "Software · Enterprise applications",
  title: "Salesforce has learned to make money; now it has to grow again",
  dek: "Operating income went from $548.0M to $8.33B in four years while revenue grew 11.2%. The next leg depends on selling more products to the customers it already has, at a price those customers will accept.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $43.94B, up 11.2%, with operating margin of 19.9%.",
    "Free cash flow reached $15.15B, a 34.5% margin, against $4.87B of net debt.",
    "Operating income rose from $548.0M in FY2022 to $8.33B in FY2026.",
    "At $213.65 the shares trade at 20.4x earnings and 13.0x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001108524&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Salesforce sells the software a company uses to manage its customers: the sales pipeline, the service desk, marketing campaigns, commerce and the data that ties them together. It also owns Slack, Tableau and MuleSoft, which extend the platform into collaboration, analytics and integration. The common thread is that all of it is sold to enterprises on subscription contracts.",
      "For most of its life the company grew faster than it earned. That changed. Revenue rose from $26.49B in FY2022 to $41.52B in FY2026, while operating income went from $548.0M to $8.33B. The margin expansion is the story of the last three years, and it came from cost discipline rather than a change in the product.",
      "At $213.65 the market capitalisation is $197.2B, or 20.4x trailing earnings, 16.0x EV/EBITDA and 13.0x free cash flow. The stock is 55% of the way up a 52-week range of $146.32 to $269.11. It has fallen 9.9% over the past year and 29.7% over five, which is a long de-rating for a company that keeps adding revenue.",
    ],
    quote:
      "The question is no longer whether Salesforce can be profitable. It is whether a per-seat pricing model can grow when its customers are trying to reduce the number of seats.",
  },
  whatItDoes: {
    paragraphs: [
      "The core products are organised by function. Sales Cloud tracks leads, opportunities and forecasts. Service Cloud handles customer support tickets and field service. Marketing Cloud runs campaigns and customer journeys. Commerce Cloud runs online stores. Each is sold separately and priced per user per month, so a customer's bill rises with headcount and with the number of modules it adopts.",
      "Around that core sit the acquired pieces. Slack provides messaging and collaboration, Tableau provides analytics, and MuleSoft connects the platform to a customer's other systems. Data Cloud is the layer that unifies customer records so the AI features have something to work with. These products are sold into the same accounts, which is why cross-selling is the central growth assumption.",
      "Customers are large enterprises and, increasingly, mid-sized companies. A single contract often covers thousands of seats and runs for one to three years, with renewal negotiations that can move revenue by more than a new logo does. The company employed 56,606 people, a large sales and support organisation relative to the revenue base.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is subscription fees recognised over the contract term. Gross margin is 77.3%, lower than a pure software vendor's because Salesforce pays for hosting, support and the services that help customers implement the platform. That gross margin is the pool from which sales and marketing, research and administration are funded, leaving 19.9% at the operating line.",
      "The unit economics depend on the cost of acquiring a customer relative to the subscription it generates. Enterprise software sales are expensive: a large deal may take a year to close and require solution engineers, legal review and a proof of concept. Once the customer is live, the renewal is much cheaper to win, which is why the installed base is the most valuable asset.",
      "Cash collection runs ahead of revenue recognition because many customers pay annually in advance. That is why free cash flow of $15.15B is well above net income. The gap is not a problem, but it does mean that cash flow growth can look better than the underlying business in a year when bookings are strong and worse when they slow.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 15.9% a year over the five fiscal years in the record, but the rate has slowed to 11.2% on a trailing basis and 10.8% in the latest quarter. That is the natural path of a company with a $43.94B base: each point of growth is a larger absolute number than it used to be.",
      "The attributed consensus expects $46.30B this fiscal year and $50.78B next year, with EPS of $16.75 and $16.02. The revenue numbers imply growth continuing at roughly the current rate. The EPS numbers imply it falling, which is unusual and worth pausing on: either margins are expected to compress or the share count is expected to rise.",
      "The growth levers are cross-selling the newer clouds into the existing base, raising prices at renewal and adding AI features that carry a premium. The brake is seat-based pricing itself. If customers use AI to handle work that previously required people, the number of seats they need falls, and Salesforce has to replace seat revenue with consumption or platform revenue.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business that was rebuilt for profit. Operating income was $548.0M in FY2022, $1.03B in FY2023, $5.01B in FY2024, $7.21B in FY2025 and $8.33B in FY2026, on revenue that rose from $26.49B to $41.52B over the same years. The margin gain came from both scale and cost cuts.",
      "Quarterly operating margin has moved between 16.7% and 22.8% over the last six quarters: 19.8% in Q1 FY2026, 22.8%, 21.3%, 16.7%, then 21.1% in Q1 FY2027 and 20.5% in Q2 FY2027. The Q4 dip is seasonal, tied to the timing of sales commissions and annual events. The trend is flat rather than improving, which is what a mature software company looks like.",
      "The latest quarter's net income of $3.53B and EPS of $4.29 are far above the $2.11B and $2.42 of the quarter before. A jump of that size usually includes a non-operating gain or a tax item, and the brief does not specify which. A reader should separate the operating margin, which is stable, from the net income line, which is not.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $15.15B, a 34.5% margin, against net income that is lower because of share-based compensation and acquired intangible amortisation. The company generates more cash than it reports as profit, and it has used that cash for buybacks, dividends and acquisitions.",
      "Net debt is $4.87B, only 0.4x EBITDA, so the balance sheet is not a constraint. The company pays a dividend yielding 0.8%, a small commitment relative to cash flow. The larger capital allocation question is buybacks: at 13.0x free cash flow, repurchasing shares is a bet that the market is undervaluing the subscription base.",
      "Working capital is the swing factor. Deferred revenue rises when customers pay in advance and falls when billings slow. A reader tracking cash flow should look at the change in deferred revenue alongside the cash figure, because a year of strong collections can flatter free cash flow without a matching increase in the underlying business.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 20.4x trailing earnings, 16.0x EV/EBITDA, 4.6x sales and 13.0x free cash flow, with a 7.7% free-cash-flow yield. That is a mid-teens multiple for a company growing at 11%, which is neither obviously cheap nor obviously expensive.",
      "The peer table gives a reference point. Microsoft trades at 27.6x earnings with 17.9% growth and a 47.1% operating margin; Oracle trades at 18.6x with 21.6% growth and a 32.1% operating margin. Salesforce sits between them on multiple and below both on margin. The market is pricing it as a mature application vendor rather than a platform.",
      "The valuation question is what happens to the multiple if growth falls below 10%. At 13.0x free cash flow there is some protection, because the cash return is high. At 4.6x sales there is less, because a slower-growth software company typically trades at a lower revenue multiple.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fifty-three analysts contribute to the attributed consensus, with a mean target of $287.08 and a range of $165.00 to $475.00. The mean is above the last close; the low end is below it. That is a wide spread for a large, well-covered company, and it reflects disagreement about the durability of growth more than about the current quarter.",
      "The quarterly estimates are $11.46B of revenue and $3.45 of EPS, then $12.34B and $3.56. Note that the EPS figures are below the $4.29 just reported on a GAAP basis, which means the two are not measuring the same thing. The revenue estimates are the comparable number.",
      "For the full year the consensus is $46.30B and $16.75, then $50.78B and $16.02. The decline in EPS alongside revenue growth is the single most informative line in the consensus, and it deserves an explanation before it is treated as a forecast.",
    ],
  },
  risks: {
    intro:
      "Salesforce's risks are competitive and structural. The balance sheet is strong and the cash flow is real; the uncertainty is whether per-seat pricing survives a period in which customers are trying to buy fewer seats.",
    items: [
      {
        title: "Seat-based pricing under pressure",
        severity: "High",
        detail:
          "If AI tools reduce headcount in sales and service teams, the per-user model shrinks with it. The company has to replace seats with consumption or platform fees.",
        watch:
          "Revenue per customer and management commentary on pricing model changes.",
      },
      {
        title: "Competition from platform bundlers",
        severity: "High",
        detail:
          "Large cloud vendors can bundle customer software into existing enterprise agreements, which makes standalone purchase harder to justify.",
        watch:
          "Win rates in large deals and the growth rate of the core clouds.",
      },
      {
        title: "Integration of acquired products",
        severity: "Medium",
        detail:
          "Slack, Tableau and MuleSoft were bought at large premiums. If they grow slowly or are written down, the returns on those deals deteriorate.",
        watch:
          "Goodwill balances, segment disclosure and cross-sell metrics.",
      },
      {
        title: "Margin plateau",
        severity: "Medium",
        detail:
          "Operating margin has stayed in a narrow band for six quarters. Further expansion needs revenue growth, not more cost cuts.",
        watch:
          "Operating margin against revenue growth each quarter.",
      },
      {
        title: "AI spending without revenue",
        severity: "Low",
        detail:
          "Building and running AI features raises hosting costs before it raises prices. Gross margin of 77.3% is the line where that shows up.",
        watch:
          "Gross margin and the cost of revenue relative to subscription revenue.",
      },
    ],
    watchlist: [
      {
        title: "Current remaining performance obligation",
        detail:
          "Contracted revenue not yet recognised is the best forward indicator for a subscription business.",
      },
      {
        title: "Operating margin",
        detail:
          "20% is the level the company fought to reach. Holding it while growing is the test.",
      },
      {
        title: "Free cash flow conversion",
        detail:
          "Track free cash flow against operating income to see how much is collections timing.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Salesforce is a large, profitable subscription business with a strong balance sheet and a high free-cash-flow yield. The transformation from growth-at-all-costs to margin discipline is complete, and the financial statements show it clearly.",
      "What is not settled is the next phase. Revenue growth of 11.2% is respectable but decelerating, and the pricing model is built on seats in a market that is trying to use fewer of them. The consensus assumes revenue keeps growing and earnings per share do not, which is an unusual combination that a reader should interrogate.",
      "The stock is not priced for perfection. At 13.0x free cash flow, the market is already assuming slower growth. The question is whether it is assuming too much decline.",
    ],
    questions: [
      "Is revenue growth coming from new customers, cross-sell or price?",
      "How much of the installed base is on multi-year contracts with renewal pricing already fixed?",
      "Why does the consensus expect EPS to fall next year while revenue grows?",
      "What would a 5% decline in seat counts do to subscription revenue?",
    ],
  },
};
