import { grandesPremios } from "./objetos.js";
import { pilotos } from "./objetos.js";
import { usuariosBot } from "./objetos.js";

//LLamada a la funcion de carga inicial al cargar la página
cargarInicial();

cargarCabecera2();

/*
-----------------------FUNCIONES-------------------------
*/

function cargarCabecera2() {
    document.getElementById("cabecera").innerHTML =
        `
        <header>
            <img src="imagenes/f1_logo.svg">
            <a href="clasificación.html"><p>Clasificación</p></a>
            <a href="tuspilotos.html"><p>Tus pilotos</p></a>
            <a href="pilotos.html"><p>Pilotos</p></a>
            <a href="perfil.html"><p>Perfil</p></a>
            <a href="administración.html"><p>Administración</p></a>
        </header>
    `;
}

function cargarInicial() {
    cargarProximaCarrera();
    generarUsuariosBot();
    ordenarPilotosAlfabeticamente();
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

function generarUsuariosBot() {
    const pilotosDisponibles = [...pilotos]; //crear copia de la lista de pilotos disponibles

    usuariosBot.forEach(usuario => {
        const indicePilotoTitular = Math.floor(Math.random() * pilotosDisponibles.length);
        const pilotoTitular = pilotosDisponibles.splice(indicePilotoTitular, 1[0]); //Sacaremos el piloto de la lista

        const indicePilotoSuplente = Math.floor(Math.random() * pilotosDisponibles.length);
        const pilotoSuplente = pilotosDisponibles.splice(indicePilotoSuplente, 1[0]);

        usuario.pilotoTitular = pilotoTitular.id;
        usuario.pilotoSuplente = pilotoSuplente.id;
    });
}

function asignarPilotos(usuario) {
    const usuarioActual = usuariosBot.find(u => u.nombre === usuario.nombre);

    const pilotosDisponibles = pilotos.filter(p => p.id !== usuarioActual.pilotoTitular && p.id !== usuarioActual.pilotoSuplente).map(p => p.id);

    const pilotoTitularSeleccionado = prompt(`Pilotos disponibles: ${pilotosDisponibles.join(', ')}. Elige piloto titular:`);
    const pilotoSuplenteSeleccionado = prompt(`Pilotos disponibles: ${pilotosDisponibles.join(', ')}. Elige piloto suplente:`);

    if (!pilotosDisponibles.includes(parseInt(pilotoTitularSeleccionado)) || !pilotosDisponibles.includes(parseInt(pilotoSuplenteSeleccionado))) {
        alert("Los pilotos seleccionados no están disponibles.");
        return;
    }

    usuarioActual.pilotoTitular = parseInt(pilotoSuplenteSeleccionado);
    usuarioActual.pilotoSuplente = parseInt(pilotoSuplenteSeleccionado);

    alert(`Pilotos asignados con éxit. Piloto titular: ${pilotoTitularSeleccionado}, Piloto suplente: ${pilotoSuplenteSeleccionado}`);
}

function ordenarPilotosAlfabeticamente() {
    //Copia la lista de pilotos para no modificar la original
    const pilotosOrdenados = [...pilotos];

    // Ordenar los pilotos alfabéticamente
    pilotosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));

    //pilotosOrdenador ahora contiene la lista de pilotos ordenada alfabéticamente
    return pilotosOrdenados;
}