import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://webdave.de';
Given('I open the fancy page', () => {
  cy.visit(url);
});

Then('I see {string} in the title', (title: string) => {
  cy.contains(title);
});

Then('Find a img', () => {
  cy.get('[src="assets/images/2019-GDE-Angular-Badge_1.svg"]');
});
