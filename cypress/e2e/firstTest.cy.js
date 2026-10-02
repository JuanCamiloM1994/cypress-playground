/// <reference types="cypress" />

beforeEach('Open test application',() => {
    //only / because it refers to the base URL defined in cypress.config.js
    cy.visit('/');
});

it('Hello world 1', () => {

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