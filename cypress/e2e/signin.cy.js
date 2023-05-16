describe('Sign In', () => {

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
        cy.login('fertest', 'senha123')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    it('Verify invalid username message', () => {
        cy.login('ferteste', 'senha12')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    it('Login with success', () => {
        cy.login('ferbo91', 'senha123')
        cy.contains('a','ferbo91').should('be.visible')
    })
    
})