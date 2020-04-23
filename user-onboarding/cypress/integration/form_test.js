import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 5)
const email = `${username}@acme.com`
const password = uuid().slice(0, 8)
const terms = 'termsOfService'

describe('Onboarding User', () => {
  it('can navigate to the site', () => {
    cy.visit('')
    cy.url().should('include', 'localhost')
  })

  it('has George pre loaded', () => {
    cy.contains('George')
      .then(element => {
        debugger
      })
  })

  it('can submit a user', () => {
    cy.get("[name='username']")
      .type(username)
      .should('have.value', username)
    
    cy.get("input[name='email']")
      .type(email)
      .should('have.value', email)
    
    cy.get("input[name='password']")
      .type(password)
      .should('have.value', password)
    
    cy.get(`input[name='${terms}']`)
      .check()
      .should('have.checked')
    
    cy.contains('submit')
      .click()
  })

  it('validation if input is empty', () => {
    cy.get("[name='username']")
      .should('have.value', '')
    
    cy.get("input[name='email']")
      .should('have.value', '')
    
    cy.get("input[name='password']")
      .should('have.value', '')
    
    cy.get('input[type="checkbox"]')
      .parent()
      .find('input')
      .should('not.checked')
    
  })

})