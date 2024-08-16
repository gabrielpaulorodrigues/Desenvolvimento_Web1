
function testProposta() {
    
    document.body.innerHTML = `
      <input id="proposta" value="200" />
      <div id="exercicio21"></div>
    `;
  
    
    const { proposta } = require('./exercicios2');
  
    const input_proposta = document.getElementById('proposta')
    const output_proposta = document.getElementById('exercicio21');

    expect(input_proposta).not.toBeNull();
    expect(output_proposta).not.toBeNull();
    
    proposta();
  
  
    const resultado = output_proposta.textContent;
    expect(resultado).toBe('30'); // 200 - 170 = 30
  }
  

test('deve calcular e exibir a diferença corretamente', testProposta);


function testNumeroCurtidas() {
  
    document.body.innerHTML = `
      <input id="dias" value="5" />
      <div id="exercicio22"></div>
    `;
  
    
    const { numeroCurtidas } = require('./exercicios2');
  
    
    const diasInput = document.getElementById('dias');
    const exercicio22Div = document.getElementById('exercicio22');
  
    expect(diasInput).not.toBeNull();
    expect(exercicio22Div).not.toBeNull(); 
  
   
    numeroCurtidas();
  
   
    const resultado = exercicio22Div.textContent;
    expect(resultado).toBe('240'); // 5 * 48 = 240
  }
  
  test('deve calcular e exibir a quantidade de curtidas corretamente', testNumeroCurtidas);
  
function testnumeroTweets(){

    document.body.innerHTML = `
      <input id="tweets" value="10" />
      <div id="exercicio23"></div>
    `;

    const {numeroTweets} = require('./exercicios2')

    const input_tweets = document.getElementById('tweets')
    const output_tweets =  document.getElementById('exercicio23')

    expect (input_tweets).not.toBeNull();
    expect (output_tweets).not.toBeNull();

    numeroTweets()

    const resultado = output_tweets.textContent;
    expect(resultado).toBe('80') // 10 * 80 = 80
}

test('deve calcular e exibir a quantidade de tweets corretamente', testNumeroCurtidas);

function testNotaFinal(){

    document.body.innerHTML = `
   <input id="nota_inicial" value="10" />
   <input id="tweets" value="2" />
   <div id="exercicio24"></div>
  `;

  const {notaFinal} = require('./exercicios2')

  const input_nota_inicial = document.getElementById('nota_inicial')
  const input_tweets = document.getElementById('tweets')
  const output_nota_final = document.getElementById('exercicio24')

  expect (input_nota_inicial).not.toBeNull();
  expect (input_tweets).not.toBeNull();
  expect (output_nota_final).not.toBeNull();

  notaFinal()

  const resultado = output_nota_final.textContent;
  expect(resultado).toBe('8') 
}

test('deve calcular e exibir a nota final corretamente', testNotaFinal);
