/// <reference types ="cypress"/>
import Login from '../../support/pages/login/index'

describe('Pagina de Login', () => {
    describe('Login com', () => {



        beforeEach(() => {
            Login.acessarPagina();

        })

        it('Usuario Valido', () => {
            Login.preencherLoginValido();

        });

        it('Usuário bloqueado', () => {
            Login.preencherLoginUsuarioBloqueado();

        });
        it('Usuário problemático', () => {
            Login.preencherLoginUsuarioProblematico();

        });
        it('Usuário em branco e senha válida', () => {
            Login.preencherLoginUsuárioEmBrancoSenhaVálida

        });
        it('Senha em branco e usuário válido', () => {
            Login.preencherLoginSenhaEmBrancoUsuárioVálido
        });

        it('Senha inválida e usuário válido', () => {
            Login.preencherLoginSenhaInválidaUsuárioPreenchido();

        });

    })

});