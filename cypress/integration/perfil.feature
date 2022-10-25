Feature: Cadastro de perfil

Scenario Adicionar um perfil ao cadastro realizado
Given que acessei a tela de perfil
When eu seleciono um Status
And informo a empresa "QA House"
And informo um Website "www.google.com"
And informo uma localização "São Leopoldo - RS"
And informo conhecimentos "Automação de testes em Cypress"
And informo usuario GitHub "mezzarobamichele"
And clico no botão Criar Perfil
Then o perfil deve ser criado com sucesso