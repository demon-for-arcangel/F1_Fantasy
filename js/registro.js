
function validarRegistro() {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var contrasena = document.getElementById("contrasena").value;
    var verificacionContrasena = document.getElementById("verificacionContrasena").value;
    var correo = document.getElementById("correo").value;
    var nick = document.getElementById("nick").value;


    var nombreRegExp = /^[A-Za-z]{2,20}$/;
    var apellidosRegExp = /^[A-Za-z]{2,30}$/;
    var contrasenaRegExp = /^[\w*#$]{6,12}$/;
    var correoRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var nickRegExp = /^[A-Za-z_]{4,10}$/;

    var errores = [];

    if (!nombreRegExp.test(nombre)) {
        errores.push("El campo Nombre tiene que tener entre 2 y 20 caracteres.");   
    }

    if (!apellidosRegExp.test(apellidos)) {
        errores.push("El campo Apellidos tiene que tener entre 2 y 30 caracteres.");
    }

    if (!contrasenaRegExp.test(contrasena)) {
        errores.push("El campo Contrasena tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.");
    }

    if (contrasena !== verificacionContrasena) {
        errores.push("La verificación de contrasena no coincide con la contrasena.");
    }

    if (!correoRegExp.test(correo)) {
        errores.push("El campo Correo es inválido.");
    }

    if (!nickRegExp.test(nick)) {
        errores.push("El campo Nick debe tener entre 4 y 10 caracteres y no puede contener caraceres especiales salvo (_ .)");
    }

    if (errores.length > 0) {
        alert("Se encontraron los siguientes errores:\n" + errores.join("\n"));
    } else {
        alert("Registro exitoso. Redirigiendo a la página de inicio de sesión.");
    }
}


function validarContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var mensajeError = document.getElementById("mensajeErrorContrasena");
 
    var contrasenaRegExp = /^[\w*#$]{6,12}$/;

    if (contrasenaRegExp.test(contrasena)) {
        mensajeError.textContent = "";
    } else {
        mensajeError.textContent = "La contrasena es inválida. Debe contener de 6 a 12 caracteres y puede incluir solo *, #, $ y caracteres alfanuméricos.";
    }
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
