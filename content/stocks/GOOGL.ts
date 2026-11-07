import type { StockStory } from "./types";

export const GOOGL: StockStory = {
  ticker: "GOOGL",
  kicker: "Online media · Search, cloud and AI",
  title: "Alphabet's cash machine is funding a second act in cloud and AI",
  dek: "Search still pays for everything, but the numbers are being distorted by one-time gains and a heavy investment cycle. Read the operating business, not the headline EPS.",
  readingMinutes: 12,
  takeaways: [
    "Revenue reached $471.1B on a trailing basis, up 22.2% year over year.",
    "Google Services is 85.1% of revenue; Google Cloud is 14.6% and growing faster.",
    "Reported net margin of 50.0% is inflated by large one-time gains in 2026.",
    "Net cash of $140.0B funds AI capex without balance-sheet stress.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm",
  irUrl: "https://abc.xyz/investor/",
  bigPicture: {
    paragraphs: [
      "Alphabet owns the world's largest search engine, the Android ecosystem, YouTube and a fast-growing cloud business. Search advertising remains the profit engine, but the company is investing heavily in AI infrastructure and models to defend that position and build the next one.",
      "Trailing revenue reached $471.1B, up 22.2%, and the latest quarter grew 24.7%. That is unusual acceleration for a company of this size, driven by search resilience, YouTube and cloud. The reported net margin of 50.0% is not a clean operating number: it includes large one-time gains that make the earnings look better than the underlying business.",
      "The stock trades at 15.2x trailing earnings, which looks cheap until you adjust for those gains. On EV/EBITDA the multiple is 18.6x, a more normal level for a high-quality platform with a cloud business attached.",
    ],
    quote:
      "Alphabet's earnings quality matters more than its earnings level. The one-time gains flatter the P/E and obscure how much the core business actually earns.",
  },
  whatItDoes: {
    paragraphs: [
      "Google Services includes search, YouTube ads, Android, Chrome, Maps, Play and subscriptions. Google Cloud sells infrastructure, data analytics and AI services. Other Bets contains earlier-stage businesses such as Waymo.",
      "The segment mix is lopsided: Services is 85.1% of revenue, Cloud 14.6% and Other Bets 0.4%. Cloud is the growth option, but it is still small relative to search and requires heavy capital investment.",
      "Alphabet's AI position is vertically integrated. It designs its own TPUs, trains its own models and owns distribution through search, Android and Workspace. That is a real advantage, but it also means the capex and depreciation are concentrated on the same income statement.",
    ],
    bullets: [
      {
        title: "Google Services",
        detail:
          "Search, YouTube, Android, subscriptions. 85.1% of revenue and the source of most operating profit.",
      },
      {
        title: "Google Cloud",
        detail:
          "Infrastructure, data and AI platforms. 14.6% of revenue and the main growth vector.",
      },
      {
        title: "Other Bets",
        detail:
          "Waymo and other early-stage businesses. 0.4% of revenue and a long-duration option.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Most revenue comes from advertising: advertisers pay for search queries, YouTube views and the Google network. Cloud revenue is sold as consumption and subscriptions. The advertising model has high incremental margins because the cost of serving an additional query is low relative to the price of the ad.",
      "The United States is 48.2% of revenue, EMEA 29.1%, Asia Pacific 16.8% and the Americas outside the US 5.9%. That diversification is helpful, but regulatory risk is also global, with antitrust cases in the US and Europe.",
      "The mix shift toward cloud and AI infrastructure lowers the consolidated gross margin relative to pure search. Investors should watch the segment operating margin, not just the company average.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $161.9B in 2019 to $402.8B in 2025, a 16.4% compound annual growth rate. The latest quarter, Q3 2026, grew 24.7% to $127.6B, helped by search and cloud.",
      "The attributed consensus expects $499.6B of revenue this fiscal year, up 24.0%, and $637.5B next year, up 27.6%. Cloud and AI are the main drivers, but the estimates also assume search does not lose share to AI-native competitors.",
      "The growth debate is whether AI assistants cannibalise search queries or expand the total amount of information work. Alphabet is hedging by integrating AI into search and selling models through Cloud, but the transition is not complete.",
    ],
    bullets: [
      {
        title: "Search resilience",
        detail:
          "AI overviews and new ad formats are designed to keep search monetisation intact as query behaviour changes.",
      },
      {
        title: "Cloud AI",
        detail:
          "Enterprise demand for models, TPUs and data platforms is the fastest-growing part of the business.",
      },
      {
        title: "YouTube",
        detail:
          "Shorts, connected TV and subscriptions broaden the advertising and subscription base.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin is 33.3%, which is a cleaner measure of the core business than the 50.0% net margin. The gap is mostly one-time gains and other non-operating items. Return on invested capital is 23.1%, a good number but lower than it was before the AI capex cycle.",
      "The margin trend has been volatile: 21.1% in 2019, 30.6% in 2021, 26.5% in 2022 and 32.0% in 2025. Cost discipline and cloud profitability have helped, while AI investment has pulled the other way.",
      "Diluted EPS was $10.81 in 2025, but the trailing figure is distorted by the 2026 gains. The consensus expects $19.53 this year and $14.95 next year; the decline is a normalisation of one-time items, not a collapse in the operating business.",
    ],
  },
  cash: {
    paragraphs: [
      "Alphabet generated $19.7B of free cash flow on a trailing basis, only a 4.2% margin, because capital expenditure has surged to build AI infrastructure. That is the lowest conversion among the large platforms and the main reason the P/FCF multiple is 180.9x.",
      "The balance sheet is a fortress: $140.0B of net cash after debt. Alphabet can fund the capex cycle internally, which is a major advantage versus smaller cloud competitors.",
      "The cash-flow statement is the best place to judge the AI investment. If capex stays elevated while operating cash flow grows, free cash flow will recover. If both rise together, the company is simply reinvesting at a high rate.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $283.93, Alphabet trades at 15.2x trailing earnings and 18.6x EV/EBITDA. The earnings multiple is flattered by one-time gains; the EV/EBITDA multiple is a better starting point. Free cash flow is depressed by capex, so P/FCF is not useful this year.",
      "The market is pricing Alphabet as a mature search business with a cloud option, not as an AI pure-play. That is why the multiple is lower than Microsoft's or Nvidia's despite similar AI exposure.",
      "Stockmonk does not set a target price. The attributed consensus mean is shown in the next section; it implies a meaningful premium to the current price, but the range is wide.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 53 analysts with a mean target of $400.37. The recommendation mix is strongly positive. Estimates call for $499.6B of revenue this fiscal year and EPS of $19.53, which includes the one-time gains.",
      "The following year's EPS estimate of $14.95 is lower because the gains do not repeat. That is a useful reminder to compare operating estimates, not headline EPS, when one-time items are present.",
      "A high mean target is third-party context, not a Stockmonk rating. The dispersion between the high and low target reflects disagreement about AI capex returns and search disruption.",
    ],
  },
  risks: {
    intro:
      "Alphabet's risks are strategic and regulatory. The balance sheet is strong; the uncertainty is whether search economics survive the AI transition.",
    items: [
      {
        title: "Search disruption",
        severity: "High",
        detail:
          "AI assistants and answer engines could reduce the number of queries that carry ads. Search is still the profit engine.",
        watch:
          "Search revenue growth, paid-click trends and AI overview monetisation.",
      },
      {
        title: "Antitrust and regulation",
        severity: "High",
        detail:
          "US and EU cases could force changes to default search deals, app distribution or advertising practices.",
        watch:
          "Remedies in the US search case and the EU Digital Markets Act.",
      },
      {
        title: "AI capex returns",
        severity: "Medium",
        detail:
          "Free cash flow is depressed by heavy investment. If demand does not scale, depreciation will weigh on margins.",
        watch:
          "Capital expenditure guidance and cloud operating margin.",
      },
      {
        title: "Earnings quality",
        severity: "Medium",
        detail:
          "Large one-time gains in 2026 distort net income and EPS. The headline P/E understates the operating multiple.",
        watch:
          "Non-operating items and the gap between operating and net income.",
      },
      {
        title: "Cloud competition",
        severity: "Medium",
        detail:
          "AWS and Azure are larger and aggressive on AI pricing. Google Cloud's growth premium is not guaranteed.",
        watch:
          "Cloud growth relative to peers and segment margin.",
      },
    ],
    watchlist: [
      {
        title: "Search revenue growth",
        detail:
          "The cleanest signal on whether AI is expanding or eroding the core franchise.",
      },
      {
        title: "Cloud margin",
        detail:
          "Cloud is now large enough to move consolidated profitability.",
      },
      {
        title: "Capex intensity",
        detail:
          "Capital expenditure as a share of revenue determines when free cash flow recovers.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Alphabet is a high-quality platform with a dominant search franchise, a credible cloud business and a strong balance sheet. The operating business is growing faster than a mature company should.",
      "The educational point is earnings quality. A 15x P/E looks cheap, but one-time gains flatter the denominator. Adjusting to operating income and EV/EBITDA gives a more honest picture.",
      "The key questions are whether search monetisation survives AI, how much capex the cloud build requires, and what the regulatory remedies actually change.",
    ],
    questions: [
      "How much of the 2026 net income is non-recurring?",
      "Is AI expanding search queries or replacing them?",
      "When does cloud capex translate into free cash flow?",
      "What would an adverse antitrust remedy cost the distribution network?",
    ],
  },
};
