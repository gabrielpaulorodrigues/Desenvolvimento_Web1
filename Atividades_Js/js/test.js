// proposta.test.js

// Função que configura o DOM e executa o teste
function runTest() {
    // Configura o DOM simulado
    document.body.innerHTML = `
      <input id="proposta" value="200" />
      <div id="exercicio21"></div>
    `;
  
    // Importa a função a ser testada
    const { proposta } = require('./exercicios2');
  
    // Verifica se os elementos estão no DOM
    const exercicio21Div = document.getElementById('exercicio21');

    // Chama a função proposta
    proposta();
  
    // Verifica o resultado esperado
    const resultado = exercicio21Div.textContent;
    expect(resultado).toBe('30'); // 200 - 170 = 30
  }
  
  // Executa o teste
  test('deve calcular e exibir a diferença corretamente', runTest);
  