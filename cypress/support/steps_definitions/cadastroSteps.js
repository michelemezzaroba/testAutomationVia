/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import cadastro from '../page_objects/cadastroPage';
import url from '../../../cypress.json';

Given("Dado que acessei a tela de cadastro", () => {
    cy.visit(url.baseUrlCadastro);
})

When("eu informar o nome de usuário {string}", (insiranome) => {
    cadastro.inserirNome(insiranome);
})

When("informar email válido {string}", (insiraemail) => {
    cadastro.inseriremail(insiraemail);
})

When("informar uma senha válida {string}", (insirasenha) => {
    cadastro.inserirSenha(insirasenha);
})

When("confirmar a senha digitada {string}", (confirmasenha) => {
    cadastro.inserirconfirmacaoSenha(confirmasenha);
})

When("clicar no botão cadastrar", () => {
    cadastro.BtnCadastrar();
})

Then("o cadastro de usuário é realizado com sucesso", () => {
    cadastro.msgSucesso();
})