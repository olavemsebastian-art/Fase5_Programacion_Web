// Arreglo con las rutas exactas de las imágenes
const imagenes = [
    "imagenes/portada.jpg",
    "imagenes/bandeja - paisa.jpg",
    "imagenes/ajiaco.jpg",
    "imagenes/sancocho.jpg"
];

let indiceActual = 0;
let intervaloSlider = null;

// Función que aplica el cambio de imagen
function mostrarImagen(indice) {
    const slider = document.getElementById("imagen-slider");
    if (!slider) return;

    // Asegurar que el índice se mantenga dentro de los límites
    if (indice >= imagenes.length) {
        indiceActual = 0;
    } else if (indice < 0) {
        indiceActual = imagenes.length - 1;
    } else {
        indiceActual = indice;
    }

    slider.src = imagenes[indiceActual];
}

// Función para el avance automático
function cambiarImagenAutomatica() {
    mostrarImagen(indiceActual + 1);
}

// Función para los botones manuales (Anterior / Siguiente)
function cambiarImagenManual(direccion) {
    // Detiene el temporizador automático para evitar saltos dobles
    if (intervaloSlider) {
        clearInterval(intervaloSlider);
    }
    
    mostrarImagen(indiceActual + direccion);

    // Reinicia el ciclo automático de 3 segundos
    intervaloSlider = setInterval(cambiarImagenAutomatica, 3000);
}

// Inicia el slider cuando el documento cargue
window.onload = function() {
    intervaloSlider = setInterval(cambiarImagenAutomatica, 3000);
};