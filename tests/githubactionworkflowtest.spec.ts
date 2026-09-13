
import { test, expect } from '@playwright/test';

test('Random Playwright TypeScript Test', async ({ page }) => {

  // Open website
  await page.goto('https://www.google.com');

  // Verify page title
  await expect(page).toHaveTitle(/Google/);

  // Search something
  const searchBox = page.locator('textarea[name="q"]');

  await searchBox.fill('Playwright TypeScript');

  // Click search button
  await page.getByRole('button', { name: 'Google Search' }).click();

  // Wait for page load
  await page.waitForLoadState('domcontentloaded');

  // Print current URL
  console.log('Current URL:', page.url());

  // Print page title
  console.log('Page Title:', await page.title());

  // Take screenshot
  await page.screenshot({
    path: 'playwright-typescript.png',
    fullPage: true
  });

  // Verify search result page
  await expect(page).toHaveTitle(/Playwright|Google Search/);

});