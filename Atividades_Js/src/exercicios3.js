function calcularProcessarNumeros(numeros) {
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

    return {
        negativos,
        mediaPositivos
    };
}

function exibirProcessarNumeros() {
    const numeros = document.getElementById("numeros").value.split(",").map(Number);
    
    const { negativos, mediaPositivos } = processarNumeros(numeros);

    document.getElementById("resultadoNegativos").textContent = "Números negativos: " + negativos.join(", ");
    document.getElementById("resultadoMediaPositivos").textContent = "Média dos números positivos: " + mediaPositivos.toFixed(2);
}

function calculoProcessarImparPar(numeros) {
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

function exibirProcessarImparPar() {
    
    const numeros = document.getElementById("numeros").value.split(",").map(Number);
    const { pares, impares } = processarNumeros(numeros);

    document.getElementById("resultadoPares").textContent = "Números pares: " + pares.join(", ");
    document.getElementById("resultadoImpares").textContent = "Números ímpares: " + impares.join(", ");
}