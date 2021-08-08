class yourdetailspage
{
    elements =
    {
        fnameField: () => cy.get(':nth-child(2) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        lnameField: () => cy.get(':nth-child(3) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        petnameField: () => cy.get(':nth-child(4) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        policyField: () => cy.get(':nth-child(5) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        emailField: () => cy.get(':nth-child(6) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        contactField: () => cy.get(':nth-child(7) > .input > app-text-input.ng-untouched > .input-container > .ng-untouched'),
        routineTreatment: () => cy.get(':nth-child(9) > .input > .ng-untouched > .check-box > .box'),
        accidentOrIllness: () => cy.get(':nth-child(10) > .input > .ng-untouched > .check-box > .box'),
        backButton: () => cy.get('.back'),
        nextButton: () => cy.get('.next-back > .next')      
    }

    enterFirstName(firstname)
    {
        this.elements.fnameField().type(firstname)
    }

    enterLastName(lastname)
    {
        this.elements.lnameField().type(lastname)
    }

    enterPetName(petname)
    {
        this.elements.petnameField().type(petname)
    }

    enterPolicy(policy)
    {
        this.elements.policyField().type(policy)
    }

    enterEmail(email)
    {
        this.elements.emailField().type(email)
    }

    enterContact(contact)
    {
        this.elements.contactField().type(contact)
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

module.exports = new yourdetailspage()