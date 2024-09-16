const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  env: {
    URL: 'https://www.youtube.com/',
    Search: 'Warhammer 40k Space Marine II Trailer'
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});