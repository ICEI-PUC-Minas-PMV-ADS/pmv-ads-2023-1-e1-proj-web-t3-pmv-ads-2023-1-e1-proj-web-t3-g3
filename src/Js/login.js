
const userEmail = localStorage.getItem('userEmail');
const userSenha = localStorage.getItem('userSenha');




function login () {

    const btnEmail = document.getElementById('login-btn-email');
    const loginEmail = btnEmail.value;

    const btnSenha = document.getElementById('login-btn-senha');
    const loginSenha = btnSenha.value;

    if (loginEmail === userEmail && loginSenha === userSenha) {
        alert("Login efetuado com sucesso");
        window.location.href = "/HTML/index.html";

    }
    else alert("Revise os campos");

}