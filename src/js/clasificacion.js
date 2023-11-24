import { usuario } from "./objetos.js";
import '../style/estilo.css';

function cargarClasificacion() {
    const tablaClasificacion = document.getElementById("tablaClasificacion");

    const usuarioLocalStorage = JSON.parse(localStorage.getItem('usuario')) || {};
    const bot1LocalStorage = JSON.parse(localStorage.getItem('jugador1')) || {};
    const bot2LocalStorage = JSON.parse(localStorage.getItem('jugador2')) || {};

    asignarPilotos(usuario);
    asignarPilotos(bot1LocalStorage);
    asignarPilotos(bot2LocalStorage);

    const pilotosCombinadosUsuario = [usuario.pilotoTitular, usuario.pilotoSuplente];
    const pilotosCombinadosBot1 = [bot1LocalStorage.pilotoTitular, bot1LocalStorage.pilotoSuplente];
    const pilotosCombinadosBot2 = [bot2LocalStorage.pilotoTitular, bot2LocalStorage.pilotoSuplente];

    const pilotosCombinados = [...pilotos, ...pilotosCombinadosUsuario, ...pilotosCombinadosBot1, ...pilotosCombinadosBot2];

    const puntosUsuario = calcularPuntos(pilotosCombinadosUsuario);
    const puntosBot1 = calcularPuntos(pilotosCombinadosBot1);
    const puntosBot2 = calcularPuntos(pilotosCombinadosBot2);

    const puntosOrdenados = [
        { nombre: usuarioLocalStorage.nombre, puntos: puntosUsuario },
        { nombre: bot1LocalStorage.nombre, puntos: puntosBot1 },
        { nombre: bot2LocalStorage.nombre, puntos: puntosBot2 }
    ].sort((a, b) => b.puntos - a.puntos);

    const filas = puntosOrdenados.map((piloto, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${piloto.nombre} </td>
                <td>${piloto.apellidos}</td>
                <td>${piloto.puntos}</td>
            </tr>
        `;
    });

    // Actualiza el contenido de la tabla
    tablaClasificacion.innerHTML = `
        <thead>
            <tr>
                <th>Posición</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Puntos</th>
            </tr>
        </thead>
        <tbody>
            ${filas.join('')}
        </tbody>
    `;
}


function calcularPuntos(pilotos) {
    let totalPuntos = 0;

    pilotos.forEach(piloto => {
        const resultadosPorGrandesPremios = piloto.resultadosPorGrandesPremios || {};

        for (const granPremio in resultadosPorGrandesPremios) {
            if (resultadosPorGrandesPremios.hasOwnProperty(granPremio)) {
                const posicion = resultadosPorGrandesPremios[granPremio];

                const sistemaPuntos = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

                if (posicion <= sistemaPuntos.length) {
                    totalPuntos += sistemaPuntos[posicion - 1];
                }
            }
        }
    });

    return totalPuntos;
}


window.addEventListener('load', cargarClasificacion);
