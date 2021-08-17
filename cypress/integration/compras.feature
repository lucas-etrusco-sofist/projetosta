Feature: Compras

    Como usuario desejo realizar minhas compras
    no site


    Scenario:  Caminho Feliz compra
        Given Realizei login no site
        When adiciono produtos ao carrinho e finalizo a compra
        Then É exibido uma mensagem de sucesso


    Scenario:  Caminho Feliz compra com Xpath
        Given Realizei login no site
        When adiciono produtos ao carrinho e finalizo a compra
        Then É exibido uma mensagem de sucesso