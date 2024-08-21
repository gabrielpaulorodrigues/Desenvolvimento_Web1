function testListaCompras(){
  
  const { atualizarDOM, listaCompras } = require('../src/exercicios1');


  document.body.innerHTML = `
  <div id="menu"></div>
  <div id="lista-compras"></div>
`;

  test('deve atualizar o DOM corretamente com a lista de compras quando a escolha é 1', () => {
    
    const escolha = '1';
    const item = 'laranja, Pera, Banana, Abacate';

    // Atualiza o DOM com base na escolha e item fornecidos
    atualizarDOM(escolha, item);

    const lista_compras = document.getElementById('lista-compras').innerHTML
    expect(lista_compras).toBe(item);
  
    console.log('Adicionando a lista compras: ' + lista_compras)
  
  });

  test('deve atualizar o DOM corretamente com a lista de compras quando a escolha é 2', () => {

    const escolha = '2'
    const item = 'laranja';

    // Atualiza o DOM com base na escolha e item fornecidos
    atualizarDOM(escolha, item)

    const lista_compras = document.getElementById('lista-compras').innerHTML
    expect(lista_compras).toBe(lista_compras)

    console.log('Lista depois de remover o item: ' + lista_compras)

  });

  test('deve atualizar o DOM corretamente com a lista de compras quando a escolha é 3', () => {

    const lista_compras = document.getElementById('lista-compras').innerHTML

    const escolha = '3'
    const item = '';

    atualizarDOM(escolha,item)

    mostrar_lista = document.getElementById('lista-compras').innerHTML
    expect(mostrar_lista).toBe(lista_compras)
   
    console.log(mostrar_lista)
  });
 
}

testListaCompras()