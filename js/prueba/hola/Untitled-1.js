
// Ejercicio 1 
// function calcularSumarHastaN(){
//     let numero = parseInt(prompt("Ingresa un Numero:"));
//     let total = 0;
//     for (let i = 1; i<= numero; i++){
//         total += i;
//         console.log("i:", i, "total:", total);
//     }

//     alert("La suma de 1 hasta " + numero + " es: " + total);
//     return total;
// }

//     let resultado = calcularSumarHastaN();
//     console.log("Resultado final: ", resultado);


// Ejercicio 2  
//Crea un programa en JavaScript que cumpla los siguientes requisitos:
// Debe existir un input de texto en HTML donde el usuario ingrese un número.
// Un botón debe ejecutar una función que reciba como parámetro el número 
// ingresado y retorne todos los números impares desde 1 hasta el número dado.
// El resultado debe mostrarse con alert y en la consola usando console.log.
// Usa for, if y lógica con return para generar los valores.
console.log("Prueba de js..")

function NumerosImpar(Num) {
    let resultado = []
    for (let i = 1; i <= Num; i++) {
        if (i % 2 ==! 0) {
            resultado.push(i);
        }
        console.log(resultado)
    }
    return resultado
}

function mostrarNumerosImpar() {
    let Num = parseInt(prompt("Ingresa un Numero:"));
    let numeros = NumerosImpar(Num);
    if (numeros.length === 0) {
        document.getElementById("resultado1").innerText = "No se encontraron Impares.";
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }
}
