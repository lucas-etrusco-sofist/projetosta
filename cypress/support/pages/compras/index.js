class Produto {

   
     verificaCompraSucesso(){

        cy.get('[class="title"]').should('contain', 'Checkout: Complete!')
        cy.screenshot()
     }


     verificaCompraSucessoXpath(){

        cy.get('//*[.title]').should('contain', 'Checkout: Complete!')
        cy.screenshot()
     }





   
    adicionarUmProdutoAoCarrinhoFecharoPedido() {

        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[id="checkout"]').click()
        cy.get('[id="first-name"]').type("Lucas")
        cy.get('[id="last-name"]').type("Etrusco")
        cy.get('[id="postal-code"]').type("30626600")
        cy.get('[id="continue"]').click()
        cy.get('[id="finish"]').click()

    }

    adicionarUmProdutoAoCarrinhoFecharoPedidoXpath() {

        cy.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]').click()
        cy.xpath('//*[@id="shopping_cart_container"]').click()
        cy.xpath('//*[@id="checkout"]').click()
        cy.xpath('//*[@ id = "first-name"]').type("Lucas")
        cy.xpath('//*[@ id = "last-name"]').type("Etrusco")
        cy.xpath('//*[@ id = "postal-code"]').type("30626600")
        cy.xpath('//*[@ id = "continue"]').click()
        cy.xpath('//*[@ id = "finish"]').click()

    }

}
export default new Produto();