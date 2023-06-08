let arrayMed = JSON.parse(localStorage.getItem('arrayMed'));

function rel () {
// Obtém uma referência para a tabela
let table = document.querySelector('table');

for (let i = 0; i < arrayMed.length; i++) {
  // Cria uma nova linha (<tr>) para cada elemento do array
  let row = document.createElement('tr');

  // Cria uma célula (<td>) para cada propriedade do objeto
  let medicoCell = document.createElement('td');
  let nomeCell = document.createElement('td');
  let dosagemCell = document.createElement('td');
  let horarioCell = document.createElement('td');
  let confirmadoCell = document.createElement('td');

  // Adiciona o conteúdo do array nas células
  medicoCell.textContent = arrayMed[i].medico;
  nomeCell.textContent = arrayMed[i].nome;
  dosagemCell.textContent = arrayMed[i].dosagem;
  horarioCell.textContent = arrayMed[i].horario;
  confirmadoCell.textContent = arrayMed[i].confirmado;

  // Adiciona as células à linha
  row.appendChild(medicoCell);
  row.appendChild(nomeCell);
  row.appendChild(dosagemCell);
  row.appendChild(horarioCell);
  row.appendChild(confirmadoCell);

  // Adiciona a linha à tabela
  table.appendChild(row);
}

}

// Código para o botão "Gerar"
let gerarButton = document.querySelector('.gerar-button');
gerarButton.addEventListener('click', function() {
  // Lógica para criar a tabela

  // Mostrar o botão "Compartilhar"
  let compartilharButton = document.querySelector('#compartilhar-button');
  compartilharButton.style.display = 'block';
});

// Código para o botão "Compartilhar"
let compartilharButton = document.querySelector('#compartilhar-button');
compartilharButton.addEventListener('click', function() {
  // Obter os dados da tabela

  // Obter o email do usuário do localStorage
  let userEmail = localStorage.getItem('userEmail');

  // Lógica para enviar os dados da tabela por e-mail usando a variável "userEmail"
});
