import type { StockStory } from "@/content/stocks/types";

export const yansab: StockStory = {
  ticker: "2290",
  kicker: "Saudi Arabia · Petrochemicals",
  title: "Yansab: a low-cost petrochemical producer at a cyclical trough",
  dek:
    "Yansab makes ethylene, propylene, polyethylene and glycols from Saudi gas feedstock. Earnings have collapsed from the 2021 peak, and the shares trade at 39x depressed earnings with a 6.4% dividend yield.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 6.26bn and net income of SAR 0.45bn, with an 8.7% operating margin and 4.5% return on equity.",
    "2025 revenue was SAR 5.60bn and net income SAR 0.08bn, near break-even after a loss in 2023.",
    "The company operates an integrated petrochemical complex in Yanbu, using ethane and propane feedstock.",
    "At SAR 31.12 the shares trade at 39.2x trailing earnings and 10.5x EV/EBITDA, with a 6.4% dividend yield.",
    "Consensus has a mean target of SAR 32.39 from nine analysts, with a split ratings mix including two negative ratings.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/2290/financials/",
  irUrl: "https://www.yansab.com.sa",
  bigPicture: {
    paragraphs: [
      "Yansab, Yanbu National Petrochemical Company, operates an integrated petrochemical complex in Yanbu on Saudi Arabia's Red Sea coast. It produces ethylene, propylene, polyethylene, polypropylene, monoethylene glycol and other chemicals, using gas feedstock from Saudi Aramco.",
      "The equity is a cyclical commodity producer with a structural cost advantage. Saudi ethane is among the cheapest feedstock in the world, which allows Yansab to remain cash-generative even at low product prices. The trade-off is that earnings are set by global petrochemical spreads, which have been weak since 2022.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The complex converts ethane and propane into ethylene and propylene, which are then polymerised into polyethylene and polypropylene, and converted into glycols and other derivatives. The products are sold to converters in Asia, Europe and the Middle East for packaging, pipes, textiles and consumer goods.",
      "Yansab's plants are integrated on one site, which reduces logistics and energy costs. The company also has a share in a joint venture and sells some products through Saudi Aramco's marketing network.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the volume of product sold multiplied by the global benchmark price. The spread between product prices and feedstock costs is the profit driver. Operating margin was 8.7% on a trailing basis, down from 23.3% in 2021 when spreads were exceptionally wide.",
      "The main costs are gas feedstock, energy, maintenance and logistics. Feedstock is supplied under long-term agreements at prices linked to Saudi gas pricing, which is well below European and Asian alternatives. The company's profitability therefore depends more on product prices than on input costs.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was SAR 7.50bn in 2021, SAR 7.02bn in 2022, SAR 4.53bn in 2023, SAR 6.16bn in 2024 and SAR 5.60bn in 2025. Net income was SAR 1.53bn, SAR 0.41bn, a loss of SAR 0.49bn, SAR 0.42bn and SAR 0.08bn over the same years, tracking the petrochemical cycle.",
      "The trailing twelve months show SAR 6.26bn of revenue, up 9.6%, and SAR 0.45bn of net income. Consensus expects SAR 6.5bn of revenue in 2026, up 16.7%, and EPS of SAR 1.07, a large increase from the depressed base.",
    ],
  },
  performance: {
    paragraphs: [
      "The earnings history is a classic commodity cycle: a strong 2021, a weak 2022, a loss in 2023, a partial recovery in 2024 and near-break-even in 2025. The 2023 loss reflected weak spreads and maintenance costs, not a structural problem with the assets.",
      "Return on equity was 4.5% on a trailing basis, and return on invested capital 4.4%, both below the cost of capital at the trough. The company has almost no debt — SAR 0.11bn against SAR 10.19bn of equity — and holds SAR 0.49bn of cash, one of the strongest balance sheets in the sector.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was SAR 0.57bn on a trailing basis, positive even at trough margins because of the low feedstock cost and the net cash balance. The dividend yield is 6.4%, supported by the balance sheet rather than by current earnings.",
      "The main calls on cash are maintenance, minor growth projects and the dividend. The net cash position gives the company flexibility to maintain the payout through the cycle, though a prolonged downturn would test it.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 31.12 the shares trade at 39.2x trailing earnings and 10.5x EV/EBITDA. The earnings multiple is high because profits are depressed; the EV/EBITDA multiple is a better measure and is in line with global petrochemical producers.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 32.39 and a range of SAR 30.00–37.00 from nine analysts. One carries a strong buy, one a buy, five a hold, one a sell and one a strong sell. FY2026 revenue is expected at SAR 6.5bn and EPS at SAR 1.07. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is moderate and neutral: five holds and two negative ratings against two positive ones. The market is waiting for a recovery in spreads before turning more positive.",
      "The key debate is the timing of the petrochemical cycle. New global capacity has kept spreads under pressure, while demand from China has been weak. A supply-driven recovery would lift earnings sharply given the operating leverage.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 32.39 (range SAR 30.00–37.00), 9 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 6.5bn, +16.7%; EPS SAR 1.07 from a depressed base." },
      { title: "Ratings mix", detail: "1 strong buy, 1 buy, 5 hold, 1 sell, 1 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are petrochemical spreads, global capacity and the dividend through a prolonged trough.",
    items: [
      {
        title: "Petrochemical spreads",
        severity: "High",
        detail:
          "Profit depends on the spread between product prices and feedstock costs. Weak spreads have already pushed earnings near zero.",
        watch: "Polyethylene and glycol prices, feedstock costs.",
      },
      {
        title: "Global capacity",
        severity: "High",
        detail:
          "New plants in Asia and the Middle East can oversupply the market and keep spreads depressed for years.",
        watch: "Capacity announcements, Chinese demand.",
      },
      {
        title: "Operational risk",
        severity: "Medium",
        detail:
          "An integrated complex is exposed to outages and maintenance, which can reduce volumes.",
        watch: "Utilisation, turnaround schedule, safety.",
      },
      {
        title: "Dividend sustainability",
        severity: "Medium",
        detail:
          "The 6.4% yield is supported by the net cash balance, but a prolonged downturn would reduce earnings and the payout.",
        watch: "Free cash flow, payout ratio, net cash.",
      },
    ],
    watchlist: [
      { title: "Spreads", detail: "Polyethylene and glycol margins." },
      { title: "Capacity", detail: "Global supply additions." },
      { title: "Utilisation", detail: "Plant reliability." },
      { title: "Dividend", detail: "Payout and net cash." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Yansab is a low-cost petrochemical producer with a net cash balance sheet and a 6.4% dividend yield. It is trading at a cyclical trough, which makes the earnings multiple look high and the EV/EBITDA multiple more informative.",
      "The investment case is a bet on a petrochemical recovery. The main risks are spreads and global capacity; the main support is the feedstock advantage and the balance sheet.",
    ],
    questions: [
      "Where are polyethylene and glycol spreads versus mid-cycle?",
      "How much capacity is being added globally?",
      "Is the dividend covered at trough earnings?",
      "What is the maintenance schedule for 2026?",
    ],
  },
};
