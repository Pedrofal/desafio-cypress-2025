import { faker } from '@faker-js/faker';

class ProductDataPage {
  constructor() {
    this.inputStartDate = '#startdate';
    this.inputInsuranceSum = '#insurancesum';
    this.inputMeritRating = '#meritrating';
    this.inputDamageInsurance = '#damageinsurance';
    this.inputCourtesyCar = '#courtesycar';
    this.btnNext = '#nextselectpriceoption';
    this.EURO_PROTECTION = '#EuroProtection';
    this.LEGAL_DEFENSE_INSURANCE = '#LegalDefenseInsurance';


    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    const month = String(now.getMonth() + 2).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    this.startDate = `${month}/${day}/${year}`;

    this.insuranceSumOptions = ['3000000', '5000000', '7000000', '10000000', '15000000', '20000000', '25000000', '30000000', '35000000'];
    this.meritRatingOptions = ['Super Bonus', 'Bonus 1', 'Bonus 2', 'Bonus 3', 'Bonus 4', 'Bonus 5', 'Bonus 6', 'Bonus 7', 'Bonus 8', 'Bonus 9', 'Malus 10', 'Malus 11', 'Malus 12', 'Malus 13', 'Malus 14', 'Malus 15', 'Malus 16', 'Malus 17'];


    this.randomIndex = Cypress._.random(0, this.insuranceSumOptions.length - 1);
    this.randomInsuranceSum = this.insuranceSumOptions[this.randomIndex];
    this.randomMeritRating = this.meritRatingOptions[this.randomIndex];

    this.damageInsuranceOptions = ['No Coverage', 'Partial Coverage', 'Full Coverage'];
    this.randomDamageInsurance = this.damageInsuranceOptions[Cypress._.random(0, this.damageInsuranceOptions.length - 1)];

    this.courtesyCarOptions = ['No', 'Yes'];
    this.randomCourtesyCar = this.courtesyCarOptions[Cypress._.random(0, this.courtesyCarOptions.length - 1)];
  }

  fillValidProductData() {
    cy.get(this.inputStartDate)
      .type(this.startDate, { force: true });
    cy.get(this.inputInsuranceSum)
      .select(this.randomInsuranceSum, { force: true });
    cy.get(this.inputMeritRating)
      .select(this.randomMeritRating, { force: true });
    cy.get(this.inputDamageInsurance)
      .select(this.randomDamageInsurance, { force: true });
    if (Math.random() < 0.5) {
      cy.get(this.EURO_PROTECTION).check({ force: true });
    } else {
      cy.get(this.LEGAL_DEFENSE_INSURANCE).check({ force: true });
    }
    cy.get(this.inputCourtesyCar)
      .select(this.randomCourtesyCar, { force: true });
    cy.get(this.btnNext)
      .click({ force: true });
  }

  skipProductData() {
    cy.get(this.btnNext)
    .click({ force: true });
  }
  
}

export default ProductDataPage;
