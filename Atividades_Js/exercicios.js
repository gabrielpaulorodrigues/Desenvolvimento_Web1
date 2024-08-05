function encontrarMaior(){                  
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    let maior;
    if (numero1 > numero2){                 // Função para encontrar o maior número entre dois números
        maior = numero1;
    } else if (numero2 > numero1){
        maior = numero2;
    } else {
        maior = 'Os números são iguais';
    }
    document.getElementById('exercicio1').textContent = 'O maior número é: ' + maior;
}

function positivoNegativo(){
    var numero1 = parseFloat(document.getElementById('numero1').value);

    let resultado;
    if (numero1 > 0){
        resultado = 'positivo'
    }
    else if (numero1 < 0){
       resultado = 'negativo'
    }
    else {
       resultado = 'zero'
    }

    document.getElementById('exercicio2').textContent = 'O número é: ' + resultado

}