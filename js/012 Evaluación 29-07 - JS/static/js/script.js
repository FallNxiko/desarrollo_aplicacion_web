function NumerosPar(Numero) {
    let resultado = []
    for (let i = 1; i <= Numero; i++) {
        if (i % 2 === 0) {
            resultado.push(i);
        }
        console.log(resultado)
    }
    return resultado
}

function mostrarNumerosPar() {
    let Numero = parseInt(prompt("Ingresa un Numero:"));
    let numeros = NumerosPar(Numero);
    if (numeros.length === 0) {
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }
}