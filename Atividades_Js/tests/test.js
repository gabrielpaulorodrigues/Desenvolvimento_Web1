function testListaCompras(){
  
const { atualizarDOM } = require('../src/exercicios1');


  document.body.innerHTML = `
  <div id="menu"></div>
  <div id="lista-compras"></div>
`;

  test('deve atualizar o DOM corretamente com a lista de compras quando a escolha é 1', () => {
    
    const escolha = '1';
    const item = ['laranja', ' Pera'];

    // Atualiza o DOM com base na escolha e item fornecidos
    atualizarDOM(escolha, item);

    expect(document.getElementById('lista-compras').innerHTML).toBe('laranja, Pera');

    console.log(document.getElementById('lista-compras').innerHTML)
  
  });

  test('deve atualizar o DOM corretamente com a lista de compras quando a escolha é 2', () => {

    const escolha = '2'
    const item = 'laranja';

    atualizarDOM(escolha, item)

    expect(document.getElementById('lista-compras').innerHTML).toBe('')

    console.log(document.getElementById('lista-compras').innerHTML)

  });

}

testListaCompras()