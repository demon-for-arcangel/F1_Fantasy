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

const grandesPremios = [{ //terminar de rellenar
    description: '',
    carreras: [
        { id: 1, posiciones: [{ piloto: 4, puntos: 25 }, { piloto: 2, puntos: 18 }, { piloto: 1, puntos: 15 }] },
        { id: 2, posiciones: [{ piloto: 2, puntos: 25 }, { piloto: 11, puntos: 18 }, { piloto: 15, puntos: 15 }] }
    ]
}];

const usuariosBot = [
    { nombre: null, pilotoTitular: null, pilotoSuplente: null },
    { nombre: null, pilotoTitular: null, pilotoSuplente: null }
];

const pilotos = [
	{ id: 1, nombre: 'Alexander', apellidos: 'Albon', nacionalidad: '', propiedadJugador: 2, rol: 'Suplete' },
    { id: 2, nombre: 'Carlos', apellidos: 'Sainz', nacionalidad: '', propiedadJugador: '', rol: 'Libre'},
    { id: 3, nombre: 'Charles', apellidos: 'Leclerc', nacionalidad: '', propiedadJugador: '', rol: 'Titular' },
    { id: 4, nombre: 'Esteban', apellidos: 'Ocon', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 5, nombre: 'Fernando', apellidos: 'Alonso', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 6, nombre: 'George', apellidos: 'Rusell', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 7, nombre: 'Guanyu', apellidos: 'Zhou', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 8, nombre: 'Kevin', apellidos: 'Magnussen', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 9, nombre: 'Lance', apellidos: 'Stroll', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 10, nombre: 'Lando', apellidos: 'Norris', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 11, nombre: 'Lewis', apellidos: 'Hamilton', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 12, nombre: 'Logan', apellidos: 'Sargeant', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 13, nombre: 'Max', apellidos: 'Verstappen', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 14, nombre: 'Nico', apellidos: 'Hulkenberg', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 15, nombre: 'Nyck', apellidos: 'de Vries', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 16, nombre: 'Oscar', apellidos: 'Piastri', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 17, nombre: 'Pierre', apellidos: 'Gasly', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 18, nombre: 'Sergio', apellidos: 'Perez', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 19, nombre: 'Valtteri', apellidos: 'Bottas', nacionalidad: '', propiedadJugador: '', rol: '' },
    { id: 20, nombre: 'Yuki', apellidos: 'Tsunoda', nacionalidad: '', propiedadJugador: '', rol: '' }

];

function cargarInicial() {
    cargarGrandesPremios();
    generarUsuariosBot();
    ordenarPilotosAlfabeticamente();
}

function cargarGrandesPremios() {
    const listaGrandesPremios = document.getElementById("listaGrandesPremios");

    grandesPremios.forEach(granPremio => {
        const granPremioElemento = document.createElement("div");
        granPremioElemento.innerHTML = `
            <h2>${granPremio.description}</h2>
            <ul>
                ${granPremio.carreras.map(carrera => `<li>Carrera %¿${carrera.id}: ${mostrarPosiciones(carrera.posiciones)}</li>).join('')`)}
            </ul>
        `
    })
}

function generarUsuariosBot() {
    // Obtener un número aleatorio entre 0 y la longitud de la lista de usuariosBot
    const indiceUsuarioBot1 = Math.floor(Match.random() * usuariosBot.length);
    const indiceUsuarioBot2 = Math.floor(Math.random() * usuariosBot.length);

    //obtener los usuarios bot aleatorios
    const usuarioBot1 = usuariosBot[indiceUsuarioBot1];
    const usuarioBot2 = usuariosBot[indiceUsuarioBot2];
}

function asignarPilotos(usuario) {
    // Obtener el usuario actual y sus pilotos titulares y suplentes
    const usuarioActual = usuariosBot.find(u => u.nombre === usuario.nombre);
    const pilotoTitularActual = usuarioActual.pilotoTitular;
    const pilotoSuplenteActual = usuarioActual.pilotoSuplente;

    // Mostrar lista de pilotos disponibles
    const pilotosDisponibles = [1, 2, 3, 4, 5]; // Lista de IDs de pilotos disponibles
    const pilotoTitularSeleccionado = prompt(`Pilotos disponibles: ${pilotosDisponibles.join(', ')}. Elige piloto titular:`);
    const pilotoSuplenteSeleccionado = prompt(`Pilotos disponibles: ${pilotosDisponibles.join(', ')}. Elige piloto suplente:`);

    // Verificar que los pilotos seleccionados están en la lista de disponibles
    if (!pilotosDisponibles.includes(parseInt(pilotoTitularSeleccionado)) || !pilotosDisponibles.includes(parseInt(pilotoSuplenteSeleccionado))) {
        alert("Los pilotos seleccionados no están disponibles.");
        return;
    }

    // Actualizar pilotos del usuario
    usuarioActual.pilotoTitular = parseInt(pilotoTitularSeleccionado);
    usuarioActual.pilotoSuplente = parseInt(pilotoSuplenteSeleccionado);

    // Mostrar mensaje de confirmación
    alert(`Pilotos asignados con éxito. Piloto titular: ${pilotoTitularSeleccionado}, Piloto suplente: ${pilotoSuplenteSeleccionado}`);
}

function ordenarPilotosAlfabeticamente() {
    //Copia la lista de pilotos para no modificar la original
    const pilotosOrdenados = [...pilotos];

    // Ordenar los pilotos alfabéticamente
    pilotosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));

    //pilotosOrdenador ahora contiene la lista de pilotos ordenada alfabéticamente
    return pilotosOrdenados;
}

//LLamada a la funcion de carga inicial al cargar la página
windows.onload = cargarInicial