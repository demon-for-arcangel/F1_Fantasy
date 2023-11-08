//js para pilotos.html
const pilotos = [
  "Alexander Albon",
  "Carlos Sainz",
  "Charles Leclerc",
  "Sergio Perez",
  "Valtteri Bottas",
  "Yuki Tsunoda",
  "Esteban Ocon",
  "Fernando Alonso",
  "George Russell",
  "Guanyu Zhou",
  "Kevin Magnussen",
  "Lance Stroll",
  "Lando Norris",
  "Lewis Hamilton",
  "Logan Sargeant",
  "Max Verstappen",
  "Nico Hulkenberg",
  "Nyck de Vries",
  "Oscar Piastri",
  "Pierre Gasly"
];

const pilotosContainer = document.getElementById("tus-pilotos");
const rolSelect = document.getElementById("piloto-rol");
const mensajeElement = document.getElementById("mensaje");

// Función para seleccionar aleatoriamente 2 pilotos.
function seleccionarPilotosAleatorios() {
  const piloto1Index = Math.floor(Math.random() * pilotos.length);
  let piloto2Index = Math.floor(Math.random() * pilotos.length);


  while (piloto2Index === piloto1Index) {
    piloto2Index = Math.floor(Math.random() * pilotos.length);
  }

  return [pilotos[piloto1Index], pilotos[piloto2Index]];
}


function mostrarPilotosAleatorios() {
  const [piloto1, piloto2] = seleccionarPilotosAleatorios();

  pilotosContainer.innerHTML = `
    <div>${piloto1} - Sin Rol</div>
    <div>${piloto2} - Sin Rol</div>
  `;
}


function asignarRol() {
  const rol = rolSelect.value;
  const mensaje = document.getElementById("mensaje");

  const divPiloto1 = pilotosContainer.querySelector("div:first-child");
  const divPiloto2 = pilotosContainer.querySelector("div:last-child");

  if (rol === "titular") {
    if (divPiloto1.textContent.includes("Titular")) {
      mensaje.textContent = `El piloto ${divPiloto1.textContent.split(" - ")[0]} es ahora el titular para las carreras.`;
    } else {
      divPiloto1.textContent = divPiloto1.textContent.replace("Sin Rol", "Titular");
      divPiloto2.textContent = divPiloto2.textContent.replace("Titular", "Sin Rol");
    }
  } else if (rol === "suplente") {
    if (divPiloto2.textContent.includes("Titular")) {
      mensaje.textContent = `El piloto ${divPiloto2.textContent.split(" - ")[0]} es ahora el titular para las carreras.`;
    } else {
      divPiloto2.textContent = divPiloto2.textContent.replace("Sin Rol", "Titular");
      divPiloto1.textContent = divPiloto1.textContent.replace("Titular", "Sin Rol");
    }
  }
}

mostrarPilotosAleatorios();
