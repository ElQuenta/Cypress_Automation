const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  env: {
    ...process.env,
    URL: 'https://www.pinterest.com/',
    Search: 'Warhammer 40k'
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});