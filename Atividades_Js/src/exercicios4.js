module.exports = { somaIntervalo, diaSemana}

function somaIntervalo(){

   let soma = 0;

   const numeros = Str(document.getElementById('numeros').value)

   const intervalo = numeros.split(",").map(Number)

   if (intervalo[0] > intervalo[1]){
        intervalo.reverse()
   }

   for(let i = intervalo[0]; i <= intervalo[1]; i++){
             soma += i;
   }

   return ' A soma do intervalo: ' + intervalo + ' é ' + soma 

}

function diaSemana(){

    const dias = document.getElementById('dias').value

    let dict_dias = {
        Domingo: '1',
        Segunda: '2',
        Terça: '3',
        Quarta: '4',
        Quinta: '5',
        Sexta: '6',
        Sábado: '7',
    }

    const dict_dias_invertido = {};

    for (const chave in dict_dias) {
        if (dict_dias.hasOwnProperty(chave)) { // Verificar se a propriedade é própria do objeto
            const valor = dict_dias[chave]; // Obter o valor correspondente à chave
            dict_dias_invertido[valor] = chave;   // Inverter chave e valor
        }
    }

    if (dict_dias[dias]){
        
        return 'Esse é o ' + dict_dias[dias] + 'ª dia da semana'

    } else if (dict_dias_invertido[dias]){

        return 'O dia da semana é ' + dict_dias_invertido[dias]

    } else{

        return 'O dia da semana é invalido'

    }

    

}