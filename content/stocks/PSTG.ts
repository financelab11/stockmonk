import type { StockStory } from "./types";

export const PSTG: StockStory = {
  ticker: "PSTG",
  kicker: "Enterprise storage · All-flash arrays",
  title: "Pure Storage sells storage as a subscription, and the accounts need care",
  dek: "A 77.6% gross margin is what software-like storage economics look like. The published multiples are not, and a reader has to reconstruct the income statement before using them.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $7.76B, up 15.5%, with a 77.6% gross margin.",
    "Free cash flow of $51.4M, a 0.7% margin, does not fit a business reporting a 46.8% net margin.",
    "The quarterly table contains fiscal-year totals in its fourth-quarter column, so the quarterly margins cannot be read as quarterly margins.",
    "There is no third-party consensus in the data, so the estimate section is a description of the business rather than a forecast.",
  ],
  filingUrl: "https://www.sec.gov/edgar/search/",
  irUrl: "https://www.sec.gov/edgar/search/",
  bigPicture: {
    paragraphs: [
      "Pure Storage sells enterprise data storage built entirely on flash memory. The hardware is a rack of solid-state drives in a controller chassis; the product is the software that decides where data lives, how it is compressed, deduplicated and protected, and how the array is managed across a data centre. The company employs 3,800 people and sells through channel partners rather than directly to most customers.",
      "The commercial model is closer to a subscription than to a hardware sale. Customers buy capacity with an expectation of continuous upgrades, and a large share of revenue is recognised over time rather than at delivery. That is why a storage company can report a 77.6% gross margin: the value is in the software layer, and the drives are the cheap part.",
      "The share price in the data is $67.80 at the close on 2026-04-16, with a market capitalisation of $22.41B and a 52-week range of $39.72 to $100.59. That snapshot is older than the other companies in this set, which matters: the multiples below describe April, not November, and the fiscal year in the data ends before the most recent quarters would normally be reported.",
    ],
    quote:
      "Storage is bought on a three-to-five year replacement cycle. A vendor that keeps the customer through two cycles is selling a subscription; one that loses them at refresh is selling boxes.",
  },
  whatItDoes: {
    paragraphs: [
      "The product line is a set of all-flash arrays for block, file and object storage, plus the management software that runs across them. Block storage serves databases and virtual machines; file and object storage serve analytics, container platforms and, increasingly, the data sets used to train and run AI models. The same hardware platform serves all three through different software.",
      "The channel is a network of resellers and systems integrators. That choice keeps the company's own sales cost low and puts the product in front of customers who already buy infrastructure from a partner, but it also means Pure shares the margin with the channel and depends on partners to position the product correctly.",
      "The customer base is enterprises and service providers rather than hyperscalers, who design their own storage. That is an important distinction in an AI context: Pure is not selling into the largest training clusters, which are usually built with custom or directly attached storage. It is selling the storage that sits behind enterprise AI projects, analytics and virtualisation, which is a smaller and steadier pool of demand.",
    ],
    bullets: [
      {
        title: "All-flash arrays",
        detail:
          "Block, file and object storage on solid-state media. The hardware platform, differentiated by the software that runs on it.",
      },
      {
        title: "Subscription and consumption",
        detail:
          "Capacity sold with an expectation of continuous upgrade, with a large share of revenue recognised over time.",
      },
      {
        title: "Channel distribution",
        detail:
          "Resellers and integrators carry the product to enterprise buyers. Lower selling cost, less control over the message.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from three places: hardware and the software licence bundled with it, subscription services that include support and upgrade rights, and consumption-based arrangements where the customer pays for what they use. The subscription portion is the strategic one, because it is recurring and because it keeps the customer inside the upgrade cycle.",
      "A 77.6% gross margin tells a reader where the cost sits. Flash media is a commodity bought from a handful of suppliers; the controllers and the software are where the price is set. Deduplication and compression matter commercially because they let a customer store more data on less media, so the software effectively competes against the cost of buying more drives.",
      "The operating leverage should come from the installed base. Each array sold adds a support and subscription revenue stream that costs relatively little to serve, so a growing base should expand the margin over time. The data here cannot confirm that, because the annual operating income figures and the quarterly margins do not reconcile. What can be said is that the gross margin is consistent with a software-rich product and that the model has the right shape for operating leverage.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 29.5% a year across the fiscal years in the data: $2.18B, $2.75B, $6.00B, $6.72B and $7.76B. The step from $2.75B to $6.00B in one year is not a plausible organic growth rate for a storage vendor, and it is the first sign that the fiscal-year labels in this dataset do not all describe twelve-month periods in the same way.",
      "Setting that aside, the recent trend is slower and more believable. Trailing revenue is $7.76B, up 15.5%, and the latest quarter grew 16.4%. That is a mature infrastructure growth rate: faster than the storage market, slower than the AI hardware names in this group, and consistent with a company taking share gradually rather than riding a boom.",
      "The demand driver is data growth plus the replacement cycle. Enterprise AI projects create data that has to be stored, protected and served to models, and much of that lands on shared storage rather than on the compute cluster itself. The constraint is that storage is a mature, price-competitive market with strong incumbents, and a 15% growth rate depends on taking share rather than on the market expanding.",
    ],
  },
  performance: {
    paragraphs: [
      "This is the section where the data has to be handled carefully, because the reported figures contradict each other. Annual operating income goes from negative $98.4M in FY2021 to positive $83.5M, then to $2.78B, $3.07B and $3.56B. A storage vendor with $6.00B of revenue does not earn $2.78B of operating profit. The quarterly margins in the same period are 7.2%, negative 4.0%, 0.6% and 5.6%, which is the range a hardware company actually produces.",
      "The pattern in the quarterly table explains it. The fourth quarter of each fiscal year reports revenue of $4.43B and $5.16B against $831.1M and $964.5M in the preceding quarters, with operating margins of 68.1% and 68.5% against single digits. Those fourth-quarter figures look like fiscal-year totals placed in a quarterly column, not like three months of trading.",
      "The practical consequence is that trailing operating margin of 45.9%, net margin of 46.8%, return on equity of 251.3% and diluted EPS of $0.26 cannot all describe the same business. A $0.26 EPS on a $67.80 share price is not a 6.2x multiple; it implies either a very large share count or an inconsistency. A reader should use the revenue line, the gross margin and the balance sheet, and treat everything below the gross line as unverified until it is reconstructed from the filings.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $51.4M over the trailing period, a 0.7% margin, against a reported net margin of 46.8%. The gap is too large to be explained by working capital in a normal year. Either the net income figure includes something that did not arrive in cash, or the free cash flow figure is measuring a period with unusually high capital spending or working capital absorption.",
      "The balance sheet is clearer: $1.55B of net cash, about 11.5x EBITDA on the negative side. For a company with a $22.41B market capitalisation, that is roughly 7% of the market value in cash and investments. It gives the company room to fund buybacks, acquisitions or a downturn without needing to raise money, which is a genuine strength for a hardware business with a replacement cycle.",
      "The annual cash history is incomplete, with free cash flow reported only for FY2021 and FY2022 at $35.4M and $303.3M. That is a real limitation. For a subscription business, the cash flow statement is usually more informative than the income statement, because deferred revenue and subscription billing make accounting profit a poor guide to cash generation. Here the reader has neither a clean income statement nor a full cash flow history.",
    ],
  },
  valuation: {
    paragraphs: [
      "The published multiples cannot be used as they stand. A 6.2x P/E alongside an EV/EBITDA of 154.4x and a price to free cash flow of 435.6x does not describe a single set of earnings. The first implies a very profitable company, the second implies almost no EBITDA relative to enterprise value, and the third implies free cash flow close to zero. All three appear in the same table.",
      "The one multiple that survives is EV/Sales at 2.7x. On $7.76B of trailing revenue and a $22.41B market capitalisation, that is arithmetically consistent, and it is the right starting point for a hardware company with a software margin. 2.7x sales for a business growing 15.5% at a 77.6% gross margin is not an aggressive multiple; it is roughly what a mature infrastructure vendor with a subscription attached should trade at.",
      "What the price assumes is that the gross margin converts into operating profit at some point and that the subscription base keeps growing. Neither can be verified from this dataset. Stockmonk does not publish a target price, and in this case even a third-party consensus is unavailable in the data, so the reader has to build the comparison from the filings rather than from a screen.",
    ],
  },
  analysts: {
    paragraphs: [
      "No third-party consensus is available in the data: no analyst count, no mean target, no range, and no forward estimates. That is a gap rather than a signal. It may reflect a coverage lapse in the dataset or the timing of the snapshot, and it means this report cannot describe what professional forecasters expect.",
      "What can be said is what a reader should look for when the estimates are available. The first is the split between subscription and product revenue, because that determines how much of the growth is recurring. The second is the gross margin trend, because a 77.6% margin is the whole basis of the valuation. The third is free cash flow, because a subscription business should convert most of its operating profit into cash and the current 0.7% margin says something is not yet working as expected.",
      "Without a consensus, the honest approach is to treat the trailing revenue and the balance sheet as facts and everything else as a hypothesis. A 15.5% growth rate on $7.76B of revenue is the anchor; the question is what margin that revenue earns once the accounts are reconstructed.",
    ],
  },
  risks: {
    intro:
      "Pure Storage's risks are competitive, cyclical and, in this dataset, analytical: the reported figures do not yet support a confident read on profitability.",
    items: [
      {
        title: "Reporting consistency",
        severity: "High",
        detail:
          "Operating income, net margin, EPS and free cash flow do not reconcile with each other or with the quarterly table. Any conclusion about profitability rests on unverified numbers.",
        watch:
          "The income statement and cash flow statement in the next filing, read together.",
      },
      {
        title: "Storage competition",
        severity: "High",
        detail:
          "Storage is a mature market with large incumbents and price pressure from commodity flash. Growth depends on taking share rather than on market expansion.",
        watch:
          "Gross margin by quarter and the revenue growth rate relative to the market.",
      },
      {
        title: "Subscription conversion",
        severity: "Medium",
        detail:
          "A subscription model should produce recurring revenue and rising cash conversion. A 0.7% free cash flow margin against a 46.8% reported net margin is not that.",
        watch:
          "Deferred revenue, remaining performance obligations and operating cash flow.",
      },
      {
        title: "Replacement cycle timing",
        severity: "Medium",
        detail:
          "Storage is bought on a three-to-five year cycle. A pause in enterprise infrastructure spending delays refresh decisions and hits revenue quickly.",
        watch:
          "Order trends and the age of the installed base.",
      },
      {
        title: "Channel dependence",
        severity: "Low",
        detail:
          "Most revenue arrives through partners, which lowers selling cost but reduces control over pricing and positioning.",
        watch:
          "Channel concentration and partner certification levels.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "77.6% is the number that makes the model work. A decline would compress everything below it.",
      },
      {
        title: "Free cash flow",
        detail:
          "For a subscription business, this is the measure that matters and the one that currently looks wrong.",
      },
      {
        title: "Filing reconciliation",
        detail:
          "Until the annual and quarterly figures agree, any valuation multiple is a guess.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Pure Storage sells all-flash enterprise storage with a software-heavy product and a subscription-style commercial model. Revenue is $7.76B, up 15.5%, gross margin is 77.6%, and the balance sheet holds $1.55B of net cash. Those are the parts of the record that hold together.",
      "The educational point is that a dataset can be internally inconsistent, and a reader has to notice. When operating income is $2.78B on $6.00B of revenue while the quarterly margins in the same era are in the single digits, one of those numbers is not measuring what its label says. Recognising that is more valuable than any multiple, because a multiple built on the wrong denominator is worse than no multiple at all.",
      "What is not known is the true operating margin, the split between recurring and product revenue, and why free cash flow is 0.7% of revenue when the reported net margin is 46.8%. The AI build-out creates demand for shared storage behind enterprise AI projects; it does not resolve any of those questions, and it does not make a 2.7x sales multiple cheap or expensive on its own.",
    ],
    questions: [
      "Which figures in the quarterly table are three-month periods and which are fiscal-year totals?",
      "What share of revenue is recurring subscription rather than product?",
      "Why is free cash flow 0.7% of revenue when the reported net margin is 46.8%?",
      "How much of the growth comes from AI-related storage rather than the general replacement cycle?",
    ],
  },
};
