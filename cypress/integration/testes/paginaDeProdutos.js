
import Login from '../../support/pages/login/index'
import Produto from '../../support/pages/compras/index'


describe('Caminho de Compra', () => {
  describe('Quando:', () => {


    beforeEach(() => {
      Login.acessarPagina();
      Login.preencherLoginValido();
    })


    it('Adicionar um produto ao carrinho e fechar o pedido', () => {

      Produto.adicionarUmProdutoAoCarrinhoFecharoPedido();

    })


    it('Adicionar um produto ao carrinho e fechar o pedido com xpath', () => {

      Produto.adicionarUmProdutoAoCarrinhoFecharoPedidoXpath();


    })



  })
})
