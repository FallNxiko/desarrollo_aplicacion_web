// inicio de la funcion 

function NumerosPar(Numero) {
    let resultado = [] //declarando un array vacio
    // ciclo for que recorre los numeros del 1 al numero ingresado
    // y verifica si son pares
    for (let i = 1; i <= Numero; i++) {
        if (i % 2 === 0) {
            resultado.push(i);
        }
        console.log(resultado)
    }
    // retorna un dato si se cumple la condicion 
    return resultado
}

// fin de la funcion
function mostrarNumerosPar() {
    let Numero = parseInt(prompt("Ingresa un Numero:"));
    let numeros = NumerosPar(Numero);
    if (numeros.length === 0) {
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }
}
