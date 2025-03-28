let entradaAtual = '';
let operacaoAtual = '';
let entradaAnterior = '';

function atualizarDisplay() {
    document.getElementById('display').value = entradaAtual;
}

function adicionarNumero(numero) {
    entradaAtual += numero;
    atualizarDisplay();
}

function limparTela() {
    entradaAtual = '';
    entradaAnterior = '';
    operacaoAtual = '';
    atualizarDisplay();
}

function definirOperacao(operador) {
    if (entradaAtual === '') return;

    if (entradaAnterior !== '') {
        calcularResultado();
    }

    operacaoAtual = operador;
    entradaAnterior = entradaAtual;
    entradaAtual = '';
}

function calcularResultado() {
    let resultado;
    const numeroAnterior = parseFloat(entradaAnterior);
    const numeroAtual = parseFloat(entradaAtual);

    if (isNaN(numeroAnterior) || isNaN(numeroAtual)) return;

    switch (operacaoAtual) {
        case '+':
            resultado = numeroAnterior + numeroAtual;
            break;
        case '-':
            resultado = numeroAnterior - numeroAtual;
            break;
        case '*':
            resultado = numeroAnterior * numeroAtual;
            break;
        case '/':
            if (numeroAtual === 0) {
                resultado = 'Erro';
            } else {
                resultado = numeroAnterior / numeroAtual;
            }
            break;
        default:
            return;
    }

    entradaAtual = resultado.toString();
    operacaoAtual = '';
    entradaAnterior = '';
    atualizarDisplay();
}

function alternarTema() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const botaoTema = document.querySelector('.theme-toggle');

    if (body.classList.contains('dark-mode')) {
        botaoTema.textContent = 'Claro';
    } else {
        botaoTema.textContent = 'Escuro';
    }
}
