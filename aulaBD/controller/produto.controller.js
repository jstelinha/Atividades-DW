const produtoDAO = require('../model/produto.dao');

exports.cadastrarProduto = async function(novo_produto) {
    return await produtoDAO.cadastrarProduto(novo_produto);
}