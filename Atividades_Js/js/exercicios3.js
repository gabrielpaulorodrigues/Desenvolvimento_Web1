module.exports = {
    exibirListaNumeros,
    exibirImparPar
}

function calcularListaNumeros(numeros) {
    let negativos = [];
    let somaPositivos = 0;
    let countPositivos = 0;

    for (let num of numeros) {
        if (num < 0) {
            negativos.push(num);
        } else {
            somaPositivos += num;
            countPositivos++;
        }
    }

    let mediaPositivos = countPositivos > 0 ? somaPositivos / countPositivos : 0;

    return {negativos, mediaPositivos};
}

function exibirListaNumeros() {
    const numeros = document.getElementById("numero-input").value.split(",").map(Number);
    
    const { negativos, mediaPositivos } = calcularListaNumeros(numeros);

    document.getElementById("resultado-negativos").textContent = 'Números negativos: ' + negativos.join(", ");
    document.getElementById("resultado-media-positivos").textContent = 'Média dos positivos: ' + mediaPositivos.toFixed(2);
}



function calculoImparPar(numeros) {
    let pares = [];
    let impares = [];

    for (let num of numeros) {
        if (num % 2 === 0) {
            pares.push(num);
        } else {
            impares.push(num);
        }
    }

    return {
        pares,
        impares
    };
}

function exibirImparPar() {
    
    const numeros = document.getElementById("numero-input").value.split(",").map(Number);
    const { pares, impares } = calculoImparPar(numeros);

    document.getElementById("resultado-pares").textContent = pares.join(", ");
    document.getElementById("resultado-impares").textContent = impares.join(", ");
}