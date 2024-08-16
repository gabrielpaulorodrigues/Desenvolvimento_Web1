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
  

test('deve calcular e exibir a diferença corretamente', runTest);


function runTestNumeroCurtidas() {
    // Configura o DOM simulado
    document.body.innerHTML = `
      <input id="dias" value="5" />
      <div id="exercicio22"></div>
    `;
  
    // Importa a função a ser testada
    const { numeroCurtidas } = require('./exercicios2');
  
    // Verifica se os elementos estão no DOM
    const diasInput = document.getElementById('dias');
    const exercicio22Div = document.getElementById('exercicio22');
  
    expect(diasInput).not.toBeNull(); // Verifica se o input está presente
    expect(exercicio22Div).not.toBeNull(); // Verifica se o div está presente
  
    // Chama a função numeroCurtidas
    numeroCurtidas();
  
    // Verifica o resultado esperado
    const resultado = exercicio22Div.textContent;
    expect(resultado).toBe('240'); // 5 * 48 = 240
  }
  
  // Executa o teste
  test('deve calcular e exibir a quantidade de curtidas corretamente', runTestNumeroCurtidas);
  