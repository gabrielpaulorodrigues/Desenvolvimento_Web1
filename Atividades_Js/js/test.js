const prompt = require("prompt-sync")();
const {proposta} = require("./exercicios2");

function testProposta(){

    let valorProposta = prompt('Digite o valor da proposta');

    let resultado = proposta(valorProposta);

    console.log((resultado));
    
}

testProposta();