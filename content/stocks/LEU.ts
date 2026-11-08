import type { StockStory } from "./types";

export const LEU: StockStory = {
  ticker: "LEU",
  kicker: "Nuclear fuel · Enrichment and technical services",
  title: "Centrus sells the scarcest step in the nuclear fuel chain",
  dek: "Enrichment is a handful of suppliers and decade-long lead times. Centrus earns a distribution margin today and holds an option on US-owned capacity.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $454.5M, essentially flat year over year at +0.1%.",
    "Operating income was $50.2M in FY2025, an 11% return on revenue before interest and tax.",
    "Trailing free cash flow was -$295.5M as spending on centrifuge capacity increased.",
    "Net cash of $2.24B exceeds the $2.16B market value, which is a signal to read the balance sheet carefully.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1065059/000162828026007117/leu-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065059&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Centrus Energy supplies nuclear fuel and fuel-related services to utilities that run reactors. It reports two segments: Low-Enriched Uranium, which sells the enrichment component of fuel and sometimes the uranium with it, and Technical Solutions, which sells engineering, manufacturing, construction and operations work, including the American Centrifuge programme.",
      "The product at the centre of the business is not uranium. It is separative work, the unit that measures the effort of raising the concentration of uranium-235. A utility owns the uranium and pays an enricher for the work, or buys a finished bundle of both. Enrichment is a capital-intensive, technology-heavy step with very few Western suppliers, so the price of separative work is set in a thin market with long contracts.",
      "Revenue of $454.5M was flat year over year, and the market value is $2.16B at $104.60 per share. The shares are 8% up a 52-week range of $84.86 to $345.60 and down 62.3% over the past year, which tells you the market has repriced the timing of the next leg of capacity rather than the current fuel book.",
    ],
    quote:
      "Enrichment economics are set by the price of separative work, the cost of the electricity a centrifuge consumes and the capital cost of the plant. A supplier with spare capacity earns a lot; one building capacity earns very little until it is finished.",
  },
  whatItDoes: {
    paragraphs: [
      "The Low-Enriched Uranium segment is a fuel supplier. It sells the enrichment component to utilities, sells enrichment plus natural uranium as a package, and sells natural uranium on its own. Utilities buy years ahead because a reactor's fuel cycle is planned long before the fuel is loaded, so the segment's revenue depends on a contract book rather than on monthly demand.",
      "Technical Solutions is the engineering arm. It performs design, manufacturing, procurement, construction and operations work for government and private customers, and it houses the American Centrifuge effort to build US-owned enrichment capacity. This is where the company spends to create something it can later sell as a product rather than a service.",
      "The two segments pull in different directions. The fuel segment produces revenue and modest margins from a book of utility contracts; the technical segment consumes capital to build capacity. Reading the consolidated income statement without that split makes the business look more stable than it is.",
    ],
    bullets: [
      {
        title: "Separative work",
        detail:
          "The enrichment service sold to utilities. Priced per unit of work, contracted years ahead, and capital intensive to provide.",
      },
      {
        title: "Natural uranium",
        detail:
          "Sold alone or bundled with enrichment. A commodity component that adds revenue but little differentiation.",
      },
      {
        title: "Technical Solutions",
        detail:
          "Engineering, manufacturing and operations work, including centrifuge development. Revenue today, capacity tomorrow.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "In the fuel business, gross margin is the spread between what a utility pays for enriched product and what Centrus pays for the uranium and enrichment it delivers. When the company buys enriched uranium from another supplier and resells it, the spread is thin and the business behaves like a distributor with a nuclear licence. When it enriches with its own machines, the spread widens because the main cost is electricity and the capital charge on the plant.",
      "That distinction is the key to the whole story. Building centrifuges is expensive and slow, but once they are running the marginal cost of separative work is low and the asset has a very long life. The company is therefore trading current margin for future capacity, which is why free cash flow can be deeply negative while operating income is positive.",
      "Technical Solutions earns fee income on engineering and operations contracts. Those fees are more predictable than commodity spreads but they are cost-plus in character, so they do not scale the way a product business does. They also fund part of the development work that would otherwise be pure expense.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset puts compound revenue growth at 13.5% a year. Revenue reached $448.7M in FY2025 from $298.3M in FY2021, and it has flattened at $454.5M on a trailing basis. That growth came from fuel deliveries rather than from a change in the market structure, so it should be read as contract timing as much as expansion.",
      "The next leg depends on capacity. More enrichment from Centrus's own machines would raise the margin on every unit of separative work sold and reduce reliance on purchased supply. Less capacity, or a slower build, leaves the company as a reseller in a market where the suppliers it buys from set the terms.",
      "Third-party estimates expect $476.1M of revenue this fiscal year and $503.0M next, with earnings per share of $3.70 and $4.44. That is a modest growth path, consistent with a fuel book that is already contracted rather than with a step change in capacity.",
    ],
    bullets: [
      {
        title: "Domestic capacity",
        detail:
          "The centrifuge build is the growth engine. Every machine that enters service shifts revenue from distribution to production.",
      },
      {
        title: "Utility contracting",
        detail:
          "Reactors need fuel regardless of power prices, but contract renewals are infrequent and set the price for years.",
      },
      {
        title: "Advanced fuel",
        detail:
          "Higher-assay fuel for newer reactor designs is a smaller market today and a potentially higher-value one later.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income has been remarkably stable: $68.3M in FY2021, $59.7M in FY2022, $52.4M in FY2023, $48.0M in FY2024 and $50.2M in FY2025. Revenue grew over the same period, so the operating margin compressed from the low twenties to just above 11%. That is what a distribution-heavy mix does to a fuel supplier.",
      "The quarterly record shows how lumpy deliveries are. Q2 FY25 produced $154.5M of revenue and a 21.7% operating margin; Q3 FY25 produced $74.9M and -22.2%; Q3 FY26 produced $55.5M and -53.5%. A single large delivery at a favourable price can carry a quarter.",
      "The trailing figures mix signals: the net margin is -53.3%, earnings per diluted share are $3.37, and return on equity is -396.4%. A $300.6M net loss in Q4 FY2025 is the reason. When one quarter distorts the trailing period that heavily, use operating income and the cash flow statement instead of trailing margins.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow has swung widely: $48.8M in FY2021, $19.9M in FY2022, $7.5M in FY2023, $32.9M in FY2024, $31.3M in FY2025 and -$295.5M on a trailing basis. The recent negative figure is the cost of centrifuge capacity and working capital, not a collapse in the fuel business.",
      "Net cash of $2.24B is the most interesting number in the file, because it is larger than the market value. That can happen when a company holds customer prepayments, restricted balances or cash set aside for a specific build. It is not free surplus that could be handed to shareholders, and a reader should check what portion is available.",
      "The practical implication is that Centrus can fund a multi-year capacity programme without conventional debt, using customer money and its own balance sheet. The constraint is not access to capital; it is whether the machines can be built and licensed on schedule.",
    ],
  },
  valuation: {
    paragraphs: [
      "The quoted multiples are negative: -16.0x trailing earnings and -19.4x EV/EBITDA, with EV/Sales of -0.2x. Those numbers exist because enterprise value is negative once $2.24B of net cash is subtracted from a $2.16B market value, which makes conventional multiples uninformative.",
      "The right question is what the market is paying for the operating business after allowing for the cash. If most of the cash is genuinely surplus, the fuel business and the centrifuge programme are being valued at close to nothing, which would be a strong statement about expected returns on the capital being spent. If the cash is encumbered, the operating business is worth more than it appears.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $194.09 appears below as third-party context, and it is far above the current price, which reflects a view about capacity and contract prices rather than about the trailing numbers.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 19 analysts with a mean target of $194.09 and a range of $100.00 to $337.00. A range that wide for a company with a contracted fuel book says the disagreement is about the value of future capacity, not about next year's deliveries.",
      "Estimates call for $168.4M of revenue next quarter and $80.1M the quarter after, which is the delivery pattern again rather than a change in demand. For the current fiscal year the group expects $476.1M of revenue and $3.70 of earnings per share; for the next year, $503.0M and $4.44.",
      "The implied earnings growth of roughly a fifth is modest for a company with a capacity story. It suggests the analysts expect the centrifuge build to add cost before it adds much revenue.",
    ],
  },
  risks: {
    intro:
      "Centrus is exposed to the price of enrichment, the reliability of its purchased supply and the execution of a capital programme that takes years to pay back.",
    items: [
      {
        title: "Separative work pricing",
        severity: "High",
        detail:
          "The fuel segment's margin depends on the price of enrichment and on when contracts were signed. A soft renewal market compresses the spread on volumes the company cannot easily redirect.",
        watch:
          "Average price per unit of separative work and the share of the book repriced each year.",
      },
      {
        title: "Reliance on purchased supply",
        severity: "High",
        detail:
          "Much of the enriched product sold has been bought from other suppliers. A disruption or a price increase at that supplier flows straight through to Centrus's margin.",
        watch:
          "Disclosures about supply sources and any change in the cost of purchased enriched uranium.",
      },
      {
        title: "Centrifuge construction and licensing",
        severity: "High",
        detail:
          "The capacity programme is a multi-year engineering and regulatory effort. Delays raise the capital cost per unit of capacity and lengthen the period before the margin improves.",
        watch:
          "Machine installations, licensing milestones and capital spending on the programme.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Fuel is sold to a limited number of utilities, and each contract covers several years of deliveries. Losing or delaying one renewal is material.",
        watch:
          "The contract book, delivery schedules and the credit quality of utility customers.",
      },
      {
        title: "Policy and trade restrictions",
        severity: "Medium",
        detail:
          "Enrichment supply is shaped by import rules, sanctions and government procurement. A policy change can open or close a supply route overnight.",
        watch:
          "Changes to import quotas, waivers and government fuel programmes.",
      },
    ],
    watchlist: [
      {
        title: "Owned versus purchased enrichment",
        detail:
          "The mix decides the gross margin. More owned capacity means a wider spread on the same revenue.",
      },
      {
        title: "Available cash",
        detail:
          "Separate genuinely surplus cash from customer prepayments and restricted balances before treating the balance sheet as a cushion.",
      },
      {
        title: "Contract renewals",
        detail:
          "Utility fuel contracts are long and infrequent. Each renewal sets the price for years of deliveries.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Centrus is a fuel supplier with roughly half a billion dollars of revenue, stable operating income around $50M and a capacity programme that consumes cash today for margin tomorrow. It is one of very few Western enrichment suppliers and the only US-owned one at commercial scale.",
      "The educational point is the difference between a distribution business and a production business inside one company. Reselling enriched uranium produces revenue without much margin; enriching it produces margin without much revenue growth. The centrifuge programme is the bridge between the two, and it is also the main risk.",
      "What is not visible in these tables is the price per unit of separative work in the contract book, or how much of the $2.24B of net cash is genuinely available. Both matter more than the trailing margin.",
    ],
    questions: [
      "How much of the fuel sold is enriched by Centrus rather than purchased?",
      "What is the average contract price per unit of separative work, and when does it reset?",
      "How much of the net cash is restricted or held as customer prepayment?",
      "What does a unit of new centrifuge capacity cost, and when does it start earning?",
    ],
  },
};
