// js para pilotos.html
import { pilotos } from "./objetos.js";
import '../style/estilo.css';

document.addEventListener('DOMContentLoaded', function(){
  const pilotosContainer = document.getElementById("tusPilotos");
  const mensajeElement = document.getElementById("mensaje");
  const desplegable = document.getElementById("pilotoDesplegable");

  function mostrarPilotosSeleccionados() {
    pilotosContainer.innerHTML = "";

    const pilotoTitularId = JSON.parse(localStorage.getItem("pilotoTitular"));
    const pilotoSuplenteId = JSON.parse(localStorage.getItem("pilotoSuplente"));

    const pilotoTitular = pilotos.find((piloto) => piloto.id === pilotoTitularId);
    const pilotoSuplente = pilotos.find((piloto) => piloto.id === pilotoSuplenteId);

    if (pilotoTitular) {
      mostrarPiloto(pilotoTitular, "Titular");
    }

    if (pilotoSuplente) {
      mostrarPiloto(pilotoSuplente, "Suplente");
    }
  }

  function mostrarPiloto(piloto, rol) {
    const pilotoDiv = document.createElement("div");
    pilotoDiv.innerHTML = `
      <img src="${piloto.foto}" alt="${piloto.nombre}">
      <p>${piloto.nombre} ${piloto.apellidos} - ${rol}</p>
    `;
    pilotosContainer.appendChild(pilotoDiv);
  }

  function cargarDesplegable() {
    desplegable.innerHTML = "";

    const pilotoTitularId = JSON.parse(localStorage.getItem("pilotoTitular"));
    const pilotoSuplenteId = JSON.parse(localStorage.getItem("pilotoSuplente"));

    const pilotoTitular = pilotos.find((piloto) => piloto.id === pilotoTitularId);
    const pilotoSuplente = pilotos.find((piloto) => piloto.id === pilotoSuplenteId);

    if (pilotoTitular) {
      agregarOpcionDesplegable(pilotoTitular);
    }

    if (pilotoSuplente) {
      agregarOpcionDesplegable(pilotoSuplente);
    }
  }


  function agregarOpcionDesplegable(piloto) {
    const opcion = document.createElement("option");
    opcion.value = piloto.id;
    opcion.textContent = piloto.nombre;
    desplegable.appendChild(opcion);
  }

  mostrarPilotosSeleccionados();
  cargarDesplegable();
  asignarEventoClick();

  function asignarEventoClick(){
    let botonAsignarRol = document.getElementById('asignarRol');
    botonAsignarRol.addEventListener('click', asignarRol);
  }


  function asignarRol() {
    let pilotoId = parseInt(document.getElementById("pilotoDesplegable").value);
    let pilotoSeleccionado = pilotos.find((piloto) => piloto.id === pilotoId);

    if (pilotoSeleccionado) {
      if (pilotoSeleccionado.rol === "Titular") {
        mensajeElement.textContent = `El piloto ${pilotoSeleccionado.nombre} ya es el titular.`;
        setTimeout(function(){
          mensajeElement.textContent = "";
        }, 3500);
      } else {
        let otroPiloto = pilotos.find((piloto) => piloto.id == pilotoId);

        if (otroPiloto) {

          pilotoSeleccionado.rol = "Titular";
          otroPiloto.rol = "Suplente";

          mostrarPiloto(pilotoSeleccionado, "Titular");
          mensajeElement.textContent = `Se ha asignado el rol de titular a ${pilotoSeleccionado.nombre}.`;
          setTimeout(function(){
            mensajeElement.textContent = "";
          }, 3500);
        } else {
          mensajeElement.textContent = "Error al asignar roles. No se encontró al otro piloto.";
          setTimeout(function(){
            mensajeElement.textContent = "";
          }, 3500);
        }
      }
    } else {
      mensajeElement.textContent = "Error al asignar roles. No se encontró el piloto seleccionado.";
      setTimeout(function(){
        mensajeElement.textContent = "";
      }, 3500);
    }
  }
})
