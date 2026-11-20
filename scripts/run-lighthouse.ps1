param(
  [string]$Url = "https://stockmonk.vercel.app/india/companies/TIPSMUSIC",
  [string]$Out = ".lighthouse-before-mobile.json",
  [switch]$Desktop
)

for ($attempt = 1; $attempt -le 6; $attempt++) {
  if (Test-Path $Out) { Remove-Item $Out -Force }
  $args = @(
    "--yes", "lighthouse@latest", $Url,
    "--output=json", "--output-path=$Out",
    "--chrome-path=D:\Projects\Stockmonk\.chrome-test\chrome-win64\chrome.exe",
    "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
    "--only-categories=performance,accessibility,best-practices,seo",
    "--quiet"
  )
  if ($Desktop) { $args += "--preset=desktop" }
  npx @args *> $null
  if (Test-Path $Out) {
    $check = node -e "try{const j=require('./$Out');const lcp=j.audits['largest-contentful-paint'];if(lcp && lcp.numericValue>0){console.log('ok')}else{console.log('bad')}}catch(e){console.log('bad')}"
    if ($check -eq "ok") {
      node -e "const j=require('./$Out');console.log('$Out',Object.fromEntries(Object.entries(j.categories).map(([k,v])=>[k,Math.round(v.score*100)])));console.log('LCP',j.audits['largest-contentful-paint'].displayValue,'CLS',j.audits['cumulative-layout-shift'].displayValue,'TBT',j.audits['total-blocking-time'].displayValue,'FCP',j.audits['first-contentful-paint'].displayValue,'SI',j.audits['speed-index'].displayValue)"
      exit 0
    }
  }
  Write-Output "attempt $attempt failed"
}
Write-Output "all attempts failed"
exit 1
