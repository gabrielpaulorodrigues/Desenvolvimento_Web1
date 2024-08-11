const prompt = require("prompt-sync")();
const {
    proposta,
    numeroCurtidas} = require("./exercicios2");

function testProposta(){

    let valorProposta = prompt('Digite o valor da proposta');

    let resultado = proposta(valorProposta);

    console.log(resultado);
    
}

function testCurtidas(){
    
    let dias = prompt('Digite o número de dias');

    let resultado = numeroCurtidas(dias);

    console.log(resultado)
}

testProposta();