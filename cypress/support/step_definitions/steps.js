import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

/*
Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})
*/

Given("I access homepage", () => {
    cy.visit("https://automationexercise.com");
})

When("I access Login page", () =>{
  cy.get('a:contains(Signup / Login)').click();
})

When("type in the wrong username and password and click submit", () =>{
    cy.get('input[data-qa="login-email"]').type('luana.muller@acct.global'); 
    //direcionando ao campo login do primeiro form.
    cy.get('[placeholder="Password"]').type('123aaa');
    cy.get ('button').click({multiple: true});
})

When ("the error message should be displayed", () =>{
    cy.get('.p').should('contain', 'Your email or password is incorrect!');
})

