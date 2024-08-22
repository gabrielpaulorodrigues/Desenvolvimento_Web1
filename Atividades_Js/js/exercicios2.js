module.exports = {
    exibirMaiorNumero,
    exibirDivisivelPor5
}

function calcularMaiorNumero(numero1, numero2){
    
    let maior = numero1 > numero2 ? numero1 : numero2;

    return maior
}

function exibirMaiorNumero() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = calcularMaiorNumero(numero1, numero2)

    document.getElementById("resultado-maior-numero").textContent = resultado
}

function calcularDivicivelPor5(numero){

    let resultado = numero % 5 === 0 ? "O número é divisível por 5." : "O número não é divisível por 5.";

    return resultado
}

function exibirDivisivelPor5() {
    let numero = parseFloat(document.getElementById("numero").value);
    
    let resultado = calcularDivicivelPor5(numero)
    
    document.getElementById("resultado-divisivel").textContent = resultado;
}
