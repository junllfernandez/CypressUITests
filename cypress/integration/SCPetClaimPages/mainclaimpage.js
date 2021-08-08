class mainclaimpage
{
    elements =
    {
        mainPageHeader: () => cy.get('.claim-section > h1'),
        claimBtn: () => cy.get('.make-claim'),
        freeCoverBtn: () => cy.get('.download').should('have.text', 'Free cover').and('not.be.disabled'),
        claimPdfLink: () => cy.get('strong > a')
               
    }

    assertPageHeader()
    {
        this.elements.mainPageHeader().should('have.text', 'Make a claim in 3 easy steps')
    }

    clickClaimBtn()
    {
        this.elements.claimBtn().click();
    }
}

module.exports = new mainclaimpage();