//js para pilotos.html
import { usuario, pilotos } from "./inicio.js";

const pilotosContainer = document.getElementById("tus-pilotos");
const rolSelect = document.getElementById("piloto-rol");
const mensajeElement = document.getElementById("mensaje");

function mostrarPilotos() {
  pilotosContainer.innerHTML = ""; 

  pilotos.forEach((piloto) => {
    const pilotoDiv = document.createElement("div");
    pilotoDiv.innerHTML = `
      <img src="${piloto.foto}" alt="${piloto.nombre}">
      <p>${piloto.nombre} - ${piloto.rol ? piloto.rol : "Sin Rol"}</p>
    `;
    pilotosContainer.appendChild(pilotoDiv);
  });
}

function actualizarDesplegable() {
  const desplegable = document.getElementById("piloto-desplegable");

  desplegable.innerHTML = "";

  pilotos.forEach((piloto) => {
    const opcion = document.createElement("option");
    opcion.value = piloto.id;
    opcion.textContent = piloto.nombre;
    desplegable.appendChild(opcion);
  });
}

function asignarRol() {
  const pilotoId = parseInt(document.getElementById("piloto-desplegable").value);
  const pilotoSeleccionado = pilotos.find((piloto) => piloto.id === pilotoId);

  if (pilotoSeleccionado) {

    if (pilotoSeleccionado.rol === "Titular") {
      mensajeElement.textContent = `El piloto ${pilotoSeleccionado.nombre} ya es el titular.`;
    } else {

      const otroPiloto = pilotos.find((piloto) => piloto.id !== pilotoId);

      if (otroPiloto) {

        pilotoSeleccionado.rol = "Titular";

        otroPiloto.rol = "Suplente";


        mostrarPilotos();
        mensajeElement.textContent = `Se ha asignado el rol de titular a ${pilotoSeleccionado.nombre}.`;
      } else {
        mensajeElement.textContent = "Error al asignar roles. No se encontró al otro piloto.";
      }
    }
  } else {
    mensajeElement.textContent = "Error al asignar roles. No se encontró el piloto seleccionado.";
  }
}

mostrarPilotos();
actualizarDesplegable();
