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
        <header>
            <a href="inicio.html" class = "logo"><img src="../imagenes/f1_logo.svg"></a>
            <a href="clasificación.html"><p>Clasificación</p></a>
            <a href="tuspilotos.html"><p>Tus pilotos</p></a>
            <a href="pilotos.html"><p>Pilotos</p></a>
            <a href="administración.html"><p>Administración</p></a>
            <a href="perfil.html" class = "iconoPerfil"><img src = "../imagenes/iconos/icono_perfil.png"></a>
        </header>
    `;
}

function cargarPiePagina(){
    document.getElementById("piePagina").innerHTML = 
    `
    <footer>
        <img src = "../imagenes/f1_logo.svg">
        <p>Privacy Policy</p>
        <p>Subscription</p>
        <p>Terms of Use</p>
        <p>FAQs</p>
        <p>Cookie Preferences</p>
        <p>© 2023 - 2024 Marina and Ismael</p>
    </footer>
    `;
}

function btnInicioSesion(){
    window.location.href = "../index.html"
}

function btnRegistrar(){
    window.location.href = "../registro.html"
}

function btnSignIn(){
    window.location.href = "../inicio.html"
}

function validarInicio(){
    var correo = document.querySelector('input[type="email]').value
    var contrasena = document.querySelector('input[type = "password"]').value
    var mensaje = validarCorreo()

    if (mensaje === ''){
        if (correo.trim() == '' || contrasena.trim() == ''){
            mensaje += 'El correo y la contraseña no pueden estar vacíos.'
            return mensaje
        }
        if (contrasena.length < 8){
            mensaje += 'La contraseña debe ser de 8 caracteres como mínimo.'
            return mensaje
        }
    }
    return mensaje
}

function validarCorreo(){
    var correo = document.querySelector('input[type="email').value
    var mensaje = ''

    if (correo.includes('@')){
        var partes = correo.split('@')

        if (partes.length > 2){
            mensaje = 'No puede contener más de un @'
        }
    }

    if (!correo.includes('@')){
        mensaje += 'No incluye @'
    }

    if (correo.charAt(0) == '@'){
        mensaje += '\nNo puede empezar por @'
    }

    for (let i = email.length - 3; i < email.length; i++){
        if (email.charAt(i) == '@'){
            mensaje += '\nNo puede tener @ en las tres últimas letras'
        }
    }
    return mensaje;
}