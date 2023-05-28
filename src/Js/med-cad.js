
function Medicamento(nome, horario, dosagem, periodo, medico) {
    this.nome = nome;
    this.horario = horario;
    this.dosagem = dosagem;
    this.periodo = periodo;
    this.medico = medico;
}


let botaoAdd = document.getElementById('botaoModal');
let arrayMed = [];

let i = 1;

botaoAdd.addEventListener('click', () => {

        

        let nomeMed = document.getElementById('nome').value;
        let horarioMed = document.getElementById('horario').value;
        let dosagemMed = document.getElementById('dosagem').value;
        let periodoMed = document.getElementById('periodo').value;
        let medicoMed = document.getElementById('medico').value;


        let med = new Medicamento(nomeMed, horarioMed, dosagemMed, periodoMed, medicoMed);
        arrayMed.push(med);

        let divBoxMed = document.getElementById("box-med-"+i);
        divBoxMed.innerHTML =
            `
        <h3>${med.nome}</h3>
        <ul>
            <li>Horário: ${med.horario}</li>
            <li>Dosagem: ${med.dosagem}</li>
            <li>Período: ${med.periodo}</li>
            <li>Médico: ${med.medico}</li>
        </ul>
        <h2>Confirmado</h2>
    `;

    divBoxMed.style.display ="block";

    i++

    if (i == 4) { // Apos preencher 3 blocos o array é injetado no localstorage
        console.log(arrayMed);
        let objArray = JSON.stringify(arrayMed);
        localStorage.setItem('arrayMed',objArray);
    }
    
    
});

