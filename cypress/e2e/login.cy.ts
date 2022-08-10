/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Page: Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('check validations', () => {
    cy.get('[data-testid="brand"]').should('exist');

    cy.get('[data-testid="e-mail"]').focus().blur();
    cy.get('[data-testid="error-email"]').should(
      'contain',
      'Digite seu e-mail',
    );

    cy.get('[data-testid="e-mail"]').type('invalid-email');
    cy.get('[data-testid="error-email"]').should('contain', 'E-mail inválido');

    cy.get('[data-testid="e-mail"]').type(faker.internet.email());

    cy.get('#password').focus().blur();
    cy.get('[data-testid="error-password"]').should(
      'contain',
      'Digite sua senha',
    );
  });

  it('try login with invalid user', () => {
    cy.get('[data-testid="e-mail"]').type(faker.internet.email());
    cy.get('#password').type(faker.internet.password(20));

    cy.get('[data-testid="submit-button"]').click();
    cy.get('[data-testid="error-server"]').should(
      'contain',
      'E-mail ou senha incorretos.',
    );
  });

  it('try login with valid user', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    cy.get('[data-testid="e-mail"]').type(username, { log: false });
    cy.get('#password').type(password, { log: false });

    cy.get('[data-testid="submit-button"]').click();
    cy.get('[data-testid="logout"]').should('exist');
  });
});
