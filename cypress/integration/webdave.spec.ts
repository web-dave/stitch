describe('webdave.de start Page', () => {
  before(() => {
    cy.visit('https://webdave.de');
  });
  describe('Opening the page', () => {
    it('I see "@webdave_de" in the title', () => {
      cy.contains('@webdave_de');
    });
    it('I see "Berlin, Munich, Hamburg and Essen" in the title', () => {
      cy.contains('Berlin, Munich, Hamburg and Essen');
    });
  });
});
