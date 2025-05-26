const db = require("../config/database");

// Função responsável por criar um novo produto
exports.cadastrarProduto = async function(novo_produto){

    const extensao_arquivo = novo_produto.imagem.name.split(".").pop();

    const resposta = await db.query(
        'INSERT INTO produto (nome, valor, imagem) VALUES ($1, $2, $3) returning id_produto',
        [novo_produto.nome, novo_produto.valor, extensao_arquivo]
    );
    //console.log(resposta)
    return resposta.rows[0].id_produto;
}

//Funçã listar produtos 
exports.listarProdutos = async function(){
    const {rows} = await db.query("SELECT * FROM produto")
    return rows;
}


// 

// // Função para atualizar um produto existente
// exports.atualizarProduto = async function(id, produtoAtualizado) {
//     const extensao_arquivo = produtoAtualizado.imagem.name.split('.').pop();

//     await db.query(
//         'UPDATE produto SET nome = $1, valor = $2, imagem = $3 WHERE id_produto = $4',
//         [produtoAtualizado.nome, produtoAtualizado.valor, extensao_arquivo, id]
//     );
// };

// // Função para remover um produto
// exports.removerProduto = async function(id) {
//     await db.query(
//         'DELETE FROM produto WHERE id_produto = $1',
//         [id]
//     );
// };