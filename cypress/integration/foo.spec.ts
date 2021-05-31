describe('Login, find Ship logout', () => {
  before(() => {
    cy.visit('https://webdave.de');
  });
  it('show Ships', () => {
    cy.contains('4711');
  });
});
