const express = require('express');
const app = express();
const port = 8086;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

const usuarioController = require('./controller/usuario.controller');
const produtoController = require('./controller/produto.controller')
const usuario = require('./entidades/usuario');
const email = require('./config/email');
const produto = require('./config/email');

//Configuração do Handlebars (necessário a partir da rota #2)
//Informa ao express qual template engine será usado
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

//Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuração do express-fileupload
app.use(fileupload());


app.get('/', function(rerq, res){
  res.end();
});

app.get('/listarUsuarios', function (req, res) {
  const resultado = usuarioController.listarUsuarios();
  //resultado.then(resp => {res.send(resp)});
  resultado.then(resp => { res.render('listagemUsuarios', { resp }) });
  //console.log(resultado);
});

app.get('/cadastrarUsuario', function (req, res) {
  email('email', 'Assunto email', 'Funcionou');
  res.render('cadastroUsuario');
});

app.post('/cadastrarUsuario', function (req, res) {
  (novo_usuario);
  resultado.then(resp => {
    if (resp.length > 0){
      res.render('cadastroUsuario', { usuario: novo_usuario, mensagem: resp});
    }else{
      email(novo_usuario.email, 'Cadastro', 'Sua conta foi criada!');
      res.redirect('/listarUsuarios');
    }
  });

});

app.post('/removerUsuario', function(req, res){
  const resultado =  usuarioController.removerUsuario(req.query.username);
  resultado.then(resp => {res.redirect('/listarUsuarios');});
});


//Rotas do Produto 

app.get('/cadastrarProduto', function(req, res){
  res.render('cadastroProduto')
});

app.post('/cadastrarProduto', function(req, res){
  const novo_produto = new produto(req.body.nome, req.body.nome, req.body.valor, req.files.imagem);

  const resultado = produtoController.cadastrarProduto(novo_produto);

  resultado.then(resp => {
    const extensao_imagem = req.files.imagem.name.split(".").pop();

    req.files.imagem.mv(__dirname+'/imagens/'+resp+'.'+extensao_imagem);

  });

});


// 


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}...`);
});
