
import Login from '../pages/login/index'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"


// Cenario 1 


Given(/^Acessei a pagina de login do site$/, () => {
	Login.acessarPagina()
});

When(/^insiro um nome de usuario valido e uma senha valida$/, () => {
	Login.preencherUsuarioSenhaValido()
	Login.clicarbtnlogin()
});


Then(/^sou redirecionado para a pagina de compras$/, () => {
	Login.verificaLoginValido()
});


// Cenario 2




When(/^insiro nome e senha de um usuario bloqueado$/, () => {
	Login.preencherUsuarioSenhaBloqueado()
	Login.clicarbtnlogin()
});


Then(/^É exibido uma mensagem de erro de usuario bloqueado$/, () => {
	Login.verificaUsuarioBloqueado()
});


//Cenenario 3




When(/^insiro nome e senha de um usuario problematico$/, () => {
	Login.preencherUsuarioProblematico();
	Login.clicarbtnlogin();
});


Then(/^sou redirecionado para a pagina de compras problematica$/, () => {
	Login.verificaUsuarioProblematico();
});

//Cenario 4





When(/^Deixo o campo nome vazio e insiro uma senha valida$/, () => {
	Login.preencherUsuarioVazioSenhaValida();
	Login.clicarbtnlogin()
});


Then(/^É exibida uma mensagem de erro relatando usuario em branco$/, () => {
	Login.verificaUsuarioVazioSenhaValida();
})


// Cenario 5




When(/^insiro um nome valido e e deixo o campo senha vazio$/, () => {
	Login.preencherUsuarioValidoSenhaEmBranco();
	Login.clicarbtnlogin();
});


Then(/^É exibida uma mensagem de erro relatando senha em branco$/, () => {
	Login.preencherUsuarioValidoSenhaEmBranco()
});

// Cenario 6




When(/^insiro um nome valido e insiro uma senha invalida$/, () => {
	Login.preencherUsuarioValidoSenhaInvalida()
	Login.clicarbtnlogin()
});


Then(/^É exibida uma mensagem de erro relatando senha invalida$/, () => {
	Login. verificaUsuarioValidoSenhaVazio()
});
