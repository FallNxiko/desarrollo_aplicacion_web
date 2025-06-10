// eje 1 

let compras = []; 
    function listacompras(){
    compras.push("pan", "leche", "huevos")
    alert(`lista de compras: ${compras.join(" - ")}`)
}
// eje 2 
function quitar_elemento (){
    let basurero = compras.pop()
    alert(`El producto eliminado es : ${basurero}`)
}

// eje 3
    let colores = ["rojo", "azul"]
function agregarcolor(){
    let entrada = prompt("se agregara un color :");
    colores.unshift(entrada);
    console.log(colores)
}

// eje 4

function eliminar_color(){
let color_eliminado = colores.shift();
alert(" El color a sido eliminado :" + color_eliminado);
}

// eje 5

let numeros = [ 10, 20, 30]

function agregar_numeros(){
    numeros.push(40)
    alert(`Le agregamos 40 al final`)
    numeros.shift()
    alert(`Le quitamos el primer numero`)
    numeros.unshift(5);
    alert(`le agregmos un 5 al inicio `)
    numeros.pop()
    alert(`eliminimos el utlimo numero`)
    alert(`El arreglo quedo asi ${numeros.join("--> ")}`)
}

// eje 6 

let orden = []

function agregarOrdenInverso (){
    // cremamos una variable
    let num1 = prompt ("ingresa numero 1");
    orden.unshift(num1)
    let num2 = prompt("ingresa numero 2");
    orden.unshift(num2);
    let num3 = prompt("ingresa numero 3");
    orden.unshift(num3)
    
    alert(`Orden inverso: ${orden.join("-->")}`)
}

// eje 7

