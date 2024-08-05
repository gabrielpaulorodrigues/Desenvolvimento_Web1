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
    if (numero1 > 0){                              // Função para ver se o número é positivo ou negativo
        resultado = 'Positivo'
    }
    else if (numero1 < 0){
       resultado = 'Negativo'
    }
    else {
       resultado = 'Zero'
    }

    document.getElementById('exercicio2').textContent = 'O número é: ' + resultado

}

function masculinoFeminino(){
    var letra = (document.getElementById('letra').value);

    let resultado
    if (letra === M || letra === m){
        resultado = "Masculino" }
    else if (letra === F || letra === f){
        resultado = "Feminino"}
    else {resultado = "Sexo invalido"}

    document.getElementById('exercicio3').textContent = 'O sexo é:' + resultado
}