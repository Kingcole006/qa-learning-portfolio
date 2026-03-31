import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'; // Loads .env file variables into process.env
import path from 'path'; // Helps build file paths that work on any OS

// Load our .env file so BASE_URL and other variables are available
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // Where Playwright looks for test files
  testDir: './tests',

  // Run all test files at the same time (faster)
  fullyParallel: true,

  // If someone left test.only in code, fail on CI (prevents accidents)
  forbidOnly: !!process.env.CI,

  // Retry failed tests 2 times on CI, never locally
  retries: process.env.CI ? 2 : 0,

  // Use 1 worker on CI, unlimited locally
  workers: process.env.CI ? 1 : undefined,

  // Generate an HTML report after tests run
  reporter: 'html',

  use: {
    // Base URL from .env file - no more hardcoding URLs in tests!
    baseURL: process.env.BASE_URL,

    // Save a trace file when a test fails (helps debugging)
    trace: 'on-first-retry',

    // Take a screenshot automatically when a test fails
    screenshot: 'only-on-failure',
  },

  projects: [
    // Test in Chrome
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Test in Firefox
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // Test in Safari
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});