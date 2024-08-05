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
    var letra = document.getElementById('letra').value;

    let resultado

    letra = letra.toUpperCase();
    if (letra == 'M'){                  // Função para ver se a letra é masculino ou feminino
        resultado = 'Masculino';
    }
    else if (letra == 'F'){
        resultado = 'Feminino';
    }
    else {
        resultado = 'Sexo inválido';
    }

    document.getElementById('exercicio3').textContent = 'O sexo é: ' + resultado
}

function vogalConsoante(){
    var letra = document.getElementById('letra').value;

    let resultado
    letra = letra.toUpperCase()
    if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
        resultado = 'Vogal'}
    else{
        resultado = 'Consoante'
    }

    document.getElementById('exercicio4').textContent = 'A letra é: ' + resultado
}

function divisivel(){
    var numero = parseFloat(document.getElementById('numero').value);

   var resto = numero % 5
    
   let resultado
    if(resto == 0){
        resultado = 'O número '  + numero +  ' é divisível por 5'
    }
    else{
         resultado = 'O número '  + numero +  ' não é divisível por 5'
    }

    document.getElementById('exercicio5').textContent = resultado
}