export const usuario = {
    nombre: "Marina",
    apellido1: "Laguna",
    apellido2: "Valdepeñas",
    correo: "marinalaguna2004@gmail.com",
    contrasena: "admin123"
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

export function validarCorreo(){
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