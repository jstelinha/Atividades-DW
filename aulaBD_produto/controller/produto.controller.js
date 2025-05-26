const produtoDAO = require("../model/produto.dao");
const path = require('path');

// Função responsável por criar um novo produto
exports.cadastrarProduto = async function(novo_produto){
    const caminho = path.join(__dirname, '..', 'imagens/');
    const id_produto = await produtoDAO.cadastrarProduto(novo_produto);

    extensao_arquivo = novo_produto.imagem.name.split(".");

    novo_produto.imagem.mv(caminho+id_produto+'.'+extensao_arquivo.pop());

    return true;
}

// função listar produtos 
exports.listarProdutos = async function(){
    return produtoDAO.listarProdutos();
}

//

// exports.buscarProdutoPorId = async function(id) {
//     const produtos = await produtoDao.listarProdutos();
//     return produtos.find(p => p.id_produto == id);
//   };
  
//   exports.atualizarProduto = async function(id, produtoAtualizado) {
//     await produtoDao.atualizarProduto(id, produtoAtualizado);
//   };
  
//   exports.removerProduto = async function(id) {
//     await produtoDao.removerProduto(id);
//   };