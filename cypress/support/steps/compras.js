import Compra from '../../support/pages/compras/index'
import Login from '../../support/pages/login/index'





Given(/^Realizei login no site$/, () => {
	Login.preencherLoginValido();
});

When(/^adiciono produtos ao carrinho e finalizo a compra$/, () => {
	Compra.adicionarUmProdutoAoCarrinhoFecharoPedidoXpath();
});

Then(/^É exibido uma mensagem de sucesso$/, () => {
	Compra.verificaCompraSucesso();
});




When(/^adiciono produtos ao carrinho e finalizo a compra$/, () => {
	Compra.adicionarUmProdutoAoCarrinhoFecharoPedidoXpath()
});

Then(/^É exibido uma mensagem de sucesso$/, () => {
	return true;
});
