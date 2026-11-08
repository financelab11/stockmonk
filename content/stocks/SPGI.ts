import type { StockStory } from "./types";

export const SPGI: StockStory = {
  ticker: "SPGI",
  kicker: "Financial data and benchmarks · Ratings, indices and commodities",
  title:
    "S&P Global sells the benchmarks other people's money is measured against",
  dek: "Credit ratings, the S&P 500 index licence, commodity price assessments and market data are separate businesses with one thing in common: customers pay for a standard they cannot easily replace.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $17.2B, up 18.2%, with the latest quarter at $3.68B and a 53.2% operating margin.",
    "Operating margin is 45.1% and net margin is 29.0%; free cash flow is $4.1B, a 23.8% margin.",
    "Net debt is $10.6B, or 1.3x EBITDA, a modest load for a business with subscription-like revenue.",
    "At $467.80 the shares trade at 27.2x trailing earnings and 18.5x EV/EBITDA, between the banks and the payment networks.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/64040/000006404026000013/spgi-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000064040&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "S&P Global is a gatekeeper. Its ratings business assigns credit grades that bond investors and regulators rely on. Its indices business licenses the S&P 500 and other benchmarks that trillions of dollars of funds are measured against. Its commodity business publishes price assessments used to settle physical and derivative contracts. Its market-intelligence and mobility units sell data and analytics to financial institutions and corporations.",
      "Trailing revenue of $17.2B is 18.2% higher than a year earlier, and the latest quarter reached $3.68B with a 53.2% operating margin. That margin is high because the products are information and standards, not inventory or loans. The cost of serving one more subscriber to an index or a data feed is small.",
      "At $467.80 the equity is worth $135.6B, or 27.2x trailing earnings. The shares sit 51% of the way up a 52-week range of $381.61 to $552.25. The one-year return is negative 3.7% while the five-year return is 5.7%, a reminder that this is a high-quality business that can still be a poor short-term investment if the multiple compresses.",
    ],
    quote:
      "Ratings and indices are standards. Once a market settles on a standard, switching is not a purchase decision; it is an infrastructure project.",
  },
  whatItDoes: {
    paragraphs: [
      "Market Intelligence sells data, analytics and workflow tools to asset managers, banks, insurers and corporations. Ratings grades issuers and securities, earning fees from the companies and governments that bring deals to market. Commodity Insights publishes benchmarks and price assessments for energy, metals and agriculture, and sells the data and analytics around them.",
      "Mobility serves the automotive and transportation industry with vehicle history, valuation and forecasting data. Dow Jones Indices licenses the S&P 500, S&P Global 100 and a wide range of factor, sector and fixed-income benchmarks, mostly to asset managers and exchanges that launch products tracking them.",
      "The index licence is the highest-margin piece because the benchmark is already the standard.",
      "The businesses are connected by a common customer: the financial institution that needs a rating, a benchmark, a price and a data feed. That gives S&P Global several ways to sell into the same account, but it also means the ratings cycle and the asset-management cycle can move together. The company's revenue is more diversified than a pure ratings agency and more cyclical than a pure index provider.",
    ],
    bullets: [
      {
        title: "Ratings",
        detail:
          "Fees for grading new bond and loan issuance. Cyclical, regulatory and reputation-sensitive.",
      },
      {
        title: "Indices",
        detail:
          "Licensing benchmarks to funds and exchanges. Asset-based and highly recurring.",
      },
      {
        title: "Commodity and market data",
        detail:
          "Price assessments, analytics and workflow tools sold on subscription.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model varies by unit. Ratings charges an issuance fee, so revenue depends on how many bonds and loans come to market and how large they are. Indices charges a licence fee, often tied to the assets tracking the benchmark, which makes it recurring and sensitive to market levels rather than to issuance. Commodity Insights and Market Intelligence charge subscriptions for data and analytics, which renew annually and have high retention.",
      "The cost structure is people and data. Analysts, index committees and data engineers are the product; technology and content acquisition are the platform. Because the marginal cost of a subscriber is low, incremental revenue carries a high margin, and the operating margin expands when revenue grows faster than headcount.",
      "The competitive position is regulatory and reputational. A credit rating matters because regulators and contracts recognise it; an index matters because issuers and investors agree on it; a commodity benchmark matters because contracts settle against it. That is a different kind of moat from a patent or a brand. It is durable while the standard holds, and it can be eroded by regulation or by a competing benchmark winning acceptance.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $8.30B in FY2021 to $11.18B in FY2022, a step change that reflects a transformative combination rather than organic growth. It then grew to $12.50B, $14.21B and $15.34B in the following three years, with the trailing figure at $17.21B. The underlying growth has been steady in the high single digits, with issuance and market levels adding cyclicality.",
      "Consensus estimates call for $14.69B of revenue and $17.95 of EPS this fiscal year, then $15.70B and $20.18 next year, with 18 and 23 analysts contributing respectively. The revenue estimate is below the trailing figure, which suggests a different presentation basis or a forecast of lower issuance; the EPS estimate is the cleaner comparison across periods.",
      "The durable drivers are the growth of indexed assets, the demand for data and analytics, and the volume of debt issuance. The brakes are a freeze in capital markets, a regulatory challenge to the ratings model, and competition from exchanges and data providers that want to own the benchmark. None of those has derailed the franchise, but each is a live constraint.",
    ],
    bullets: [
      {
        title: "Index assets",
        detail:
          "Licence revenue grows with the assets tracking S&P benchmarks and with new product launches.",
      },
      {
        title: "Debt issuance",
        detail:
          "Ratings revenue depends on the volume and size of bond and loan deals.",
      },
      {
        title: "Data subscriptions",
        detail:
          "Market Intelligence and Commodity Insights grow with seat count, content and price.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 45.1%, net margin is 29.0% and diluted EPS is $16.82. Return on equity is 19.8% and return on invested capital is 17.2%. Those are good returns for an information business, though below the payment networks because S&P Global carries goodwill from acquisitions and a moderate debt load.",
      "The annual record shows operating income rising from $4.22B in FY2021 to $6.48B in FY2025 on revenue that grew from $8.30B to $15.34B. The FY2023 dip — operating income of $4.02B on $12.50B of revenue — is a useful reminder that the ratings cycle can compress margins even while the subscription businesses grow.",
      "Quarterly margins have ranged from 38.4% to 53.2% over the last six quarters, with revenue moving between $3.44B and $5.22B. The Q4 FY25 revenue spike and lower margin look like a seasonal mix effect; the Q3 FY26 margin of 53.2% looks like a favourable mix. Neither should be annualised.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.10B on $17.21B of revenue, a 23.8% margin. That is below the operating margin because the company carries capitalised software, data content and acquisition-related costs, and because cash taxes and interest absorb some of the operating profit. The five-year record shows free cash flow rising from $3.56B in FY2021 to $5.46B in FY2025, with a dip in FY2022.",
      "The balance sheet carries $10.6B of net debt, or 1.3x EBITDA. That is a comfortable load for a business with recurring revenue and high margins, and it leaves room for bolt-on acquisitions and buybacks. The company has historically used debt for large combinations, so the leverage ratio is worth monitoring around deal activity.",
      "Capital return is a mix of dividends and buybacks, funded by free cash flow. The priorities are reinvestment in data and analytics, acquisitions that add content or distribution, and returning the remainder. Unlike a bank, there is no regulatory capital constraint; unlike a railroad, there is no heavy maintenance capex. The cash is genuinely discretionary.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $467.80, S&P Global trades at 27.2x trailing earnings, 18.5x EV/EBITDA, 8.5x sales and 33.1x free cash flow. The peer table puts Visa at 37.1x earnings and 29.1x EV/EBITDA, Mastercard at 33.5x and 24.8x, and the banks between 10.6x and 13.9x. S&P Global sits in the middle: a higher-quality earnings stream than a bank, but a slower growth rate than a payment network.",
      "The multiple is best read against the durability of the ratings and index franchises. A 27x P/E on mid-single-digit revenue growth requires a long runway of pricing power and high retention. If issuance stays weak or regulation changes the ratings model, the earnings base and the multiple could compress together.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 485-to-572 range is narrow enough to suggest that analysts mostly agree about the business and disagree about the cycle.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts contribute to the attributed consensus, with a mean target of $526.70 and a range of $485.00 to $572.00. The tight range is unusual for a financial-data company and suggests that the debate is about timing rather than about the franchise.",
      "Estimates call for $17.95 of EPS this fiscal year and $20.18 next year, with revenue of $14.69B and $15.70B respectively. The EPS estimate rises faster than revenue, which is consistent with margin expansion and buybacks on top of high-single-digit growth.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and the revenue estimate's basis should be checked against the company's own presentation before it is compared with the trailing figure.",
    ],
  },
  risks: {
    intro:
      "S&P Global's risks are regulatory, reputational and cyclical. The balance sheet is moderate and the margins are high, so the main threat is to the fee pool and the standards that support it.",
    items: [
      {
        title: "Ratings regulation",
        severity: "High",
        detail:
          "Ratings agencies are regulated as gatekeepers. Changes to recognition rules, liability standards or fee structures could reduce the value of a rating.",
        watch:
          "Regulatory consultations, enforcement actions and any change to the recognised-agency framework.",
      },
      {
        title: "Debt-issuance cycle",
        severity: "High",
        detail:
          "Ratings revenue depends on how much debt is issued. A frozen market cuts fees even if the underlying credit quality is fine.",
        watch:
          "Bond and loan issuance volumes, especially high-yield and structured finance.",
      },
      {
        title: "Index competition and fee pressure",
        severity: "Medium",
        detail:
          "Asset managers can launch products on competing benchmarks or move to cheaper index providers. The S&P 500 is dominant, but not every index is.",
        watch: "Assets under licence, fee rates and net new product launches.",
      },
      {
        title: "Litigation and reputational risk",
        severity: "Medium",
        detail:
          "A rating that proves wrong in a default can trigger lawsuits and damage the standard's credibility.",
        watch:
          "Legal accruals, settlement disclosures and high-profile defaults.",
      },
      {
        title: "Acquisition integration and leverage",
        severity: "Medium",
        detail:
          "The company has grown through large combinations. Integration costs and goodwill impairments can absorb cash and distract management.",
        watch:
          "Net debt to EBITDA, acquisition spending and segment margin trends.",
      },
    ],
    watchlist: [
      {
        title: "Ratings issuance revenue",
        detail: "The cyclical swing factor in an otherwise recurring business.",
      },
      {
        title: "Assets under index licence",
        detail:
          "The base for index fees and the best measure of the franchise's reach.",
      },
      {
        title: "Net debt to EBITDA",
        detail:
          "Leverage determines how much room the company has for acquisitions and buybacks.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "S&P Global owns several standards businesses: credit ratings, the S&P 500 index, commodity benchmarks and financial data. The 45.1% operating margin and 19.8% return on equity reflect the economics of information and licensing, not manufacturing or lending.",
      "The teaching point is that a moat can be regulatory and reputational rather than technological. Ratings and indices are valuable because the market agrees to use them. That makes the franchise durable, but it also makes it a target for regulators and competitors who want a cheaper standard.",
      "The open questions are how much of the revenue base is recurring versus issuance-driven, and whether the multiple can hold if capital markets stay quiet for several quarters.",
    ],
    questions: [
      "What share of revenue comes from recurring subscriptions versus issuance fees?",
      "How much of index revenue depends on the S&P 500 specifically?",
      "What would a regulatory change to ratings recognition do to the fee pool?",
      "Is the 27.2x multiple supported by mid-single-digit growth?",
    ],
  },
};
