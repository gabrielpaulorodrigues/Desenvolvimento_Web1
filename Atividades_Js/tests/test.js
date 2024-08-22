import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';

function testExibirDiferenca(){
describe('Função exibirDiferenca, lista exericio 1', () => {
test('Deve exibir a diferença correta entre o valor de entrada e 170', () => {
  const { exibirDiferenca } = require("../js/exercicios1");

  document.body.innerHTML = `
      <input id="proposta" data-testid = "proposta"/>
      <div id="resultado-proposta" data-testid = "resultado-proposta"></div>
    `;
  
  // Define o valor do input 'proposta' como '170'
  const proposta = document.getElementById('proposta').value = '170' 

  exibirDiferenca();

  // Verifica se o valor do input é '170'
  expect(screen.getByTestId('proposta')).toHaveValue(proposta);

  // Verifica se o conteúdo do div é '0' (diferença entre 170 e 170)
  expect(screen.getByTestId('resultado-proposta')).toHaveTextContent('0');

  });

});
}

function testExibirNotaFinal(){
describe('Função exibirNotaFinal, lista exericio 1', () => {
test('Deve calcular e exibir a nota final corretamente com base na entrada do usuário', () => {

  const { exibirNotaFinal } = require('../js/exercicios1')

  document.body.innerHTML = `
  <input id="nota-inicial" data-testid = "nota-inicial"/>
  <input id="tweets-ano" data-testid = "tweets-ano"/>
  <div id="resultado-nota-final" data-testid = "resultado-nota-final" ></div>

`;

const nota_inicial = document.getElementById('nota-inicial').value = '100'
const tweets_ano = document.getElementById('tweets-ano').value = '100'

exibirNotaFinal()

expect(screen.getByTestId('nota-inicial')).toHaveValue(nota_inicial);
expect(screen.getByTestId('tweets-ano')).toHaveValue(tweets_ano);

expect(screen.getByTestId('resultado-nota-final')).toHaveTextContent('99');

  });
});
}
function testExibirMaiorNumero(){
describe('Função exibirMaiorNumero, lista exericio 2', () => {
test('Deve calcular e exibir o maior número corretamente com base na entrada do usuário', () => {

const { exibirMaiorNumero } = require('../js/exercicios2')

  document.body.innerHTML = `
  <input id="numero1" data-testid = "numero1"/>
  <input id="numero2" data-testid = "numero2"/>
  <div id="resultado-maior-numero" data-testid = "resultado-maior-numero" ></div>
`;

const numero1 = document.getElementById('numero1').value = '100'
const numero2 = document.getElementById('numero2').value = '99'

exibirMaiorNumero()

expect(screen.getByTestId('numero1')).toHaveValue(numero1);
expect(screen.getByTestId('numero2')).toHaveValue(numero2);

expect(screen.getByTestId('resultado-maior-numero')).toHaveTextContent('100');

})
})
}
function testExibirDivisivelPor5(){
describe('Função exibirDivisivelPor5, lista exericio 2', () => {
  test('Deve calcular e exibir se o número é divisivel corretamente com base na entrada do usuário', () => {
  
  const { exibirDivisivelPor5 } = require('../js/exercicios2')
  
    document.body.innerHTML = `
    <input id="numero" data-testid = "numero"/>
    <div id="resultado-divisivel" data-testid = "resultado-divisivel" ></div>
  `;
  
  const numero = document.getElementById('numero').value = '100'
  
  exibirDivisivelPor5()
  
  expect(screen.getByTestId('numero')).toHaveValue(numero);
  
  expect(screen.getByTestId('resultado-divisivel')).toHaveTextContent('O número é divisível por 5.');
  
  })
})
}

function testExibirListaNumeros(){

describe('Função exibirProcessarNumeros, lista exericio 3', () => {
  test('Deve calcular e exibir a média dos números positivos e os números negativos do input', () => {

  const { exibirListaNumeros } = require('../js/exercicios3')

  document.body.innerHTML = `
  <input id="numero-input" data-testid = "numero-input"/>
  <div id="resultado-negativos" data-testid = "resultado-negativos" ></div>
  <div id="resultado-media-positivos" data-testid = "resultado-media-positivos" ></div>
  `;

  const numero_input = screen.getByTestId('numero-input');

  fireEvent.change(numero_input, { target: { value: '1,2,3,4,-5' } });

  exibirListaNumeros()

  // Verifique se o valor do campo de entrada está correto
  expect(screen.getByTestId('numero-input')).toHaveValue('1,2,3,4,-5');
  // Verifique os resultados esperados
  expect(screen.getByTestId('resultado-negativos')).toHaveTextContent('Números negativos: -5');
  expect(screen.getByTestId('resultado-media-positivos')).toHaveTextContent('Média dos positivos: 2.50');
  })
})
}

function testExibirImparPar(){

describe('Função exibirExibirImparPar, lista exericio 3', () => {
   test('Deve calcular e exibir os números impares e pares com base na entrada do usuário', () => {

    const { exibirImparPar } = require('../js/exercicios3')

    document.body.innerHTML = `
    <input id="numero-input" data-testid = "numero-input"/>
    <div id="resultado-pares" data-testid = "resultado-pares" ></div>
    <div id="resultado-impares" data-testid = "resultado-impares" ></div>
    `;

    const numero_input = screen.getByTestId('numero-input');
    
    fireEvent.change(numero_input, { target: { value: '1,2,3,4,5,6' } });

   exibirImparPar()

   expect(screen.getByTestId('numero-input')).toHaveValue('1,2,3,4,5,6');
   // Verifique os resultados esperados
   expect(screen.getByTestId('resultado-pares')).toHaveTextContent('2, 4, 6');
    expect(screen.getByTestId('resultado-impares')).toHaveTextContent('1, 3, 5');
  })
})
}

function testExibirObterNomeMes(){

  describe('Função exibirObterNomeMes, lista exericio 4', () => {
     test('Deve calcular e exibir os números impares e pares com base na entrada do usuário', () => {
  
      const { exibirObterNomeMes } = require('../js/exercicios4')
  
      document.body.innerHTML = `
      <input id="input-numero-mes" data-testid = "input-numero-mes"/>
      <div id="resultado-mes" data-testid = "resultado-mes" ></div>
      `;
  
      const numero_input = screen.getByTestId('input-numero-mes');
      
      fireEvent.change(numero_input, { target: { value: '1' } });
  
    exibirObterNomeMes()
  
     expect(screen.getByTestId('input-numero-mes')).toHaveValue('1');
     // Verifique os resultados esperados
      expect(screen.getByTestId('resultado-mes')).toHaveTextContent('Janeiro');
    
    })
  })
}

function testExibirVerificarDivisibilidade(){

  describe('Função exibirVerificarDivisibilidade, lista exericio 4', () => {
     test('Deve calcular e exibir os números impares e pares com base na entrada do usuário', () => {
  
      const { exibirVerificarDivisibilidade } = require('../js/exercicios4')
  
      document.body.innerHTML = `
      <input id="input-numero1" data-testid = "input-numero1"/>
      <input id="input-numero2" data-testid = "input-numero2"/>
      <div id="resultado-divisibilidade" data-testid = "resultado-divisibilidade" ></div>
      `;
  
      const input_numero1 = screen.getByTestId('input-numero1');
      const input_numero2 = screen.getByTestId('input-numero2');
      
      fireEvent.change(input_numero1, { target: { value: '10' } });
      fireEvent.change(input_numero2, { target: { value: '2' } });
  
      exibirVerificarDivisibilidade()
  
     expect(screen.getByTestId('input-numero1')).toHaveValue('10');
     expect(screen.getByTestId('input-numero2')).toHaveValue('2');
     // Verifique os resultados esperados
      expect(screen.getByTestId('resultado-divisibilidade')).toHaveTextContent('É divisivel');
    
    })
  })
}


const testes = [testExibirDiferenca, testExibirNotaFinal, testExibirMaiorNumero, testExibirDivisivelPor5, testExibirListaNumeros, testExibirImparPar, testExibirObterNomeMes, testExibirVerificarDivisibilidade]

testes.forEach(teste => teste());