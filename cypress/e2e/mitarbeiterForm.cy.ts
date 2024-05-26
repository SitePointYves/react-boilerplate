describe('Mitarbeiter Upsert Form', () => {
  it('submit form should work and navigate to /mitarbeiter', () => {
    cy.visit('/mitarbeiter/edit');

    cy.get('[data-testid="mitarbeiterform_name"]').type('Abc Def');
    cy.get('[data-testid="mitarbeiterform_email"]').type('abc.def@gmail.com{enter}');

    cy.url().should('eq', Cypress.config().baseUrl + '/mitarbeiter');
  });

  it('should show error message when email is invalid', () => {
    cy.visit('/mitarbeiter/edit');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid="mitarbeiterform_name"]').type('Abc Def');
    cy.get('[data-testid="mitarbeiterform_email"]').type('abc.defgmail.com{enter}');
    cy.get('[data-testid="mitarbeiterform_email_error"]').should('be.visible');
    cy.get('[data-testid="mitarbeiterform_email_error"]').contains('invalid email address');
    /* ==== End Cypress Studio ==== */
  });

  it('should show error message when name is not entered', () => {
    cy.visit('/mitarbeiter/edit');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid="mitarbeiterform_email"]').type('abc.def@gmail.com{enter}');
    cy.get('[data-testid="mitarbeiterform_name_error"]').should('be.visible');
    cy.get('[data-testid="mitarbeiterform_name_error"]').contains('This field is required');
    /* ==== End Cypress Studio ==== */
  });
});
