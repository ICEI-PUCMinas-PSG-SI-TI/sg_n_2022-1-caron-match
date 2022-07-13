window.onload = function () {
    
    var nome = localStorage.getItem('usuariologado-nome');
    document.getElementById('usuario').innerHTML = "Bem vindo " + nome +" !";
}

function funcaoLogout(){
  
    var nome = localStorage.getItem('usuariologado-nome');
    window.localStorage.removeItem('usuariologado-nome')=nome;
   
       
   }
