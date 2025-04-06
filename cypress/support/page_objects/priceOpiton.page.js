class PriceOptionPage {
  constructor() {
    this.priceOptionIds = ['selectsilver', 'selectgold', 'selectplatinum', 'selectultimate'];
    this.btnNextQuote = '#nextsendquote';
    this.errorMessage = '#xLoaderPrice'
  }

  fillValidInsurancePriceOption() {
    const randomIndex = Cypress._.random(0, this.priceOptionIds.length - 1);
    const randomPriceOptionId = this.priceOptionIds[randomIndex];

    cy.get(`#${randomPriceOptionId}`)
      .check({ force: true });
    cy.get(this.btnNextQuote)
      .should('be.visible')
      .click();
  }
  validadete_Error_Message() {
    cy.get(this.errorMessage).should('contain' , 'Please, complete the first three steps to see the price table.');
  }
  
}

export default PriceOptionPage;
