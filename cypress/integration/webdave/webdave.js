import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://webdave.de'
Given('I open the page', () => {
  cy.visit(url)
})