import { pilotos } from "./objetos.js";

function mostrarPilotos(){
    const pilotosContenedor = document.getElementById("pilotosContenedor");

    pilotos.forEach((piloto) =>{
        const pilotoDiv = document.createElement('div');
        pilotoDiv.classList.add('piloto');
        pilotoDiv.innerHTML = `
            <img src = "${piloto.foto}" alt = "${piloto.nombre} ${piloto.apellidos}">
            <p>${piloto.nombre} ${piloto.apellidos}</p>
            <p>${piloto.rol}</p>
        `;
        pilotosContenedor.appendChild(pilotoDiv);
    });
}

mostrarPilotos();