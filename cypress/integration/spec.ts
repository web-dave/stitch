describe('Login, find Ship logout', () => {
  before(() => {
    cy.visit('/');
    cy.get('.btn').as('LogInOut');
    cy.get('@LogInOut').click();
    cy.get('#username').type('cul53148@cuoly.com');
    cy.get('#password').type('sJct3RSCTgKmhtM');
    cy.get('button').then((btns) => {
      console.log(btns);
      btns[0].click();
    });
  });

  it('show Ships', () => {
    cy.get('a[href="/ships"]').click();
    cy.contains('MILLENNIUM FALCON');
    cy.get('stitch-paginator a').contains('1').should('have.class', 'active');
    cy.get('a[href="/home"]').click();
  });

  after(() => {
    cy.get('@LogInOut').click();
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});
