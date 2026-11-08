import type { StockStory } from "./types";

export const DELL: StockStory = {
  ticker: "DELL",
  kicker: "Technology · Servers, storage and PCs",
  title: "Dell's revenue nearly doubled and the margin is still thin",
  dek: "A 19.8% gross margin means volume and mix do most of the work. The latest quarter shows what operating leverage looks like in hardware, and how quickly it can reverse.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $151.20B, up 49.0%, and the latest quarter grew 57.7%.",
    "Gross margin is 19.8% and operating margin 9.4%, with 11.5% in the latest quarter.",
    "Free cash flow was $8.56B, a 5.7% margin, against $19.98B of net debt.",
    "At $328.53 the shares trade at 21.0x earnings and 1.7x sales.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1571996/000157199626000008/dell-20260130.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001571996&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Dell sells the machinery of corporate computing: servers, storage, networking, PCs, monitors and the services that keep them running. It is a scale business. The company buys components in enormous volumes, assembles and configures systems to order, and sells them through direct and channel relationships to organisations of every size.",
      "The economics are the opposite of software. Gross margin is 19.8%, so most of each revenue dollar goes back out of the door as component cost. Operating margin is 9.4%, and the difference between the two is the cost of sales, marketing, support and administration spread over $151.20B of revenue. Small changes in mix or pricing move the operating result a long way.",
      "At $328.53 the market capitalisation is $238.5B, or 21.0x trailing earnings, 14.9x EV/EBITDA and 1.7x sales. The shares are 45% of the way up a 52-week range of $110.22 to $595.51 and returned 122.6% over the past year. The market has repriced the business around the current infrastructure cycle.",
    ],
    quote:
      "In hardware, the revenue line is a measure of volume and the margin line is a measure of mix. A quarter can look spectacular on one and fragile on the other.",
  },
  whatItDoes: {
    paragraphs: [
      "The company reports two broad groups. The infrastructure side sells servers, storage arrays and networking to enterprises, governments and large service providers. The client side sells PCs, laptops, monitors and peripherals to businesses, consumers and schools. Services and financing wrap around both, and they matter because they carry better margins than the boxes.",
      "Customers range from a single shop buying ten laptops to a hyperscale operator buying racks by the thousand. That range is deliberate: the client business provides volume and purchasing scale, while the infrastructure business provides the large contracts. A dollar of infrastructure revenue is worth more in absolute profit than a dollar of PC revenue, even at a similar percentage margin.",
      "Dell employed 165,000 people, a large number that reflects manufacturing, configuration, logistics and services. The company owns assembly and configuration capacity but buys processors, memory and storage from others. That gives it flexibility on volume and exposure to component pricing at the same time.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is recognised when systems ship, with services recognised over the contract period. Because hardware is paid for quickly and components are bought on terms, the business can fund a surprising amount of its growth from working capital. That is why free cash flow can exceed net income in a strong year and fall below it in a weak one.",
      "The unit economics are driven by three levers. The first is volume, which spreads fixed manufacturing and design costs. The second is mix, because storage, networking and services carry better margins than commodity servers and PCs. The third is component cost, which Dell can partly pass through but not always immediately.",
      "Operating leverage is powerful in both directions. In Q1 FY2026, revenue was $23.38B and operating margin was 5.0%. By Q2 FY2027, revenue was $46.97B and operating margin was 11.5%. Doubling revenue more than doubled the margin, because the cost base did not double with it.",
    ],
    bullets: [
      {
        title: "Servers and networking",
        detail:
          "The volume driver in the current cycle. Large orders, thin percentage margins, significant absolute profit.",
      },
      {
        title: "Storage",
        detail:
          "Higher margin than servers and stickier, because data lives on the array and migrations are disruptive.",
      },
      {
        title: "PCs and peripherals",
        detail:
          "A replacement market with seasonal corporate buying. Useful for scale and for the installed base.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "The five-year record is uneven: $101.20B in FY2022, $102.30B in FY2023, $88.42B in FY2024, $95.57B in FY2025 and $113.54B in FY2026. The FY2024 drop was the post-pandemic PC correction, and the recovery since has been gradual until the last two quarters.",
      "The latest quarter changed the scale of the business. Revenue of $46.97B was up 57.7% year over year, and the attributed consensus expects $193.46B for the current fiscal year against $113.54B last year. A step-up that large in a hardware company comes from a small number of very large infrastructure orders, not from broad demand across millions of customers.",
      "The drivers are the build-out of accelerated computing capacity, the ageing installed base of corporate PCs and the attach of storage and services. The brake is that large infrastructure orders are lumpy and price-sensitive. A single customer deferring a quarter can move the revenue line by billions.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual margin record shows how thin the buffer is. Operating income was $4.66B on $101.20B of revenue in FY2022, $5.77B on $102.30B in FY2023, $5.41B on $88.42B in FY2024, $6.24B on $95.57B in FY2025 and $8.15B on $113.54B in FY2026. Revenue fell and rose; operating income moved less than revenue because the cost base flexes.",
      "The quarterly trend is more dramatic. Operating margin went from 5.0% in Q1 FY2026 to 6.0%, 7.8%, 9.3%, 8.3% and 11.5% in Q2 FY2027. Revenue over the same quarters went from $23.38B to $46.97B. That is a business running close to capacity and getting paid for it.",
      "Return on equity is negative 460.6% while return on invested capital is 64.3%. The negative equity is the result of years of buybacks and acquisitions that pushed book equity below zero. It makes the ROE figure meaningless as a measure of profitability; the ROIC and the operating margin are the figures to use.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $8.56B, a 5.7% margin, and the annual record shows how volatile it can be: $7.51B in FY2022, $562.0M in FY2023, $5.92B in FY2024, $1.87B in FY2025 and $8.55B in FY2026. The swings come from working capital and from the timing of large orders, not from a change in the underlying profitability of the business.",
      "Net debt is $19.98B, or 1.2x EBITDA. That is manageable at current profit levels but material for a company with a 9.4% operating margin. A decline in operating income of a few billion dollars would change the leverage picture quickly.",
      "The cash flow supports a modest dividend at a 0.6% yield and a buyback. The priority in the current cycle is funding inventory and receivables for large orders. That is a use of cash that grows with revenue, which is why a fast-growing hardware business can report strong profits and still consume cash.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 21.0x trailing earnings, 14.9x EV/EBITDA, 1.7x sales and 27.9x free cash flow, Dell is priced as a hardware company with a cyclical peak in front of it. The 1.7x sales multiple is the giveaway: the market is not paying much for each dollar of revenue because it does not expect the revenue to be durable.",
      "The earnings multiple needs context. At 21.0x trailing earnings, the market is paying for the current profit level, which reflects an 11.5% quarterly operating margin that is far above the historical range. If margins normalise toward the mid-single digits, the same share price would represent a much higher multiple of normal earnings.",
      "The peer table is not a perfect comparison, because none of the listed companies sells hardware at this scale. Nvidia at 23.3x and Broadcom at 36.6x earn far higher margins. Dell's lower multiple is a discount for capital intensity and cyclicality, and the question is whether the discount is large enough.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts contribute to the attributed consensus, with a mean target of $590.00 and a range of $490.00 to $700.00. The mean is well above the $328.53 close and the range is narrow, which suggests the forecasters agree on the direction of the current cycle.",
      "Estimates call for $193.46B of revenue and $25.91 of EPS this fiscal year, then $231.15B and $28.21 next year. Only eight analysts contribute to the following year's revenue estimate, so that figure is less reliable than the current-year number. Next quarter is expected to produce $49.18B and $6.55.",
      "Those are third-party forecasts and they embed a strong assumption about large infrastructure orders continuing. The narrow target range should not be read as certainty; it often means the analysts are anchored to the same near-term data point.",
    ],
  },
  risks: {
    intro:
      "Dell's risks are concentrated in the durability of the current infrastructure cycle and in the thin margin that makes the business sensitive to small changes in price or mix.",
    items: [
      {
        title: "Customer concentration in large orders",
        severity: "High",
        detail:
          "A step-up of this size comes from a few very large buyers. If one defers or shifts to a competitor, revenue and margin fall together.",
        watch:
          "Large-deal disclosures, backlog and the revenue growth rate by quarter.",
      },
      {
        title: "Component pricing",
        severity: "High",
        detail:
          "Memory and storage costs move quickly. Dell can pass some increases through, but not always within the same quarter.",
        watch:
          "Gross margin and commentary on component cost.",
      },
      {
        title: "Margin normalisation",
        severity: "High",
        detail:
          "An 11.5% operating margin is far above the historical range. A return to mid-single digits would cut earnings sharply.",
        watch:
          "Operating margin against revenue growth each quarter.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "$19.98B of net debt at 1.2x EBITDA is manageable now. It becomes a problem if operating income falls.",
        watch:
          "Net debt to EBITDA and interest expense.",
      },
      {
        title: "PC replacement cycles",
        severity: "Medium",
        detail:
          "The client business depends on corporate refresh cycles that can be deferred for a year without much cost to the customer.",
        watch:
          "Client revenue growth and commercial PC order trends.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "19.8% is the buffer between component costs and profit. Watch it before watching revenue.",
      },
      {
        title: "Backlog",
        detail:
          "In a business with large orders, backlog is the clearest sign of next quarter's revenue.",
      },
      {
        title: "Working capital",
        detail:
          "Inventory and receivables absorb cash when revenue grows quickly. Free cash flow will lag profit.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Dell is a scale hardware business executing well in a strong infrastructure cycle. The 49.0% revenue growth and the 11.5% quarterly operating margin are real, and the cash flow is positive despite the working capital demands of growth.",
      "The question is what happens after the cycle. Hardware margins mean-revert, and the current level is well above the historical range. The 1.7x sales multiple already assumes some normalisation, which is why the stock is not priced like a software company.",
      "A reader should focus on two things: how concentrated the large orders are, and how much of the margin comes from volume rather than mix. Both are visible in the quarterly disclosures, and both will change before the annual numbers do.",
    ],
    questions: [
      "How many customers account for the increase in infrastructure revenue?",
      "What share of the operating margin improvement is utilisation rather than mix?",
      "How much working capital does each incremental dollar of revenue require?",
      "What would a 30% decline in large orders do to operating income?",
    ],
  },
};
