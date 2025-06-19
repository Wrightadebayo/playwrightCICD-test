import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 150000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    headless: true,
    screenshot: 'only-on-failure',  // ✅ Only capture screenshots if test fails
    video: 'on-first-retry',        // ✅ Only record video during the first retry
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
      },
    },
    {
      name: 'webkit',
      timeout: 200000,
      use: {
        ...devices['Desktop Safari'],
        headless: true,
      },
    },
    // {
    //   name: 'Mobile chrome (iPhone 13)',
    //   use: {
    //     ...devices['iPhone 13'],
    //     baseURL: 'http://localhost:3000',
    //   },
    // },
  ],
});
