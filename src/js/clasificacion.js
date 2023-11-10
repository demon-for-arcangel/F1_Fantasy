import { usuario } from "./objetos.js"


function cargarClasificacion(){
    const usuariosOrdenados = usuario.sort((a, b) => b.puntuacionTotal - a.puntuacionTotal);

    const tbody = document.querySelector("#tablaClasificacion tbody");

    usuariosOrdenados.forEach(usuario =>{
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.puntuacionTotal}</td>
        `;
        tbody.appendChild(fila);
    });
}

cargarClasificacion();
