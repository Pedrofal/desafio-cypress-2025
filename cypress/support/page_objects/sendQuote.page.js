import { faker } from '@faker-js/faker';

class SendQuotePage {
  constructor() {
    this.inputEmail = '#email';
    this.inputPhone = '#phone';
    this.inputUsername = '#username';
    this.inputPassword = '#password';
    this.inputConfirmPassword = '#confirmpassword';
    this.inputComments = '#Comments';
    this.confirmationAlert = '.sweet-alert';
    this.btnSend = '#sendemail';
    this.btnConfirm = '#confirm';
  }

  generateUniqueEmail() {
    const baseEmail = faker.internet.email();
    const randomNumber = faker.string.numeric(4);
    const [name, domain] = baseEmail.split('@');
    return `${name}+${randomNumber}@${domain}`;
  }

  fillValidSendQuote() {
    cy.get(this.inputEmail)
      .type(this.generateUniqueEmail(), { force: true });
    cy.get(this.inputPhone)
      .type(Cypress.env('phone'), { force: true, log: false });
    const randomNumberUsername = faker.string.numeric(4);
    cy.get(this.inputUsername)
      .type(`${Cypress.env('username')}${randomNumberUsername}`, { force: true, log: false });
    cy.get(this.inputPassword)
      .type(Cypress.env('password'), { force: true, log: false });
    cy.wait(1000);
    cy.get(this.inputConfirmPassword)
      .type(Cypress.env('password'), { force: true, log: false });
    cy.get(this.inputComments)
      .type('Comments', { force: true });
    cy.get(this.btnSend)
      .click({ force: true });

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('e is not defined')) {
        console.log('ignore: e is not defined');
        return false;
      }
    });
  }

  validateCarRegistration() {
    cy.wait(10000);
    cy.get(this.confirmationAlert)
      .should('be.visible')
      .and('contain', 'Sending e-mail success!');
  }
}

export default SendQuotePage;
