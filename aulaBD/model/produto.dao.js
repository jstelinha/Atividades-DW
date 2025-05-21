const db = require('../config/database')

// Função responsavel por cadastrar um produto 
exports.cadastrarProduto = async function (nome_produto) {
    const extensao_imagem = novo_produto.imagem.name.split(".").pop();

    const resposta = await db.query (
        'INSER INTO produto (nome, valor, imagem) VALUES ($1, $2, $3)', [novo_produto.nome, nome_produto.valor, extensao_imagem]
    );

    console.log(resposta)
    return resposta.rows[0].id_produto
}
