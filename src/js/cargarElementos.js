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
        </header>
    `;
    //<img src="../imagenes/fotos/cabecera.jpg" alt="Imagen Vertical" id="imagenVertical" class="imagen-vertical">

}

function cargarPiePagina(){
    document.getElementById("piePagina").innerHTML = 
    `
    <footer>
        <img src = "../imagenes/f1_logo.svg">
        <p>Política de Privadidad</p>
        <p>Subcripción</p>
        <p>Terminos de Usuario</p>
        <p>Cookies</p>
        <p>© 2023 - 2024 Marina and Ismael</p>
    </footer>
    `;
}

function cambiarOrientacion(){
    const cabecera = document.querySelector('.cabeceraOrientacion');
    cabecera.classList.toggle('orientacion-vertical');

    const boton = document.getElementById('botonOrientacion');
    boton.style.width = 'auto'; // Restaura el ancho automático
}