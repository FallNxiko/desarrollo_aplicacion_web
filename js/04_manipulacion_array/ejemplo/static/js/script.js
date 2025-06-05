// creacion de Arreglos

let array = ["Xbox", "Nintendo"];

// crear Funciones
function usarPush(){
    // Agregar al final
let entreda = prompt ("Agregar una Consola: " )
array.push (entreda);
alert("El nuevo arreglo es: " + array.join(" - "))
}

function usarPop(){
// elimina el ultimo  elemento (vamos a alamcenar el dato eliminado)
let basurero = array.pop();

alert(`Elemento eliminado: ${basurero}`);

}


function usarUnshift(){
 // Agregar al inicio
let entreda = prompt ("Agregar una Consola: " )
array.unshift (entreda);
alert("El nuevo arreglo es: " + array.join(" - "))
}


function usarShift(){
// elimina el primer  elemento (vamos a alamcenar el dato eliminado)
let basurero = array.shift();

alert(`Elemento eliminado: ${basurero}`);

}