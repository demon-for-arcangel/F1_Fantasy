import { usuario } from "./objetos.js";
import { pilotos } from "./objetos.js";

function rellenarTabla() {
    var tablaClasi = document.getElementById('tablaClasificacion');

    var pilotoTitular = localStorage.getItem('pilotoTitular');
    var pilotoSuplente = localStorage.getItem('pilotoSuplente');
    var jugador = localStorage.getItem('usuario');

    var pilotoTitularObjeto = JSON.parse(pilotoTitular);
    var pilotoSuplenteObjeto = JSON.parse(pilotoSuplente);
    var jugadorObjeto = JSON.parse(jugador);

    var pilotosJugador = [pilotoTitularObjeto, pilotoSuplenteObjeto];
    var pilotosBots = pilotos.filter(piloto => piloto.id !== jugadorObjeto.pilotoTitular && piloto.id !== jugadorObjeto.pilotoSuplente);

    var pilotoJugadorTitular = elegirTitular(pilotosJugador);
    var pilotoBotTitular = elegirTitular(pilotosBots);

    var plantel = [jugadorObjeto, pilotoBotTitular];

    var granPre = localStorage.getItem('contador');
    var cont = JSON.parse(granPre);
    var contador = document.getElementById('contador');

    var rellenar = "<tr>";
    rellenar += "<thead class=container-fluid><th>Nombre</th><th>Puntos</th></thead>";
    for (let i = 0; i < plantel.length; i++) {
        rellenar += "<tr class=container-fluid>";
        for (let j = 0; j < 2; j++) { // Ajusta el 2 según la cantidad de pilotos que desees mostrar
            rellenar += "<td class=container-fluid>";
            rellenar += (j === 0) ? plantel[i].nombre : pilotoJugadorTitular.puntos;
            rellenar += "</td>";
        }
        rellenar += "</tr>";
    }
    tablaClasi.innerHTML = rellenar;
    contador.innerHTML = "Se han disputado: " + cont;
}

rellenarTabla();

function elegirTitular(pilotos) {
    return pilotos.find(piloto => piloto && piloto.rol === "Titular") || {};
}