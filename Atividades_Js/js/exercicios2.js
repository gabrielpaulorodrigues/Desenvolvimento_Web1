function proposta(valorProposta){
    
    let resultado

    if (typeof document !== 'undefined') {
       let proposta = parseFloat(document.getElementById('proposta').value);
        resultado = proposta - 170.00 // 170.00 valor do ingresso
    } else {
        valorProposta = parseFloat(valorProposta);
        resultado = valorProposta - 170.00 // 170.00 valor do ingresso
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

module.exports = {proposta}; 