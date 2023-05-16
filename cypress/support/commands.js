// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, password) => {
    cy.get('input[formcontrolname="userName"]').type(user)
    cy.get('input[formcontrolname="password"]').type(password)
    cy.contains('button', 'login').click()
})

Cypress.Commands.add('createAccount', (email, fullName, userName, password) => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fullName)
    cy.get('input[formcontrolname="userName"]').type(userName)
    cy.get('input[formcontrolname="password"]').type(password)
    cy.contains('button', 'Register').click()
})

Cypress.Commands.add('tryCreateAccount', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.contains('button', 'Register').click()
})