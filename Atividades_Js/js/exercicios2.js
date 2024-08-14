module.exports = {
    proposta,
    numeroCurtidas,
    numeroTweets,
    notaFinal}; 

function proposta(valorProposta){
    
    let resultado

    if (typeof document !== 'undefined') {
       let proposta = parseFloat(document.getElementById('proposta').value);
        resultado = proposta - 170.00 
    } else {
        valorProposta = parseFloat(valorProposta);
        resultado = valorProposta - 170.00 
    }  

    if(resultado < 0){
        resultado = 'A venda não vale a pena, você terá um prejuizo de: - ' + (-resultado).toFixed(2)
    }
    else if(resultado == 0){
        resultado = 'A venda não vale a pena você não irá ganhar nada'
    }
    else{
        resultado = 'A venda valerá a pena você irá receber: ' + resultado.toFixed(2)
    }

    if (typeof document !== 'undefined') {
        document.getElementById('exercicio21').textContent = resultado;
    }
    else{
        return resultado; 
    }

    
}

function numeroCurtidas(dias){

    let resultado

    if(typeof document !== 'undefined'){
        dias = parseInt(document.getElementById('dias').value);
        resultado = dias * 48
    }
    else{
        dias = parseInt(dias)
        resultado = dias * 48
    }

    if(typeof document !== 'undefined'){
        document.getElementById('exercicio22').textContent = resultado;
    }
    else{
        return resultado;
    }


}

function numeroTweets(tweets){

    let resultado

    if(typeof document !== 'undefined'){
        tweets = parseInt(document.getElementById('tweets').value);
        resultado = tweets * 80
        document.getElementById('exercicio23').textContent = resultado;
    }
    else{
        tweets = parseInt(tweets);
        resultado = tweets * 80
        return resultado;
    }

}

function notaFinal(nota_inicial, tweets){

    if(typeof document !== 'undefined'){
    
     nota_inicial = parseFloat(document.getElementById('nota_inicial').value);
     tweets = parseInt(document.getElementById('tweets').value);
     let nota_perdida = Math.floor(numeroTweets(tweets) / 100);
    
     let nota_final = parseFloat(nota_inicial - nota_perdida)

     document.getElementById('exercicio24').textContent = nota_final
    
    }  
    else{

        let nota_perdida = Math.floor(numeroTweets(tweets) / 100);

        let nota_final = parseFloat(nota_inicial - nota_perdida)

        return nota_final
    }

}

