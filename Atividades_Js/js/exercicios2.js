module.exports = {
    proposta,
    numeroCurtidas}; 

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
    let dias

    if(typeof document !== 'undefined'){
        dias = parseInt(document.getElementById('dias').value);
        resultado = dias * 48
    }
    else{
        dias = numeroCurtidas(dias);
        resultado = dias * 48
    }

    if(typeof document !== 'undefined'){
        document.getElementById('exercicio22').textContent = resultado;
    }
    else{
        return resultado
    }


}



