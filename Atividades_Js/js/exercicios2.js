
module.exports = {proposta,
    numeroCurtidas,
    numeroTweets,
    notaFinal
}

function proposta(){
    
    let resultado

    let proposta = parseFloat(document.getElementById('proposta').value);
    resultado = proposta - 170.00 
    document.getElementById('exercicio21').textContent = resultado;  
}

function numeroCurtidas(dias){

    let resultado
    dias = parseInt(document.getElementById('dias').value);
    resultado = dias * 48
  
    document.getElementById('exercicio22').textContent = resultado;

}

function numeroTweets(tweets){

        let resultado

        tweets = parseInt(document.getElementById('tweets').value);
        resultado = tweets * 80
       
        let elemento = document.getElementById('exercicio23');
       
        // Verifica se o elemento com o ID especificado existe na página
        if (elemento) {      
            // Se o elemento existir, atualiza seu conteúdo de texto com o resultado        
            elemento.textContent = 'Resultado: ' + resultado;
        }   
        // Retorna o valor calculado de 'resultado', independentemente de o elemento existir ou não                                                 
        return resultado

    }

function notaFinal(nota_inicial, tweets){

        nota_inicial = parseFloat(document.getElementById('nota_inicial').value);
     
        tweets = parseInt(document.getElementById('tweets').value);
     
        let nota_perdida = Math.ceil(numeroTweets(tweets) / 100);
    
        let nota_final = parseFloat(Math.max(nota_inicial - nota_perdida, 0))

        document.getElementById('exercicio24').textContent = nota_final

}


function tempoSono(){

    pessoa1_sono = parseFloat(document.getElementById('pessoa1_sono').value)
    pessoa2_sono = parseFloat(document.getElementById('pessoa2_sono').value)

    tempo_filme_romantico = parseFloat(document.getElementById('tempo_filme').value)



}


