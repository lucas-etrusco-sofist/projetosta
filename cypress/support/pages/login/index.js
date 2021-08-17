
class Login {

    acessarPagina() {

        cy.visit('https://www.saucedemo.com/')

    }

     clicarbtnlogin(){

        cy.get('[id="login-button"]').click()


     }

     preencherUsuarioSenhaValido(){

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioValid')}`)
        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)


     }

     preencherUsuarioSenhaBloqueado(){

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioBloq')}`)
        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)


     }

     preencherUsuarioProblematico(){

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioProblem')}`)
        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)


     }


     preencherUsuarioVazioSenhaValida(){

        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)


     }



     preencherUsuarioValidoSenhaVazio(){

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioValid')}`)
       


     }

     preencherUsuarioValidoSenhaEmBranco(){

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioProblem')}`)
        
     }

     preencherUsuarioValidoSenhaInvalida(){

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioProblem')}`)
        cy.get('[id="password"]').type("invali")

        
     }



     verificaLoginValido(){

        cy.get('[class="title"]').should('contain','Products')
        
     }

     verificaUsuarioBloqueado(){

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
     }

     verificaUsuarioProblematico(){

        cy.get('[class="title"]').should('contain', 'Products')
     }

     verificaUsuarioVazioSenhaValida(){

        cy.get('[data-test=error]').should('contain', 'Epic sadface: Username is required')
     }

     verificaUsuarioValidoSenhaVazio(){

        cy.get('[data-test=error]').should('contain', 'Epic sadface: Password is required')
     }

     verificaUsuarioValidoSenhaVazio(){

        cy.get('[data-test=error]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
     }




    preencherLoginValido() {

        this.acessarPagina();
        this.preencherUsuarioSenhaValido();
        this.clicarbtnlogin();
        this.verificaLoginValido();
    }

    preencherLoginUsuarioBloqueado() {

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioBloq')}`)
        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }

    preencherLoginUsuarioProblematico() {

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioProblem')}`)
        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)
        cy.get('[id="login-button"]').click()
        cy.get('[class="title"]').should('contain', 'Product')

    }

    preencherLoginUsuárioEmBrancoSenhaVálida() {

        cy.get('[id="password"]').type(`${Cypress.env('senha')}`)
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    }

    preencherLoginSenhaEmBrancoUsuárioVálido() {

        cy.get('[id="password"]').type(`${Cypress.env('senhan')}`)
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    }

    preencherLoginSenhaInválidaUsuárioPreenchido() {

        cy.get('[id="user-name"]').type(`${Cypress.env('usuarioValid')}`)
        cy.get('[id="password"]').type("lucas")
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    }

}

export default new Login();