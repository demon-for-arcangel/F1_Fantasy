let usuario = {
    nombre: "Marina",
    apellido1: "Laguna",
    apellido2: "Valdepeñas",
    correo: "marinalaguna2004@gmail.com",
    contrasena: "admin123"
}

function validarInicio(){
    var correo = document.querySelector('input[type="email]').value
    var contrasena = document.querySelector('input[type = "password"]').value
    var mensaje = validarEmail()

    if (mensaje === ''){
        if (validarEmail.trim() == '' || contrasena.trim() == ''){
            mensaje += 'El correo y la contraseña no pueden estar vacíos.'
            return mensaje
        }
    }else{

    }
}