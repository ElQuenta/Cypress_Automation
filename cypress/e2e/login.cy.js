describe('LOGIN', () => {
  const pageURL = Cypress.env('URL');
  const email = Cypress.env('Email');
  const password = Cypress.env('Password');

  beforeEach(()=>{
    cy.visit(pageURL);
  });

  it('Login With credentials', () => {
    cy.get('[data-test-id="simple-login-button"]').click();
    cy.get('[id="email"]').type(email);
    cy.get('[id="password"]').type(password);
    cy.get('[data-test-id="registerFormSubmitButton"]').click();
    cy.get('[data-test-id="search-box-input"]').should('contain.value','');
  })

  it('Login Without credentials', () => {
    cy.get('[data-test-id="simple-login-button"]').click();
    cy.get('[id="email"]').should('contain.value','');
    cy.get('[id="password"]').should('contain.value','');
    cy.get('[data-test-id="registerFormSubmitButton"]').click();
    cy.get('[data-test-id="emailInputField"]').should('contain.text',"EmailYou missed a spot! Don't forget to add your email.");
  })

});