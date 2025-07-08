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
            document.getElementById("resultado").innerHTML = `<p>este numero es par:</p><br><strong>${i.join(" - ")}</strong>`
        }else{
            document.getElementById("resultado").innerHTML = `<p>este numero no es par:</p><br><strong>${i.join(" - ")}</strong>`
        }
    };
    document.getElementById("resultado").innerHTML = `<p>los Numeros que colocaste son :</p><br> 
    <strong>${Num.puch(" - ")}</strong>`
};

