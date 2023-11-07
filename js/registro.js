function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var contrasena = document.getElementById("contrasena").value;
    var verificacionContrasena = document.getElementById("verificacionContrasena").value;
    var correo = document.getElementById("correo").value;
    var nick = document.getElementById("nick").value;

    var nombreRegExp = /^[A-Za-z]{2,20}$/;
    var apellidosRegExp = /^[A-Za-z]{2,30}$/;
    var contrasenaRegExp = /^[A-Za-z0-9*#$]{6,12}$/;
    var correoRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var nickRegExp = /^[A-Za-z_]{4,10}$/;

    var errores = [];

    var errorNombre = document.getElementById("errorNombre");
    if (!nombreRegExp.test(nombre)) {
        errores.push("El campo Nombre tiene que tener entre 2 y 20 caracteres.");
        errorNombre.textContent = "El campo Nombre tiene que tener entre 2 y 20 caracteres.";
    } else {
        errorNombre.textContent = "";
    }

    var errorApellidos = document.getElementById("errorApellidos");
    if (!apellidosRegExp.test(apellidos)) {
        errores.push("El campo Apellidos tiene que tener entre 2 y 30 caracteres.");
        errorApellidos.textContent = "El campo Apellidos tiene que tener entre 2 y 30 caracteres.";
    } else {
        errorApellidos.textContent = "";
    }

    var errorContrasena = document.getElementById("errorContrasena");
    if (!contrasenaRegExp.test(contrasena)) {
        errores.push("El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.");
        errorContrasena.textContent = "El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.";
    } else {
        errorContrasena.textContent = "";
    }

    var errorVerificacionContrasena = document.getElementById("errorVerificacionContrasena");
    if (contrasena !== verificacionContrasena) {
        errores.push("La verificación de contraseña no coincide con la contraseña.");
        errorVerificacionContrasena.textContent = "La verificación de contraseña no coincide con la contraseña.";
    } else {
        errorVerificacionContrasena.textContent = "";
    }

    var errorCorreo = document.getElementById("errorCorreo");
    if (!correoRegExp.test(correo)) {
        errores.push("Asegúrate de que no haya caracteres especiales incorrectos y que el dominio tenga al menos dos letras en su extensión.");
        errorCorreo.textContent = "Asegúrate de que no haya caracteres especiales incorrectos y que el dominio tenga al menos dos letras en su extensión.";
    } else {
        errorCorreo.textContent = "";
    }

    var errorNick = document.getElementById("errorNick");
    if (!nickRegExp.test(nick)) {
        errores.push("El campo Nick debe tener entre 4 y 10 caracteres y no puede contener caracteres especiales salvo (_ .)");
        errorNick.textContent = "El campo Nick debe tener entre 4 y 10 caracteres y no puede contener caracteres especiales salvo (_ .)";
    } else {
        errorNick.textContent = "";
    }

    if (errores.length === 0) {
        var usuario = {
            nombre: nombre,
            apellidos: apellidos,
            contrasena: contrasena,
            correo: correo,
            nick: nick
        };


        localStorage.setItem('usuario', JSON.stringify(usuario));

        window.location.href = "inicio.html";
    }
}