class invoicedetailspage
{
    elements =
    {
        treatmentDate: () => cy.get('.input-calendar'),
        vetProvider: () => cy.get(':nth-child(3) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        invoiceAmt: () => cy.get('.currency'),
        backButton: () => cy.get('.back'),
        nextButton: () => cy.get('.next-back > .next')      
    }

    enterVetProvider(provider)
    {
        this.elements.vetProvider().type(provider)
    }

    enterInvoiceAmt(amount)
    {
        this.elements.invoiceAmt().type(amount)
    }

    clickBackBtn()
    {
        this.elements.backButton().click()
    }

    clickNextBtn()
    {
        this.elements.nextButton().click()
    }
}

module.exports = new invoicedetailspage()