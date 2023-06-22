
const userEmail = localStorage.getItem('userEmail');
const userTel = localStorage.getItem('userTel');
const userNome  =  localStorage.getItem('userNome');


let inNome = document.getElementById("nome");
let inEmail = document.getElementById("email");
let inTelefone = document.getElementById("telefone");

inNome.innerText = userNome;
inEmail.innerText = userEmail;
inTelefone.innerText = userTel;



