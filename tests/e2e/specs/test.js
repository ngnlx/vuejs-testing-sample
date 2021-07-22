// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });

  it("Press count up button", () => {
    cy.get(".home-link").click();
    cy.get(".btn-count-up").click();
    cy.contains("p.result", "Total clicks: 1");
  });

  it("Visits the about page", () => {
    cy.get(".about-link").click();
    cy.contains("h1", "This is an about page");
  });

  it("Verify sum of 2 numbers", () => {
    cy.get(".about-link").click();
    cy.contains("h1", "This is an about page");

    const firstNumber = 12;
    const secondNumber = 48;

    cy.get(".firstNumber").clear().type(firstNumber);
    cy.get(".secondNumber").clear().type(secondNumber);

    cy.get(".btn-calculate").click();
    cy.get(".result").contains(`Result: ${firstNumber + secondNumber}`);
  });
});
