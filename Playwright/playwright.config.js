import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Where your tests live
  testDir: './tests',

  // Don't run in parallel for now — easier to debug
  fullyParallel: false,

  // No retries for now
  retries: 0,

  // One worker at a time
  workers: 1,

  // Two reporters:
  // html  → gives you the visual HTML report
  // json  → gives backend a results file it can read
  reporter: [
    ['html', { outputFolder: '../reports/html', open: 'never' }],
    ['json', { outputFile: '../reports/results.json' }]
  ],

  use: {
    // Read URL from environment variable
    // Backend will pass: BASE_URL=https://staging.com
    // If nothing passed, falls back to google.com for testing
    baseURL: process.env.BASE_URL || 'https://google.com',

    // Take screenshot only when test fails
    screenshot: 'only-on-failure',

    // Record trace only on retry
    trace: 'on-first-retry',
  },

  // Only Chromium for now — add others later
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

});