window.onload = () => {
login.onsubmit = (event) => {
    var emaildigitado = email.value;
    var emailexistente = localStorage.getItem(emaildigitado + "-email");
    if (emailexistente == emaildigitado) {
        var senhadigitada = senha.value;
        var senhaexistente = localStorage.getItem(emaildigitado + "-password")
        if (senhaexistente == senhadigitada) {
            event.preventDefault();
            window.location.href = "/sg_n_2022-1-caron-match/codigo/CaronMatch_Arquivos/CaronMatch/TelaFinal/Paginafinal.html";
        }
        else {
            window.alert("Senha incorreta. Tente novamente.")
        }
    }
    else {
        window.alert("E-mail não encontrado.")
    }
} }