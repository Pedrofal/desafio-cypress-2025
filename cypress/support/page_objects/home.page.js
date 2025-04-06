const BTN_AUTOMOBILE = '#nav_automobile'
class HomePage {
  accessCarRegistrationPage() {
    cy.visit('/');
    cy.get(BTN_AUTOMOBILE).click();
  }
}
export default HomePage;