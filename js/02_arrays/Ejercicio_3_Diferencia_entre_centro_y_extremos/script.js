console.log("hello word")

function diferenciaCentroExtremos(){
    let numeros =[6, 3, 7, 4, 9, 2, 5, 3, 5, 2 ]
    let extremos =(numeros [0]+ numeros[numeros.length -1]);
    let centro = numeros[4]
    let diferencia = centro - extremos
    alert ("La diferencia entre el centro y los extremos es : \n " + diferencia )
}