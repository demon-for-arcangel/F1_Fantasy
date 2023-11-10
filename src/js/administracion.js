import { pilotos, grandesPremios } from './objetos.js'; // Importa los objetos necesarios

document.getElementById('lanzarCarrera').addEventListener('click', lanzarCarrera);

function lanzarCarrera() {
    // 1. Actualiza el objeto "carrera" para indicar que ha sido disputado
    grandesPremios.disputado = true;

    // 2. Actualiza la clasificación de pilotos
    actualizarClasificacionPilotos();

    // 3. Actualiza las noticias en la ventana de inicio
    actualizarNoticias();

    // Muestra un mensaje o realiza otras acciones si es necesario
    alert('La carrera ha sido lanzada. Actualizaciones realizadas.');
}

function actualizarClasificacionPilotos() {
    // Implementa la lógica necesaria para actualizar la clasificación de pilotos
    // Puedes acceder a la información de la próxima carrera desde el localStorage
    const proximaCarrera = JSON.parse(localStorage.getItem('proximaCarrera')) || {};

    // Ejemplo de lógica: Incrementa la puntuación de los pilotos participantes en la carrera
    // Puedes ajustar esto según tu lógica específica
    pilotos.forEach((piloto) => {
        if (proximaCarrera.pilotos.includes(piloto.id)) {
            piloto.puntuacion += 5; // Ajusta la puntuación según tu lógica
        }
    });

    // Puedes ordenar la lista de pilotos si es necesario
    pilotos.sort((a, b) => b.puntuacion - a.puntuacion);
}

function actualizarNoticias() {
    noticias.push({ titulo: 'Nueva noticia', contenido: 'Descripción de la noticia' });

    console.log("Noticias actualizadas, noticias")
}