function calculoObterNomeMes(numero) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (numero < 1 || numero > 12) {
        return "Número inválido. Digite um número de 1 a 12.";
    }

    return meses[numero - 1];
}

// Função que lida com a entrada e exibição
function exibirObterNomeMes() {
    // Captura o valor do input e converte para número
    const numeroMes = parseInt(document.getElementById("numeroMes").value, 10);

    // Obtém o nome do mês ou mensagem de erro
    const resultado = obterNomeMes(numeroMes);

    // Exibe o resultado no DOM
    document.getElementById("resultadoMes").textContent = resultado;
}

function calculoVerificarDivisibilidade(x, y) {
    return x % y === 0 ? 1 : 0;
}

function exibirVerificarDivisibilidade() {
    const x = parseInt(document.getElementById("numero1").value);
    const y = parseInt(document.getElementById("numero2").value);
    const resultado = verificarDivisibilidade(x, y);
    document.getElementById("resultadoDivisibilidade").textContent = resultado === 1 ? `${x} é divisível por ${y}` : `${x} não é divisível por ${y}`;
}