
let intento = 1;
let textoBienvenida = document.querySelector ('h1')
    textoBienvenida.innerText = "Portal de Ventas";

let descripcionJuego = document.querySelector ('p')
    descripcionJuego.innerText = "Registra las ventas"

function intentoDeUsuario () {
    let registroVentas = parseInt(document.querySelector ('input').value);
    console.log(registroVentas);
        if (registroVentas >= 20){
            descripcionJuego.innerText = "Excelente, cumpliste con tus ventas";
        } else {
            descripcionJuego.innerText = "Aun no has cumplido tu meta :(";
        }
        intento++
}
