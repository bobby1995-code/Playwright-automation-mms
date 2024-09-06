import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // This points to the folder where your tests are located
  retries: 1,          // Retries failed tests once
  use: {
    browserName: 'chromium', // Default browser
    headless: true,          // Set to false if you want to see the browser running
  },
});
