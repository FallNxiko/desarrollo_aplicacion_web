function mayoriaEdad() {
    let edad = parseInt(prompt("Ingrese Edad: "));

    if (edad >= 18) {
        document.getElementById("resultado").innerHTML = `<p>Es mayor de Edad: ${edad} </p>`;
    } else if (edad <= 17 && edad >= 0) {
        document.getElementById("resultado").innerHTML = `<p>Permiso denegado usted es menor de Edad: ${edad} </p>`;
    }else{
        document.getElementById("resultado").innerHTML = `<p>EL valor <strong>${edad}</strong> es invalido.</p>`;
    }
}   