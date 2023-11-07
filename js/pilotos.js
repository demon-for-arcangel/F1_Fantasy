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
  const pilotoTitularSelect = document.getElementById("piloto-titular");
  
  // Función para mostrar tus dos pilotos con fotos.
  function mostrarTusPilotos() {
    const piloto1 = pilotos[0];
    const piloto2 = pilotos[1];
  
    // Crear elementos de imagen para tus pilotos
    const img1 = document.createElement("img");
    img1.src = `img/${piloto1}.jpg`; // Suponiendo que las imágenes se llaman igual que los pilotos
    const img2 = document.createElement("img");
    img2.src = `img/${piloto2}.jpg`;
  
    pilotosContainer.innerHTML = `
      <div>
        <img src="${img1.src}" alt="${piloto1}">
        <div>${piloto1} - Titular</div>
      </div>
      <div>
        <img src="${img2.src}" alt="${piloto2}">
        <div>${piloto2} - Suplente</div>
      </div>
    `;
  }
  
  // Función para llenar el desplegable con los nombres de los pilotos
  function llenarDesplegable() {
    pilotoTitularSelect.innerHTML = '<option value="-1">Elije un piloto</option>';
    pilotos.forEach((piloto, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.text = piloto;
      pilotoTitularSelect.appendChild(option);
    });
  }
  
  // Función para asignar un piloto como titular
  function asignarTitular() {
    const selectedPilotoIndex = pilotoTitularSelect.value;
    if (selectedPilotoIndex !== "-1") {
      // Actualizar el estado de los pilotos en tu aplicación
      // Aquí debes implementar la lógica para asignar el piloto titular en tu aplicación.
      // Esto puede requerir una llamada a una función o una actualización en la base de datos, según tu configuración.
      // Por ahora, solo actualizaremos el mensaje en la interfaz de usuario.
      const selectedPiloto = pilotos[selectedPilotoIndex];
      pilotosContainer.innerHTML = `
        <div>
          <img src="img/${selectedPiloto}.jpg" alt="${selectedPiloto}">
          <div>${selectedPiloto} - Titular</div>
        </div>
        <div>
          <img src="img/${pilotos[1]}.jpg" alt="${pilotos[1]}">
          <div>${pilotos[1]} - Suplente</div>
        </div>
      `;
    }
  }
  
  // Llama a las funciones iniciales para mostrar tus pilotos y llenar el desplegable.
  mostrarTusPilotos();
  llenarDesplegable();