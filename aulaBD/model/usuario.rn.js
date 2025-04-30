
exports.validarUsername = function(username){
    if((username.length >= 5) && (username.length <= 10))
        return true;
    return false;
}

function hasSpecialChars(str) { return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);}
function hasNumber(str) {
    if (typeof str === 'number') {
      return true;
    }
    if (typeof str !== 'string') {
      return false;
    }
    return !isNaN(parseFloat(str));
  }

exports.validarSenha = (senha)=> {
    if((senha.length > 8) && (senha.toLowerCase() != senha) && (hasNumber(senha)) && (hasSpecialChars(senha))){
        return true;
    } return false;
}

