
# Playwright Automation Test for Angular Project

This project contains Playwright and TypeScript-based automation tests for an Angular application, testing the functionality of a form in the Metal Management Solutions (MMS) application.

## Project Repository

You can find the Angular project repository [here](https://github.com/bobby1995-code/my-angular-app.git).

## Prerequisites

Make sure you have the following installed:
- Node.js
- Angular CLI
- Playwright
- Axios (for API calls in the tests)

## Installation

1. Clone the Angular project repository:
   ```bash
   git clone https://github.com/bobby1995-code/my-angular-app.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd my-angular-app
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory to set your environment variables:
   ```
   BASE_URL=https://my-angular-app-mms-test.vercel.app
   API_URL=http://localhost:4200/api/validate
   ```

## Running the Angular Application

1. Start the Angular application to ensure API calls run successfully:
   ```bash
   ng serve
   ```

2. Open [http://localhost:4200](http://localhost:4200) in your browser to verify the application is running.

## Running the Automation Tests

Once the Angular application is running, you can execute the automation tests using Playwright.

1. In a separate terminal, run the following command to execute the tests:
   ```bash
   npm run test
   ```

2. The test results will be displayed in the terminal.

## About the Test

The test included in this project does the following:

- Navigates to the MMS form page.
- Verifies that the submit button is visible but initially disabled.
- Fills in the name input field, which enables the submit button.
- Submits the form and verifies that the correct popup (`"Welcome to MMS."`) is displayed.
- Validates the API call to ensure it returns a 200 status, indicating successful API interaction.

