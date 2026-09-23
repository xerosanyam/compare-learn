// Robust anchor test. Kept in /tmp, not in repo.
// Usage: node /tmp/anchor-test.mjs [baseUrl]
import { chromium } from 'playwright-core';

const base = process.argv[2] || 'http://localhost:3000';
const EXE = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SLUG = '2-reversing-linked-list';
let failures = 0;

async function check(name, fn) {
  try {
    await fn();
    console.log(`PASS ${name}`);
  } catch (e) {
    failures++;
    console.log(`FAIL ${name}: ${e.message.split('\n')[0]}`);
  }
}

const browser = await chromium.launch({ executablePath: EXE });

// --- Test 1: click TOC link with JS on, expect scroll ---
await check('click-scrolls', async () => {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 200)); });
  await page.goto(`${base}/ds`, { waitUntil: 'networkidle' });
  const target = await page.$(`[id="${SLUG}"]`);
  if (!target) throw new Error('target id missing in DOM');
  await page.click(`ul a[href="/ds#${SLUG}"]`);
  await page.waitForTimeout(1500);
  const hash = new URL(page.url()).hash;
  const box = await target.boundingBox();
  const y = await page.evaluate(() => window.scrollY);
  await page.close();
  if (errors.length) throw new Error('js errors: ' + errors.join(' | '));
  if (hash !== `#${SLUG}`) throw new Error('hash=' + hash);
  if (box.y > 120) throw new Error(`target at viewport y=${Math.round(box.y)}, scrollY=${Math.round(y)}`);
});

// --- Test 2: no-JS direct fragment nav, expect scroll ---
await check('nojs-fragment-scrolls', async () => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(`${base}/ds#${SLUG}`, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  const y = await page.evaluate(() => window.scrollY);
  await ctx.close();
  if (y < 50) throw new Error(`scrollY=${Math.round(y)}`);
});

await browser.close();
console.log(failures ? `${failures} FAILING` : 'ALL GREEN');
process.exit(failures ? 1 : 0);
