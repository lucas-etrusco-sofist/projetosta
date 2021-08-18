Feature: Login

    Como usuario eu gostaria de fazer login no o site para
    realizar minhas compras

    Scenario: Login com sucesso
        Given Acessei a pagina de login do site
        When insiro um nome de usuario valido e uma senha valida
        Then sou redirecionado para a pagina de compras

    Scenario: Login com usuario bloqueado
        Given Acessei a pagina de login do site
        When insiro nome e senha de um usuario bloqueado
        Then É exibido uma mensagem de erro de usuario bloqueado

    Scenario: Login com usuario problematico
        Given Acessei a pagina de login do site
        When insiro nome e senha de um usuario problematico
        Then sou redirecionado para a pagina de compras problematica

    Scenario: Login com usuario em branco e senha valida
        Given Acessei a pagina de login do site
        When Deixo o campo nome vazio e insiro uma senha valida
        Then É exibida uma mensagem de erro relatando usuario em branco

    Scenario: Login com usuario valido e senha em branco
        Given Acessei a pagina de login do site
        When insiro um nome valido e e deixo o campo senha vazio
        Then É exibida uma mensagem de erro relatando senha em branco

    Scenario: Login com usuario valido e senha em branco
        Given Acessei a pagina de login do site
        When insiro um nome valido e insiro uma senha invalida
        Then É exibida uma mensagem de erro relatando senha invalida