import type { StockStory } from "./types";

export const UEC: StockStory = {
  ticker: "UEC",
  kicker: "Uranium · In-situ recovery and processing",
  title: "Uranium Energy's revenue arrives in batches, not quarters",
  dek: "Four of the last six quarters booked no revenue at all. The business is a licensed project portfolio geared to the uranium price, and the income statement shows it.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $37.3M, down 44.3% from $66.8M in FY2025.",
    "Four of the last six quarters reported zero revenue; the other two reported $20.2M and $17.1M.",
    "Gross margin is 45.4% but the operating margin is -357.4%, because the portfolio costs money whether or not it ships.",
    "Net cash of $454.7M sits against a $3.34B market value.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1334933/000143774926031414/uec20260731_10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001334933&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Uranium Energy Corp. explores for, extracts and processes uranium in the United States and Canada. It also owns titanium projects in Paraguay. The US assets are mostly in-situ recovery operations in Texas and Wyoming, where uranium is dissolved underground and pumped to the surface rather than mined from open pits, plus conventional projects in Arizona and Colorado and a Canadian property.",
      "The company is small in headcount and large in acreage: 63 employees against a portfolio of named projects. Its value does not come from a production line running at a steady rate. It comes from holding licensed, permitted ground and processing capacity that can be switched on when the uranium price justifies the cost of restarting wellfields.",
      "Trailing revenue is $37.3M, down 44.3%, and the operating loss is $133.1M. At $6.92 the market value is $3.34B, and the shares are 6% of the way up a 52-week range of $6.12 to $20.34 after a 43.4% decline over the year. Net cash of $454.7M is the other side of the ledger.",
    ],
    quote:
      "A uranium producer sells a commodity in deliveries. Revenue can be zero for two quarters and then $20M, and neither number tells you what the mine is worth.",
  },
  whatItDoes: {
    paragraphs: [
      "In-situ recovery is the core technology. Wells are drilled into a sandstone-hosted ore body, an oxygenated solution is circulated through it, and uranium-bearing water is drawn back to a central processing plant that concentrates the uranium into a transportable product. It disturbs far less ground than an open pit and costs less to build, but it only works in the right geology and it consumes wells as the ore body is mined out.",
      "The Texas and Wyoming projects are the hub-and-spoke part of the model: several wellfields feeding a shared plant. That structure spreads the fixed cost of the plant across more pounds, and it lets the company sequence production by turning individual wellfields on and off as prices move. Arizona and Colorado hold conventional projects that would need different infrastructure, and the Canadian property adds another jurisdiction.",
      "The Paraguayan titanium projects are a separate optionality. They are not uranium and would need their own development capital and offtake, which makes them a portfolio asset rather than part of the near-term uranium story.",
    ],
    bullets: [
      {
        title: "Texas",
        detail:
          "Palangana, Goliad, Burke Hollow, Longhorn and Salvo. In-situ recovery wellfields with shared processing capacity.",
      },
      {
        title: "Wyoming",
        detail:
          "Reno Creek, the largest single development asset in the portfolio and the anchor for a second production hub.",
      },
      {
        title: "Arizona, Colorado and Canada",
        detail:
          "Conventional projects and a Canadian property that add optionality and jurisdictional diversity but no near-term pounds.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The company sells uranium, either as a concentrate delivered under a contract or into the spot market. Gross margin was 45.4% on a trailing basis, which is a healthy spread between the cost of extracting and processing a pound and the price it fetches. That spread is the whole business: when the uranium price rises, existing wellfields become more profitable without any additional capital.",
      "The operating loss of $357.4% of revenue is the cost of holding the portfolio. A company with 63 employees still pays for exploration, permitting, environmental compliance and care and maintenance at projects that are not producing. Those costs do not scale down when revenue does, which is why FY2024, with $224,000 of revenue, produced a $56.4M operating loss.",
      "Contract structure determines how much of the price move the company keeps. Long-term contracts signed at lower prices cap the upside on committed volumes, while uncommitted pounds can be sold at spot. The mix between the two is the difference between a price taker and a business with visible revenue.",
    ],
    bullets: [
      {
        title: "Contracted pounds",
        detail:
          "Deliveries at agreed prices give revenue visibility but fix the economics of those pounds regardless of where spot trades.",
      },
      {
        title: "Spot exposure",
        detail:
          "Uncommitted production is sold at the market price, which is where the operating leverage comes from.",
      },
      {
        title: "Processing toll",
        detail:
          "Shared plants spread fixed cost across wellfields. Utilisation, not headcount, decides the cost per pound.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "The annual table is the clearest explanation of the business you will find. Revenue was $164.4M in FY2023, $224,000 in FY2024, $66.8M in FY2025 and $37.3M in FY2026. Those swings are not demand collapsing and recovering; they are the timing of deliveries and the decision of how much material to sell at a given price.",
      "The quarterly record repeats the pattern at a finer scale. Q3 FY25, Q4 FY25 and Q1 FY26 each reported zero revenue. Q2 FY26 reported $20.2M and Q3 FY26 zero again, then Q4 FY26 $17.1M. A reader who treated the zero quarters as a demand signal would have drawn three wrong conclusions in a year.",
      "Third-party estimates look for $63.6M this fiscal year and $177.2M next, with the loss per share narrowing from -$0.23 to -$0.07. That second year implies a substantial increase in deliveries, which requires wellfields to be restarted and the processing hubs to run closer to capacity.",
    ],
  },
  performance: {
    paragraphs: [
      "The margin structure is unusual and worth understanding. A 45.4% gross margin means the direct cost of producing a pound is less than half its selling price, which is a genuinely good position for a commodity producer. The operating margin of -357.4% means everything above the gross line — exploration, permitting, administration and the cost of idle assets — exceeds the gross profit several times over.",
      "FY2026 operating loss was $133.1M on $37.3M of revenue. In FY2023, when revenue was $164.4M, the company reported positive operating income of $8.9M. That is the operating leverage in one comparison: the same cost base produced a profit at $164.4M of revenue and a large loss at $37.3M.",
      "Return on equity is -10.5% and return on invested capital is -12.3%. Both reflect a large asset base relative to current production. For a resource company, the more useful question is what the assets would earn at a normal price and a normal production rate, not what they earned in a year with two deliveries.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$53.6M in FY2022, positive $72.0M in FY2023, -$108.5M in FY2024, -$69.9M in FY2025 and -$107.3M in FY2026. The positive year is the one where revenue spiked, which shows how quickly the cash flow profile flips when pounds are sold rather than stockpiled.",
      "Net cash is $454.7M, so the development spending is not currently constrained by debt. That cash also gives the company the option to hold inventory rather than sell at a low price, which is a real advantage in a commodity business but also means reported revenue can understate the value produced in a year.",
      "Capital expenditure goes into wellfield development, plant refurbishment and permitting. Those are the costs that convert a licensed project into producing capacity, and they are the reason the free cash flow line stays negative while production is being rebuilt.",
    ],
  },
  valuation: {
    paragraphs: [
      "With negative earnings there is no useful price-to-earnings multiple. EV/Sales of 77.6x is the number the market is quoting, and it is a poor guide for a company whose revenue depends on delivery timing.",
      "The framework that fits is resource-based: pounds in the ground and licensed capacity, multiplied by a uranium price, minus the cost to produce and the capital needed to get there. On that basis the $3.34B market value is a bet on the price of uranium and on the company's ability to restart production at a cost below it.",
      "The share price history supports that reading. A 52-week range of $6.12 to $20.34 and a 43.4% one-year decline alongside a 36.2% five-year gain is what a leveraged commodity equity looks like. Stockmonk does not publish a target price; the attributed consensus appears below as third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 11 analysts with a mean target of $16.03 and a range of $10.00 to $26.75. That is more than double the $6.92 close, which is a statement about expected uranium prices and production restarts as much as about the company.",
      "Coverage is thin once you move away from the annual numbers: two analysts contribute to the next-quarter revenue estimate of $9.5M and one to the following quarter's $10.9M. Five contribute to the current-year estimate of $63.6M of revenue and a loss of $0.23 per share, and five to next year's $177.2M of revenue and a loss of $0.07 per share.",
      "A mean target built on a handful of commodity-price assumptions should be read as one scenario among several. The dispersion between $10.00 and $26.75 is the honest measure of how uncertain the production ramp is.",
    ],
  },
  risks: {
    intro:
      "Uranium Energy's risks are the classic mining risks: commodity price, execution at the wellfield, permitting, and the cost of carrying assets that are not yet producing.",
    items: [
      {
        title: "Uranium price",
        severity: "High",
        detail:
          "A 45.4% gross margin at one price can become a loss at another. Utilities sign long-term contracts, so the price the company realises depends on when those contracts were signed.",
        watch:
          "The split between contracted and spot volumes, and the average realised price per pound.",
      },
      {
        title: "Restart and ramp execution",
        severity: "High",
        detail:
          "In-situ recovery wells decline and need continuous development. Restarting idle wellfields rarely goes exactly to plan, and each delay pushes revenue into a later quarter.",
        watch:
          "Wellfield development spending, produced pounds and any revision to production guidance.",
      },
      {
        title: "Delivery concentration",
        severity: "Medium",
        detail:
          "Revenue is booked when pounds are delivered. A single shipment moving by a few weeks can turn a good quarter into a zero-revenue quarter, as the last six quarters show.",
        watch:
          "Delivery schedules disclosed in the filing and the inventory position at each period end.",
      },
      {
        title: "Funding and dilution",
        severity: "Medium",
        detail:
          "The portfolio consumes cash while it is being rebuilt. Net cash of $454.7M helps, but a long ramp with negative free cash flow can still require new equity.",
        watch:
          "Cash used in operations, capital spending and any new share issuance.",
      },
      {
        title: "Permitting and regulatory compliance",
        severity: "Medium",
        detail:
          "Each project needs state and federal approvals, and in-situ recovery needs disposal capacity for the water it brings to the surface. A permit delay idles capital already spent.",
        watch:
          "Permit and licence approvals at the Wyoming and Arizona projects, plus disposal well capacity.",
      },
    ],
    watchlist: [
      {
        title: "Realised price per pound",
        detail:
          "The single variable that decides whether a delivery quarter is profitable.",
      },
      {
        title: "Produced pounds",
        detail:
          "Track production rather than revenue. Revenue timing hides the operating trend; pounds produced does not.",
      },
      {
        title: "Inventory",
        detail:
          "Material held rather than sold is a bet on future prices and a use of cash that does not appear in revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Uranium Energy is a licensed uranium portfolio with a small team, $37.3M of trailing revenue and a $3.34B market value. Its gross margin shows the business can be profitable per pound; its operating loss shows the portfolio is not yet producing enough pounds to carry itself.",
      "The most useful lesson in the file is about revenue recognition in commodities. Zero-revenue quarters are not evidence of a broken business, and a $20.2M quarter is not evidence of a durable one. Production, cost per pound and the contract book are the numbers that matter.",
      "What is not disclosed in these tables is the cost per pound at each project and the volume committed under contract. Without those, the consensus revenue estimate of $177.2M next year is an assumption rather than a forecast.",
    ],
    questions: [
      "What is the all-in cost per pound at the Texas and Wyoming hubs?",
      "How much of future production is contracted, and at what price?",
      "What does it cost to restart each idle wellfield, and in what order?",
      "How much of the $454.7M net cash is committed to development rather than available?",
    ],
  },
};
