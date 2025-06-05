import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 150000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // Global settings (shared)
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    headless: true, // Default: headless
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false, // 👈 Headed mode only for Chromium
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true, // 👈 Explicit (can also omit, falls back to global)
      },
    },
     {
       name: 'webkit',
       timeout: 200000,
      use: {
         ...devices['Desktop Safari'],
       headless: true, // 👈 Explicit (can also omit)
       },
    },
  ],
})
