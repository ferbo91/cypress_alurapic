describe('Sign Up', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify invalid email message', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required').should('be.visible')
    })

    it('Verify invalid fullname message', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    })

    it('Verify invalid username message', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    })

    it('Verify invalid password message', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    const users = require('../fixtures/user.json')
    users.forEach(user => {
        it(`Register new user ${user.userName}`, () => {
            cy.contains('a', 'Register now').click()
            cy.contains('button', 'Register').click()
            cy.get('input[formcontrolname="email"]').type(user.email)
            cy.get('input[formcontrolname="fullName"]').type(user.fullName)
            cy.get('input[formcontrolname="userName"]').type(user.userName)
            cy.get('input[formcontrolname="password"]').type(user.password)
            cy.contains('button', 'Register').click()
            cy.url().should('include', 'https://alura-fotos.herokuapp.com/#/home')
        })
    });

    
})