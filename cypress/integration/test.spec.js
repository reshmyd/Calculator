
describe('basic operations', () => {
  it('7 + 2 equals 9', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    cy.get('[data-cy=number-7]').click()
    cy.get('[data-cy=operator-add]').click()
    cy.get('[data-cy=number-2]').click()
    cy.get('[data-cy=equals]').click()

    cy.get('[data-cy=currentNo]').should('have.text', '9')
})
})

describe('basic operations', () => {
  it('10 * 10 equals 100', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    cy.get('[data-cy=number-1]').click()
    cy.get('[data-cy=number-0]').click()
    cy.get('[data-cy=operator-multiply]').click()
    cy.get('[data-cy=number-1]').click()
    cy.get('[data-cy=number-0]').click()
    cy.get('[data-cy=equals]').click()

    cy.get('[data-cy=currentNo]').should('have.text', '100')
})
})

describe('basic operations', () => {
  it('2 + 2 + 14 / 3 equals 6', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    cy.get('[data-cy=number-2]').click()
    cy.get('[data-cy=operator-add]').click()
    cy.get('[data-cy=number-2]').click()
    cy.get('[data-cy=operator-add]').click()
    cy.get('[data-cy=number-1]').click()
    cy.get('[data-cy=number-4]').click()
    cy.get('[data-cy=operator-divide]').click()
    cy.get('[data-cy=number-3]').click()
    cy.get('[data-cy=equals]').click()
    cy.get('[data-cy=currentNo]').should('have.text', '6')
})
})