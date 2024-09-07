import { test, expect } from '@playwright/test';
import axios from 'axios';
import dotenv from 'dotenv'; 

dotenv.config();


const BASE_URL = process.env.BASE_URL || 'https://my-angular-app-mms-test.vercel.app';
const API_URL = process.env.API_URL || 'http://localhost:4200/api/validate';

test.describe('Metal Management Solutions form test', () => {
  
  
  async function validateAPI() {
    const response = await axios.get(API_URL);
    return response.status === 200;
  }

  test('should enable button after name input and display correct popup with API validation', async ({ page }) => {
   
    await page.goto(BASE_URL);

    
    const submitButton = page.locator('#submitButton');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeDisabled();

  
    await page.fill('#nameInput', 'Test User');


    await expect(submitButton).toBeEnabled();

  
    await page.click('#submitButton');

   
    const notification = page.locator('#notification');
    await expect(notification).toBeVisible();
    await expect(notification).toHaveText('Welcome to MMS.');

  
    const isValid = await validateAPI();
    expect(isValid).toBe(true); 
  });

});
