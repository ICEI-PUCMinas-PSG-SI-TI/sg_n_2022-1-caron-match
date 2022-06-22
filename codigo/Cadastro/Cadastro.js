window.onload = () => {

    email.onchange = () => console.log(email.value);
    nome.onchange = () => console.log(nome.value);
    sobrenome.onchange = () => console.log(sobrenome.value);
    password.onchange = () => console.log(password.value);
    telefone.onchange = () => console.log(telefone.value);
    dar.onchange = () => console.log(dar.value);
    pegar.onchange = () => console.log(pegar.value);



    cadastro.onsubmit = (event) => {
        var emaildigitado = email.value;
      
        var emailexistente = localStorage.getItem(emaildigitado + "-email");
        if (emailexistente == emaildigitado) {
            window.alert("Email já cadastrado.")
        }
        else{
            localStorage.setItem(emaildigitado + '-email', email.value);
            localStorage.setItem(emaildigitado + '-nome', nome.value);
            localStorage.setItem(emaildigitado + '-sobrenome', sobrenome.value);
            localStorage.setItem(emaildigitado + '-password', password.value);
            localStorage.setItem(emaildigitado + '-telefone', telefone.value);
            if (dar.checked) {
                localStorage.setItem(emaildigitado + '-escolha', dar.value);
            }
            else {
                localStorage.setItem(emaildigitado + '-escolha', pegar.value);
               
            }
            event.preventDefault();
            window.location.href = "/sg_n_2022-1-caron-match/codigo/Login/Login.html";
        }
       

    }
}


