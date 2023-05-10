const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wdfk15', //npx cypress run --record --key 5878cfd2-fac7-42a4-8ddd-bcac1b4c77e1
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  }
});
