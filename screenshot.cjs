const { chromium } = require('playwright');
const path = require('path');

const url = 'file://' + path.resolve(__dirname, 'index.html');

const breakpoints = [
  { name: 'desktop-1440', width: 1440, height: 9000 },
  { name: 'tablet-768', width: 768, height: 9000 },
  { name: 'mobile-375', width: 375, height: 9000 },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 9000 } });
  const page = await context.newPage();

  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await new Promise(r => setTimeout(r, 2000));

  for (const bp of breakpoints) {
    await page.setViewportSize({ width: bp.width, height: bp.height });
    await new Promise(r => setTimeout(r, 500));

    // Full page screenshot
    await page.screenshot({
      path: `screenshots/${bp.name}-full.png`,
      fullPage: true,
    });

    // Hero
    await page.locator('.hero').first().screenshot({
      path: `screenshots/${bp.name}-hero.png`,
    });

    // Contact form
    await page.locator('.contact-form').first().screenshot({
      path: `screenshots/${bp.name}-form.png`,
    });

    // Comparison
    await page.locator('.comparison').first().screenshot({
      path: `screenshots/${bp.name}-comparison.png`,
    });

    // Video
    await page.locator('.video-section').first().screenshot({
      path: `screenshots/${bp.name}-video.png`,
    });

    // Plans
    await page.locator('.plans').first().screenshot({
      path: `screenshots/${bp.name}-plans.png`,
    });

    // CTA Final
    await page.locator('.cta-final').first().screenshot({
      path: `screenshots/${bp.name}-cta.png`,
    });
  }

  await browser.close();
  console.log('Done! Screenshots saved to screenshots/');
})();
