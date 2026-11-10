import type { StockStory } from "@/content/stocks/types";

export const etisalat: StockStory = {
  ticker: "ETISALAT",
  kicker: "United Arab Emirates · Telecom and technology",
  title: "e&: a telecom incumbent reinventing itself as a technology group",
  dek:
    "Emirates Telecommunications, now e&, has grown from a UAE operator into a 16-market telecom and technology group. The core business is cash-generative, the dividend is 4.5%, and the shares trade below 10x earnings.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of AED 78.1bn, EBITDA of AED 32.8bn and net income of AED 19.8bn, with a 28.6% return on equity.",
    "Revenue grew from AED 53.3bn in 2021 to AED 72.9bn in 2025, helped by acquisitions and regional expansion.",
    "The group spans telecom, enterprise technology, fintech and media across the Middle East, Africa and Asia.",
    "At 9.4x earnings and 6.2x EV/EBITDA, the shares are cheap for a telecom with a growing technology arm.",
    "Consensus has a mean target of AED 23.05 from 16 analysts, with FY2026 revenue growth of 6.9%.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/ETISALAT/financials/",
  irUrl: "https://www.eand.com",
  bigPicture: {
    paragraphs: [
      "e& is the UAE's incumbent telecom operator, with a portfolio that now includes enterprise technology, fintech, media and a set of international telecom investments. It owns a majority of Maroc Telecom and has stakes in operators across the Middle East, Africa and Asia. The group also owns e& enterprise, e& money and a growing data-centre and cloud business.",
      "The equity is a telecom cash story with a technology growth option. The core UAE business is mature but highly profitable; the international operations add growth and currency exposure; the technology businesses are smaller but growing faster. The market values the group at a low multiple because it treats it as a telecom, not a tech company.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The group provides mobile, fixed, broadband and enterprise connectivity in the UAE and through its international operators. It also sells ICT, cloud, cybersecurity, data-centre and managed services through e& enterprise, and digital wallets and payments through e& money.",
      "The international portfolio includes Maroc Telecom and stakes in operators in Saudi Arabia (Mobily), Egypt and Pakistan. Those assets add scale and growth, but they also bring regulatory, currency and political risk.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from subscriptions, usage, wholesale, enterprise contracts and device sales. The UAE business is the cash engine, with high margins and a strong market position. The international operators contribute revenue but at lower margins.",
      "The technology businesses are smaller but carry higher growth and, in some cases, better margins. The group is investing in data centres, cloud and AI to diversify away from connectivity.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 53.3bn in 2021 to AED 72.9bn in 2025, and the trailing twelve months show AED 78.1bn, up 11.7%. Growth has come from acquisitions and from enterprise and digital services, not from the mature UAE consumer market.",
      "Consensus for FY2026 assumes revenue of AED 77.9bn, up 6.9%, and EPS of AED 1.40, down 21%. The earnings decline likely reflects one-off gains in the prior year and higher investment; revenue growth is expected to remain positive.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew from AED 9.3bn in 2021 to AED 14.4bn in 2025, and the trailing twelve months show AED 19.8bn. The trailing figure may include one-off gains, so the underlying run rate is closer to the 2025 level.",
      "Operating margin expanded from 24.0% in 2021 to 29.6% on a trailing basis, helped by the mix shift toward higher-margin businesses and by cost control. Return on equity was 28.6%, high for a telecom.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 17.8bn on a trailing basis, comfortably covering the 4.5% dividend. The group carries AED 74.9bn of debt and AED 51.6bn of cash, reflecting the international acquisitions.",
      "The dividend is a central part of the return, and the payout has been stable. The group has also been monetising towers and infrastructure assets, which can release cash without reducing the operating footprint.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 21.32 the shares trade at 9.4x trailing earnings and 6.2x EV/EBITDA, a discount to global telecoms and a deep discount to technology companies. The market is valuing e& as a telecom with an international portfolio, not as a digital growth story.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 23.05 and a range of AED 19.30–28.00 from 16 analysts. Seven carry a strong buy, two a buy and seven a hold. FY2026 revenue is expected at AED 77.9bn and EPS at AED 1.40. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are positive but split, with half the coverage neutral. The bulls point to the dividend, the technology optionality and the low multiple; the neutrals worry about the drag from international operations and the cost of the digital transition.",
      "The key debate is whether e& can grow the technology businesses fast enough to change the market's perception, or whether it remains a telecom with a collection of international stakes.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 23.05 (range AED 19.30–28.00), 16 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 77.9bn, +6.9%; EPS AED 1.40, -21%." },
      { title: "Ratings mix", detail: "7 strong buy, 2 buy, 7 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are international operations, competition in the UAE and the execution of the technology strategy.",
    items: [
      {
        title: "International portfolio",
        severity: "Medium",
        detail:
          "Maroc Telecom and the other international operators add currency, regulatory and political risk, and lower margins.",
        watch: "International revenue, currency, regulatory decisions.",
      },
      {
        title: "UAE competition",
        severity: "Medium",
        detail:
          "du and new digital providers compete for consumer and enterprise customers.",
        watch: "Market share, ARPU, enterprise wins.",
      },
      {
        title: "Technology execution",
        severity: "Medium",
        detail:
          "The enterprise, cloud and fintech businesses are smaller and face strong competition. They may not move the group needle quickly.",
        watch: "e& enterprise growth, e& money, data-centre utilisation.",
      },
      {
        title: "Leverage",
        severity: "Low",
        detail:
          "Debt of AED 74.9bn reflects the acquisitions, but cash flow covers the dividend and the balance sheet is manageable.",
        watch: "Net debt/EBITDA, refinancing.",
      },
    ],
    watchlist: [
      { title: "Dividend", detail: "Payout and coverage." },
      { title: "e& enterprise", detail: "Growth and margin." },
      { title: "International operators", detail: "Currency and regulation." },
      { title: "Tower monetisation", detail: "Asset sales and infrastructure deals." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "e& is a cash-generative telecom with an unusual amount of strategic optionality for the sector. The core UAE business is highly profitable, the dividend is attractive and the shares are cheap on EBITDA.",
      "The investment case is a low-multiple telecom with a free option on the technology businesses. The risk is that the international portfolio and the cost of digital investment keep returns below the cost of capital.",
    ],
    questions: [
      "How much of revenue growth is organic versus acquisitions?",
      "Can e& enterprise reach a scale that changes the group multiple?",
      "What is the dividend policy through the investment cycle?",
      "How much risk is embedded in the Maroc Telecom stake?",
    ],
  },
};
