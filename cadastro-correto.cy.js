describe('Página de cadastro', () => {
  beforeEach(() =>{
      cy.visit('https://adopet-frontend-iota.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })   
      it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
          cy.cadastrar('André Bessas', 'bessasandre9@yahoa.com','Galaodamassa131')  
  })
})

