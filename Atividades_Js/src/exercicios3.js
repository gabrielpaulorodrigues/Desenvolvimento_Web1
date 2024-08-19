
module.exports = {processarNumeros} 

function processarNumeros() {
  
    const numeros = [] 

    const negativos = []

    const numero = document.getElementById('numero').value; 

    for(let i = 0; i < numero.length; i++){  
       
        if (numero[i] !== '-') {
            numeros.push(numero[i]);
        }
    }
    
    for(let i = 0; i < numero.length; i++){  
    
        if (numero[i] == "-"){ 
            negativos.push("-" + numero[i + 1]);
            i++
        }
    }
    // for(let i = 0; i < numeros.length; i++){
    //     if (numeros[i] > 0){
    //         positivos.push(numeros[i]);
    //     } else if (numeros[i] < 0){
    //         negativos.push(numeros[i]);
    //     }
    // }

    // for(let i = 0; i < numeros.length; i++){
    //     if(numeros[i] > 0){
    //     media_positivos += numeros[i]
    //     } else if (numeros[i] < 0){
    //     media_negativos += numeros[i]
    //     }
    // }
    // media_positivos / numeros.length
    // media_negativos / numeros.length



    // return 'lista: ' + numeros + ' Positivos: ' + positivos + ' Negativos: ' + negativos

    return "Numeros: " + numeros + "Negativos: " + negativos

}
