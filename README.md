Playwright Automation Test for Angular Project
This project contains Playwright and TypeScript-based automation tests for an Angular application, testing the functionality of a form in the Metal Management Solutions (MMS) application.

Project Repository
You can find the Angular project repository here.

Prerequisites
Make sure you have the following installed:

Node.js
Angular CLI
Playwright
Axios (for API calls in the tests)
Installation
Clone the Angular project repository:

bash
Copy code
git clone https://github.com/bobby1995-code/my-angular-app.git
Navigate into the project directory:

bash
Copy code
cd my-angular-app
Install project dependencies:

bash
Copy code
npm install
Create a .env file in the root directory to set your environment variables:

bash
Copy code
BASE_URL=https://my-angular-app-mms-test.vercel.app
API_URL=http://localhost:4200/api/validate
Running the Angular Application
Start the Angular application to ensure API calls run successfully:

bash
Copy code
ng serve
Open http://localhost:4200 in your browser to verify the application is running.

Running the Automation Tests
Once the Angular application is running, you can execute the automation tests using Playwright.

In a separate terminal, run the following command to execute the tests:

bash
Copy code
npm run test
The test results will be displayed in the terminal.

About the Test
The test included in this project does the following:

Navigates to the MMS form page.
Verifies that the submit button is visible but initially disabled.
Fills in the name input field, which enables the submit button.
Submits the form and verifies that the correct popup ("Welcome to MMS.") is displayed.
Validates the API call to ensure it returns a 200 status, indicating successful API interaction.
