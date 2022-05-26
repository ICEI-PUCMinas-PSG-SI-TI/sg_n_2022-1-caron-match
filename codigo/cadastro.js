/*
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
*/

     
     window.onload = () => {
         email.onchange = () => console.log(email.value);
         nome.onchange = () => console.log(nome.value);
         sobrenome.onchange = () => console.log(sobrenome.value);
         password.onchange = () => console.log(password.value);
         passconfirmation.onchange = () => console.log(passconfirmation.value);
         telefone.onchange = () => console.log(telefone.value);
         dar.onchange = () => console.log(dar.value);
         pegar.onchange = () => console.log(pegar.value);
         lembre.onchange = () => console.log(lembre.value);
     };
