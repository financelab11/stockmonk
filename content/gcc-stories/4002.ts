import type { StockStory } from "@/content/stocks/types";

export const mouwasat: StockStory = {
  ticker: "4002",
  kicker: "Saudi Arabia · Private healthcare",
  title: "Mouwasat: Saudi private hospitals with a 20% return on equity",
  dek:
    "Mouwasat operates private hospitals and medical centres in Saudi Arabia, benefiting from insurance coverage and population growth. Revenue has grown steadily, the dividend yield is 3.8%, and the earnings multiple in the data feed needs correcting.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 3.45bn and net income of SAR 0.84bn, with a 25.5% operating margin and 20.4% return on equity.",
    "Revenue rose from SAR 2.14bn in 2021 to SAR 3.22bn in 2025, and net income from SAR 0.58bn to SAR 0.82bn.",
    "The company operates hospitals and medical centres in major Saudi cities and is expanding capacity.",
    "At SAR 55.60 the shares trade at about 13x net income; the 35.1x P/E in the data feed uses an EPS figure that does not reconcile with reported profit.",
    "Consensus has a mean target of SAR 77.94 from 13 analysts, with five strong buys and one sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/4002/financials/",
  irUrl: "https://www.mouwasat.com",
  bigPicture: {
    paragraphs: [
      "Mouwasat Medical Services owns and operates private hospitals, medical centres and pharmacies in Saudi Arabia. It provides secondary and tertiary care, diagnostics, outpatient services and long-term care, mainly to insured patients and self-pay customers.",
      "The equity is a play on Saudi healthcare spending, insurance penetration and population growth. Private hospitals benefit from waiting lists in the public system and from the expansion of mandatory health insurance. The main constraint is the availability of doctors, nurses and beds.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company operates hospitals in Riyadh, Dammam, Jubail, Qatif and other cities, with a focus on specialty care such as cardiology, oncology, orthopaedics and obstetrics. It also runs medical centres, laboratories and pharmacies.",
      "Mouwasat has been expanding capacity through new hospitals and bed additions, and it invests in medical equipment and digital systems. The group's brand and doctor network are its main competitive advantages.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from inpatient and outpatient services paid by insurers, the government and individuals. Operating margin was 25.5% on a trailing basis, healthy for a hospital operator and supported by a favourable payor mix.",
      "The main costs are staff, medical supplies, equipment and facility operations. Hospitals have high fixed costs, so occupancy and bed utilisation are the keys to profitability. Insurance reimbursement rates and claims processing affect cash collection.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 2.14bn in 2021 to SAR 3.22bn in 2025, and net income from SAR 0.58bn to SAR 0.82bn. Growth came from higher patient volumes, new capacity and price increases.",
      "The trailing twelve months show SAR 3.45bn of revenue, up 11.6%, and consensus expects SAR 3.6bn in 2026, up 10.9%, with EPS of SAR 4.38, up 6.4%. Growth is expected to remain solid, supported by insurance coverage and new hospitals.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was SAR 0.58bn in 2021, SAR 0.60bn in 2022, SAR 0.66bn in 2023, SAR 0.65bn in 2024 and SAR 0.82bn in 2025. The 2025 jump reflects higher volumes and better cost absorption.",
      "Return on equity was 20.4% on a trailing basis, and return on invested capital 15.7%, strong for a capital-intensive hospital group. The company carries SAR 1.18bn of debt and SAR 0.50bn of cash.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was SAR 0.61bn on a trailing basis, positive and supportive of the dividend. The dividend yield is 3.8%, modest for a healthcare company but backed by cash flow. Hospital capex is heavy, so the payout is likely to grow with earnings rather than from a higher payout ratio.",
      "The main calls on cash are new hospitals, bed expansion and equipment. The company has a conservative balance sheet and can fund growth without stretching its finances.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 55.60 the shares trade at about 13x trailing net income, based on SAR 0.84bn of profit and a SAR 11.1bn market capitalisation. The 35.1x P/E in the data feed uses an EPS figure that does not reconcile with net income and the share count, so it overstates the multiple.",
      "On EV/EBITDA the shares trade at 10.9x, in line with global hospital operators. Third-party consensus, attributed and dated November 2026, has a mean target of SAR 77.94 and a range of SAR 57.00–100.00 from 13 analysts. Five carry a strong buy, one a buy, six a hold and one a sell. FY2026 revenue is expected at SAR 3.6bn and EPS at SAR 4.38. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is good, with a positive tilt but several holds and one sell. The bulls focus on the growth in private healthcare and the returns; the sceptics worry about valuation and capacity additions.",
      "The key debate is whether Mouwasat can fill new beds and maintain margins as it expands. A strong insurance market and doctor network support the growth; cost inflation and competition are the risks.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 77.94 (range SAR 57.00–100.00), 13 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 3.6bn, +10.9%; EPS SAR 4.38, +6.4%." },
      { title: "Ratings mix", detail: "5 strong buy, 1 buy, 6 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are insurance reimbursement, capacity execution and cost inflation.",
    items: [
      {
        title: "Reimbursement",
        severity: "High",
        detail:
          "Insurers and the government set reimbursement rates. Lower rates or slower claims payment would hit revenue and cash flow.",
        watch: "Reimbursement rates, claims days, payor mix.",
      },
      {
        title: "Capacity execution",
        severity: "Medium",
        detail:
          "New hospitals and beds take time to ramp up. Weak occupancy would dilute returns.",
        watch: "Occupancy, bed additions, ramp-up.",
      },
      {
        title: "Cost inflation",
        severity: "Medium",
        detail:
          "Staff and medical-supply costs are rising. If pricing cannot keep up, margins compress.",
        watch: "Staff costs, supply costs, operating margin.",
      },
      {
        title: "Competition",
        severity: "Low",
        detail:
          "Other private hospital groups are expanding in the same cities.",
        watch: "Market share, doctor retention, pricing.",
      },
    ],
    watchlist: [
      { title: "Occupancy", detail: "The key driver of hospital returns." },
      { title: "Reimbursement", detail: "Insurance and government rates." },
      { title: "Capacity", detail: "New beds and hospitals." },
      { title: "Dividend", detail: "Payout and cash flow." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Mouwasat is a high-return private hospital operator with a strong position in Saudi healthcare, a 3.8% dividend yield and a 20.4% return on equity. On net income the shares trade at about 13x, which is reasonable for the growth.",
      "The investment case is quality growth in a defensive sector. The main risks are reimbursement and capacity execution; the main support is the brand, the doctor network and the insurance tailwind.",
    ],
    questions: [
      "What is the occupancy rate across the hospital network?",
      "How are reimbursement rates trending?",
      "What is the pipeline of new beds and hospitals?",
      "Why does the reported EPS not reconcile with net income?",
    ],
  },
};
