import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

test("Teste do exercicio calcular diferença", () => {
  const { exibirDiferenca } = require("../src/exercicios1");

  document.body.innerHTML = `
      <input id="proposta" data-testid = "proposta" value = "170" />
      <div id="resultado-proposta" data-testid = "resultado-proposta"></div>
    `;
  
  exibirDiferenca();

  expect(screen.getByTestId('proposta')).toHaveValue('170');
  expect(screen.getByTestId('resultado-proposta')).toHaveTextContent('0');

  });

test('Teste do exercicio calcular nota final', () => {

  const { exibirNotaFinal } = require('../src/exercicios1')

  document.body.innerHTML = `
  <input id="nota-inicial" data-testid = "nota-inicial" value = "100" />
  <input id="tweets-ano" data-testid = "tweets-ano" value = "100" />
  <div id="resultado-nota-final" data-testid = "resultado-nota-final" ></div>

`;

exibirNotaFinal()

expect(screen.getByTestId('nota-inicial')).toHaveValue('100');
expect(screen.getByTestId('tweets-ano')).toHaveValue('100');

expect(screen.getByTestId('resultado-nota-final')).toHaveTextContent('99');

});
