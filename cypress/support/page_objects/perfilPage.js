/// <reference types="Cypress" />

// elementos
const status = '#profile-status';
const QAsenior = '#mui-component-select-status';
const empresa = '#profile-company';
const website = '#profile-webSite';
const localizacao = '#profile-location';
const conhecimentos = '#profile-skills';
const userGitHub = '#profile-gitHub';
const BTNCriarPerfil = '#profile-submit';


class perfil {
    static visit () {
        cy.visit()

    }

    static status () {
        cy.get(status).click();
    }

    static QAsenior () {
        cy.get(QAsenior).click();
    }

    static empresa (inserirempresa) {
        cy.get(empresa).type(inserirempresa);
    }

    static website (inserirwebsite) {
        cy.get(website).type(inserirwebsite);
    }

    static localizacao (inserirlocalizacao) {
        cy.get(localizacao).type(inserirlocalizacao);
    }

    static conhecimentos (inserirconhecimentos) {
        cy.get(conhecimentos).type(inserirconhecimentos);
    }

    static userGitHub (inserirUserGit) {
        cy.get(userGitHub).type(inserirUserGit);
    }


    static BTNCriarPerfil () {
        cy.get(BTNCriarPerfil).click();
    }
}
export default perfil;