// clasificacion.js
import { usuario, pilotos } from "./inicio.js"


function mostrarClasificacion() {
    const clasificacionOrdenada = usuarios.sort((a, b) => b.puntos - a.puntos);

    const tablaBody = document.getElementById("tabla-clasificacion-body");

    tablaBody.innerHTML = "";

    clasificacionOrdenada.forEach((usuario, indice) => {
        const fila = tablaBody.insertRow();
        const celdaNombre = fila.insertCell(0);
        const celdaPuntos = fila.insertCell(1);

        celdaNombre.textContent = usuario.nombre;
        celdaPuntos.textContent = usuario.puntos;
    });

    document.getElementById("grandes-premios-disputados").textContent = grandesPremiosDisputados;
}

function disputarGranPremio() {
    usuarios.forEach(usuario => {
        usuario.puntos += Math.floor(Math.random() * 11); // Puntuación aleatoria entre 0 y 10
    });

    // Incrementar el contador de grandes premios disputados
    grandesPremiosDisputados++;

    // Mostrar la clasificación actualizada
    mostrarClasificacion();
}

// Llamar a la función para mostrar la clasificación al cargar la página
mostrarClasificacion();
