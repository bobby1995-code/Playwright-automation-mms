import { test, expect } from '@playwright/test';
import axios from 'axios'; // Install Axios for API call

test.describe('Metal Management Solutions form test', () => {

  test('should enable button only after name input and display correct popup with API validation', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://my-angular-app-mms-test.vercel.app/');  // Use the provided app's URL

    // Verify the submit button is present but disabled initially
    const submitButton = page.locator('#submitButton');
    await expect(submitButton).toBeVisible(); // Ensure button is present on landing page
    await expect(submitButton).toBeDisabled(); // Ensure button is disabled initially

    // Enter a name in the input field
    await page.fill('#nameInput', 'Test User');

    // Verify the submit button becomes enabled after name input
    await expect(submitButton).toBeEnabled();

    // Click the submit button
    await page.click('#submitButton');

    // Verify the popup message
    const notification = page.locator('#notification');
    await expect(notification).toBeVisible();
    await expect(notification).toHaveText('Welcome to MMS.'); // Confirm correct popup message

    // Validate the displayed popup message is correct
    const popupMessage = await notification.innerText();
    expect(popupMessage).toBe('Welcome to MMS.');

    // Perform a basic API call to validate 200 status code
    const response = await axios.get('http://localhost:4200/@fs/Users/pc/my-angular-app/.angular/cache/18.2.2/vite/deps/@angular_core.js?v=a304cd35'); 
    expect(response.status).toBe(200); // Verify API returns a 200 status code
  });

});
