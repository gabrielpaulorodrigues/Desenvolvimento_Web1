module.exports = {
    exibirDiferenca,
    exibirNotaFinal
};

function calcularDiferenca(valor_pago, proposta) {
  return valor_pago - proposta;
}

function exibirDiferenca() {
  let valor_pago = 170.0;
  let proposta = parseFloat(document.getElementById("proposta").value);
  let resultado = calcularDiferenca(valor_pago, proposta);

  document.getElementById("resultado-proposta").textContent = resultado;
}

function calcularNotaFinal(nota_inicial, tweets_ano) {
  let pontos_perdidos = Math.floor(tweets_ano / 100);
  let nota_final = nota_inicial - pontos_perdidos;
  return nota_final >= 0 ? nota_final : 0;
}

function exibirNotaFinal() {
  let nota_inicial = parseFloat(document.getElementById("nota-inicial").value);
  let tweets_ano = parseInt(document.getElementById("tweets-ano").value);
  let resultado = calcularNotaFinal(nota_inicial, tweets_ano);

  document.getElementById("resultado-nota-final").textContent = resultado;
}
