function calcularProducto(){
    let numero = parseInt(prompt("Ingrese un numero :"))
    let resultado = 1; 
    for (let i = 1; i <= numero; i++){
        let multiplicador = i * 2;
        resultado *= multiplicador;
        console.log("i:", i, "multiplicador: ", multiplicador, "resultado: ", resultado)
    }
}