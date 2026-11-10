import type { StockStory } from "@/content/stocks/types";

export const emaarDevelopment: StockStory = {
  ticker: "EMAARDEV",
  kicker: "United Arab Emirates · Residential development",
  title: "Emaar Development: Dubai's purest housing play at 4.4x earnings",
  dek:
    "Emaar Development builds and sells homes in Dubai's master-planned communities and holds a large net cash balance. Earnings have more than tripled since 2021, and the shares trade at 4.4x earnings with a 6.8% dividend yield.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 32.0bn and net income of AED 13.4bn, with a 48.1% operating margin and 27.8% return on equity.",
    "Revenue rose from AED 15.6bn in 2021 to AED 27.5bn in 2025, and net income from AED 3.2bn to AED 11.3bn.",
    "The company is a pure build-to-sell developer, with no mall or hotel earnings to cushion the property cycle.",
    "At AED 14.52 the shares trade at 4.4x earnings; the net cash balance means enterprise value is a fraction of market cap.",
    "Consensus has a mean target of AED 17.17 from 11 analysts, with six strong buys and a range of AED 13.50–22.00.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/EMAARDEV/financials/",
  irUrl: "https://www.emaar.com",
  bigPicture: {
    paragraphs: [
      "Emaar Development is the development arm of Emaar Properties, focused on building and selling residential and commercial property in Dubai. Its projects include some of the most recognisable communities in the city, from Downtown Dubai to Dubai Creek Harbour, and it sells mostly off-plan to a mix of end-users and investors.",
      "The equity is the purest listed way to own Dubai's housing cycle. Unlike its parent, it has no mall or hotel income to smooth the cycle, so earnings rise and fall with property prices and transaction volumes. The compensation is a very low multiple and a large net cash position when the market is strong.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company acquires land, designs master-planned communities, sells units off-plan and delivers them over several years. Revenue is recognised on delivery, so the reported numbers lag the sales that generated them. That lag means today's results reflect contracts signed one to three years ago.",
      "Emaar Development operates mainly in Dubai, with a land bank concentrated in growth corridors. It also sells commercial space and plots to other developers. The business is capital-light relative to a landlord because buyers fund construction through instalments, which is why the balance sheet carries more cash than debt.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the value of units delivered in the period. The margin depends on the price achieved at sale versus the land and construction cost, so a rising market expands margins and a falling market compresses them. Operating margin was 48.1% on a trailing basis, exceptionally high and a sign of strong pricing.",
      "Cash collection runs ahead of revenue recognition: buyers pay deposits and instalments during construction, which funds the build and produces the net cash balance. That model works well in a boom but can reverse if cancellations rise, because refunds and slower collections hit cash flow before they hit reported revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was AED 15.6bn in 2021, AED 11.5bn in 2022, AED 11.9bn in 2023, AED 19.2bn in 2024 and AED 27.5bn in 2025. The dip in 2022–23 reflected delivery timing, while the surge in 2024–25 reflects the strong sales booked during the Dubai upcycle.",
      "The trailing twelve months show AED 32.0bn of revenue, up 31.6%, and consensus expects AED 33.0bn in 2026, up 20.1%, with EPS of AED 3.34, up 18.2%. The backlog supports near-term revenue, but the growth rate will slow as the comparison base rises and the property cycle matures.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 3.24bn in 2021, AED 3.81bn in 2022, AED 6.63bn in 2023, AED 7.63bn in 2024 and AED 11.32bn in 2025. The 2023 jump reflected both higher prices and a change in the mix toward more profitable projects.",
      "Return on equity was 27.8% on a trailing basis, high for a developer and supported by the net cash balance and the asset-light model. The reported return on invested capital is distorted by the tiny invested-capital base, so ROE is the more meaningful measure.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 16.2bn on a trailing basis, reflecting advance payments from buyers. The company holds AED 39.8bn of cash and almost no debt, so net cash is roughly two-thirds of the market capitalisation — an unusual position for a developer and a buffer against a downturn.",
      "The dividend yield is 6.8%, high for a growth stock and supported by the cash balance. The company can pay out cash while still funding construction because buyers finance much of the build. The risk is that a sharp slowdown in sales reduces future collections and forces the payout to be reset.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 14.52 the shares trade at 4.4x trailing earnings, a deep discount to global developers. The low multiple reflects the cyclicality of Dubai housing and the fact that current earnings are near a cycle peak. EV/EBITDA looks extremely low because net cash is large relative to the operating business.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 17.17 and a range of AED 13.50–22.00 from 11 analysts. Six carry a strong buy, two a buy and three a hold, with no sells. FY2026 revenue is expected at AED 33.0bn and EPS at AED 3.34. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is good for a mid-cap, and the ratings are positive but not unanimous. The holds reflect the view that the shares are cheap for a reason: earnings are cyclical and the market does not want to capitalise peak margins.",
      "The key debate is the durability of Dubai's housing demand. Bulls point to population growth, limited supply and the net cash balance; bears point to the risk of oversupply and the tendency of Dubai property cycles to overshoot in both directions.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 17.17 (range AED 13.50–22.00), 11 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 33.0bn, +20.1%; EPS AED 3.34, +18.2%." },
      { title: "Ratings mix", detail: "6 strong buy, 2 buy, 3 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are the Dubai housing cycle, delivery execution and the concentration of the business in one market.",
    items: [
      {
        title: "Housing cycle",
        severity: "High",
        detail:
          "Earnings are geared to Dubai prices and sales volumes. A downturn would hit both revenue and margins, with no recurring income to cushion it.",
        watch: "Dubai prices, off-plan sales, transaction volumes.",
      },
      {
        title: "Delivery execution",
        severity: "Medium",
        detail:
          "Revenue depends on handing over projects on time and on budget. Delays defer revenue and can trigger penalties.",
        watch: "Handovers, construction costs, backlog.",
      },
      {
        title: "Cancellations",
        severity: "Medium",
        detail:
          "A rise in cancellations would reduce cash collection and could force refunds, reversing the net cash position.",
        watch: "Cancellation rates, escrow balances.",
      },
      {
        title: "Concentration",
        severity: "Medium",
        detail:
          "The business is almost entirely Dubai. A local regulatory or demand shock would be difficult to offset.",
        watch: "Dubai regulation, supply pipeline, population.",
      },
    ],
    watchlist: [
      { title: "Off-plan sales", detail: "The leading indicator for future revenue." },
      { title: "Handovers", detail: "Backlog conversion and margins." },
      { title: "Net cash", detail: "Buffer through the cycle." },
      { title: "Dividend", detail: "Payout and cash coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Emaar Development is a high-margin, net-cash developer trading at 4.4x peak-cycle earnings with a 6.8% dividend yield. The balance sheet is unusually strong, and the backlog supports revenue for the next two years.",
      "The investment case is a cyclical value stock, not a compounder. The low multiple and the cash balance provide protection, but investors should expect earnings to fall when the Dubai housing cycle turns.",
    ],
    questions: [
      "How much of 2026 revenue is covered by the backlog?",
      "What is the cancellation rate in the current book?",
      "How much of the net cash is refundable to buyers?",
      "What happens to the dividend in a housing downturn?",
    ],
  },
};
