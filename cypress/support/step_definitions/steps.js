import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import Login from "../pages/Signup";

Given("I access homepage", () => {
    cy.visit("https://automationexercise.com");
})

When("I access Login page", () =>{
    Login.clickLoginBtn()
  //cy.get('a:contains(Signup / Login)').click();
})

When("type in the wrong username and password and click submit", () =>{
    Login.preencherInputs()

    //cy.get('input[data-qa="login-email"]').type('luana.muller@acct.global'); 
    //cy.get('[placeholder="Password"]').type('123aaa');
    //cy.get ('button').click({multiple: true});
})


When ("the error message should be displayed", () =>{
    Login.preencherInputs();
    //cy.get('.p').should('contain', 'Your email or password is incorrect!');
})

