describe('go to post', () => {
    const pageURL = Cypress.env('URL');
    const email = Cypress.env('Email');
    const password = Cypress.env('Password');
  
    beforeEach(()=>{
      cy.visit(pageURL);
    });
  
    it('create Pin', () => {
      cy.get('[data-test-id="simple-login-button"]').click();
      cy.get('[id="email"]').type(email);
      cy.get('[id="password"]').type(password);
      cy.get('[data-test-id="registerFormSubmitButton"]').click();
      cy.get('[data-test-id="header-profile"]').click();
      cy.get('[data-test-id="boardActionsButton"]').click();
      cy.get('[data-test-id="Create Story Pin"]').click();
      cy.get('[data-test-id="header-content-container"]').should('contain.text','Crear Pin')
    })
  
  });