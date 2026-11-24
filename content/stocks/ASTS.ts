import type { StockStory } from "./types";

export const ASTS: StockStory = {
  "ticker": "ASTS",
  "kicker": "Space · Direct-to-device satellite broadband",
  "title": "AST SpaceMobile is building a cell tower the size of a satellite",
  "dek": "Revenue is real but small next to the capital being spent: $115.3M of sales, a -698.8% operating margin and $683.7M of net debt after a $1.6B cash burn.",
  "readingMinutes": 9,
  "takeaways": [
    "Capital spending of $1.1B in FY2025 dwarfed revenue of $70.9M, and trailing free cash flow was minus $1.6B.",
    "Trailing revenue of $115.3M grew 2,256.9%, a rate that says more about the base than about demand.",
    "Net cash of $1.6B against a $10.4B market value leaves the equity priced on a network that is still being built.",
    "Twelve analysts split five positive, six neutral and two cautious, the most divided coverage in the group."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1780312/000178031226000006/asts-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001780312&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Capital spending of $1.1B in FY2025 dwarfed AST SpaceMobile's $70.9M of revenue that year. The constellation is being built before it carries meaningful traffic, so the income statement is a record of construction rather than of operations. Q2 FY2026 revenue of $31.5M against an operating margin of minus 948.0% is the same picture: costs arrive years before the capacity they create is sold. That gap is the capital that has to be deployed before the business can be judged on anything other than construction progress.",
      "The commercial model is wholesale. Mobile network operators own the subscriber and the spectrum, and they would hand traffic to the satellite network where a phone cannot see a tower. That avoids building a consumer brand, but it also means AST does not set retail prices and depends on partners to market the service. The satellites carry unusually large antennas, the company manufactures them itself, and ground gateways connect the constellation to terrestrial core networks.",
      "The equity is valued at $10.4B, or 76.0x trailing sales, with $1.6B of net cash on the balance sheet. The multiple is not a claim about current revenue; it is a claim about the revenue a completed constellation could generate. Rocket Lab at 40.8x and Intuitive Machines at 3.6x bracket the range of space valuations, and AST sits at the top of that range on the smallest revenue base, which is the whole valuation argument in one comparison."
    ],
    "quote": "A satellite network is a factory built in orbit, and the revenue arrives only after the capital has left."
  },
  "whatItDoes": {
    "paragraphs": [
      "The service is aimed at places where terrestrial coverage stops: rural areas, ships, aircraft and disaster zones. AST SpaceMobile does not plan to sell to consumers directly. The commercial model runs through mobile network operators, which already own the billing relationship and the spectrum rights, and which would hand traffic to the satellite network when a phone cannot see a tower.",
      "Building that requires three things at once: satellites with unusually large antennas, launch capacity to put them in orbit, and ground gateways that connect the constellation to terrestrial networks. The company manufactures its satellites itself, which gives it control over cost and design changes but also means factory throughput becomes a constraint on how fast the network grows."
    ],
    "bullets": [
      {
        "title": "SpaceMobile satellites",
        "detail": "Large-antenna spacecraft designed to connect standard handsets directly, without a special device or terminal."
      },
      {
        "title": "Mobile operator partners",
        "detail": "Wholesale distribution. The operator keeps the subscriber; the satellite network supplies coverage the tower network cannot."
      },
      {
        "title": "Ground segment",
        "detail": "Gateways and network integration that route traffic between the constellation and terrestrial core networks."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The intended revenue model is wholesale: operators pay for capacity or share the revenue from subscribers who roam onto the satellite network. That is attractive because it avoids building a consumer brand, but it also means AST SpaceMobile does not set retail prices and depends on partners to market the service.",
      "Costs behave very differently from revenue. Satellites are built and launched years before they carry meaningful traffic, and each one depreciates whether or not it is full. Ground infrastructure and engineering are largely fixed. The result is that costs arrive first and revenue arrives later, which is exactly what a -698.8% operating margin looks like.",
      "The reported gross margin of 34.5% should not be read as a steady-state number. With the constellation incomplete and revenue lumpy, it mostly reflects the cost of the work recognised in the period rather than the economics of a finished network."
    ]
  },
  "growth": {
    "paragraphs": [
      "Deployment, not pricing, is the growth variable. Each satellite adds capacity over a coverage area, and the constellation only becomes commercially useful once enough are in orbit. That is why revenue went from $14.7M in Q3 FY2025 to $54.3M in Q4 and then back to $14.7M in Q1 FY2026: the line follows deployments and the recognition of work, not a smooth subscriber curve.",
      "The FY2026 estimate of $166.0M is 134.1% above FY2025, and FY2027 is estimated at $585.7M, another 252.7%. Those numbers assume a step-up in satellites and in operator traffic, and they are large relative to the $115.3M trailing base. Revenue per satellite and capacity per satellite are not disclosed, so the estimates cannot be tested against a unit metric. That is the weakest link in the forecast: a revenue estimate without a unit metric is a schedule assumption dressed as a financial one.",
      "Durability depends on the operators switching the service on rather than signing agreements. A wholesale model concentrates revenue in a few partners, and each partner's marketing decision affects utilisation. Regulatory approval is country by country, which adds a second gate. The growth rate is therefore a function of deployment, activation and spectrum access, in that order. Each gate can slip independently, and a slip in any one of them pushes the revenue out without reducing the capital already committed."
    ],
    "bullets": [
      {
        "title": "Satellite deployment",
        "detail": "Capacity arrives with each satellite; the constellation needs a critical mass before the service is commercially usable."
      },
      {
        "title": "Operator partnerships",
        "detail": "Wholesale distribution avoids a consumer brand but leaves pricing and marketing to partners who control the subscriber."
      },
      {
        "title": "Spectrum and regulation",
        "detail": "Approval is country by country, so addressable coverage expands one market authorisation at a time."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The 34.5% gross margin is a cost-recognition artefact, not a guide to the economics of a finished network. With the constellation incomplete and revenue lumpy, the figure reflects the cost of work recognised in the period. The operating margin of minus 698.8% is the more honest measure: fixed engineering, ground infrastructure and depreciation against a small revenue base. Depreciation on a constellation that is not yet earning revenue is the mechanism that keeps the margin deeply negative.",
      "The quarterly operating margins have moved between minus 175.0% and minus 1,685.9% over the past year, which is what happens when the denominator swings by a factor of four. The loss per share was $0.77 in Q2 FY2026 and $7.79 in Q4 FY2025, a range wide enough to make any single quarter a poor guide. The variation comes from revenue timing as much as from operating costs, which is why the annual figure carries little information.",
      "Return on invested capital of minus 11.9% is flattered by the cash and satellites on the balance sheet; return on equity of minus 25.8% is the cleaner measure of the loss against the equity that funded it. Until the constellation is complete, the margin is really a capital-construction measure, and it will stay meaningless. The only performance measure that will matter is revenue per satellite once the network is live, and that is not yet reported."
    ]
  },
  "cash": {
    "paragraphs": [
      "The FY2025 cash outflow of $1.1B was almost entirely satellite capital expenditure. Operating cash flow was minus $71.5M, so the business consumed relatively little cash in its operations; the capital programme did the rest. That distinction matters because operating spend can be slowed, while a satellite that is half-built is not a discretionary item. A capital programme of that size is a fixed commitment, and it is the reason the cash-flow statement looks so different from the income statement.",
      "Twelve-month cash generation is minus $1.6B, and net cash is $1.6B, which implies the company raised several billion dollars during the period. The balance sheet is therefore a financing machine as much as an operating one. The capital return is negative by construction while the network is under construction, and no distribution is contemplated. The size of the raise relative to the revenue base is the clearest statement of how early the business is.",
      "The question is the next raise. At the current burn, the cash balance covers a finite number of quarters, and the timing of the next financing depends on the launch schedule. A delay pushes revenue out and brings the raise forward, which is the mechanism that makes launch execution a financial variable rather than an operational one. That is why the launch schedule and the financing calendar have to be read together rather than separately."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Seventy-six times sales values a network that is still being built. The comparison with Rocket Lab at 40.8x and Intuitive Machines at 3.6x shows how widely the market prices space businesses, and the spread tracks revenue quality: Intuitive has government contract revenue, Rocket Lab has a commercial launch and components business, and AST has a construction project with early service revenue.",
      "On FY2027 revenue of $585.7M the multiple falls to roughly 18x, which is still a growth multiple but no longer an extreme one. That is the arithmetic the market is underwriting: if the constellation is complete and the operators are live, the revenue base justifies a smaller multiple. If the deployment slips, the FY2027 estimate moves out and the multiple stays high.",
      "What would justify the multiple is evidence of satellites launched on schedule and operators reporting traffic, which would convert the capital spend into a revenue-generating asset. What would break it is another equity raise at a lower price, because the dilution would land before the revenue and the market would reprice the probability of completion. Either outcome would be decided by deployment data rather than by a change in the sales multiple."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The mean target of $63 against a $26 share price implies a large re-rating, but the range of $39 to $108 shows how widely the views diverge. The cautious minority is unusual in a group where most coverage sits at the positive end.",
      "Estimates dated 18 November 2026 and attributed to Yahoo Finance, cross-checked with Nasdaq, put FY2026 revenue at $166.0M with a loss of $2.29 per share, then FY2027 revenue at $585.7M with a loss of $1.65. The 90-day EPS revision is 0.5%, essentially unchanged, which means the estimates have not moved with the share price. The numbers embed a step-up in revenue that depends on deployment, not on pricing."
    ]
  },
  "risks": {
    "intro": "The risks here are capital and execution risks before they are competitive ones. The technology has been demonstrated in principle; the open question is whether it can be deployed fast enough to earn a return on the capital already committed.",
    "items": [
      {
        "title": "Launch and deployment schedule",
        "severity": "High",
        "detail": "The constellation only earns money once enough satellites are in orbit. A launch delay pushes revenue out while fixed costs continue.",
        "watch": "Satellites launched per quarter, satellite production rate and contracted launch slots."
      },
      {
        "title": "Financing",
        "severity": "High",
        "detail": "Free cash flow of -$1.6B and $683.7M of net debt mean the company depends on continued access to capital.",
        "watch": "Cash balance, debt maturities, interest cost and share count."
      },
      {
        "title": "Regulatory and spectrum access",
        "severity": "High",
        "detail": "Satellite coverage needs permission in each country and coordination with terrestrial spectrum holders. Approval is country by country.",
        "watch": "New market authorisations and the number of operators able to market the service."
      },
      {
        "title": "Capacity economics",
        "severity": "Medium",
        "detail": "A satellite covering a large area shares a limited amount of throughput among many users. Revenue per satellite depends on how much traffic it can actually carry.",
        "watch": "Disclosed capacity per satellite and usage per covered market."
      },
      {
        "title": "Competition",
        "severity": "Medium",
        "detail": "Terrestrial build-out, other direct-to-device constellations and incumbent satellite operators all compete for the same coverage gap.",
        "watch": "Operator partnerships, pricing terms and competing service launches."
      }
    ],
    "watchlist": [
      {
        "title": "Satellites in service",
        "detail": "The count of working satellites is the real production metric; revenue follows it with a lag."
      },
      {
        "title": "Cash and debt",
        "detail": "Track the split between equity raised and borrowings, because debt adds a fixed claim ahead of shareholders."
      },
      {
        "title": "Operator launches",
        "detail": "Signed partners are not revenue until service is switched on in their markets."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "AST SpaceMobile has a plausible product, a small amount of early revenue and a very large capital requirement. The trailing numbers — $115.3M of revenue, a -698.8% operating margin, -$1.6B of free cash flow and $683.7M of net debt — describe a company still in construction.",
      "The point to carry away is that revenue growth of 2256.9% tells you almost nothing when the base was near zero. What matters is the absolute revenue, the cost per satellite, the capacity each satellite adds and the price operators pay for it.",
      "Two facts are unknown and decisive: how many satellites must be in orbit before service is commercially usable, and how the next round of financing is structured. The balance sheet, not the income statement, will determine the outcome from here."
    ],
    "questions": [
      "How much revenue does one satellite generate per year once the network is live?",
      "What share of the $1.6B burn is satellites and what share is launch?",
      "How many operators have actually switched the service on rather than signed an agreement?",
      "What does the debt cost, and when does it mature?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
