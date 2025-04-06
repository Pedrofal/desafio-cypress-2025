import { faker } from '@faker-js/faker';

class InsurantDataPage {
  constructor() {
    this.inputFirstName = '#firstname';
    this.inputLastName = '#lastname';
    this.inputBirthDate = '#birthdate';
    this.genderMale = '#gendermale';
    this.genderFemale = '#genderfemale';
    this.inputAddress = '#streetaddress';
    this.inputCountry = '#country';
    this.inputZipCode = '#zipcode';
    this.inputCity = '#city';
    this.inputOccupation = '#occupation';
    this.btnWebsite = '#website';
    this.btnNextProductData = '#nextenterproductdata';

    this.hobbiesCheckboxesLabels = [
      'input[value="Speeding"]',
      'input[value="BungeeJumping"]',
      'input[value="CliffDiving"]',
      'input[value="Skydiving"]',
      'input[value="Other"]'
    ];
    this.occupationsOptions = [
      'Employee',
      'Public Official',
      'Farmer',
      'Unemployed',
      'Selfemployed'
    ];
  }

  fillValidInsuranceData() {
    const randomGender = faker.person.sexType();
    const occupation = this.occupationsOptions[
      Cypress._.random(0, this.occupationsOptions.length - 1)
    ];
    const randomIndex = Cypress._.random(0, this.hobbiesCheckboxesLabels.length - 1);
    const randomHobby = this.hobbiesCheckboxesLabels[randomIndex];

    cy.get(this.inputFirstName)
      .type(Cypress.env('firstName'), { force: true, log: false });
    cy.get(this.inputLastName)
      .type(Cypress.env('lastName'), { force: true, log: false });
    cy.get(this.inputBirthDate)
      .type(Cypress.env('birthDay'), { force: true, log: false });

    if (randomGender === 'male' || randomGender === 'transmale') {
      cy.get(this.genderMale).check({ force: true });
    } else {
      cy.get(this.genderFemale).check({ force: true });
    }

    cy.get(this.inputAddress)
      .type(Cypress.env('adress'), { force: true, log: false });
    cy.get(this.inputCountry)
      .select(Cypress.env('country'), { force: true, log: false });
    cy.get(this.inputZipCode)
      .type(Cypress.env('zipCode'), { force: true, log: false });
    cy.get(this.inputCity)
      .type(Cypress.env('city'), { force: true, log: false });
    cy.get(this.inputOccupation)
      .select(occupation, { force: true });
    cy.get(randomHobby)
      .click({ force: true });
    cy.get(this.btnWebsite)
      .type(faker.internet.url(), { force: true });
    cy.get(this.btnNextProductData)
      .click({ force: true });
  }

  skipInsurantData() {
    cy.get(this.btnNextProductData)
    .click({ force: true });
  }
  
}

export default InsurantDataPage;
