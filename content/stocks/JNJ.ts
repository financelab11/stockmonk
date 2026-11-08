import type { StockStory } from "./types";

export const JNJ: StockStory = {
  ticker: "JNJ",
  kicker: "Healthcare · Drug Manufacturers",
  title: "J&J is a patent-protected drug business with a device business attached",
  dek: "Innovative medicine earns most of the profit and MedTech supplies the procedure exposure. Reported earnings swing on charges, so the cash-flow line is the steadier read of the same company.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $99.33B, up 7.8%, with $20.59B of free cash flow at a 20.7% margin.",
    "Operating margin is 17.9% on a trailing basis, but the latest quarter fell to 0.1% on a charge.",
    "Trailing EPS of $6.59 sits well below the $11.12 current-year consensus, which tells you the trailing figure is not a clean run-rate.",
    "Net debt is $27.42B, or 1.1x EBITDA, with interest cover of 32.1x.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000200406&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Johnson & Johnson sells two very different things. Its innovative-medicine arm sells prescription drugs for cancer, immune disease, neuroscience and vaccines, mostly paid for by insurers and health systems. Its MedTech arm sells the hardware surgeons use to cut, staple, implant, pace and monitor: orthopaedic joints, surgical instruments, electrophysiology catheters, heart pumps and contact lenses.",
      "The question that decides the next five years is how quickly the drug portfolio can replace revenue that patents hand to competitors. J&J has a long patent tail and a broad portfolio, but immunology is concentrated in a handful of products, and loss of exclusivity arrives on a timetable the company does not control.",
      "Trailing revenue reached $99.33B, up 7.8%, at a 17.9% operating margin. The shares closed at $276.22, near the top of a 52-week range of $185.12 to $282.01, for a market value of $664.95B. That is 41.3x trailing earnings but 32.3x free cash flow — the first hint that reported profit is carrying items that cash flow does not.",
    ],
    quote:
      "The income statement here is mostly a story about patent timing and litigation charges. The cash-flow statement is a story about how many patients were treated.",
  },
  whatItDoes: {
    paragraphs: [
      "Innovative Medicine is the larger profit pool. It sells branded drugs, which means the company carries the full cost of discovery, clinical trials and regulatory approval, then earns a high margin on every prescription once a product is on the market. MedTech is a manufacturing and distribution business by comparison: it builds instruments, stocks hospital supply rooms and supports surgeons in the operating theatre.",
      "That difference shapes how each side responds to the world. Drug revenue moves with patent dates, clinical data and payer coverage. Device revenue moves with procedure volumes, hospital capital budgets and the number of surgeons trained on a particular platform. A hospital that postpones elective surgery hurts MedTech immediately; a payer that tightens a formulary hurts innovative medicine immediately.",
    ],
    bullets: [
      {
        title: "Innovative Medicine",
        detail:
          "Branded prescription drugs in oncology, immunology, neuroscience and vaccines. High gross margin, heavy research spending, revenue tied to patent life.",
      },
      {
        title: "MedTech",
        detail:
          "Orthopaedics, surgery, electrophysiology, heart failure and vision. Revenue tied to procedure volumes and hospital capital spending.",
      },
      {
        title: "The patent clock",
        detail:
          "Stelara has moved past its US exclusivity period, and biosimilar competition now erodes a product that was once a top seller. The replacement burden falls on newer immunology and oncology launches.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A drug's list price is not what J&J keeps. Insurers and pharmacy benefit managers negotiate rebates, hospitals buy through group purchasing organisations, and the company records revenue net of those concessions. Gross margin of 67.6% is therefore after manufacturing cost but before the selling, research and legal expenses that determine the 17.9% operating margin.",
      "MedTech works on a placed-base model. Capital equipment often goes into a hospital at a modest price to secure the disposable that follows: a stapler reload, an ablation catheter, a trauma plate. Profit accumulates with the installed base and with every procedure, which is why device companies guard their surgeon relationships so carefully. Lose the account and the recurring revenue leaves with it.",
      "Operating leverage exists, but it is not smooth. Revenue grew 7.8% over the trailing year while the latest quarter's operating margin fell to 0.1% from 26.7% in the quarter before. At this scale a single litigation charge or write-down can consume an entire quarter's operating profit, which is why a one-quarter margin is a poor guide to the business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $78.74B in FY2022 to $94.19B in FY2025, and the trailing figure is now $99.33B. The increase came from a mix of volume, price and new product launches, with MedTech adding procedure-led growth on top.",
      "Third-party estimates point to $101.22B of revenue and $11.12 of EPS for the current fiscal year, then $107.75B and $11.62 the year after. The revenue step is modest; the EPS step is not, which is a reminder that the estimates are being struck on a different basis from the trailing diluted figure.",
      "The constraint is arithmetic rather than ambition. When a small-molecule drug loses exclusivity it rarely declines gently — several generics or biosimilars enter at once and take most of the volume within a few years. Growth therefore depends on whether new launches are large enough to fill the hole before the next patent expires.",
    ],
    bullets: [
      {
        title: "New immunology and oncology launches",
        detail:
          "The clearest source of incremental revenue, and the one that has to carry the portfolio through the Stelara transition.",
      },
      {
        title: "MedTech procedure recovery",
        detail:
          "Electrophysiology and heart failure are faster-growing device categories than orthopaedics, where pricing is mature.",
      },
      {
        title: "Emerging-market volume",
        detail:
          "Lower revenue per patient but faster patient growth, and more exposed to currency and tender pricing.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 17.9%, net margin 16.2% and diluted EPS $6.59. Return on equity is 19.7% while return on invested capital is 12.9%, a gap that comes from leverage and from the goodwill carried on the balance sheet after years of acquisitions.",
      "The annual figures show how much charges distort the picture. Operating income was $19.18B in FY2022 and $32.58B in FY2025 on revenue of $94.19B, a 34.6% margin. A business does not move from 17.9% to 34.6% and back because demand changed; it moves because the level of one-off items changed. The underlying earning power sits somewhere between the two.",
      "The quarterly table makes the same point faster. Six consecutive quarters reported operating margins of 27.3%, 31.2%, 20.2%, 24.9%, 26.7% and 0.1%. The last number is not a collapse in the franchise; it is a charge landing in a single period.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $20.59B over the trailing year, a 20.7% margin. That is higher than net income, which is what you would expect from a business whose reported profit is reduced by non-cash litigation and amortisation charges. Cash conversion is the reason the dividend has been sustainable through earnings volatility.",
      "The balance sheet carries $27.42B of net debt, equal to 1.1x EBITDA, and interest cover is 32.1x. For an investment-grade company with this much recurring revenue, that is a conservative position: the interest bill is a rounding error against operating profit.",
      "The dividend yield is 1.9%. Between the dividend, buybacks and bolt-on acquisitions, the company has to allocate roughly $20B of annual free cash flow, and the split between returning it and buying new pipeline is one of the real capital-allocation decisions in the story.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $276.22 the shares trade at 41.3x trailing earnings, 26.8x EV/EBITDA, 7.0x EV/Sales and 32.3x free cash flow. The gap between the earnings multiple and the cash multiple is the single most useful observation about the valuation: the market is not paying 41x for the current profit, it is paying 41x for a depressed profit number.",
      "Against the healthcare peers in the table, J&J's 26.8x EV/EBITDA sits in the middle: below Lilly at 35.7x and Vertex at 30.1x, close to AbbVie at 26.6x, and above Thermo Fisher at 25.9x. What separates J&J is the operating margin — 17.9%, the lowest in that group alongside Thermo Fisher, against 40.2% at Lilly and 33.2% at Vertex.",
      "A mid-table multiple on a below-average margin is not obviously cheap or expensive. It says the market expects the drug portfolio to keep growing through the patent cycle, and that MedTech continues to compound at procedure growth. If either assumption fails, the multiple has room to compress toward the device-heavy end of the range.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed third-party consensus. The mean target is $279.41, barely above the last close, with a range of $190.00 to $320.00. A mean that close to the market price usually means the analyst community sees the shares as roughly fairly valued rather than mispriced in either direction.",
      "Current-year estimates call for $101.22B of revenue and $11.12 of EPS; next year is $107.75B and $11.62. The EPS estimate is roughly two-thirds above the trailing $6.59, which is not a forecast of sudden acceleration. It is a statement that the analysts are excluding items that the trailing GAAP figure includes.",
      "That basis difference matters more than the target price. Anyone comparing the $11.12 estimate with the $6.59 trailing number without adjusting for charges will draw the wrong conclusion about both the growth rate and the multiple.",
    ],
  },
  risks: {
    intro:
      "The risks that matter here are not balance-sheet risks. They are patent timing, litigation and the price the US payer system is willing to pay for branded medicine.",
    items: [
      {
        title: "Loss of exclusivity",
        severity: "High",
        detail:
          "Stelara's US exclusivity has ended and biosimilar competition is already taking revenue. Other large products face their own dates later in the decade.",
        watch:
          "Reported sales of the largest immunology products and the growth rate of the launches meant to replace them.",
      },
      {
        title: "Product-liability litigation",
        severity: "High",
        detail:
          "Legal claims have produced charges large enough to turn a profitable quarter into a near-zero one, and the timing of settlements is unpredictable.",
        watch:
          "Litigation expense inside operating income and any disclosed reserve changes.",
      },
      {
        title: "Drug pricing and reimbursement",
        severity: "Medium",
        detail:
          "US negotiated pricing and formulary decisions determine net price per prescription. A lower net price is not offset by higher volume when a product is already standard of care.",
        watch:
          "Realised price versus volume in the innovative-medicine commentary.",
      },
      {
        title: "MedTech procedure volumes",
        severity: "Medium",
        detail:
          "Hospitals defer elective procedures when staffing or budgets are tight, and devices are the first line item to move.",
        watch:
          "Procedure growth and hospital capital-spending commentary from device peers.",
      },
      {
        title: "Pipeline execution",
        severity: "Medium",
        detail:
          "Late-stage failures are a normal cost of the model, but a company replacing a patent cliff cannot afford many of them in the same therapeutic area.",
        watch:
          "Phase 3 readouts in oncology and immunology, and the pace of new approvals.",
      },
    ],
    watchlist: [
      {
        title: "Innovative-medicine growth excluding lost products",
        detail:
          "The number that matters is growth in the products that still have exclusivity, not the consolidated line.",
      },
      {
        title: "Operating margin excluding charges",
        detail:
          "Compare quarters after removing litigation and amortisation, or the series will look far more volatile than the business.",
      },
      {
        title: "MedTech procedure growth",
        detail:
          "A leading indicator for hospital demand and for the device half of the revenue base.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "J&J is two businesses with one balance sheet: a high-margin drug portfolio facing a scheduled patent transition, and a device portfolio that grows with procedures and carries lower margins. The combined company throws off about $20B of free cash flow a year and carries modest leverage.",
      "What is not known is how much of the current earnings base is repeatable. Trailing EPS of $6.59 and the $11.12 consensus estimate describe the same company on two different accounting bases, and the gap is large enough that any comparison of multiples has to start there.",
      "The useful exercise is to separate the patent-protected revenue from the procedure-driven revenue, apply the right growth rate to each, and then ask what the combined cash flow is worth. That is a different question from whether the last quarter beat a forecast.",
    ],
    questions: [
      "How much of innovative-medicine revenue is exposed to a patent date in the next five years?",
      "What did the latest quarter's 0.1% operating margin actually contain?",
      "Is MedTech growing faster than the hospital procedure market, or with it?",
      "How much of the $20.59B free cash flow is committed to the dividend?",
    ],
  },
};
