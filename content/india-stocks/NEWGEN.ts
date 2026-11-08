import type { StockStory } from "@/content/stocks/types";

export const NEWGEN: StockStory = {
  ticker: "NEWGEN",
  kicker: "IT & ER&D · Enterprise software products",
  title: "Newgen Software grows slowly but turns profit into cash",
  dek: "Newgen sells document-heavy workflow software to banks and government departments. Revenue is only growing 6.5%, yet the balance sheet holds ₹10.75B of net cash and free cash flow is ₹2.23B. The question is whether AI expands the platform or erodes the licence.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was ₹16.32B over the trailing year, 6.5% higher, and the operating margin was 13.1%.",
    "Free cash flow of ₹2.23B is 14.2% of revenue; net cash is ₹10.75B.",
    "Net margin of 19.5% is higher than the operating margin because of income on that cash.",
    "The shares at ₹447.80 sit 8% up a 52-week range of ₹401.05 to ₹995.50.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=NEWGEN",
  irUrl: "https://www.newgensoft.com",
  bigPicture: {
    paragraphs: [
      "Newgen Software Technologies is a Delhi software product company. Its NewgenONE platform handles the paperwork that large organisations never fully digitised: account opening forms, loan files, insurance claims, citizen applications and customer letters. The software routes a case from one desk to the next, stores the documents, applies rules and keeps an audit trail. Banks and financial services are the core market, followed by government, insurance and healthcare.",
      "The trailing twelve months produced ₹16.32B of revenue, up 6.5%. In Q2 FY27 alone the company booked ₹4.22B and earned a 25.8% operating margin. At the close of ₹447.80 the market capitalisation was ₹63.3B. The shares have fallen a long way from their 52-week high of ₹995.50 and sit 8% up the range that runs down to ₹401.05.",
      "That combination is the puzzle. A product company with 53.4% gross margins, ₹10.75B of net cash and a 25% return on invested capital is usually valued for growth. Here the market is paying 19.8 times trailing earnings for 6.5% revenue growth. Either the growth slowdown is temporary, or the market expects AI tools to compress what document workflow software is worth.",
    ],
    quote:
      "Software licences are discretionary spending. When banks delay projects, the revenue line reacts before the cost base does, which is why this company's quarterly margins swing so widely.",
  },
  whatItDoes: {
    paragraphs: [
      "Newgen's products sit in a category that used to be called enterprise content management and business process management. The modern version bundles low-code application development, case management, customer communication, intelligent document processing and records management into one platform. A bank might use it to automate a corporate loan approval; a government department might use it to process licence applications; an insurer might use it to triage claims.",
      "The company sells in India, Europe, the Middle East, Africa, Asia Pacific, Australia and the United States. It employed 3,788 people at the last count. The dataset does not publish a segment or geography split, so the consolidated revenue line is the only reliable base for analysis. That matters: a rupee of Indian government licence revenue and a rupee of European subscription revenue carry different margins and different collection risk.",
    ],
    bullets: [
      {
        title: "Process automation",
        detail:
          "Low-code workflows and case management for approvals, onboarding and service requests.",
      },
      {
        title: "Content and documents",
        detail:
          "Capture, imaging, records retention and intelligent document processing.",
      },
      {
        title: "Customer communication",
        detail:
          "Template-driven letters, statements and notices generated from core systems.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue arrives in three layers. A customer buys licences, pays for an implementation project, then pays annual maintenance or subscription for the running system. Licences and maintenance carry most of the profit; implementation is people-heavy and earns little. That mix explains why gross margin is 53.4% rather than the 70%-plus typical of pure software: a meaningful slice of revenue is services.",
      "The operating margin is 13.1%, well below the gross margin, because sales, product development and support are fixed costs spread over a modest revenue base. When licence revenue rises, incremental profit is large. When it stalls, the cost base does not shrink quickly. The quarterly record shows the pattern: in the last two fiscal years, Q1 operating margins were 14.0% and 15.7%, while Q4 margins were 31.9% and 33.6%.",
      "The net margin of 19.5% is higher than the operating margin. That gap comes from non-operating income on the ₹10.75B cash balance, not from the software business suddenly becoming more profitable. A reader comparing net margin with operating margin should treat the difference as a balance-sheet effect.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from ₹6.73B in FY2021 to ₹15.74B in FY2026, more than doubling in five years. But the pace has slowed sharply: FY2026 growth was 5.8% over FY2025, and the trailing twelve-month figure is 6.5%. The latest quarter grew 5.2% year on year.",
      "The consensus expects ₹17.32B of revenue in the current fiscal year and ₹19.66B next year, which implies a return to low-double-digit growth. The drivers would have to be new logo wins in banking, expansion of existing installations and government digitisation projects. The drags are equally clear: banks cutting discretionary technology budgets, long procurement cycles and the possibility that general-purpose AI models absorb the document extraction work that Newgen charges for.",
    ],
    bullets: [
      {
        title: "Installed-base expansion",
        detail:
          "Additional modules and higher user counts at existing bank customers.",
      },
      {
        title: "Government workflows",
        detail:
          "Paperless file movement and citizen service portals, often tender-driven.",
      },
      {
        title: "Annuity revenue",
        detail:
          "Maintenance and subscription renewals that recur once a system is live.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating profit more than doubled from ₹1.92B in FY2021 to ₹4.06B in FY2026, but the FY2026 figure was only slightly above FY2025's ₹3.76B. Net profit actually slipped from ₹3.15B to ₹3.01B while revenue grew, so the margin gave back some of the prior year's gain. Trailing diluted EPS is ₹22.39 against ₹21.12 reported for FY2026.",
      "The equity return is 16.9%; on invested capital it is 25.0%. The gap between the two is mostly the cash pile: equity includes ₹10.75B of net cash that earns a low return, which pulls down ROE while the operating business itself earns a respectable return on capital. Interest cover of 84.6 times confirms that debt is not a constraint.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹2.23B over the trailing period, a 14.2% margin. That is a healthy conversion rate: most of the profit reaches the bank rather than being locked in receivables. The gap to the 19.5% net margin is the working capital needed to run large implementation projects.",
      "The record is not perfectly smooth. Free cash flow was ₹2.68B in FY2024, fell to ₹1.92B in FY2025, then recovered to ₹2.23B in FY2026. Government and large-bank customers pay slowly, so a few large implementations can swing collections by a quarter. With ₹10.75B of net cash, equal to 2.5 times EBITDA, the balance sheet can absorb those swings without borrowing.",
      "Capital expenditure is light because the product is software, not plant. The cash flow therefore supports dividends, buybacks or acquisitions, though the dataset does not tell us which the board prefers. At 28.4 times free cash flow, the market is not treating the cash generation as an accident.",
    ],
  },
  valuation: {
    paragraphs: [
      "The close of ₹447.80 puts the stock on 19.8 times trailing earnings, 12.4 times EV/EBITDA and 3.2 times sales. That EV/EBITDA multiple is among the lowest in the peer group: Sonata trades at 9.2 times and Intellect at 10.9 times, while KPIT and Cyient are at 12.6 times and Netweb at 43.9 times.",
      "A 12.4 times EV/EBITDA multiple on a business with a 13.1% operating margin and net cash implies the market expects little growth and some margin durability. If revenue growth returns to double digits, the multiple would look low. If growth stays near 6% and AI compresses licence prices, it would look fair. The 28.4 times price-to-free-cash-flow ratio is the more demanding number and shows that cash flow, not earnings, is what the market is paying up for.",
    ],
  },
  analysts: {
    paragraphs: [
      "Six analysts publish estimates. Their average target is ₹571.00 and the range runs from ₹511.00 to ₹620.00. The figures are outside analysis; Stockmonk does not publish a target. The spread is narrow for a stock that has halved over the past year, which suggests the analysts agree more on the destination than the market does.",
      "For the current fiscal year the estimates are ₹17.32B of revenue and ₹26.12 of EPS; the following year they rise to ₹19.66B and ₹29.00. Those numbers assume growth reaccelerates from the 6.5% trailing rate. The single analyst covering the next quarter expects ₹4.53B of revenue and ₹6.60 of EPS, a modest step-up from the ₹4.22B and ₹6.10 just reported.",
    ],
  },
  risks: {
    intro:
      "Newgen's risks cluster around slow decision-making at its customers and the possibility that AI changes what the software is worth. The balance sheet removes financing risk; it does not remove demand risk.",
    items: [
      {
        title: "Bank technology budgets",
        severity: "High",
        detail:
          "Banks are the largest customer group. When they defer transformation projects, licence revenue falls before costs adjust.",
        watch:
          "Year-on-year licence growth and the number of large deal wins disclosed in filings.",
      },
      {
        title: "AI-native document tools",
        severity: "High",
        detail:
          "General-purpose models can read and route documents without a traditional workflow licence, which pressures pricing per user or per case.",
        watch:
          "Whether Newgen prices on outcomes or seats, and whether AI features carry a separate charge.",
      },
      {
        title: "Government receivables",
        severity: "Medium",
        detail:
          "Public-sector customers pay on budget cycles, so a few large projects can stretch collection periods and depress free cash flow.",
        watch: "Debtor days and the gap between net profit and operating cash flow.",
      },
      {
        title: "Lumpy quarterly earnings",
        severity: "Medium",
        detail:
          "Licence revenue is recognised in chunks, so a single quarter can miss or beat by a wide margin without the annual picture changing.",
        watch: "The Q1-to-Q4 margin pattern rather than any single quarter.",
      },
      {
        title: "Currency and export mix",
        severity: "Low",
        detail:
          "A large part of revenue comes from outside India, so rupee appreciation or hedging losses can affect reported margins.",
        watch: "Realisation per dollar of export revenue and foreign-exchange gains or losses.",
      },
    ],
    watchlist: [
      {
        title: "Licence pipeline",
        detail:
          "Product revenue, not services, is what carries the margin and proves the platform is still being chosen.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow has stayed above ₹1.9B for three years; a break below that would signal collection stress.",
      },
      {
        title: "Use of the cash pile",
        detail:
          "₹10.75B of net cash is roughly a sixth of the market capitalisation and will shape returns either through investment or distribution.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Newgen is a profitable, cash-rich software product company whose growth has fallen to mid-single digits. Revenue of ₹16.32B, a 13.1% operating margin, ₹2.23B of free cash flow and ₹10.75B of net cash describe a business that is not in distress. The 51.9% one-year fall in the share price describes a market that has re-rated it anyway.",
      "What is not known from the dataset is how much of revenue is licence versus services, how concentrated the customer base is, and whether AI features are additive or substitutive. Those three answers would settle most of the valuation argument. Until then, the reported numbers can be read as a durable but slow-growing annuity with an option on AI.",
      "The educational point is that net margin above operating margin is a warning sign to investigate, not a sign of excellence. Here it comes from interest on cash. In another company it could come from asset sales or one-off gains.",
    ],
    questions: [
      "How much of the 6.5% growth is licence revenue versus implementation services?",
      "Is the AI roadmap sold as an upgrade or given away to defend renewals?",
      "What share of revenue comes from the top ten customers?",
      "Will the ₹10.75B cash pile be reinvested, returned or left idle?",
    ],
  },
};
