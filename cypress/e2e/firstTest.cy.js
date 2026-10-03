/// <reference types="cypress" />

beforeEach('Open test application', () => {
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
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

    //how to combine several attributes
    cy.get('[fullwidth][placeholder="Email"]');
    cy.get('input[fullwidth][placeholder="Email"]');

    //find by data-cy attribute 
    cy.get('[data-cy="inputEmail1"]');


});

it('Cypress Locator Method', () => {
    //Theory
    //get() - to find elements on the page globaly
    //contains() - to find elements with specific text
    //find() -to find only child elements 

    //cy.contains('Sign in', { matchCase: false });
    cy.contains('Sign in');
    cy.contains('[status="warning"]', 'Sign in');
    cy.contains('nb-card', 'Horizontal form').find('button');
    cy.contains('nb-card', 'Horizontal form').contains('Sign in');
    cy.contains('nb-card', 'Horizontal form').get('button');
});

it('Child Elements', () => {
    cy.contains('nb-card', 'Using the Grid').find('.row').find('button');

    cy.get('nb-card').find('nb-radio-group').contains('Option 1');

    cy.get('nb-card nb-radio-group').contains('Option 1');

    cy.get('nb-card > nb-card-body [placeholder="Jane Doe"]');
});

it('Parent Elements', () => {

    cy.get('#inputEmail1').parents('form').find('button');

    cy.contains('Using the Grid').parents().find('button');

    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button');
});

it('Cypress chains', () => {

    cy.get('#inputEmail1')
        .parents('form').find('button').click();

    cy.get('#inputEmail1').parents('form').find('nb-radio').first().should('have.text', 'Option 1');
});

it.only('Reusing Locators', () => {

    //THIS WILL NOT WORK!!! DON"T DO LIKE THIS!!!
    //const inputEmail1 = cy.get('#inputEmail1')
    //inputEmail1.parents('form').find('button')
    //inputEmail1.parents('form').find('nb-radio')

    // 1. Cypress Alias
    cy.get('#inputEmail1').as('inputEmail1')
    cy.get('@inputEmail1').parents('form').find('button')
    cy.get('@inputEmail1').parents('form').find('nb-radio')

    // 2. Cypress then() method

    cy.get('#inputEmail1').then(inputEmail => {
        cy.wrap(inputEmail).parents('form').find('button')
        cy.wrap(inputEmail).parents('form').find('nb-radio')
        cy.wrap('Hello').should('equal', 'Hello')
        cy.wrap(inputEmail).as('inputEmail2')
    })

    cy.get('@inputEmail2').click()

})
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