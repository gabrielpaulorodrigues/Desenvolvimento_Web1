
function testProposta() {
    
    document.body.innerHTML = `
      <input id="proposta" value="200" />
      <div id="exercicio21"></div>
    `;
  
    
    const { proposta } = require('../src/exercicios2');
  
    const input_proposta = document.getElementById('proposta')
    const output_proposta = document.getElementById('exercicio21');

    expect(input_proposta).not.toBeNull();
    expect(output_proposta).not.toBeNull();
    
    proposta();
  
  
    const resultado = output_proposta.textContent;
    expect(resultado).toBe('30'); // 200 - 170 = 30
  }

function testNumeroCurtidas() {
  
    document.body.innerHTML = `
      <input id="dias" value="5" />
      <div id="exercicio22"></div>
    `;
  
    
    const { numeroCurtidas } = require('../src/exercicios2');
  
    
    const diasInput = document.getElementById('dias');
    const exercicio22Div = document.getElementById('exercicio22');
  
    expect(diasInput).not.toBeNull();
    expect(exercicio22Div).not.toBeNull(); 
  
   
    numeroCurtidas();
  
   
    const resultado = exercicio22Div.textContent;
    expect(resultado).toBe('240'); // 5 * 48 = 240
  }
  
function testnumeroTweets(){

    document.body.innerHTML = `
      <input id="tweets" value="10" />
      <div id="exercicio23"></div>
    `;

    const {numeroTweets} = require('../src/exercicios2')

    const input_tweets = document.getElementById('tweets')
    const output_tweets =  document.getElementById('exercicio23')

    expect (input_tweets).not.toBeNull();
    expect (output_tweets).not.toBeNull();

    numeroTweets()

    const resultado = output_tweets.textContent;
    expect(resultado).toBe('Resultado: 800') // 10 * 80 = 80
}

function testNotaFinal(){

    document.body.innerHTML = `
   <input id="nota_inicial" value="10" />
   <input id="tweets" value="2" />
   <div id="exercicio24"></div>
  `;

  const {notaFinal} = require('../src/exercicios2')

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

function testTempoSono() {

  document.body.innerHTML = `
    <input id="minutos_sono_homem" value="90" />
    <input id="minutos_sono_mulher" value="110" />
    <div id="exercicio25"></div>
  `;

  const {tempoSono} = require('../src/exercicios2')

  const input_minutos_sono_homem = document.getElementById('minutos_sono_homem');
  const input_minutos_sono_mulher = document.getElementById('minutos_sono_mulher');
  
  const output_resultado = document.getElementById('exercicio25');

  expect(input_minutos_sono_homem).not.toBeNull();
  expect(input_minutos_sono_mulher).not.toBeNull();
  expect(output_resultado).not.toBeNull();

  tempoSono();

  const resultado = output_resultado.textContent;
  expect(resultado).toBe('1:30 , 1:50');
}

function testProcessarNumeros() {
  document.body.innerHTML = `
      <input id="numero" value="8234-234-32-2-56-7" />
      <div id="exercicio26"></div>
  `;

  const { processarNumeros } = require('../src/exercicios3');

  let resultado = processarNumeros();

  console.log(resultado)

  console.log(Array.isArray(resultado));
}


function testlistaImparPar() {
  document.body.innerHTML = `
      <input id="numero" value="121212" />
      <div id="exercicio27"></div>
  `;

  const { listaImparPar } = require('../src/exercicios3');

  let resultado = listaImparPar();

  console.log(resultado)

  console.log(Array.isArray(resultado))

}

function testSomaIntervalo(){

  document.body.innerHTML = `
      <input id="numeros" value="10,20" />
      <div id="exercicio28"></div>
  `;

  const {somaIntervalo} = require('../src/exercicios4');

  let resultado = somaIntervalo()

  console.log(resultado)

  console.log(typeof resultado)
}


function testDiasSemana(){
  document.body.innerHTML = `
  <input id="dias" value="1" />
  <div id="exercicio29"></div>
`;

const {diaSemana} = require('../src/exercicios4');

let resultado = diaSemana()

console.log(resultado)

console.log(typeof resultado)

}