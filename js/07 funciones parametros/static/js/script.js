// 🟦 Ejercicio 1: Repetir una palabra N veces
// 📌 Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros, repita la palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert.



function RepetirPalabra(palabra, veces){
    let resultado = "";
    for (let i = 0; i < veces; i++){
        resultado += `${palabra} --- `
    }
    return resultado.trim();
}
function MostrarPalabra(){
    let input1 = document.getElementById("input1");
    let palabra = input1.value;
    let numero = parseInt(prompt("Ingrese cantidad a repartitr :"))
    let resultadoFinal = RepetirPalabra(palabra, numero)

    document.getElementById("resultado1").textContent =resultadoFinal
}

// 🟦 Ejercicio 2: Comparar dos números
// 📌 Usa input para pedir dos números. Crea una función con dos parámetros que compare los valores y retorne un mensaje indicando cuál número es mayor, menor o si son iguales. Muestra el mensaje 

function compararNumeros(num1, num2){
    if(num1 > num2){
        return`${num1} es mayor que ${num2}`;
    } else if (num1 < num2){
        return`${num1} es menor que ${num2}`;
    }else{
        return`${num1} es igual que ${num2}`;
    }
}

function mostrarComparacion(){
    let input1 = document.getElementById("numComp1");
    let input2 = document.getElementById("numComp2");
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let resultado = compararNumeros(num1, num2);
    document.getElementById("resultado2").textContent = resultado;

    if (isNaN(num1) || isNaN(num2)){
        alert("valor invalido, igrese solo numeros");
    }
    input1.value = "";
    input1.focus();
    input2.value ="";
}