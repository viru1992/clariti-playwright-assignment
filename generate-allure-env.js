const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Define the output path for Allure environment file
const allureEnvPath = path.join('allure-results', 'environment.properties');

// Ensure the allure-results folder exists
if (!fs.existsSync('allure-results')) {
    fs.mkdirSync('allure-results');
}

// Collect environment variables from .env
const content = `
Base URL=${process.env.BASE_URL || 'N/A'}
Username=${process.env.USERNAME || 'N/A'}
Password=${process.env.PASSWORD ? '********' : 'N/A'}
Environment=${process.env.ENVIRONMENT || 'N/A'}
Browser=${process.env.BROWSER || 'chromium'}
Headless=${process.env.HEADLESS || 'true'}
`.trim();

// Write the environment.properties file
fs.writeFileSync(allureEnvPath, content);

console.log('✅ Allure environment.properties generated successfully!');
