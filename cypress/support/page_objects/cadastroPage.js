/// <reference types="Cypress" />

// elementos
const nome = '#register-name';
const email = '#register-email';
const senha = '#register-password';
const confirmSenha = '#register-password2';
const BtnCadastrar = '#register-submit';
const msgSucesso = '#dashboard-welcome';

class cadastro {
    static visit () {
        cy.visit()
    }

    static inserirNome (insiranome) {
        cy.get(nome).type(insiranome);
    }

    static inseriremail (insiraemail) {
        cy.get(email).type(insiraemail);
    }

    static inserirSenha (insirasenha) {
        cy.get(senha).type(insirasenha);
    }

    static inserirconfirmacaoSenha (confirmasenha) {
        cy.get(confirmSenha).type(confirmasenha);
    }

    static BtnCadastrar () {
        cy.get(BtnCadastrar).click();
    }

    static msgSucesso (){
        cy.get(msgSucesso).contains('Bem-vindo');
    }
}
export default cadastro;