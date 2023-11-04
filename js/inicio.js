const grandesPremios = [{ //terminar de rellenar
    description: '',
    carreras: [
        { id: 1, posiciones: [{ piloto: 4, puntos: 25 }, { piloto: 2, puntos: 18 }, { piloto: 1, puntos: 15 }] },
        { id: 2, posiciones: [{ piloto: 2, puntos: 25 }, { piloto: 11, puntos: 18 }, { piloto: 15, puntos: 15 }] }
    ]
}];

const usuariosBot = [
    {    
        nombre: 'UsuarioBot1',
        pilotoTitular: 1,
        pilotoSuplente: 2
    }, //hacer más
];

const pilotos = [
    {
        nombre: ""
    }
];

// Cargar grandes premios y usuarios bot
function cargarInicial() {
    cargarGrandesPremios();
    generarUsuariosBot();
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

function mostrarPosiciones(posiciones){
    return posiciones.map(posicion => `Piloto ${posicion.piloto} - Puntos: ${posicion.puntos}`).join(', ');
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
    // Código para ordenar pilotos alfabéticamente
}

//LLamada a la funcion de carga inicial al cargar la página
windows.onload = cargarInicial