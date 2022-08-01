/// <reference types="cypress" />

// https://dev-botaprarodar.netlify.app

describe('Login', () => {
  it('without auth', () => {
    cy.visit('/login');

    // check elements in dom
    cy.get('[data-testid="e-mail"]').type('user@mail.com');
    cy.get('#password').type('any_password');

    cy.contains('Entrar').click();

    cy.contains('Comunidades do Bota pra Rodar');
  });
});
