
module.exports = {processarNumeros} 

function processarNumeros() {

    const positivos = []
    const negativos = []
    let soma_positivos = 0;
    let soma_negativos = 0;

    const numero = document.getElementById('numero').value; 

    const numeros = numero.split("")

    for(let i = 0; i < numeros.length; i++){  
    
        if (numeros[i] == "-"){ 
            negativos.push(parseFloat("-" + numeros[i + 1])); // Concatena o sinal "-" com o próximo elemento e converte para um número negativo
            numeros[i + 1] = "-" + numeros[i + 1];  // Atualiza o próximo elemento na lista 'numeros' para incluir o sinal "-"
            numeros.splice(i, 1);    // Remove o sinal "-" da lista 'numeros'
        }
    }

    for(let i = 0; i < numeros.length; i++){  
    
        if (numeros[i] > 0){
            positivos.push(parseFloat(numeros[i]))  // Converte o elemento para número de ponto flutuante e adiciona à lista 'positivos'
        }
    }

    for (let i = 0; i < positivos.length; i++) {
        soma_positivos += positivos[i];  // Soma todos os números positivos
    }

    for (let i = 0; i < negativos.length; i++) {
        soma_negativos += negativos[i];  // Soma todos os números negativos
    }

    let media_positivos = soma_positivos / positivos.length;

    let media_negativos = soma_negativos / negativos.length;

    return 'Lista: ' + numeros + '\n' + 
    'Positivos: ' + positivos + '\n' + 
    'Negativos: ' + negativos + '\n' + 
    'Média positivos: ' + media_positivos.toFixed(2) + '\n' + 
    'Média negativos: ' + media_negativos.toFixed(2);   

}
