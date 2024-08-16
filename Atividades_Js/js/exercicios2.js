
module.exports = {proposta,
    numeroCurtidas
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

    if(typeof document !== 'undefined'){
        tweets = parseInt(document.getElementById('tweets').value);
        resultado = tweets * 80
       
        const elemento = document.getElementById('exercicio23');
       
        // Verifica se o elemento com o ID especificado existe na página
        if (elemento) {      
            // Se o elemento existir, atualiza seu conteúdo de texto com o resultado        
            elemento.textContent = 'Resultado: ' + resultado;
        }   
        // Retorna o valor calculado de 'resultado', independentemente de o elemento existir ou não                                                 
        return resultado
    }
    else{
      
        tweets = parseInt(tweets);
        
        resultado = tweets * 80
       
        return parseInt(resultado);
    }

}

function notaFinal(nota_inicial, tweets){


    if(typeof document !== 'undefined'){
    
        nota_inicial = parseFloat(document.getElementById('nota_inicial').value);
     
        tweets = parseInt(document.getElementById('tweets').value);
     
        let nota_perdida = Math.floor(numeroTweets(tweets) / 100);
    
        let nota_final = parseFloat(nota_inicial - nota_perdida)

        document.getElementById('exercicio24').textContent = 'nota = ' + nota_final
        
    }  
    else{

        let nota_perdida = Math.floor(numeroTweets(tweets) / 100);

        let nota_final = parseFloat(Math.max(nota_inicial - nota_perdida, 0))

        return nota_final
    }

}



