import type { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file

const config: PlaywrightTestConfig = {
  testDir: './test',
  fullyParallel: true, // ✅ Parallel test execution
  timeout: 60 * 1000 * 5,
  retries: 1, // ✅ Retry failed tests once
  // Number of parallel workers
  workers: 4, // <-- tests will run in 4 parallel threads

  use: {
    baseURL: process.env.BASE_URL || "https://www.saucedemo.com/",
    headless: true,
    screenshot: 'only-on-failure', // ✅ Screenshot only when test fails
    video: 'retain-on-failure', // ✅ Retain video only on failure
    trace: 'retain-on-failure', // ✅ Trace logs for debugging
    launchOptions: {
      // slowMo: 1000, // Uncomment for debugging
    },
  },

  reporter: [
    ['dot'],
    ['json', { outputFile: 'jsonReports/jsonReport.json' }],
    ['html', { open: 'never' }],
    ['allure-playwright'], // ✅ Advanced reporting
  ],
};

export default config;
