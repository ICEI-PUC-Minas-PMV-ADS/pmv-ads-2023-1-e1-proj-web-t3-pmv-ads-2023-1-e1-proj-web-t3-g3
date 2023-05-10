
const userEmail = localStorage.getItem('userEmail');
const userSenha = localStorage.getItem('userSenha');





function login() {

    const loginEmail = document.getElementById('login-btn-email').value;

    const loginSenha = document.getElementById('login-btn-senha').value;

    if (loginEmail === userEmail && loginSenha === userSenha) {
        alert("Sucesso")
        location.replace ("/src/HTML/cadastrov2.html");

    }
     else   alert("Revise os campos")


}

