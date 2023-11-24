import '../style/estilo.css';

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
            <a href="clasificacion.html"><p>Clasificación</p></a>
            <a href="tuspilotos.html"><p>Tus pilotos</p></a>
            <a href="pilotos.html"><p>Pilotos</p></a>
            <a href="administracion.html"><p>Administración</p></a>
            <a href="perfil.html" class = "iconoPerfil"><img src = "../imagenes/iconos/icono_perfil.png"></a>
            <button id = "btnOrientacion" onclick = "cambiarOrientacion()">Cambiar Orientación</button>
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
}
