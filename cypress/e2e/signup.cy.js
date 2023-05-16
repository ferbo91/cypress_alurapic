describe('Sign Up', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify invalid email message', () => {
        cy.tryCreateAccount()
        cy.contains('ap-vmessage', 'Email is required').should('be.visible')
    })

    it('Verify invalid fullname message', () => {
        cy.tryCreateAccount()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    })

    it('Verify invalid username message', () => {
        cy.tryCreateAccount()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    })

    it('Verify invalid password message', () => {
        cy.tryCreateAccount()
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    const users = require('../fixtures/user.json')
    users.forEach(user => {
        it(`Register new user ${user.userName}`, () => {
            cy.createAccount(user.email, user.fullName, user.userName, user.password)
            cy.url().should('include', 'https://alura-fotos.herokuapp.com/#/home')
        })
    });

    
})