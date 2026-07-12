import { test, expect } from '@playwright/test';

test('Google search works', async ({ page }) => {

  // Go to google
  await page.goto('/');

  await page.waitForLoadState('networkidle');

  // Find search box and type something
  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('Playwright testing');

  // Press Enter
  await page.keyboard.press('Enter');

  // Wait for results page to load
  await page.waitForLoadState('networkidle');

  // Check URL changed to search results
  await expect(page).toHaveURL(/search/);

  // Take screenshot of results page
  await page.screenshot({
    path: '../captures/batch2/search-results.png',
    fullPage: true
  });

});
