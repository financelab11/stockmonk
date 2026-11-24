import type { StockStory } from "./types";

export const NFLX: StockStory = {
  "ticker": "NFLX",
  "kicker": "Media · Streaming subscriptions",
  "title": "Netflix has finished buying growth and started keeping the cash",
  "dek": "Almost $50B of subscription revenue now converts into a 31% operating margin. The open question is how much more the library can earn before content costs catch up.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue of $49.7B grew 14.7%, and the September quarter produced a 34.6% operating margin and $2.9B of free cash flow.",
    "The operating margin rose from 29.5% in fiscal 2025 to 31.3% trailing and 34.6% in the September quarter.",
    "Free cash flow is $11.4B, a 22.9% margin, with net debt of $6.9B at 0.4x EBITDA and a 29.2% return on invested capital.",
    "The shares are 46.1% lower over a year and trade at 16.0x earnings, below the 20.3x peer median, while 2027 growth is estimated at 10.7%."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065280&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "A 34.6% operating margin on $12.9B of third-quarter revenue was the strongest part of Netflix's result. Revenue rose to $12.9B from $11.5B a year earlier and diluted EPS was $0.87, while free cash flow was $2.9B. The margin matters because a business growing low-teens is now converting more than a third of revenue into operating profit, the signature of a fixed-cost content library spreading over a larger subscriber base. Revenue growth of 12.2% was slower than the earnings growth, which is the right way round for a mature subscription business.",
      "The model is a membership sold at a monthly price, with content costs fixed in advance. A title costs roughly the same whether ten million or a hundred million households watch it, so price increases and subscriber additions drop through to profit. The advertising tier adds a second revenue stream but a different cost structure, and the accounts do not split advertising from subscription, which makes the consolidated margin a blend of two businesses.",
      "Netflix trades at 4.9x sales, 16.0x earnings and 20.8x free cash flow on a $236.7B market value. The shares have fallen 46.1% in a year while revenue and EPS rose, so the multiple has compressed rather than the business deteriorated. The debate is whether 10% growth with a 31% operating margin deserves a market multiple or a value multiple; the answer depends on how much pricing power remains. The shares have de-rated enough that a stable margin, rather than an expanding one, may be sufficient."
    ],
    "quote": "Netflix has proved the library can produce a 34% operating margin; the next test is whether it can raise prices without losing the viewers who pay for it."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is a membership that unlocks streaming on phones, televisions and browsers. Netflix sells it in three broad forms: an advertising-supported tier, an ad-free tier, and higher-priced variants that add members or resolution. The company also licenses some titles to other outlets and has moved into live programming and games, both of which exist to give people a reason to open the app more often.",
      "The reporting does not split revenue by segment, so there is no reliable figure for advertising versus subscription. That matters: advertising behaves like a media business, sold in advance against audience, while subscriptions behave like a utility bill. Until the split is disclosed, the consolidated margin blends two businesses with different cycles."
    ],
    "bullets": [
      {
        "title": "Memberships",
        "detail": "Recurring monthly fees, priced separately in each market. The base is the annuity that pays for content."
      },
      {
        "title": "Advertising tier",
        "detail": "A lower subscription price in exchange for ad breaks. It only adds profit if ad revenue per member exceeds the discount."
      },
      {
        "title": "Content",
        "detail": "Originals, licensed titles, live events and games. Spending is decided years before the revenue it is meant to attract."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Content sits in cost of revenue, which is why the gross margin is 50.7% rather than the 80% a pure software company would report. Marketing, technology and staff costs take the rest down to a 31.3% operating margin and a 29.7% net margin.",
      "The leverage mechanism is unusual. A title costs roughly the same whether ten million or a hundred million households watch it, so the average cost per viewer falls as the member base grows. Raising price in a fixed-cost base drops almost entirely to operating profit. The reverse is also true: content that neither attracts nor retains viewers hits margin in the quarter it is amortised.",
      "Plan mix complicates the arithmetic. The advertising tier trades subscription revenue for ad revenue, and the cheaper plans that once looked like a land grab now have to prove they earn more per member than the plans they replaced."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue expanded from $39.0B in fiscal 2024 to $45.2B in fiscal 2025, up 15.9%, and trailing revenue is $49.7B, up 14.7%. The quarterly path has been $12.1B, $12.2B, $12.6B and $12.9B, a steady series with no seasonal spike. Consensus expects $51.1B this year and $56.6B next, growth of 13.1% and 10.7%, so the forecast is for gradual deceleration rather than a stall.",
      "The growth is now more price than household formation. Most broadband homes in the largest markets already subscribe, so revenue per membership is the variable that matters. The advertising tier adds revenue per member at a lower subscription price; it only improves the economics if ad revenue exceeds the discount, and the consolidated margin cannot show whether it does, which is the analytical gap in the advertising story.",
      "Third-party estimates assume price increases continue and advertising scales without a proportional rise in content spend. The 2026 EPS estimate of $3.58 is 41.6% growth, and 2027 is $3.77, only 5.1% higher. That bridge is the analytical problem: a year of 40% earnings growth followed by 5% implies the margin expansion is largely done, and the multiple will then depend on revenue alone."
    ],
    "bullets": [
      {
        "title": "Pricing power",
        "detail": "Revenue is growing faster than the member base, so price is doing the work. Each increase raises revenue immediately and churn with a lag."
      },
      {
        "title": "Advertising mix",
        "detail": "The ad tier trades subscription revenue for ad revenue. The accounts do not split the two, so the margin blends a media business with a utility."
      },
      {
        "title": "Content cost",
        "detail": "Content is expensed through cost of revenue rather than capitalised as capex. Cash spending on the slate is the real investment, and it is not visible in the capex line."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating margin went from 26.7% in fiscal 2024 to 29.5% in fiscal 2025, 31.3% trailing and 34.6% in the September quarter. Net margin followed from 22.3% to 24.3% and 29.7% trailing. The gross margin is 50.7%, because content amortisation sits in cost of revenue, so the operating margin is the cleaner measure of how much of each subscription dollar survives the slate.",
      "Earnings per share were $2.53 in fiscal 2025, and the trailing P/E of 16.0x at $58 implies about $3.63 of trailing EPS. The difference is the margin expansion on a larger revenue base. Return on invested capital is 29.2%, the highest in the peer group and well above the 16.0% median, and return on equity is 50.4%. Those returns are the evidence that the content spend is earning a return rather than merely consuming cash.",
      "Peers throw the gap into relief. Disney earns an 18.4% operating margin and an 8.5% return on invested capital; Netflix earns 31.3% and 29.2%. Spotify, at a 12.8% margin, is earlier in the same journey. The gap is not a temporary cycle: it reflects a subscriber base that pays before the content is amortised, and a cost base that does not rise with each additional viewer."
    ]
  },
  "cash": {
    "paragraphs": [
      "Twelve-month cash generation was $11.4B, a 22.9% margin. Fiscal 2025 operating cash flow was $10.1B and capital spending $688.2M. The low capex is the point: content is expensed, so the cash cost of the slate sits in operating cash flow rather than in the investment line. Net debt is $6.9B, or 0.4x EBITDA, and interest cover is 18.2x, so the balance sheet is not a constraint.",
      "The cash history shows the transition. Free cash flow was negative $132.0M in fiscal 2021, then $1.6B, $6.9B, $6.9B, $9.5B and $11.4B trailing. Net debt fell from $14.2B in fiscal 2020 to $6.9B. That is a business that spent a decade building a library and now collects the annuity from it; the risk is that content spending has to rise again to defend the base.",
      "Capital returns have taken the form of debt reduction rather than a dividend. The discretionary call is the content budget, which is committed years ahead and is the largest use of cash. A reader should watch cash spending on content against the amortisation charge: when the former runs ahead, free cash flow falls before the income statement shows it. That comparison is the one that matters."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Netflix is worth $236.7B at $58, equal to 4.9x trailing sales, 16.0x earnings, 15.3x EBITDA and 20.8x free cash flow, with a 4.8% free-cash-flow yield. The peer median is 20.3x earnings and 12.5x EBITDA, so the shares are cheaper than the group on earnings and more expensive on EBITDA. The split reflects a content business whose depreciation and amortisation are large relative to cash flow.",
      "Forward estimates put the shares at about 16.2x 2026 EPS of $3.58 and 15.4x 2027 EPS of $3.77. A 15x multiple for a business growing 10.7% with a 31.3% operating margin is not demanding, but it is not a bargain either: the earnings growth is decelerating sharply, and the market is treating the 2026 margin gain as a peak rather than a base.",
      "Disney and Comcast set the range for the multiple. Disney trades at 23.7x earnings and 10.3x EBITDA with a 4.6% growth rate and an 8.5% return on invested capital; Comcast trades at 7.7x and 5.0x with falling revenue. Netflix sits between them on earnings but above both on returns. A re-rating requires evidence that price increases can continue without a subscriber cost; a de-rating needs only one soft quarter."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Forty-three analysts contribute to The Yahoo Finance data from 18 November 2026, with a mean target of $85 and a range of $57 to $126. The mean is 47% above the $58 price, while the low end sits just below the current price, so the dispersion describes a market that cannot agree on whether the sell-off is a buying opportunity.",
      "Estimates call for $51.1B of revenue and $3.58 of EPS in 2026, then $56.6B and $3.77 in 2027. The 30-day and 90-day EPS revisions are both flat, which is unusual after a 46% drawdown and suggests analysts are waiting for the next slate rather than moving numbers. The consensus assumes 13.1% growth and a 41.6% EPS increase this year, then 10.7% and 5.1%; the second year is the one that sets the multiple."
    ]
  },
  "risks": {
    "intro": "Netflix carries little debt and generates cash, so the risks are about the content and pricing engine rather than solvency. Each one shows up in a different line of the accounts.",
    "items": [
      {
        "title": "Content cost inflation",
        "severity": "High",
        "detail": "Talent, sports rights and production costs rise faster than inflation. If content spend grows faster than revenue, the operating margin that took five years to build erodes.",
        "watch": "Content amortisation as a share of revenue, and cash spending on content versus the amortisation charge."
      },
      {
        "title": "Mature-market saturation",
        "severity": "High",
        "detail": "Most broadband households in the largest markets already subscribe. Growth then depends on price rises, which raise churn.",
        "watch": "Revenue growth against the size of any price increase, and commentary on member retention."
      },
      {
        "title": "Advertising execution",
        "severity": "Medium",
        "detail": "The ad tier requires sales infrastructure, measurement and inventory that a subscription company did not previously need.",
        "watch": "Ad-tier revenue per member and whether ad pricing holds when inventory expands."
      },
      {
        "title": "Competition for attention",
        "severity": "Medium",
        "detail": "Streaming rivals, short video and games all compete for the same evening. Switching costs for a viewer are close to zero.",
        "watch": "Engagement disclosures and the number of titles that reach a wide audience."
      },
      {
        "title": "Expectations",
        "severity": "Medium",
        "detail": "The shares have fallen 42.2% in a year while the business grew, which shows how quickly the market can reprice a long growth runway.",
        "watch": "Forward revenue estimates and the multiple applied to them."
      }
    ],
    "watchlist": [
      {
        "title": "Content spend",
        "detail": "Compare the cash cost of the slate with the amortisation charged to the income statement."
      },
      {
        "title": "Membership and pricing",
        "detail": "Revenue growth is the product of members and price; the two move in opposite directions after an increase."
      },
      {
        "title": "Advertising",
        "detail": "The ad tier is the main new revenue line, so its contribution per member is the number that matters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Netflix is a subscription business with a 31.3% operating margin, $11.4B of free cash flow and almost no leverage. The financial statements describe a company that has moved from spending to earn growth to earning cash from the base it built.",
      "What is not known is how much pricing power remains. Revenue growth of 14.7% is strong, but it now comes from price and advertising more than from new households, and those levers are easier to exhaust.",
      "The educational point is that content businesses have a fixed cost that behaves like capital. Two companies can report the same revenue and very different free cash flow depending on how much they spend on the slate and when the cash leaves."
    ],
    "questions": [
      "How much of the recent revenue growth came from price rather than new members?",
      "What share of revenue does advertising contribute, and at what margin?",
      "Is content amortisation growing faster or slower than revenue?",
      "What would a 5% decline in members do to the operating margin?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
