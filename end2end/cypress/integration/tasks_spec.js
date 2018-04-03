describe('Tasks', function() {
  it('creates a new task', function() {
    cy.visit('http://app:8080');

    cy.get('input').type('Hello, World');
    cy.get('button').click();

    cy.contains('Hello, World').should('have.length', 1);
  })
})
