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
        `;
}

const grandesPremios = [
    { 
        id: 1, 
        lugar: 'Sakhir', 
        nombre: 'GP Bahréin', 
        descripcion: 'El GP de Bahréin se celebra el 5 de Marzo en el circuito de Sakhir en Bahréin. La longitud del circuito es de 5,412 kilómetros. Durante la carrera se darán 57 vueltas al circuito cubriendo una distancia final de 308,484 kilómetros.',
        imagen: '../imagenes/circuitos/bahrein.jpg'
    },
    { 
        id: 2, 
        lugar: 'Jeddah', 
        nombre: 'GP Arabia Saudí', 
        descripcion: 'El GP de Arabia Saudí se celebra el 19 de Marzo en el circuito de Jeddah en Arabia Saudí. La longitud del circuito es de 6,174 kilómetros. Durante la carrera se darán 50 vueltas al circuito cubriendo una distancia final de 308,700 kilómetros.',
        imagen: '../imagenes/circuitos/arabia-saudi.jpg'
    },
    { 
        id: 3, 
        lugar: 'Melbourne', 
        nombre: 'GP Australia', 
        descripcion: 'El GP de Australia se celebra el 2 de Abril en el circuito de Melbourne en Australia. La longitud del circuito es de 5,303 kilómetros. Durante la carrera se darán 58 vueltas al circuito cubriendo una distancia final de 307,574 kilómetros.',
        imagen: '../imagenes/circuitos/australia.jpg'
    },
    { 
        id: 4, 
        lugar: 'Baku', 
        nombre: 'GP Azerbaiyán', 
        descripcion: 'El GP de Azerbaiyán se celebra el 30 de Abril en el circuito de Bakú en Azerbaiyán. La longitud del circuito es de 6,003 kilómetros. Durante la carrera se darán 51 vueltas al circuito cubriendo una distancia final de 306,153 kilómetros.',
        imagen: '../imagenes/circuitos/azerbaiyan.jpg'
    },
    { 
        id: 5, 
        lugar: 'Miami', 
        nombre: 'GP Miami', 
        descripcion: 'El GP de Miami se celebra el 7 de Mayo en el circuito de Miami International Autodrome en Miami (Estados Unidos). La longitud del circuito es de 5,412 kilómetros. Durante la carrera se darán 57 vueltas al circuito cubriendo una distancia final de 308,484 kilómetros.',
        imagen: '../imagenes/circuitos/miami.jpg'
    },
    { 
        id: 6, 
        lugar: 'Imola', 
        nombre: 'GP Emilia Romagna', 
        descripcion: 'El GP de Emilia-Romaña se celebra el 21 de Mayo en el circuito de Autodromo Enzo e Dino Ferrari en Imola (Italia). La longitud del circuito es de 4,909 kilómetros. Durante la carrera se darán 63 vueltas al circuito cubriendo una distancia final de 309,267 kilómetros.',
        imagen: '../imagenes/circuitos/emilia-romagna.jpg'
    },
    { 
        id: 7, 
        lugar: 'Montecarlo', 
        nombre: 'GP Mónaco', 
        descripcion: 'El GP de Mónaco se celebra el 28 de Mayo en el circuito de Montecarlo en Mónaco. La longitud del circuito es de 3,337 kilómetros. Durante la carrera se darán 78 vueltas al circuito cubriendo una distancia final de 260,286 kilómetros.',
        imagen: '../imagenes/circuitos/monaco.jpg'
    },
    { 
        id: 8, 
        lugar: 'Barcelona', 
        nombre: 'GP España', 
        descripcion: 'El GP de España se celebra el 4 de Junio en el circuito de Barcelona-Cataluña (Montmeló) en Barcelona (España). La longitud del circuito es de 4,675 kilómetros. Durante la carrera se darán 66 vueltas al circuito cubriendo una distancia final de 308,550 kilómetros.',
        imagen: '../imagenes/circuitos/espana.jpg'
    },
    { 
        id: 9, 
        lugar: 'Montreal', 
        nombre: 'GP Canadá', 
        descripcion: 'El GP de Canadá se celebra el 18 de Junio en el circuito de Gilles Villeneuve en Montreal (Canadá). La longitud del circuito es de 4,361 kilómetros. Durante la carrera se darán 70 vueltas al circuito cubriendo una distancia final de 305,270 kilómetros.',
        imagen: '../imagenes/circuitos/canada.jpg'
    },
    { 
        id: 10, 
        lugar: 'Spielberg', 
        nombre: 'GP Austria', 
        descripcion: 'El GP de Austria se celebra el 2 de Julio en el circuito de Red Bull Ring en Spielberg (Austria). La longitud del circuito es de 4,318 kilómetros. Durante la carrera se darán 71 vueltas al circuito cubriendo una distancia final de 306,578 kilómetros.',
        imagen: '../imagenes/circuitos/austria.jpg'
    },
    { 
        id: 11, 
        lugar: 'Silverstone', 
        nombre: 'GP Gran Bretaña', 
        descripcion: 'El GP de Gran Bretaña se celebra el 9 de Julio en el circuito de Silverstone en Reino Unido. La longitud del circuito es de 5,891 kilómetros. Durante la carrera se darán 52 vueltas al circuito cubriendo una distancia final de 306,332 kilómetros.',
        imagen: '../imagenes/circuitos/gran-bretana.jpg'
    },
    { 
        id: 12, 
        lugar: 'Budapest', 
        nombre: 'GP Hungría', 
        descripcion: 'El GP de Hungría se celebra el 23 de Julio en el circuito de Hungaroring en Budapest (Hungría). La longitud del circuito es de 4,381 kilómetros. Durante la carrera se darán 70 vueltas al circuito cubriendo una distancia final de 306,670 kilómetros.',
        imagen: '../imagenes/circuitos/hungria.jpg'
    },
    { 
        id: 13, 
        lugar: 'Spa', 
        nombre: 'GP Bélgica', 
        descripcion: 'El GP de Bélgica se celebra el 30 de Julio en el circuito de Spa-Francorchamps en Spa (Bélgica). La longitud del circuito es de 7,004 kilómetros. Durante la carrera se darán 44 vueltas al circuito cubriendo una distancia final de 308,176 kilómetros.',
        imagen: '../imagenes/circuitos/belgica.jpg'
    },
    { 
        id: 14, 
        lugar: 'Zandvoort', 
        nombre: 'GP Países Bajos', 
        descripcion: 'El GP de los Países Bajos se celebra el 27 de Agosto en el circuito de Zandvoort en Países Bajos. La longitud del circuito es de 4,259 kilómetros. Durante la carrera se darán 72 vueltas al circuito cubriendo una distancia final de 306,648 kilómetros.',
        imagen: '../imagenes/circuitos/paises-bajos.jpg'
    },
    { 
        id: 15, 
        lugar: 'Monza', 
        nombre: 'GP Italia', 
        descripcion: 'El GP de Italia se celebra el 3 de Septiembre en el circuito de Monza en Italia. La longitud del circuito es de 5,793 kilómetros. Durante la carrera se darán 53 vueltas al circuito cubriendo una distancia final de 307,029 kilómetros.',
        imagen: '../imagenes/circuitos/italia.jpg'
    },
    { 
        id: 16, 
        lugar: 'Singapur', 
        nombre: 'GP Singapur', 
        descripcion: 'El GP de Singapur se celebra el 17 de Septiembre en el circuito de Marina Bay en Singapur (Singapur). La longitud del circuito es de 5,063 kilómetros. Durante la carrera se darán 61 vueltas al circuito cubriendo una distancia final de 308,843 kilómetros.',
        imagen: '../imagenes/circuitos/singaput.jpg'
    },
    { 
        id: 17, 
        lugar: 'Suzuka', 
        nombre: 'GP Japón', 
        descripcion: 'El GP de Japón se celebra el 24 de Septiembre en el circuito de Suzuka en Japón. La longitud del circuito es de 5,807 kilómetros. Durante la carrera se darán 53 vueltas al circuito cubriendo una distancia final de 307,771 kilómetros.',
        imagen: '../imagenes/circuitos/japon.jpg'
    },
    { 
        id: 18, 
        lugar: 'Lusail', 
        nombre: 'GP Qatar', 
        descripcion: 'El GP de Qatar se celebra el 8 de Octubre en el circuito de Lusail International Circuit en Lusail (Qatar). La longitud del circuito es de 5,38 kilómetros. Durante la carrera se darán 57 vueltas al circuito cubriendo una distancia final de 306,660 kilómetros.',
        imagen: '../imagenes/circuitos/qatar.jpg' 
    },
    { 
        id: 19, 
        lugar: 'Austin (Texas)', 
        nombre: 'GP Estados Unidos', 
        descripcion: 'El GP de Estados Unidos se celebra el 22 de Octubre en el circuito de Las Américas en Austin (Texas) (Estados Unidos). La longitud del circuito es de 5,513 kilómetros. Durante la carrera se darán 56 vueltas al circuito cubriendo una distancia final de 308,728 kilómetros.',
        imagen: '../imagenes/circuitos/eeuu.jpg'
    },
    { 
        id: 20, 
        lugar: 'Ciudad de México', 
        nombre: 'GP México', 
        descripcion: 'El GP de México se celebra el 29 de Octubre en el circuito de Los Hermanos Rodríguez en Ciudad de México (México). La longitud del circuito es de 4,304 kilómetros. Durante la carrera se darán 71 vueltas al circuito cubriendo una distancia final de 305,584 kilómetros.',
        imagen: '../imagenes/circuitos/mexico.jpg'
    },
    { 
        id: 21, 
        lugar: 'Sao Paulo', 
        nombre: 'GP Sao Paulo', 
        descripcion: 'El GP de Brasil se celebra el 5 de Noviembre en el circuito de José Carlos Pace en São Paulo (Brasil). La longitud del circuito es de 4,309 kilómetros. Durante la carrera se darán 71 vueltas al circuito cubriendo una distancia final de 305,939 kilómetros.',
        imagen: '../imagenes/circuitos/brasil.jpg'
    },
    { 
        id: 22, 
        lugar: 'Las Vegas', 
        nombre: 'LAS VEGAS', 
        descripcion: 'El GP de Las Vegas se celebra el 18 de Noviembre en el circuito de Las Vegas en Estados Unidos. La longitud del circuito es de 6,12 kilómetros. Durante la carrera se darán 50 vueltas al circuito cubriendo una distancia final de 306,000 kilómetros.',
        imagen: '../imagenes/circuitos/las-vegas.jpg' 
    },
    { 
        id: 23, 
        lugar: 'Abu Dabi', 
        nombre: 'GP Abu Dabi', 
        descripcion: 'El GP de Abu Dabi se celebra el 26 de Noviembre en el circuito de Yas Marina en Abu Dabi (Emiratos Árabes). La longitud del circuito es de 5,281 kilómetros. Durante la carrera se darán 58 vueltas al circuito cubriendo una distancia final de 306,298 kilómetros.',
        imagen: '../imagenes/circuitos/abu-dhabi.jpg' 
    }
];

const usuariosBot = [
    { nombre: null, pilotoTitular: null, pilotoSuplente: null },
    { nombre: null, pilotoTitular: null, pilotoSuplente: null }
];

const pilotos = [
    { 
        id: 1, 
        nombre: 'Alexander', 
        apellidos: 'Albon', 
        nacionalidad: '', 
        propiedadJugador: 2, 
        rol: 'Suplete' 
    },
    { 
        id: 2, 
        nombre: 'Carlos', 
        apellidos: 'Sainz', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: 'Libre' 
    },
    { 
        id: 3, 
        nombre: 'Charles', 
        apellidos: 'Leclerc', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: 'Titular' 
    },
    { 
        id: 4, 
        nombre: 'Esteban', 
        apellidos: 'Ocon', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 5, 
        nombre: 'Fernando', 
        apellidos: 'Alonso', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 6, 
        nombre: 'George', 
        apellidos: 'Rusell', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 7, 
        nombre: 'Guanyu', 
        apellidos: 'Zhou', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 8, 
        nombre: 'Kevin', 
        apellidos: 'Magnussen', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 9, 
        nombre: 'Lance', 
        apellidos: 'Stroll', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 10, 
        nombre: 'Lando', 
        apellidos: 'Norris', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 11, 
        nombre: 'Lewis', 
        apellidos: 'Hamilton', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 12, 
        nombre: 'Logan', 
        apellidos: 'Sargeant', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 13, 
        nombre: 'Max', 
        apellidos: 'Verstappen', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' },
    { 
        id: 14, 
        nombre: 'Nico', 
        apellidos: 'Hulkenberg', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 15, 
        nombre: 'Nyck', 
        apellidos: 'de Vries', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 16, 
        nombre: 'Oscar', 
        apellidos: 'Piastri', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 17, 
        nombre: 'Pierre', 
        apellidos: 'Gasly', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 18, 
        nombre: 'Sergio', 
        apellidos: 'Perez', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 19, 
        nombre: 'Valtteri', 
        apellidos: 'Bottas', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    },
    { 
        id: 20, 
        nombre: 'Yuki', 
        apellidos: 'Tsunoda', 
        nacionalidad: '', 
        propiedadJugador: '', 
        rol: '' 
    }
];

function cargarInicial() {
    cargarGrandesPremios();
    generarUsuariosBot();
    ordenarPilotosAlfabeticamente();
}

function cargarCarrera(){
    
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
    const pilotosDisponibles = [...pilotos]; //crear copia de la lista de pilotos disponibles

    usuariosBot.forEach(usuario => {
        const indicePilotoTitular = Math.floor(Math.random() * pilotosDisponibles.length);
        const pilotoTitular = pilotosDisponibles.splice(indicePIlotoTitular, 1[0]); //Sacaremos el piloto de la lista

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

//LLamada a la funcion de carga inicial al cargar la página
windows.onload = cargarInicial();