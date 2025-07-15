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
    M = 1
    Resul = 0 
    let lista = []
    while( M <= 5 ){
    let N = parseInt(prompt("ingrese 5 numeros del 1 al 10"))
    lista.push(N)
    Resul += N
    M++
    }
    document.getElementById("resultado").innerHTML = `<p>los Numeros que colocaste son :</p><br> 
    <strong>${lista.join(" - ")}</strong>`
        alert("La suma de tus numeros es :"+Resul)
}

// ✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
// Usa un for para mostrar en pantalla solo los números pares del 1 al 20.



function NumerosPares(){
    let Num = [];
    for(let i = 1; i <= 20; i++ ){
        if( i % 2===0){
            Num.push(i)
        }
    };
    document.getElementById("resultado").innerHTML = `<div><p>Número pares del 1 al 20:</p>
    <strong><p><br>${Num.join(" - ")}</p></strong></div>`
}

// ✅ Ejercicio 4: Contador regresivo con condición
// Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".}

function CuentaRegresiva(){
    let n = parseInt(prompt("ingrese un numero para la cuenta regresiva"))
    let Resultado = ""
    if (n < 0 || isNaN(n)) {
        alert("Numero no valido");
    }
    while(n >= 0){
        Resultado += `${n} `;    
        n--;
    };
        document.getElementById("resultado").innerHTML = `<div><p>los numeros en cuenta regresiva son : </p><strong><p><br>${Resultado.trim()}</p></strong></div>`
}

// ✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
// Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.

function TablasDeMultiplicar(){
    let tablas = document.getElementById("resultado");
    let n = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));
    let resultado = [];
        // definir contador  condicion   incremetador 
    for(let i = 1; i <= 10; i++){
    let mult = n * i;
    resultado.push(mult);
    console.log("resultado")
    let parrafo = document.createElement("p");
 /*   parrafo.className = "elementoTabla"; */
    parrafo.textContent = `${n} x: ${i} = ${mult}`;
    tablas.appendChild(parrafo);
    };
}

// ✅ Ejercicio 6: Sumar hasta que se ingrese cero
// Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.

    
function SumarHastaCero(){
    let Acumulador = []
    let suma = 0 
    let NumU = parseInt(prompt("ingrese un numero para sumarlo (ingrese cero para terminarlo) :"))
    while(true){
        
    }
}