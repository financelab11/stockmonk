import type { StockStory } from "./types";

export const VRT: StockStory = {
  ticker: "VRT",
  kicker: "Industrials · Data-centre power and cooling",
  title: "Vertiv sells the power and cooling that makes a data centre work",
  dek: "Revenue grew 61% in the latest quarter and the shares are down by half from their high. That gap between the operating result and the price is the most interesting thing in the file.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $13.1B, up 35.3%, at a 20.1% operating margin and a 16.0% net margin.",
    "The latest quarter grew 61.2% to $4.3B at a 22.8% operating margin, the best margin in the series.",
    "Free cash flow was $3.1B, a 24.0% margin, above net income because customers pay before equipment ships.",
    "The shares trade at 33.6x trailing earnings and sit about 15% up a 52-week range of $147.82 to $379.94.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1674101/000167410126000008/vrt-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001674101&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Vertiv builds the electrical and thermal backbone of a data centre: uninterruptible power supplies, power distribution units, busway, racks, chillers, computer-room air conditioners, liquid cooling and the monitoring software that ties it together. It also services what it installs, from preventive maintenance to remote monitoring and spare parts.",
      "Trailing revenue was $13.1B, up 35.3%, at a 20.1% operating margin. The latest quarter is the one that matters: $4.3B of revenue, up 61.2%, at a 22.8% operating margin and $1.95 of diluted EPS against $1.02 a year earlier. That is a business running at the limit of its capacity.",
      "At $182.86 the market value is $70.4B, or 33.6x trailing earnings and 22.7x EV/EBITDA. The shares sit about 15% of the way up a 52-week range of $147.82 to $379.94, and the one-year return is flat. Revenue more than doubled over five years and the shares have gone sideways for twelve months, which tells you the multiple has compressed hard.",
    ],
    quote:
      "A data centre cannot open without power distribution and cooling. That gives the supplier a place in the schedule, but not a blank cheque on price.",
  },
  whatItDoes: {
    paragraphs: [
      "The product set is organised around two problems: getting power into the racks and getting heat out of them. On the power side, Vertiv sells the UPS, switchgear, busway, PDUs and rack power strips that sit between the utility feed and the servers. On the thermal side, it sells chillers, air handlers, economisers, in-row cooling and, increasingly, liquid cooling for high-density compute.",
      "Customers are hyperscale cloud operators, colocation providers, enterprises building their own data halls, telecom networks and industrial sites. The buying process is project-based: a design is specified, equipment is ordered months ahead of installation, and the vendor that wins the specification supplies the site for years. Service contracts then run for the life of the facility.",
      "The service business is smaller than the equipment business but more predictable. Preventive maintenance, spare parts, remote monitoring and acceptance testing are recurring, priced annually, and they carry the kind of margin that comes from being the incumbent with the installed base and the diagnostic data.",
    ],
    bullets: [
      {
        title: "Power management",
        detail:
          "UPS, switchgear, busway and rack power. The largest revenue line and the one most exposed to the pace of new capacity.",
      },
      {
        title: "Thermal management",
        detail:
          "Chillers, air handlers and liquid cooling. The mix is shifting toward liquid as rack density rises, which changes the competitive set.",
      },
      {
        title: "Integrated racks and services",
        detail:
          "Pre-configured modules plus maintenance, parts and monitoring. The recurring layer that smooths the project cycle.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Vertiv earns a gross margin of 38.1% and an operating margin of 20.1%. For an equipment manufacturer those are good numbers, and they come from three things: engineered products rather than commodity parts, a specification position that is hard to displace mid-project, and a service layer that earns more per dollar than the hardware.",
      "The unit economics are project-driven. A large order is quoted with a bill of materials, an engineering scope and a delivery schedule, and the margin depends on how much of the work is standard product versus custom engineering. Standard UPS and rack products carry better margins than a bespoke cooling design for an unusual facility, so the mix moves the group margin quarter to quarter.",
      "Working capital is a source of cash rather than a use of it. Customers pay deposits and progress payments on equipment that takes months to build, which is why free cash flow of $3.1B exceeds net income of roughly $2.1B. That is a genuine advantage in a capital-intensive build-out, but it also means cash flow can reverse sharply if orders slow and the deposits stop.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $5.0B in 2021 to $5.7B, $6.9B, $8.0B and $10.2B, then reached $13.1B on a trailing basis. The latest quarter grew 61.2%, which is not a normal growth rate for an equipment company; it reflects a wave of data-centre capacity being commissioned.",
      "The attributed consensus expects $14.7B of revenue and $7.19 of EPS this fiscal year, then $19.5B and $9.84 next year. That second step is large: a 32% increase in revenue on top of a year that already grew more than 40%. It assumes the order book converts on schedule and that capacity is available to build it.",
      "The demand driver is the AI build-out. Higher compute density means more power per rack and more heat to remove, which raises the content per data hall. That is the mechanism that turns a general data-centre cycle into a step change in addressable spend: the same square metre of floor space now needs more cooling and more power distribution than it did five years ago.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the transformation: operating income of $260M in 2021 on $5.0B of revenue, then $223M, $872M, $1.37B and $1.83B, reaching $2.6B implied by the trailing figures. Revenue grew 2.6x over that period while operating income grew roughly tenfold, which is operating leverage at a scale that few industrials achieve.",
      "Quarterly margins confirm the trend: 16.8%, 19.3%, 20.1%, 16.6%, 19.5% and 22.8%. The first quarter of a fiscal year is seasonally weaker, and the latest quarter is the strongest in the file. A 22.8% margin on 61% revenue growth is a warning as much as a triumph: it says capacity is tight and pricing is good, and both can change.",
      "Diluted EPS was $5.35 trailing, with the quarterly path running from $0.83 to $1.95. Return on equity of 38.1% and return on invested capital of 44.2% are high because the asset base is light relative to revenue: Vertiv assembles and integrates rather than fabricating heavy equipment, so a lot of the balance sheet is receivables and inventory.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.1B, a 24.0% margin, against net income of roughly $2.1B. The gap is customer prepayments and the working capital benefit of a growing order book. It is real cash, but it is also a function of growth: when orders stop growing, the deposits stop and the cash benefit disappears.",
      "The balance sheet carries $783M of net cash. That is a modest cushion for a company with a $70.4B market value, and it is smaller than it looks because the working capital that generated it has to be funded if the growth reverses.",
      "At 22.4x free cash flow and a 4.5% FCF yield, the cash flow is priced more reasonably than the earnings. The high FCF margin flatters the comparison with peers, so the earnings multiple of 33.6x is the more conservative lens.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 33.6x trailing earnings and 22.7x EV/EBITDA, Vertiv trades at a premium to Caterpillar (21.6x and 14.5x) and RTX (30.4x and 18.1x), and roughly in line with Eaton (34.0x and 20.9x) and GE (36.7x and 24.3x). The premium is explained by growth: 35.3% trailing revenue growth against 20.3% for Caterpillar and 11.6% for RTX.",
      "The more revealing number is the share price. The stock is 15% up a range that runs to $379.94, and the one-year return is flat, so the multiple has come down sharply while revenue accelerated. That is the healthiest form of de-rating: earnings caught up with the price rather than the price falling to the earnings.",
      "The risk is that the next leg of the multiple depends on the 32% revenue growth embedded in next year's consensus. If the data-centre build-out pauses, both the earnings estimate and the multiple would fall at the same time, which is the double hit that high-growth industrials suffer in a downturn.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-nine analysts contribute to the attributed consensus, with a mean target of $337.54 and a range of $250.00 to $427.00. The mean is far above the latest close, and the low end is also above it. That is a strongly positive distribution, and it is worth treating as a sentiment reading as much as a forecast.",
      "Estimates call for $14.7B of revenue and $7.19 of EPS this fiscal year, then $19.5B and $9.84 next year. The next-quarter figure is $4.49B and $2.28, which implies the quarterly run rate keeps climbing from the $4.3B just reported.",
      "These are third-party numbers. The gap between the mean target and the price is one of the widest in this industrial group, which usually means the analysts are extrapolating the order book while the market is discounting the cycle.",
    ],
  },
  risks: {
    intro:
      "Vertiv's risk is not demand today; it is the durability of a build-out that has already produced extraordinary growth, and the operating leverage that works in both directions.",
    items: [
      {
        title: "Hyperscale capex concentration",
        severity: "High",
        detail:
          "A small number of very large customers drive the order book. If they slow construction at the same time, the revenue gap is immediate and the margin effect is larger than the revenue effect.",
        watch:
          "Order intake, backlog and the capex guidance of the largest cloud customers.",
      },
      {
        title: "Capacity and execution",
        severity: "High",
        detail:
          "Revenue growth of 61% strains manufacturing, engineering and installation. A missed shipment moves revenue between quarters and can carry penalties.",
        watch:
          "Backlog conversion, lead times and gross margin.",
      },
      {
        title: "Technology shift to liquid cooling",
        severity: "Medium",
        detail:
          "Higher rack density is moving spend from air cooling to liquid systems. That changes the competitive set and requires new products and new manufacturing.",
        watch:
          "Thermal segment revenue mix and liquid-cooling design wins.",
      },
      {
        title: "Working capital reversal",
        severity: "Medium",
        detail:
          "Free cash flow is flattered by customer prepayments. A slowdown reverses that flow and can turn a 24% FCF margin into a much lower number quickly.",
        watch:
          "Cash conversion, receivables and customer deposits.",
      },
      {
        title: "Competition and pricing",
        severity: "Medium",
        detail:
          "Large electrical and thermal incumbents want the same data-centre spend. Capacity additions across the industry could turn a shortage into a price war.",
        watch:
          "Gross margin and the price commentary on large project awards.",
      },
    ],
    watchlist: [
      {
        title: "Orders and backlog",
        detail:
          "The leading indicator for a project business. Watch the growth rate, not just the level.",
      },
      {
        title: "Gross margin by product",
        detail:
          "Mix between standard power products and custom thermal projects moves the group margin more than volume does.",
      },
      {
        title: "Cash conversion",
        detail:
          "A falling FCF margin while revenue grows is the first sign that prepayments have stopped.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Vertiv is the purest large-cap way to own the electrical and cooling content of a data centre. Revenue reached $13.1B, up 35.3%, with a 20.1% operating margin and $3.1B of free cash flow. The operating performance is exceptional.",
      "The uncertainty is duration. The consensus expects another 32% revenue growth next year on top of this year, which requires the build-out to continue at the current pace. The shares have already de-rated once; the question is whether earnings keep growing into the multiple or the cycle turns first.",
      "The reader should separate the business from the order book. The installed base and the service contracts are durable; the equipment revenue is not.",
    ],
    questions: [
      "How concentrated is the order book among the largest customers?",
      "How much of the 22.8% quarterly margin came from pricing versus utilisation?",
      "What share of revenue is now liquid cooling, and how fast is it growing?",
      "What happens to free cash flow if orders stop growing for two quarters?",
    ],
  },
};
