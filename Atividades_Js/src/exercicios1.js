const { default: test } = require("node:test")

module.exports = { listaCompras }

function listaCompras(){

    let listaCompras = []

    document.getElementById('menu').innerHTML = 
    `Menu de opções:<br>
    1. Adicionar item<br>
    2. Remover item<br>
    3. Mostrar lista de compras<br>
    4. Sair`;

    let escolha = document.getElementById('escolha').ariaValueMax

    if(escolha == '1'){

        let item = document.getElementById('item').value

        listaCompras.push(item)

        console.log('Item: ' + item + ' adicionado a lista ')
    } else if (escolha == '2'){

        var opcao = document.getElementById('opcao2').innerHTML = 'Itens' + listaCompras 

        let item = document.getElementById('item').value
        
        listaCompras.indexOf(item)
    }
    

    return opcao
  

}

