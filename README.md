# Playwright Test Automation – SauceDemo

Automated tests for the SauceDemo application using Playwright and TypeScript with Allure reporting.

## Project Overview

This project demonstrates a scalable, maintainable test automation framework:

- Framework: Playwright with Page Object Model (POM)
- Reporting: Allure + Playwright HTML/JSON reporters
- Environment management: .env file for credentials and base URL
- Tests included:
  - Login (positive & negative scenarios)
  - Product listing and sorting
  - Add to cart
  - Checkout flow

## Project Structure

project-root/
├─ .env
├─ package.json
├─ playwright.config.ts
├─ generate-allure-env.js
├─ tests/
│   ├─ login.spec.ts
│   └─ ...
├─ pages/
│   ├─ Login.page.ts
│   └─ Products.page.ts
├─ utils/
│   └─ selectors.json
├─ allure-results/      ← generated automatically
└─ allure-report/       ← generated after report

## Setup Instructions

1. Clone the repository:
   git clone <your-repo-url>
   cd <project-folder>

2. Install dependencies:
   npm install

3. Install Playwright browsers:
   npm run install:playwright

4. Configure environment variables:
   Create a .env file in the project root:

   BASE_URL=https://www.saucedemo.com/
   USERNAME=standard_user
   PASSWORD=secret_sauce
   ENVIRONMENT=DEV
   BROWSER=chromium
   HEADLESS=true

> Add .env to .gitignore to avoid committing sensitive info.

## Useful Commands

### Running Tests

- Run all tests:
  npm test

- Run tests in headed mode (visible browser):
  npm run test:headed

- Run a specific test file:
  npx playwright test tests/login.spec.ts

- Run a specific test by title:
  npx playwright test -g "Standard user logs in successfully"

### Generating and Viewing Allure Reports

- Generate the report:
  npm run allure:generate

- Open the report in browser:
  npm run allure:open

- Generate & open in one step:
  npm run allure

> Allure reports include:
> - Test results
> - Screenshots/videos on failure
> - Environment information (from .env via generate-allure-env.js)

## Notes

- Tests are fully data-driven and configurable via .env or JSON files.
- Screenshots and videos are automatically captured on failures.
- Allure environment info is generated dynamically before tests via generate-allure-env.js.

## Best Practices

- Keep sensitive credentials in .env only.
- Commit your tests, pages, and selectors; ignore generated reports.
- Use descriptive test titles and tags (@login, @checkout) for filtering.

## References

- Playwright Documentation: https://playwright.dev/
- Allure Playwright Integration: https://www.npmjs.com/package/allure-playwright
- SauceDemo Application: https://www.saucedemo.com/
