/// <reference types="cypress" />

beforeEach('Open test application',() => {
    //only / because it refers to the base URL defined in cypress.config.js
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
});

it('Hello world 1', () => {

    //by tag 
    cy.get('input');

    //by ID
    cy.get('#inputEmail');

    //by class
    cy.get('.input-full-width');

    //by attribute
    cy.get('[fullwidth]');

    //by attribute with specific value
    cy.get('[placeholder="Email"]');

    //by entire class value 
    cy.get('class="input-full-width size-medium status-basic shape-rectangle nb-transition"');

    //how to combine several attributes
    cy.get('[fullwidth][placeholder="Email"]');
    cy.get('input[fullwidth][placeholder="Email"]');

    //find by data-cy attribute 
    cy.get('[data-cy="inputEmail1"]');


});






/* 
describe('My First Test Suite', () => {

    it('Hello world 3', () => {

    });

    it('Hello world 4', () => {

    });

    describe('Nested Test Suite', () => {
        it('Hello world 5', () => {

        });
    });
});

describe('Another Test Suite', () => {
    it('Hello world 6', () => {
    });
}); */