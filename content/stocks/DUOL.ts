import type { StockStory } from "./types";

export const DUOL: StockStory = {
  ticker: "DUOL",
  kicker: "Consumer & Brands · Language learning apps",
  title: "Duolingo's free users are the product and the paying ones are the business",
  dek: "A freemium app with a 72.8% gross margin, a 34.4% free-cash-flow margin and a growth rate that has fallen to 13.7%. The report explains how the funnel works and why the margin is shrinking while revenue still rises.",
  readingMinutes: 10,
  takeaways: [
    "Revenue reached $1.18B, up 22.6%, at a 72.8% gross margin.",
    "Free cash flow was $407.0M, a 34.4% margin, because the app costs little to serve at the margin.",
    "Operating margin fell from 15.4% in Q4 FY25 to 7.8% in Q3 FY26 as spending grew faster than revenue.",
    "Net cash of $1.29B is more than a fifth of the market capitalisation and funds the whole roadmap.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1562088/000162828026012494/duol-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001562088&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Duolingo runs a language-learning app with courses in about 40 languages, plus a digital proficiency exam that people take for school or immigration purposes. Most users learn for free, with advertisements and a limited number of mistakes per day. A minority pay for a subscription that removes ads, adds practice features and unlocks more advanced content.",
      "That structure is the whole business model. The free tier is cheap to serve and creates a very large top of funnel. A small conversion rate on a large base produces $1.18B of revenue, up 22.6%. Because the marginal cost of another lesson is close to zero, gross margin is 72.8% and free cash flow was $407.0M, a 34.4% margin.",
      "The problem is the trend inside those numbers. Revenue growth has slowed to 13.7% year over year in the latest quarter, and operating margin fell from 15.4% in Q4 FY25 to 7.8% in Q3 FY26. The shares are down 17.2% over one year and sit at $160.42 against a 52-week range of $87.89 to $213.37.",
    ],
    quote:
      "For a freemium app, the only two numbers that matter in the long run are how many people use it and how many of them pay. Everything else is a cost line between those two.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is a mobile app that turns vocabulary and grammar into short game-like lessons. Streaks, leaderboards and notifications are not decoration; they are the retention mechanism. A language app has to compete with everything else on a phone, and the habit loop is what keeps a learner coming back after the novelty fades.",
      "Revenue comes from three places: subscriptions, advertising shown to free users, and in-app purchases. There is also the proficiency exam, which is sold to individuals and institutions and priced far above a subscription. The brief does not split the revenue, so the mix has to be treated qualitatively.",
      "The company was founded in 2011 and is based in Pittsburgh, with 2,021 employees. That is a large headcount for a software company, and it reflects the content operation: courses in 40 languages, each with exercises, audio and grading logic, plus the research and marketing teams behind the app.",
    ],
    bullets: [
      {
        title: "Subscriptions",
        detail:
          "The main revenue line. A monthly or annual fee for an ad-free experience and extra practice features.",
      },
      {
        title: "Advertising",
        detail:
          "Free users see ads. It monetises the non-paying base without charging it, but the yield per user is low.",
      },
      {
        title: "Proficiency exam",
        detail:
          "A paid test that certifies language ability. Higher price per transaction and a different customer from the casual learner.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Duolingo spends money to build courses and to host and serve them. Once a course exists, the cost of an additional lesson is mostly cloud and bandwidth, which is why gross margin is 72.8%. The company does not pay teachers per lesson, and it does not need a classroom or a sales force for the consumer product.",
      "The operating cost structure is where the margin is decided. Research and development keeps the courses current and builds new subjects. Sales and marketing buys users, and that line is the swing factor: a dollar spent to acquire a subscriber is worth it only if the subscriber stays long enough to repay it. General and administrative costs cover the app store fees, legal work and the corporate team.",
      "The subscription model creates deferred revenue. A customer who pays for a year upfront hands over cash today, and the company recognises the revenue over twelve months. That is why free cash flow of $407.0M can exceed operating income of $135.6M in FY2025: the cash arrives before the accounting revenue does.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 45.0% a year from $250.8M in FY2021 to $1.04B in FY2025. The growth came from more users, better conversion and price increases on the subscription. The company also expanded beyond languages into music and mathematics, which broadens the addressable audience without changing the app mechanics.",
      "The recent trend is slower. Quarterly revenue went from $252.3M in Q2 FY25 to $309.0M in Q3 FY26, a 13.7% increase year over year. That is a sharp deceleration from the 45.0% historical compound rate and from the 22.6% trailing figure.",
      "Third-party estimates call for $1.22B of revenue and $6.65 of EPS this fiscal year, then $1.39B and $7.81 next year. That implies roughly 14% revenue growth, consistent with the latest quarter. The estimates come from a small number of analysts, which makes the average less reliable than the count of 18 headline contributors suggests.",
    ],
    bullets: [
      {
        title: "User growth",
        detail:
          "More daily and monthly learners expand the base from which subscribers are converted.",
      },
      {
        title: "Conversion and pricing",
        detail:
          "A higher share of free users paying, or a higher subscription price, lifts revenue without new users.",
      },
      {
        title: "New subjects",
        detail:
          "Music, maths and other courses give existing users another reason to stay and attract new ones.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the transition from a cash-burning startup to a profitable app. Duolingo lost $60.0M at the operating line in FY2021, $65.2M in FY2022 and $13.3M in FY2023, then earned $62.6M in FY2024 and $135.6M in FY2025. Revenue grew fourfold over the same period while the cost base grew much more slowly.",
      "The quarterly margin has been sliding since late FY2025. Q4 FY25 earned 15.4%, Q1 FY26 15.3%, Q2 FY26 11.4% and Q3 FY26 7.8%. Revenue kept rising, so the pressure is coming from spending, not from a demand collapse. Marketing, product development or app store fees are the likely culprits, and the brief does not break them out.",
      "Net income needs care. FY2025 net income was $414.1M against $135.6M of operating income, and Q3 FY25 net income of $292.2M exceeded that quarter's revenue of $271.7M. Those gaps can only come from a non-operating item, most likely a tax benefit. The operating line is the honest measure of the business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $407.0M, a 34.4% margin, and the annual path is steady: $5.6M in FY2021, $48.1M in FY2022, $150.4M in FY2023, $273.4M in FY2024 and $369.7M in FY2025. The app business converts revenue into cash with very little capital spending, and deferred subscription revenue gives it an extra push.",
      "The balance sheet holds $1.29B of net cash, or net debt to EBITDA of negative 7.9x. That is a large cushion relative to the $6.43B market capitalisation. It means the company can fund new subjects, marketing experiments and acquisitions without borrowing, and it explains the 60.2% return on invested capital.",
      "Cash flow is not the constraint. The constraint is the cost of acquiring and keeping users. If marketing spend rises faster than subscription revenue, free cash flow falls even though the app itself is still cheap to run.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $160.42 the shares trade at 30.2x trailing earnings, 31.6x EV/EBITDA, 4.3x sales and 15.8x free cash flow, with a 6.3% free-cash-flow yield. The gap between 31.6x EBITDA and 15.8x free cash flow is unusual and reflects the difference between accounting profit and cash collected from annual subscriptions.",
      "A 4.3x sales multiple for a 13.7% grower is richer than the growth rate alone would justify. The market is paying for the quality of the model: a 72.8% gross margin, a 34.4% free-cash-flow margin and $1.29B of net cash. If growth re-accelerates, the multiple is defensible; if it keeps slowing, the multiple has room to compress.",
      "The peer set puts CAVA at 4.2x sales and ELF at 3.8x, both with much lower gross margins and higher revenue growth. Duolingo is being valued as a software business rather than a consumer brand, which is the right frame as long as the subscription economics hold. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 18 analysts with a mean target of $150.87 and a range of $108.00 to $210.00. The mean sits below the $160.42 share price, which is worth noticing: the consensus does not see much upside from here even though the range extends well above it.",
      "The forward estimates are thin. The next quarter is covered by 4 analysts at $322.7M of revenue and $1.71 of EPS, the following quarter by 3 analysts, and the full year by 7. A headline count of 18 with only 7 full-year estimates means the average is built on a subset and should be read with caution.",
      "Estimates call for $1.22B of revenue and $6.65 of EPS this fiscal year, then $1.39B and $7.81. Those are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "Duolingo's financial risks are modest because the balance sheet is strong and the product is cheap to run. The real risks are behavioural: keeping users engaged, keeping them paying, and keeping the cost of acquiring them under control.",
    items: [
      {
        title: "Slowing user growth",
        severity: "High",
        detail:
          "Revenue growth has fallen to 13.7%. If the user base stops expanding, growth has to come from price and conversion, both of which have limits.",
        watch: "Daily and monthly user counts and the conversion rate to paid.",
      },
      {
        title: "Rising acquisition cost",
        severity: "High",
        detail:
          "Operating margin fell from 15.4% to 7.8% in three quarters. If marketing is the cause, the company is paying more for each subscriber.",
        watch: "Sales and marketing as a share of revenue and the payback period per subscriber.",
      },
      {
        title: "Subscription fatigue",
        severity: "Medium",
        detail:
          "Consumers can cancel a monthly subscription easily. A weaker retention rate would hit revenue and cash at the same time.",
        watch: "Renewal rates and the mix of monthly versus annual plans.",
      },
      {
        title: "Competition from free tools",
        severity: "Medium",
        detail:
          "General-purpose AI assistants can now tutor languages, and free alternatives set a ceiling on what Duolingo can charge.",
        watch: "Pricing changes and engagement trends against free substitutes.",
      },
      {
        title: "Multiple compression",
        severity: "Medium",
        detail:
          "At 31.6x EV/EBITDA and 4.3x sales, a further slowdown in growth would force the multiple down even if profits keep rising.",
        watch: "Forward revenue estimates against the sales multiple.",
      },
    ],
    watchlist: [
      {
        title: "Paid subscriber conversion",
        detail:
          "The ratio that turns a large free base into revenue. It matters more than raw user growth.",
      },
      {
        title: "Operating margin",
        detail:
          "The decline from 15.4% to 7.8% is the clearest warning signal in the file.",
      },
      {
        title: "Deferred revenue",
        detail:
          "Annual plans bring cash early. A change in the monthly-versus-annual mix affects both cash flow and reported revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Duolingo is a high-quality consumer software business. Gross margin of 72.8%, free cash flow of $407.0M and $1.29B of net cash are the marks of a product that scales without much capital. The transition from losses in FY2023 to $135.6M of operating income in FY2025 was rapid and real.",
      "The debate is about the next phase. Growth has slowed to 13.7%, operating margin is compressing, and the consensus target of $150.87 is below the current share price. The company is no longer a hyper-growth story, and the 4.3x sales multiple has not fully adjusted to that.",
      "Separate the accounting noise from the operating trend. The FY2025 net income figure was flattered by a non-operating item, and the operating margin is the number that describes the business. Whether it stabilises near 8% or returns to 15% decides most of the valuation question.",
    ],
    questions: [
      "What is the paid subscriber conversion rate, and is it rising or falling?",
      "Why did operating margin fall by half in three quarters?",
      "How much of revenue comes from subscriptions versus ads and the exam?",
      "Can revenue grow at 13.7% without marketing spend rising faster?",
    ],
  },
};
