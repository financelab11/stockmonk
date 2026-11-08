import type { StockStory } from "./types";

export const FIX: StockStory = {
  ticker: "FIX",
  kicker: "Mechanical and electrical contracting · Data centres",
  title: "Comfort Systems is the labour bottleneck in the AI build-out",
  dek: "Revenue quadrupled in four years and operating margin nearly tripled, because skilled trades are scarce. The consensus expects the sequential growth to stop in the next two quarters.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $12.54B, up 50.7%, with operating margin at 16.7% and 16.6% in the latest quarter.",
    "Operating margin went from 6.1% in FY2021 to 16.7% now, on revenue that grew from $3.07B to $12.54B.",
    "Free cash flow of $2.44B is 19.5% of revenue, higher than the 13.0% net margin, because customers pay before the labour is settled.",
    "The shares trade at 14.6x free cash flow, the lowest cash multiple among the data-centre names in this group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1035983/000110465926017530/fix-20251231x10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001035983&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Comfort Systems installs mechanical and electrical systems in buildings. That means heating, ventilation and air conditioning, plumbing, piping, controls, fire protection and electrical distribution, delivered by 11,100 people across two segments and a corporate centre. The work is done on site, by tradespeople, under contract.",
      "The company has been one of the clearest beneficiaries of data-centre construction, but it is not a technology company. It sells labour and project management to general contractors and building owners in data centres, manufacturing plants, healthcare, education and commercial buildings. The reason it matters in an AI context is simple: a data hall needs enormous cooling and power distribution installed by humans, and there are not many companies with the workforce to do it at scale.",
      "The financial record is remarkable for a contractor. Revenue went from $3.07B in FY2021 to $9.10B in FY2025 and $12.54B trailing. Operating income went from $188.4M to $1.31B and beyond. Operating margin rose from 6.1% to 16.7%. Contractors are not supposed to expand margins like that.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Mechanical Services covers the systems that move air, water and heat: HVAC, plumbing, piping, controls, fire protection, monitoring and off-site prefabrication. Electrical Services installs the distribution systems that bring power to equipment. Both are project businesses, won by competitive bid or negotiated contract, staffed with crews that move between sites.",
      "The segment mix is not disclosed in the data, which is a real limitation given that the electrical side is the one most directly tied to data-centre power density. What is disclosed is enough to see the shape: two service lines, one corporate centre, and a customer base of general contractors, building owners and industrial operators.",
      "Geography matters for a contractor in a way it does not for a product company. Crews have to travel to sites, and a company with a strong position in one region cannot easily serve a project two time zones away. Comfort Systems has built its position through a series of regional operating companies, each with local labour relationships, which is how a contractor grows without losing the thing that wins the work.",
    ],
    bullets: [
      {
        title: "Mechanical Services",
        detail:
          "HVAC, plumbing, piping, controls, fire protection and off-site construction. The larger segment and the one most exposed to cooling demand.",
      },
      {
        title: "Electrical Services",
        detail:
          "Installation and servicing of electrical distribution. Directly tied to power density in a data hall.",
      },
      {
        title: "Service and maintenance",
        detail:
          "Ongoing work on installed systems. Smaller than project work but less cyclical and more recurring.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Comfort Systems is paid per project, usually on a schedule tied to progress, with the price agreed before the work starts. Gross margin of 25.6% is the spread between the contract price and the cost of labour, materials and subcontractors. Because labour is the largest and least flexible input, the margin depends on productivity, supervision and how well the project was estimated.",
      "That is why the margin expansion is the story. Between FY2021 and now, revenue quadrupled while the operating margin nearly tripled. Three things can produce that: pricing power when demand exceeds available capacity, better project selection, and fixed overhead spread across more work. All three are plausible in a market where data-centre work is plentiful and qualified contractors are few.",
      "The mechanism has a limit, and it is labour. A contractor cannot double its workforce in a year without hurting productivity, and the trades with data-centre experience are a small pool. The company can grow revenue by taking larger projects and by prefabricating more work off site, but each of those is a way of stretching the same constraint rather than removing it.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 23.1% a year across the fiscal years in the data, and the latest quarter grew 53.7% to $3.77B. The sequential growth has been relentless: $2.17B, $2.45B, $2.65B, $2.87B, $3.27B, $3.77B across six quarters. That is roughly 74% growth in eighteen months, achieved by hiring and organising people.",
      "The attributed consensus expects $3.82B next quarter and $3.81B the quarter after, which is essentially flat against the $3.77B just reported. Then $13.72B for the fiscal year and $17.34B next year, with EPS of $50.73 and $67.08. The quarterly estimates are the interesting part: the professional forecast is that the sequential growth stops almost immediately, while the annual numbers still assume a strong year.",
      "The drivers are data-centre construction, manufacturing investment and grid work. The brakes are the ones a contractor always faces: a project delay moves revenue by a quarter, a labour shortage raises cost faster than price, and a pause in data-centre commitments would leave crews with less work than the overhead requires.",
    ],
    bullets: [
      {
        title: "Data-centre fit-out",
        detail:
          "Cooling, piping and electrical distribution for new halls. The largest single driver of the recent growth.",
      },
      {
        title: "Industrial and manufacturing",
        detail:
          "Plant construction and expansion. Cyclical, but less concentrated than a handful of hyperscale campuses.",
      },
      {
        title: "Service work",
        detail:
          "Maintenance on the installed base. Grows with the number of buildings the company has worked on.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows consistent improvement rather than a single jump. Operating income was $188.4M, $253.8M, $418.4M, $749.4M and $1.31B across the five fiscal years, on revenue of $3.07B, $4.14B, $5.21B, $7.03B and $9.10B. The margin rose every year, which is unusual for a contractor and suggests the improvement is structural rather than a single good project.",
      "Return on equity is 55.5% and return on invested capital 211.8%. The second number is extreme because a contractor needs very little invested capital: offices are leased, equipment is a small part of the cost, and the work is done on the customer's site. A high return on a small capital base is a real feature of the model, and it also means the return is fragile, because it depends on margin rather than on asset efficiency.",
      "The quarterly operating margins have flattened at a high level: 13.8%, 15.5%, 16.1%, 17.0%, 17.1% and 16.6%. The last three quarters are within half a point of each other, which suggests the company has found a level rather than continuing to expand. Whether that level holds is the central question in the valuation.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $2.44B over the trailing period, 19.5% of revenue, which is higher than the 13.0% net margin. For a contractor this is not a quirk: customers pay on progress, while the company pays its labour weekly and its subcontractors on terms. When the backlog is growing, cash arrives before the cost is settled, so reported cash flow exceeds reported profit.",
      "The annual history shows the effect clearly. Free cash flow was $157.8M, $253.2M, $544.7M, $738.0M and $1.03B, roughly tracking net income but with a wider swing. In FY2023 free cash flow of $544.7M was well above net income of $323.4M, which is what a rapidly growing backlog does to a contractor's bank account.",
      "The balance sheet holds $2.16B of net cash against a $35.60B market capitalisation. That is about 6% of the market value, and it is the buffer that lets the company hire ahead of projects and absorb a slow quarter without borrowing. The flip side is that the cash flow reverses when the backlog stops growing, and a reader should not annualise the current free cash flow as if it were permanent.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $1,017.50 the shares trade at 21.8x trailing earnings, 15.2x EV/EBITDA and 2.7x sales, with a price to free cash flow of 14.6x and a 6.9% free cash flow yield. Those are modest multiples for a company that just grew revenue 50.7%, and the cash flow multiple is the lowest in this coverage set by a wide margin.",
      "The reason is that the market does not believe the growth is permanent. A contractor trading at 2.7x sales is being valued as a project business with a cycle, not as an infrastructure compounder. The 21.8x earnings multiple on peak margins is roughly the same multiple the market gives a mid-cycle industrial, which implies the market expects margins to normalise.",
      "The arithmetic is unforgiving in both directions. If the 16.7% operating margin holds and revenue reaches the $17.34B consensus next year, earnings rise substantially and the current multiple looks low. If margin reverts to the 8% that a contractor might earn in a normal market, earnings halve on the same revenue and the multiple doubles. The price is a bet on the margin, not on the revenue.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts contribute to the attributed consensus, with a mean target of $1,820.56 and a range of $1,050.00 to $2,053.00. The mean is 79% above the last close of $1,017.50, and even the low end is slightly above it. As with several names in this group, the professional view and the traded price are describing different companies.",
      "The estimates are $3.82B of revenue and $13.96 of EPS next quarter, $3.81B and $13.85 the quarter after, $13.72B and $50.73 for the fiscal year, and $17.34B and $67.08 for the next. The flat sequential revenue in the near term, alongside 26% annual growth next year, is a contradiction that the quarterly estimates resolve only if a large project starts in the second half. These are third-party forecasts and should be treated as a scenario.",
    ],
  },
  risks: {
    intro:
      "Comfort Systems' risks are labour, project concentration and the durability of a margin that has risen every year for five years.",
    items: [
      {
        title: "Skilled labour",
        severity: "High",
        detail:
          "The constraint on growth is the number of qualified tradespeople. Hiring faster than the market can supply them raises cost and reduces productivity.",
        watch:
          "Headcount growth, revenue per employee and any commentary on labour availability.",
      },
      {
        title: "Margin normalisation",
        severity: "High",
        detail:
          "Operating margin rose from 6.1% to 16.7% in five years. Pricing power from a capacity-constrained market is not a permanent condition.",
        watch:
          "Gross margin on new awards and the operating margin each quarter.",
      },
      {
        title: "Project concentration",
        severity: "Medium",
        detail:
          "A small number of very large data-centre projects can dominate a quarter. A delay moves revenue and profit between periods.",
        watch:
          "Backlog disclosure and the size of the largest projects.",
      },
      {
        title: "Fixed-price contract risk",
        severity: "Medium",
        detail:
          "Contracts are priced before the work is done. Labour or material inflation during the build is borne by the contractor.",
        watch:
          "Gross margin on projects in progress and any cost overrun disclosure.",
      },
      {
        title: "Cash flow reversal",
        severity: "Medium",
        detail:
          "Free cash flow of 19.5% of revenue depends on a growing backlog. When growth stops, the working capital unwinds and cash flow falls even if profit holds.",
        watch:
          "The gap between net income and operating cash flow as backlog growth slows.",
      },
    ],
    watchlist: [
      {
        title: "Sequential revenue",
        detail:
          "Six quarters of growth and now a consensus for flat. The next two quarters test that.",
      },
      {
        title: "Operating margin",
        detail:
          "Three quarters within half a point suggests a plateau. A decline would be the first crack.",
      },
      {
        title: "Backlog",
        detail:
          "The leading indicator for a contractor, and the thing that makes the cash flow look better than the earnings.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Comfort Systems is a mechanical and electrical contractor with $12.54B of trailing revenue, a 16.7% operating margin, $2.44B of free cash flow and $2.16B of net cash. It has grown revenue fourfold and nearly tripled its margin since FY2021, which is an exceptional outcome for a business built on labour.",
      "The educational point is that the AI build-out does not only reward chip designers. It also rewards whoever can install the cooling and the cable, and the scarcity there is human rather than technical. That scarcity explains both the growth and the margin, and it is the reason the multiple is low: the market knows that a scarce labour pool eventually attracts more labour.",
      "What is not known is how much of the margin is pricing power versus mix, how concentrated the backlog is in a few campuses, and whether the flat sequential estimates are a pause before a large project or the beginning of a plateau. The data-centre build-out is clearly part of this business; it is not the whole of it, and it will not last forever.",
    ],
    questions: [
      "What share of revenue comes from data-centre projects rather than industrial and commercial work?",
      "How much of the margin expansion is price rather than productivity?",
      "Why do the quarterly estimates imply flat revenue while the annual estimate implies 26% growth?",
      "How much of the $2.44B of free cash flow would remain if the backlog stopped growing?",
    ],
  },
};
