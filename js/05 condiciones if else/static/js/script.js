// ✅ Ejercicio 1: Verificar mayoría de edad
// Crea una variable edad con un valor numérico.
//  Si la edad es mayor o igual a 18, muestra "Acceso permitido".
//  Si no, muestra "Acceso denegado".

function MayoriaEdad(){
    let Edad =  parseInt(prompt("Ingrese Edad: "));
    if(Edad >= 18){
        document.getElementById("resultado").innerHTML =
        `<p>Acceso permitido: ${Edad} </p>`;
    }else if (Edad <= 17 && Edad >= 0){
        alert("Acceso denegado");
        document.getElementById("resultado").innerHTML =
        `<p>Es menor de Edad : ${Edad} </p>`;
    } else{
        document.getElementById("resultado").innerHTML =
        `<p>El valor <strong>${Edad}</strong> es invalido.</p>`;
    }
}

// ✅ Ejercicio 2: Añadir producto si no está
// js
// let productos = ["pan", "leche", "queso"];

// Declara la variable nuevoProducto.
//  Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
//  Si ya está, muestra "Producto ya ingresado".