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
    cy.log('Filling insurant data form with valid information');

    const randomGender = faker.person.sexType();
    const occupation = this.occupationsOptions[
      Cypress._.random(0, this.occupationsOptions.length - 1)
    ];
    const randomIndex = Cypress._.random(0, this.hobbiesCheckboxesLabels.length - 1);
    const randomHobby = this.hobbiesCheckboxesLabels[randomIndex];

    cy.log('Typing first name');
    cy.get(this.inputFirstName)
      .type(Cypress.env('firstName'), { force: true, log: false });

    cy.log('Typing last name');
    cy.get(this.inputLastName)
      .type(Cypress.env('lastName'), { force: true, log: false });

    cy.log('Typing birth date');
    cy.get(this.inputBirthDate)
      .type(Cypress.env('birthDay'), { force: true, log: false });

    cy.log(`Selecting gender: ${randomGender}`);
    if (randomGender === 'male' || randomGender === 'transmale') {
      cy.get(this.genderMale).check({ force: true });
    } else {
      cy.get(this.genderFemale).check({ force: true });
    }

    cy.log('Typing address');
    cy.get(this.inputAddress)
      .type(Cypress.env('adress'), { force: true, log: false });

    cy.log('Selecting country');
    cy.get(this.inputCountry)
      .select(Cypress.env('country'), { force: true, log: false });

    cy.log('Typing zip code');
    cy.get(this.inputZipCode)
      .type(Cypress.env('zipCode'), { force: true, log: false });

    cy.log('Typing city');
    cy.get(this.inputCity)
      .type(Cypress.env('city'), { force: true, log: false });

    cy.log(`Selecting occupation: ${occupation}`);
    cy.get(this.inputOccupation)
      .select(occupation, { force: true });

    cy.log(`Selecting random hobby`);
    cy.get(randomHobby)
      .click({ force: true });

    cy.log('Typing website');
    cy.get(this.btnWebsite)
      .type(faker.internet.url(), { force: true });

    cy.log('Clicking Next to go to product data');
    cy.get(this.btnNextProductData)
      .click({ force: true });
  }

  skipInsurantData() {
    cy.log('Skipping insurant data step');
    cy.get(this.btnNextProductData)
      .click({ force: true });
  }
}

export default InsurantDataPage;
