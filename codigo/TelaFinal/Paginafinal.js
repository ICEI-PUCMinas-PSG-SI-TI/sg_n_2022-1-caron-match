window.onload = function () {
    
    var nome = localStorage.getItem('usuariologado-nome');
    document.getElementById('usuario').innerHTML = "Bem vindo " + nome;
}

