describe('Youtube Shorts', () => {
  const pageURL = Cypress.env('URL');
  const numTimes = 5;

  beforeEach(()=>{
    cy.visit(pageURL);
    cy.get('[aria-label="Shorts"]').click();
  });

  it('view n Shorts', () => {
    for (let i = 0; i < numTimes; i++) {
      cy.wait(4000);
      cy.get('[aria-label="Siguiente video"]').click();
    }
  });

  it('get audio for random', () => {
    cy.wait(5000);
    cy.get('[aria-label="Mirar más videos con este sonido"]').click( {force: true});
    cy.get('[id="contents"]').should('be.visible');
    cy.get('[id="contents"] > *:first-child').should('be.visible');
  })
});