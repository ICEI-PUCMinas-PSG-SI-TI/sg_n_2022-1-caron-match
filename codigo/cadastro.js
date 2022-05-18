cadastro.onsubmit = (event) => {
    localStorage.setItem('email', email.value);
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('sobrenome', sobrenome.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('passconfirmation', passconfirmation.value);
    localStorage.setItem('telefone', telefone.value);
    if (dar.checked){
        localStorage.setItem('escolha', dar.value);
    }
    else {
        localStorage.setItem('escolha', pegar.value);
    }
 

    event.preventDefault();
}