
const divMessage = document.querySelector(".alert");


function ativar(msg) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}





var alunos = []
var totalAlunos = 0;
function cadastro() {
    let nome = document.getElementById('nome').value;
    let ra = parseInt(document.getElementById('ra').value);
    let idade = parseInt(document.getElementById('idade').value);
    let media = Number(document.getElementById('media').value);

    let sexoRadios = document.getElementsByName('sexo');
    let resRadios = document.getElementsByName('resultado');
    let sexo;
    let resultado;

    for (let r of resRadios) {
        if (r.checked) {
            resultado = r.value;
        }
    }
    for (let s of sexoRadios) {
        if (s.checked) {
            sexo = s.value;
        }
    }
    if (isValido(nome) && isValido(ra) && isValido(idade) && isValido(media) && isValido(sexo) && isValido(resultado)) {
        if (ra > 0 && idade > 0 && media >= 0) {
            var aluno = {
                NOME: nome,
                RA: ra,
                IDADE: idade,
                MEDIA: media,
                SEXO: sexo,
                RESULTADO: resultado
            }
            inserirAluno(aluno);

        }
    }
}

function isValido(valor) {
    if (valor != null && valor != " " && valor != "") {
        return true;
    }
    return false;
}

function getVetorAlunos() {
    if (localStorage.getItem('alunos') != null && localStorage.getItem('alunos') != []) {
        alunos = JSON.parse(localStorage.getItem('alunos'));
    }
    totalAlunos = alunos.length;
    return alunos;
}

function inserirAluno(aluno) {
    alunos = getVetorAlunos();
    if (totalAlunos < 50) {
        alunos.push(aluno);
        localStorage.setItem('alunos', JSON.stringify(alunos));
        //alert('Cadastrado com sucesso.')
        ativar("RESETADO COM SUCESSO");
    } else {
        alert('Erro ao cadastrar, limite maximo atingido.')
    }
}


//Elementos da pagina
function voltar() {
    location.href = "index.html";
}

var btnCad = document.getElementById('btn_cadastrar');
var btnVoltar = document.getElementById('btn_voltar');

btnCad.addEventListener('click', cadastro);
btnVoltar.addEventListener('click', voltar);



