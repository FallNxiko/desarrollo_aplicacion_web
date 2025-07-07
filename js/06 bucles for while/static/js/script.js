console.log (hola)
// ✅ Ejercicio 1: Contador del 1 al N
// Pide al usuario un número con prompt() y usa un for para mostrar los números del 1 hasta ese número.

function contarHastaN (){
    let n = parseInt(prompt("Ingresa el numero hasta donde quieres contar"))
    let numeros = [];
    // Bucle for contar hasta  N
    for (let i = 1; i <=n; i++){
        numeros.push(i);
    }
    document.getElementById("resultado").innerHTML = `<p>El conteo es el siguiente:</p><br> 
    <strong>${numeros.join(" - ")}</strong>`
}


// ✅ Ejercicio 2: Suma de 5 números
// Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla.


function SumaDe5Números(){
    let N = parseInt(prompt("ingrese 5 numeros del 1 al 10"))
    N = 0
    for(){
        
    }
}