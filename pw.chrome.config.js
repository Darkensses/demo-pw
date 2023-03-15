const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 10 * 1000,
  expect: {    
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        channel: 'chrome', 
        headless: false,
        
      },
    },
  ],
});