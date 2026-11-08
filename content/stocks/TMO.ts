import type { StockStory } from "./types";

export const TMO: StockStory = {
  ticker: "TMO",
  kicker: "Healthcare · Medical Diagnostics & Research",
  title: "Thermo Fisher sells the tools other companies discover drugs with",
  dek: "Four businesses under one roof, from thin-margin laboratory distribution to high-margin reagents. The consolidated gross margin of 41.1% hides how different those economics are.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $47.35B, up 8.3%, at an operating margin of 17.9%.",
    "Operating margin has fallen from 25.6% in FY2021 to 17.4% in FY2025 as pandemic-era demand unwound.",
    "Free cash flow of $7.60B is a 16.0% margin, and the company holds $6.06B of net cash.",
    "At 25.9x EV/EBITDA it is the cheapest business in the healthcare peer set, on the lowest growth rate in that group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/97745/000009774526000018/tmo-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000097745&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Thermo Fisher makes the instruments, reagents, consumables and services that pharmaceutical companies, universities, hospitals and industrial labs use to run experiments and test samples. It does not sell cures. It sells the equipment and the chemicals that make the search for cures possible, which means its revenue tracks research budgets rather than patent expiries.",
      "The company is really a portfolio of four businesses with different margins and different cycles. Analytical instruments are a capital-goods business sold to labs. Life sciences reagents are a recurring consumable. Specialty diagnostics sells tests to hospitals and reference labs. Laboratory products and biopharma services is the largest revenue line and the lowest-margin one, because it includes distribution of other companies' equipment alongside services for drug manufacturers.",
      "Trailing revenue was $47.35B, up 8.3%, and the latest quarter grew 9.1% to $12.14B at an 18.6% operating margin. The shares closed at $694.76, near the top of a 52-week range of $435.27 to $712.17, for a market value of $257.42B.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The customer list is the pharmaceutical and biotechnology industry, plus academic research, clinical laboratories, food and environmental testing, and government. These customers buy repeatedly rather than once, and switching a validated laboratory workflow to a different supplier requires re-validation that most labs would rather avoid. That inertia is the commercial moat.",
      "The segments connect through a shared commercial channel. Thermo Fisher sells into the same accounts through the same sales force and catalogue, so an acquisition that adds a new instrument or reagent can be pushed through an existing distribution network. That is the logic behind a long series of deals, and it is also the reason the balance sheet carries the goodwill those deals created.",
      "Geography matters more here than for a pure US business. A large share of revenue comes from outside the United States, including China, where biopharma research spending and local competition both affect growth.",
    ],
    bullets: [
      {
        title: "Laboratory products and biopharma services",
        detail:
          "The largest revenue line and the lowest margin. Distribution of lab equipment plus services to drug manufacturers.",
      },
      {
        title: "Life sciences solutions",
        detail:
          "Reagents, media and consumables used in biological research and production. The recurring, high-margin core.",
      },
      {
        title: "Analytical instruments",
        detail:
          "Mass spectrometers, electron microscopes and chromatography systems. A capital-goods cycle tied to lab budgets.",
      },
      {
        title: "Specialty diagnostics",
        detail:
          "Clinical tests sold to hospitals and reference labs, with reimbursement as the limiting factor.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The consolidated gross margin of 41.1% looks unremarkable next to a pharmaceutical company at 70% or more, and the reason is mix. Distribution revenue is recorded at close to the price paid for the goods, so it adds revenue without adding much margin. Reagents and consumables, by contrast, are manufactured at a fraction of their selling price. The blended number is an average of very different businesses.",
      "The operating margin of 17.9% is where scale shows up. A single global sales force, one distribution network and one manufacturing footprint can support four segments, so incremental revenue costs less to serve than the first dollar did. That is why the company has been able to keep margins near 17% while absorbing the loss of pandemic-era revenue.",
      "Instrument sales also work as a wedge. A lab that buys a mass spectrometer buys the consumables, service contract and software that go with it for years. The instrument sale is the entry ticket; the annuity comes afterwards, and it is the part that deserves a higher multiple.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $39.21B in FY2021 to $44.91B in FY2022, then stalled: $42.86B in FY2023 and $42.88B in FY2024 before recovering to $44.56B in FY2025. That flat stretch is the unwinding of pandemic demand — testing, vaccine production and the surge in laboratory spending all faded at once.",
      "The trailing figure of $47.35B is 8.3% above the prior year, so the base business has resumed growing. Third-party estimates call for $48.01B this fiscal year and $50.54B next, which implies growth slowing to around 5% after the current recovery year.",
      "The long-run driver is biopharma research spending. Drug companies fund discovery from their own cash flow, and when a patent cliff approaches they cut costs before they cut research. Academic and government funding adds a second, more political, source of demand that moves with budgets rather than with earnings.",
    ],
    bullets: [
      {
        title: "Recurring consumables",
        detail:
          "Reagents and supplies grow with the number of experiments run, not with the number of instruments sold.",
      },
      {
        title: "Biopharma services",
        detail:
          "Outsourced development and manufacturing work grows as drug companies externalise more of their production.",
      },
      {
        title: "Acquisitions",
        detail:
          "A steady programme of bolt-on deals adds capability and revenue, but also goodwill and integration risk.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin trend is the most important thing on the page. Operating margin was 25.6% in FY2021, 18.7% in FY2022, 16.0% in FY2023, 17.1% in FY2024 and 17.4% in FY2025. A business that once converted a quarter of revenue into operating profit now converts about a sixth.",
      "Part of that is mix: pandemic products carried exceptional margins, and their disappearance mechanically lowers the average. Part is acquisition: bought businesses usually arrive with lower margins than the core and take years to improve. The recent quarterly sequence — 16.9%, 17.5%, 18.5%, 16.9%, 17.4%, 18.6% — suggests the decline has stabilised rather than continued.",
      "Return on invested capital of 22.6% is the strongest evidence that the acquisition strategy has worked. A serial acquirer that earns 22.6% on invested capital is creating value with the deals; one that earns 8% is destroying it. Return on equity of 19.9% is lower because of the cash balance and the goodwill, not because of weak operating returns.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $7.60B over the trailing year, a 16.0% margin, and the company has produced between $6.29B and $7.27B in each of the last five fiscal years. That stability is unusual for a business with a capital-goods component, and it reflects the recurring consumables and services underneath.",
      "The balance sheet holds $6.06B of net cash. For a company that has grown partly by acquisition, net cash is a strategic asset: it means the next deal can be funded without stretching the balance sheet, and it removes refinancing risk from the list of things to worry about.",
      "Capital spending is the main claim on cash, because reagents and biopharma services require manufacturing capacity that must be built and validated before it generates revenue. The dividend is small at a 0.3% yield, so almost all free cash flow is available for capacity, acquisitions and buybacks.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $694.76 the shares trade at 36.4x trailing earnings, 25.9x EV/EBITDA, 5.3x EV/Sales and 33.9x free cash flow, a 3.0% free-cash-flow yield. The earnings multiple is the highest of the three main multiples because net income is depressed relative to cash flow.",
      "On EV/EBITDA the company is the cheapest in the peer table, just below AbbVie at 26.6x and J&J at 26.8x, and well below Intuitive at 37.1x and Lilly at 35.7x. It also has the lowest revenue growth in that group at 8.3%, which is the trade the market is making: a lower multiple for a slower, steadier business.",
      "The question the multiple poses is whether 17% operating margins are the new normal or a trough. At 25.6% margins the same revenue would produce far more operating profit, and the multiple would look very different.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts contribute to the attributed third-party consensus, with a mean target of $752.12 and a range of $590.00 to $830.00. The dispersion is moderate for a company of this size and mostly reflects different assumptions about research spending and China.",
      "Estimates call for $12.85B of revenue next quarter and $25.28 of EPS for the fiscal year, then $50.54B and $27.78 the year after. The EPS estimate is well above the $18.96 trailing figure, which again reflects a difference in basis rather than a forecast of sudden acceleration.",
      "The revenue estimates are the more useful signal: $48.01B this year against $44.56B in FY2025 implies about 8% growth, and $50.54B next year implies about 5%. The consensus is not expecting a return to the growth rates of the pandemic years.",
    ],
  },
  risks: {
    intro:
      "Thermo Fisher's risks are mostly about its customers' budgets. The company is conservatively financed; the uncertainty is on the demand side.",
    items: [
      {
        title: "Biopharma research spending",
        severity: "High",
        detail:
          "Drug companies are the largest customer group. When they cut costs ahead of a patent cliff, instrument orders and discretionary spending are the first things to go.",
        watch:
          "Research spending guidance from large pharmaceutical customers and instrument order trends.",
      },
      {
        title: "China and geopolitics",
        severity: "High",
        detail:
          "A significant share of revenue comes from outside the United States, and Chinese domestic suppliers are being supported by local policy. Export controls can remove addressable market quickly.",
        watch:
          "China revenue growth and any change in trade rules affecting scientific instruments.",
      },
      {
        title: "Academic and government funding",
        severity: "Medium",
        detail:
          "University and agency budgets are set politically and do not respond to the company's commercial performance.",
        watch:
          "Public research funding decisions in the United States and Europe.",
      },
      {
        title: "Acquisition integration",
        severity: "Medium",
        detail:
          "Growth by acquisition adds goodwill and complexity. A large deal that fails to earn its cost of capital would impair the return on invested capital that justifies the strategy.",
        watch:
          "Return on invested capital and the pace of goodwill impairments.",
      },
      {
        title: "Pandemic demand hangover",
        severity: "Low",
        detail:
          "The FY2023 and FY2024 revenue plateau shows how much of the 2021-2022 base was temporary. A further unwind in any remaining pandemic-linked line would slow growth again.",
        watch:
          "Year-over-year revenue growth in the segments most exposed to testing and vaccine production.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "A move back above 19% would suggest the mix has stabilised; a move below 16% would suggest another leg down.",
      },
      {
        title: "Recurring revenue share",
        detail:
          "Consumables and services are the stable part of the model and should grow faster than instruments over time.",
      },
      {
        title: "Free cash flow conversion",
        detail:
          "Free cash flow has been steadier than earnings, so a fall in cash conversion would be an early warning.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Thermo Fisher is the pick-and-shovel supplier of the drug industry: it sells the instruments, reagents and services that other companies use to discover and manufacture medicines. That position produces recurring revenue, a 22.6% return on invested capital and a net cash balance sheet.",
      "The last four years have been a lesson in what happens when a windfall ends. Revenue stalled for three years and operating margin fell by eight points from its FY2021 peak. The business has stabilised, but at a lower margin than the market became used to.",
      "The decision for a reader is whether 17% operating margins and mid-single-digit growth deserve 25.9x EBITDA. That is cheaper than the rest of the peer group, and the answer depends on whether research budgets grow faster than the companies that fund them.",
    ],
    questions: [
      "How much of FY2021's 25.6% operating margin was pandemic-related?",
      "What share of revenue is recurring consumables versus one-time instrument sales?",
      "How exposed is the business to Chinese domestic suppliers?",
      "Does the acquisition programme still earn its cost of capital?",
    ],
  },
};
