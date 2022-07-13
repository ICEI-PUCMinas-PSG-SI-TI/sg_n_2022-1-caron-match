window.onload = function () {
    
    var nome = localStorage.getItem('usuariologado-nome');
    document.getElementById('usuario').innerHTML = nome;

    var telefonedousuario = localStorage.getItem('telusuario-telefone');
    document.getElementById('telefone').innerHTML = telefonedousuario;

}
function funcaoLogout(){
  
 var nome = localStorage.getItem('usuariologado-nome');
 window.localStorage.removeItem('usuariologado-nome')=nome;

    
}
