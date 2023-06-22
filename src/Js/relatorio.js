let arrayMed = JSON.parse(localStorage.getItem('arrayMed'));

function rel() {

    let table = document.querySelector('table');

    for (let i = 0; i < arrayMed.length; i++) {

        let row = document.createElement('tr');


        let medicoCell = document.createElement('td');
        let nomeCell = document.createElement('td');
        let dosagemCell = document.createElement('td');
        let horarioCell = document.createElement('td');
        let confirmadoCell = document.createElement('td');


        medicoCell.textContent = arrayMed[i].medico;
        nomeCell.textContent = arrayMed[i].nome;
        dosagemCell.textContent = arrayMed[i].dosagem;
        horarioCell.textContent = arrayMed[i].horario;
        confirmadoCell.textContent = arrayMed[i].confirmado;


        row.appendChild(medicoCell);
        row.appendChild(nomeCell);
        row.appendChild(dosagemCell);
        row.appendChild(horarioCell);
        row.appendChild(confirmadoCell);


        table.appendChild(row);
    }

}


let gerarButton = document.querySelector('.gerar-button');
gerarButton.addEventListener('click', function () {


    let compartilharButton = document.querySelector('#compartilhar-button');
    compartilharButton.style.display = 'block';
});


let compartilharButton = document.querySelector('#compartilhar-button');
compartilharButton.addEventListener('click', function () {



    let userEmail = localStorage.getItem('userEmail');


});
