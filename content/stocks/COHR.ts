import type { StockStory } from "./types";

export const COHR: StockStory = {
  ticker: "COHR",
  kicker: "Photonics · Lasers and optical components",
  title: "Coherent is spending more cash than it earns to supply the optical boom",
  dek: "Operating income of $847.7M and free cash flow of negative $1.83B in the same year. The gap is capacity, and it decides whether the growth is worth having.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $7.91B, up 30.8%, with operating margin at 12.5% and 15.1% in the latest quarter.",
    "Free cash flow was negative $1.83B, a negative 23.2% margin, in a year with $847.7M of operating income.",
    "The balance sheet is effectively debt-free at $9.1M of net debt, so the spending has been funded without leverage.",
    "The published multiples do not reconcile with the reported per-share earnings and should not be used as they stand.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000820318&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Coherent makes photonics: lasers, optical components and the sub-assemblies that go into optical transceivers, industrial cutting and welding machines, and scientific instruments. It sells to equipment makers, not to the hyperscalers directly, which puts it two steps removed from the AI capital-spending decision but directly in the path of the optical link count.",
      "The financial recovery has been quick. FY2024 produced an operating loss of $147.6M on $4.71B of revenue. FY2026 produced $847.7M of operating income on $7.12B, and the latest quarter reached a 15.1% operating margin on $2.37B of revenue, up 49.9%. Trailing revenue is $7.91B.",
      "The unusual feature is the cash flow. Coherent generated $847.7M of operating income and negative $1.83B of free cash flow over the trailing period. Very few companies can do both at once, and the reason is that the company is building manufacturing capacity faster than it is collecting the profit from it.",
    ],
    quote:
      "In a component shortage, the winning move is to add capacity before the orders arrive. That is also the move that turns a profitable year into a cash-consuming one.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio spans three broad areas with different cycles. Datacom and telecom photonics supplies the lasers and optical parts that transceiver makers assemble into the links between servers and between data centres. Industrial lasers sell into metal cutting, welding, marking and additive manufacturing, where demand follows industrial production and capital equipment cycles. The remaining businesses serve aerospace, defence, semiconductor equipment and scientific research, which are smaller and slower but carry long qualification cycles.",
      "The common thread is compound semiconductor manufacturing. Making a reliable laser requires growing crystal structures layer by layer, processing them in clean rooms and learning yields over years. That is why the industry has few credible suppliers and why capacity cannot be added quickly by a new entrant with capital.",
      "Coherent reports a single revenue line in the data, so the split between the AI-linked datacom business and the industrial businesses is not visible. That is a significant gap for a reader trying to judge how much of the 30.8% growth is cyclical recovery in industrial markets and how much is structural demand from data centres.",
    ],
    bullets: [
      {
        title: "Datacom and telecom photonics",
        detail:
          "Lasers and optical components for transceivers and network equipment. The AI-linked demand.",
      },
      {
        title: "Industrial lasers",
        detail:
          "Cutting, welding, marking and additive manufacturing. Tied to factory investment, not to computing.",
      },
      {
        title: "Specialty and scientific",
        detail:
          "Aerospace, defence, semiconductor equipment and research. Small, slow, and hard to displace once designed in.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Coherent sells components and subsystems by the unit. Prices decline as products mature, so revenue growth requires either more units or a move up the performance curve before the old part commoditises. Gross margin of 38.2% is lower than a fabless chip designer's because the company owns fabs, and it is higher than an assembler's because the process technology is difficult.",
      "The operating margin of 12.5% carries a large fixed cost base: fabrication, clean rooms, test and a long engineering cycle. That is why a 30.8% increase in revenue lifted the operating margin from a loss in FY2024 to double digits in FY2026. The incremental revenue carried far more margin than the average, which is the operating leverage mechanism at work.",
      "The capital intensity is the other half of the model. A laser fab is expensive, takes years to fill, and cannot be switched off cheaply in a downturn. The company therefore has to decide, years ahead of demand, how much capacity to build. When it guesses right, the margin expands and the revenue follows. When it guesses wrong, the depreciation arrives before the orders do.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 34.0% a year across the fiscal years in the data, although the series includes a year with no revenue reported, so treat the average as indicative. The cleaner progression is $4.71B in FY2024, $5.81B in FY2025, $7.12B in FY2026 and $7.91B trailing. The latest quarter grew 49.9%.",
      "The attributed consensus expects $11.16B of revenue and $10.37 of EPS this fiscal year, then $15.50B and $15.57 next year. That would be roughly 57% growth this year on the FY2026 base and another 39% next year. It is a forecast of a supply-constrained market continuing, and it is the average of 22 and 23 analysts respectively.",
      "The growth driver is optical content per cluster. As line rates rise, the photonics inside each transceiver become more complex and more valuable, and the number of links grows faster than the number of accelerators. The constraint is manufacturing capacity, which is exactly what the negative free cash flow is buying. The risk is that the capacity arrives just as demand pauses, which would turn a shortage into a glut with unused depreciation.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business recovering from a bad acquisition-driven period. Operating income was $414.3M in FY2022, then negative $147.6M in FY2024, then $94.2M in FY2025 and $847.7M in FY2026. Net income followed: $786.9M in FY2026 against $30.1M the year before.",
      "Quarterly operating margin has been much steadier than the annual figures suggest: negative 4.1% in Q4 FY25, then 13.7%, 10.0%, 10.2%, 13.6% and 15.1%. That is a gradual improvement rather than a step change, and it is consistent with a company filling capacity quarter by quarter.",
      "Return on equity is 102.3% and return on invested capital 82.9% on trailing figures. Those numbers are high enough to be suspicious, and the explanation is arithmetic: a large accumulated deficit or a small book equity makes the denominator small. A reader should not treat them as evidence of a high-return business without checking the equity base.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $1.83B over the trailing period, a negative 23.2% margin, against $847.7M of operating income. FY2026 alone produced negative $1.02B, after positive $192.8M in FY2025. The swing is roughly a billion dollars in one year, and it happened while the business was becoming more profitable.",
      "The uses are the usual two for an expanding manufacturer. Capacity: building and equipping the fabrication and assembly lines needed for the transceiver and laser volumes the consensus expects. Working capital: inventory and receivables rise with revenue and, in a shortage, inventory is bought early and held. Neither is a sign of distress, but both mean the earnings on the income statement are not yet available to shareholders.",
      "The balance sheet is effectively debt-free at $9.1M of net debt, which is remarkable given the spending. The funding came from operations and from the equity base rather than from borrowing. It also means there is capacity to borrow if the capacity programme runs longer than planned, at the cost of the interest charge the company currently does not carry.",
    ],
  },
  valuation: {
    paragraphs: [
      "The quoted multiples here are internally inconsistent, and that is the most useful thing to say about them. A close of $192.81 against $4.83 of diluted EPS arithmetically gives about 40x earnings, not the 4.9x shown. A market capitalisation of $4.73B against $7.91B of revenue gives 0.6x sales, which is a fraction of what Ciena, Lumentum and Credo trade at. A reader cannot use a P/E, an EV/EBITDA and a P/S from this table as if they described the same company.",
      "The direction of the discrepancy is worth thinking about, though. A 0.6x sales multiple on a business with a 12.5% operating margin and 30.8% growth would be extraordinarily cheap. Either the market expects the earnings base to collapse, or the market value in the data is not measuring what the share price suggests. Resolving that is a prerequisite for valuing the company at all.",
      "What can be said without the multiples is this: the consensus expects revenue to nearly double over two years while free cash flow is currently negative. On those numbers, the value of the business depends almost entirely on the return earned once the capacity is built and the spending stops. That is a question about future margins, not about the current price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts contribute to the attributed consensus, with a mean target of $368.20 and a range of $228.00 to $500.00. The mean is well above the last close of $192.81. Given the inconsistencies in the published multiples, the target range is the more reliable third-party signal here: every analyst in the range sees the shares higher than the traded price.",
      "The estimates are $2.65B of revenue and $2.40 of EPS next quarter, $11.16B and $10.37 for the fiscal year, and $15.50B and $15.57 for the next. The EPS step from $10.37 to $15.57 implies margin expansion on top of revenue growth, which is consistent with a company filling capacity. It also assumes the capacity is finished and paid for, which is what the negative free cash flow is currently questioning.",
    ],
  },
  risks: {
    intro:
      "Coherent's risks are capacity timing, the opacity of its segment mix, and a set of reported figures that need reconstruction before they can be used.",
    items: [
      {
        title: "Capacity arriving into a pause",
        severity: "High",
        detail:
          "The company is spending heavily to add capacity. If demand pauses, the depreciation arrives without the revenue and the operating margin falls quickly.",
        watch:
          "Capital expenditure, depreciation and the operating margin by quarter.",
      },
      {
        title: "Negative free cash flow",
        severity: "High",
        detail:
          "Negative $1.83B over the trailing period against positive operating income. The business is consuming cash while it grows.",
        watch:
          "The gap between operating cash flow and capital expenditure, and whether it narrows as capacity completes.",
      },
      {
        title: "Industrial cyclicality",
        severity: "Medium",
        detail:
          "Industrial lasers and specialty markets follow factory investment, not data-centre spending. A manufacturing slowdown would offset datacom growth.",
        watch:
          "The revenue split between datacom and industrial end markets.",
      },
      {
        title: "Reporting clarity",
        severity: "Medium",
        detail:
          "The published multiples do not reconcile with the reported EPS and market value. Until they do, valuation work rests on assumptions.",
        watch:
          "Share count, market value and the reconciliation of the multiples in each filing.",
      },
      {
        title: "Optical component competition",
        severity: "Medium",
        detail:
          "Transceiver makers can qualify alternative laser suppliers, and vertical integration by the largest customers would remove a layer of demand.",
        watch:
          "Design wins at transceiver makers and any in-house laser development by customers.",
      },
    ],
    watchlist: [
      {
        title: "Capital expenditure",
        detail:
          "The single line that separates a profitable growth year from a cash-consuming one.",
      },
      {
        title: "Operating margin",
        detail:
          "The proof that higher revenue is carrying incremental margin rather than just filling a factory.",
      },
      {
        title: "Datacom share of revenue",
        detail:
          "Without a segment split, the reader is guessing at how much of the growth is AI-related.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Coherent is a photonics manufacturer with $7.91B of trailing revenue growing 30.8%, an operating margin that has climbed to 15.1%, and no net debt. It is also consuming cash at a rate of 23.2% of revenue to build the capacity that the demand requires. Both facts are true and they describe the same strategy.",
      "The educational point is that operating profit and free cash flow answer different questions. Operating profit asks whether the product sells for more than it costs to make. Free cash flow asks whether the business can fund its own future. Coherent currently passes the first test and fails the second, which is normal for a manufacturer in the middle of an expansion and dangerous if the expansion is mistimed.",
      "What is not known is how much of the revenue comes from AI-linked datacom rather than industrial markets, when the capacity spending converts into cash, and why the published multiples disagree with the reported per-share figures. The AI build-out is a genuine source of demand for optical components; it does not tell a reader whether this particular capacity will earn its cost of capital.",
    ],
    questions: [
      "When does the capacity programme stop consuming cash, and at what margin does it break even?",
      "What share of revenue comes from datacom rather than industrial lasers?",
      "Why do the reported EPS and the published P/E point to different prices?",
      "If optical demand pauses for two quarters, how much of the new capacity sits idle?",
    ],
  },
};
