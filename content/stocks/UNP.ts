import type { StockStory } from "./types";

export const UNP: StockStory = {
  ticker: "UNP",
  kicker: "Industrials · Rail transportation",
  title: "Union Pacific is a fixed-cost network that earns more with every carload",
  dek: "Once the track and the locomotives are paid for, an extra train is almost pure contribution. That is why the operating ratio, not the revenue line, is the scoreboard for a railroad.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $26.4B, up 7.4%, at a 40.1% operating margin and a 28.9% net margin.",
    "Free cash flow was $6.7B, a 25.4% margin, against $27.2B of net debt at 2.1x EBITDA.",
    "Revenue was $24.5B in FY2025, barely above the $24.1B of FY2023, so the recent growth is a recovery rather than a trend.",
    "The shares returned 35.9% over the past year and 35.5% over five years, which means all of the five-year return arrived in the last twelve months.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/100885/000010088526000037/unp-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000100885&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Union Pacific operates a freight railroad across nearly 20 states in the western United States, hauling bulk commodities, industrial inputs, intermodal containers and automotive freight. It owns the track, the locomotives, the terminals and the land under them, and it employs the crews that run the network.",
      "That ownership structure produces the economics. Revenue was $26.4B on a trailing basis, up 7.4%, with an operating margin of 40.1% — an operating ratio near 60%. Free cash flow was $6.7B and net income worked out to about $7.6B, which tells you the business converts most of its profit into cash after funding the track.",
      "At $290.16 the market value is $172.4B, or 22.6x trailing earnings and 15.2x EV/EBITDA. The shares sit about 74% of the way up a 52-week range of $216.32 to $315.99. Net debt is $27.2B, or 2.1x EBITDA — a normal load for a railroad, and one that the cash flow covers comfortably.",
    ],
    quote:
      "A railroad is a bet on the economy it crosses. The track cannot move, so the only levers are what it carries, what it charges and how efficiently it runs.",
  },
  whatItDoes: {
    paragraphs: [
      "Freight falls into three broad groups. Bulk covers coal, grain, grain products, fertiliser and rock, moved in trainloads from mine or farm to port or plant. Industrial covers chemicals, plastics, metals, minerals, forest products and petroleum products, much of it moving between refineries, mills and factories. Premium covers intermodal containers and trailers, plus automotive, where speed and reliability matter more than the lowest rate per ton.",
      "Each group behaves differently. Bulk volumes follow harvests, energy demand and export prices. Industrial volumes track factory output and chemical production. Intermodal competes directly with trucking and depends on port activity, retail inventories and the price of diesel. Automotive follows vehicle production schedules.",
      "The network is the product. A shipper chooses rail when the load is heavy, the distance is long and the schedule can tolerate a longer transit. That makes rail dominant in bulk and industrial commodities and marginal in high-value, time-sensitive freight, which is why intermodal is the segment most exposed to trucking competition and the one where service quality matters most.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a function of three things: volume, revenue per car and fuel surcharges. Volume moves with the economy. Revenue per car moves with price increases, mix and the length of haul. Fuel surcharges pass diesel costs through with a lag, so a sharp move in fuel prices shows up as a revenue and cost swing rather than as a margin change.",
      "The cost base is largely fixed in the short run. Track maintenance, locomotive ownership, terminals and crews are committed whether the railroad runs 90 trains a day or 110. That is why incremental volume is so valuable: once the network is running, each extra carload contributes most of its revenue to operating profit. It is also why a volume decline hurts disproportionately.",
      "The operating ratio is the summary of all of this. At a 40.1% operating margin, roughly 60 cents of every revenue dollar goes to running the railroad. Small changes in that ratio move profit far more than the same percentage change in revenue, which is why management teams focus on crew productivity, terminal dwell and locomotive utilisation rather than on growth alone.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual record is flat: revenue was $21.8B in 2021, $24.9B in 2022, $24.1B in 2023, $24.3B in 2024 and $24.5B in 2025. Four years of essentially no growth, with coal declining and intermodal and industrial volume offsetting it.",
      "The recent quarters look much better: $6.22B, $6.86B and $7.20B in the first three quarters of FY26, with the latest up 15.3% year over year. That is a recovery from a weak prior-year period plus some volume growth, not a new trend line. The attributed consensus expects $27.4B of revenue and $13.17 of EPS this fiscal year, then $29.0B and $14.39 next year.",
      "The realistic drivers are price, intermodal conversion from truck, and industrial volume. Rail pricing has tended to run at or above inflation because the alternative for many bulk shippers is a truck that costs more per ton-mile. Intermodal growth depends on service reliability and on the cost gap with trucking. The constraint is capacity: adding track or terminals is expensive and slow, so volume growth has to come from productivity on the existing network.",
    ],
    bullets: [
      {
        title: "Price",
        detail:
          "Contract renewals reset rates once a year. Because rail has no close substitute for heavy bulk freight, price tends to hold up even when volume does not.",
      },
      {
        title: "Intermodal conversion",
        detail:
          "Every container that moves from truck to rail adds volume without adding track. It depends on service quality and on the diesel price gap.",
      },
      {
        title: "Network productivity",
        detail:
          "Longer trains, faster terminal turns and better locomotive utilisation lower the operating ratio without any revenue growth.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has been remarkably stable: 41.0%, 40.8%, 39.5%, 39.5%, 40.3% and 40.9% over the last six quarters. That stability is the point. A railroad with a fixed network and a mature cost programme tends to hold its margin unless volume collapses or a service problem forces extra crews and locomotives into the network.",
      "The annual figures show the same pattern. Operating income was $9.3B in 2021, $9.9B in 2022, $9.1B in 2023, $9.7B in 2024 and $9.9B in 2025, on revenue that moved by less than $1B a year. Earnings growth has come from cost control and buybacks rather than from the top line.",
      "Diluted EPS was $12.83 trailing, up from $3.01 in Q3 FY25 to $3.49 in Q3 FY26 on a quarterly basis. Return on equity is 34.6% and return on invested capital is 16.9%. The gap between the two is leverage and buybacks: the railroad earns a mid-teens return on the capital tied up in track and equipment, and the equity return is amplified by debt and a shrinking share count.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $6.7B, a 25.4% margin, against net income of roughly $7.6B. The shortfall is capital spending on track, locomotives and terminals, which is the permanent cost of owning a network. A railroad that stops investing saves cash for a few years and then pays for it with slower trains and more breakdowns.",
      "Net debt of $27.2B at 2.1x EBITDA is investment-grade leverage. The debt is long-dated and raised against a network that cannot be replicated, which is why railroads can carry it at a low cost. The interest bill is a fixed charge that the cash flow covers several times over.",
      "The dividend yield is 1.9%, and buybacks absorb much of the rest of the free cash flow. At 25.8x free cash flow and a 3.9% FCF yield, the shares are priced as a stable cash compounder rather than as a cyclical. That is a reasonable description of a railroad, as long as the volume base holds.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 22.6x trailing earnings and 15.2x EV/EBITDA, Union Pacific is valued close to Caterpillar (21.6x and 14.5x) and well below the electrical and aerospace names in this group. The comparison is imperfect: the peer table contains no other railroad, and railroads are valued on a different basis from manufacturers because their assets are irreplaceable and their cash flow is stable.",
      "The EV/Sales multiple of 7.6x reflects the 40% operating margin. A business that keeps 40 cents of every revenue dollar before interest and tax deserves a higher multiple of sales than one that keeps 12. The relevant comparison is EV/EBITDA, where 15.2x is a full but not extreme price for a network asset.",
      "The five-year return of 35.5% is the same as the one-year return of 35.9%, which means the shares did nothing for four years and then re-rated. That is a useful reminder that a stable business can still deliver a poor return if the entry multiple is too high.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the attributed consensus, with a mean target of $331.38 and a range of $245.00 to $375.00. The mean is above the latest close and the low end is below it, which is a more balanced distribution than some of the higher-growth names in this group.",
      "Estimates call for $27.4B of revenue and $13.17 of EPS this fiscal year, then $29.0B and $14.39 next year. The implied EPS growth of about 9% is faster than the implied revenue growth of 6%, so the estimate set assumes continued cost control and buybacks.",
      "Those are third-party forecasts, not a Stockmonk view. For a railroad, the estimates are usually more reliable than for an industrial because the volume base is visible and pricing is contractual; the uncertainty sits in the economy, not in the company.",
    ],
  },
  risks: {
    intro:
      "The network is durable and the balance sheet is sound. The risks are volume, service quality, regulation and the price paid for stability.",
    items: [
      {
        title: "Freight volumes",
        severity: "High",
        detail:
          "A recession cuts industrial and intermodal volume, and the fixed cost base turns that into a larger profit decline. Coal has also been shrinking for years.",
        watch:
          "Carloadings by segment, intermodal volume and industrial production.",
      },
      {
        title: "Service reliability",
        severity: "High",
        detail:
          "A railroad that runs late loses intermodal traffic to trucks and invites regulators to intervene. Recovery takes years and costs money.",
        watch:
          "Train speed, terminal dwell and customer satisfaction metrics.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Rate cases, crew-size rules and safety requirements can raise costs or cap pricing. The regulatory framework is a permanent feature of the industry.",
        watch:
          "Surface Transportation Board proceedings and any change in rate oversight.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Track and locomotive investment is unavoidable. Deferring it flatters free cash flow for a while and then raises the cost of running the network.",
        watch:
          "Capital expenditure as a share of revenue and the average age of the locomotive fleet.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 22.6x earnings and 15.2x EBITDA, the shares already price in stability. A volume disappointment would hit the multiple as well as the earnings.",
        watch:
          "The EV/EBITDA multiple against its own history and the direction of volume.",
      },
    ],
    watchlist: [
      {
        title: "Operating ratio",
        detail:
          "The single best summary of efficiency. A rising ratio while revenue grows means costs are out of control.",
      },
      {
        title: "Volume by segment",
        detail:
          "Intermodal and industrial carloads are the cyclical signal; coal is the structural decline.",
      },
      {
        title: "Service metrics",
        detail:
          "Train speed and dwell lead volume. Poor service shows up in the numbers before it shows up in the revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Union Pacific owns an irreplaceable network and earns a 40% operating margin on it. Revenue reached $26.4B, free cash flow $6.7B, and the balance sheet carries $27.2B of net debt at 2.1x EBITDA. The business is stable and cash-generative.",
      "What is not known is where volume goes. Revenue has been flat for four years, and the recent double-digit growth is measured against a weak comparison. If coal keeps declining and intermodal does not convert from truck, the top line stalls again and the earnings growth has to come entirely from cost and buybacks.",
      "The shares already trade at a full multiple for that stability. The reader should decide whether a fixed network with flat volume deserves 15.2x EBITDA, and what would have to change for the answer to be yes.",
    ],
    questions: [
      "How much of the recent revenue growth is volume versus price?",
      "Is intermodal gaining share from trucking, and at what rate?",
      "What is the operating ratio trend excluding fuel surcharges?",
      "How much capital spending is required just to stand still?",
    ],
  },
};
