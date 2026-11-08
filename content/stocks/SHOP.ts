import type { StockStory } from "./types";

export const SHOP: StockStory = {
  ticker: "SHOP",
  kicker: "Commerce software · Merchant platform",
  title: "Shopify charges merchants twice: once for the software, once for the payment",
  dek: "Subscriptions grow with the number of merchants; payments, capital and shipping grow with the value of what those merchants sell. The second line is bigger and carries a lower margin.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $14.2B, up 32.5%, with a 47.5% gross margin and a 14.6% operating margin.",
    "Operating income went from negative $1.42B in fiscal 2023 to positive $1.47B in fiscal 2025, the clearest evidence of operating leverage in this batch.",
    "Free cash flow of $2.66B is 18.8% of revenue, and the balance sheet holds $4.73B of net cash.",
    "At 13.4x sales and 90.4x EBITDA, the shares are the most expensive in the peer set by a wide margin.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001594805&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Shopify provides the software and services that let a business sell online. More than a million merchants in over 175 countries use it to run a storefront, take payments, manage inventory, ship orders and market products. The company employs 11,600 people and is headquartered in Ottawa.",
      "It sells to a market that is brutal in its churn. Most new merchants are small, many fail, and the ones that succeed grow quickly. That means revenue has two engines running at different speeds: a subscription base that grows with the number of merchants, and a payments and services line that grows with the volume those merchants transact. The second is now the larger and faster of the two.",
      "Trailing revenue is $14.2B, up 32.5%, with a 14.6% operating margin. The shares closed at $148.91, for a market capitalisation of $194.2B, about 63% of the way up a 52-week range of $94.00 to $180.88. The stock is down 4.6% over the past year and 2.9% over five years, even though revenue has more than tripled.",
    ],
    quote:
      "Shopify's revenue is a percentage of what its merchants sell, so the company grows when its customers grow. That alignment is the strength of the model and the reason a consumer slowdown reaches the income statement quickly.",
  },
  whatItDoes: {
    paragraphs: [
      "A merchant signs up, picks a plan and builds a storefront. The software handles the catalogue, checkout, taxes, discounts and order management. Once the store is live, the merchant can add payments, capital advances, shipping labels, fulfilment and advertising, each of which is priced per transaction or per month.",
      "The platform also connects to physical retail through point-of-sale hardware and to large marketplaces and social channels, so a merchant can sell in several places from one back office. That breadth is the moat: a merchant who runs the storefront, the payments and the inventory on one system faces real switching costs, even if each individual feature can be bought elsewhere.",
      "Larger brands sit on the same platform as one-person shops, which gives Shopify a range of customers that most software companies do not have. The description in the filing names Allbirds, Gymshark, PepsiCo and Staples among the businesses it serves, alongside the long tail of small merchants that makes up most of the count.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Subscription revenue is the software fee. It is recurring, priced by plan and by scale, and carries a high margin because the cost of serving one more merchant on the same infrastructure is small. It grows with the number of paying merchants, which in turn grows with new sign-ups minus churn.",
      "Merchant solutions revenue is the transactional line: payments, capital, shipping, fulfilment and advertising. Payments alone take a small percentage of every order processed, so this line grows with gross merchandise volume — the total value of what merchants sell. It is the larger line, and its gross margin is much lower because card networks and processors take their own cut before Shopify books the remainder.",
      "That mix explains the 47.5% gross margin. A pure software company would report 75% or more; Shopify reports less because a growing share of its revenue is payments, where part of the fee is simply passed through. The right way to read it is as a lower margin on a much larger revenue base, not as deteriorating economics. The 14.6% operating margin is what is left after the fixed cost of engineering, sales and support.",
    ],
    bullets: [
      {
        title: "Subscriptions",
        detail:
          "Plan fees for the storefront and tools. Recurring and high margin, but capped by the number of merchants.",
      },
      {
        title: "Payments",
        detail:
          "A percentage of each order processed. Scales with merchandise volume, not merchant count, and carries processing costs.",
      },
      {
        title: "Capital and shipping",
        detail:
          "Merchant cash advances, loans, labels and fulfilment. Useful products that deepen the relationship, and lines where credit losses can appear.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 39.4% a year from $4.61B in fiscal 2021 to $11.56B in fiscal 2025, and the trailing figure is $14.2B after 32.5% growth. The latest quarter grew 31.6%. A company at this size growing above 30% is expanding the underlying volume of commerce it processes, not just raising prices.",
      "The consensus expects $15.31B of revenue and $1.90 of EPS this fiscal year, then $19.37B and $2.45 next year. That second year is a little above the current year's $15.31B, a modest deceleration from the recent rate. It is a reasonable forecast if merchandise volume holds and the payments attach rate stays where it is.",
      "Two things could slow it. The first is the merchant base: if small business formation falls in a weak economy, new sign-ups fall with it. The second is take rate: if Shopify lowers payment fees to win larger merchants, revenue grows more slowly than the volume it processes. Neither would break the model, but both would change the growth rate that the multiple depends on.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating line has swung further than almost any company in this coverage group. Operating income was $268.6M in fiscal 2021, negative $822.0M in fiscal 2022, negative $1.42B in fiscal 2023, then positive $1.07B in fiscal 2024 and $1.47B in fiscal 2025. The swing from a $1.42B loss to a $1.47B profit in two years came from revenue growth against a cost base that had stopped expanding.",
      "Net income is noisier than operating income and should be read with care. It was $2.91B in fiscal 2021, when operating income was only $268.6M, and negative $3.46B in fiscal 2022. Those swings came from items outside the operating business. The first quarter of fiscal 2026 shows the same pattern: a 12.1% operating margin alongside a net loss of $581.0M, so the loss arose below the operating line.",
      "The quarterly margins show a business that has found its level. Operating margin was 10.9% in Q2 FY25, 12.1% in Q3 FY25, 17.2% in the seasonally strong Q4 FY25, 12.1% in Q1 FY26, 13.6% in Q2 FY26 and 15.2% in Q3 FY26. The trend is upward, and it is being achieved while revenue grows above 30%.",
      "Return on equity is 16.7% and return on invested capital is 20.4%. Both are respectable rather than spectacular, which is what a business with a large cash balance and a modest asset base should show.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $2.66B over the trailing period, an 18.8% margin — higher than the operating margin, which is worth explaining. Capital expenditure is small because the company rents data centres rather than building them, and stock-based compensation is added back in the cash-flow statement. The first is a genuine advantage; the second is a cost that shows up as dilution rather than as cash.",
      "The annual record is $484.9M in fiscal 2021, negative $186.0M in fiscal 2022, $905.0M in fiscal 2023, $1.60B in fiscal 2024 and $2.01B in fiscal 2025. The recovery from the negative year tracks the operating turnaround, and the growth since has been steady.",
      "Net cash is $4.73B, so the company funds itself. There is no dividend and no meaningful debt repayment obligation. The capital question is therefore about acquisitions and about the merchant lending book: capital advances put cash at risk, and a downturn would show up as credit losses before it showed up in revenue.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $148.91 the shares trade at 91.3x trailing earnings, 90.4x EV/EBITDA, 13.4x sales and 73.0x free cash flow, for a free-cash-flow yield of 1.4%. Every one of those multiples is a claim about the future rather than a description of the present.",
      "The peer comparison makes the premium plain. Amazon trades at 15.6x EV/EBITDA on 15.4% revenue growth, McDonald's at 17.3x, Booking Holdings at 10.6x. Shopify at 90.4x is far above the highest of those. The market is not comparing Shopify with retailers or travel platforms; it is pricing it as a software platform whose revenue will keep compounding for a decade.",
      "That can be a defensible view, but it leaves little room for a growth rate in the low twenties. At 13.4x sales, a deceleration from 32% to 20% would compress the multiple even if the business remained healthy. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty-nine analysts contribute to the third-party consensus, with a mean target of $177.50 and a range of $120.00 to $220.00. The mean is above the last close, which is a moderate gap for a stock with this much valuation risk.",
      "Estimates call for $4.82B of revenue and $0.62 of EPS next quarter, then $4.03B and $0.45, with $15.31B and $1.90 for the fiscal year. The fourth quarter is seasonally the strongest because of holiday volume, which is why the first estimate is larger than the second.",
      "The following year's $19.37B of revenue and $2.45 of EPS assumes the growth rate holds and the margin expands. That combination is exactly what the multiple requires, so the estimate revision direction matters more here than the average target.",
    ],
  },
  risks: {
    intro:
      "Shopify's risks sit on both sides of the marketplace: the merchants it serves and the platforms it competes with. The balance sheet is strong, so the threats are to growth and to the multiple rather than to solvency.",
    items: [
      {
        title: "Merchant churn and small-business failure",
        severity: "High",
        detail:
          "Most merchants are small. A weak economy raises closures, which reduces subscription revenue and the volume that payments depend on.",
        watch:
          "Merchant count, monthly recurring revenue and the net change in paying stores.",
      },
      {
        title: "Consumer spending on merchandise",
        severity: "High",
        detail:
          "Payments revenue is a percentage of what merchants sell. A slowdown in online retail reaches the income statement faster than it reaches a software company's.",
        watch:
          "Gross merchandise volume growth and the take rate on payments.",
      },
      {
        title: "Payments margin pressure",
        severity: "Medium",
        detail:
          "Winning larger merchants often means negotiating lower processing fees. Revenue can grow while the gross margin falls.",
        watch:
          "Merchant solutions gross margin and the mix of payments within revenue.",
      },
      {
        title: "Competition from larger platforms",
        severity: "Medium",
        detail:
          "Marketplaces and enterprise software vendors offer their own storefront and payment tools, often bundled with audience or infrastructure the merchant already pays for.",
        watch:
          "Win rates with larger brands and the pace of enterprise product launches.",
      },
      {
        title: "Merchant credit exposure",
        severity: "Medium",
        detail:
          "Capital advances and loans put Shopify's cash at risk if merchants fail. Losses appear with a lag and rise in a downturn.",
        watch:
          "Provision for credit losses and the size of the merchant lending book.",
      },
    ],
    watchlist: [
      {
        title: "Gross merchandise volume",
        detail:
          "The base that payments revenue is charged on. It leads reported revenue by roughly a quarter.",
      },
      {
        title: "Operating margin",
        detail:
          "The test of whether growth is being bought. A margin that holds above 14% while revenue grows is the healthy combination.",
      },
      {
        title: "Free cash flow versus net income",
        detail:
          "The gap is stock-based compensation. Track dilution alongside the cash figure.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Shopify is a commerce platform that has moved from losing money to earning it while still growing above 30%. Revenue of $14.2B, operating income of $1.47B and free cash flow of $2.66B are the evidence, and the balance sheet holds $4.73B of net cash.",
      "The educational point is the two-part revenue model. Subscriptions are software economics: recurring, high margin, limited by the number of merchants. Payments are volume economics: a small percentage of a very large number, with processing costs attached. Reading the gross margin without knowing the mix leads to the wrong conclusion about the business.",
      "The valuation is the unresolved part. At 13.4x sales, the shares already assume a long runway of growth. Whether that is reasonable depends on merchandise volume, merchant retention and the take rate — three things that a trailing income statement can only hint at.",
    ],
    questions: [
      "What share of revenue comes from payments rather than subscriptions?",
      "Is gross merchandise volume growing faster or slower than revenue?",
      "How much of the free-cash-flow margin depends on stock-based compensation add-backs?",
      "What would a 20% growth year do to a 13.4x sales multiple?",
    ],
  },
};
