function register() {
    const btnNome = document.getElementById('btn-nome');
    const userNome = btnNome.value;

    const btnEmail = document.getElementById('btn-email');
    const userEmail = btnEmail.value;

    const btnSenha = document.getElementById('btn-senha');
    const userSenha = btnSenha.value;

    const btnTel = document.getElementById('btn-tel');
    const userTel = btnTel.value;

    localStorage.setItem('userNome', userNome);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userSenha', userSenha);
    localStorage.setItem('userTel', userTel);
    
  
  }

