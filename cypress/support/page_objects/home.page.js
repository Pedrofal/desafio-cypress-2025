const BTN_AUTOMOBILE = '#nav_automobile'
class HomePage {
  accessCarRegistrationPage() {
    cy.visit('/');
    cy.log('Clicking on "Automobile" button to access car registration page');
    cy.get(BTN_AUTOMOBILE).click();
  }
}
export default HomePage;