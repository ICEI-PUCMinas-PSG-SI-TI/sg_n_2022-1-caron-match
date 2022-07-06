window.onload = () => {
    login.onsubmit = (event) => {
        var emaildigitado = email.value
        var emailexistente = localStorage.getItem(emaildigitado + "-email")
        if (emailexistente == emaildigitado) {
            var senhaexistente = localStorage.getItem(emaildigitado + "-password")
            var senhadigitada = senha.value
            if (senhaexistente == senhadigitada) { //checar se o usuario fez login
                var nomeusuario = localStorage.getItem(emaildigitado + "-nome")
                localStorage.setItem('usuariologado-nome', nomeusuario);


                event.preventDefault() //impedir o comportamento padrão do submit, que no caso seria o recarregamento da pagina
                window.location.href = "../TelaFinal/Paginafinal.html" //redirecionamento
            }
            else {
                window.alert("Senha incorreta. Tente novamente.")
            }
        }
        else {
            window.alert("E-mail não encontrado.")
        }
    }
}
