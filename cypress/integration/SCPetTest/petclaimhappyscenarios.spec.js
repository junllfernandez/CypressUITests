/// <reference types="cypress" />

import mainclaimpage from '../SCPetClaimPages/mainclaimpage'
import yourdetailspage from '../SCPetClaimPages/yourdetailspage'
import invoicedetailspage from '../SCPetClaimPages/invoicedetailspage'

var data = require('../../fixtures/policydetails')

describe('Login page', () =>
{
  beforeEach(() => 
  {
    cy.visit('https://www.southerncrosspet.co.nz/make-a-claim/')
  })

  it('Positive scenario - Make a claim', () => 
  {
    mainclaimpage.assertPageHeader()
    mainclaimpage.clickClaimBtn()

    cy.get('.claim-section > h1').should('have.text', 'Confirm your details').and('not.be.disabled')
    yourdetailspage.enterFirstName(data.firstname)
    yourdetailspage.enterLastName(data.lastname)
    yourdetailspage.enterPetName(data.petname)
    yourdetailspage.enterPolicy(data.policy)
    yourdetailspage.enterEmail(data.email)
    yourdetailspage.enterContact(data.contact)
    yourdetailspage.clickNextBtn()

    invoicedetailspage.enterVetProvider(data.provider1)
    invoicedetailspage.enterInvoiceAmt(data.amount1)
    invoicedetailspage.clickNextBtn()
  })


})