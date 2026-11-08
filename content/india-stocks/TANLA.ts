import type { StockStory } from "@/content/stocks/types";

export const TANLA: StockStory = {
  ticker: "TANLA",
  kicker: "IT & ER&D · Cloud communication platforms",
  title: "Tanla moves India's business messages and keeps a thin slice",
  dek: "Tanla's revenue is the value of the messages its enterprise customers send, not the fee it keeps. That is why gross margin is 20.0% and the stock trades at 1.6 times sales. Operating margin is 13.1% and net cash is ₹9.6B.",
  readingMinutes: 9,
  takeaways: [
    "The trailing year produced ₹48.8B of revenue, 17.7% more, on a 13.1% operating margin.",
    "Gross margin of 20.0% reflects pass-through telecom costs, not software economics.",
    "Free cash flow was ₹4.77B, and the balance sheet holds ₹9.58B of net cash.",
    "At ₹648.15 the shares trade at 15.5 times earnings, near the top of their 52-week range.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=TANLA",
  irUrl: "https://www.tanla.com",
  bigPicture: {
    paragraphs: [
      "Tanla Platforms runs the pipes that carry business messages in India. A bank sending a transaction alert, a retailer sending a delivery update, or an insurer sending a policy reminder usually does it through a platform like Tanla's Wisely, which connects the enterprise's software to telecom operators and to channels such as SMS, WhatsApp, voice, email and RCS. Tanla also sells spam control, consent management and anti-phishing tools, which matter because Indian regulators require enterprises to register message templates and headers before they can send.",
      "Revenue for the trailing year was ₹48.8B, 17.7% higher. Q2 FY27 contributed ₹13.52B and a 15.8% operating margin. The market value is ₹85.6B at ₹648.15, with the shares 89% up from the low of a ₹365.90 to ₹681.55 range. The one-year return is 8.4%, while the five-year return is minus 41.3%.",
      "The first thing to understand is that the revenue line is not a software fee. It is the gross value of messages sent, including the termination charges Tanla pays to telecom operators. The company keeps a small spread on top. That single fact explains the 20.0% gross margin, the 1.6 times sales multiple and why the business is more like a high-volume payment network than a licence vendor.",
    ],
    quote:
      "In a pass-through business, revenue growth tells you about traffic, not pricing power. The number that matters is the margin the platform keeps after paying the operators.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is an API platform. An enterprise connects its customer-relationship software to Tanla's application programming interfaces and sends messages programmatically. Tanla routes each message to the right channel and operator, applies the registered template, and reports delivery. The platform handles billions of messages, so reliability and operator relationships matter as much as features.",
      "Around that core sit compliance products. Trubloq is used to block unwanted commercial messages. Wisely Consent records whether a customer has agreed to receive communications. The anti-phishing platform detects fraudulent SMS. These products are sold to enterprises and, in some cases, to regulators and operators, and they generate revenue that does not depend on message volume alone.",
      "The company employed 1,043 people and is based in Hyderabad. Its customers are enterprises across banking, e-commerce, consumer goods and government services, with international revenue from similar messaging use cases abroad.",
    ],
    bullets: [
      {
        title: "Business messaging",
        detail:
          "API-led SMS, WhatsApp, RCS, voice and email delivery for enterprise communications.",
      },
      {
        title: "Trust and compliance",
        detail:
          "Spam control, consent records and anti-phishing tools tied to Indian messaging rules.",
      },
      {
        title: "Conversational AI",
        detail:
          "Chatbot and customer-engagement layers built on top of the messaging channel.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Tanla buys message termination from telecom operators and resells it to enterprises as part of a platform service. If an enterprise pays one rupee for a message and the operator charges eighty paise, Tanla keeps twenty paise before its own costs. That is the 20.0% gross margin in plain terms. The absolute gross profit grows with message volume, not with the price of a message.",
      "Operating margin is 13.1%, so about seven percentage points of the gross margin goes to sales, technology, administration and support. That is a lean cost structure for a company handling this volume, and it means incremental messages are highly profitable once the platform is built. The flip side is that a price war or a regulatory cap on messaging charges compresses the spread quickly, because there is no licence fee to fall back on.",
      "The business is working-capital light relative to revenue. Enterprises pay on credit terms, operators are paid on their own cycles, and the net effect has historically been positive cash generation. Interest cover of 159.6 times confirms that debt is not part of the model.",
    ],
  },
  growth: {
    paragraphs: [
      "Between FY2021 and FY2026 revenue went from ₹23.41B to ₹44.18B, roughly doubling, and the trailing twelve months are ₹48.8B. Growth has been steady rather than explosive: 17.7% on a trailing basis and 25.4% in the latest quarter.",
      "The volume driver is the digitisation of customer communication. More enterprises send alerts, more channels are available, and more messages are transactional rather than promotional. WhatsApp and RCS add new formats, while regulatory requirements create demand for consent and spam-control products. The drag is pricing: messaging is a competitive, low-differentiation business, and the platform's take rate can fall even as volumes rise.",
      "The consensus expects ₹52.72B this fiscal year and ₹56.04B next year. Against the ₹48.8B trailing figure, that implies growth in the high single digits to low teens, slower than the latest quarter. The estimates come from a small number of contributors, so they should be read as a direction rather than a precise forecast.",
    ],
    bullets: [
      {
        title: "Message volume",
        detail:
          "More transactional and authentication messages as Indian businesses digitise customer contact.",
      },
      {
        title: "Channel mix",
        detail:
          "WhatsApp, RCS and voice add revenue per conversation beyond plain SMS.",
      },
      {
        title: "Compliance products",
        detail:
          "Consent, spam control and anti-phishing revenue tied to regulation rather than traffic.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating profit climbed from ₹4.35B in FY2021 to ₹7.26B in FY2026, but the operating margin fell from 18.6% to 16.4% over that period, and the trailing margin is 13.1%. The quarterly record is more stable, with margins between 15.8% and 17.0% through the last eight quarters, so the trailing figure is depressed by the mix rather than by a sudden collapse.",
      "Net profit was ₹5.09B in FY2026 against ₹5.07B in FY2025, almost exactly flat, even though revenue rose 9.7%. That is the signature of a pass-through business: revenue can grow while profit stalls if the spread narrows. Trailing diluted EPS is ₹41.80 against ₹38.39 for FY2026.",
      "Equity earns 22.2% and invested capital 26.0%, both healthy for a business with ₹9.58B of net cash. The returns come from the platform's asset-light structure, not from capital employed in plant.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹4.77B, a 10.8% margin, and the annual record is strong: ₹5.30B in FY2021, ₹4.25B in FY2022, ₹0.91B in FY2023, ₹4.34B in FY2024, ₹5.14B in FY2025 and ₹4.77B in FY2026. The FY2023 dip is the exception and is large enough to be worth understanding: operating profit that year was ₹5.90B, so the cash shortfall came from working capital rather than from a loss.",
      "The balance sheet carries ₹9.58B of net cash, equal to negative 1.2 times EBITDA. Capital expenditure is modest because the platform runs on servers and software rather than heavy assets. The cash therefore supports dividends or buybacks, though the dataset does not specify the payout policy.",
      "At 17.9 times free cash flow, the market is valuing the cash generation at a modest premium to earnings. That is consistent with a business whose cash flow is real but whose growth depends on message volume rather than on recurring licence escalations.",
    ],
  },
  valuation: {
    paragraphs: [
      "The ₹648.15 close values the stock at 15.5 times trailing earnings and 9.5 times EV/EBITDA, or 1.6 times sales. The EV/Sales multiple is the lowest in the IT peer group shown below, which is exactly what a pass-through revenue model should produce: a rupee of revenue here is not comparable to a rupee of software licence revenue.",
      "On EV/EBITDA, 9.5 times is cheaper than KPIT and Cyient at 12.6 times, Newgen at 12.4 times and Netweb at 43.9 times, and only slightly above Sonata at 9.2 times. The market is treating Tanla as a mature, cash-generative platform rather than a growth stock. Whether that is right depends on whether the take rate holds.",
    ],
  },
  analysts: {
    paragraphs: [
      "Only two analysts publish estimates. The average target is ₹619.00, with a range of ₹423.00 to ₹815.00. The mean is below the current price of ₹648.15, which is unusual and worth noting: the outside consensus does not see upside from here. The figure is outside analysis, not a Stockmonk judgment.",
      "This year's single contributor expects ₹52.72B of revenue and ₹45.00 of EPS. Next year's figures, from two contributors, are ₹56.04B and ₹46.30. An EPS increase of that size on a modest revenue increase implies the analysts expect the margin to stabilise rather than expand.",
    ],
  },
  risks: {
    intro:
      "Tanla's risks sit at the intersection of telecom regulation, pricing competition and channel change. The balance sheet is strong; the income statement is exposed to forces the company does not control.",
    items: [
      {
        title: "Pricing pressure",
        severity: "High",
        detail:
          "Messaging is competitive and the platform's spread is thin. A price war or a large customer demanding a better rate compresses margin quickly.",
        watch: "Gross margin and revenue per message.",
      },
      {
        title: "Telecom regulation",
        severity: "High",
        detail:
          "Indian messaging rules on templates, consent and spam determine what enterprises can send and what platforms can charge for compliance.",
        watch:
          "Regulatory consultations and changes to commercial-communication rules.",
      },
      {
        title: "Channel substitution",
        severity: "Medium",
        detail:
          "If enterprises move traffic to WhatsApp, RCS or in-app notifications, SMS volumes fall and the operator relationships that underpin the spread matter less.",
        watch: "Channel mix and revenue per message by channel.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Large banks and e-commerce platforms generate a disproportionate share of traffic, so a single client's decision can move revenue.",
        watch: "Revenue from the largest customers and volume disclosures.",
      },
      {
        title: "Working capital swings",
        severity: "Low",
        detail:
          "FY2023 showed how quickly cash conversion can deteriorate when operating profit is healthy but collections lag.",
        watch: "Receivable days and the gap between profit and operating cash flow.",
      },
    ],
    watchlist: [
      {
        title: "Take rate",
        detail:
          "Gross margin is the clearest measure of pricing power in a pass-through model.",
      },
      {
        title: "Message volume",
        detail:
          "Volume growth is what turns a thin spread into a growing absolute profit pool.",
      },
      {
        title: "Regulatory change",
        detail:
          "Messaging rules can change both the product set and the economics overnight.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Tanla is a profitable, cash-rich messaging platform with ₹48.8B of revenue, a 13.1% operating margin and ₹4.77B of free cash flow. It has doubled revenue in five years and holds ₹9.58B of net cash. Those are the facts.",
      "The complication is that the revenue line is mostly pass-through, so the usual software comparisons do not apply. A 1.6 times sales multiple and a 20.0% gross margin are not signs of weakness; they are the arithmetic of reselling telecom capacity. The 13.1% operating margin and 26.0% return on invested capital are the numbers that describe the actual business.",
      "The stock has risen 8.4% over one year while falling 41.3% over five, so the market has partly re-rated it upward from a very depressed base. The attributed consensus mean sits below the current price, which suggests the analysts see limited further upside unless the take rate improves.",
    ],
    questions: [
      "What is the spread per message, and is it rising or falling?",
      "How much revenue comes from SMS versus newer channels?",
      "What share of traffic comes from the top ten enterprises?",
      "How would a change in messaging regulation affect the compliance product revenue?",
    ],
  },
};
