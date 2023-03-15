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
    video: 'off',
    contextOptions: {
        recordVideo: {dir: './videos'}
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        channel: 'chrome',
        headless: false,        
      },      
    },

    {
      name: 'Pixel4a',
      use: {
        channel: 'chrome',
        headless: false, 
        userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.20 Mobile Safari/537.36",
        screen: {
            width: 412,
            height: 892
        },
        viewport: {
            width: 412,
            height: 765
        },
        deviceScaleFactor: 2.63,
        isMobile: true,
        hasTouch: true,
      }
    }
  ],
});