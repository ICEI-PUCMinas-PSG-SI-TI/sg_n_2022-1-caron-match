window.onload = () => {
    email.onchange = () => console.log(email.value);
    senha.onchange = () => console.log(senha.value);
    lembre.onchange = () => console.log(lembre.value);

    localStorage.setItem('email', email.value);
    localStorage.setItem('senha', senha.value);
    localStorage.setItem('lembre', lembre.value);
    
 }
    
