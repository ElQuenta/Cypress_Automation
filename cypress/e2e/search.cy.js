describe('Search Pines', () => {
    const pageURL = Cypress.env('URL');
    const email = Cypress.env('Email');
    const password = Cypress.env('Password');
    const search = Cypress.env('Search')
  
    beforeEach(()=>{
      cy.visit(pageURL);
    });
  
    it('search', () => {
      cy.get('[data-test-id="simple-login-button"]').click();
      cy.get('[id="email"]').type(email);
      cy.get('[id="password"]').type(password);
      cy.get('[data-test-id="registerFormSubmitButton"]').click();
      cy.get('[data-test-id="search-box-input"]').type(search);
    })
  
  });