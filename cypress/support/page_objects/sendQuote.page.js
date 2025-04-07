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
    cy.log('Preenchendo os dados da etapa "Send Quote"');

    const email = this.generateUniqueEmail();
    cy.log(`Inserindo email gerado: ${email}`);
    cy.get(this.inputEmail)
      .type(email, { force: true });

    cy.log('Inserindo telefone (log oculto)');
    cy.get(this.inputPhone)
      .type(Cypress.env('phone'), { force: true, log: false });

    const randomNumberUsername = faker.string.numeric(4);
    const username = `${Cypress.env('username')}${randomNumberUsername}`;
    cy.log(`Inserindo username: ${username} (log oculto)`);
    cy.get(this.inputUsername)
      .type(username, { force: true, log: false });

    cy.log('Inserindo senha e confirmação de senha (log oculto)');
    cy.get(this.inputPassword)
      .type(Cypress.env('password'), { force: true, log: false });
    cy.wait(1000);
    cy.get(this.inputConfirmPassword)
      .type(Cypress.env('password'), { force: true, log: false });

    cy.log('Inserindo comentário');
    cy.get(this.inputComments)
      .type('Comments', { force: true });

    cy.log('Clicando no botão "Send"');
    cy.get(this.btnSend)
      .click({ force: true });

    // Ignora erro conhecido no console
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('e is not defined')) {
        console.log('ignore: e is not defined');
        return false;
      }
    });
  }

  validateCarRegistration() {
    cy.log('Validando alerta de sucesso do envio');
    cy.wait(10000);
    cy.get(this.confirmationAlert)
      .should('be.visible')
      .and('contain', 'Sending e-mail success!');
  }
}

export default SendQuotePage;
