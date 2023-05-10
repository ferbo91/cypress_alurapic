describe('Sign Up', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify required username message', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    })

    it('Verify required password message', () => {
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('Verify invalid username message', () => {
        cy.get('input[formcontrolname="userName"]').type('fertest')
        cy.get('input[formcontrolname="password"]').type('senha123')
        cy.contains('button', 'login').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    it('Verify invalid username message', () => {
        cy.get('input[formcontrolname="userName"]').type('ferteste')
        cy.get('input[formcontrolname="password"]').type('senha12')
        cy.contains('button', 'login').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    it('Login with success', () => {
        cy.get('input[formcontrolname="userName"]').type('ferbo91')
        cy.get('input[formcontrolname="password"]').type('senha123')
        cy.contains('button', 'login').click()
        cy.contains('a','ferbo91').should('be.visible')
    })
    
})