import type { StockStory } from "./types";

export const RDDT: StockStory = {
  ticker: "RDDT",
  kicker: "Consumer & Brands · Social platforms and advertising",
  title: "Reddit sells attention it did not have to create",
  dek: "Communities write the content, moderators enforce the rules, and advertisers pay for the audience. A 91.5% gross margin and a 38.8% free-cash-flow margin explain why the stock once traded at $263 and now trades near $95.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $3.09B, up 62.2%, at a 91.5% gross margin.",
    "Free cash flow was $1.20B, a 38.8% margin, with almost no capital spending.",
    "Operating margin expanded from 13.6% in Q2 FY25 to 29.2% in Q3 FY26.",
    "The shares are down 48.2% in a year and sit 3% above the 52-week low, at 4.8x sales.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000022/rddt-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001713445&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Reddit is a collection of thousands of interest-based communities where users post links, images, questions and opinions, and other users vote and reply. The company does not pay for most of that content. Users create it, volunteer moderators police it, and the platform earns money by placing advertising against the resulting pages.",
      "The economics of that arrangement are extraordinary. Gross margin was 91.5%, operating margin 29.4% and free cash flow $1.20B on $3.09B of revenue, a 38.8% margin. There is no content library to license and no delivery fleet to run. The costs are computing, people and sales.",
      "The stock tells a different story. At $95.10 the shares are down 48.2% over one year and sit just above the 52-week low of $89.28, against a high of $263.50. The business grew 62.2% and the shares halved, which means the market is repricing the durability of the growth rather than the growth itself.",
    ],
    quote:
      "A platform that relies on volunteers for content and on search engines for traffic has two suppliers it does not control. That is the tension behind the numbers.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a website and app organised around sub-communities, each with its own topic, rules and culture. A user can follow a community, comment, vote and post. The format produces long comment threads that are unusually useful for specific questions, which is why Reddit pages rank well in search results.",
      "Revenue comes mostly from advertising: brands pay to place promoted posts and display ads in front of the audience. A smaller line comes from licensing the archive of posts and comments to other companies that want conversational data. Both lines monetise the same asset, which is the corpus of user-generated discussion.",
      "The company was founded in 2005 and is based in San Francisco. It is majority-owned by Advance Publications, which is a governance fact worth knowing because it affects how much control public shareholders have. The brief does not break revenue by geography or product, so the mix has to be read qualitatively.",
    ],
    bullets: [
      {
        title: "Advertising",
        detail:
          "Promoted posts and display inventory sold against community pages. The main revenue line and the main growth lever.",
      },
      {
        title: "Data licensing",
        detail:
          "Selling access to the archive of public posts for training and research. High margin, but concentrated in a few large buyers.",
      },
      {
        title: "Communities",
        detail:
          "The supply side. Users and volunteer moderators create and curate the content that attracts the audience.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Reddit sells ad inventory on a cost-per-impression or auction basis. Revenue is therefore the product of how many ads are shown and what advertisers pay for each one. Both variables have room to grow: the company can show more ads per session, and it can improve targeting so that each ad is worth more.",
      "The cost of serving an extra page is small, which is why gross margin is 91.5%. The operating cost base is mostly research and development, sales and marketing, and the compute needed to run the site. Those costs are largely fixed in the short term, so incremental revenue drops through at a high rate. That is exactly what happened: operating margin rose from 13.6% in Q2 FY25 to 29.2% in Q3 FY26.",
      "The weakness in the model is that the content and the traffic are not fully owned. Users can leave, moderators can protest, and search engines can change how prominently Reddit pages appear. A platform that depends on external referral traffic is exposed to decisions made by another company.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 65.5% a year from $804.0M in FY2023 to $2.20B in FY2025. Quarterly revenue went from $499.6M in Q2 FY25 to $895.0M in Q3 FY26, up 53.0% year over year. Growth at that rate on a base of $3B is rare for an advertising business.",
      "The growth came from three places: more users, more ad impressions per user, and a higher price per impression as the ad product improved. The brief does not separate them, but the pattern of operating margin expansion alongside revenue growth suggests the company is getting more out of the audience it already has, not just adding new people.",
      "Third-party estimates call for $3.38B of revenue and $5.48 of EPS this fiscal year, then $4.36B and $6.86 next year. That implies about 29% revenue growth next year, a big step down from 62.2%. The estimates are the market's way of saying the easy expansion is done.",
    ],
    bullets: [
      {
        title: "Ad load and format",
        detail:
          "More ads per session and new formats such as video and promoted posts raise revenue per user.",
      },
      {
        title: "Advertiser demand",
        detail:
          "Better targeting and measurement make Reddit inventory more valuable to brand and performance advertisers.",
      },
      {
        title: "Data licensing",
        detail:
          "A small line today, but it monetises the archive at almost pure margin.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is short and dramatic. Reddit lost $140.2M at the operating line in FY2023 and $560.6M in FY2024 before earning $442.0M in FY2025. The FY2024 loss was driven by share-based compensation tied to the company becoming public, a non-cash charge that does not reflect the underlying economics.",
      "Once that charge annualised out, the operating leverage showed up quickly. Operating margin went from 13.6% in Q2 FY25 to 23.7% in Q3 FY25, 31.9% in Q4 FY25, then 27.6%, 28.8% and 29.2% across the first three quarters of FY26. The margin has plateaued in the high twenties rather than continuing to climb.",
      "Return on equity was 37.4% and return on invested capital 308.4%. The ROIC figure is extreme because the business needs almost no invested capital; it is a useful illustration of an asset-light model rather than a meaningful comparison with a manufacturer.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.20B, a 38.8% margin, and the annual path went from negative $84.8M in FY2023 to positive $215.8M in FY2024 and $684.2M in FY2025. Advertising is a prepaid or short-cycle business, so cash arrives close to when the revenue is recognised.",
      "The balance sheet holds $1.74B of net cash, or net debt to EBITDA of negative 1.9x. That is roughly a tenth of the market capitalisation. It gives the company room to invest in ad technology and to absorb a slowdown without cutting the product.",
      "Capital expenditure is minimal because the company rents computing capacity rather than building data centres. The cash flow statement is therefore a good approximation of the profit the business generates, which is unusual for a company growing this fast.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $95.10 the shares trade at 22.6x trailing earnings, 16.2x EV/EBITDA, 4.8x sales and 13.9x free cash flow, with a 7.2% free-cash-flow yield. The free-cash-flow multiple is the most striking: 13.9x for a business growing revenue 62.2% is a valuation normally associated with a mature media company.",
      "The sales multiple of 4.8x is higher than CAVA at 4.2x and DUOL at 4.3x, but Reddit's gross margin of 91.5% and free-cash-flow margin of 38.8% are in a different league. On cash flow, the shares are cheaper than every name in the peer table.",
      "The market is discounting something. Either it expects growth to fall sharply as the base matures, or it fears that search referral traffic or advertiser demand could reverse. A 13.9x free-cash-flow multiple says the market does not believe the current cash flow is durable. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 29 analysts with a mean target of $151.05 and a range of $100.00 to $272.00. The mean is 59% above the share price, one of the widest gaps in the peer set, and the low end of the range is still above the current price.",
      "Estimates call for $3.38B of revenue and $5.48 of EPS this fiscal year, then $4.36B and $6.86. For the next quarter the consensus is $1.03B of revenue and $1.82 of EPS. The following quarter is expected to produce $872.5M and $1.24, a sequential decline that reflects seasonality in the advertising calendar.",
      "A mean target far above the share price is not a prediction. It usually means the analysts are anchored to a growth trajectory the market has stopped believing. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "Reddit's income statement is excellent and its balance sheet is clean. The risks are structural: who supplies the content, who supplies the traffic, and whether advertisers keep paying more each year.",
    items: [
      {
        title: "Search referral dependence",
        severity: "High",
        detail:
          "A large share of visitors arrive from search results. A change in how those results are ranked would reduce traffic and ad inventory without warning.",
        watch: "Logged-out traffic trends and referral sources.",
      },
      {
        title: "Advertiser concentration and cycle",
        severity: "High",
        detail:
          "Advertising budgets are the first thing cut in a downturn. A small number of large advertisers can also influence pricing.",
        watch: "Revenue per user, ad impressions and the count of active advertisers.",
      },
      {
        title: "Community governance",
        severity: "Medium",
        detail:
          "Volunteer moderators can restrict access or protest policy changes. The content supply depends on their goodwill.",
        watch: "Community engagement and moderator relations.",
      },
      {
        title: "Data licensing concentration",
        severity: "Medium",
        detail:
          "The licensing line depends on a few large buyers whose contracts can change or lapse.",
        watch: "Disclosure of licensing revenue and contract renewals.",
      },
      {
        title: "Valuation reset",
        severity: "Medium",
        detail:
          "A 48.2% one-year decline shows how quickly the market can reprice a high-growth platform. Further multiple compression is possible even if revenue grows.",
        watch: "Forward revenue estimates against the sales multiple.",
      },
    ],
    watchlist: [
      {
        title: "Revenue per user",
        detail:
          "The cleanest measure of whether the ad product is improving or just riding user growth.",
      },
      {
        title: "Operating margin",
        detail:
          "It has plateaued near 29%. A decline would suggest costs are growing faster than revenue again.",
      },
      {
        title: "Traffic sources",
        detail:
          "The share of visits that arrive directly versus through search determines how exposed the business is.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Reddit is a high-margin, asset-light advertising platform with $3.09B of revenue, a 91.5% gross margin and $1.20B of free cash flow. The operating leverage between FY2025 and FY2026 was dramatic and appears to have settled in the high twenties.",
      "The valuation is the puzzle. At 13.9x free cash flow and 4.8x sales, the shares are priced as if growth is about to halve and the margin is at a peak. The analysts disagree, with a mean target 59% above the price. Both views can be defended, and the difference is entirely about durability.",
      "Where the visitors come from, how much of revenue depends on a handful of advertisers, and whether the licensing line is durable: those determine whether the current cash flow deserves a media multiple or a growth multiple.",
    ],
    questions: [
      "What share of traffic arrives through search engines rather than directly?",
      "How much of revenue comes from the top advertisers?",
      "Is the data licensing line growing, and how concentrated is it?",
      "Why has operating margin stopped expanding at around 29%?",
    ],
  },
};
