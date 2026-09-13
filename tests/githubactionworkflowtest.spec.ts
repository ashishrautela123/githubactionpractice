
import { test, expect } from '@playwright/test';

test('Playwright TypeScript CI Test', async ({ page }) => {

  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // Verify page title
  await expect(page).toHaveTitle(/Playwright/);

  // Print URL and title
  console.log('Current URL:', page.url());
  console.log('Page Title:', await page.title());

  // Click Get started
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify navigation
  await expect(page).toHaveURL(/intro/);

  // Take screenshot
  await page.screenshot({
    path: 'playwright-ci-test.png',
    fullPage: true
  });

  console.log('Test completed successfully!');
});