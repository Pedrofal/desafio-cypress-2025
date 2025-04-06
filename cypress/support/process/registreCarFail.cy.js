import { Given, When, And, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../page_objects/home.page';
import InsurantDataPage from '../page_objects/insurantData.page';
import VehicleDataPage from '../page_objects/vehicleData.page';
import ProductDataPage from '../page_objects/productData.page';
import PriceOptionPage from '../page_objects/priceOpiton.page';
import SendQuotePage from '../page_objects/sendQuote.page';

const homePage = new HomePage();
const insurantDataPage = new InsurantDataPage();
const vehicleDataPage = new VehicleDataPage();
const productDataPage = new ProductDataPage();
const priceOptionPage = new PriceOptionPage();
const sendQuotePage = new SendQuotePage();

Given('I access the car registration page', () => {
  homePage.accessCarRegistrationPage();
});

When('I try to proceed without filling any input', () => {
    vehicleDataPage.skipVehicleData()
    insurantDataPage.skipInsurantData()
    productDataPage.skipProductData()
});

Then('I should see descriptive error message', () => {
    priceOptionPage.validadete_Error_Message();
});
