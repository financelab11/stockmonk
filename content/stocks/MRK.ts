import type { StockStory } from "./types";

export const MRK: StockStory = {
  ticker: "MRK",
  kicker: "Healthcare · Drug Manufacturers",
  title: "Merck's reported earnings are an artefact; its cash flow is the fact",
  dek: "A trailing P/E of 147.5x and an EV/EBITDA of 43.1x are both distorted by charges that run through operating income. The same company trades at 24.5x free cash flow.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $67.38B, up 4.9%, but operating margin was 7.1% and net margin 3.6% because of charges.",
    "Free cash flow of $14.75B is a 21.9% margin — six times the profit margin reported on the income statement.",
    "The balance sheet holds $9.65B of net cash, so the charges are an accounting event rather than a solvency problem.",
    "One oncology franchise pays for most of the company, and its patent protection expires later this decade.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/310158/000031015826000063/mrk-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000310158&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Merck sells prescription medicines, vaccines and animal health products. Its biggest business is oncology, built around a single immunotherapy that is used across dozens of cancer types, often in combination with chemotherapy. Vaccines, hospital medicines and animal health fill out the portfolio.",
      "The concentration is the whole investment question. One product franchise generates a large share of revenue and an even larger share of profit, and it loses patent protection later this decade. Everything else the company does — new launches, vaccine growth, animal health, acquisitions — is measured against the size of the hole that expiry will leave.",
      "Trailing revenue was $67.38B, up 4.9%. The reported operating margin of 7.1% and net margin of 3.6% are not a reflection of the underlying business; they are the residue of large charges booked in the first half of the fiscal year. The shares closed at $146.73, near the top of a 52-week range of $84.35 to $156.92, for a market value of $361.73B.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Oncology is the profit centre. The immunotherapy is administered in hospitals and cancer centres, often for long periods, and it is priced at a level that reflects survival benefit. Because it is used across many tumour types, its revenue is diversified by indication even though it depends on one molecule.",
      "Vaccines are the second pillar: HPV, paediatric combinations, pneumococcal and rotavirus products. Vaccine revenue behaves differently from drug revenue — it is bought in bulk by public programmes and tends to be stickier once a country's immunisation schedule includes a product, but it is also lumpier and more exposed to a single market's policy decisions.",
      "Animal health sells parasiticides and vaccines for pets and livestock. It is a smaller, steadier business with consumer-like demand and its own competitive dynamics, and it gives Merck revenue that is not exposed to human drug pricing."
    ],
    bullets: [
      {
        title: "Oncology",
        detail:
          "The largest and most profitable franchise, concentrated in one immunotherapy used across many cancer types.",
      },
      {
        title: "Vaccines",
        detail:
          "HPV, paediatric and pneumococcal products sold largely through public immunisation programmes.",
      },
      {
        title: "Hospital and specialty care",
        detail:
          "Acute-care medicines and newer launches in cardiovascular and infectious disease.",
      },
      {
        title: "Animal health",
        detail:
          "Parasiticides and vaccines for pets and livestock. Steady demand, separate pricing dynamics.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 71.8% is the economics of a patented molecule: manufacturing is cheap relative to price, and the cost of goods is a minor line. What consumes the rest is research, selling and the rebates that payers extract. In oncology, the sales force is specialist and the clinical evidence is the pricing argument.",
      "The charge problem is structural rather than accidental. Merck has bought much of its pipeline, and when a deal is structured as an asset acquisition the acquired research expense runs through operating income immediately rather than sitting on the balance sheet as goodwill. That is why a year of good revenue can produce a quarter with a negative operating margin.",
      "Two consecutive quarters of losses in the first half of fiscal 2026 — operating margins of -21.7% and -4.1% — followed by a 30.7% margin in the third quarter is the pattern. The business did not change direction twice in six months; the accounting did."
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $48.70B in FY2021 to $65.01B in FY2025, with most of the increase coming from oncology and vaccines. The trailing figure of $67.38B is a further step up, but the growth rate has slowed to 4.9%.",
      "Third-party estimates call for $67.24B this fiscal year and $69.46B next, with EPS of $2.78 and then $8.98. The revenue estimate is slightly below the trailing figure, which means the consensus expects the current year to be flat before growth resumes. The EPS estimate nearly triples in the second year because the charges are assumed to stop.",
      "The growth that matters is the replacement of the oncology franchise. New launches in cardiovascular disease, infectious disease and earlier lines of cancer therapy are the candidates, and each has to be large enough to matter against a product that generates tens of billions of dollars."
    ],
    bullets: [
      {
        title: "New oncology indications",
        detail:
          "Extending the existing immunotherapy into earlier stages of cancer adds revenue without a new molecule.",
      },
      {
        title: "Vaccine programmes",
        detail:
          "Public immunisation schedules create durable revenue, but demand can be lumpy and policy-dependent.",
      },
      {
        title: "Post-expiry transition",
        detail:
          "A subcutaneous formulation and combination patents are ways to keep patients on a franchise after the core patent ends.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows how often charges appear. Operating income was $13.88B in FY2021, $16.44B in FY2022, $1.89B in FY2023, $19.94B in FY2024 and $21.07B in FY2025. Revenue moved in a narrow band across those years; operating income moved by a factor of ten.",
      "That FY2023 collapse, followed by a full recovery, is the single most useful precedent for reading the current numbers. The franchise was intact throughout; a charge consumed the profit. Anyone who sold on the FY2023 margin would have missed the following two years.",
      "Return on equity of 1.9% and return on invested capital of 3.2% are the arithmetic consequence of a depressed numerator, not evidence of a low-return business. In FY2024, with charges absent, the company earned $19.94B of operating income on $64.17B of revenue."
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $14.75B over the trailing year, a 21.9% margin, and has been between $8.67B and $18.10B in each of the last five fiscal years. The cash flow is far more stable than the earnings because charges that hit operating income often do not consume cash in the same period.",
      "The balance sheet holds $9.65B of net cash. That matters for a company facing a patent cliff, because it can buy pipeline assets or absorb a disappointing launch without needing to raise equity at an inconvenient moment.",
      "The dividend yields 2.3%. Between the dividend, research spending and acquisitions, free cash flow is fully committed, and the company has chosen to fund pipeline replacement with cash rather than debt. That is the conservative version of the strategy and it explains why the balance sheet is still in net cash."
    ],
  },
  valuation: {
    paragraphs: [
      "At $146.73 the shares trade at 147.5x trailing earnings, 43.1x EV/EBITDA, 5.2x EV/Sales and 24.5x free cash flow, for a 4.1% free-cash-flow yield. The first two multiples are not usable this year. A P/E of 147.5x on depressed earnings and an EV/EBITDA of 43.1x on charges that sit inside EBITDA measure the accounting, not the company.",
      "The free-cash-flow multiple is the one that survives. At 24.5x cash flow, Merck is priced in line with a mature pharmaceutical business rather than a growth company, which is consistent with a 4.9% revenue growth rate and a patent expiry on the horizon.",
      "The peer table is a caution. Merck's 43.1x EV/EBITDA against 26.8x for J&J and 25.9x for Thermo Fisher looks like a huge premium, and it is — but it is a premium on a denominator that has been artificially reduced. The comparison only becomes meaningful once the charges are stripped out."
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed third-party consensus, with a mean target of $161.53 and a range of $105.00 to $186.00. The spread is wide and the low end is nearly 30% below the last close, which is what a patent-cliff debate looks like.",
      "Estimates call for $16.28B of revenue next quarter and $2.78 of EPS this fiscal year, then $69.46B and $8.98 next year. The near-tripling of EPS in the second year is the analysts assuming the charges stop; it is not an operating forecast.",
      "The revenue estimates are the honest signal: flat this year, low single-digit growth next. The consensus is not expecting the current franchise to grow its way out of the expiry."
    ],
  },
  risks: {
    intro:
      "Merck's risk is concentrated in one patent date and one molecule. The balance sheet is strong; the strategic question is whether the replacement pipeline is large enough.",
    items: [
      {
        title: "Oncology patent expiry",
        severity: "High",
        detail:
          "The largest franchise loses exclusivity later this decade. When that happens, revenue does not decline gradually — biosimilar or generic competition typically takes most of the volume within a few years.",
        watch:
          "The share of revenue from the largest product and the progress of replacement launches.",
      },
      {
        title: "US drug pricing",
        severity: "High",
        detail:
          "Government price negotiation and formulary pressure reduce net price on the products that pay for research. A cut on the largest product compounds over every year of remaining exclusivity.",
        watch:
          "Net price realisation and any product drawn into negotiated pricing.",
      },
      {
        title: "Vaccine demand",
        severity: "Medium",
        detail:
          "Vaccine revenue depends on public programmes and on demand in a small number of large markets. A policy change or a weak immunisation season moves the line sharply.",
        watch:
          "Vaccine revenue growth by product and by geography.",
      },
      {
        title: "Acquisition charges",
        severity: "Medium",
        detail:
          "The company has repeatedly booked large acquired research charges that turn profitable years into losses. The cash cost is real even when the accounting is one-off.",
        watch:
          "Acquired in-process research expense and the pace of deal-making.",
      },
      {
        title: "Animal health cyclicality",
        severity: "Low",
        detail:
          "Pet and livestock spending is more discretionary than human medicine, and livestock demand moves with farm economics.",
        watch:
          "Animal health revenue growth relative to the rest of the portfolio.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "The only measure that stays coherent through the charge cycles; it should remain near 20% of revenue.",
      },
      {
        title: "Replacement revenue",
        detail:
          "Revenue from launches outside the main oncology franchise is the number that decides the post-expiry base.",
      },
      {
        title: "Net price",
        detail:
          "Volume growth can mask price erosion for years; realised price is the earlier warning.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Merck is a high-margin pharmaceutical business with a single dominant franchise and a balance sheet that can absorb shocks. The trailing figures look weak only because charges have been running through the income statement, and the cash flow shows what the business actually earns.",
      "The strategic problem is arithmetic. A product that generates a large share of revenue will lose exclusivity later this decade, and the replacement portfolio has to be built before that happens. Buying pipeline assets accelerates the process but produces the charges that make the reported numbers so volatile.",
      "For a reader, the exercise is to value the cash flow that exists today, then decide how much of the current market value is a bet on the replacement pipeline. The 24.5x free-cash-flow multiple is the price of that bet.",
    ],
    questions: [
      "How much of operating income comes from the single largest franchise?",
      "What did the first-half charges actually buy?",
      "How much of the replacement revenue is already approved versus still in trials?",
      "What happens to the dividend if oncology revenue falls by half?",
    ],
  },
};
