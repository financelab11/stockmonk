const sharp = require("sharp");
const fs = require("fs");
const pngToIco = require("png-to-ico").default;

const SOURCE = "reference/stockmonk-logo.png";

async function main() {
  const buf = fs.readFileSync(SOURCE);

  await sharp(buf).resize(512, 512).png().toFile("public/icons/icon-512.png");
  await sharp(buf).resize(192, 192).png().toFile("public/icons/icon-192.png");
  await sharp(buf).resize(180, 180).png().toFile("public/icons/apple-touch-icon.png");
  await sharp(buf).resize(32, 32).png().toFile("public/icons/favicon-32.png");
  await sharp(buf).resize(16, 16).png().toFile("public/icons/favicon-16.png");
  await sharp(buf).resize(256, 256).png().toFile("public/icons/favicon-256.png");
  await sharp(buf)
    .resize(512, 512)
    .extend({ top: 64, bottom: 64, left: 64, right: 64, background: "#0b1220" })
    .resize(512, 512)
    .png()
    .toFile("public/icons/maskable-512.png");
  await sharp(buf).resize(160, 160).png().toFile("public/brand/logo-mark.png");

  const ico = await pngToIco("public/icons/favicon-256.png");
  fs.writeFileSync("app/favicon.ico", ico);

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#faf8f2"/>
    <rect x="72" y="72" width="486" height="486" rx="44" fill="#0b1220"/>
    <text x="620" y="300" font-family="Georgia, serif" font-size="92" font-weight="600" fill="#101828">stockmonk</text>
    <text x="624" y="366" font-family="Arial, sans-serif" font-size="28" fill="#344054">Independent equity research</text>
    <text x="624" y="404" font-family="Arial, sans-serif" font-size="28" fill="#344054">for learners.</text>
    <text x="624" y="466" font-family="Arial, sans-serif" font-size="23" fill="#0b6b53">No ratings. No price targets.</text>
    <text x="624" y="500" font-family="Arial, sans-serif" font-size="23" fill="#0b6b53">Just the numbers.</text>
  </svg>`;
  const logo = await sharp(buf).resize(390, 390).png().toBuffer();
  await sharp(Buffer.from(svg))
    .composite([{ input: logo, left: 120, top: 120 }])
    .png()
    .toFile("public/og.png");

  console.log("Brand assets written to public/icons, public/brand and public/og.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
