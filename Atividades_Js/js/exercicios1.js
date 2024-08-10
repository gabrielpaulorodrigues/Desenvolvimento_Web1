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
    letra = letra.toUpperCase()                         // Função para ver se a letra é vogal ou consoante 
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
    
   let resultado                         // Função para ver se o número é divisivel por 5
    if(resto == 0){                                             
        resultado = 'O número '  + numero +  ' é divisível por 5'
    }
    else{
         resultado = 'O número '  + numero +  ' não é divisível por 5'
    }

    document.getElementById('exercicio5').textContent = resultado;
}

function intervalo(){

    var numero = parseFloat(document.getElementById('numero').value);

    let resultado

    if(numero > 20 && numero < 90){
        resultado = ' Está no intervalo'
    }
    else{
        resultado = ' Não está no intervalo'
    }

    document.getElementById('exercicio6').textContent = numero + resultado
}

function idade(){

    let ano = parseInt(document.getElementById('ano').value);
    let ano_nascimento = parseInt(document.getElementById('ano_nascimento').value)

    let verificacao_idade = ano - ano_nascimento

    let resultado

    if(verificacao_idade < 18){
        resultado = 'Não pode votar'
    }
    else{resultado = 'Pode votar'

    }

    document.getElementById('exercicio7').textContent = resultado
}

function media(){

    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)

    let media = (nota1 + nota2) / 2

    let resultado = '';

    if(media >= 6){
        resultado = 'O aluno foi aprovado com média: ' + media 
    }
    else{
        resultado = 'O aluno foi reprovado com média: ' + media
    }

    document.getElementById('exercicio8').textContent = resultado

}


function maiorSalario(){

    let hora_professor1 = parseFloat(document.getElementById('hora_professor1').value)
    let valor_professor1 = parseFloat(document.getElementById('valor_professor1').value)

    let hora_professor2 = parseFloat(document.getElementById('hora_professor2').value)
    let valor_professor2 = parseFloat(document.getElementById('valor_professor2').value)

    let salario_professor1 = hora_professor1 * valor_professor1
    let salario_professor2 = hora_professor2 * valor_professor2

    let resultado = '';

    if(salario_professor1 > salario_professor2){
        resultado = 'O professor 1 recebe mais: ' + salario_professor1.toFixed(2);
    }
    else if(salario_professor1 < salario_professor2){
        resultado = 'O professor 2 recebe mais: ' + salario_professor2.toFixed(2);
    }
    else{
        resultado = 'Os dois tem o mesmo salário: ' + salario_professor1.toFixed(2);
    }

    document.getElementById('exercicio9').textContent = resultado

}

function imparPar(){

    let numero = parseInt(document.getElementById('numero').value);

    let resultado = '';

    if(numero % 2 == 0){
        resultado = 'O número ' + numero + ' é par'
    }
    else{
        resultado = 'O número ' + numero + ' é impar'
    }

    document.getElementById('exercicio10').textContent = resultado


}

////////////////////////////////////////// lista 2 

function proposta(){

    let proposta = parseFloat(document.getElementById('proposta').value);   

    let resultado = proposta - 170.00 // 170.00 valor do ingresso

    if(resultado < 0){
        resultado = 'A venda não vale a pena, você terá um prejuizo de: ' + resultado
    }
    else if(resultado = 0){
        resultado = 'A venda não vale a pena você não irá ganhar nada'
    }
    else{
        resultado = 'A venda valerá a pena você irá receber: ' + resultado
    }

    documents.getElementById('exercicio21').textContent = resultado
}