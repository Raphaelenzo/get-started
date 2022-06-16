describe('Buscar fotos e dados', ()=> {

    it('buscar fotos do flavio', ()=> {

        const tempEsperado = Math.random() * 2000;
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[1]).to.have.property('description')
           expect(res.body[1].description).to.be.equal('Visão pela janela') 
           expect(res.duration).to.be.lte(tempEsperado)
        }

        )
    })


    it('fazer login do flavio', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body).to.have.property('id')
           expect(res.body.id).to.be.equal(1) 
           expect(res.body).to.have.property('email')
           expect(res.body.email).to.be.equal("flavio@alurapic.com.br") 
        }

        )
    })

})