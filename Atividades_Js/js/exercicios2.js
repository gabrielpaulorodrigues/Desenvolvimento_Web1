function proposta(){

    let proposta = parseFloat(document.getElementById('proposta').value);   

    let resultado = proposta - 170.00 // 170.00 valor do ingresso

    if(resultado < 0){
        resultado = 'A venda não vale a pena, você terá um prejuizo de: - ' + (-resultado).toFixed(2)
    }
    else if(resultado == 0){
        resultado = 'A venda não vale a pena você não irá ganhar nada'
    }
    else{
        resultado = 'A venda valerá a pena você irá receber: ' + resultado.toFixed(2)
    }

    document.getElementById('exercicio21').textContent = resultado
}
