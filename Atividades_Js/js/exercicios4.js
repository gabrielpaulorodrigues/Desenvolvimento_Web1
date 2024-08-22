module.exports = {
    exibirObterNomeMes,
    exibirVerificarDivisibilidade
}

function calculoObterNomeMes(numero_mes) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (numero_mes < 1 || numero_mes > 12) {
        return "Número inválido. Digite um número de 1 a 12.";
    }

    return meses[numero_mes - 1];
}

// Função que lida com a entrada e exibição
function exibirObterNomeMes() {
    // Captura o valor do input e converte para número
    const numero_mes = parseInt(document.getElementById("input-numero-mes").value, 10);

    // Obtém o nome do mês ou mensagem de erro
    const resultado = calculoObterNomeMes(numero_mes);

    // Exibe o resultado no DOM
    document.getElementById("resultado-mes").textContent = resultado;
}

function calculoVerificarDivisibilidade(input_numero1, input_numero2) {
    if (input_numero1 % input_numero2 === 0) {
        return 1;
    } else {
        return 0;
    }
}

function exibirVerificarDivisibilidade() {
    const input_numero1 = parseInt(document.getElementById("input-numero1").value);
    
    const input_numero2 = parseInt(document.getElementById("input-numero2").value);

    const resultado = calculoVerificarDivisibilidade(input_numero1, input_numero2);

    if (resultado === 1) {
        document.getElementById("resultado-divisibilidade").textContent = 'É divisivel';
    } else {
        document.getElementById("resultado-divisibilidade").textContent = 'Não é divisivel';
    }
}