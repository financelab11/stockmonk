const url = "https://stockmonk.vercel.app/india/companies/TIPSMUSIC";
const strategies = ["mobile", "desktop"];

for (const strategy of strategies) {
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`;
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    if (!json.lighthouseResult) {
      console.log(strategy, "NO RESULT", JSON.stringify(json).slice(0, 300));
      continue;
    }
    const categories = json.lighthouseResult.categories;
    const audits = json.lighthouseResult.audits;
    console.log(`\n${strategy.toUpperCase()} (lab)`);
    for (const [key, value] of Object.entries(categories)) {
      console.log(`${key}: ${Math.round(value.score * 100)}`);
    }
    console.log("LCP:", audits["largest-contentful-paint"].displayValue);
    console.log("CLS:", audits["cumulative-layout-shift"].displayValue);
    console.log("TBT:", audits["total-blocking-time"].displayValue);
    console.log("FCP:", audits["first-contentful-paint"].displayValue);
    console.log("SI:", audits["speed-index"].displayValue);
  } catch (error) {
    console.log(strategy, "ERR", String(error));
  }
}
