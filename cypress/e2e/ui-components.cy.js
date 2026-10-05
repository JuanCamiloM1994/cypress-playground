/// <reference types="cypress" />

beforeEach('Open application', () => {
    cy.visit('/')
})

it.only('input fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    const name = 'Artem'
    cy.get('#inputEmail1').type('hello@test.com', { delay: 200 }).clear().type('hello').clear()
    cy.contains('nb-card', 'Using the Grid').contains('Email').type(`${name}@test.com`)

    cy.get('#inputEmail1').should('not.have.value', '').clear().type('test@bondaracademy.com')
        .press(Cypress.Keyboard.Keys.TAB)
})

it.only('radio buttons', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(allRadioButtons => {
        cy.wrap(allRadioButtons).eq(0).check({ force: true }).should('be.checked')
        cy.wrap(allRadioButtons).eq(1).check({ force: true })
        cy.wrap(allRadioButtons).eq(0).should('not.be.checked')
        cy.wrap(allRadioButtons).eq(2).should('be.disabled')
    })

    cy.contains('nb-card', 'Using the Grid').contains('label', 'Option 1').find('input').check({ force: true })

})