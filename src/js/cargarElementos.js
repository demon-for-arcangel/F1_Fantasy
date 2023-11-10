function cargarCabecera() {
    document.getElementById("cabecera").innerHTML = 
    `
        <header>
            <img src="../imagenes/f1_logo.svg">
        </header>
    `;
}

function cargarCabecera2() {
    document.getElementById("cabecera2").innerHTML =
        `
        <header class = "cabeceraOrientacion">
            <a href="inicio.html" class = "logo"><img src="../imagenes/f1_logo.svg"></a>
            <a href="clasificación.html"><p>Clasificación</p></a>
            <a href="tuspilotos.html"><p>Tus pilotos</p></a>
            <a href="pilotos.html"><p>Pilotos</p></a>
            <a href="administración.html"><p>Administración</p></a>
            <a href="perfil.html" class = "iconoPerfil"><img src = "../imagenes/iconos/icono_perfil.png"></a>
            <button id = "btnOrientacion" onclick = "cambiarOrientacion()">Cambiar Orientación</button>
            <img src="../imagenes/fotos/cabecera1.png" alt="Imagen Vertical" id="imagenVertical" class="imagen-vertical">
        </header>
    `;

}

function cargarPiePagina(){
    document.getElementById("piePagina").innerHTML = 
    `
    <footer>
        <img src = "../imagenes/f1_logo.svg">
        <p>Política de Privacidad</p>
        <p>Subcripción</p>
        <p>Terminos de Usuario</p>
        <p>Cookies</p>
        <p>© 2023 - 2024 Marina and Ismael</p>
    </footer>
    `;
}

function cambiarOrientacion() {
    const cabecera = document.querySelector('.cabeceraOrientacion');
    cabecera.classList.toggle('orientacion-vertical');
    cabecera.classList.toggle('color-alternativo'); // Agrega o quita la clase para cambiar el color

    const imagenVertical = document.getElementById('imagenVertical');
    const imagenDerecha = document.getElementById('imagenDerecha');

    // Verificar la orientación actual y mostrar/ocultar las imágenes apropiadas
    if (cabecera.classList.contains('orientacion-vertical')) {
        imagenVertical.style.display = 'block'; // Mostrar la imagen vertical
        imagenDerecha.style.display = 'none';  // Ocultar la imagen a la derecha
    } else {
        imagenVertical.style.display = 'none';  // Ocultar la imagen vertical
        imagenDerecha.style.display = 'block';  // Mostrar la imagen a la derecha
    }

    const boton = document.getElementById('btnOrientacion');
    boton.style.width = 'auto'; // Restaura el ancho automático
}