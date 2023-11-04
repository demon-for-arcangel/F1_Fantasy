const grandesPremios = [{ //terminar de rellenar
    description: '',
    carreras: [
        { id: 1, posiciones: [{ piloto: 4, puntos: 25 }, { piloto: 2, puntos: 18 }, { piloto: 1, puntos: 15 }] },
        { id: 2, posiciones: [{ piloto: 2, puntos: 25 }, { piloto: 11, puntos: 18 }, { piloto: 15, puntos: 15 }] }
    ]
}];

const usuariosBot = [
    // (lista de usuarios bot con sus pilotos)
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

function generarUsuariosBot() { //se deben generar los dos usuarios bot con pilotos suplentes y titulares.
    // Código para generar usuarios bot
}

function asignarPilotos(usuario) {
    // Código para asignar pilotos titular y suplente a tu usuario
}

function ordenarPilotosAlfabeticamente() {
    // Código para ordenar pilotos alfabéticamente
}