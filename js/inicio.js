function cargarCabecera2() {
    document.getElementById("cabecera").innerHTML = 
    `
    <header> <!-- Hacer la carga de la cabecera nueva en app.js-->
        <img src="imagenes/f1_logo.svg">
        <a href = "clasificación.html"><p>Clasificación</p></a>
        <a href = "tuspilotos.html"><p>Tus pilotos</p></a>
        <a href = "pilotos.html"><p>Pilotos</p></a>
        <a href = "perfil.html"><p>Perfil</p></a>
        <a href = "administración.html"><p>Administración</p></a>
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
    // (lista de usuarios bot con sus pilotos)
];

// Cargar grandes premios y usuarios bot
function cargarInicial() {
    cargarGrandesPremios();
    generarUsuariosBot();
}

function cargarGrandesPremios() {
    // Código para cargar los grandes premios
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