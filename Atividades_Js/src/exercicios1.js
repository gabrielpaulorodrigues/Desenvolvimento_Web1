const { default: test } = require("node:test")

module.exports = { listaCompras, atualizarDOM }

function listaCompras(){

    const lista_compras = []

    document.getElementById('menu').innerHTML =  `Menu de opções:<br>
    1. Adicionar item<br>
    2. Remover item<br>
    3. Mostrar lista de compras<br>
    4. Sair`;

    let escolha = document.getElementById('escolha').value

    if(escolha == '1'){

        let item = document.getElementById('item').value

        lista_compras.push(item)

        document.getElementById('lista-compras').innerHTML = lista_compras.join(', ')
   
    } else if (escolha == '2'){
        
        let item = document.getElementById('item').value

        let remover_indice = lista_compras.indexOf(item)

        lista_compras.splice(remover_indice, 1)

        document.getElementById('lista-compras').innerHTML = lista_compras.join(', ')
    }
}


const lista_compras = [];
function atualizarDOM(escolha, item) {
   

    if (escolha === '1') {
       
        lista_compras.push(item);

        document.getElementById('lista-compras').innerHTML = lista_compras.join(', ') 
        
    }else if(escolha === '2'){

        let remover_indice = lista_compras.indexOf(item)

        lista_compras.splice(remover_indice, 1)

        document.getElementById('lista-compras').innerHTML = lista_compras.join(', ')

    }
}


