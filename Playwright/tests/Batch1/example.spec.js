import { test, expect } from '@playwright/test';

test('Google homepage loads correctly', async ({ page }) => {

  // Go to the base URL (google.com)
  await page.goto('/');

  // Wait for page to fully load
  await page.waitForLoadState('networkidle');

  // Check the page title contains Google
  await expect(page).toHaveTitle(/Google/);

  // Take a screenshot and save it
  await page.screenshot({
    path: '../captures/batch1/home.png',
    fullPage: true
  });

});

test('Google search box is visible', async ({ page }) => {

  // Go to the base URL
  await page.goto('/');

  await page.waitForLoadState('networkidle');

  // Check search box exists on page
  const searchBox = page.locator('textarea[name="q"]');
  await expect(searchBox).toBeVisible();

  // Take screenshot
  await page.screenshot({
    path: '../captures/batch1/searchbox.png',
    fullPage: true
  });

});