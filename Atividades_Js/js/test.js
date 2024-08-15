const prompt = require("prompt-sync")();
const {
    proposta,
    numeroCurtidas,
    numeroTweets,
    notaFinal} = require("./exercicios2");

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

function testTweets(){

    let tweets = prompt('Digite o número de tweets')

    let resultado = numeroTweets(tweets)

    console.log(resultado)
}

function testNotafinal(){

    let nota_inicial = prompt('Digite a nota inicial')

    let tweets = prompt('Digite o número de tweets')

    let nota_final = notaFinal(nota_inicial, tweets)

    console.log(nota_final)

}

testTweets()