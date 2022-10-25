/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import cadastro from '../page_objects/cadastroPage';
import perfil from '../page_objects/perfilPage';
import url from '../../../cypress.json';

Given("que acessei a tela de perfil", () => {
    cy.visit(url.baseUrlPerfil);
})

When("eu seleciono um Status," () => {
    perfil.status();
    perfil.QAsenior();
})

When("informo a empresa {string}", (inserirempresa) => {
    perfil.empresa(inserirempresa);
})

When("informo um Website {string}", (inserirwebsite) => {
    perfil.website(inserirwebsite);
})

When("informo uma localização {string}", (inserirlocalizacao) => {
    perfil.localizacao(inserirlocalizacao);
})

When("informo conhecimentos {string}", (inserirconhecimentos) => {
    perfil.conhecimentos(inserirconhecimentos);
})

When("informo usuario GitHub {string}", (inserirUserGit) => {
    perfil.inserirUserGit(inserirUserGit);
})

When("clico no botão Criar Perfil", () => {
    perfil.BTNCriarPerfil();
})

When("o perfil deve ser criado com sucesso", () => {
    cadastro.msgSucesso();
})