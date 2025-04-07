class PriceOptionPage {
  constructor() {
    this.priceOptionIds = ['selectsilver', 'selectgold', 'selectplatinum', 'selectultimate'];
    this.btnNextQuote = '#nextsendquote';
    this.errorMessage = '#xLoaderPrice';
  }

  fillValidInsurancePriceOption() {
    cy.log('Selecting a valid insurance price option');

    const randomIndex = Cypress._.random(0, this.priceOptionIds.length - 1);
    const randomPriceOptionId = this.priceOptionIds[randomIndex];

    cy.log(`Checking price option: ${randomPriceOptionId}`);
    cy.get(`#${randomPriceOptionId}`)
      .check({ force: true });

    cy.log('Clicking "Next" to go to quote step');
    cy.get(this.btnNextQuote)
      .should('be.visible')
      .click();
  }

  validadete_Error_Message() {
    cy.log('Validating error message for missing previous steps');
    cy.get(this.errorMessage)
      .should('contain', 'Please, complete the first three steps to see the price table.');
  }
}

export default PriceOptionPage;
