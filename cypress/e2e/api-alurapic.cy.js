describe('API Alura fotos', () => {

    it('Login', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(7)
        })
    })

    it('Search photos', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/ferbo91/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('teste')
        })
    })

})

