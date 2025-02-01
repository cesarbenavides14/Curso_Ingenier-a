let ventas = []; // Array para almacenar las tres ventas
let saludoBienvenida = document.querySelector('h1');
saludoBienvenida.innerHTML = "Registro de ventas";

let descripcionJuego = document.querySelector('.texto__parrafo');
descripcionJuego.innerText = "Enero";

// Función para registrar las ventas
function registrarVentas() {
    // Obtener el valor del input y convertirlo a número
    let venta = parseInt(document.querySelector('#registroVentas').value) || 0;
    
    if (venta > 0) {
        // Guardar la venta en el array
        ventas.push(venta);
        console.log(venta);

        // Limpiar el campo de entrada para el siguiente mes
        document.querySelector('#registroVentas').value = "";

        // Cambiar el texto del placeholder para el siguiente mes
        if (ventas.length === 1) {
            document.querySelector('#registroVentas').placeholder = "Febrero";
        } else if (ventas.length === 2) {
            document.querySelector('#registroVentas').placeholder = "Marzo";
        } else {
            // Si ya se han registrado las tres ventas
            document.querySelector('#registroVentas').disabled = true; // Deshabilitar el input
            descripcionJuego.innerText = "¡Ventas registradas! Ahora verifica si cumpliste con la meta.";
        }
    }
}

// Función para verificar si se cumplió la meta
function verificarMeta() {
    // Solo realizar el cálculo si se han registrado las tres ventas
    if (ventas.length === 3) {
        let totalVentas = ventas.reduce((acumulado, valor) => acumulado + valor, 0);

        console.log("Total de ventas: " + totalVentas); // Para verificar el total en la consola

        if (totalVentas > 20) {
            descripcionJuego.innerText = "Excelente, cumpliste con tus ventas";
        } else {
            descripcionJuego.innerText = "Aún no has cumplido tu meta :(";
        }

        // Habilitar el botón de reinicio
        document.querySelector('#reiniciar').disabled = false;
    } else {
        descripcionJuego.innerText = "Por favor, completa los tres registros antes de verificar.";
    }
}

// Usamos el evento 'onchange' para registrar cada venta
document.querySelector('#registroVentas').addEventListener('change', registrarVentas);

// Lógica de reinicio del juego (si se requiere)
document.querySelector('#reiniciar').addEventListener('click', function() {
    // Reiniciar las ventas y la interfaz
    ventas = [];
    document.querySelector('#registroVentas').disabled = false;
    document.querySelector('#registroVentas').placeholder = "Enero";
    document.querySelector('#registroVentas').value = "";
    descripcionJuego.innerText = "Enero";
    document.querySelector('#reiniciar').disabled = true;
});