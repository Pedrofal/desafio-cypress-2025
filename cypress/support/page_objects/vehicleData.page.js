import { faker } from '@faker-js/faker';

class VehicleDataPage {
  constructor() {

    this.inputMake = '#make';
    this.inputEnginePerformance = '#engineperformance';
    this.inputDateOfManufacture = '#dateofmanufacture';
    this.inputNumberOfSeats = '#numberofseats';
    this.inputFuelType = '#fuel';
    this.inputListPrice = '#listprice';
    this.inputLicensePlateNumber = '#licenseplatenumber';
    this.inputAnnualMileage = '#annualmileage';
    this.btnNext = '#nextenterinsurantdata';

    this.makes = ['Audi', 'BMW', 'Ford', 'Honda', 'Mazda', 'Mercedes Benz', 'Nissan', 'Opel', 'Porsche', 'Renault', 'Skoda', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo'];
    this.fuels = ['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other'];
  }

  fillValidVehicleData() {
    const randomIndexMake = Cypress._.random(0, this.makes.length - 1);
    const make = this.makes[randomIndexMake];
    const enginePerformance = faker.number.int({ min: 50, max: 500 });
    const pastDate = faker.date.past(10);
    const month = String(pastDate.getMonth() + 1).padStart(2, '0');
    const day = String(pastDate.getDate()).padStart(2, '0');
    const year = pastDate.getFullYear();
    const dateOfManufacture = `${month}/${day}/${year}`;
    const numberOfSeats = faker.number.int({ min: 1, max: 7 });
    const randomIndexFuel = Cypress._.random(0, this.fuels.length - 1);
    const fuelType = this.fuels[randomIndexFuel];
    const listPrice = faker.number.float({ min: 1000, max: 100000 });
    const licensePlateNumber = faker.vehicle.vrm();
    const annualMileage = faker.number.int({ min: 1000, max: 100000 });

    cy.get(this.inputMake)
      .select(make, { force: true });
    cy.get(this.inputEnginePerformance)
      .type(enginePerformance.toString(), { force: true });
    cy.get(this.inputDateOfManufacture)
      .type(dateOfManufacture, { force: true });
    cy.get(this.inputNumberOfSeats)
      .select(numberOfSeats.toString(), { force: true });
    cy.get(this.inputFuelType)
      .select(fuelType, { force: true });
    cy.get(this.inputListPrice)
      .type(listPrice.toString(), { force: true });
    cy.get(this.inputLicensePlateNumber)
      .type(licensePlateNumber, { force: true });
    cy.get(this.inputAnnualMileage)
      .type(annualMileage.toString(), { force: true });
    cy.get(this.btnNext)
      .click({ force: true });
  }

  skipVehicleData() {
    cy.get(this.btnNext)
      .click({ force: true });
  }
  invalidData() {

    cy.get(this.inputEnginePerformance)
      .type('Invalid Engine Performance', { force: true });
    cy.get(this.inputDateOfManufacture)
      .type('111111111111', { force: true });
    cy.get(this.inputListPrice)
      .type('Invalid List Price', { force: true });
    cy.get(this.inputLicensePlateNumber)
      .type('Invalid License Plate Number', { force: true });
    cy.get(this.inputAnnualMileage)
      .type('Invalid Annual Mileage', { force: true });
  }
  validateErrorMessage() {
cy.get(this.inputEnginePerformance)
  .type('Invalid Engine Performance', { force: true })
  .should('have.css', 'border-color', 'rgb(204, 28, 13)');
cy.get(`${this.inputEnginePerformance} + span.error`)
  .should('be.visible')
  .and('contain.text', 'Must be a number between 1 and 2000');
cy.get(this.inputDateOfManufacture).click();
cy.get(this.inputDateOfManufacture)
  .type('111111111111', { force: true })
  .should('have.css', 'border-color', 'rgb(204, 28, 13)');

cy.get(this.inputDateOfManufacture)
  .parents('.field') 
  .find('span.error')
  .should('be.visible')
  .and('contain.text', 'Must be a valid date');
cy.get(this.inputListPrice).click();
cy.get(this.inputNumberOfSeats)
.select('1', { force: true });
cy.get(this.inputFuelType)
.select('Diesel', { force: true });
cy.get(this.inputListPrice)
  .type('Invalid List Price', { force: true })
  .should('have.css', 'border-color', 'rgb(204, 28, 13)');
cy.get(`${this.inputListPrice} + span.error`)
  .should('be.visible')
  .and('contain.text', 'Must be a number between 500 and 100000');
cy.get(this.inputLicensePlateNumber).click();
cy.get(this.inputLicensePlateNumber)
  .type('Invalid License Plate Number', { force: true })
  .should('have.css', 'border-color', 'rgb(204, 28, 13)');
cy.get(`${this.inputLicensePlateNumber} + span.error`)
  .should('be.visible')
  .and('contain.text', 'Must be under 10 characters');
cy.get(this.inputAnnualMileage)
  .type('Invalid Annual Mileage', { force: true })
  .should('have.css', 'border-color', 'rgb(204, 28, 13)');
cy.get(`${this.inputAnnualMileage} + span.error`)
  .should('be.visible')
  .and('contain.text', 'Must be a number between 100 and 100000');
  }
  
}

export default VehicleDataPage;
