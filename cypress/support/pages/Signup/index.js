/*Arquivo para a criação das funções - ações de interação com as paginas*/
/// <refence types="cypress" />

const elLogin = require('./elements').ELEMENTS

class Login{
    clickLoginBtn() { //função para acessar o signup/login no menu
      cy.get(elLogin.iconeLogin).click({force:true}) 
    }

    preencherInputs(){ 
        cy.get(elLogin.loginEmail).type('luana.muller@acct.global');
        cy.get(elLogin.loginPassword).type('123aaa');
        cy.get(elLogin.submit).click();
        cy.get(elLogin.mensagem).should('contain', 'Your email or password is incorrect!');
    }
}

export default new Login()

