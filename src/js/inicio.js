/*
-----------------------IMPORTACIONES----------------------
*/
import { grandesPremios } from "./objetos.js";
import { pilotos } from "./objetos.js";
import { usuario } from "./objetos.js";

/*
----------LLamada a la funcion de carga inicial al cargar la página-------
*/
cargarInicial();

/*
-----------------------FUNCIONES-------------------------
*/

function cargarInicial() {
    cargarProximaCarrera();
    ordenarPilotosAlfabeticamente();
    asignarPilotos(usuario);
    seleccionarJugadores();
}

function cargarProximaCarrera(){
    const idAleatorio = Math.floor(Math.random() * grandesPremios.length);
    const proximaCarrera = grandesPremios[idAleatorio];

    const nombreCarrera = document.getElementById("nombreCarrera");
    const imagenCarrera = document.getElementById("imagenCarrera");
    const lugarCarrera = document.getElementById("lugarCarrera");
    const descripcionCarrera = document.getElementById("descripcionCarrera");

    nombreCarrera.textContent = proximaCarrera.nombre;
    imagenCarrera.src = proximaCarrera.imagen;
    lugarCarrera.textContent = proximaCarrera.lugar;
    descripcionCarrera.textContent = proximaCarrera.descripcion;
}

function asignarPilotos(usuario) {
    const pilotosDisponibles = pilotos.filter(p => p.disponible);

    const indicePilotoTitular = Math.floor(Math.random() * pilotosDisponibles.length);
    const pilotoTitularSeleccionado = pilotosDisponibles[indicePilotoTitular];

    pilotosDisponibles.splice(indicePilotoTitular, 1);

    const indicePilotoSuplente = Math.floor(Math.random() * pilotosDisponibles.length);
    const pilotoSuplenteSeleccionado = pilotosDisponibles[indicePilotoSuplente];

    // Asignar roles aleatorios
    usuario.pilotoTitular = pilotoTitularSeleccionado.id;
    usuario.pilotoSuplente = pilotoSuplenteSeleccionado.id;

    //Guardar la información en localStorage
    localStorage.setItem('pilotoTitular', pilotoTitularSeleccionado.nombre);
    localStorage.setItem('pilotoSuplente', pilotoSuplenteSeleccionado.nombre);


    // Actualizar disponibilidad de pilotos
    pilotoTitularSeleccionado.disponible = false;
    pilotoSuplenteSeleccionado.disponible = false;
}

function seleccionarJugadores() {
    const pilotosDisponibles = pilotos.filter(p => p.disponible);

    //Obtener un piloto titular aleatorio
    const indicePilotoTitular = Math.floor(Math.random() * pilotosDisponibles.length);
    const pilotoTitularSeleccionado = pilotosDisponibles[indicePilotoTitular];

    // eliminar el piloto titular de la lista de pilotos disponibles
    pilotosDisponibles.splice(indicePilotoTitular, 1);

    //Obtener un piloto suplente aleatorio de la lista actualizada
    const indicePilotoSuplente = Math.floor(Math.random() * pilotosDisponibles.length);
    const pilotoSuplenteSeleccionado = pilotosDisponibles[indicePilotoSuplente];

    //Asignar los pilotos a los jugadores
    const jugador1 = {
        nombre: "Jugador1",
        pilotoTitular: pilotoTitularSeleccionado.id,
        pilotoSuplente: pilotoSuplenteSeleccionado.id
    }

    const jugador2 = {
        nombre: "Jugador2",
        pilotoTitular: pilotoTitularSeleccionado.id,
        pilotoSuplente: pilotoSuplenteSeleccionado.id
    }
    
    localStorage.setItem('pilotoTitular', JSON.stringify(pilotoSuplenteSeleccionado));
    localStorage.setItem('pilotoSuplente', JSON.stringify(pilotoSuplenteSeleccionado));

    pilotoTitularSeleccionado.disponible = false;
    pilotoSuplenteSeleccionado.disponible = false;
}

function ordenarPilotosAlfabeticamente() {
    // Ordenar los pilotos alfabéticamente
    pilotos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    //pilotosOrdenador ahora contiene la lista de pilotos ordenada alfabéticamente
    return pilotos;
}