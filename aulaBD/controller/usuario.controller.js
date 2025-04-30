const usuarioDAO = require("../model/usuario.dao");
const usuarioRN = require("../model/usuario.rn");

exports.listarUsuarios = async function(){
    return usuarioDAO.listarUsuarios();
}

exports.criarUsuario = async function(novo_usuario){
    if(usuarioRN.validarUsername(novo_usuario.username) && (usuarioRN.validarSenha(novo_usuario.senha))){
        if( novo_usuario.username in usuarioDAO.listarUsuarios()){
            return false;
        }
        await usuarioDAO.criarUsuario(novo_usuario);
        return true;
    }
    
    return false;
}
