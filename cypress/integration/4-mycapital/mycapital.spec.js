describe('mycapital',()=> {
beforeEach( () => {
    //cy.visit('https://userteste_tema:Ddjeijie%23*3j2%40Uu2@tstb2c.mycapital.com.br');

    cy.visit('https://tstb2c.mycapital.com.br/front/', {
  auth: {
    username: 'userteste_tema',
    password: 'Ddjeijie%23*3j2%40Uu2'
  },
})
})

it('logar mycapital',()=>{
    cy.viewport(1650, 1200);
    cy.get('.margin-left-auto > .b2c-button').click();
    cy.get('#login').type('phaelju@gmail.com');
    cy.get('#senha').type('tema123');
    cy.get('#ok').click();
    cy.get('.p-dialog-footer > .btn-primary').click();
    cy.get('h3').contains('Comuns');
})
 
}) 
