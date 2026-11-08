import type { StockStory } from "./types";

export const NOW: StockStory = {
  ticker: "NOW",
  kicker: "Technology · Enterprise workflow software",
  title: "ServiceNow's cash flow and its earnings describe two different companies",
  dek: "The platform converts 30.8% of revenue into free cash flow and reports a 9.7% operating margin. Both numbers are real, and the gap between them is the point.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $15.43B on a trailing basis, up 21.8%, and the latest quarter grew 20.5%.",
    "Gross margin is 73.1%, operating margin is 9.7%, and free cash flow was $4.75B, a 30.8% margin.",
    "The P/FCF multiple of 22.3x sits far below the 73.2x P/E for the same business.",
    "Revenue has more than doubled since FY2021 while the shares are down 40.6% over the past year.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1373715/000137371526000007/now-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001373715&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "ServiceNow sells a cloud platform that large organizations use to run recurring work: IT support, employee onboarding, customer service cases and security incidents. The product is a set of workflows on a shared data model, which means a customer that starts with IT service management can add other departments without buying a different system.",
      "Start with the cash: $4.75B of free cash flow on $15.43B of revenue. Then the operating margin of 9.7%, and the latest quarter, which delivered $4.11B at a 9.4% operating margin. A company that converts 31 cents of every revenue dollar into cash and reports a 9.4% operating margin is either spending heavily on something the cash-flow statement does not show, or the two figures are measuring different things.",
      "At $101.97 the company is worth $105.84B, close to the bottom of an $81.24 to $175.80 range. The shares are down 40.6% over the year and 26.4% over five years, during which revenue more than doubled. That divergence is the reason to look at the cash-flow multiple rather than the earnings multiple.",
    ],
    quote:
      "A seat-based software company is a bet on the customer's headcount. Every AI product it sells is an attempt to need fewer seats per customer.",
  },
  whatItDoes: {
    paragraphs: [
      "The platform is organized by department rather than by product. Technology workflows cover IT service management and operations. Customer workflows cover service and field operations. Employee workflows cover HR delivery and onboarding. Security and risk workflows cover incident response and compliance. A creator layer lets customers build their own applications on the same data model.",
      "Customers are large enterprises, governments and, increasingly, mid-sized companies. Deals usually start in one department and expand as other teams adopt the platform, which is why the company talks about expansion within accounts rather than new logos.",
      "The company employs 13,096 people. Most of them are in sales, customer success and research, and that mix explains why the operating margin is thin while the gross margin is high: the cost of acquiring and expanding accounts sits in operating expenses, not in cost of revenue.",
    ],
    bullets: [
      {
        title: "Technology workflows",
        detail:
          "IT service management and operations. The entry point for most customers and still the largest part of the base.",
      },
      {
        title: "Customer and employee workflows",
        detail:
          "Service cases, field operations, HR delivery and onboarding. The expansion story inside existing accounts.",
      },
      {
        title: "Creator and platform",
        detail:
          "Tools for customers to build their own applications on the same data model. Raises the cost of leaving.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is subscription, priced mostly per user with tiered packages. It is recognized rateably over the contract, so a large deal signed in December produces revenue over the following years rather than in the quarter it is signed. That is why billings and remaining performance obligations matter more than the income statement to anyone trying to forecast the next year.",
      "Gross margin of 73.1% covers hosting, support and the delivery organization. Everything else — sales commissions, marketing, research and stock-based compensation — sits below that line. The 9.7% operating margin is what remains after all of it.",
      "Free cash flow is 30.8% of revenue, and the gap to operating margin is mostly stock-based compensation, which is a real cost to shareholders but not a cash cost to the business, plus the timing benefit of collecting subscription fees in advance. Deferred revenue is a source of funding that grows with the business, and it flatters cash flow in exactly the years when growth is fastest.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $5.90B in FY2021 to $13.28B in FY2025 and $15.43B on a trailing basis. Unlike most software companies of this size, the growth rate has barely decayed: 21.8% trailing and 20.5% in the latest quarter, on a base that is now more than $15B.",
      "Third-party estimates call for $16.23B this fiscal year and $19.26B next, which implies growth of about 22% and then 19%. Holding a growth rate near 20% at this scale requires the company to add roughly $3B of revenue a year, which is more than most enterprise software companies produce in total.",
      "The drivers are expansion within existing accounts, new departments adopting the platform, international growth and the AI products sold on top of the workflow base. The brake is seat-based pricing: if customers use AI to handle the work that used to require staff, the number of seats they need may stop growing even as their usage rises.",
    ],
    bullets: [
      {
        title: "Account expansion",
        detail:
          "Selling another department the same platform is cheaper than winning a new customer and carries a higher margin.",
      },
      {
        title: "International",
        detail:
          "Revenue outside North America has grown faster than the base, from a smaller starting point.",
      },
      {
        title: "AI products",
        detail:
          "Priced as add-ons to existing subscriptions. The open question is whether they expand the contract or replace seats inside it.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin rose from 4.4% in FY2021 to 13.7% in FY2025, a steady improvement as revenue outgrew the cost base. The quarterly record then broke the pattern: 11.1%, 16.8%, 12.4%, 13.3%, 4.1% and 9.4%. The 4.1% quarter is the anomaly and is worth checking against the filing for a one-off item.",
      "Net margin is 9.4%, return on equity is 11.0% and return on invested capital is 7.4%. The last figure is the weakest in the software group here, and it reflects a business that has spent heavily on acquisitions and on its own sales capacity.",
      "Diluted EPS was $1.39 on a trailing basis. At $101.97, that produces a P/E of 73.2x. The same business generates $4.75B of free cash flow, which produces a P/FCF of 22.3x. Two multiples, one company, a factor of three between them.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.75B, a 30.8% margin. The annual record is consistent: $1.80B, $2.17B, $2.70B, $3.42B and $4.58B. In FY2025, free cash flow of $4.58B was more than twice net income of $1.75B.",
      "That gap is the central fact about this company's financial statements. Stock-based compensation is a large non-cash expense, and subscription billing collects cash ahead of the revenue it represents. Both push free cash flow above reported profit, and both are sustainable only while the business is growing.",
      "Net debt is $2.92B, or 1.1x EBITDA, and the free-cash-flow yield is 4.5%. The balance sheet is not a constraint, but the leverage is real and the interest cost now appears in a business that reports a thin operating margin.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $101.97, ServiceNow trades at 73.2x trailing earnings, 39.4x EV/EBITDA and 7.0x sales, with a 22.3x free-cash-flow multiple. The sales multiple is the third lowest among the application-software names in this batch, behind only Intuit at 4.3x and Oracle at 6.1x.",
      "The 7.0x sales multiple is the interesting one. For a company growing 22% with a 73.1% gross margin, that is not an extreme price. The earnings multiple looks extreme only because reported profit is depressed by non-cash charges that the cash flow does not bear.",
      "Which multiple is right depends on whether stock-based compensation is treated as a real cost. It dilutes shareholders, so it is real. It does not consume cash, so it does not constrain the business. The honest answer is that neither multiple alone captures both facts. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty-six analysts, a mean target of $155.82 and a range of $72.00 to $266.00. Nine sit in the strongest positive bucket, 35 are positive, three neutral, one negative and one in the weakest bucket.",
      "The revenue estimates are $4.37B next quarter, $16.23B this fiscal year and $19.26B next, with EPS of $1.07, $3.95 and $4.80. That implies growth of about 22% and then 19%, a modest deceleration for a company of this size.",
      "The mean sits roughly 53% above the last close and the low end roughly 29% below it. That is a wide disagreement for a business whose revenue is unusually visible, and it suggests the argument is about the multiple rather than the revenue.",
    ],
  },
  risks: {
    intro:
      "ServiceNow's risks are about pricing model and growth duration. The balance sheet and the cash flow are strong enough that solvency is not the question.",
    items: [
      {
        title: "Seat-based pricing",
        severity: "High",
        detail:
          "Revenue is priced largely per user. If AI reduces the number of people a customer needs, seat growth slows even if usage rises.",
        watch:
          "Revenue per customer and the mix of subscription types disclosed in the filing.",
      },
      {
        title: "Growth duration",
        severity: "High",
        detail:
          "A 7.0x sales multiple assumes the 20% growth rate persists. Deceleration to the mid-teens would change the arithmetic quickly.",
        watch:
          "Remaining performance obligations and the growth rate of large deals.",
      },
      {
        title: "Stock-based compensation",
        severity: "Medium",
        detail:
          "It is a large part of the gap between cash flow and earnings, and it transfers value from existing holders to employees.",
        watch:
          "Share count growth and the ratio of stock-based compensation to revenue.",
      },
      {
        title: "Competition from suites",
        severity: "Medium",
        detail:
          "Large platform vendors can bundle adjacent workflow products into contracts the customer has already signed.",
        watch:
          "Win rates in new departments and average contract value.",
      },
      {
        title: "Large-deal concentration",
        severity: "Medium",
        detail:
          "A small number of very large contracts carry a disproportionate share of growth, and their timing moves the quarter.",
        watch:
          "The count of large deals and the change in remaining performance obligations.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "The 30.8% margin is the number that supports the valuation. Watch whether it holds as growth slows.",
      },
      {
        title: "Remaining performance obligations",
        detail:
          "Contracted revenue not yet recognized. It is the best available read on the next four quarters.",
      },
      {
        title: "Operating margin",
        detail:
          "The path from 9.7% upward is the bridge between the two valuation multiples.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ServiceNow is a workflow platform with a 73.1% gross margin, a 30.8% free-cash-flow margin and revenue growing at 21.8% on a $15.43B base. Very few software companies sustain that combination at this size.",
      "The financial statements are harder to read than the business. Stock-based compensation and deferred revenue push free cash flow far above reported profit, which is why the P/E and the P/FCF tell different stories. Neither is wrong, and neither is sufficient.",
      "The educational point is that the gap between earnings and cash flow is not automatically a red flag or a hidden asset. It is a question about which costs are cash costs and which are transfers of ownership, and the answer changes the multiple you should use.",
    ],
    questions: [
      "How much of the free-cash-flow margin comes from deferred revenue growth?",
      "Does AI expand the contract or reduce the number of seats billed?",
      "What share of revenue growth comes from existing customers rather than new ones?",
      "How fast is the share count growing through stock-based compensation?",
    ],
  },
};
