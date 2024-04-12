const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo')

const relogio = setInterval(function time (){
     let horaAtual = new Date();
     let hr = horaAtual.getHours();
     let min = horaAtual.getMinutes();
     let sec = horaAtual.getSeconds();

    if (hr <10) hr = '0' + hr
    if (min <10) min = '0' + min
    if (sec <10) sec = '0' + sec

    hora.innerHTML = hr
    minuto.textContent = min
    segundo.innerText = sec
})
function adicionarNumero(numero) {
    var inputValores = document.getElementById('valores');
    
    if (inputValores.value === "" || isNaN(parseInt(inputValores.value.slice(-1)))) {
        inputValores.value += numero;
    } else {
        inputValores.value = inputValores.value.slice(0, -1) + numero; 
    }
}

function adicionarOperador(operador) {
    var inputValores = document.getElementById('valores');
    
    if (inputValores.value === "" || !isNaN(parseInt(inputValores.value.slice(-1)))) {
        inputValores.value += operador;
    } else {
        inputValores.value = inputValores.value.slice(0, -1) + operador;
    }
}

function adicionarDecimal() {
    var inputValores = document.getElementById('valores');
    
    if (!isNaN(parseInt(inputValores.value.slice(-1))) && inputValores.value.indexOf('.') === -1) {
        inputValores.value += '.';
    }
}
function calcular() {
    var entrada = document.getElementById('valores').value;

    entrada = entrada.replace(/\s+/g, '');

    var partes = entrada.match(/(\d+\.?\d*)([+\-*\/])(\d+\.?\d*)/);

    if (!partes || partes.length !== 4) {
        document.getElementById('valores').value = "Formato inválido";
        return;
    }

    var valor1 = parseFloat(partes[1]);
    var operador = partes[2];
    var valor2 = parseFloat(partes[3]);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('valores').value = "Inválido";
        return;
    }

    var resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 === 0) {
                document.getElementById('valores').value = "Impossível dividir";
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            document.getElementById('valores').value = "Operador inválido.";
            return;
    }

    // Exibe o resultado no campo de entrada
    document.getElementById('valores').value = resultado;
}