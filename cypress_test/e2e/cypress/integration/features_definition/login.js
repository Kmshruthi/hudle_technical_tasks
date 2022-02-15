import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pages/login_page';
import login_data from '../data/loginData';
import LOGINENUM from "../ENUMS/loginPageENUM"

Given(/^I have navigated to the Hudl website$/, () => {

    let visitUrl = Cypress.config().baseUrl
    cy.visit(visitUrl);
    //Assert the landing page
    cy.contains(LOGINENUM.LOGIN, { timeout: 15000 }).should("be.visible");
    cy.findAllByText(LOGINENUM.LOGIN, { timeout: 15000 }).eq(0).click({
        force: true
      });
  
});

When(/^user logs in through ([^\"]*)$/, (email) => {
    LoginPage.typeEmail(email);
})

And(/^enter the password ([^\"]*)$/, (password) => {
    LoginPage.typePassword(password);
})


And(/^should see the message([^\"]*)$/, (message) => {
    LoginPage.pressSignIn(message);
})

