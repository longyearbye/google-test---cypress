
/// <reference types="cypress" />

describe('interacting with google search', () => {
  beforeEach(()=>{
    cy.visit('https://www.google.com/')
    cy.get('.GZ7xNe').should('be.visible')
    cy.get('#L2AGLb').click();
  })

  it('input field search', ()=>{
    //cy.visit('https://www.google.com/')
    cy.get('.SDkEP').should('be.visible').click().type("sputnik 1").type('{enter}')
    cy.get('#rcnt').should('be.visible');

    it('should redirection us to the homepage', ()=>{
      cy.get('.jfN4p').should('be.visible').click(); 

    })

  })

  it('should redirection us to the random page', ()=>{
    cy.get('.FPdoLc > center > .RNmpXc').should('be.visible').click(); 
    cy.get('#content').should('be.visible');
  })


      
})

