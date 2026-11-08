import type { StockStory } from "./types";

export const IDXX: StockStory = {
  ticker: "IDXX",
  kicker: "Healthcare · Medical Diagnostics & Research",
  title: "Idexx puts a laboratory inside the vet's clinic and sells the tests",
  dek: "The analyser is the hook. The consumables, the reference lab and the software are the business — which is why a 62.7% gross margin sits on top of a capital-intensive placement programme.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $4.66B, up 11.9%, with the latest quarter up 9.9%.",
    "Gross margin is 62.7% and operating margin 32.3%, but the return on invested capital of 47.3% is the standout number.",
    "Free cash flow of $1.30B is a 28.0% margin, and net debt of $651.3M is only 0.4x EBITDA.",
    "At 45.1x earnings and 32.4x EBITDA the shares are the second most expensive in the healthcare peer table.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/874716/000087471626000038/idxx-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000874716&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Idexx sells diagnostic testing to veterinarians. Its core product is a desktop analyser that a clinic uses to run blood work in-house instead of sending samples to an outside laboratory. Around that machine sit the consumables each test requires, a reference laboratory for tests the clinic cannot run, rapid tests for specific diseases, and software that stores and interprets the results.",
      "The model works because it changes the economics of a vet visit. An in-house result arrives while the pet is still in the clinic, which lets the veterinarian diagnose and prescribe in one appointment. The clinic earns the test fee, Idexx sells the cartridge, and the pet owner pays for convenience. Everyone in the chain has a reason to keep the cycle going.",
      "Trailing revenue was $4.66B, up 11.9%, and the latest quarter grew 9.9% to $1.21B at a 33.1% operating margin. The shares closed at $676.04, below a 52-week high of $769.98, for a market value of $53.26B.",
    ],
    quote:
      "The instrument is placed, not sold for its own sake. Value shows up later as consumables per clinic per year, which is the number that drives everything else.",
  },
  whatItDoes: {
    paragraphs: [
      "Companion-animal diagnostics is the main business: chemistry, haematology, urinalysis, cytology and rapid tests for infectious disease, sold to small-animal clinics. The customer is the practice owner or the lead veterinarian, and the buying decision is as much about workflow as about price.",
      "The reference laboratory serves clinics that need specialised tests, and it also acts as a competitive moat: a clinic that uses Idexx for both in-house and send-out testing has one supplier, one software interface and one set of reference ranges. Switching costs accumulate with every additional service.",
      "Water testing and livestock diagnostics are smaller but profitable. Water testing sells kits and instruments to utilities and laboratories that check for microbiological contamination; livestock testing serves dairy and poultry producers. Both are steadier and less correlated with pet spending than the core business.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The instrument placement is an investment, not a sale. Idexx puts analysers into clinics at prices that recover little of the development cost, because the profit arrives through the consumable used for every test. That is why gross margin of 62.7% is lower than a pure reagent company's and why the placement programme consumes cash before it generates any.",
      "Consumables are the engine. Once a clinic runs a certain number of tests a week, the cartridge revenue becomes a recurring annuity that scales with patient visits rather than with new instrument placements. The same logic applies to the reference lab, where each sample is a small, high-margin transaction.",
      "Software ties it together. Practice-management and diagnostic software makes the analyser part of the clinic's daily routine, and a clinic that changes suppliers has to retrain staff and re-validate workflows. That friction is worth more than any single product feature.",
    ],
    bullets: [
      {
        title: "In-clinic analysers",
        detail:
          "Placed at low initial cost to secure the consumable stream. The capital outlay precedes the revenue.",
      },
      {
        title: "Consumables",
        detail:
          "Cartridges, slides and reagents sold per test. The recurring, high-margin core of the model.",
      },
      {
        title: "Reference laboratory",
        detail:
          "Send-out testing for specialised assays. Adds revenue per clinic and deepens the relationship.",
      },
      {
        title: "Software",
        detail:
          "Practice management and result interpretation. Creates switching costs that protect the installed base.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $3.22B in FY2021 to $4.30B in FY2025, a compound rate of about 7.5% a year, and the trailing figure of $4.66B is growing at 11.9%. The acceleration in the trailing period is unusual for a mature diagnostics business and reflects both price and test volume.",
      "Third-party estimates call for $4.75B this fiscal year and $5.17B next, with EPS of $15.00 and $16.88. That implies about 10% growth followed by about 9%, consistent with the current run rate rather than a slowdown.",
      "The growth drivers are the number of tests per clinic, the number of clinics with an analyser, and price. The first is the most valuable because it requires no new capital: a clinic that runs more tests uses more cartridges on a machine that is already installed. The limit is veterinary visit volume, which is where a consumer slowdown would show up first.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has ranged between 26.7% and 31.6% over the past five years and is 32.3% on a trailing basis. The dip in FY2022 coincided with heavy investment in instrument placements and manufacturing, and the recovery since then reflects the consumables attached to that installed base.",
      "Free cash flow tells the placement story better than earnings. It was $636.0M in FY2021, fell to $394.1M in FY2022, then rose to $772.9M, $808.1M and $1.06B in the following three years. The dip is what happens when a company spends ahead of the annuity; the recovery is the annuity arriving.",
      "Return on invested capital of 47.3% is exceptional and is the number that justifies the multiple. A business that earns 47 cents on every dollar of capital can reinvest at a high rate for a long time, provided the market it sells into keeps growing. Return on equity of 63.4% is even higher but is flattered by a small equity base."
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.30B over the trailing year, a 28.0% margin, which is higher than the 25.4% net margin. The conversion is strong because the product is manufactured in bulk and the consumable revenue arrives with short payment cycles.",
      "Net debt is $651.3M, or 0.4x EBITDA. That is effectively a net-cash position for a company of this size, and it means the placement programme can be funded from operating cash flow without financial strain.",
      "The capital intensity is easy to underestimate. Every analyser placed in a clinic is an asset that Idexx either sells at a thin margin or leases, and the manufacturing capacity for consumables has to be built ahead of demand. The FY2022 free-cash-flow dip is the clearest illustration of that cycle."
    ],
  },
  valuation: {
    paragraphs: [
      "At $676.04 the shares trade at 45.1x trailing earnings, 32.4x EV/EBITDA, 11.6x EV/Sales and 40.8x free cash flow, for a 2.4% free-cash-flow yield. Only Intuitive Surgical at 37.1x and Lilly at 35.7x carry a higher EBITDA multiple in the peer table.",
      "The premium is defended by the return on invested capital. A business earning 47.3% on capital and growing revenue at 12% can justify a high multiple for longer than a business earning 12% on capital, because each dollar reinvested compounds faster. That is the argument the market is making.",
      "It is also the argument that fails first if growth slows. At 32.4x EBITDA, a deceleration to mid single digits would compress the multiple quickly, because the premium is paid for the growth rate rather than for the current cash flow.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twelve analysts contribute to the attributed third-party consensus, with a mean target of $717.17 and a range of $470.00 to $810.00. The low end is 30% below the last close, which is wide for a company with such predictable revenue.",
      "Estimates call for $1.18B of revenue next quarter and $15.00 of EPS this fiscal year, then $5.17B and $16.88. The current-year revenue estimate is slightly above the trailing run rate, so the analysts expect the growth to continue at roughly the current pace.",
      "A mean target only 6% above the last close, for a stock with a 47% return on capital, is a signal that the market is already paying for the quality. The estimates are not the controversial part; the multiple is."
    ],
  },
  risks: {
    intro:
      "Idexx has a strong balance sheet and a high-return model. The risks are about veterinary demand and about the price being paid for that quality.",
    items: [
      {
        title: "Veterinary visit volumes",
        severity: "High",
        detail:
          "Every consumable sale depends on a pet being brought to a clinic. A consumer slowdown reduces visits before it reduces test prices.",
        watch:
          "Companion-animal revenue growth and clinic traffic commentary.",
      },
      {
        title: "Valuation risk",
        severity: "High",
        detail:
          "At 32.4x EBITDA the shares embed a long period of double-digit growth. A slower rate would compress the multiple even if the business remained healthy.",
        watch:
          "The relationship between revenue growth and the EV/EBITDA multiple.",
      },
      {
        title: "Competition from reference labs",
        severity: "Medium",
        detail:
          "Large laboratory companies can offer send-out testing at lower prices and are developing their own in-clinic offerings. Price competition would hit the consumable margin.",
        watch:
          "Consumable revenue per clinic and any change in test pricing.",
      },
      {
        title: "Placement economics",
        severity: "Medium",
        detail:
          "The model requires spending on instruments before the annuity arrives. A slowdown in placements reduces future consumable revenue and leaves the cost behind.",
        watch:
          "Instrument placements and the capex line.",
      },
      {
        title: "Water and livestock cyclicality",
        severity: "Low",
        detail:
          "The smaller segments depend on municipal budgets and on producer economics, which move independently of pet spending.",
        watch:
          "Revenue growth in water and livestock relative to companion animal.",
      },
    ],
    watchlist: [
      {
        title: "Consumables per clinic",
        detail:
          "The purest measure of whether the installed base is being used more intensively.",
      },
      {
        title: "Operating margin",
        detail:
          "A sustained move below 30% would suggest placement costs are rising faster than the annuity.",
      },
      {
        title: "Free cash flow conversion",
        detail:
          "The FY2022 dip shows how quickly cash flow can fall when investment ramps.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Idexx is a diagnostics business with a capital-efficient annuity: place the analyser, sell the consumable, keep the clinic on the software. A 47.3% return on invested capital and a 28.0% free-cash-flow margin are the evidence that the model works.",
      "What is not known is how much of the current growth is price and how much is test volume. A clinic that raises prices can grow revenue even when visits are flat, and that kind of growth has a ceiling that is closer than it looks.",
      "At 32.4x EBITDA the shares need the growth to continue. The business is high quality; the question is whether the price leaves any room for the growth to be merely good rather than excellent.",
    ],
    questions: [
      "How much of revenue growth comes from tests per clinic versus new placements?",
      "What share of companion-animal revenue is recurring consumables?",
      "How sticky is the software once a clinic has standardised on it?",
      "What growth rate is required to justify 32.4x EBITDA?",
    ],
  },
};
