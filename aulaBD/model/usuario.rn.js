
exports.validarUsername = function(username){
    if((username.length >= 5) && (username.length <= 10))
        return true;
    return false;
}

function hasSpecialChars(str) { return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);}

exports.validarSenha = (senha)=> {
    if((senha.length > 8) && (senha.toLowerCase() != senha) && (hasNumber(senha)) && (hasSpecialChars(senha))){
        return true;
    } return false;
}

