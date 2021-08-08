class mainclaimpage
{
    elements =
    {
        mainPageHeader: () => cy.get('.claim-section > h1'),
        claimBtn: () => cy.get('.make-claim'),
        freeCoverBtn: () => cy.get('.claim-section > .outline'),
        claimPdfLink: () => cy.get('strong > a')
               
    }

    assertPageHeader()
    {
        this.elements.mainPageHeader().should('contain.text', 'Make a claim in 3 easy')
    }

    clickClaimBtn()
    {
        this.elements.claimBtn().click();
    }

    assertFCPdf()
    {
        this.elements.freeCoverBtn().should('have.attr', 'href', 'https://www.southerncross.co.nz/society/-/media/Southern-Cross-Pet-Insurance/PDF/Forms/Free-Cover-Claims-Form.pdf')
    }

    assertCFPdf()
    {
        this.elements.claimPdfLink().should('have.attr', 'href', 'https://www.southerncross.co.nz/society/-/media/Southern-Cross-Pet-Insurance/PDF/Forms/Pet-insurance-claim-form.pdf')
    }
}

module.exports = new mainclaimpage();