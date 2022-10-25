Feature: Cadastro de usuário

Scenario: Cadastro válido
Given Dado que acessei a tela de cadastro
When eu informar o nome de usuário "Michele"
And informar email válido "michele@gmail.com"
And informar uma senha válida "123456"
And confirmar a senha digitada "123456"
And clicar no botão cadastrar
Then o cadastro de usuário é realizado com sucesso